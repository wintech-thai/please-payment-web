'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'error-verification'

export function SignUpForm({ turnstileSiteKey }: { turnstileSiteKey: string }) {
  const { t, lang } = useLanguage()
  const f = t.signup.form

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorDesc, setErrorDesc] = useState('')

  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const turnstileToken = useRef<string>('')

  useEffect(() => {
    if (!turnstileSiteKey) return

    const renderWidget = () => {
      const turnstile = (window as any).turnstile
      if (!turnstile || !widgetRef.current || widgetId.current) return
      widgetId.current = turnstile.render(widgetRef.current, {
        sitekey: turnstileSiteKey,
        callback: (token: string) => { turnstileToken.current = token },
        'expired-callback': () => { turnstileToken.current = '' },
        'error-callback': () => { turnstileToken.current = '' },
      })
    }

    if ((window as any).turnstile) {
      renderWidget()
      return
    }

    const existing = document.querySelector(`script[src="${TURNSTILE_SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', renderWidget)
      return () => existing.removeEventListener('load', renderWidget)
    }

    const script = document.createElement('script')
    script.src = TURNSTILE_SCRIPT_SRC
    script.async = true
    script.defer = true
    script.addEventListener('load', renderWidget)
    document.body.appendChild(script)

    return () => script.removeEventListener('load', renderWidget)
  }, [turnstileSiteKey])

  const resetTurnstile = () => {
    const turnstile = (window as any).turnstile
    if (turnstile && widgetId.current) turnstile.reset(widgetId.current)
    turnstileToken.current = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    setErrorDesc('')

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName, phone, lang, turnstileToken: turnstileToken.current }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setFirstName('')
        setLastName('')
        setPhone('')
        resetTurnstile()
        return
      }

      const data = await res.json().catch(() => ({}))
      setStatus(data?.error === 'verification' ? 'error-verification' : 'error')
      setErrorDesc(data?.description || '')
      resetTurnstile()
    } catch {
      setStatus('error')
      resetTurnstile()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
    >
      <h1 className="text-3xl font-bold text-white mb-2">{t.signup.title}</h1>
      <p className="text-slate-400 mb-8">{t.signup.subtitle}</p>

      {status === 'success' ? (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-4 py-3 text-sm">
          {f.success}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">{f.emailLabel}</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={f.emailPlaceholder}
              className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/60"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">{f.firstNameLabel}</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={f.firstNamePlaceholder}
                className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/60"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">{f.lastNameLabel}</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={f.lastNamePlaceholder}
                className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/60"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1.5">{f.phoneLabel}</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={f.phonePlaceholder}
              className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/60"
            />
          </div>

          <div ref={widgetRef} />

          {status === 'error' && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 px-4 py-3 text-sm">
              {errorDesc || f.error}
            </div>
          )}
          {status === 'error-verification' && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 px-4 py-3 text-sm">
              {f.errorVerification}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-lg bg-primary-500 hover:bg-primary-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 transition-colors"
          >
            {status === 'submitting' ? f.submitting : f.submit}
          </button>
        </form>
      )}
    </motion.div>
  )
}
