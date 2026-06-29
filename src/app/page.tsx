'use client'

import { motion } from 'framer-motion'
import { QrCode, Landmark, Webhook, ShieldCheck, ShoppingCart, PackageCheck, Ticket, Store, User, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

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
import { useLanguage } from '@/lib/i18n/LanguageContext'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const stepIcons = [QrCode, ShoppingCart, Landmark, Webhook]
const caseIcons = [PackageCheck, ShoppingCart, Store, Ticket]

function LangToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
      aria-label="Toggle language"
      className="flex items-center gap-1 rounded-lg border border-slate-600/60 px-3 py-1.5 text-xs font-semibold transition-all hover:border-primary-500/50 hover:bg-slate-700/60"
    >
      <span className={lang === 'en' ? 'text-white' : 'text-slate-500'}>EN</span>
      <span className="text-slate-600 mx-0.5">|</span>
      <span className={lang === 'th' ? 'text-white' : 'text-slate-500'}>TH</span>
    </button>
  )
}

const navAnchors = ['#how-it-works', '#diagram', '#use-cases']

function NavBar() {
  const { t } = useLanguage()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
            <LangToggle />
          </div>
        </div>

        {/* Mobile: lang toggle still visible when menu links are hidden */}
        <div className="md:hidden flex items-center gap-3 ml-auto">
          <LangToggle />
        </div>
      </div>
    </nav>
  )
}

function FlowStep({ icon, label, desc, delay }: { icon: React.ReactNode; label: string; desc: string; delay: number }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="flex flex-col items-center text-center gap-3 max-w-[200px] bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/70 transition-all"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white text-sm">{label}</p>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

function FlowBox({ icon, label, tone = 'default' }: { icon: React.ReactNode; label: string; tone?: 'default' | 'warning' | 'brand' }) {
  const toneClasses = {
    default: 'bg-slate-800/60 border-slate-700/50 text-white',
    warning: 'bg-amber-500/10 border-amber-500/40 text-amber-300',
    brand: 'bg-gradient-to-br from-primary-500 to-amber-500 border-transparent text-white',
  }
  return (
    <div className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl border ${toneClasses[tone]} min-w-[96px]`}>
      {icon}
      <span className="text-xs font-semibold text-center leading-tight">{label}</span>
    </div>
  )
}

function UseCaseCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/70 hover:shadow-xl hover:shadow-slate-950/50 transition-all"
    >
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-amber-500 text-white flex items-center justify-center mb-4 shadow-md">
        {icon}
      </div>
      <h3 className="font-bold text-white mb-1.5">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-slate-950">
      <NavBar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-24 left-4 sm:left-16 w-80 h-80 bg-primary-600 rounded-full blur-3xl opacity-15 animate-pulse" />
          <div className="absolute top-48 right-4 sm:right-16 w-80 h-80 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-mesh opacity-25" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/25 text-primary-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
          >
            {t.hero.headline}{' '}
            <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">
              {t.hero.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.howItWorks.heading}
              <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{t.howItWorks.headingAccent}</span>
            </h2>
            <p className="text-slate-400">{t.howItWorks.subtitle}</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-5">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return <FlowStep key={i} icon={<Icon className="w-6 h-6" />} label={step.label} desc={step.desc} delay={i * 0.1} />
            })}
          </div>
        </div>
      </section>

      {/* Non-custodial explanation */}
      <section className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-amber-500 text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">{t.nonCustodial.heading}</h2>
            <p className="text-slate-400 leading-relaxed">
              {t.nonCustodial.body1}
              <br /><br />
              <strong className="text-white">{t.nonCustodial.bodyStrong}</strong>
              {t.nonCustodial.body2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diagram: money flow comparison */}
      <section id="diagram" className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.diagram.heading}
              <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{t.diagram.headingAccent}</span>
            </h2>
            <p className="text-slate-400">{t.diagram.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional gateway */}
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">{t.diagram.traditionalLabel}</p>
              <div className="flex items-center justify-center gap-2">
                <FlowBox icon={<User className="w-5 h-5" />} label={t.diagram.customer} />
                <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                <FlowBox icon={<Landmark className="w-5 h-5" />} label={t.diagram.middleman} tone="warning" />
                <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                <FlowBox icon={<Store className="w-5 h-5" />} label={t.diagram.merchant} />
              </div>
              <p className="text-center text-xs text-amber-400 mt-5">⚠ {t.diagram.middlemanNote}</p>
            </motion.div>

            {/* Please Payment */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-800/30 border border-primary-500/30 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-6 text-center">{t.diagram.oursLabel}</p>
              <div className="flex items-center justify-center gap-2">
                <FlowBox icon={<User className="w-5 h-5" />} label={t.diagram.customer} />
                <ArrowRight className="w-4 h-4 text-primary-500 shrink-0" />
                <FlowBox icon={<Store className="w-5 h-5" />} label={t.diagram.merchant} tone="brand" />
              </div>
              <div className="flex flex-col items-center mt-5">
                <div className="w-px h-3 bg-primary-500/40" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-medium text-center">
                  <QrCode className="w-3.5 h-3.5 shrink-0" /> Please Payment — {t.diagram.oursNote}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.useCases.heading} <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{t.useCases.headingAccent}</span>
            </h2>
            <p className="text-slate-400">{t.useCases.subtitle}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.useCases.cards.map((card, i) => {
              const Icon = caseIcons[i]
              return <UseCaseCard key={i} icon={<Icon className="w-5 h-5" />} title={card.title} desc={card.desc} delay={i * 0.1} />
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950 border-t border-slate-800">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-3">
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
                        {contact.text2 && <><br />{contact.text2}</>}
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
            className="mt-10 pt-6 border-t border-slate-800 text-center"
          >
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {t.footer.copyright}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary-600 via-amber-500 to-primary-600" />
      </footer>
    </main>
  )
}
