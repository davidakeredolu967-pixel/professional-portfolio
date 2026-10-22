/**
 * ============================================================================
 * DAVID — VERIFIED DATA ARCHITECTURE
 * Public Brand: DAVID
 * Headline: "I turn ideas into digital products."
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    brandName: "DAVID",
    fullName: "David",
    formalName: "David Akeredolu",
    headline: "I turn ideas into digital products.",
    supportingMessage: "I build and improve digital experiences through web development, AI-assisted workflows, and practical problem-solving.",
    role: "Web Developer • AI-Assisted Developer • Digital Builder • Problem Solver",
    academic: "Mathematical Science student at the Federal University of Technology, Akure, Nigeria (FUTA)",
    academicSummary: "Mathematical Science student at FUTA combining quantitative reasoning, structured logic, and algorithmic thinking with modern web engineering.",
    email: "akeredoludavid967@gmail.com",
    githubUsername: "davidakeredolu967-pixel",
    githubUrl: "https://github.com/davidakeredolu967-pixel",
    location: "Akure, Nigeria",
    statusLabel: "Available for select projects & collaborations"
  },

  projects: [
    {
      id: "project-portfolio",
      number: "01",
      title: "Personal Developer Portfolio (v2)",
      conceptBadge: "DAVID",
      type: "Production Platform & Brand",
      status: "Production Ready",
      statusBadge: "Live Platform",
      statusType: "live",
      image: "assets/images/projects/portfolio-preview.jpg",
      summary: "A distinctive, cinematic 3D digital portfolio engineered with vanilla web technologies, Three.js spatial computing, smoked glass surfaces, and responsive interaction design.",
      problem: "Standard developer portfolios rely on generic templates, overused blue gradients, and static card grids that fail to convey authentic technical curiosity, craft, or architectural thinking.",
      solution: "Designed and built an editorial 3D environment featuring an interactive WebGL architectural hero, smooth depth-aware scroll storytelling, and an accessible project gallery without heavy framework bloat.",
      takeaway: "Deepened expertise in WebGL shaders, camera parallax mathematics, CSS 3D transform matrices, and performance optimization across diverse screen sizes.",
      technologies: ["Vanilla JavaScript", "CSS3 Architecture", "Three.js / WebGL", "AI-Assisted Workflow", "Responsive Design"],
      links: {
        live: "https://professional-portfolio-ashen-kappa.vercel.app",
        github: "https://github.com/davidakeredolu967-pixel/professional-portfolio"
      },
      highlights: [
        "Interactive 3D WebGL environment with warm metallic copper and smoked glass materials",
        "Layered spatial project gallery with responsive touch ergonomics on mobile devices",
        "Accessible, mobile-first design with graceful fallbacks for reduced-motion and non-WebGL environments",
        "Zero heavyweight UI runtime dependencies — pure native browser performance"
      ]
    },
    {
      id: "project-recipe",
      number: "02",
      title: "Recipe Web Application",
      conceptBadge: "recipe-b82ec",
      type: "Dynamic Web Application",
      status: "Built / Experimental",
      statusBadge: "Verified Firebase",
      statusType: "live",
      image: "assets/images/projects/recipe-platform.jpg",
      summary: "A responsive culinary platform built on Firebase and Cloud Firestore to organize, discover, and interact with cooking recipes through a clean, fast, clutter-free user interface.",
      problem: "Many recipe websites are crowded with intrusive pop-up advertisements, slow tracking scripts, and awkward mobile layouts that make reading ingredient steps in the kitchen frustrating.",
      solution: "Engineered a lightweight web application connected to Firestore's 'recipes' and 'users' collections with user authentication, category filtering, prep timer functionality, and favorite bookmarking.",
      takeaway: "Mastered Firebase Auth state lifecycle handling, asynchronous Firestore query debouncing, and mobile-first recipe layout ergonomics.",
      technologies: ["JavaScript (ES6+)", "Firebase Auth", "Cloud Firestore", "HTML5 & CSS3", "Vercel Hosting"],
      links: {
        live: "https://recipe-sharing-psi.vercel.app",
        github: "https://github.com/davidakeredolu967-pixel/recipe-sharing"
      },
      highlights: [
        "Cloud Firestore integration querying structured recipe documents, ingredients, and prep steps",
        "Firebase Authentication with session state persistence and protected user views",
        "Integrated interactive kitchen prep timer for active cooking workflows",
        "Fast client-side category filtering and instantaneous ingredient search"
      ]
    },
    {
      id: "project-attendance",
      number: "03",
      title: "Attendance Management Application Concept",
      conceptBadge: "GODSPEED HQ",
      type: "Enterprise SaaS Prototype",
      status: "Prototype / Concept",
      statusBadge: "Concept Prototype",
      statusType: "dev",
      image: "assets/images/projects/attendance-system.jpg",
      summary: "An operational platform prototype engineered to modernize attendance logging with daily sign-in and sign-out timestamps, session verification concepts, and a centralized administrative control dashboard.",
      problem: "Paper attendance sheets and manual rosters are vulnerable to lost records, inaccurate sign-in timestamps, and cumbersome administrative tallying.",
      solution: "Designed an administrative control center featuring user session authentication, role-based access, and structured database schema for attendance history.",
      takeaway: "Gained practical experience designing complex administrative dashboards, structured state tables, and data schemas for verification workflows.",
      technologies: ["JavaScript", "PostgreSQL / Supabase Schema", "Admin Dashboard UI", "Modular CSS"],
      links: {
        live: null,
        github: "https://github.com/godspeedteam11-lang/GODPEED-HQ-PLATFORM"
      },
      highlights: [
        "Centralized administrative control panel layout with session security alerts",
        "Daily sign-in and sign-out timestamp recording logic and history tables",
        "Role-based privilege separation between general attendees and administrators",
        "Database schema designed for multi-tier verification and session logs"
      ]
    },
    {
      id: "project-avanti",
      number: "04",
      title: "Avanti Vogue — E-commerce Concept",
      conceptBadge: "Lifestyle Store",
      type: "E-Commerce & Digital Branding",
      status: "Concept / Exploration",
      statusBadge: "Store Concept",
      statusType: "concept",
      image: "assets/images/projects/avanti-vogue.jpg",
      summary: "A digital storefront exploration examining lifestyle fashion e-commerce, Shopify store architecture, product curation strategies, and visual brand consistency.",
      problem: "Emerging boutique online stores frequently fail to convert visitors due to disjointed visual branding, unclear product navigation, and cluttered catalog presentation.",
      solution: "Formulated a clean, modern online fashion store concept with structured product categorization, curated aesthetic guidelines, and streamlined checkout journey planning.",
      takeaway: "Explored the intersections of digital consumer psychology, typography hierarchy, catalog structuring, and e-commerce conversion pathways.",
      technologies: ["Shopify Store Concept", "UI/UX Architecture", "Product Research", "Digital Brand Guidelines"],
      links: {
        live: null,
        github: "https://github.com/davidakeredolu967-pixel/avanti-vougue"
      },
      highlights: [
        "Comprehensive lifestyle product curation and catalog structure",
        "Minimal editorial aesthetic prioritizing imagery and brand consistency",
        "User experience mapping from product discovery through checkout flow",
        "Digital brand guideline assets produced for visual cohesion"
      ]
    }
  ],

  capabilities: [
    {
      number: "01",
      title: "Web Development",
      description: "Engineering responsive, fast, and accessible websites, landing pages, and web applications using modern semantic HTML5, modular CSS3 architecture, and performant vanilla JavaScript.",
      deliverables: ["Custom Responsive Websites", "Modern Landing Pages", "Accessible Component Architecture", "Client-side Web Applications"],
      tag: "Core Capability",
      featured: true
    },
    {
      number: "02",
      title: "AI-Assisted Development",
      description: "Leveraging state-of-the-art AI coding tools and prompt workflows to rapidly prototype concepts, diagnose complex bugs, and accelerate development cycles while maintaining strict code ownership and architectural quality.",
      deliverables: ["Rapid Interactive Prototyping", "Automated Error Diagnosis & Refactoring", "Workflow Acceleration", "Edge-Case Testing"],
      tag: "Modern Workflow",
      featured: true
    },
    {
      number: "03",
      title: "Website Improvement & Troubleshooting",
      description: "Diagnosing interface bugs, fixing broken mobile responsive layouts, eliminating cumulative layout shifts, optimizing slow-loading assets, and resolving frontend JavaScript issues on existing sites.",
      deliverables: ["Mobile Responsive Fixes", "Layout Shift & Performance Audits", "Frontend Bug Resolution", "Cross-browser Compatibility"],
      tag: "Applied Engineering",
      featured: false
    },
    {
      number: "04",
      title: "Digital Product Prototyping",
      description: "Translating napkin concepts, business requirements, and rough product ideas into structured, clickable, and testable web prototypes to validate assumptions before heavy engineering.",
      deliverables: ["Interactive Wireframe Demos", "User Flow Validation", "Component System Design", "SaaS Concept Scaffolding"],
      tag: "Product Strategy",
      featured: false
    },
    {
      number: "05",
      title: "Website-to-Mobile-App Workflows",
      description: "Exploring web-to-mobile packaging workflows using modern tools like Capacitor to adapt responsive web applications into functional mobile app packages. An active area of ongoing technical learning.",
      deliverables: ["Capacitor Wrapper Setup", "Mobile Viewport Adaptation", "Native Touch Ergonomics", "PWA Strategy"],
      tag: "Active Exploration",
      featured: false
    }
  ],

  workflowSteps: [
    {
      step: "01",
      title: "Understand the Problem",
      description: "Deconstructing core business objectives, user expectations, and functional constraints before writing any code."
    },
    {
      step: "02",
      title: "Research & Plan",
      description: "Mapping out data structures, interface wireframes, component modularity, and the most efficient technical stack."
    },
    {
      step: "03",
      title: "Build & Experiment",
      description: "Constructing clean, maintainable code, leveraging AI coding tools to accelerate boilerplate while maintaining architectural ownership."
    },
    {
      step: "04",
      title: "Test & Refine",
      description: "Validating across mobile, tablet, and desktop viewports, checking error states, inspecting console performance, and polishing interactions."
    },
    {
      step: "05",
      title: "Deliver & Keep Improving",
      description: "Deploying the digital experience, gathering real feedback, and continually refining performance and usability."
    }
  ],

  tools: {
    production: [
      { name: "HTML5 & Semantic Markup", status: "Verified" },
      { name: "Modern CSS3 (Grid / Flexbox / Tokens)", status: "Verified" },
      { name: "JavaScript (ES6+ Vanilla)", status: "Verified" },
      { name: "Firebase Auth & Cloud Firestore", status: "Verified" },
      { name: "Git & GitHub Version Control", status: "Verified" },
      { name: "Google Antigravity & AI Developer Tools", status: "Verified" },
      { name: "VS Code & Browser DevTools", status: "Verified" }
    ],
    learning: [
      { name: "React & Component Frameworks", status: "Actively Learning" },
      { name: "TypeScript", status: "Actively Learning" },
      { name: "PostgreSQL & Supabase", status: "Exploring" },
      { name: "Capacitor (Web to Mobile)", status: "Exploring" },
      { name: "Three.js & WebGL 3D", status: "Building With" }
    ],
    complementary: [
      { name: "Digital Research & Market Analysis", status: "Practicing" },
      { name: "Author Outreach & Book Scouting Exploration", status: "Explored" },
      { name: "Technical Documentation & Writing", status: "Developing" },
      { name: "Visual Asset Design & Curation", status: "Comfortable" }
    ]
  }
};

// Global assignment with backwards-compatible aliases
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
window.DAVID_DATA = PORTFOLIO_DATA;
window.NIYI_DATA = PORTFOLIO_DATA; // legacy alias to prevent any script crash
