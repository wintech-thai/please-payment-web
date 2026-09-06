export const dynamic = 'force-dynamic'

const ADMIN_DOCS_URL = (process.env.ADMIN_DOCS_URL || 'https://admin-dev.please-payment.com').replace(/\/$/, '')

export default function DocumentPage() {
  return (
    <iframe
      src={`${ADMIN_DOCS_URL}/documents/overview`}
      title="Please Payment API Docs"
      className="block w-full h-screen border-0"
    />
  )
}
