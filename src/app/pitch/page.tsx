'use client'

import { useEffect, useRef } from 'react'

export default function PitchPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    // Focus iframe immediately so keyboard works without clicking first
    iframe.focus()

    // Forward navigation keys from parent window into the iframe
    const KEYS = ['ArrowLeft', 'ArrowRight', ' ', 'Home', 'End']
    const forward = (e: KeyboardEvent) => {
      if (!KEYS.includes(e.key)) return
      e.preventDefault()
      try {
        iframe.contentWindow?.document.dispatchEvent(
          new KeyboardEvent('keydown', { key: e.key, code: e.code, bubbles: true, cancelable: true })
        )
      } catch {}
    }
    window.addEventListener('keydown', forward)
    return () => window.removeEventListener('keydown', forward)
  }, [])

  return (
    <div
      className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#080A10]"
      onClick={() => iframeRef.current?.focus()}
    >
      <iframe
        ref={iframeRef}
        src="/deck.html"
        className="w-full h-full border-0"
        title="Please Payment Product Deck"
        allow="fullscreen"
        tabIndex={0}
      />

      {/* Back button — floats above iframe, does not block slide navigation */}
      <a
        href="/"
        onClick={e => e.stopPropagation()}
        className="fixed top-4 left-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/70 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 backdrop-blur-sm transition-all"
      >
        ←
      </a>
    </div>
  )
}
