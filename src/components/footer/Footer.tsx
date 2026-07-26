import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, Variants } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'
import { companyInfo, navLinks } from '@/constants/data'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ArrowUpRight,
  ArrowUp,
  Send,
  CheckCircle2,
  Building2,
} from 'lucide-react'
import './Footer.css'

interface ServiceItem {
  en: string
  ar: string
  href: string
}

const servicesList: ServiceItem[] = [
  { en: 'Real Estate Development', ar: 'التطوير العقاري', href: '/services' },
  { en: 'Construction Management', ar: 'إدارة الإنشاءات', href: '/services' },
  { en: 'Project Supervision', ar: 'الإشراف على المشاريع', href: '/services' },
  { en: 'Interior Finishing', ar: 'التشطيبات الداخلية', href: '/services' },
  { en: 'Renovation & Restructuring', ar: 'الترميم وإعادة الهيكلة', href: '/services' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Footer() {
  const { t } = useTranslation('common')
  const { lang } = useI18n()
  const isRTL = lang === 'ar'

  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Ambient background */}
      <div className="footer__glow footer__glow--top" />
      <div className="footer__glow footer__glow--bottom" />

      {/* Main Footer Container */}
      <div className="footer__container">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="footer__newsletter"
        >
          <div className="footer__newsletter-content">
            <span className="footer__newsletter-eyebrow">
              {isRTL ? 'اشترك في نشرتنا' : 'Stay Connected'}
            </span>
            <h3 className="footer__newsletter-title">
              {isRTL
                ? 'تلقَّ أحدث المستجدات والمشاريع الحصرية'
                : 'Receive exclusive architectural insights & portfolio updates'}
            </h3>
          </div>

          <form onSubmit={handleSubscribe} className="footer__newsletter-form">
            <div className="footer__input-wrapper">
              <Mail className="footer__input-icon" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  isRTL ? 'أدخل البريد الإلكتروني...' : 'Enter your email address...'
                }
                className="footer__input"
              />
            </div>
            <button
              type="submit"
              className={`footer__subscribe-btn ${subscribed ? 'footer__subscribe-btn--success' : ''}`}
            >
              {subscribed ? (
                <>
                  <span>{isRTL ? 'تم الاشتراك' : 'Subscribed'}</span>
                  <CheckCircle2 size={16} />
                </>
              ) : (
                <>
                  <span>{isRTL ? 'اشتراك' : 'Subscribe'}</span>
                  <Send size={15} className="footer__btn-icon" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="footer__grid"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="footer__brand-col">
            <div className="footer__brand-card">
              <div className="footer__brand-icon">
                <Building2 size={22} className="footer__brand-svg" />
              </div>
              <div className="footer__brand-details">
                <h3 className="footer__brand-name">{t('site.shortTitle')}</h3>
                <p className="footer__brand-tagline">{t('footer.tagline')}</p>
              </div>
            </div>

            <p className="footer__mission">{t('footer.mission')}</p>

            <div className="footer__social">
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="footer__col">
            <h4 className="footer__heading">{t('footer.quickLinks')}</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="footer__link">
                    <span className="footer__link-text">
                      {isRTL ? link.labelAr : link.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={`footer__link-icon ${isRTL ? 'footer__link-icon--rtl' : ''}`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

      

          {/* Contact Column */}
          <motion.div variants={itemVariants} className="footer__col">
            <h4 className="footer__heading">{t('footer.contactUs')}</h4>
            <ul className="footer__contact-list">
              <li>
                <a
                  href="https://maps.app.goo.gl/x1GRxJGtSS6hEhHFA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-item"
                >
                  <div className="footer__contact-icon-wrap">
                    <MapPin size={16} />
                  </div>
                  <span className="footer__contact-text">
                    {isRTL ? companyInfo.addressAr : companyInfo.address}
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`} className="footer__contact-item">
                  <div className="footer__contact-icon-wrap">
                    <Phone size={16} />
                  </div>
                  <span className="footer__contact-text" dir="ltr">
                    {companyInfo.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="footer__contact-item">
                  <div className="footer__contact-icon-wrap">
                    <Mail size={16} />
                  </div>
                  <span className="footer__contact-text">{companyInfo.email}</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">{t('footer.copyright')}</p>

          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">
              {t('footer.privacy')}
            </Link>
            <span className="footer__legal-divider" />
            <Link to="/terms" className="footer__legal-link">
              {t('footer.terms')}
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="footer__back-to-top"
            aria-label="Back to top"
          >
            <span>{isRTL ? 'للأعلى' : 'Back to top'}</span>
            <div className="footer__top-icon-wrap">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}