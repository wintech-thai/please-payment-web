'use client'

import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const navAnchors = ['/#how-it-works', '/#diagram', '/#use-cases', '/#faq']

const contactInfo = [
  { icon: Mail, text: 'contact@dev-hubs.com', href: 'mailto:contact@dev-hubs.com' },
  { icon: Phone, text: '66(0) 94-249-4880', href: 'tel:+66942494880' },
  {
    icon: MapPin,
    text: 'Dev Hub Co., Ltd.',
    text2: '55 Sutthisan Winitchai Road, Din Daeng, Bangkok 10400, Thailand',
    href: '#',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function SiteFooter() {
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
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleLogoClick}
              className="flex items-center gap-2.5"
            >
              <img src="/logo.svg" alt="Please Payment" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-white">
                Please<span className="text-primary-400"> Payment</span>
              </span>
            </motion.button>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{t.footer.description}</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-3">
            <h3 className="text-sm font-semibold text-white">{t.footer.linksTitle}</h3>
            <ul className="space-y-2">
              {t.footer.links.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
                  <a href={navAnchors[i]}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div id="contact" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-3">
            <h3 className="text-sm font-semibold text-white">{t.footer.contactTitle}</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, i) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={i}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-slate-400 hover:text-primary-400 transition-colors group"
                  >
                    <Icon className="w-4 h-4 group-hover:text-primary-400 shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {contact.text}
                      {'text2' in contact && contact.text2 && <><br />{contact.text2}</>}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-slate-500 hover:text-primary-400 text-xs transition-colors">{t.footer.legalLinks.privacy}</a>
            <span className="text-slate-700 text-xs">·</span>
            <a href="/terms" className="text-slate-500 hover:text-primary-400 text-xs transition-colors">{t.footer.legalLinks.terms}</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary-600 via-amber-500 to-primary-600" />
    </footer>
  )
}
