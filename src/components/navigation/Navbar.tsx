import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useI18n } from "@/contexts/I18nContext";
import { navLinks } from "@/constants/data";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import "./Navbar.css";

export function Navbar() {
  const { t } = useTranslation("common");
  const { lang, isRTL, switchLanguage } = useI18n();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "navbar",
        isScrolled ? "navbar--scrolled" : "navbar--top",
        !isVisible && !isMobileOpen && "navbar--hidden",
      )}
    >
      <div
        className={cn(
          "navbar__gold-line",
          isScrolled ? "navbar__gold-line--scrolled" : "navbar__gold-line--top",
        )}
      />

      <div className="navbar__container">
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <motion.img
              src="/images/logo/Logo-transparent.png"
              alt="Fortress Investment & Real Estate Development"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="180"
              height="52"
              className={cn(
                "navbar__logo-img",
                isScrolled
                  ? "navbar__logo-img--scrolled"
                  : "navbar__logo-img--top",
              )}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.3 }}
              draggable={false}
            />
          </Link>

          <nav className="navbar__nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "navbar__link",
                    isActive
                      ? "navbar__link--active"
                      : "navbar__link--inactive",
                  )}
                >
                  <span className="navbar__link-text">
                    {lang === "ar" ? link.labelAr : link.label}
                  </span>

                  <span className="navbar__link-indicator" />
                </Link>
              );
            })}
          </nav>

          <div className="navbar__actions">
            <motion.button
              onClick={() => switchLanguage(lang === "en" ? "ar" : "en")}
              className="navbar__lang-btn"
              aria-label={t("language.switch")}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            >
              <Globe className="navbar__lang-icon" size={13} />
              <span className="navbar__lang-text">
                {lang === "en" ? "AR" : "EN"}
              </span>
            </motion.button>

            <div className="navbar__desktop-cta">
              <Link to="/contact">
                <Button variant="gold" size="sm" className="navbar__cta-btn">
                  <span>{t("buttons.startProject")}</span>
                  <ArrowUpRight size={14} className="navbar__cta-icon" />
                </Button>
              </Link>
            </div>

            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="navbar__hamburger"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="navbar__mobile"
          >
            <div className="navbar__mobile-header">
              <img
                src="/images/logo/Logo-transparent.png"
                alt="Fortress Real Estate"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="180"
                height="52"
                className="navbar__mobile-logo"
                draggable={false}
              />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="navbar__mobile-close"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="navbar__mobile-nav" role="navigation">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isRTL ? 15 : -15 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : i * 0.04 + 0.04,
                      duration: 0.35,
                    }}
                    className="navbar__mobile-link-item"
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "navbar__mobile-link",
                        isActive
                          ? "navbar__mobile-link--active"
                          : "navbar__mobile-link--inactive",
                      )}
                    >
                      <span className="navbar__mobile-link-label">
                        <span className="navbar__mobile-link-number">
                          0{i + 1}
                        </span>
                        {lang === "ar" ? link.labelAr : link.label}
                      </span>
                      <ArrowUpRight
                        className="navbar__mobile-link-arrow"
                        size={18}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                className="navbar__mobile-cta-wrap"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
              >
                <Link to="/contact" className="block w-full">
                  <Button
                    variant="gold"
                    size="lg"
                    className="navbar__mobile-cta-btn"
                  >
                    <span>{t("buttons.startProject")}</span>
                    <ArrowUpRight size={16} />
                  </Button>
                </Link>
              </motion.div>
            </nav>

            <div className="navbar__mobile-footer">
              <span className="navbar__mobile-copyright">
                © {new Date().getFullYear()} Fortress Real Estate Development
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
