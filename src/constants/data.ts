import type {
  Service,
  Stat,
  ProcessStep,
  NavLink,
  Project,
  Testimonial,
  FAQ,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", labelAr: "الرئيسية", href: "/" },
  { label: "About", labelAr: "من نحن", href: "/about" },
  { label: "Services", labelAr: "خدماتنا", href: "/services" },
  { label: "Projects", labelAr: "أعمالنا", href: "/projects" },
  { label: "Contact", labelAr: "اتصل بنا", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "contracting-construction",
    title: "Contracting & Construction",
    titleAr: "المقاولات والبناء",
    description:
      "Full-cycle construction from structural groundwork to precision finishing — built to last, delivered on time. We handle everything from foundation to final handover with uncompromising quality standards.",
    descriptionAr:
      "البناء الكامل من الأساس الهيكلي إلى التشطيب الدقيق — مبني ليدوم، وتسليمه في الوقت المحدد. نتعامل مع كل شيء من الأساس إلى التسليم النهائي بمعايير جودة لا تقبل المساومة.",
    icon: "HardHat",
  },
  {
    id: "real-estate-development",
    title: "Real Estate Development",
    titleAr: "التطوير العقاري",
    description:
      "Strategic residential and commercial development — from land acquisition to handover, we engineer value at every stage. Our developments combine market insight with architectural excellence.",
    descriptionAr:
      "التطوير السكني والتجاري الاستراتيجي — من الحصول على الأرض إلى التسليم، نحقق القيمة في كل مرحلة. تجمع تطويراتنا بين رؤية السوق والتميز المعماري.",
    icon: "Building2",
  },
  {
    id: "interior-finishing",
    title: "Interior Finishing & Fit-Out",
    titleAr: "التشطيب الداخلي والتجهيز",
    description:
      "Architectural finishes and high-end interior fit-out — where luxury meets craftsmanship in every detail. From residential villas to commercial spaces, we deliver perfection.",
    descriptionAr:
      "التشطيبات المعمارية المخصصة وتجهيز الديكور الفاخر — حيث تلتقي الفخامة بالحرفية في كل التفاصيل. من الفيلات السكنية إلى المساحات التجارية، نقدم الكمال.",
    icon: "Ruler",
  },
  {
    id: "project-management",
    title: "Project & Asset Management",
    titleAr: "إدارة المشاريع والأصول",
    description:
      "End-to-end supervision, operational oversight, and strategic execution — protecting your investment at every phase. We ensure projects stay on time, on budget, and beyond expectations.",
    descriptionAr:
      "الإشراف الشامل، الرقابة التشغيلية، والتنفيذ الاستراتيجي — حماية استثمارك في كل مرحلة. نضمن بقاء المشاريع في الوقت المحدد، ضمن الميزانية، وتجاوز التوقعات.",
    icon: "ClipboardCheck",
  },
  {
    id: "renovation-refurbishment",
    title: "Renovation & Refurbishment",
    titleAr: "التجديد والتطوير",
    description:
      "Breathing new life into existing spaces — residential, commercial, and mixed-use rehabilitation with surgical precision. We transform outdated properties into modern masterpieces.",
    descriptionAr:
      "إضفاء حياة جديدة على الأماكن الموجودة — إعادة تأهيل سكنية وتجارية ومختلطة بدقة جراحية. نحول العقارات القديمة إلى تحف حديثة.",
    icon: "RefreshCw",
  },
  {
    id: "architectural-design",
    title: "Architectural Design & Planning",
    titleAr: "التصميم المعماري والتخطيط",
    description:
      "Innovative architectural solutions that blend aesthetics with functionality. Our designs respect context while pushing boundaries to create timeless, efficient spaces.",
    descriptionAr:
      "حلول معمارية مبتكرة تمزج بين الجماليات والوظائف. تصاميمنا تحترم السياق مع دفع الحدود لخلق مساحات خالدة وفعالة.",
    icon: "Compass",
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    titleAr: "الهندسة الإنشائية",
    description:
      "Robust structural engineering ensuring safety, durability, and efficiency. We engineer structures that stand the test of time while optimizing material usage and cost.",
    descriptionAr:
      "هندسة إنشائية قوية تضمن السلامة والمتانة والكفاءة. نصمم هياكل تصمد أمام اختبار الزمن مع تحسين استخدام المواد والتكلفة.",
    icon: "Building",
  },
  {
    id: "site-management",
    title: "Site Management & Supervision",
    titleAr: "إدارة الموقع والإشراف",
    description:
      "Professional on-site management ensuring quality control, safety compliance, and seamless coordination between all project stakeholders.",
    descriptionAr:
      "إدارة موقع احترافية تضمن مراقبة الجودة والامتثال للسلامة والتنسيق السلس بين جميع أصحاب المصلحة في المشروع.",
    icon: "Search",
  },
  {
    id: "cost-estimation",
    title: "Cost Estimation & Feasibility",
    titleAr: "تقدير التكاليف والجدوى",
    description:
      "Accurate cost estimation and comprehensive feasibility studies to help you make informed investment decisions before breaking ground.",
    descriptionAr:
      "تقدير دقيق للتكاليف ودراسات جدوى شاملة لمساعدتك على اتخاذ قرارات استثمارية مدروسة قبل البدء في البناء.",
    icon: "FileText",
  },
  {
    id: "technical-consultation",
    title: "Engineering Consultancy",
    titleAr: "الاستشارات الهندسية",
    description:
      "Expert technical guidance on construction methods, material selection, and project optimization. We help you navigate complex engineering challenges with confidence.",
    descriptionAr:
      "إرشادات فنية خبراء في أساليب البناء واختيار المواد وتحسين المشاريع. نساعدك على اجتياز التحديات الهندسية المعقدة بثقة.",
    icon: "Lightbulb",
  },
  {
    id: "bim-engineering",
    title: "BIM & Technical Coordination",
    titleAr: "نمذجة معلومات المباني والتنسيق الفني",
    description:
      "Integrated BIM coordination, clash detection, and technical documentation to improve accuracy and streamline project execution.",
    descriptionAr:
      "تنسيق نمذجة معلومات المباني، واكتشاف التعارضات، وإعداد الوثائق الفنية لتحسين الدقة وتسريع تنفيذ المشروع.",
    icon: "Boxes",
  },
  {
    id: "maintenance-facility",
    title: "Facility Maintenance",
    titleAr: "إدارة وصيانة المرافق",
    description:
      "Preventive and corrective maintenance services that preserve building performance, safety, and long-term value.",
    descriptionAr:
      "خدمات الصيانة الوقائية والتصحيحية للحفاظ على كفاءة المباني وسلامتها وقيمتها على المدى الطويل.",
    icon: "Wrench",
  },
];

