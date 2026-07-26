import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from '@/locales/en/common.json'
import enHome from '@/locales/en/home.json'
import enContact from '@/locales/en/contact.json'
import enProjects from '@/locales/en/projects.json'
import arCommon from '@/locales/ar/common.json'
import arHome from '@/locales/ar/home.json'
import arContact from '@/locales/ar/contact.json'
import arProjects from '@/locales/ar/projects.json'

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    contact: enContact,
    projects: enProjects,
  },
  ar: {
    common: arCommon,
    home: arHome,
    contact: arContact,
    projects: arProjects,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n