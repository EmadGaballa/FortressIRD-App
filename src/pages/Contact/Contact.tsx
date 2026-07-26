import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Upload,
  File,
  X,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  MapPin,
} from "lucide-react";
import { cn } from "@/utils/cn";
import "./Contact.css";

const steps = [
  "projectType",
  "projectDetails",
  "services",
  "clientInfo",
  "message",
  "attachments",
  "review",
];

const projectTypes = [
  "residential",
  "commercial",
  "industrial",
  "mixedUse",
  "consultation",
  "renovation",
  "other",
];
const serviceOptions = [
  "construction",
  "supervision",
  "architecture",
  "engineering",
  "consultation",
  "other",
];
const contactMethods = ["email", "phone", "whatsapp"];
const contactTimes = ["morning", "afternoon", "evening"];

const CONTACT_INFO = {
  phones: ["+201273773339", "+201033701747"],
  whatsapp: "201273773339", 
  email: "fortress.ird@gmail.com",
  facebook: "https://www.facebook.com/Fortress.IRD",
  address: {
    en: "3'Sixty By LMD, New Cairo, Cairo Governorate, 11865.",
    ar: "360 LMD، القاهرة الجديدة، محافظة القاهرة، 11865.",
    mapLink: "https://maps.app.goo.gl/x1GRxJGtSS6hEhHFA",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.131554231252!2d31.549669624710727!3d30.027787222956796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582138fb80f4f9%3A0xe7c46d8b2dc39071!2s3%27Sixty%20By%20LMD!5e1!3m2!1sen!2seg!4v1772477090929!5m2!1sen!2seg",
  },
};



