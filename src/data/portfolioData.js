export const personalData = {
  name: "Mateo Bosch Vesconi",
  role: "Desarrollador Web Front-End",
  specialization: "E-commerce, React & Negocios Digitales",
  location: "Resistencia, Chaco, Argentina",
  email: "contacto.mateobosch@gmail.com",
  phone: "+54 9 3624 549120",
  whatsappUrl: "https://wa.me/5493624549120?text=Hola%20Mateo,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto",
  linkedin: "https://linkedin.com/in/mateo-bosch-vesconi",
  github: "https://github.com",
  availableForHire: true,
  summary: "Desarrollador Web Front-End enfocado en la creación y optimización de plataformas e-commerce y negocios digitales. Combino mi experiencia técnica con un fuerte interés en el análisis de datos para impulsar el rendimiento comercial. De perfil proactivo y orientado al trabajo en equipo, aporto habilidades de liderazgo y delegación de tareas, buscando siempre el crecimiento mutuo, el desarrollo estratégico de mis compañeros y el éxito de la empresa.",
  highlights: [
    { label: "Experiencia en E-commerce", value: "Tiendanube, WP & Wix" },
    { label: "Empresas & Agencias", value: "3+ Colaboraciones" },
    { label: "Nivel de Inglés", value: "B2 Profesional" },
    { label: "Especialidad Front-End", value: "React & Tailwind" }
  ]
};

export const experiences = [
  {
    id: "rusc",
    company: "Rusc",
    role: "Desarrollador Web Front-End (Freelance)",
    period: "Enero 2026 – Presente",
    current: true,
    location: "Remoto",
    type: "Freelance",
    badgeColor: "from-[#9A031E] to-[#730216]",
    description: "Desarrollo y reconstrucción de páginas web institucionales personalizadas, traduciendo la identidad visual y los requerimientos comerciales de los clientes en interfaces seguras y atractivas.",
    achievements: [
      "Implementación y gestión de sitios web utilizando CMS como WordPress y Wix, realizando maquetación y adaptaciones de código a medida para alinearse a las estrategias de comunicación.",
      "Ejecución de migraciones controladas de sitios heredados, mitigación activa de vulnerabilidades de seguridad y despliegue en arquitecturas limpias y seguras.",
      "Optimización de tiempos de carga inicial y experiencia de navegación responsive en dispositivos móviles y de escritorio."
    ],
    technologies: ["WordPress", "Wix", "JavaScript", "HTML5", "CSS3", "Migraciones Web", "Seguridad"]
  },
  {
    id: "bloop",
    company: "Bloop Agency",
    role: "Desarrollador Web Front-End (Freelance)",
    period: "Junio 2025 – Presente",
    current: true,
    location: "Remoto",
    type: "Freelance",
    badgeColor: "from-[#9A031E] to-[#730216]",
    description: "Implementación y personalización de tiendas de comercio electrónico de alto tráfico utilizando la plataforma Tiendanube como CMS principal.",
    achievements: [
      "Lideré el desarrollo e implementación de tiendas e-commerce destacadas como PL Deco, Deporfan e Industry House.",
      "Desarrollo de características interactivas y modificaciones estructurales a medida con HTML, CSS y JavaScript para optimizar la velocidad de carga y retención de usuarios.",
      "Ejecución de configuraciones técnicas críticas: delegación de dominios DNS, integración de pasarelas de pago y despliegue de píxeles de seguimiento para analítica web y marketing de conversión."
    ],
    technologies: ["Tiendanube", "JavaScript", "HTML5", "CSS3", "Pasarelas de Pago", "Píxeles Analítica", "Optimización UX"]
  },
  {
    id: "latana",
    company: "Maison Latana",
    role: "Desarrollador Front-End",
    period: "Diciembre 2024 – Abril 2025",
    current: false,
    location: "Remoto",
    type: "Contrato Front-End",
    badgeColor: "from-[#9A031E] to-[#730216]",
    description: "Liderazgo técnico en la integración de sistemas de inventario y transformación de la experiencia de compra e-commerce.",
    achievements: [
      "Lideré la integración técnica del sistema de inventario y stock ZNube con la plataforma Tiendanube, automatizando la sincronización de productos en tiempo real.",
      "Desarrollé y ejecuté el rediseño estético completo del sitio web, mejorando la presentación del catálogo y optimizando la experiencia de compra.",
      "Implementé integraciones de logística clave (OCA y Andreani) y pasarelas de pago, mitigando fricciones en el proceso de checkout y reduciendo abandonos de carrito.",
      "Diseñé y documenté flujos de trabajo especializados y procesos de subida de productos optimizados para estrategias de SEO básico."
    ],
    technologies: ["Tiendanube", "ZNube (Stock en tiempo real)", "Integración OCA & Andreani", "Checkout & Pagos", "SEO", "UI Redesign"]
  }
];

