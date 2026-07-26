import { useTranslation } from 'react-i18next'
import './Terms.css'

export default function Terms() {
  const { t } = useTranslation('common')

  return (
    <section className="terms">
      <div className="section-container terms__container">
        <h1 className="terms__title">{t('footer.terms')}</h1>
        <div className="terms__content">
          <p>
            By using the Fortress Investment & Real Estate Development website, you agree to these terms of service.
          </p>
          <h2 className="terms__heading">Use of Website</h2>
          <p>
            This website is provided for informational purposes. You agree not to misuse the content or services provided herein.
          </p>
          <h2 className="terms__heading">Intellectual Property</h2>
          <p>
            All content, images, and materials on this website are the property of Fortress IRD unless otherwise stated.
          </p>
          <h2 className="terms__heading">Limitation of Liability</h2>
          <p>
            Fortress IRD shall not be liable for any damages arising from the use of this website or the services described herein.
          </p>
          <h2 className="terms__heading">Contact</h2>
          <p>
            For questions about these terms, please contact us at fortress.ird@gmail.com.
          </p>
        </div>
      </div>
    </section>
  )
}