export default function Contact() {
  const { t } = useTranslation("contact");
  const { lang, isRTL } = useI18n();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    location: "",
    currentStage: "",
    estimatedSize: "",
    timeline: "",
    services: [] as string[],
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    preferredContact: "",
    preferredTime: "",
    message: "",
    attachments: [] as File[],
  });

  const updateField = (field: string, value: string | string[] | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(e.target.files!)],
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const canProceed = () => {
    const step = steps[currentStep];
    switch (step) {
      case "projectType":
        return !!formData.projectType;
      case "projectDetails":
        return !!formData.location;
      case "services":
        return formData.services.length > 0;
      case "clientInfo":
        return !!formData.fullName && !!formData.email && !!formData.phone;
      case "message":
        return !!formData.message;
      case "attachments":
        return true;
      case "review":
        return true;
      default:
        return false;
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({
      projectType: "",
      location: "",
      currentStage: "",
      estimatedSize: "",
      timeline: "",
      services: [],
      fullName: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      preferredContact: "",
      preferredTime: "",
      message: "",
      attachments: [],
    });
  };

  const handleSubmit = async () => {
    if (isSending) return;
    setIsSending(true);


    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("[Contact form] Would send:", formData);

    setIsSending(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="contact__success">
        <div className="section-container contact__success-container">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="contact__success-icon">
              <CheckCircle2 />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="contact__success-title">{t("success.title")}</h1>
            <p className="contact__success-message">{t("success.message")}</p>
            <p className="contact__success-desc">{t("success.description")}</p>
            <p className="contact__success-response">
              {t("success.responseTime")}
            </p>
            <Button variant="secondary" onClick={resetForm}>
              {t("success.newInquiry")}
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <main className="contact-page">
      {/* ============ HERO ============ */}
      <section className="contact__hero">
        <div className="contact__hero-overlay" />
        <div className="contact__hero-grid-bg" />

        <div className="section-container contact__hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="contact__hero-badge">
              <MessageCircle className="contact__hero-badge-icon" />
              <span>{t("hero.badge")}</span>
            </div>
            <h1 className="contact__hero-title">{t("hero.title")}</h1>
            <p className="contact__hero-text">{t("hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <div className="contact">
        <div className="section-container">
          <div className="contact__container">
            {/* ============ MULTI-STEP FORM ============ */}
            <div className="contact__header">
              <h2 className="contact__form-heading">{t("page.title")}</h2>
              <p className="contact__subtitle">{t("page.subtitle")}</p>
            </div>
            <div className="contact__progress">
              {steps.map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={cn(
                      "contact__progress-dot",
                      i <= currentStep
                        ? "contact__progress-dot--active"
                        : "contact__progress-dot--inactive",
                    )}
                  />
                  {i < steps.length - 1 && (
                    <div
                      className={cn(
                        "contact__progress-line",
                        i < currentStep
                          ? "contact__progress-line--active"
                          : "contact__progress-line--inactive",
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="contact__form-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Project Type */}
                  {currentStep === 0 && (
                    <div>
                      <h2 className="contact__step-title">
                        {t("steps.projectType")}
                      </h2>
                      <div className="contact__grid-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => updateField("projectType", type)}
                            className={cn(
                              "contact__option-btn",
                              formData.projectType === type
                                ? "contact__option-btn--selected"
                                : "contact__option-btn--unselected",
                            )}
                          >
                            {t(`projectTypes.${type}`)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 1 && (
                    <div>
                      <h2 className="contact__step-title">
                        {t("steps.projectDetails")}
                      </h2>
                      <div>
                        <div className="contact__field">
                          <label className="contact__label">
                            {t("fields.location")}
                          </label>
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) =>
                              updateField("location", e.target.value)
                            }
                            placeholder={t("placeholders.location")}
                            className="contact__input"
                          />
                        </div>
                        <div className="contact__field">
                          <label className="contact__label">
                            {t("fields.currentStage")}
                          </label>
                          <input
                            type="text"
                            value={formData.currentStage}
                            onChange={(e) =>
                              updateField("currentStage", e.target.value)
                            }
                            placeholder={t("placeholders.currentStage")}
                            className="contact__input"
                          />
                        </div>
                        <div className="contact__grid-2">
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.estimatedSize")}
                            </label>
                            <input
                              type="text"
                              value={formData.estimatedSize}
                              onChange={(e) =>
                                updateField("estimatedSize", e.target.value)
                              }
                              placeholder={t("placeholders.estimatedSize")}
                              className="contact__input"
                            />
                          </div>
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.timeline")}
                            </label>
                            <input
                              type="text"
                              value={formData.timeline}
                              onChange={(e) =>
                                updateField("timeline", e.target.value)
                              }
                              placeholder={t("placeholders.timeline")}
                              className="contact__input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Services */}
                  {currentStep === 2 && (
                    <div>
                      <h2 className="contact__step-title">
                        {t("steps.services")}
                      </h2>
                      <div className="contact__grid-2">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            onClick={() => toggleService(service)}
                            className={cn(
                              "contact__option-btn",
                              formData.services.includes(service)
                                ? "contact__option-btn--selected"
                                : "contact__option-btn--unselected",
                            )}
                          >
                            {t(`services.${service}`)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Client Info */}
                  {currentStep === 3 && (
                    <div>
                      <h2 className="contact__step-title">
                        {t("steps.clientInfo")}
                      </h2>
                      <div>
                        <div className="contact__grid-2">
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.fullName")}
                            </label>
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={(e) =>
                                updateField("fullName", e.target.value)
                              }
                              className="contact__input"
                            />
                          </div>
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.company")}
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) =>
                                updateField("company", e.target.value)
                              }
                              className="contact__input"
                            />
                          </div>
                        </div>
                        <div className="contact__grid-2">
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.email")}
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                updateField("email", e.target.value)
                              }
                              className="contact__input"
                            />
                          </div>
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.phone")}
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                updateField("phone", e.target.value)
                              }
                              className="contact__input"
                            />
                          </div>
                        </div>
                        <div className="contact__field">
                          <label className="contact__label">
                            {t("fields.country")}
                          </label>
                          <input
                            type="text"
                            value={formData.country}
                            onChange={(e) =>
                              updateField("country", e.target.value)
                            }
                            className="contact__input"
                          />
                        </div>
                        <div className="contact__grid-2">
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.preferredContact")}
                            </label>
                            <div className="flex gap-2">
                              {contactMethods.map((method) => (
                                <button
                                  key={method}
                                  onClick={() =>
                                    updateField("preferredContact", method)
                                  }
                                  className={cn(
                                    "contact__option-btn flex-1 text-xs",
                                    formData.preferredContact === method
                                      ? "contact__option-btn--selected"
                                      : "contact__option-btn--unselected",
                                  )}
                                >
                                  {t(`contactMethods.${method}`)}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="contact__field">
                            <label className="contact__label">
                              {t("fields.preferredTime")}
                            </label>
                            <div className="flex gap-2">
                              {contactTimes.map((time) => (
                                <button
                                  key={time}
                                  onClick={() =>
                                    updateField("preferredTime", time)
                                  }
                                  className={cn(
                                    "contact__option-btn flex-1 text-xs",
                                    formData.preferredTime === time
                                      ? "contact__option-btn--selected"
                                      : "contact__option-btn--unselected",
                                  )}
                                >
                                  {t(`contactTimes.${time}`)}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Message */}
                  {currentStep === 4 && (
                    <div>
                      <h2 className="contact__step-title">
                        {t("steps.message")}
                      </h2>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder={t("placeholders.message")}
                        rows={8}
                        className="contact__textarea"
                      />
                    </div>
                  )}

                  {/* Step 6: Attachments */}
                  {currentStep === 5 && (
                    <div>
                      <h2 className="contact__step-title">
                        {t("steps.attachments")}
                      </h2>
                      <label className="contact__upload-area">
                        <Upload className="contact__upload-icon" />
                        <span className="contact__upload-text">
                          {t("fields.attachments")}
                        </span>
                        <span className="contact__upload-hint">
                          PDF, Images, Documents
                        </span>
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        />
                      </label>
                      {formData.attachments.length > 0 && (
                        <div className="contact__file-list">
                          {formData.attachments.map((file, i) => (
                            <div key={i} className="contact__file-item">
                              <div className="contact__file-info">
                                <File size={16} className="text-navy-400" />
                                <span className="contact__file-name">
                                  {file.name}
                                </span>
                              </div>
                              <button
                                onClick={() => removeFile(i)}
                                className="contact__file-remove"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 7: Review */}
                  {currentStep === 6 && (
                    <div>
                      <h2 className="contact__step-title">
                        {t("review.title")}
                      </h2>
                      <div>
                        <div className="contact__review-item">
                          <p className="contact__review-label">
                            {t("review.projectType")}
                          </p>
                          <p className="contact__review-value">
                            {t(`projectTypes.${formData.projectType}`)}
                          </p>
                        </div>
                        <div className="contact__review-item">
                          <p className="contact__review-label">
                            {t("review.projectDetails")}
                          </p>
                          <p className="contact__review-value">
                            {formData.location || "—"}
                          </p>
                        </div>
                        <div className="contact__review-item">
                          <p className="contact__review-label">
                            {t("review.services")}
                          </p>
                          <p className="contact__review-value">
                            {formData.services
                              .map((s) => t(`services.${s}`))
                              .join(", ")}
                          </p>
                        </div>
                        <div className="contact__review-item">
                          <p className="contact__review-label">
                            {t("review.clientInfo")}
                          </p>
                          <p className="contact__review-value">
                            {formData.fullName} • {formData.email} •{" "}
                            {formData.phone}
                          </p>
                        </div>
                        {formData.message && (
                          <div className="contact__review-item">
                            <p className="contact__review-label">
                              {t("review.message")}
                            </p>
                            <p className="contact__review-value contact__review-value--text">
                              {formData.message}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="contact__nav">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="gap-2"
                >
                  <ChevronLeft
                    className={cn("h-4 w-4", isRTL && "rotate-180")}
                  />
                  {t("back", { ns: "common" })}
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={() =>
                      setCurrentStep(
                        Math.min(steps.length - 1, currentStep + 1),
                      )
                    }
                    disabled={!canProceed()}
                    className="gap-2"
                  >
                    {t("next", { ns: "common" })}

                    <ChevronRight
                      className={cn("h-4 w-4", isRTL && "rotate-180")}
                    />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    size="lg"
                    disabled={isSending}
                  >
                    {isSending
                      ? t("form.sending")
                      : t("requestConsultation", { ns: "common" })}
                  </Button>
                )}
              </div>
            </div>
          </div>
          {/* ============ QUICK CONNECT + MAP ============ */}
          <motion.div
            className="contact__connect"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact__connect-left">
              <div className="contact__connect-header">
                <span className="contact__connect-eyebrow">
                  {t("quick.eyebrow")}
                </span>
                <h3 className="contact__connect-heading">
                  {t("quick.heading")}
                </h3>
              </div>

              <div className="contact__connect-grid">
                {/* PHONE CARD */}
                <a
                  href={`tel:${CONTACT_INFO.phones[0]}`}
                  className="contact__connect-card group"
                >
                  <div className="contact__connect-card-top">
                    <div className="contact__connect-icon-wrapper">
                      <Phone className="contact__connect-icon" />
                    </div>
                    <span className="contact__connect-label">
                      {t("quick.call")}
                    </span>
                  </div>
                  <span className="contact__connect-value">
                    {CONTACT_INFO.phones[0]}
                  </span>
                  <span className="contact__connect-action">
                    {t("quick.callNow")}
                  </span>
                </a>

                {/* WHATSAPP CARD */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__connect-card group"
                >
                  <div className="contact__connect-card-top">
                    <div className="contact__connect-icon-wrapper">
                      <MessageCircle className="contact__connect-icon" />
                    </div>
                    <span className="contact__connect-label">
                      {t("quick.whatsapp")}
                    </span>
                  </div>
                  <span className="contact__connect-value">
                    {t("quick.whatsappHint")}
                  </span>
                  <span className="contact__connect-action">
                    {t("quick.openChat")}
                  </span>
                </a>

                {/* EMAIL CARD */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__connect-card group"
                >
                  <div className="contact__connect-card-top">
                    <div className="contact__connect-icon-wrapper">
                      <Mail className="contact__connect-icon" />
                    </div>
                    <span className="contact__connect-label">
                      {t("quick.email")}
                    </span>
                  </div>
                  <span className="contact__connect-value">
                    {CONTACT_INFO.email}
                  </span>
                  <span className="contact__connect-action">
                    {t("quick.sendEmail")}
                  </span>
                </a>

                {/* FACEBOOK / SOCIAL CARD */}
                {CONTACT_INFO.facebook && (
                  <a
                    href={CONTACT_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__connect-card group"
                  >
                    <div className="contact__connect-card-top">
                      <div className="contact__connect-icon-wrapper">
                        <Facebook className="contact__connect-icon" />
                      </div>
                      <span className="contact__connect-label">
                        {t("quick.facebook")}
                      </span>
                    </div>
                    <span className="contact__connect-value">
                      {t("quick.facebookHint")}
                    </span>
                    <span className="contact__connect-action">
                      {t("quick.visitPage")}
                    </span>
                  </a>
                )}
              </div>

              {/* ADDRESS FOOTER */}
              <a
                href={CONTACT_INFO.address.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__connect-address group"
              >
                <div className="contact__connect-address-icon-wrap">
                  <MapPin className="contact__connect-icon" />
                </div>
                <div className="contact__connect-address-content">
                  <span className="contact__connect-address-label">
                    {t("quick.headquarters")}
                  </span>
                  <span className="contact__connect-address-text">
                    {lang === "ar"
                      ? CONTACT_INFO.address.ar
                      : CONTACT_INFO.address.en}
                  </span>
                </div>
                <ChevronRight
                  className={cn(
                    "contact__connect-address-arrow",
                    isRTL && "rotate-180",
                  )}
                />
              </a>
            </div>

            {/* MAP SIDE */}
            <div className="contact__connect-map-wrapper">
              <div className="contact__connect-map-badge">
                <span className="contact__connect-map-dot" />
                <span>
                  {t("quick.interactiveMap")}
                </span>
              </div>
              <iframe
                src={CONTACT_INFO.address.embedSrc}
                className="contact__connect-map-frame"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fortress Location Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