export const stats: Stat[] = [
  {
    value: 9,
    suffix: "+",
    suffixAr: "+",
    label: "Years of Experience",
    labelAr: "سنوات الخبرة",
  },
  {
    value: 120,
    suffix: "+",
    suffixAr: "+",
    label: "Projects Completed",
    labelAr: "المشاريع المنجزة",
  },
  {
    value: 300,
    suffix: "+",
    suffixAr: "+",
    label: "Satisfied Clients",
    labelAr: "عملاء سعداء",
  },
  {
    value: 350,
    suffix: "+",
    suffixAr: "+",
    label: "Direct Manpower",
    labelAr: "القوى العاملة المباشرة",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation & Planning",
    titleAr: "الاستشارة والتخطيط",
    description:
      "We understand your goals, assess the site, and define the project scope, budget, and timeline.",
    descriptionAr:
      "نفهم أهدافك، ونقيّم الموقع، ونحدد نطاق المشروع والميزانية والجدول الزمني.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Design & Engineering",
    titleAr: "التصميم والهندسة",
    description:
      "We prepare architectural designs, engineering drawings, technical documentation, and required approvals.",
    descriptionAr:
      "نعد التصاميم المعمارية والرسومات الهندسية والوثائق الفنية، مع استكمال جميع الموافقات اللازمة.",
    icon: "FileEdit",
  },
  {
    step: 3,
    title: "Construction & Execution",
    titleAr: "التنفيذ والبناء",
    description:
      "Our team delivers the project with strict quality control, safety standards, and continuous site supervision.",
    descriptionAr:
      "ينفذ فريقنا المشروع وفق أعلى معايير الجودة والسلامة مع إشراف مستمر على جميع مراحل التنفيذ.",
    icon: "HardHat",
  },
  {
    step: 4,
    title: "Finishing & Handover",
    titleAr: "التشطيب والتسليم",
    description:
      "We complete the final finishes, carry out inspections, and deliver a project ready for use.",
    descriptionAr:
      "ننجز أعمال التشطيب، ونجري الفحوصات النهائية، ثم نسلم المشروع جاهزًا للاستخدام.",
    icon: "CheckCircle",
  },
];

