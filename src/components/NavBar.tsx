'use client'

import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { LangToggle } from './LangToggle'

const navAnchors = ['/#how-it-works', '/#diagram', '/#use-cases', '/#faq']

export function NavBar() {
  const { t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 shrink-0"
        >
          <img src="/logo.svg" alt="Please Payment" width={36} height={36} className="rounded-lg" />
          <span className="text-xl font-bold text-white">
            Please<span className="text-primary-400"> Payment</span>
          </span>
        </motion.button>

        <div className="hidden md:flex items-center justify-between flex-1 ml-8">
          <div className="flex items-center gap-0.5">
            {t.footer.links.map((link, i) => (
              <a
                key={i}
                href={navAnchors[i]}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-700">|</span>
            <a
              href="/privacy"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                pathname === '/privacy'
                  ? 'border border-primary-500/60 bg-primary-500/10 text-primary-300'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              Privacy
            </a>
            <LangToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3 ml-auto">
          <LangToggle />
        </div>
      </div>
    </nav>
  )
}
