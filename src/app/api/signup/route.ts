import { NextRequest, NextResponse } from 'next/server'
import { deriveSiblingDomain } from '@/lib/domain'

// Plain (non-NEXT_PUBLIC_) env vars, read fresh per request — never baked in
// at build time. See the NEXT_PUBLIC_API_URL gotcha in /document for why.
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || ''
const BACKEND_URL = (process.env.BACKEND_URL || '').replace(/\/$/, '')
const PP_API_KEY = process.env.PP_API_KEY || ''

async function verifyTurnstile(token: string, remoteIp: string | null) {
  const body = new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token })
  if (remoteIp) body.set('remoteip', remoteIp)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  const data = await res.json()
  return data.success === true
}

export async function POST(req: NextRequest) {
  let payload: { email?: string; firstName?: string; lastName?: string; phone?: string; lang?: string; turnstileToken?: string }
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  const { email, firstName, lastName, phone, lang, turnstileToken } = payload
  if (!email) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  if (!turnstileToken || !TURNSTILE_SECRET_KEY) {
    return NextResponse.json({ error: 'verification' }, { status: 400 })
  }

  const remoteIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null
  const verified = await verifyTurnstile(turnstileToken, remoteIp).catch(() => false)
  if (!verified) {
    return NextResponse.json({ error: 'verification' }, { status: 400 })
  }

  // x093 6.ii.2a : Admin Domain ถูก fix ไว้ ไม่ให้ client เปลี่ยนได้ — derive จาก hostname ของเว็บนี้เองเสมอ
  const siteHost = req.headers.get('host') || 'please-payment.com'
  const adminDomain = `https://${deriveSiblingDomain(siteHost, 'admin')}`

  if (!BACKEND_URL || !PP_API_KEY) {
    return NextResponse.json({ error: 'server_misconfigured' }, { status: 500 })
  }

  try {
    // x093 6b : API key auth convention ของ onix-api คือ HTTP Basic (username "api", password=apiKey) — ดู examples/Admin/utils.rb
    const basicAuth = Buffer.from(`api:${PP_API_KEY}`).toString('base64')
    const res = await fetch(`${BACKEND_URL}/admin-api/AdminServiceRequest/org/global/action/CreatePleasePaymentRegistrationLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${basicAuth}`,
      },
      body: JSON.stringify({
        Email: email,
        FirstName: firstName || undefined,
        LastName: lastName || undefined,
        Phone: phone || undefined,
        AdminDomain: adminDomain,
        Lang: lang || undefined,
      }),
    })

    const rawBody = await res.text()
    const data = (() => { try { return JSON.parse(rawBody) } catch { return {} } })()
    const status = data?.status ?? data?.Status

    if (status !== 'OK') {
      // Log the real backend response to help diagnose the live dev/prod signup error next time
      console.error('signup CreatePleasePaymentRegistrationLink non-OK response', { httpStatus: res.status, body: rawBody?.slice(0, 500) })
      return NextResponse.json({ error: 'api_error', status, description: data?.description ?? data?.Description }, { status: 400 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('signup request failed', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 500 })
  }
}
