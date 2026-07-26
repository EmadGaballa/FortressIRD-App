import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { stats, processSteps } from "@/constants/data";
import {
  CheckCircle2,
  Target,
  Eye,
  Heart,
  ArrowRight,
  Compass,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/ui/LazyImage";
import "./About.css";

function AnimatedStatValue({
  value,
  suffix,
}: {
  value: string | number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const numericTarget = parseInt(String(value).replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    if (!isInView || numericTarget === 0) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setDisplayValue(numericTarget);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  return (
    <span ref={ref} className="about__stat-number">
      {numericTarget ? displayValue : value}
      <span className="about__stat-suffix">{suffix}</span>
    </span>
  );
}

function FadeInView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { t } = useTranslation("home");
  const { lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <div className="about__page-wrapper" dir={isAr ? "rtl" : "ltr"}>
      <section className="about__hero">
        <div className="about__hero-bg-image" />
        <div className="about__hero-overlay" />
        <div className="about__hero-grid-bg" />
        <div className="about__hero-spotlight-top" />
        <div className="about__hero-spotlight-bottom" />

        <div className="section-container about__hero-container">
          <div className="about__hero-grid">
            <FadeInView className="about__hero-left">
              <div className="about__hero-badge">
                <Sparkles className="about__hero-badge-icon" />
                <span className="about__hero-badge-text">
                  {isAr ? "من نحن" : "ABOUT FORTRESS"}
                </span>
              </div>

              <h1 className="about__hero-title">
                <span className="about__hero-title-gradient">
                  {t("intro.eyebrow")}
                </span>
              </h1>

              <p className="about__hero-text">
                {isAr
                  ? "منذ عام 2017، تقدم فورتريس IRD حلولاً متكاملة في الإنشاءات والتطوير العقاري والتشطيبات، مع التركيز على الجودة والدقة والقيمة المستدامة في المشاريع السكنية والتجارية."
                  : "Since 2017, Fortress IRD has delivered exceptional construction, real estate development, and finishing solutions with uncompromising quality, precision, and lasting value for residential and commercial projects."}
              </p>
            </FadeInView>

            <FadeInView delay={0.2} className="about__hero-right">
              <div className="about__hero-stats-card">
                <div className="about__hero-stats-grid">
                  {stats.map((stat, i) => {
                    const currentSuffix = isAr ? stat.suffixAr : stat.suffix;
                    const currentLabel = isAr ? stat.labelAr : stat.label;

                    return (
                      <div
                        key={stat.label || i}
                        className="about__hero-stat-item"
                      >
                        <div className="about__hero-stat-value">
                          <AnimatedStatValue
                            value={stat.value}
                            suffix={currentSuffix}
                          />
                        </div>
                        <p className="about__hero-stat-label">{currentLabel}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="about__section about__philosophy">
        <div className="section-container">
          <FadeInView className="about__section-header">
            <div className="section-eyebrow-pill">
              <Compass className="section-eyebrow-icon" />
              <span>
                {isAr ? "رسالتنا ورؤيتنا وقيمنا" : "MISSION, VISION & VALUES"}
              </span>
            </div>

            <h2 className="section-title">
              {isAr
                ? "المبادئ التي توجه كل مشروع"
                : "The Principles Behind Every Project"}
            </h2>
          </FadeInView>

          <div className="about__philosophy-grid">
            <FadeInView delay={0.1}>
              <div className="about__philosophy-card about__philosophy-card--gold">
                <div className="about__philosophy-card-glow" />
                <div className="about__philosophy-icon">
                  <Target />
                </div>

                <h3 className="about__philosophy-title">
                  {isAr ? "رسالتنا" : "Our Mission"}
                </h3>

                <p className="about__philosophy-desc">
                  {isAr
                    ? "تصميم وتطوير مشاريع سكنية وتجارية بجودة عالية، مع التركيز على التخطيط الدقيق والتنفيذ الموثوق والقيمة طويلة المدى."
                    : "To design and deliver residential and commercial developments with careful planning, reliable execution, and lasting value."}
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="about__philosophy-card about__philosophy-card--blue">
                <div className="about__philosophy-card-glow" />
                <div className="about__philosophy-icon">
                  <Eye />
                </div>

                <h3 className="about__philosophy-title">
                  {isAr ? "رؤيتنا" : "Our Vision"}
                </h3>

                <p className="about__philosophy-desc">
                  {isAr
                    ? "تطوير مشاريع تعزز جودة الحياة وتساهم في بناء مجتمعات حديثة ومستدامة."
                    : "To create developments that improve everyday living and contribute to modern, sustainable communities."}
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="about__philosophy-card about__philosophy-card--gold">
                <div className="about__philosophy-card-glow" />
                <div className="about__philosophy-icon">
                  <Heart />
                </div>

                <h3 className="about__philosophy-title">
                  {isAr ? "قيمنا" : "Our Values"}
                </h3>

                <p className="about__philosophy-desc">
                  {isAr
                    ? "الجودة والشفافية والالتزام والاهتمام بالتفاصيل هي أساس كل مشروع ننفذه."
                    : "Quality, transparency, reliability, and attention to detail guide every project we deliver."}
                </p>
              </div>
            </FadeInView>
          </div>

          <div className="about__values-grid">
            {[
              {
                title: isAr ? "النزاهة والشفافية" : "Integrity & Transparency",
                desc: isAr
                  ? "تواصل واضح، اتفاقيات صريحة، والتزام بما نعد به."
                  : "Clear communication, honest agreements, and accountability at every stage.",
              },
              {
                title: isAr ? "الجودة الهندسية" : "Engineering Quality",
                desc: isAr
                  ? "حلول مدروسة، تنفيذ دقيق، ومعايير بناء عالية."
                  : "Thoughtful design, precise execution, and high construction standards.",
              },
              {
                title: isAr ? "الابتكار العملي" : "Practical Innovation",
                desc: isAr
                  ? "تقنيات حديثة وحلول ذكية تخدم احتياجات اليوم والمستقبل."
                  : "Modern technology and practical solutions that add long-term value.",
              },
            ].map((valueItem, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="about__value-item">
                  <div className="about__value-icon-wrapper">
                    <CheckCircle2 className="about__value-icon" />
                  </div>

                  <div className="about__value-content">
                    <h4 className="about__value-name">{valueItem.title}</h4>
                    <p className="about__value-desc">{valueItem.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="about__section about__process-section">
        <div className="section-container">
          <FadeInView className="about__section-header">
            <div className="section-eyebrow-pill">
              <span>{t("process.eyebrow")}</span>
            </div>
            <h2 className="section-title">{t("process.title")}</h2>
          </FadeInView>

          <div className="about__process-timeline">
            <div className="about__process-line" />

            <div className="about__process-list">
              {processSteps.map((step, i) => (
                <FadeInView
                  key={step.step}
                  delay={i * 0.12}
                  className="about__process-step-wrapper"
                >
                  <div className="about__process-step">
                    <div className="about__process-number">
                      <span className="about__process-number-text">
                        {step.step}
                      </span>
                      <div className="about__process-number-pulse" />
                    </div>

                    <div className="about__process-card">
                      <div className="about__process-card-accent" />

                      <span className="about__process-mobile-label">
                        {isAr ? `الخطوة ${step.step}` : `Step ${step.step}`}
                      </span>

                      <h3 className="about__process-title">
                        {isAr ? step.titleAr : step.title}
                      </h3>

                      <p className="about__process-desc">
                        {isAr ? step.descriptionAr : step.description}
                      </p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about__cta">
        <div className="about__cta-bg">
          <LazyImage
            src="/images/garden_room_and_lounge_interior.jpg"
            alt="Garden Room and Lounge Interior"
            className="about__cta-bg-image"
            width="1920"
            height="1080"
          />
          <div className="about__cta-overlay" />
          <div className="about__cta-bg-grid" />
          <div className="about__cta-glow" />
        </div>

        <div className="section-container about__cta-container">
          <FadeInView>
            <div className="about__cta-eyebrow">
              <span className="about__cta-eyebrow-dot" />
              <span>
                {isAr ? "ابدأ مشروعك اليوم" : "Start Your Project Today"}
              </span>
            </div>

            <h2 className="about__cta-title">{t("cta.title")}</h2>
            <p className="about__cta-text">{t("cta.subtitle")}</p>

            <div className="about__cta-btn-wrapper">
              <Link to="/contact">
                <Button className="about__cta-btn">
                  <span>{t("cta.button")}</span>
                  <ArrowRight
                    className={`about__cta-btn-icon ${
                      isAr ? "about__cta-btn-icon--ar" : ""
                    }`}
                  />
                </Button>
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
