import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/ui/LazyImage";
import { ArrowUpRight, MapPin, Building2, Sparkles } from "lucide-react";
import { stats, companyInfo } from "@/constants/data";
import "./Portfolio.css";

export interface ProjectItem {
  id: string;
  title: string;
  titleAr: string;
  category: "residential" | "commercial" | "mixed-use";
  status: "completed" | "ongoing";
  year: string;
  location: string;
  locationAr: string;
  summary: string;
  summaryAr: string;
  coverImage: string;
}

const localProjects: ProjectItem[] = [
  {
    id: "residence-villa-katameya",
    title: "Al Andalus, New Cairo",
    titleAr: "الأندلس، القاهرة الجديدة",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Andalus, New Cairo",
    locationAr: "قطامية هايتس، القاهرة",
    summary:
      "A bespoke high-end private residence featuring contemporary architectural minimalism and tailored interior finishes.",
    summaryAr:
      "تصميم وبناء فيلا سكنية فاخرة تتميز بطراز معماري حديث ولمسات داخلية فاخرة.",
    coverImage: "/images/residential-project-1.png",
  },
  {
    id: "duplex-zayed-compound",
    title: "Sheikh Zayed City, Egypt",
    titleAr: "مدينة الشيخ زايد، مصر",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "6th of October City",
    locationAr: "مدينة السادس من أكتوبر",
    summary:
      "Premium duplex residence emphasizing structural spatial planning, ambient light distribution, and custom woodwork.",
    summaryAr:
      "وحدة دوبلكس فاخرة تعتمد على التخطيط المعماري الذكي وتوزيع الإضاءة الطبيعية.",
    coverImage: "/images/residential-villa-24.png",
  },
  {
    id: "coastal-resort-chalets",
    title: "Sheikh Zayed City, Egypt",
    titleAr: "مدينة الشيخ زايد، مصر",
    category: "residential",
    status: "ongoing",
    year: "2025",
    location: "Sheikh Zayed City",
    locationAr: "الساحل الشمالي، مصر",
    summary:
      "Beachfront residential chalets engineered with durable marine-grade construction materials and seaside vistas.",
    summaryAr:
      "شاليهات ساحلية مصممة بمواد بناء مقاومة للعوامل البحرية مع إطلالات بانورامية على البحر.",
    coverImage: "/images/residential-villa-20.png",
  },
  {
    id: "palm-hills-mansion",
    title: "Ain Sokhna, Egypt",
    titleAr: "العين السخنة، مصر",
    category: "residential",
    status: "completed",
    year: "2023",
    location: "Sheikh Zayed City",
    locationAr: "مدينة الشيخ زايد",
    summary:
      "An expansive modern mansion featuring underground parking, private infinity pool, and cantilevered terraces.",
    summaryAr:
      "قصر عصري واسع يضم موقف سيارات تحت الأرض، حمام سباحة إنفينيتي، وتراسات معلقة.",
    coverImage: "/images/residential-project-5.png",
  },
  {
    id: "lake-view-residence",
    title: "New Administrative Capital (NAC), Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "New Cairo, Egypt",
    locationAr: "القاهرة الجديدة، مصر",
    summary:
      "Elegantly proportioned luxury residence crafted with curtain wall glass and high-durability natural stone cladding.",
    summaryAr:
      "فيلا فاخرة بتصميم متناسق تعتمد على الواجهات الزجاجية والكسوة الحجرية الطبيعية.",
    coverImage: "/images/residential-villa-17.png",
  },
  {
    id: "allegria-golf-villa",
    title: "Sheikh Zayed City, Egypt",
    titleAr: "مدينة الشيخ زايد، مصر",
    category: "residential",
    status: "completed",
    year: "2023",
    location: "Beverly Hills, Sheikh Zayed",
    locationAr: "بيفرلي هيلز، الشيخ زايد",
    summary:
      "Exclusive villa overlooking golf greenways, built with sustainable solar thermal integration and Smart Home automation.",
    summaryAr:
      "فيلا حصرية تطل على ملاعب الجولف، مزودة بأنظمة طاقة شمسية مستدامة وتحكم ذكي.",
    coverImage: "/images/residential-villa-18.png",
  },
  {
    id: "october-park-penthouse",
    title: "North Coast, Egypt",
    titleAr: "الساحل الشمالي، مصر",
    category: "residential",
    status: "ongoing",
    year: "2025",
    location: "6th of October City",
    locationAr: "مدينة السادس من أكتوبر",
    summary:
      "Top-floor penthouse suite with double-height ceilings, automated skylights, and rooftop outdoor entertainment space.",
    summaryAr:
      "شقة بنتهاوس بالدور الأخير بسقف مرتفع، نوافذ سقفية أوتوماتيكية، ومساحة ترفيهية بالسطح.",
    coverImage: "/images/residential-villa-10.png",
  },
  {
    id: "murooj-twin-house",
    title: "New Administrative Capital, Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Alexandria, Egypt",
    locationAr: "الإسكندرية، مصر",
    summary:
      "Contemporary twin house featuring acoustic insulation, energy-efficient HVAC engineering, and landscaped gardens.",
    summaryAr:
      "توين هاوس عصري يتميز بالعزل الصوتي، أنظمة تكييف موفرة للطاقة، وحقائق طبيعية.",
    coverImage: "/images/residential-villa-11.png",
  },
  {
    id: "el-gorna-eco-villa",
    title: "New Cairo — First Settlement",
    titleAr: "القاهرة الجديدة — التجمع الأول",
    category: "residential",
    status: "completed",
    year: "2023",
    location: "Luxor, Egypt",
    locationAr: "الأقصر، مصر",
    summary:
      "Bio-climatic residential architecture blending regional earthen masonry with modern structural thermal performance.",
    summaryAr:
      "تصميم معماري بيئي يجمع بين البناء التقليدي والأداء الحراري المعاصر.",
    coverImage: "/images/residential-villa-14.png",
  },
  {
    id: "choueifat-family-townhouse",
    title: "New Cairo — First Settlement",
    titleAr: "القاهرة الجديدة — التجمع الأول",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Fifth Settlement, New Cairo",
    locationAr: "التجمع الخامس، القاهرة الجديدة",
    summary:
      "Sleek multi-story townhouse layout optimized for urban family living with flexible open-plan communal spaces.",
    summaryAr:
      "تاون هاوس متعدد الطوابق بتصميم عصري يناسب المعيشة العائلية مع مساحات مفتوحة مرنة.",
    coverImage: "/images/residential-villa-1.jfif",
  },
  {
    id: "red-sea-bay-villa",
    title: "New Administrative Capital, Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "residential",
    status: "ongoing",
    year: "2025",
    location: "Red Sea Governorate",
    locationAr: "محافظة البحر الأحمر",
    summary:
      "Resort-style luxury coastal villa with anti-corrosive concrete reinforcement and seaside swimming facilities.",
    summaryAr:
      "فيلا فاخرة بنمط منتجع ساحلي مع خرسانة خرسانية خرسانات مقاومة للتآكل وحمام سباحة.",
    coverImage: "/images/residential-building-4.png",
  },
  {
    id: "badya-smart-home",
    title: "New Administrative Capital, Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Creative City, October",
    locationAr: "مدينة أكتوبر",
    summary:
      "IoT-enabled smart residential property engineered for maximum energy performance and digital access management.",
    summaryAr:
      "منزل ذكي يدعم تقنيات إنترنت الأشياء ومصمم لتحقيق أعلى كفاءة في استهلاك الطاقة.",
    coverImage: "/images/residential-building-3.png",
  },
  {
    id: "zamalek-boutique-apartment",
    title: "Beit Al Watan, New Cairo",
    titleAr: "بيت الوطن، القاهرة الجديدة",
    category: "residential",
    status: "completed",
    year: "2023",
    location: "Zamalek, Cairo",
    locationAr: "الزمالك، القاهرة",
    summary:
      "Complete structural restoration and interior retrofit of a high-value historic residential apartment unit.",
    summaryAr:
      "ترميم إنشائي وتحديث داخلي شامل لشقة سكنية تراثية ذات قيمة عالية.",
    coverImage: "/images/residential-building-1.png",
  },
  {
    id: "marassi-cliff-villa",
    title: "North Coast, Egypt",
    titleAr: "الساحل الشمالي، مصر",
    category: "residential",
    status: "ongoing",
    year: "2026",
    location: "Sidi Abdel Rahman",
    locationAr: "سيدي عبد الرحمن",
    summary:
      "Challenging topography villa construction featuring deep pile foundations and cantilevered viewing decks.",
    summaryAr:
      "بناء فيلا على تضاريس مرتفعة مع أساسات عميقة ومنصات مشاهدة معلقة.",
    coverImage: "/images/new-cairo-twin-2.png",
  },
  {
    id: "swan-lake-residence",
    title: "King Abdullah Economic City (KAEC)",
    titleAr: "مدينة الملك عبد الله الاقتصادية",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "First Settlement, New Cairo",
    locationAr: "التجمع الأول، القاهرة الجديدة",
    summary:
      "Minimalist residential structure featuring custom landscape engineering, reflection pools, and wooden shading screens.",
    summaryAr:
      "مبنى سكني بسيط التصميم يضم تنسيق موقع مخصص، بحيرات عاكسة، وسواتر خشبية.",
    coverImage: "/images/modern-compound-villa-2.png",
  },
  {
    id: "villes-garden-townhouse",
    title: "Jumeirah Golf Estates",
    titleAr: "جميرا جولف إستيتس",
    category: "residential",
    status: "completed",
    year: "2023",
    location: "Suez Road, Cairo",
    locationAr: "طريق السويس، القاهرة",
    summary:
      "Compact footprint townhouse engineered for efficient solar gain control and maximum private garden area.",
    summaryAr:
      "تاون هاوس بمساحة استغلالية فائقة مصمم للتحكم في الإضاءة الشمسية وزيادة مساحة الحديقة.",
    coverImage: "/images/modern-compound-villa-1.png",
  },
  {
    id: "diplomatic-quarter-villa",
    title: "Dubai South",
    titleAr: "دبي الجنوب",
    category: "residential",
    status: "ongoing",
    year: "2025",
    location: "R1 District, New Capital",
    locationAr: "الحي السكني R1، العاصمة الإدارية",
    summary:
      "High-security diplomatic residence built with reinforced blast-resistant facade assemblies and biometric entry controls.",
    summaryAr:
      "فيلا دبلوماسية عالية الأمان مجهزة بواجهات مقواة وأنظمة تحكم بالبصمة.",
    coverImage: "/images/luxury_residential_street.jpg",
  },
  {
    id: "maadi-creek-duplex",
    title: "Palm Hills New Cairo",
    titleAr: "بالم هيلز القاهرة الجديدة",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Maadi, Cairo",
    locationAr: "المعادي، القاهرة",
    summary:
      "Waterfront duplex renovation showcasing panoramic floor-to-ceiling glazing and acoustically insulated partition systems.",
    summaryAr:
      "تجديد دوبلكس واجهة مائية يضم زجاجاً كاملاً من الأرض للسقف وحوائط معزولة صوتياً.",
    coverImage: "/images/luxury-living-room.png",
  },
  {
    id: "hydepark-grand-villa",
    title: "Hyde Park, New Cairo",
    titleAr: "هايد بارك، القاهرة الجديدة",
    category: "residential",
    status: "completed",
    year: "2023",
    location: "New Cairo, Egypt",
    locationAr: "القاهرة الجديدة، مصر",
    summary:
      "Neoclassical architectural villa featuring hand-carved stone columns, high vaulted foyers, and bespoke marble work.",
    summaryAr:
      "فيلا بالطراز الكلاسيكي الجديد تضم أعمدة حجرية منحوتة يدويًا ورخاماً فاخراً.",
    coverImage: "/images/master_bedroom_interior_design.jpg",
  },
  {
    id: "al-rehab-modern-villa-1",
    title: "Hyde Park, New Cairo",
    titleAr: "هايد بارك، القاهرة الجديدة",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Rehab City, Cairo",
    locationAr: "مدينة الرحاب، القاهرة",
    summary:
      "Refined modern villa equipped with smart climate control systems, underground service quarters, and custom infinity spa.",
    summaryAr:
      "فيلا حديثة راقية مزودة بأنظمة تحكم بالطقس الداخلي، طابق خدمات سفلي، وحمام سباحة وفاخر.",
    coverImage: "/images/modern_apartment_kitchen_design.jpg",
  },
  {
    id: "al-rehab-modern-villa-2",
    title: "Dubai Hills Estate",
    titleAr: "دبي هيلز إستيت",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Rehab City, Cairo",
    locationAr: "مدينة الرحاب، القاهرة",
    summary:
      "Refined modern villa equipped with smart climate control systems, underground service quarters, and custom infinity spa.",
    summaryAr:
      "فيلا حديثة راقية مزودة بأنظمة تحكم بالطقس الداخلي، طابق خدمات سفلي، وحمام سباحة وفاخر.",
    coverImage: "/images/luxury_open-concept_kitchen.jpg",
  },
  {
    id: "al-rehab-modern-villa-3",
    title: "New Cairo — First Settlement",
    titleAr: "القاهرة الجديدة — التجمع الأول",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Rehab City, Cairo",
    locationAr: "مدينة الرحاب، القاهرة",
    summary:
      "Refined modern villa equipped with smart climate control systems, underground service quarters, and custom infinity spa.",
    summaryAr:
      "فيلا حديثة راقية مزودة بأنظمة تحكم بالطقس الداخلي، طابق خدمات سفلي، وحمام سباحة وفاخر.",
    coverImage: "/images/interior-living-room.png",
  },
  {
    id: "al-rehab-modern-villa-4",
    title: "Dubai Hills Estate",
    titleAr: "دبي هيلز إستيت",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Rehab City, Cairo",
    locationAr: "مدينة الرحاب، القاهرة",
    summary:
      "Refined modern villa equipped with smart climate control systems, underground service quarters, and custom infinity spa.",
    summaryAr:
      "فيلا حديثة راقية مزودة بأنظمة تحكم بالطقس الداخلي، طابق خدمات سفلي، وحمام سباحة وفاخر.",
    coverImage: "/images/garden_room_and_lounge_interior.jpg",
  },
  {
    id: "al-rehab-modern-villa-5",
    title: "Beit Al Watan, New Cairo",
    titleAr: "بيت الوطن، القاهرة الجديدة",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Rehab City, Cairo",
    locationAr: "مدينة الرحاب، القاهرة",
    summary:
      "Refined modern villa equipped with smart climate control systems, underground service quarters, and custom infinity spa.",
    summaryAr:
      "فيلا حديثة راقية مزودة بأنظمة تحكم بالطقس الداخلي، طابق خدمات سفلي، وحمام سباحة وفاخر.",
    coverImage: "/images/apartment_living_room.jpg",
  },
  {
    id: "al-rehab-modern-villa-6",
    title: "Sheikh Zayed City, Egypt",
    titleAr: "مدينة الشيخ زايد، مصر",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Rehab City, Cairo",
    locationAr: "مدينة الرحاب، القاهرة",
    summary:
      "Refined modern villa equipped with smart climate control systems, underground service quarters, and custom infinity spa.",
    summaryAr:
      "فيلا حديثة راقية مزودة بأنظمة تحكم بالطقس الداخلي، طابق خدمات سفلي، وحمام سباحة وفاخر.",
    coverImage: "/images/home_office.jpg",
  },
  {
    id: "al-rehab-modern-villa-7",
    title: "Riyadh — Al Yasmin",
    titleAr: "الرياض — الياسمين",
    category: "residential",
    status: "completed",
    year: "2024",
    location: "Al Rehab City, Cairo",
    locationAr: "مدينة الرحاب، القاهرة",
    summary:
      "Refined modern villa equipped with smart climate control systems, underground service quarters, and custom infinity spa.",
    summaryAr:
      "فيلا حديثة راقية مزودة بأنظمة تحكم بالطقس الداخلي، طابق خدمات سفلي، وحمام سباحة وفاخر.",
    coverImage: "/images/lounge-outdoor-1.png",
  },

  {
    id: "commercial-business-hub",
    title: "New Administrative Capital, Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "commercial",
    status: "completed",
    year: "2023",
    location: "New Cairo, Egypt",
    locationAr: "القاهرة الجديدة، مصر",
    summary:
      "Multi-story corporate center housing modern office workspaces, retail plazas, and intelligent building management systems.",
    summaryAr:
      "مركز تجاري وإداري متكامل يضم مساحات مكتبية حديثة ومراكز تسوق مع أنظمة إدارة طاقة ذكية.",
    coverImage: "/images/outdoor-mall.png",
  },
  {
    id: "corporate-headquarters",
    title: "New Administrative Capital, Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "commercial",
    status: "completed",
    year: "2023",
    location: "Financial District, New Capital",
    locationAr: "حي المال والأعمال، العاصمة الإدارية",
    summary:
      "Flagship corporate headquarters engineered with BIM precision, double-skin glass curtain walls, and smart security systems.",
    summaryAr:
      "المقر الرئيسي للشركة والمصمم بتقنيات نمذجة البناء BIM الحديثة، مع واجهات زجاجية مزدوجة وأنظمة متطورة.",
    coverImage: "/images/office-bulding-4.png",
  },
  {
    id: "medical-specialty-center-1",
    title: "Sheikh Zayed City, Egypt",
    titleAr: "مدينة الشيخ زايد، مصر",
    category: "commercial",
    status: "ongoing",
    year: "2025",
    location: "Sheikh Zayed City",
    locationAr: "مدينة الشيخ زايد",
    summary:
      "Specialized healthcare commercial building constructed under strict cleanroom conditions, medical gas systems, and sterile finishes.",
    summaryAr:
      "مبنى طبي تجاري متخصص تم تنفيذه وفق أعلى معايير التعقيم وأنظمة الغازات الطبية.",
    coverImage: "/images/office-building-2.png",
  },
  {
    id: "medical-specialty-center-2",
    title: "Sheikh Zayed City, Egypt",
    titleAr: "مدينة الشيخ زايد، مصر",
    category: "commercial",
    status: "ongoing",
    year: "2025",
    location: "Sheikh Zayed City",
    locationAr: "مدينة الشيخ زايد",
    summary:
      "Specialized healthcare commercial building constructed under strict cleanroom conditions, medical gas systems, and sterile finishes.",
    summaryAr:
      "مبنى طبي تجاري متخصص تم تنفيذه وفق أعلى معايير التعقيم وأنظمة الغازات الطبية.",
    coverImage: "/images/office-building-1.png",
  },
  {
    id: "medical-specialty-center-3",
    title: "New Administrative Capital, Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "commercial",
    status: "ongoing",
    year: "2025",
    location: "Sheikh Zayed City",
    locationAr: "مدينة الشيخ زايد",
    summary:
      "Specialized healthcare commercial building constructed under strict cleanroom conditions, medical gas systems, and sterile finishes.",
    summaryAr:
      "مبنى طبي تجاري متخصص تم تنفيذه وفق أعلى معايير التعقيم وأنظمة الغازات الطبية.",
    coverImage: "/images/Food-Hall-Promenade.png",
  },

  {
    id: "mixed-use-plaza",
    title: "Ras El Hekma, Egypt",
    titleAr: "رأس الحكمة، مصر",
    category: "mixed-use",
    status: "ongoing",
    year: "2025",
    location: "Ras El Hekma",
    locationAr: "مدينة الشيخ زايد",
    summary:
      "Dynamic mixed-use development integrating luxury serviced apartments, fine dining venues, and pedestrian-friendly public spaces.",
    summaryAr:
      "مشروع متعدد الاستخدامات يجمع بين الشقق الفندقية الفاخرة، المطاعم الراقية، والمساحات الخضراء المفتوحة.",
    coverImage: "/images/mall-river.png",
  },
  {
    id: "capital-walk-complex",
    title: "New Administrative Capital (NAC), Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "mixed-use",
    status: "ongoing",
    year: "2026",
    location: "Downtown, New Capital",
    locationAr: "وسط المدينة، العاصمة الإدارية",
    summary:
      "Urban lifestyle complex blending boutique retail promenades, co-working spaces, and premium residential loft apartments.",
    summaryAr:
      "مجمع حضري متكامل يجمع بين المتاجر الراقية، مساحات العمل المشترك، وشقق اللوفت السكنية.",
    coverImage: "/images/residential-project-3.png",
  },
  {
    id: "oasis-towers-mixed",
    title: "New Administrative Capital (NAC), Egypt",
    titleAr: "العاصمة الإدارية الجديدة، مصر",
    category: "mixed-use",
    status: "completed",
    year: "2024",
    location: "Maadi Promenade, Cairo",
    locationAr: "كورنيش المعادي، القاهرة",
    summary:
      "Twin towers combining modern corporate office floors on lower levels with luxury water-view residential suites on upper floors.",
    summaryAr:
      "برجان مزدوجان يجمعان بين مكاتب الأعمال بالطبقات السفلى وشقق سكنية فاخرة ذات إطلالة مائية بالطبقات العليا.",
    coverImage: "/images/residential-project-6.png",
  },
];

