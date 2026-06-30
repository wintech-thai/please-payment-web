import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import type { Language } from '@/lib/i18n/translations'
import './globals.css'

export const metadata: Metadata = {
  title: 'Please Payment',
  description: 'Please Payment — non-custodial QR payment gateway',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const stored = (await cookies()).get('please-payment-lang')?.value
  const initialLang: Language = stored === 'en' ? 'en' : 'th'

  return (
    <html lang={initialLang}>
      <body>
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
      </body>
    </html>
  )
}
