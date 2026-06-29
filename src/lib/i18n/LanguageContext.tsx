'use client'

import React, { createContext, useContext, useState } from 'react'
import { translations, Language, Translations } from './translations'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'th',
  setLang: () => {},
  t: translations.th,
})

export const LanguageProvider = ({ children, initialLang }: { children: React.ReactNode; initialLang: Language }) => {
  // ใช้ initialLang ที่ฝั่ง server อ่านมาจาก cookie ให้ตรงกับ client เป๊ะตั้งแต่ render แรก
  // กัน hydration mismatch (ห้ามอ่าน localStorage ตอน init state เพราะ server มองไม่เห็น ทำให้ค่าไม่ตรงกัน)
  const [lang, setLangState] = useState<Language>(initialLang)

  const setLang = (next: Language) => {
    setLangState(next)
    document.cookie = `please-payment-lang=${next}; path=/; max-age=31536000`
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
