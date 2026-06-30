'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { QrCode, Landmark, Webhook, ShieldCheck, ShoppingCart, PackageCheck, Ticket, Store, User, ArrowRight, Percent, Wallet, Hash, MessageCircleQuestion, X, Check, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { NavBar } from '@/components/NavBar'
import { SiteFooter } from '@/components/SiteFooter'
import ParticleBackground from '@/components/ParticleBackground'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const stepIcons = [QrCode, ShoppingCart, Landmark, Webhook]
const caseIcons = [PackageCheck, ShoppingCart, Store, Ticket]
const pricingIcons = [Percent, Wallet, Hash]


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

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900 shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-slate-900/60 text-xs text-slate-400 text-center truncate">
          {url}
        </div>
      </div>
      <div className="bg-gray-50">{children}</div>
    </div>
  )
}

function OverviewMockup() {
  const kpis = [
    { label: 'Total Pay-In', value: '12,480.00', note: '42 transactions', from: 'from-emerald-500', to: 'to-emerald-600' },
    { label: 'Total Pay-Out', value: '8,250.00', note: '30 transactions', from: 'from-rose-500', to: 'to-rose-600' },
    { label: 'Total Fee', value: '186.40', note: '', from: 'from-orange-400', to: 'to-amber-500' },
    { label: 'Net Flow', value: '+4,230.00', note: '', from: 'from-rose-400', to: 'to-pink-500' },
  ]
  const bars = [40, 65, 30, 80, 45, 60, 35, 70, 50, 38, 55, 62]
  return (
    <div className="p-5 text-left">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-gray-900">Overview</h4>
          <p className="text-xs text-gray-400">System summary</p>
        </div>
        <span className="text-xs text-gray-400 border border-gray-200 rounded-lg px-3 py-1.5 bg-white">Last 30 days</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {kpis.map((kpi, i) => (
          <div key={i} className={`rounded-xl p-4 text-white bg-gradient-to-br ${kpi.from} ${kpi.to}`}>
            <p className="text-[10px] font-semibold uppercase opacity-80">{kpi.label}</p>
            <p className="text-xl font-bold mt-1">{kpi.value}</p>
            {kpi.note && <p className="text-[10px] opacity-70 mt-1">{kpi.note}</p>}
          </div>
        ))}
      </div>
      <div className="rounded-xl p-4 text-white bg-gradient-to-br from-teal-500 to-cyan-600 mb-4">
        <p className="text-[10px] font-semibold uppercase opacity-80">Current Balance</p>
        <p className="text-2xl font-bold mt-1">9,845.60</p>
      </div>
      <div className="rounded-xl border border-gray-100 p-4 bg-white">
        <p className="text-xs font-bold text-gray-700 mb-3">Daily Transaction Summary</p>
        <div className="flex items-end gap-2 h-20">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-emerald-400 to-emerald-300" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PayInRequestsMockup() {
  const rows = [
    { date: '19/06/2026', amount: '12.00', bank: 'KTB · xxx-x-x4157', status: 'Paid' },
    { date: '19/06/2026', amount: '230.00', bank: 'KTB · xxx-x-x4157', status: 'Pending' },
    { date: '15/06/2026', amount: '325.00', bank: 'KTB · xxx-x-x4157', status: 'Paid' },
    { date: '12/06/2026', amount: '88.50', bank: 'KTB · xxx-x-x4157', status: 'Paid' },
  ]
  return (
    <div className="p-5 text-left">
      <h4 className="text-lg font-bold text-gray-900 mb-1">Pay-In Requests</h4>
      <p className="text-xs text-gray-400 mb-4">Payment request records</p>
      <div className="flex gap-2 mb-4">
        <div className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-400">Search...</div>
        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-400 shrink-0">All Status</div>
      </div>
      <div className="rounded-xl border border-gray-100 bg-white overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-gray-50 text-gray-400">
            <tr>
              <th className="text-left px-3 py-2 font-semibold">Date</th>
              <th className="text-left px-3 py-2 font-semibold">Amount</th>
              <th className="text-left px-3 py-2 font-semibold">Bank Account</th>
              <th className="text-left px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="px-3 py-2.5 text-gray-700">{r.date}</td>
                <td className="px-3 py-2.5 font-semibold text-gray-900">{r.amount}</td>
                <td className="px-3 py-2.5 text-gray-600">{r.bank}</td>
                <td className="px-3 py-2.5">
                  <span className={clsx('px-2 py-0.5 rounded-full text-[10px] font-semibold', r.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600')}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function HomePage() {
  const { t } = useLanguage()
  const [previewTab, setPreviewTab] = useState<'overview' | 'payin'>('overview')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-slate-950">
      <NavBar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <ParticleBackground />
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

      {/* Pain points */}
      <section className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.painPoints.heading}
              <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{t.painPoints.headingAccent}</span>
            </h2>
            <p className="text-slate-400">{t.painPoints.subtitle}</p>
          </motion.div>

          <div className="space-y-4">
            {t.painPoints.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid sm:grid-cols-2 gap-3 sm:gap-0 rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 sm:border-r border-slate-700/50">
                  <span className="w-6 h-6 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary-500/5">
                  <span className="w-6 h-6 rounded-full bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-sm text-white font-medium leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Pricing / FAQ */}
      <section className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.pricing.heading}
              <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{t.pricing.headingAccent}</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-5">
              <MessageCircleQuestion className="w-6 h-6 text-primary-400 shrink-0 mt-0.5" />
              <p className="text-white font-semibold leading-relaxed">{t.pricing.question}</p>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">{t.pricing.answer}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {t.pricing.models.map((model, i) => {
                const Icon = pricingIcons[i]
                return (
                  <div key={i} className="rounded-xl bg-slate-900/50 border border-slate-700/50 p-4">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-amber-500 text-white flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-bold text-white mb-1">{model.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{model.desc}</p>
                  </div>
                )
              })}
            </div>

            <p className="text-xs text-slate-500 mb-6">{t.pricing.note}</p>

            <div className="border-t border-slate-700/50 pt-6 text-center">
              <p className="text-white font-semibold mb-4">{t.pricing.ctaText}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.pricing.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product preview */}
      <section className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.preview.heading}
              <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{t.preview.headingAccent}</span>
            </h2>
            <p className="text-slate-400">{t.preview.subtitle}</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex justify-center gap-2 mb-5">
              <button
                onClick={() => setPreviewTab('overview')}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  previewTab === 'overview' ? 'bg-primary-500/10 text-primary-400 border border-primary-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                )}
              >
                {t.preview.tabOverview}
              </button>
              <button
                onClick={() => setPreviewTab('payin')}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  previewTab === 'payin' ? 'bg-primary-500/10 text-primary-400 border border-primary-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                )}
              >
                {t.preview.tabPayIn}
              </button>
            </div>

            <BrowserFrame url="merchant.please-payment.com">
              {previewTab === 'overview' ? <OverviewMockup /> : <PayInRequestsMockup />}
            </BrowserFrame>
          </motion.div>
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

      {/* FAQ */}
      <section id="faq" className="relative py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.faq.heading}
              <span className="bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{t.faq.headingAccent}</span>
            </h2>
            <p className="text-slate-400">{t.faq.subtitle}</p>
          </motion.div>

          <div className="space-y-3">
            {t.faq.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-700/20 transition-colors"
                >
                  <span className="font-semibold text-white text-sm leading-relaxed">{item.q}</span>
                  <ChevronDown
                    className={clsx('w-5 h-5 shrink-0 text-primary-400 transition-transform duration-300', openFaq === i && 'rotate-180')}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-slate-700/40">
                    <p className="text-slate-300 text-sm leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
