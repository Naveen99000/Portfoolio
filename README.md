<<<<<<< HEAD
# Poluparthi Naveen — Professional Data Analyst Portfolio

A high-performance, executive portfolio website engineered for **Poluparthi Naveen** (Data Analyst | Power BI Developer | SQL & Python), built with **React**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Recharts**.

Designed with a modern dark-navy SaaS aesthetic, subtle cyan accents, KPI scorecards, interactive data visualization widgets, and verified project case studies.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Language:** TypeScript
- **Styling:** Vanilla Tailwind CSS with custom navy & cyan palette
- **Charts & Data Visualizations:** Recharts
- **Icons:** Lucide React + custom SVG brand icons
- **Architecture:** Centralized data store (`src/data/portfolioData.ts`) with modular components

---

## 🚀 Quick Start (Running Locally)

Make sure you have Node.js (v18+) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Open in your browser
http://localhost:5173/
```

### Production Build & Preview
```bash
# Build production bundle with TypeScript validation
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 Managing Your Resume PDF

The "Download Resume" buttons point to `/Poluparthi_Naveen_Resume.pdf`.

1. Export your verified resume as a PDF named:  
   `Poluparthi_Naveen_Resume.pdf`
2. Place this file inside the `public/` directory:  
   `c:\Users\hacke\Desktop\Portfolio\public\Poluparthi_Naveen_Resume.pdf`
3. Visitors will now be able to download the physical PDF with one click.
4. If a visitor clicks the button before you add the file, the built-in **Interactive Resume Modal** still renders your complete verified resume on-screen with print/save capabilities!

---

## ⚙️ Customizing Content & Projects

All portfolio data is centralized in a single, well-documented file:
📂 `src/data/portfolioData.ts`

### 1. Update Project GitHub Repositories
In `src/data/portfolioData.ts`, edit the `githubUrl` field under `featuredProjects`:
```typescript
githubUrl: "https://github.com/Naveen99000/your-repo-name"
```

### 2. Update Contact Details or Location
Edit `profileData`:
```typescript
export const profileData = {
  name: "Poluparthi Naveen",
  email: "naveen2028d@gmail.com",
  phone: "+91-9177941918",
  linkedin: "https://linkedin.com/in/poluparthi-naveen",
  github: "https://github.com/Naveen99000",
  location: "Hyderabad, India",
  relocation: "Open to Pune & Remote / Hybrid roles",
  ...
};
```

### 3. Replace or Add Screenshots
If you wish to display screenshot images inside the project cards or modals:
1. Save your dashboard screenshot (e.g. `ecommerce_dashboard.png`) in `public/projects/`.
2. Reference `/projects/ecommerce_dashboard.png` in `src/components/Projects.tsx` or `src/components/ProjectModal.tsx`.

---

## 🌐 Deploying to Vercel or Netlify

### Option A: Deploy to Vercel (Recommended — 2 Minutes)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Data Analyst portfolio website"
   git branch -M main
   git remote add origin https://github.com/Naveen99000/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New"** > **"Project"** and select your `portfolio` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your website is live in seconds with a free SSL certificate!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Select **"Import from Git"** and choose your repository.
3. Set build configuration:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **"Deploy Site"**.

---

## 📁 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg                  # Custom analytics SVG icon
│   └── Poluparthi_Naveen_Resume.pdf # Place your PDF resume here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky nav with mobile drawer & active spy
│   │   ├── Hero.tsx                 # High-impact pitch & interactive Recharts telemetry
│   │   ├── StatsBanner.tsx          # Key metrics row (297k+ records, 8+ DAX, 90% anomaly)
│   │   ├── About.tsx                # Professional bio & 3 analytical pillars
│   │   ├── Skills.tsx               # Categorized skills grid (Power BI, SQL, Python, Excel)
│   │   ├── Projects.tsx             # Featured projects with illustrative visualizers
│   │   ├── ProjectModal.tsx         # Deep-dive case study modal with SQL/DAX snippets
│   │   ├── TrainingEducation.tsx    # FLM Analytics Trainee & B.Tech IT timeline
│   │   ├── Contact.tsx              # Direct contact channels & email composer
│   │   ├── Footer.tsx               # Dynamic copyright year & jump links
│   │   ├── ResumeModal.tsx          # On-screen resume preview & download trigger
│   │   └── Icons.tsx                # Clean SVG brand icons (LinkedIn, GitHub)
│   ├── data/
│   │   └── portfolioData.ts         # Centralized resume-accurate portfolio content
│   ├── types/
│   │   └── index.ts                 # TypeScript type definitions
│   ├── App.tsx                      # Root component
│   ├── index.css                    # Tailwind directives & glassmorphism utilities
│   └── main.tsx                     # React root mounting
├── index.html                       # SEO title, OpenGraph tags & Google Fonts
├── tailwind.config.js               # Dark navy & cyan palette theme
├── tsconfig.app.json                # Strict TypeScript configuration
└── package.json                     # Vite, React 19, Tailwind, Recharts, Lucide
```
=======
# Portfoolio
>>>>>>> dc600c828e238cf69d6d7cfcf8ef2c448b0de171
