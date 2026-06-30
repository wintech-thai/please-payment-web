'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

export function LangToggle() {
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
