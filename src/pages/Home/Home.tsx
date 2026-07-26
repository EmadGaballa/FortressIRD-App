import { useTranslation } from "react-i18next";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, FileEdit } from "lucide-react";
import { homeImages } from "@/constants/homeImages";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  Search,
  Building2,
  Home as HomeIcon,
  Ruler,
  Compass,
  Lightbulb,
  RefreshCw,
  FileText,
  ClipboardCheck,
  Star,
  Play,
  Shield,
  Award,
  TrendingUp,
  UserCheck,
  MessageCircle,
  X,
  Building,
  Factory,
  Layers,
  Zap,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Quote,
  Users,
  HardHat,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/ui/LazyImage";
import { useI18n } from "@/contexts/I18nContext";
import {
  services,
  stats,
  processSteps,
  testimonials,
  projects,
  industries,
  faqs,
  companyInfo,
} from "@/constants/data";
import { cn } from "@/utils/cn";
import { SEO } from "@/components/shared/SEO";
import "./Home.css";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  HardHat,
  ClipboardCheck,
  Ruler,
  Compass,
  HomeIcon,
  Lightbulb,
  RefreshCw,
  FileText,
  Search,
  MessageSquare,
  FileEdit,
  CheckCircle,
  CheckCircle2,
  Building,
  Factory,
  Layers,
  Zap,
  Shield,
  Award,
  TrendingUp,
  UserCheck,
  MessageCircle,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
};

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, shouldReduceMotion, motionValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function BlueprintDivider({
  bg = "bg-white",
  reduceMotion = false,
}: {
  bg?: string;
  reduceMotion?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative h-16 sm:h-24 w-full overflow-hidden pointer-events-none select-none"
    >
      <svg
        viewBox="0 0 1600 96"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 48 L420 48 L480 16 L1120 16 L1180 48 L1600 48"
          fill="none"
          stroke="#C5A880"
          strokeWidth="1"
          strokeOpacity="0.45"
          style={{ pathLength: reduceMotion ? 1 : pathLength }}
        />
        <circle cx="480" cy="16" r="2.5" fill="#C5A880" fillOpacity="0.6" />
        <circle cx="1120" cy="16" r="2.5" fill="#C5A880" fillOpacity="0.6" />
      </svg>
    </div>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation(["home", "common"]);
  const tc = i18n.getFixedT(null, "common");
  const { lang, isRTL } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const introImageRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 1.08],
  );
  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "20%"],
  );

  const { scrollYProgress: introProgress } = useScroll({
    target: introImageRef,
    offset: ["start end", "end start"],
  });
  const introImageY = useTransform(
    introProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-8%", "8%"],
  );

  const handleWatchVideo = () => {
    setShowVideo(true);
    setTimeout(() => videoRef.current?.play(), 300);
  };

  const handleCloseVideo = () => {
    videoRef.current?.pause();
    setShowVideo(false);
  };

  const viewportOptions = { once: true, margin: "-80px" };

  const whyChooseUsPoints = [
    {
      en: "In-house architecture, engineering, and delivery under one roof",
      ar: "العمارة والهندسة والتنفيذ تحت سقف واحد",
    },
    {
      en: "Fixed-cost governance with transparent, itemized reporting",
      ar: "حوكمة تكاليف ثابتة مع تقارير شفافة ومفصلة",
    },
    {
      en: "Dedicated site leadership present for the life of the project",
      ar: "قيادة ميدانية مخصصة طوال عمر المشروع",
    },
    {
      en: "A record of on-time handover across every scale of project",
      ar: "سجل تسليم في الموعد المحدد لكل مشروع مهما كان حجمه",
    },
  ];

  return (
    <>
      <SEO title={tc("site.shortTitle")} description={tc("site.description")} />

      <section ref={heroRef} className="home-hero">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="home-hero__parallax"
        >
          <div className="home-hero__overlay" />
          <img
            src={homeImages.hero}
            alt="Fortress IRD Bespoke Architecture"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="home-hero__bg-img"
          />
        </motion.div>

        <div className="home-hero__line-top" />
        <div className="home-hero__line-left" />
        <div className="home-hero__line-right" />

        <div className="home-hero__content">
          <div />
          <div className="home-hero__text-wrap">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="home-hero__eyebrow"
            >
              <span className="home-hero__eyebrow-line" />
              <span className="home-hero__eyebrow-text">
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            <h1 className="home-hero__title">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="home-hero__title-line"
              >
                {t("hero.title1")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="home-hero__title-accent"
              >
                {t("hero.title2")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="home-hero__title-sub"
              >
                {t("hero.subtitle")}
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="home-hero__actions"
            >
              <Link to="/contact">
                <Button
                  variant="gold"
                  size="xl"
                  className="rounded-none bg-[#C5A880] text-white hover:bg-[#B3966E] transition-all duration-300"
                >
                  {tc("buttons.startProject") ||
                    (lang === "ar" ? "ابدأ مشروعك" : "Start Project")}
                  <ArrowRight
                    className={cn(
                      "h-3.5 w-3.5 ml-2 transition-transform duration-300",
                      isRTL && "rotate-180",
                    )}
                  />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-none border-white/20 text-white bg-transparent hover:bg-white hover:text-[#0A0F1D] transition-all duration-500"
                >
                  {tc("buttons.exploreWork") ||
                    (lang === "ar" ? "استكشف أعمالنا" : "Explore Work")}
                </Button>
              </Link>
              <button
                onClick={handleWatchVideo}
                className={cn(
                  "flex items-center gap-4 text-white/60 hover:text-white transition-colors group py-2",
                  isRTL ? "mr-0 sm:mr-6" : "ml-0 sm:ml-6",
                )}
              >
                {/* <span className="h-11 w-11 rounded-full border border-white/10 group-hover:border-[#C5A880]/60 flex items-center justify-center transition-all duration-500 bg-[#0A0F1D]/40 backdrop-blur-sm">
                  <Play className="h-4 w-4 ml-0.5 text-[#EAD0A8]" />
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-white/70 group-hover:text-[#EAD0A8] transition-colors duration-300 font-mono">
                  {t("hero.watchVideo")}
                </span> */}
              </button>
            </motion.div>
          </div>

          <div className="home-hero__bottom">
            <span className="home-hero__copyright">
              © {new Date().getFullYear()} Fortress Real Estate
            </span>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="home-hero__scroll"
              onClick={() =>
                document
                  .getElementById("editorial-intro")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="home-hero__scroll-text">{t("hero.scroll")}</span>
              <ArrowDown size={12} className="text-[#C5A880]" />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home-video-modal"
            onClick={handleCloseVideo}
          >
            <button
              onClick={handleCloseVideo}
              className="home-video-modal__close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="home-video-modal__frame"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                controls
                className="home-video-modal__video"
                playsInline
              >
                <source
                  src="/videos/long%20video%20of%20construction%20projects.mp4"
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="editorial-intro" className="home-intro">
        <div className="home-container">
          <div className="home-intro__grid">
            <div className="home-intro__image-col">
              <div className="home-intro__image-wrap">
                <motion.img
                  style={{ y: introImageY }}
                  src={homeImages.intro}
                  alt="Fortress Masterwork Project Planning"
                  loading="lazy"
                  decoding="async"
                  className="home-intro__image"
                />
                <div className="home-intro__image-overlay" />
              </div>

              <div className="home-intro__info-panel">
                <div className="home-intro__info-inner">
                  <div>
                    <p className="home-intro__info-label">ESTABLISHED</p>
                    <h3 className="home-intro__info-year">
                      {companyInfo.founded}
                    </h3>
                  </div>
                  <div className="home-intro__info-divider" />
                  <div className="home-intro__info-text">
                    <div className="home-intro__info-gold-line" />
                    <p className="home-intro__info-description">
                      {lang === "ar"
                        ? "نبني مشاريع تدوم لأجيال، بجودة هندسية تضع الأداء والاستدامة في المقدمة."
                        : "Delivering exceptional engineering with enduring quality, timeless craftsmanship, and uncompromising attention to detail."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-intro__text-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 1 }}
              >
                <div>
                  <span className="home-intro__eyebrow">
                    {t("intro.eyebrow")}
                  </span>
                  <div className="home-intro__text-line" />
                  <h2 className="home-intro__heading">{t("intro.title")}</h2>
                </div>

                <div className="home-intro__body mt-8">
                  <p className="home-intro__body-first">{t("intro.body")}</p>
                </div>

                <div className="home-intro__pillars">
                  {["Precision", "Excellence", "Innovation", "Prestige"].map(
                    (item, idx) => (
                      <div key={item} className="home-intro__pillar">
                        <span className="home-intro__pillar-num">
                          0{idx + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>

                <div className="pt-6">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-none border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white text-xs tracking-widest uppercase px-8 h-12 transition-all duration-300 font-mono"
                    >
                      {lang === "ar" ? "اعرف المزيد عنا" : "Corporate Overview"}
                      <ArrowRight
                        className={cn(
                          "h-3.5 w-3.5 ml-2.5",
                          isRTL && "rotate-180",
                        )}
                      />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BlueprintDivider
        bg="bg-[#0A0F1D]"
        reduceMotion={shouldReduceMotion ?? false}
      />

      <section className="home-values">
        <div className="home-values__bg-glow" />
        <div className="home-values__top-line" />
        <div className="home-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1 }}
            className="home-values__header"
          >
            <span className="home-values__eyebrow">{t("values.eyebrow")}</span>
            <h2 className="home-values__title">{t("values.title")}</h2>
            <div className="home-values__divider" />
          </motion.div>

          <div className="home-values__grid">
            {[
              { key: "integrity", icon: "Shield", count: "01" },
              { key: "quality", icon: "Award", count: "02" },
              { key: "innovation", icon: "Lightbulb", count: "03" },
            ].map(({ key, icon, count }, idx) => {
              const IconComponent = iconMap[icon] || Shield;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="home-values__card"
                >
                  <div className="home-values__card-header">
                    <div className="home-values__card-icon">
                      <IconComponent />
                    </div>
                    <span className="home-values__card-count">{count}</span>
                  </div>
                  <h3 className="home-values__card-title">
                    {t(`values.${key}`)}
                  </h3>
                  <p className="home-values__card-desc">
                    {t(`values.${key}Desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-showcase">
        <div className="home-container">
          <div className="home-showcase__header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 1 }}
              className="home-showcase__header-inner"
            >
              <div>
                <span className="home-showcase__eyebrow">
                  {lang === "ar" ? "لمحة ميدانية" : "Field Survey"}
                </span>
                <h2 className="home-showcase__title">
                  {lang === "ar"
                    ? "ثلاث لحظات من مواقعنا الإنشائية"
                    : "Three vantage points across active sites"}
                </h2>
              </div>
              <p className="home-showcase__note">
                {lang === "ar"
                  ? "من الحفر الأولى إلى اللمسات الأخيرة، كل موقع يروي انضباطنا الهندسي."
                  : "From first excavation to final finish, every site is a record of the same discipline."}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="home-showcase__grid">
          {projects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={`showcase-${project.id}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 1, delay: idx * 0.12 }}
              className={cn(
                "home-showcase__item",
                idx === 1 && "home-showcase__item--offset",
              )}
            >
              <LazyImage
                src={homeImages.showcase[idx]}
                alt={lang === "ar" ? project.titleAr : project.title}
                className="home-showcase__img"
                width="800"
                height="600"
              />
              <div className="home-showcase__gradient" />
              <div className="home-showcase__caption">
                <span className="home-showcase__caption-location">
                  {lang === "ar" ? project.locationAr : project.location}
                </span>
                <span className="home-showcase__caption-title">
                  {lang === "ar" ? project.titleAr : project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-services">
        <div className="home-container">
          <div className="home-services__grid">
            <div className="home-services__sticky">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 1 }}
              >
                <span className="home-services__eyebrow">
                  {t("services.eyebrow")}
                </span>
                <h2 className="home-services__title">{t("services.title")}</h2>
                <div className="home-services__divider" />
                <p className="home-services__desc">
                  {t("services.description")}
                </p>
                <Link to="/services">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-white/20 text-white bg-transparent hover:bg-white hover:text-[#0A0F1D] text-[10px] tracking-widest uppercase px-6 h-10 font-mono"
                  >
                    {t("buttons.viewAll", {
                      ns: "common",
                      defaultValue: "View All Projects",
                    })}
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="home-services__list">
              {services.slice(0, 5).map((service, idx) => {
                const RowIcon = iconMap[service.icon] || Building2;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOptions}
                    transition={{ duration: 0.8 }}
                    className="home-services__list-item"
                  >
                    <div className="home-services__list-content">
                      <span className="home-services__list-number">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="home-services__list-title">
                          {lang === "ar" ? service.titleAr : service.title}
                        </h3>
                        <p className="home-services__list-desc">
                          {lang === "ar"
                            ? service.descriptionAr
                            : service.description}
                        </p>
                      </div>
                    </div>
                    <div className="home-services__list-icon">
                      <RowIcon />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="home-container">
          <div className="home-stats__grid">
            {[
              {
                target: 9,
                token: "+",
                label: "Years of Experience",
                labelAr: "سنوات من الخبرة",
              },
              {
                target: 120,
                token: "+",
                label: "Projects Completed",
                labelAr: "مشروع مكتمل",
              },
              {
                target: 300,
                token: "+",
                label: "Satisfied Clients",
                labelAr: "عميل واثق",
              },
              {
                target: 350,
                token: "+",
                label: "Direct Manpower",
                labelAr: "كادر عمل مباشر",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="home-stats__item"
              >
                <div className="home-stats__accent-line" />
                <div className="home-stats__value-wrapper">
                  <span className="home-stats__value">
                    <AnimatedCounter value={stat.target} suffix={stat.token} />
                  </span>
                </div>
                <span className="home-stats__label">
                  {lang === "ar" ? stat.labelAr : stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-process">
        <div className="home-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1 }}
            className="home-process__header"
          >
            <span className="home-process__eyebrow">
              {t("process.eyebrow")}
            </span>
            <h2 className="home-process__heading">{t("process.title")}</h2>
            <div className="home-process__divider" />
            <p className="home-process__desc">
              {lang === "ar"
                ? "من الفكرة إلى التسليم، نتبع نهجاً منضبطاً"
                : "A refined deployment roadmap engineered for predictable excellence across every milestone layer."}
            </p>
          </motion.div>

          <div className="home-process__grid">
            {processSteps.slice(0, 4).map((step, idx) => {
              const StepIcon = iconMap[step.icon] || CheckCircle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="home-process__step"
                >
                  <div className="home-process__step-header">
                    <span className="home-process__step-badge">
                      STAGE {step.step}
                    </span>
                    <div className="home-process__step-line" />
                  </div>
                  <div className="home-process__step-icon">
                    <StepIcon />
                    <h3 className="home-process__step-title">
                      {lang === "ar" ? step.titleAr : step.title}
                    </h3>
                  </div>
                  <p className="home-process__step-desc">
                    {lang === "ar" ? step.descriptionAr : step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <BlueprintDivider
        bg="bg-white"
        reduceMotion={shouldReduceMotion ?? false}
      />

      <section className="home-differentiation">
        <div className="home-container">
          <div className="home-differentiation__grid">
            <div className="home-differentiation__image-col">
              <div className="home-differentiation__image-frame">
                <div className="home-differentiation__image-wrap">
              <img
                src={homeImages.differentiation}
                alt="Fortress Site Oversight"
                loading="lazy"
                decoding="async"
                className="home-differentiation__img"
              />
                  <div className="home-differentiation__image-tint" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="home-differentiation__badge"
              >
                <span className="home-differentiation__badge-value">100%</span>
                <span className="home-differentiation__badge-label">
                  {lang === "ar" ? "إشراف داخلي كامل" : "In-house oversight"}
                </span>
              </motion.div>
            </div>

            <div className="home-differentiation__text-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="home-differentiation__eyebrow">
                  {lang === "ar" ? "لماذا فورتريس" : "The Difference"}
                </span>
                <div className="home-differentiation__line" />
                <h2 className="home-differentiation__heading">
                  {lang === "ar"
                    ? "مسؤولية واحدة، من الفكرة إلى المفتاح"
                    : "One point of accountability, from concept to key handover"}
                </h2>

                <div className="home-differentiation__points">
                  {whyChooseUsPoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: isRTL ? 15 : -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOptions}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="home-differentiation__point"
                    >
                      <div className="home-differentiation__point-icon-wrapper">
                        <CheckCircle2 className="home-differentiation__point-icon" />
                      </div>
                      <span className="home-differentiation__point-text">
                        {lang === "ar" ? point.ar : point.en}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-industries">
        <div className="home-container">
          <div className="home-industries__inner">
            <div className="home-industries__label">
              <span className="home-industries__eyebrow">
                {lang === "ar" ? "قطاعات السوق" : "Market Sectors"}
              </span>
              <h3 className="home-industries__title">
                {lang === "ar"
                  ? "الصناعات والقطاعات التي نخدمها"
                  : "Industries and Sectors Spanned"}
              </h3>
            </div>

            <div className="home-industries__grid">
              {industries.slice(0, 4).map((ind, idx) => {
                const IndIcon = iconMap[ind.icon] || Building2;
                return (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOptions}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="home-industries__card"
                  >
                    <div className="home-industries__card-header">
                      <span className="home-industries__card-num">
                        0{idx + 1}
                      </span>
                      <IndIcon className="home-industries__card-icon" />
                    </div>

                    <div className="home-industries__card-footer">
                      <span className="home-industries__card-title">
                        {lang === "ar" ? ind.titleAr : ind.title}
                      </span>
                      <span className="home-industries__card-arrow">↗</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="home-testimonials">
        <div className="home-container">
          <div className="home-testimonials__grid">
            <div className="home-testimonials__intro">
              <span className="home-testimonials__eyebrow">
                {lang === "ar" ? "شهادات العملاء" : "Endorsements"}
              </span>
              <h2 className="home-testimonials__title">
                {lang === "ar" ? "سجل رضا عملائنا" : "Client Alignment Records"}
              </h2>
              <div className="home-testimonials__divider" />
              <p className="home-testimonials__intro-text">
                {lang === "ar"
                  ? "روايات موثقة عن تسليم دقيق ومكاني عبر مشاريع رائدة."
                  : "Verifiable accounts of absolute spatial delivery across prime developments."}
              </p>
            </div>

            <div className="home-testimonials__cards">
              {testimonials.slice(0, 2).map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="home-testimonials__card"
                >
                  <div>
                    <Quote className="home-testimonials__quote-icon" />
                    <p className="home-testimonials__text">
                      "{lang === "ar" ? item.contentAr : item.content}"
                    </p>
                  </div>
                  <div className="home-testimonials__author">
                    <span className="home-testimonials__author-name">
                      {lang === "ar" ? item.nameAr : item.name}
                    </span>
                    <span className="home-testimonials__author-role">
                      {lang === "ar" ? item.roleAr : item.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-faq">
        <div className="section-container section-container--narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="home-faq__header"
          >
            <span className="home-faq__eyebrow">
              {lang === "ar" ? "استفسارات" : "Inquiries"}
            </span>
            <h2 className="home-faq__title">
              {lang === "ar" ? "الأسئلة الشائعة" : "General Knowledge Base"}
            </h2>
            <div className="home-faq__divider" />
          </motion.div>

          <div className="home-faq__list">
            {faqs.slice(0, 9).map((faq, idx) => {
              const isCurrentOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    "home-faq__item",
                    isCurrentOpen && "home-faq__item--open",
                  )}
                >
                  <button
                    onClick={() => setActiveFaq(isCurrentOpen ? null : idx)}
                    className="home-faq__trigger"
                  >
                    <span
                      className={cn(
                        "home-faq__question",
                        isCurrentOpen && "home-faq__question--active",
                      )}
                    >
                      <span className="home-faq__question-num">0{idx + 1}</span>
                      <span className="home-faq__question-text">
                        {lang === "ar" ? faq.questionAr : faq.question}
                      </span>
                    </span>
                    <div className="home-faq__icon-box">
                      <ChevronDown
                        className={cn(
                          "home-faq__chevron",
                          isCurrentOpen && "home-faq__chevron--open",
                        )}
                      />
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isCurrentOpen ? "auto" : 0,
                      opacity: isCurrentOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="home-faq__answer"
                  >
                    <div className="home-faq__answer-inner">
                      <div className="home-faq__answer-text">
                        {lang === "ar" ? faq.answerAr : faq.answer}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__bg">
          <div className="home-cta__bg-gradient" />
          <div className="home-cta__bg-vignette" />
          <img
            src={homeImages.cta}
            alt="Fortress Institutional Frameworks"
            loading="lazy"
            decoding="async"
            className="home-cta__bg-img"
          />
        </div>

        <div className="home-cta__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="home-cta__badge">
              <span className="home-cta__eyebrow">
                {lang === "ar"
                  ? "ابدأ مشروعك اليوم"
                  : "Commissioning Inquiries"}
              </span>
            </div>
            <h2 className="home-cta__title">
              {t("cta.titleMain")} <br />
              <span className="home-cta__title-accent">
                {t("cta.titleAccent")}
              </span>
            </h2>
            <Link to="/contact">
              <Button variant="gold" size="xl" className="home-cta__btn">
                <span>
                  {t("buttons.startProject", {
                    ns: "common",
                    defaultValue: "Start Your Project",
                  })}
                </span>
                <ArrowRight
                  className={cn("home-cta__btn-icon", isRTL && "rotate-180")}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="home-cta__divider" />
      </section>
    </>
  );
}
