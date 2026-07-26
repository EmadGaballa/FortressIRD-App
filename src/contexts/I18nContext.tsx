import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '@/utils/i18n'

interface I18nContextType {
  lang: 'en' | 'ar'
  isRTL: boolean
  switchLanguage: (lang: 'en' | 'ar') => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const { i18n: i18nInstance } = useTranslation()

  const lang = (i18nInstance.language?.startsWith('ar') ? 'ar' : 'en') as 'en' | 'ar'
  const isRTL = lang === 'ar'

  const switchLanguage = (newLang: 'en' | 'ar') => {
    i18nInstance.changeLanguage(newLang)
    localStorage.setItem('i18nextLng', newLang)
  }

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang, isRTL])

  return (
    <I18nContext.Provider value={{ lang, isRTL, switchLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}