export const projects: Project[] = [
  {
    id: "residential-compound-1",
    title: "Luxury Residential Compound",
    titleAr: "مجمع سكني فاخر",
    location: "Al Andalus, Egypt",
    locationAr: "الأندلس، القاهرة الجديدة",
    category: "residential",
    status: "completed",
    coverImage: "/images/mall-river.png",
    images: [
      "/images/mall-river.png",
      "/images/mall-river.png",
      "/images/mall-river.png",
    ],
    summary:
      "Premium villa compound featuring modern architectural design, luxury finishes, and landscaped gardens across a sprawling development.",
    summaryAr:
      "مجمع فيلات فاخر بتصميم معماري حديث وتشطيبات راقية وحدائق طبيعية في أنحاء التطوير الواسع.",
    description:
      "A landmark residential development in the heart of New Cairo, this villa compound represents the pinnacle of modern Egyptian living. The project encompasses multiple villa designs, each featuring contemporary architecture, premium interior finishes, private gardens, and state-of-the-art infrastructure. Every detail was carefully considered to create a harmonious living environment that balances luxury with functionality.",
    descriptionAr:
      "تطوير سكني بارز في قلب القاهرة الجديدة، يمثل مجمع الفيلات هذا قمة المعيشة المصرية العصرية. يشمل المشروع تصاميم فيلات متعددة، كل منها يتميز بهندسة معمارية عصرية وتشطيبات داخلية فاخرة وحدائق خاصة وبنية تحتية متطورة. تم دراسة كل تفصيل بعناية لخلق بيئة معيشية متناغمة توازن بين الفخامة والوظائف.",
    highlights: [
      "Modern architectural design",
      "Premium Italian finishes",
      "Landscaped gardens",
      "24/7 security system",
      "Underground parking",
      "Smart home integration",
    ],
    highlightsAr: [
      "تصميم معماري حديث",
      "تشطيبات إيطالية فاخرة",
      "حدائق طبيعية",
      "نظام أمني 24/7",
      "مواقف سيارات تحت الأرض",
      "تكامل المنزل الذكي",
    ],
    year: 2024,
  },
  {
    id: "commercial-office-1",
    title: "Commercial District Development",
    titleAr: "تطوير المنطقة التجارية",
    location: "New Administrative Capital, Egypt",
    locationAr: "العاصمة الإدارية الجديدة، مصر",
    category: "commercial",
    status: "completed",
    coverImage: "/images/residential-project-2.png",
    images: [
      "/images/residential-project-2.png",
      "/images/construction-team-large-project.jpg",
      "/images/mall-river.png",
    ],
    summary:
      "Modern commercial office space with state-of-the-art facilities, designed for leading corporations and professional firms.",
    summaryAr:
      "مساحة مكاتب تجارية حديثة مع مرافق متطورة، مصممة للشركات الرائدة والمكاتب المهنية.",
    description:
      "A premium commercial development designed to meet the needs of modern businesses. The building features flexible office layouts, high-speed elevators, advanced HVAC systems, and professional common areas. Located in one of Cairo's most prestigious business districts, it offers excellent accessibility and visibility for corporate tenants.",
    descriptionAr:
      "تطوير تجاري فاخر مصمم لتلبية احتياجات الأعمال الحديثة. يتميز المبنى بتصاميم مكاتب مرنة ومصاعد عالية السرعة وأنظمة تكييف متطورة ومناطق مشتركة مهنية. يقع في أحد أرقى أحياء الأعمال في القاهرة، ويوفر إمكانية وصول ورؤية ممتازة للمستأجرين من الشركات.",
    highlights: [
      "Flexible office layouts",
      "High-speed elevators",
      "Advanced HVAC",
      "Professional lobby",
      "Secure parking",
      "Prime location",
    ],
    highlightsAr: [
      "تصاميم مكاتب مرنة",
      "مصاعد عالية السرعة",
      "تكييف متطور",
      "بهو احترافي",
      "مواقف آمنة",
      "موقع متميز",
    ],
    year: 2023,
  },
  {
    id: "mixed-use-1",
    title: "Mixed-Use Development",
    titleAr: "تطوير متعدد الاستخدامات",
    location: "Ras El Hekma, Egypt",
    locationAr: "رأس الحكمة، مصر",
    category: "mixed-use",
    status: "ongoing",
    coverImage: "/images/mall-river.png",
    images: [
      "/images/mall-river.png",
      "/images/residential-project-1.png",
      "/images/construction-team-large-project.jpg",
    ],
    summary:
      "Large-scale mixed-use development combining residential, commercial, and retail spaces in the heart of Egypt's new capital.",
    summaryAr:
      "تطوير متعدد الاستخدامات واسع النطاق يجمع بين المساحات السكنية والتجارية والتجزئة في قلب العاصمة الجديدة لمصر.",
    description:
      "An ambitious mixed-use project in the New Administrative Capital, designed to create a self-contained urban community. The development integrates luxury apartments, office spaces, retail outlets, and recreational facilities within a master-planned environment. This project exemplifies modern urban planning principles and sustainable construction practices.",
    descriptionAr:
      "مشروع متعدد الاستخدامات طموح في العاصمة الإدارية الجديدة، مصمم لخلق مجتمع حضري متكامل. يدمج التطوير شققاً فاخرة ومساحات مكتبية ومنافذ بيع بالتجزئة ومرافق ترفيهية ضمن بيئة مخططة. يجسد هذا المشروع مبادئ التخطيط الحضري الحديث وممارسات البناء المستدامة.",
    highlights: [
      "Integrated community design",
      "Luxury apartments",
      "Retail promenade",
      "Green spaces",
      "Smart infrastructure",
      "Mixed-use zoning",
    ],
    highlightsAr: [
      "تصميم مجتمعي متكامل",
      "شقق فاخرة",
      "ممر تجاري",
      "مساحات خضراء",
      "بنية تحتية ذكية",
      "تقسيم متعدد الاستخدامات",
    ],
    year: 2025,
  },
  {
    id: "interior-fitout-1",
    title: "Luxury Interior Fit-Out",
    titleAr: "تجهيز داخلي فاخر",
    location: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
    category: "residential",
    status: "completed",
    coverImage: "/images/interior-living-room.png",
    images: [
      "/images/interior-living-room.png",
      "/images/residential-project-1.png",
    ],
    summary:
      "Bespoke interior fit-out for a premium residential villa featuring custom millwork, marble flooring, and designer lighting.",
    summaryAr:
      "تجهيز داخلي مخصص لفيلا سكنية فاخرة يشمل أعمال نجارة مخصصة وأرضيات رخامية وإضاءة تصميمية.",
    description:
      "A comprehensive interior fit-out project for a luxury villa, showcasing our expertise in high-end residential finishing. The scope included custom joinery, imported marble flooring, designer lighting installations, smart home automation, and bespoke furniture integration. Every element was carefully selected to create a cohesive, elegant living space.",
    descriptionAr:
      "مشروع تجهيز داخلي شامل لفيلا فاخرة، يعرض خبرتنا في التشطيب السكني الراقي. شمل نطاق العمل أعمال نجارة مخصصة وأرضيات رخامية مستوردة وتركيبات إضاءة تصميمية وأتمتة المنزل الذكي ودمج أثاث مخصص. تم اختيار كل عنصر بعناية لخلق مساحة معيشة متماسكة وأنيقة.",
    highlights: [
      "Custom joinery",
      "Imported marble",
      "Designer lighting",
      "Smart home automation",
      "Bespoke furniture",
      "Premium finishes",
    ],
    highlightsAr: [
      "نجارة مخصصة",
      "رخام مستورد",
      "إضاءة تصميمية",
      "أتمتة المنزل الذكي",
      "أثاث مخصص",
      "تشطيبات فاخرة",
    ],
    year: 2024,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "3",
    name: "Mohamed Ali",
    nameAr: "محمد علي",
    role: "Real Estate Investor",
    roleAr: "مستثمر عقاري",
    content:
      "Professional team, clear communication, and excellent quality. The project was delivered on time and exactly as promised.",
    contentAr:
      "فريق محترف، تواصل واضح، وجودة ممتازة. تم تسليم المشروع في الموعد وبالشكل المتفق عليه.",
  },
  {
    id: "4",
    name: "Khaled Ibrahim",
    nameAr: "خالد إبراهيم",
    role: "Architect",
    roleAr: "مهندس معماري",
    content:
      "Working with Fortress was smooth from start to finish. They paid attention to every detail and delivered great results.",
    contentAr:
      "كان العمل مع فورتريس سلساً من البداية للنهاية. اهتموا بكل التفاصيل وكانت النتيجة ممتازة.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What types of projects does Fortress IRD undertake?",
    questionAr: "ما أنواع المشاريع التي تقوم بها فورتريس؟",
    answer:
      "Fortress IRD specializes in residential, commercial, industrial, and mixed-use developments. We handle everything from luxury villas and apartment complexes to office buildings, retail spaces, and large-scale construction projects.",
    answerAr:
      "تتخصص فورتريس في المشاريع السكنية والتجارية والصناعية ومتعددة الاستخدامات. نحن نتعامل مع كل شيء من الفيلات الفاخرة والمجمعات السكنية إلى المباني المكتبية والمساحات التجارية ومشاريع البناء واسعة النطاق.",
  },
  {
    question: "How can I start a project with Fortress IRD?",
    questionAr: "كيف يمكنني بدء مشروع مع فورتريس؟",
    answer:
      'Fill out the "Start Your Project" form on our Contact page, or contact us directly by phone, WhatsApp, or email. You can also visit our office. All contact details, including our phone number, are available on the Contact page and in the website footer. Feel free to give us a call—we are always happy to discuss your project and answer any questions.',
    answerAr:
      'يمكنك ملء نموذج "ابدأ مشروعك" في صفحة التواصل، أو التواصل معنا مباشرة عبر الهاتف أو واتساب أو البريد الإلكتروني. كما يمكنك زيارة مقر الشركة. ستجد جميع وسائل التواصل، بما في ذلك رقم الهاتف، في صفحة التواصل وفي تذييل الموقع. لا تتردد في الاتصال بنا، وسيسعد فريقنا بمناقشة مشروعك والإجابة عن جميع استفساراتك.',
  },
  {
    question: "Does Fortress IRD handle government permits and approvals?",
    questionAr: "هل تتعامل فورتريس مع التصاريح والموافقات الحكومية؟",
    answer:
      "Depending on the scope and location of your project, we can discuss the required permits and approvals during the planning stage. In most cases, we can assist with or manage the necessary procedures to help keep your project moving smoothly.",
    answerAr:
      "يعتمد ذلك على طبيعة المشروع وموقعه. سنناقش التصاريح والموافقات المطلوبة خلال مرحلة التخطيط، وفي معظم الحالات يمكننا المساعدة أو تولي الإجراءات اللازمة لضمان سير المشروع بسلاسة.",
  },
  {
    question: "What is the typical timeline for a construction project?",
    questionAr: "ما هو الجدول الزمني النموذجي لمشروع بناء؟",
    answer:
      "Timelines vary depending on project scope and complexity. During our initial consultation, we provide a detailed project schedule with clear milestones. We pride ourselves on delivering projects on time and within budget.",
    answerAr:
      "تختلف الجداول الزمنية حسب نطاق المشروع وتعقيده. خلال استشارتنا الأولية، نقدم جدولاً زمنياً مفصلاً للمشروع مع معالم واضحة. نحن نفخر بتسليم المشاريع في الوقت المحدد وضمن الميزانية.",
  },
  {
    question: "Does Fortress IRD work on renovation projects?",
    questionAr: "هل تعمل فورتريس في مشاريع التجديد؟",
    answer:
      "Absolutely. We specialize in renovation and refurbishment projects, breathing new life into existing residential, commercial, and mixed-use spaces with surgical precision and premium finishes.",
    answerAr:
      "بالتأكيد. نحن متخصصون في مشاريع التجديد والتطوير، ونضفي حياة جديدة على المساحات السكنية والتجارية ومتعددة الاستخدامات الموجودة بدقة جراحية وتشطيبات فاخرة.",
  },
  {
    question: "Do you offer free consultations?",
    questionAr: "هل تقدمون استشارات مجانية؟",
    answer:
      "Yes. We offer an initial consultation to understand your project, discuss your requirements, and recommend the best approach.",
    answerAr:
      "نعم، نقدم استشارة أولية لفهم مشروعك ومناقشة متطلباتك واقتراح أفضل الحلول المناسبة.",
  },
  {
    question: "Can Fortress IRD work with my existing architect or consultant?",
    questionAr:
      "هل يمكن لفورتريس العمل مع المهندس أو الاستشاري الحالي الخاص بي؟",
    answer:
      "Yes. We can work alongside your architect, consultant, or design team to ensure smooth coordination throughout the project.",
    answerAr:
      "نعم، يمكننا العمل مع المهندس أو الاستشاري أو فريق التصميم الخاص بك لضمان تنسيق سلس طوال المشروع.",
  },

  {
    question: "How do you ensure quality throughout the project?",
    questionAr: "كيف تضمنون الجودة طوال مراحل المشروع؟",
    answer:
      "Every project follows strict quality control procedures, experienced site supervision, and regular inspections to ensure work meets our standards.",
    answerAr:
      "يخضع كل مشروع لإجراءات صارمة لمراقبة الجودة وإشراف ميداني احترافي وفحوصات دورية لضمان تنفيذ الأعمال وفق أعلى المعايير.",
  },

];

