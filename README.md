# DAVID — Premium 3D Developer Portfolio

> **"I turn ideas into digital products."**  
> *I build and improve digital experiences through web development, AI-assisted workflows, and practical problem-solving.*

A distinctive, cinematic 3D digital portfolio engineered with the visual standards of a boutique creative technology studio. Built for **David (David Akeredolu)** — Mathematical Science undergraduate at the Federal University of Technology, Akure, Nigeria (FUTA), Web Developer, AI-Assisted Builder, and Problem Solver.

---

## ✦ Creative Direction & Visual Language

- **Deep Obsidian & Espresso Backgrounds**: Layered depths (`#070605`, `#0b0908`, `#14110e`) with ambient radial studio lighting.
- **Warm Ivory Typography**: Balanced editorial hierarchy (`#f7f4ee`, `#cec5b7`, `#8e877a`) utilizing **Syne** for sculptural display and **Plus Jakarta Sans** for body readability.
- **Muted Copper & Burnished Bronze Accents**: Warm metallic sheen (`#c87a52`, `#d98a5e`, `#965330`) paired with subtle inner reflections and realistic lighting.
- **Smoked Glass Surfaces**: Translucent spatial planes with subtle frosted blurs (`backdrop-filter: blur(20px)`), fine borders, and deep shadows.
- **Subtle Film Grain Texture**: Ultra-light procedural SVG grain overlay providing photographic depth without image load latency.
- **Architectural 3D Environment**: Interactive Three.js WebGL scene with metallic copper-bronze Torus Knot, floating smoked-glass architectural planes, warm amber particles, and responsive mouse parallax.

---

## ✦ Centerpiece Interactions

1. **3D Spatial Scroll Stack (Selected Work)**:
   - Projects appear as large, layered visual compositions.
   - As the visitor scrolls forward, the active project scales down and shifts backwards in 3D perspective (`transform: scale(0.94) translateZ(-70px) rotateX(2.5deg)`), allowing the next project to advance smoothly into focus.
   - Scrolling backward reverses the sequence naturally without hijacking native scroll behavior.
2. **Interactive 3D Card Tilt**:
   - Project cards dynamically calculate cursor position on desktop to apply subtle 3D perspective tilt (`rotateX`, `rotateY`).
3. **Interactive Case Study Modal Dialog**:
   - Deep dive into problem statements, engineering solutions, technical takeaways, and source code links with full keyboard trap and Escape dismissibility.
4. **Desktop Custom Cursor**:
   - Trailing magnetic cursor halo that expands and reacts to clickable triggers, automatically disabled on touch devices.
5. **Direct Contact Dispatch & 1-Click Clipboard**:
   - Real-time clipboard copy for `akeredoludavid967@gmail.com` with toast confirmation.
   - Quick message composer drafting pre-formatted client emails directly.
6. **Live Akure Time Widget**:
   - Synchronized local time clock in Akure, Nigeria (`Africa/Lagos` UTC+1).
7. **Boutique Editorial Preloader**:
   - Minimal studio entry reveal displaying the brand identity with a smooth bronze sweep bar that gracefully transitions once spatial assets are ready.

---


## ✦ Selected Case Studies

| # | Project | Category | Verified Technology Stack | Status |
|---|---|---|---|---|
| **01** | **Personal Developer Portfolio (v2)** | Production Platform & Brand | Vanilla JS, Modern CSS3, Three.js / WebGL, AI-Assisted Workflow | Production Ready |
| **02** | **Recipe Web Application** | Cloud Web App (`recipe-b82ec`) | JavaScript (ES6+), Firebase Auth, Cloud Firestore, HTML5/CSS3 | Verified Firebase |
| **03** | **Attendance Management System** | Enterprise SaaS Prototype | JavaScript, PostgreSQL / Supabase Schema, Admin Dashboard UI | Prototype / Concept |
| **04** | **Avanti Vogue** | E-Commerce & Digital Branding | Shopify Store Concept, UI/UX Architecture, Brand Guidelines | Store Concept |

---

## ✦ Project Architecture & Directory Structure

```
profesional portfolio/
├── index.html                   # Semantic HTML5, comprehensive OpenGraph & Twitter SEO
├── server.ps1                   # Native PowerShell static HTTP server (zero extra installs)
├── README.md                    # Project documentation & creative rationale
├── assets/
│   ├── favicon.svg              # Custom architectural copper/obsidian SVG favicon
│   └── images/
│       └── projects/
│           ├── portfolio-preview.jpg    # Editorial 3D portfolio preview
│           ├── recipe-platform.jpg      # Verified Recipe sharing application screenshot
│           ├── attendance-system.jpg    # Verified Attendance platform screenshot
│           └── avanti-vogue.jpg         # Verified Avanti Vogue e-commerce screenshot
├── css/
│   ├── variables.css            # Design tokens: Obsidian, Espresso, Ivory, Copper & Bronze
│   ├── base.css                 # Reset, fluid typography, ambient glow, and SVG grain
│   ├── components.css           # Smoked glass nav, buttons, cursor, modal, and toast
│   ├── sections.css             # Hero 3D, 3D gallery stack, capabilities, about, contact
│   └── responsive.css           # Breakpoints (320px mobile -> 1440px+ ultra-wide)
└── js/
    ├── vendor/
    │   └── three.min.js         # Offline-bundled Three.js r128 library
    ├── data.js                  # Central data store (projects, capabilities, tools, pipeline)
    ├── hero-scene.js            # Three.js 3D WebGL scene with camera parallax and lighting
    ├── gallery.js               # 3D scroll-linked gallery stack, card tilt, and modal
    ├── interactions.js          # Custom cursor, magnetic buttons, clipboard toast, live clock
    └── main.js                  # Section hydration, mobile drawer, and scroll spy
```

---

## ✦ How to Run Locally

### Option A: Using the built-in PowerShell server (Zero installations needed)
Open PowerShell in the project directory and run:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Open your browser at [http://localhost:4200/](http://localhost:4200/).

### Option B: Direct Browser Opening
Because all assets, scripts, and libraries (including Three.js) are bundled locally without external build steps, you can open `index.html` directly in any modern browser:
```powershell
Start-Process "index.html"
```

---

## ✦ Verified Contacts & Links

- **Public Brand**: DAVID
- **Email**: [akeredoludavid967@gmail.com](mailto:akeredoludavid967@gmail.com)
- **GitHub**: [https://github.com/davidakeredolu967-pixel](https://github.com/davidakeredolu967-pixel)
- **Repository**: [https://github.com/davidakeredolu967-pixel/professional-portfolio](https://github.com/davidakeredolu967-pixel/professional-portfolio)
- **Institution**: Federal University of Technology, Akure, Nigeria (FUTA)
