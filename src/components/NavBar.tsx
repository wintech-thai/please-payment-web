'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { deriveSiblingDomain } from '@/lib/domain'
import { LangToggle } from './LangToggle'

const navAnchors = ['/#how-it-works', '/#diagram', '/#use-cases', '/#faq']

function ResourcesDropdown({ pathname }: { pathname: string }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isActive = pathname === '/document' || pathname === '/pitch'

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
          isActive
            ? 'border border-primary-500/60 bg-primary-500/10 text-primary-300'
            : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
        }`}
      >
        {t.nav.resources}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1.5 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden py-1 z-50">
          <a
            href="/document"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 transition-colors"
          >
            {t.nav.document}
          </a>
          <a
            href="/pitch"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 transition-colors"
          >
            {t.nav.slide}
          </a>
        </div>
      )}
    </div>
  )
}

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

  const handleLoginClick = () => {
    if (typeof window === 'undefined') return
    const merchantDomain = deriveSiblingDomain(window.location.hostname, 'merchant')
    window.open(`https://${merchantDomain}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center">
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

        <div className="hidden md:flex items-center justify-between flex-1 ml-12">
          <div className="flex items-center gap-2">
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
            <a
              href="/contact-us"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                pathname === '/contact-us'
                  ? 'border border-primary-500/60 bg-primary-500/10 text-primary-300'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              Contact Us
            </a>
            <ResourcesDropdown pathname={pathname} />
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
            <span className="text-slate-700">|</span>
            <button
              type="button"
              onClick={handleLoginClick}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all"
            >
              {t.nav.login}
            </button>
            <a
              href="/signup"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary-500 hover:bg-primary-400 transition-all"
            >
              {t.nav.signUp}
            </a>
            <LangToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2 ml-auto">
          <a
            href="/signup"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary-500 hover:bg-primary-400 transition-all"
          >
            {t.nav.signUp}
          </a>
          <LangToggle />
        </div>
      </div>
    </nav>
  )
}
