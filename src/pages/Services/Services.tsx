import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { services } from "@/constants/data";
import {
  Building2,
  HardHat,
  ClipboardCheck,
  Ruler,
  Compass,
  Home,
  Building,
  Lightbulb,
  RefreshCw,
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/ui/LazyImage";
import "./Services.css";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  HardHat,
  ClipboardCheck,
  Ruler,
  Compass,
  Home,
  Building,
  Lightbulb,
  RefreshCw,
  FileText,
};

const defaultServiceImages = [
  "images/construction-worker-on-site.png",
  "images/residential-project-3.png",
  "images/luxury-living-room.png",
  "images/working-at-office.jpg",
  "images/home_office.jpg",
  "images/Infrastructure-Consultancy-4-min-scaled.jpg",
  "images/blog-construction.jpg",
  "images/construction-team.png",
  "images/employees-working-at-office.jpg",
  "images/employees-working-at-firm.jpg",
  "images/bim-model-1.jpg",
  "images/Professional maintenance.jpg",
];

const showcaseHighlights = [
  {
    id: "precision",
    icon: ShieldCheck,
    titleEn: "BIM & 3D Precision Engineering",
    titleAr: "النمذجة الثلاثية وتنسيق BIM الدقيق",
    descEn:
      "Eliminating spatial conflicts before construction begins using advanced LOD-400 building information modeling.",
    descAr:
      "القضاء على التعارضات الميدانية قبل بدء التنفيذ باستخدام نماذج BIM المتقدمة عالية الدقة.",
    stat: "99.8%",
    statLabelEn: "Clash Reduction",
    statLabelAr: "تقليل التعارضات",
    images: [
      "/images/bim-model-1.jpg",
      "/images/Infrastructure-Consultancy-4-min-scaled.jpg",
      "/images/working-at-office.jpg",
    ],
  },
  {
    id: "sustainability",
    icon: Sparkles,
    titleEn: "Sustainable Luxury & Passive Comfort",
    titleAr: "الفخامة المستدامة والراحة البيئية",
    descEn:
      "Integrating acoustic isolation, thermal balance, and natural daylight optimization into every blueprint.",
    descAr:
      "دمج العزل الصوت والحراري واستغلال الإضاءة الطبيعية لضمان أقصى درجات الراحة البيئية.",
    stat: "-35%",
    statLabelEn: "Energy Consumption",
    statLabelAr: "ترشيد الطاقة",
    images: [
      "/images/master_bedroom_interior_design.jpg",
      "/images/residential-project-3.png",
      "/images/home_office.jpg",
    ],
  },
  {
    id: "turnkey",
    icon: Layers,
    titleEn: "Turnkey Delivery & Rigorous Site Oversight",
    titleAr: "التسليم الإشرافي المتكامل وإدارة الموقع",
    descEn:
      "Full structural compliance audits, material verification, and millimetric execution standards.",
    descAr:
      "إشراف ميداني صارم ومطابقة الخامات بأعلى معايير الدقة الهندسية في جميع المراحل.",
    stat: "100%",
    statLabelEn: "Structural Accuracy",
    statLabelAr: "دقة التنفيذ",
    images: [
      "/images/construction-team-1.png",
      "/images/construction-team.png",
      "/images/Professional maintenance.jpg",
    ],
  },
];

