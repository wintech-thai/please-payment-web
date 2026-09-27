export const dynamic = 'force-dynamic'

// NEXT_PUBLIC_API_URL is baked in as "/api/proxy" at build time (not a real
// domain), so it can't be used to derive this — ADMIN_DOCS_URL must be set
// explicitly per environment.
const ADMIN_DOCS_URL = (process.env.ADMIN_DOCS_URL || 'https://admin-dev.please-payment.com').replace(/\/$/, '')

export default function DocumentPage() {
  return (
    <iframe
      src={`${ADMIN_DOCS_URL}/documents`}
      title="Please Payment API Docs"
      className="block w-full h-screen border-0"
    />
  )
}
