import type { Metadata, Viewport } from 'next'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Please Payment',
  description: 'Please Payment — non-custodial QR payment gateway',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