export const industries = [
  {
    id: "residential",
    title: "Residential Development",
    titleAr: "التطوير السكني",
    description:
      "Luxury villas, apartment complexes, and gated communities designed for modern living with premium finishes and thoughtful layouts.",
    descriptionAr:
      "فيلات فاخرة ومجمعات سكنية ومجتمعات مسورة مصممة للحياة العصرية بتشطيبات فاخرة وتصاميم مدروسة.",
    icon: "Home",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    titleAr: "البناء التجاري",
    description:
      "Office buildings, retail spaces, and commercial centers engineered for functionality, aesthetics, and long-term value.",
    descriptionAr:
      "مباني مكاتب ومساحات تجارية ومراكز تجارية مصممة للوظائف والجماليات والقيمة طويلة الأمد.",
    icon: "Building2",
  },
  {
    id: "industrial",
    title: "Industrial Projects",
    titleAr: "المشاريع الصناعية",
    description:
      "Warehouses, factories, and industrial facilities built to rigorous safety standards with efficient layouts and durable construction.",
    descriptionAr:
      "مستودعات ومصانع ومنشآت صناعية مبنية وفق معايير سلامة صارمة بتصاميم فعالة وبناء متين.",
    icon: "Factory",
  },
  {
    id: "mixed-use",
    title: "Mixed-Use Developments",
    titleAr: "التطويرات متعددة الاستخدامات",
    description:
      "Integrated communities combining residential, commercial, and recreational spaces in master-planned environments.",
    descriptionAr:
      "مجتمعات متكاملة تجمع بين المساحات السكنية والتجارية والترفيهية في بيئات مخططة.",
    icon: "Layers",
  },
  {
    id: "renovation",
    title: "Renovation & Restoration",
    titleAr: "التجديد والترميم",
    description:
      "Expert renovation services that transform existing properties while preserving structural integrity and architectural character.",
    descriptionAr:
      "خدمات تجديد خبراء تحول العقارات القائمة مع الحفاظ على السلامة الهيكلية والطابع المعماري.",
    icon: "RefreshCw",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    titleAr: "البنية التحتية",
    description:
      "Site development, roadworks, utilities, and infrastructure projects that support community growth and development.",
    descriptionAr:
      "تطوير المواقع وأعمال الطرق والمرافق ومشاريع البنية التحتية التي تدعم نمو المجتمع وتطوره.",
    icon: "Zap",
  },
];

