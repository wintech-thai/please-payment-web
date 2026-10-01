import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Plain (non-NEXT_PUBLIC_) env vars, read fresh per request — never baked in
// at build time. See the NEXT_PUBLIC_API_URL gotcha in /document for why.
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || ''
const SMTP_HOST = process.env.SMTP_HOST || 'smtp-relay.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT || '587')
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || ''
const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'contact@dev-hubs.com'

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: NextRequest) {
  let payload: { name?: string; phone?: string; email?: string; topic?: string; message?: string; turnstileToken?: string }
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  const { name, phone, email, topic, message, turnstileToken } = payload
  if (!name || !phone || !email || !topic || !message) {
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

  const fromDomain = req.headers.get('host') || 'please-payment.com'

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, // STARTTLS on port 587
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      // Without this, nodemailer EHLOs with the container's os.hostname()
      // (a dot-less pod name) and Google's SMTP relay rejects it at EHLO
      // with a 421 — confirmed by comparing against onix-v2-jobs' working
      // Net::SMTP call, which explicitly EHLOs as "dev-hubs.com".
      name: 'dev-hubs.com',
    })

    const html = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #0f172a;">New Contact Us message</h2>
        <p style="color: #64748b; font-size: 13px; margin-top: -8px;">Sent from <strong>${escapeHtml(fromDomain)}</strong></p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0; color: #0f172a;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0; color: #0f172a;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0; color: #0f172a;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Topic</td><td style="padding: 8px 0; color: #0f172a;">${escapeHtml(topic)}</td></tr>
        </table>
        <p style="color: #64748b; margin-top: 16px; margin-bottom: 4px;">Message</p>
        <p style="color: #0f172a; white-space: pre-wrap; background: #f1f5f9; border-radius: 8px; padding: 12px;">${escapeHtml(message)}</p>
      </div>
    `

    await transporter.sendMail({
      from: `"${fromDomain}" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[Contact Us] ${topic} — ${name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('contact-us email send failed', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 500 })
  }
}
