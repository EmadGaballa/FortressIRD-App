import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import './NotFound.css'

export default function NotFound() {
  const { t } = useTranslation('common')

  return (
    <section className="not-found">
      <div className="section-container not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Page not found</p>
        <Link to="/">
          <Button variant="primary" size="lg">
            {t('buttons.exploreWork')}
          </Button>
        </Link>
      </div>
    </section>
  )
}