function FadeInView({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = [
  { key: "all", label: "All Projects", labelAr: "جميع المشاريع" },
  { key: "residential", label: "Residential (26)", labelAr: "سكني (٢٠)" },
  { key: "commercial", label: "Commercial (5)", labelAr: "تجاري (٣)" },
  {
    key: "mixed-use",
    label: "Mixed-Use (3)",
    labelAr: "متعدد الاستخدامات (٥)",
  },
];

function getVariant(index: number): "wide" | "tall" {
  const pattern: Array<"wide" | "tall"> = ["wide", "tall"];
  return pattern[index % pattern.length];
}

export default function Portfolio() {
  const { t } = useTranslation(["home", "projects"]);
  const { lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? localProjects
      : localProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="portfolio-page">
      <section className="portfolio__hero">
        <div className="portfolio__hero-overlay" />
        <div className="portfolio__hero-grid-bg" />

        <div className="project-container portfolio__hero-content">
          <FadeInView>
            <div className="portfolio__hero-badge">
              <Sparkles className="portfolio__hero-badge-icon" />
              <span>
                {lang === "ar"
                  ? "سجل إنجازاتنا المعمارية"
                  : "Architectural Portfolio"}
              </span>
            </div>

            <h1 className="portfolio__hero-title">
              {t("portfolio.title", {
                ns: "home",
                defaultValue: "Crafting Iconic Spaces & Timeless Structures",
              })}
            </h1>

            <p className="portfolio__hero-text">
              {t("portfolio.description", {
                ns: "home",
                defaultValue:
                  "Explore our portfolio of engineering excellence, where innovative design meets precision construction across luxury residential, commercial, and mixed-use developments.",
              })}
            </p>

            <div className="portfolio__hero-stats">
              {stats.slice(0, 3).map((stat, i) => (
                <div key={stat.label} className="portfolio__hero-stat">
                  <span className="portfolio__hero-stat-value">
                    {stat.value}
                    {lang === "ar" ? stat.suffixAr : stat.suffix}
                  </span>
                  <span className="portfolio__hero-stat-label">
                    {lang === "ar" ? stat.labelAr : stat.label}
                  </span>
                  {i < 2 && <span className="portfolio__hero-stat-divider" />}
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="portfolio__showcase">
        <div className="project-container">
          <div className="portfolio__filters-wrapper">
            <div className="portfolio__filters">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`portfolio__filter-btn ${isActive ? "is-active" : ""}`}
                  >
                    <span className="portfolio__filter-label">
                      {lang === "ar" ? cat.labelAr : cat.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterBg"
                        className="portfolio__filter-active-bg"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className="portfolio__grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const variant = getVariant(i);
                return (
                  <motion.div
                    key={`${project.id}-${i}`}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`portfolio__card-wrap portfolio__card-wrap--${variant}`}
                  >
                    <div
                      className={`portfolio__card portfolio__card--${variant} group`}
                    >
                      <div className="portfolio__card-media">
                        <LazyImage
                          src={project.coverImage}
                          alt={lang === "ar" ? project.titleAr : project.title}
                          className="portfolio__card-img"
                          width="800"
                          height="600"
                        />
                        <div className="portfolio__card-gradient" />

                        <div className="portfolio__card-badges-top">
                          <span className="portfolio__badge portfolio__badge--category">
                            <Building2 className="portfolio__badge-icon" />
                            {lang === "ar"
                              ? project.category === "residential"
                                ? "سكني"
                                : project.category === "commercial"
                                  ? "تجاري"
                                  : "متعدد الاستخدامات"
                              : project.category.replace("-", " ")}
                          </span>
                        </div>
                      </div>

                      <div className="portfolio__card-content">
                        <h3
                          className="portfolio__card-title"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <MapPin
                            className="portfolio__card-location-icon"
                            style={{ width: "20px", height: "20px" }}
                          />
                          {lang === "ar" ? project.titleAr : project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="portfolio__empty">
              {lang === "ar"
                ? "لا توجد مشاريع في هذه الفئة حالياً."
                : "No projects in this category yet."}
            </div>
          )}
        </div>
      </section>

      <section className="portfolio__cta">
        <div className="portfolio__cta-overlay" />
        <div className="project-container">
          <FadeInView className="portfolio__cta-inner">
            <span className="portfolio__cta-eyebrow">
              {lang === "ar"
                ? "ابدأ رؤيتك المعمارية"
                : "Start Your Landmark Build"}
            </span>
            <h2 className="portfolio__cta-title">
              {t("cta.title", {
                ns: "home",
                defaultValue: "Ready to Engineer Your Next Masterpiece?",
              })}
            </h2>
            <p className="portfolio__cta-text">
              {t("cta.subtitle", {
                ns: "home",
                defaultValue: `Partner with ${companyInfo.shortName} for premier construction, architectural precision, and execution.`,
              })}
            </p>
            <div className="portfolio__cta-actions">
              <Button asChild size="lg" className="portfolio__cta-btn">
                <Link to="/contact">
                  {lang === "ar" ? "تواصل معنا" : "Contact Us"}
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