export const projects = [
  {
    id: "pl-deco",
    title: "PL Deco - E-commerce de Diseño & Decoración",
    company: "Bloop Agency",
    category: "ecommerce",
    image: "/projects/pldeco.png",
    summary: "Tienda online personalizada con catálogo de mobiliario y artículos de decoración de alta gama en Tiendanube.",
    highlights: [
      "Maquetación y estilos a medida con HTML/CSS/JS",
      "Experiencia mobile-first fluida y adaptada",
      "Configuración de pasarelas de pago y píxeles de analítica"
    ],
    tags: ["Tiendanube", "JavaScript", "CSS3", "Pasarelas de Pago", "UX/UI"],
    url: "https://pldeco.com.uy/"
  },
  {
    id: "deporfan",
    title: "Deporfan",
    company: "Bloop Agency",
    category: "ecommerce",
    image: "/projects/deporfan.png",
    summary: "Tienda online personalizada con catálogo de mobiliario y artículos de decoración de alta gama en Tiendanube.",
    highlights: [
      "Maquetación y estilos a medida con HTML/CSS/JS",
      "Experiencia mobile-first fluida y adaptada",
      "Configuración de pasarelas de pago y píxeles de analítica"
    ],
    tags: ["Tiendanube", "JavaScript", "CSS3", "Pasarelas de Pago", "UX/UI"],
    url: "https://deporfan.com.ar"
  },
  {
    id: "industry-house",
    title: "Industry House",
    company: "Bloop Agency",
    category: "ecommerce",
    image: "/projects/industry.png",
    summary: "Tienda online personalizada con catálogo de mobiliario y artículos de decoración de alta gama en Tiendanube.",
    highlights: [
      "Maquetación y estilos a medida con HTML/CSS/JS",
      "Experiencia mobile-first fluida y adaptada",
      "Configuración de pasarelas de pago y píxeles de analítica"
    ],
    tags: ["Tiendanube", "JavaScript", "CSS3", "Pasarelas de Pago", "UX/UI"],
    url: "https://industryhouse.com.ar"
  },
  {
    id: "maison-latana",
    title: "Maison Latana - Rediseño & Sincronización ZNube",
    company: "Maison Latana",
    category: "integrations",
    image: "/projects/latana.png",
    summary: "Transformación integral del e-commerce con sincronización de inventario en tiempo real y logística automatizada.",
    highlights: [
      "Automatización de stock en tiempo real con ZNube",
      "Integración de transporte con OCA y Andreani",
      "Rediseño visual moderno y optimización SEO"
    ],
    tags: ["Tiendanube", "ZNube API", "OCA / Andreani", "SEO Básico", "Logística"],
    url: "https://maisonlatana.com"
  },
  {
    id: "rusc-institucionales",
    title: "Sitios Institucionales & Migraciones Seguras",
    company: "Rusc",
    category: "corporate",
    image: "/projects/regatas.png",
    summary: "Desarrollo y reconstrucción de sitios institucionales corporativos con CMS modernos y arquitecturas seguras.",
    highlights: [
      "Personalización avanzada en WordPress y Wix",
      "Mitigación de vulnerabilidades y entornos heredados",
      "Despliegues en arquitecturas limpias y seguras"
    ],
    tags: ["WordPress", "Wix", "JavaScript", "Ciberseguridad", "Arquitectura Web"],
    url: "https://www.clubregatasresistencia.com.ar"
  }
];

