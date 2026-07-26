import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useI18n } from '@/contexts/I18nContext'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export function SEO({ title, description, image, url, type = 'website' }: SEOProps) {
  const { t } = useTranslation('common')
  const { lang } = useI18n()

  const siteName = t('site.title')
  const defaultDescription = t('site.description')
  const pageTitle = title ? `${title} | ${t('site.shortTitle')}` : siteName
  const pageDescription = description || defaultDescription
  const pageUrl = url || window.location.href
  const pageImage = image || '/og-image.jpg'

  return (
    <Helmet>
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_EG' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteName,
          url: window.location.origin,
          logo: `${window.location.origin}/logo.png`,
          description: defaultDescription,
          address: {
            '@type': 'PostalAddress',
            streetAddress: "3'Sixty By LMD",
            addressLocality: 'New Cairo',
            addressCountry: 'EG',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+20-12-73773339',
            contactType: 'customer service',
            email: 'fortress.ird@gmail.com',
          },
          sameAs: [
            'https://www.facebook.com/Fortress.IRD',
            'https://www.instagram.com/fortress.ird/',
          ],
        })}
      </script>
    </Helmet>
  )
}