/**
 * ============================================================================
 * NIYIVERSE — VERIFIED DATA ARCHITECTURE
 * Brand: NIYI
 * Public positioning: "I turn ideas into digital products."
 * ============================================================================
 */

window.NIYI_DATA = {
  profile: {
    brandName: "NIYI",
    creativeConcept: "NIYIVERSE",
    fullName: "Niyi",
    formalName: "Akeredolu Kolade David Omoniyi",
    headline: "I turn ideas into digital products.",
    supportingMessage: "I build, improve, and bring digital ideas to life through web development, AI-assisted workflows, and practical problem-solving.",
    role: "Web Developer • AI-Assisted Developer • Digital Builder • Problem Solver",
    academic: "Mathematical Science student at the Federal University of Technology, Akure, Nigeria (FUTA)",
    academicSummary: "Mathematical Science student at FUTA combining quantitative analysis, structured logic, and algorithmic thinking with modern web engineering.",
    email: "akeredoludavid967@gmail.com",
    githubUsername: "davidakeredolu967-pixel",
    githubUrl: "https://github.com/davidakeredolu967-pixel",
    location: "Akure, Nigeria",
    timezone: "Africa/Lagos", // UTC+1
    statusLabel: "Available for select projects & collaborations"
  },

  projects: [
    {
      id: "project-portfolio",
      number: "01",
      title: "Personal Developer Portfolio (v2)",
      conceptBadge: "NIYIVERSE",
      type: "Production Platform & Brand",
      status: "Production Ready",
      statusBadge: "Live Platform",
      statusType: "live",
      image: "assets/images/projects/portfolio-preview.jpg",
      summary: "A distinctive, cinematic 3D digital experience and personal brand platform engineered with vanilla web technologies, Three.js spatial computing, smoked glass surfaces, and responsive interaction design.",
      problem: "Standard developer portfolios rely on generic templates, overused blue gradients, and static card grids that fail to convey authentic technical curiosity, craft, or architectural thinking.",
      solution: "Designed and built an editorial 3D environment featuring an interactive WebGL architectural hero, smooth depth-aware scroll storytelling, and a 3D sticky stack project gallery without heavy framework bloat.",
      takeaway: "Deepened expertise in WebGL shaders, camera parallax mathematics, CSS 3D transform matrices, and performance optimization across diverse screen sizes.",
      technologies: ["Vanilla JavaScript", "CSS3 Architecture", "Three.js / WebGL", "AI-Assisted Workflow", "Responsive Design"],
      links: {
        live: "#",
        github: "https://github.com/davidakeredolu967-pixel/my-portfolio"
      },
      highlights: [
        "Interactive 3D WebGL environment with warm metallic copper and smoked glass materials",
        "Layered 3D scroll gallery that scales backward in space as new projects advance",
        "Accessible, mobile-first design with graceful fallbacks for reduced-motion and non-WebGL environments",
        "Zero heavyweight UI frameworks — pure native browser performance"
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
        live: "https://recipe-sharing-psi.vercel.app", // verified from vercel.json in repo
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
      solution: "Designed an administrative control center (LegacyOS / Platform Control Center) featuring user session authentication, role-based access, and structured database schema for attendance history.",
      takeaway: "Gained practical experience designing complex administrative dashboards, structured state tables, and data schemas for verification workflows.",
      technologies: ["JavaScript", "PostgreSQL / Supabase Schema", "Admin Dashboard UI", "Modular CSS"],
      links: {
        live: null,
        github: "https://github.com/godspeedteam11-lang/GODPEED-HQ-PLATFORM"
      },
      highlights: [
        "Centralized super-admin control panel layout with session security alerts",
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
      description: "Building responsive, fast, and accessible websites, landing pages, and web applications using modern semantic HTML, clean CSS architecture, and modular JavaScript.",
      tag: "Core Capability"
    },
    {
      number: "02",
      title: "AI-Assisted Development",
      description: "Utilizing modern AI coding workflows (including Google Antigravity and leading LLMs) to rapidly prototype ideas, troubleshoot complex errors, and iterate without sacrificing code quality.",
      tag: "Modern Workflow"
    },
    {
      number: "03",
      title: "Website Improvement & Problem-Solving",
      description: "Diagnosing interface bugs, fixing broken layouts on mobile screens, optimizing slow loading elements, and resolving frontend JavaScript issues.",
      tag: "Applied Engineering"
    },
    {
      number: "04",
      title: "Digital Product Prototyping",
      description: "Translating napkin concepts, business requirements, and rough product ideas into structured, clickable, and testable web prototypes.",
      tag: "Product Strategy"
    },
    {
      number: "05",
      title: "Mobile App Conversion (Exploring)",
      description: "Investigating web-to-mobile packaging workflows using modern tools like Capacitor to bring responsive web applications to mobile operating systems. An active area of ongoing learning.",
      tag: "Active Exploration"
    }
  ],

  workflowSteps: [
    {
      step: "01",
      title: "Understand the Problem",
      description: "Deconstructing the core objective, user expectations, and functional constraints before writing any code."
    },
    {
      step: "02",
      title: "Research and Plan",
      description: "Mapping out data structures, interface wireframes, component modularity, and the most efficient technical stack."
    },
    {
      step: "03",
      title: "Build and Experiment",
      description: "Constructing clean, maintainable code, leveraging AI coding tools to accelerate boilerplate while maintaining architectural ownership."
    },
    {
      step: "04",
      title: "Test and Refine",
      description: "Validating across mobile, tablet, and desktop screens, checking error states, inspecting console performance, and polishing interactions."
    },
    {
      step: "05",
      title: "Deliver and Keep Improving",
      description: "Deploying the digital experience, gathering real feedback, and continually refining performance and usability."
    }
  ],

  tools: {
    production: [
      { name: "HTML5 & Semantic Markup", status: "Comfortable" },
      { name: "Modern CSS3 (Grid / Flexbox / Variables)", status: "Comfortable" },
      { name: "JavaScript (ES6+ Vanilla)", status: "Comfortable" },
      { name: "Firebase Authentication", status: "Comfortable" },
      { name: "Cloud Firestore Database", status: "Comfortable" },
      { name: "Git & GitHub Version Control", status: "Comfortable" },
      { name: "Google Antigravity & AI Developer Tools", status: "Comfortable" },
      { name: "VS Code & Browser DevTools", status: "Comfortable" }
    ],
    learning: [
      { name: "React & Component Frameworks", status: "Learning" },
      { name: "TypeScript", status: "Learning" },
      { name: "PostgreSQL & Supabase", status: "Exploring" },
      { name: "Capacitor (Web to Mobile)", status: "Exploring" },
      { name: "Three.js & WebGL 3D", status: "Building with" }
    ],
    complementary: [
      { name: "Digital Research & Market Analysis", status: "Practicing" },
      { name: "Author Outreach & Book Scouting Exploration", status: "Explored" },
      { name: "Technical & Gig Writing", status: "Developing" },
      { name: "Canva & Digital Visual Assets", status: "Comfortable" }
    ]
  }
};