export const skillsData = {
  frontend: [
    { name: "React", level: 90, icon: "React", description: "Componentes reutilizables, hooks, virtual DOM" },
    { name: "JavaScript (ES6+)", level: 92, icon: "Code2", description: "Lógica moderna, APIs, async/await, DOM nativo" },
    { name: "Tailwind CSS", level: 95, icon: "Palette", description: "Diseño utilitario, responsive, animaciones, dark mode" },
    { name: "HTML5 Semántico", level: 98, icon: "FileCode", description: "Estructuras accesibles, SEO amigable, meta tags" },
    { name: "CSS3 / Flexbox / Grid", level: 95, icon: "Layout", description: "Layouts avanzados, transiciones, glassmorphism" },
    { name: "Bootstrap", level: 85, icon: "Layers", description: "Maquetación rápida y sistemas de grilla" },
    { name: "Git / GitHub", level: 88, icon: "GitBranch", description: "Control de versiones, flujos de trabajo colaborativos" }
  ],
  ecommerce: [
    { name: "Tiendanube", level: 95, description: "Personalización estructural, código a medida, CMS" },
    { name: "WordPress", level: 90, description: "Desarrollo, plugins, temas a medida y migraciones" },
    { name: "Wix", level: 88, description: "Creación ágil y adaptaciones corporativas" },
    { name: "Integración ZNube", level: 92, description: "Sincronización automatizada de inventario y stock" },
    { name: "Pasarelas de Pago", level: 92, description: "Mercado Pago, tarjetas, checkout seguro sin fricción" },
    { name: "Logística (OCA & Andreani)", level: 88, description: "Cálculo de envíos e integración de transporte" },
    { name: "Delegación de Dominios & DNS", level: 90, description: "Configuración de registros, SSL, servidores" },
    { name: "Píxeles de Analítica", level: 88, description: "Meta Pixel, Google Analytics, eventos de conversión" }
  ],
  designAndData: [
    { name: "Figma (UI/UX)", level: 85, description: "Diseño de interfaces, prototipado y design handoff" },
    { name: "SQL", level: 80, description: "Bases de datos relacionales, consultas y modelos" },
    { name: "SEO Básico", level: 85, description: "Optimización on-page, tiempos de carga y metadatos" },
    { name: "Optimización de Rendimiento", level: 90, description: "Lazy loading, compresión y Core Web Vitals" }
  ],
  softSkills: [
    { name: "Liderazgo y Delegación", description: "Capacidad para coordinar tareas y motivar al equipo hacia objetivos comunes." },
    { name: "Proactividad", description: "Anticipación a problemas técnicos y búsqueda constante de mejoras continuas." },
    { name: "Trabajo en Equipo", description: "Colaboración armónica buscando el crecimiento mutuo y el éxito del negocio." },
    { name: "Orientación a Resultados", description: "Foco en el impacto comercial, la conversión y el valor tangible para clientes." }
  ]
};

export const education = [
  {
    institution: "Universidad Tecnológica Nacional (UTN) FRRE",
    degree: "Tecnicatura Universitaria en Programación",
    period: "Marzo 2024 – Presente",
    status: "En curso",
    description: "Formación académica sólida en fundamentos de desarrollo de software, algoritmos, estructuras de datos, programación orientada a objetos y bases de datos.",
    icon: "GraduationCap"
  },
  {
    institution: "Coderhouse",
    degree: "Curso de Desarrollo Web",
    period: "Completado",
    status: "Certificado",
    description: "Especialización práctica en tecnologías front-end, HTML5, CSS3, maquetación responsive, flexbox, CSS Grid y estándares web.",
    icon: "Award"
  }
];

export const languages = [
  {
    language: "Español",
    level: "Nativo",
    percentage: 100,
    details: "Lengua materna"
  },
  {
    language: "Inglés",
    level: "Intermedio (B2)",
    percentage: 75,
    details: "Capacidad para lectura técnica avanzada y conversación profesional"
  }
];
