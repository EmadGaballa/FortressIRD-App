import { useTranslation } from 'react-i18next'
import './Privacy.css'

export default function Privacy() {
  const { t } = useTranslation('common')

  return (
    <section className="privacy">
      <div className="section-container privacy__container">
        <h1 className="privacy__title">{t('footer.privacy')}</h1>
        <div className="privacy__content">
          <p>
            Fortress Investment & Real Estate Development respects your privacy. This policy outlines how we collect, use, and protect your personal information.
          </p>
          <h2 className="privacy__heading">Information We Collect</h2>
          <p>
            We collect information you provide when filling out our contact form, including your name, email address, phone number, and project details.
          </p>
          <h2 className="privacy__heading">How We Use Your Information</h2>
          <p>
            We use your information solely to respond to your inquiries, provide our services, and improve our customer experience.
          </p>
          <h2 className="privacy__heading">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>
          <h2 className="privacy__heading">Contact</h2>
          <p>
            For questions about this policy, please contact us at fortress.ird@gmail.com.
          </p>
        </div>
      </div>
    </section>
  )
}