export const companyInfo = {
  name: "Fortress Investment & Real Estate Development",
  nameAr: "فورتريس للاستثمار والتطوير العقاري",
  shortName: "Fortress IRD",
  shortNameAr: "فورتريس",
  tagline: "Quality • Trust • Innovation",
  taglineAr: "الجودة • الثقة • الابتكار",
  email: "fortress.ird@gmail.com",
  phone: "+20 12 73773339",
  phone2: "+20 10 33701747",
  address: "3'Sixty By LMD, New Cairo, Cairo Governorate, 11865.",
  addressAr: "360 LMD، القاهرة الجديدة، محافظة القاهرة، 11865.",
  mapUrl: "https://maps.app.goo.gl/x1GRxJGtSS6hEhHFA",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.131554231252!2d31.549669624710727!3d30.027787222956796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582138fb80f4f9%3A0xe7c46d8b2dc39071!2s3'Sixty%20By%20LMD!5e1!3m2!1sen!2seg!4v1772477090929!5m2!1sen!2seg",
  instagram: "https://www.instagram.com/fortress.ird/",
  facebook: "https://www.facebook.com/Fortress.IRD",
  founded: 2017,
  founder: {
    name: "Eng. Emad M. Gaballa",
    nameAr: "المهندس عماد م. جاب الله",
    email: "emad.m.gaballa@gmail.com",
    phone: "+20 1210048828",
    linkedin: "https://www.linkedin.com/in/emadgaballa/",
  },
};

