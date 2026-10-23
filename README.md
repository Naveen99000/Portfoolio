# Poluparthi Naveen — Data Analyst Portfolio

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3.10-22D3EE?style=flat)](https://recharts.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **"Turning Data Into Actionable Business Insights."**  
> A carefully art-directed, high-performance web portfolio for **Poluparthi Naveen**, specialized in **Power BI**, **PostgreSQL / MySQL**, **Python Analytics**, and **Quantitative Business Intelligence**.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Design Direction & Philosophy](#-design-direction--philosophy)
- [Featured Case Studies](#-featured-case-studies)
- [Technical Architecture](#-technical-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Directory Structure](#-project-directory-structure)
- [Accessibility & Performance](#-accessibility--performance)
- [Contact & Professional Profiles](#-contact--professional-profiles)

---

## 🔭 Overview

This application is built from the ground up as an editorial-meets-technology portfolio. Moving far beyond generic AI-generated landing page templates, it delivers an intentional, content-first presentation of authentic enterprise data analysis workflows, validated case studies, and quantitative discoveries.

### Key Highlights
- **Real-World Scale:** Demonstrates analytical workflows on datasets spanning **260,000+ e-commerce transactions** and **37,000+ operational trip records**.
- **Interactive Telemetry:** Live data visualizers built with **Recharts** showcasing query latencies, star-schema metrics, and distribution curves.
- **Deep Code Transparency:** Built-in modal inspectors allowing reviewers and technical leads to audit authentic **SQL CTEs**, **Window Functions**, and **DAX Measures**.
- **Dual Navigation Experience:** Features an animated view-transition engine with a toggle to continuous vertical scroll for user preference.
- **Embedded Document Viewer:** Functional PDF resume viewer with instant download capabilities.

---

## 🎨 Design Direction & Philosophy

The interface follows a restrained, high-contrast dark aesthetic built around an 8px spacing grid:

| Design Dimension | Implementation Detail |
| :--- | :--- |
| **Typography** | **Space Grotesk** for headings (`-0.025em` tracking) & **Inter** for body text and navigation. **JetBrains Mono** for tabular numbers, SQL snippets, and telemetry KPIs. |
| **Color System** | Deep Obsidian Navy (`#0A0F1D`) with subtle surface layers (`#0E1528`), restrained technical cyan accents (`#22D3EE`), and high-contrast white text (`#FFFFFF`). |
| **Aesthetic Restraint** | Zero neon glows, rainbow gradients, or floating decorative elements. Replaced generic cards with distinct, content-driven editorial section layouts. |
| **Micro-Interactions** | Tactile hover states, smooth view transitions, and full `@media (prefers-reduced-motion: reduce)` accessibility compliance. |

---

## 📊 Featured Case Studies

### 1. Interactive KPI Dashboard — E-commerce Analytics
- **Data Volume:** 260,000+ transaction records
- **Technology Stack:** PostgreSQL, Python (Pandas), Power BI, DAX, Excel
- **Business Problem:** Fragmented data sources, delayed weekly reporting, and opaque cohort retention.
- **Analytical Method:**
  - Multi-stage SQL CTEs with `LAG()`, `LEAD()`, and `DENSE_RANK()` to analyze inter-purchase velocity.
  - Python cleansing pipelines to normalize customer timestamps and filter invalid cancellations.
  - Star schema relational modeling in Power BI with dedicated Date, Customer, and Product dimension tables.
  - 8+ custom DAX measures authoring dynamic CLV, repeat purchase rate, and RFM segment segmentation.
- **Impact & Value:** Automated recurring reporting pipelines reducing manual effort by **~40%**; identified the high-value segment driving **62%+ of repeat margin**.
- **Code Inspection:** In-app modal auditing the exact SQL CTE order sequencing script and DAX customer retention measure.

---

### 2. Driver Engagement & Retention Analysis
- **Data Volume:** 37,000+ operational trip and driver records
- **Technology Stack:** MySQL, Python, Power BI, Advanced Excel, EDA
- **Business Problem:** Leadership assumed high trip cancellation rates were driven by supply-side driver shortages, triggering misdirected acquisition spending.
- **Analytical Method:**
  - Exploratory Data Analysis (EDA) auditing dispatch timing, driver acceptance rates, and ETA variance across urban zones.
  - Granular cancellation attribution tagging between passenger-initiated and driver-initiated events.
- **Discovery & Value:** Proved empirically that **90%+ of cancellations were user-initiated**, dispelling the supply-side myth and refocusing company strategy on passenger ETA expectations and upfront app communications.
- **Deliverables:** Executive Power BI monitoring dashboard and structured operational Excel models.

---

## 🏗 Technical Architecture

```
src/
├── App.tsx                     # Main application layout, view mode & modal orchestration
├── main.tsx                    # React 19 root bootstrap
├── index.css                   # Design tokens, typography variables & animation utilities
│
├── components/
│   ├── Navbar.tsx              # Architectural top bar with view-mode toggle & mobile menu
│   ├── Hero.tsx                # Hero section with Recharts BI telemetry terminal
│   ├── StatsBanner.tsx         # Tabular metric ledger (297k+ records, 8+ DAX, etc.)
│   ├── About.tsx               # Editorial split-layout & 3-stage data lifecycle
│   ├── Skills.tsx              # Technical capability matrix with domain category filters
│   ├── Projects.tsx            # Full-width analytical case studies & visualizers
│   ├── ProjectModal.tsx        # In-depth SQL/DAX code review modal
│   ├── TrainingEducation.tsx   # Compact chronological credentials ledger
│   ├── Contact.tsx             # Direct communication channels & clipboard copy actions
│   ├── ResumeModal.tsx         # Interactive PDF resume viewer & download handler
│   ├── Footer.tsx              # Minimal professional footer with status indicator
│   └── Icons.tsx               # Custom SVG icons (GitHub, LinkedIn, Terminal, etc.)
│
├── data/
│   └── portfolioData.ts        # Single source of truth for metrics, projects & verified facts
│
└── types/
    └── index.ts                # TypeScript strict interface contracts
```

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript 6](https://www.typescriptlang.org/)
- **Bundler:** [Vite 8](https://vitejs.dev/) with Fast Refresh & Rolldown optimizations
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Charts & Data Viz:** [Recharts 3.10](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Naveen99000/Portfoolio.git
   cd Portfoolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will be live at `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production bundle:**
   ```bash
   npm run preview
   ```

---

## ♿ Accessibility & Performance

- **Semantic HTML5:** Built using standard landmark elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Tab Navigation & Keyboard Access:** Full tab-indexing across navigation buttons, category filters, and modal dialogues with keyboard `Escape` dismiss triggers.
- **Accessible Contrast:** Meets and exceeds WCAG AAA standards for text contrast against dark backgrounds.
- **Reduced Motion Support:** Respects user operating system settings for reduced motion (`prefers-reduced-motion: reduce`) via tailored CSS rules.

---

## 📬 Contact & Professional Profiles

**Poluparthi Naveen**  
*Data Analyst | Power BI Developer | SQL & Python*  
📍 Hyderabad, India *(Open to Pune & Hybrid / Remote roles)*  

- 📧 **Email:** [naveen2028d@gmail.com](mailto:naveen2028d@gmail.com)
- 📞 **Phone:** [+91-9177941918](tel:+919177941918)
- 💼 **LinkedIn:** [linkedin.com/in/poluparthi-naveen](https://linkedin.com/in/poluparthi-naveen)
- 💻 **GitHub:** [github.com/Naveen99000](https://github.com/Naveen99000)

---

*Crafted with precision, data discipline, and modern frontend architecture.*