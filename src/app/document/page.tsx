export const dynamic = 'force-dynamic'

// NEXT_PUBLIC_API_URL is already set correctly per environment (api-dev.* in
// dev, api.* in prod) — deriving from it means this self-corrects on deploy
// instead of silently defaulting to dev if ADMIN_DOCS_URL is never set.
function deriveAdminDocsUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api-dev.please-payment.com'
  return apiUrl.replace('https://api', 'https://admin')
}

const ADMIN_DOCS_URL = (process.env.ADMIN_DOCS_URL || deriveAdminDocsUrl()).replace(/\/$/, '')

export default function DocumentPage() {
  return (
    <iframe
      src={`${ADMIN_DOCS_URL}/documents`}
      title="Please Payment API Docs"
      className="block w-full h-screen border-0"
    />
  )
}
