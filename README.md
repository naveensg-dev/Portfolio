# Naveen S Gawadi — Professional Developer Portfolio

> **Live Portfolio:** [https://naveensg-dev.github.io](https://naveensg-dev.github.io)  
> **Repository:** [https://github.com/naveensg-dev/Portfolio](https://github.com/naveensg-dev/Portfolio)  
> **Contact:** [naveengawadi@gmail.com](mailto:naveengawadi@gmail.com) | [LinkedIn](https://linkedin.com/in/naveen-gawadi)

A modern, high-performance, responsive portfolio web application crafted for **Naveen S Gawadi**, a Computer Science Engineering student specializing in **Artificial Intelligence and Machine Learning** at **AJ Institute of Engineering and Technology (VTU)**, Bangalore.

---

## 🌟 Key Highlights & Design Aesthetic

- **Design Tone:** Premium obsidian/dark navy palette (`#080c14`) with glowing cyan and violet accents, modern typography (`Inter`, `Plus Jakarta Sans`, `JetBrains Mono`), subtle card borders, and smooth micro-interactions.
- **Interactive Habit Engine Simulator:** An interactive 14-day streak grid and consistency calculator directly inspired by the *Digital Mirror* project.
- **Transparent Skill Architecture:** Categorized matrix that explicitly distinguishes between core curriculum skills listed on Naveen's resume (Python, Java, SQL, C, MySQL, PostgreSQL, Colab) and technologies deployed in projects (React.js, Firebase Firestore, Vercel).
- **Engineering-Grade Project Cards:** Deep dive into full-stack web and embedded IoT systems with architectural callouts, team collaboration notes, and live/source code links.
- **Academic Timeline:** Clean chronological breakdown of academic achievements at AJIET (CGPA 7.3/10) and Pre-University (83%).
- **Verified Certifications:** Focused presentation of credentials from HP LIFE (Data Science, AI Fundamentals) and Intel AI for All (AI Aware, AI Appreciate).
- **Technical Community Engagement:** Dedicated spotlight on participation in the AI talk session at Hackerspace Mangaluru (DevDays Mangaluru).
- **Real-World Contact Interface:** Direct mail launcher (`mailto:` compiler) with live copy-to-clipboard functionality and zero fake/simulated forms.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Deployment Targets:** [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/)

---

## 📁 Project Structure

```plaintext
Portfolio/
├── public/
│   └── favicon.svg                  # Vector branded favicon (NG)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Responsive sticky navbar + mobile menu drawer
│   │   ├── Hero.jsx                 # Hero section with status badges, CTAs, and preview
│   │   ├── DigitalMirrorDemo.jsx    # Interactive streak engine simulator widget
│   │   ├── About.jsx                # Professional summary, core pillars, and spoken languages
│   │   ├── Skills.jsx               # Filterable skill matrix with Resume vs Project tags
│   │   ├── Projects.jsx             # Detailed cards for Digital Mirror and Sensored Stick
│   │   ├── Education.jsx            # Academic timeline for B.E. (AI & ML) and PCMC
│   │   ├── Certifications.jsx       # HP LIFE and Intel AI for All certification cards
│   │   ├── Activities.jsx           # DevDays Mangaluru / Hackerspace community session
│   │   ├── Contact.jsx              # Functional message composer & 1-click email copy
│   │   └── Footer.jsx               # Copyright, social links, and smooth back-to-top
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all content & links
│   ├── App.jsx                      # Root application layout
│   ├── index.css                    # Tailwind CSS directives & custom styling
│   └── main.jsx                     # Application entry point
├── dist/                            # Production build output
├── index.html                       # Entry HTML with SEO & Open Graph meta tags
├── package.json                     # NPM dependencies and scripts
├── tailwind.config.js               # Tailwind design tokens and theme extensions
├── vite.config.js                   # Vite configuration with relative base support
├── vercel.json                      # Vercel deployment configuration
└── README.md                        # Documentation and guides
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/naveensg-dev/Portfolio.git
cd Portfolio
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
The site will be running at `http://localhost:3000` (or the port specified in terminal output) with instant Hot Module Replacement (HMR).

### 4. Create Production Build
```bash
npm run build
```
Optimized static files will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 📤 Git Commands to Push to GitHub

To push your latest changes to your GitHub repository (`https://github.com/naveensg-dev/Portfolio`):

```bash
# 1. Check changed files
git status

# 2. Stage all files
git add .

# 3. Create a descriptive commit
git commit -m "feat: complete modern React portfolio with Tailwind CSS and interactive showcase"

# 4. Push to the main branch
git push origin main
```

---

## ☁️ Deploying on Vercel (Recommended)

Deploying on Vercel gives you instant global CDN distribution, automatic HTTPS, and automatic deployments on every `git push`.

### Option A: Via Vercel Web Dashboard (Easiest)
1. Go to [https://vercel.com](https://vercel.com) and log in with your **GitHub account**.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Locate and select your repository: `Portfolio` (or `naveensg-dev/Portfolio`).
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Within 30 seconds, your site will be live with a production URL like `https://portfolio-naveensg.vercel.app`.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
# Follow the interactive prompts (Accept default settings)
```

---

## 📋 Customization & Update Checklist

All personal information and content are decoupled into a clean data file at [`src/data/portfolioData.js`](file:///c:/Users/NAVEEN%20S%20G/OneDrive/Desktop/Portfolio/src/data/portfolioData.js):

- [x] **Email:** `naveengawadi@gmail.com`
- [x] **LinkedIn:** `https://linkedin.com/in/naveen-gawadi`
- [x] **GitHub Profile:** `https://github.com/naveensg-dev`
- [x] **Projects:** *Digital Mirror* & *Sensored Handicapped Stick*
- [x] **Certifications:** HP LIFE & Intel AI for All
- [x] **Education:** AJIET VTU (CGPA 7.3/10) & PCMC (83%)
- [ ] **Resume PDF (Optional):** Drop your `resume.pdf` into `public/` and link to it in `Navbar.jsx` or `Hero.jsx` if you want a direct 1-click download button.
- [ ] **Custom Domain (Optional):** You can bind a custom domain (e.g. `naveengawadi.dev`) for free in Vercel settings.

---

## 📄 License
This portfolio is open-source and available under the [MIT License](LICENSE).