export const galleryImages = [
  {
    id: "g1",
    src: "/images/residential-project-1.png",
    alt: "Residential Development Project",
    altAr: "مشروع تطوير سكني",
    category: "residential",
    categoryAr: "سكني",
    width: 1920,
    height: 1080,
  },
  {
    id: "g2",
    src: "/images/residential-project-2.png",
    alt: "Modern Villa Complex",
    altAr: "مجمع فيلات حديث",
    category: "residential",
    categoryAr: "سكني",
    width: 1920,
    height: 1080,
  },
  {
    id: "g3",
    src: "/images/mall-river.png",
    alt: "Construction Site Overview",
    altAr: "نظرة عامة على موقع البناء",
    category: "construction",
    categoryAr: "بناء",
    width: 1920,
    height: 1080,
  },
  {
    id: "g4",
    src: "/images/interior-living-room.png",
    alt: "Luxury Interior Finishing",
    altAr: "تشطيب داخلي فاخر",
    category: "interior",
    categoryAr: "داخلي",
    width: 1920,
    height: 1080,
  },
  {
    id: "g5",
    src: "/images/construction-team-large-project.jpg",
    alt: "Construction Team at Work",
    altAr: "فريق البناء في العمل",
    category: "construction",
    categoryAr: "بناء",
    width: 1920,
    height: 1080,
  },
  {
    id: "g6",
    src: "/images/construction-team.png",
    alt: "Engineering Team",
    altAr: "فريق الهندسة",
    category: "team",
    categoryAr: "فريق",
    width: 1920,
    height: 1080,
  },
  {
    id: "g7",
    src: "/images/construction-worker-on-site.png",
    alt: "Skilled Construction Worker",
    altAr: "عامل بناء ماهر",
    category: "construction",
    categoryAr: "بناء",
    width: 1920,
    height: 1080,
  },
  {
    id: "g8",
    src: "/images/construction-team-large-project.avif",
    alt: "Large Scale Construction",
    altAr: "بناء واسع النطاق",
    category: "construction",
    categoryAr: "بناء",
    width: 1920,
    height: 1080,
  },
];
