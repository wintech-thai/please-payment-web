export const dynamic = 'force-dynamic'

import { NavBar } from '@/components/NavBar'
import { SiteFooter } from '@/components/SiteFooter'
import { ContactUsForm } from '@/components/ContactUsForm'

// Turnstile's site key is public by design (safe to expose client-side), but
// still read as a plain runtime env var (not NEXT_PUBLIC_) so dev/prod can
// swap it without a rebuild — see the NEXT_PUBLIC_API_URL gotcha in /document.
export default function ContactUsPage() {
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY || ''

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950">
      <div className="fixed top-20 right-10 w-96 h-96 bg-primary-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl pointer-events-none" />

      <NavBar />

      <div className="container mx-auto px-4 py-16 mt-10 relative z-10">
        <div className="max-w-2xl mx-auto">
          <ContactUsForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