function FadeInView({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  const { t } = useTranslation("home");
  const { lang } = useI18n();
  const isAr = lang === "ar";

  const [activeTab, setActiveTab] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setActiveImageIdx(0);
  };

  const currentHighlight = showcaseHighlights[activeTab];
  const currentImage = currentHighlight.images[activeImageIdx];

  return (
    <div className="services-page">
      <section className="services__hero">
        <div className="services__hero-bg">
          <img
            src="/images/luxury_open-concept_kitchen.jpg"
            alt="Luxury Open Concept Kitchen Interior"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="services__hero-bg-image"
          />
          <div className="services__hero-bg-overlay" />
          <div className="services__hero-bg-grid" />
          <div className="services__hero-glow" />
        </div>

        <div className="section-container services__hero-content">
          <FadeInView>
            <div className="services__hero-eyebrow">
              <span className="services__hero-eyebrow-dot" />
              <span>{t("services.eyebrow")}</span>
            </div>
            <h1 className="services__hero-title">{t("services.title")}</h1>
            <p className="services__hero-lead">
              {isAr
                ? "نصمم المساحات برؤية استثنائية تجمع بين العمارة الفاخرة والدقة الهندسية لتجربة معيشية متكاملة."
                : "Architectural distinction meets rigorous engineering precision. We transform visionary concepts into enduring masterpieces."}
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="services__grid-section section-padding">
        <div className="section-container">
          <div className="services__grid">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2;
              const cardImage =
                (service as any).image ||
                defaultServiceImages[i % defaultServiceImages.length];

              return (
                <FadeInView key={service.id || i} delay={i * 0.08}>
                  <div className="services__card">
                    <div className="services__card-media">
                      <LazyImage
                        src={cardImage}
                        alt={isAr ? service.titleAr : service.title}
                        className="services__card-img"
                        width="800"
                        height="600"
                      />
                      <div className="services__card-overlay" />

                      <div className="services__card-icon-badge">
                        <Icon />
                      </div>

                      <span className="services__card-step-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="services__card-body">
                      <h3 className="services__card-title">
                        {isAr ? service.titleAr : service.title}
                      </h3>
                      <p className="services__card-desc">
                        {isAr ? service.descriptionAr : service.description}
                      </p>

                      <Link to="/contact" className="services__card-footer">
                        <span className="services__card-link-text">
                          {isAr ? "ابدأ الآن" : "Get Started"}
                        </span>
                        <ArrowRight
                          className={`services__card-link-icon ${
                            isAr ? "services__card-link-icon--ar" : ""
                          }`}
                        />
                      </Link>
                    </div>

                    <div className="services__card-bottom-accent" />
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services__showcase">
        <div className="services__showcase-bg-glow" />

        <div className="section-container">
          <FadeInView className="services__showcase-header">
            <div className="services__showcase-eyebrow">
              <Zap className="w-3.5 h-3.5" />
              <span>{isAr ? "تميز الأداء" : "Excellence In Execution"}</span>
            </div>
            <h2 className="services__showcase-title">
              {isAr
                ? "معايير هندسية ترفع قيمة مشروعك"
                : "Architectural Mastery & Technical Precision"}
            </h2>
            <p className="services__showcase-sub">
              {isAr
                ? "نعتمد أفضل التقنيات العالمية لضمان سلامة المنشأ ورقي التصميم ودقة التنفيذ في كل زاوية."
                : "Every project undergoes rigorous spatial planning, BIM validation, and material craftsmanship to deliver timeless spaces."}
            </p>
          </FadeInView>

          <div className="services__showcase-grid">
            <div className="services__showcase-controls">
              {showcaseHighlights.map((item, idx) => {
                const ItemIcon = item.icon;
                const isActive = activeTab === idx;
                return (
                  <FadeInView key={item.id} delay={idx * 0.1}>
                    <button
                      onClick={() => handleTabChange(idx)}
                      className={`services__showcase-nav-item ${
                        isActive ? "services__showcase-nav-item--active" : ""
                      }`}
                    >
                      <div className="services__showcase-nav-icon">
                        <ItemIcon />
                      </div>
                      <div className="services__showcase-nav-content">
                        <h4 className="services__showcase-nav-title">
                          {isAr ? item.titleAr : item.titleEn}
                        </h4>
                        <p className="services__showcase-nav-desc">
                          {isAr ? item.descAr : item.descEn}
                        </p>
                      </div>
                    </button>
                  </FadeInView>
                );
              })}
            </div>

            <div className="services__showcase-display">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeImageIdx}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="services__showcase-card"
                >
                  <LazyImage
                    src={currentImage}
                    alt={
                      isAr ? currentHighlight.titleAr : currentHighlight.titleEn
                    }
                    className="services__showcase-card-img"
                    width="800"
                    height="600"
                  />
                  <div className="services__showcase-card-overlay" />

                  <div className="services__showcase-metric-box">
                    <span className="services__showcase-metric-val">
                      {currentHighlight.stat}
                    </span>
                    <span className="services__showcase-metric-lbl">
                      {isAr
                        ? currentHighlight.statLabelAr
                        : currentHighlight.statLabelEn}
                    </span>
                  </div>

                  <div className="services__showcase-card-caption">
                    <div className="services__showcase-badge">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="services__showcase-badge-text">
                        {isAr ? "جودة مبرهنة" : "Certified Quality"}
                      </span>
                    </div>
                    <h3 className="services__showcase-card-title-text">
                      {isAr
                        ? currentHighlight.titleAr
                        : currentHighlight.titleEn}
                    </h3>
                  </div>

                  <div className="services__showcase-dots">
                    {currentHighlight.images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIdx(imgIdx);
                        }}
                        aria-label={`View image ${imgIdx + 1}`}
                        className={`services__showcase-dot ${
                          activeImageIdx === imgIdx
                            ? "services__showcase-dot--active"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="about__cta">
        <div className="about__cta-bg">
          <LazyImage
            src="images/lounge-outdoor-1.png"
            alt="Garden Room & Interior Space"
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
