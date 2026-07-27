<div align="center">

# 🏛️ Fortress Investment & Real Estate Development

**A Modern, High-Performance, Bilingual Web Experience for Luxury Real Estate & Architecture**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://fortress-ird.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EmadGaballa/FortressIRD-App)
[![Developer Portfolio](https://img.shields.io/badge/Developer-Emad%20Gaballa-c5a880?style=for-the-badge&logo=react&logoColor=white)](https://emadgaballa.vercel.app/)

---

[Live Experience](https://fortress-ird.vercel.app/) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack--architecture) • [Directory Structure](#-project-structure) • [Setup Guide](#-getting-started)

</div>

---

## 📸 Executive Overview

**Fortress IRD** is a premier digital flagship tailored for **Fortress Investment & Real Estate Development**. Blending architectural grandeur with modern digital craftsmanship, this platform delivers an immersive user experience built on top of **React**, **TypeScript**, and **Vite**.

Designed from the ground up to reflect prestige, precision, and elegance, the platform showcases high-end residential and commercial portfolios, integrated architectural service offerings, and an interactive contact hub—all fully optimized across all viewport sizes and localized for both **English** and **Arabic** audiences.

> _"Where architectural precision meets fluid, state-of-the-art web engineering."_

---

## ✨ Key Features & Technical Highlights

### 🌐 Native Bilingual Localization (`i18n`)

- **Seamless Language Switching:** Fully responsive internationalization system supporting **English (`en`)** and **Arabic (`ar`)** out of the box via a lightweight, context-driven architecture (`I18nContext.tsx`).
- **Granular Locale Namespaces:** Locales are split logically (`common.json`, `home.json`, `projects.json`, `contact.json`) to keep bundle footprints minimal while ensuring instant key retrieval.
- **RTL & LTR Visual Harmony:** Dedicated styling adjustments to ensure typography and layout flow naturally in both right-to-left and left-to-right reading patterns.

### 💎 Architectural Design System & CSS Engine

- **Custom Design Tokens:** Built with a bespoke design token architecture (`variables.css`, `typography.css`, `animations.css`) featuring deep luxury palettes (`#0a0f1d`, `#c5a880`), subtle radial gradients, and crisp metallic borders.
- **Micro-Interactions & Motion:** Fluid hover transitions, custom map dot pulsing keyframes, backdrop blurs, and glassmorphism elements tailored for high-end real estate aesthetics.
- **Tailored Mobile Responsiveness:** Granular media queries ranging from ultra-wide screens down to compact mobile viewports (`<480px`), ensuring pixel-perfect paddings, touch-friendly card layouts, and responsive grid containers.

### ⚡ Performance & Asset Engineering

- **Lazy Loading Engine:** Custom-built `LazyImage.tsx` component ensuring high-resolution property renders load asynchronously with progressive placeholders, eliminating layout shifts and conserving mobile bandwidth.
- **Vite-Powered Speed:** Instant HMR in development and lightweight, highly optimized production chunking for fast time-to-interactive (TTI) metrics.
- **Component-Level Modular Styles:** Organized CSS modules per page and component maintain clear boundaries, preventing global visual leakage while preserving maintainability.

### 🔍 Dynamic SEO & Metadata Control

- **Re-usable SEO Component:** Integrated `SEO.tsx` component providing structured meta tags, Open Graph declarations, and route-specific dynamic titles to maximize visibility across search engine result pages (SERPs).

### 🗺️ Interactive Quick Connect & Location Hub

- **Integrated Interactive Map:** Embedded map framework wrapped in custom container UI featuring real-time location badges, contact cards, and direct communication triggers.
- **Accessible Actions:** Quick-dial phone triggers, direct email launchers, and interactive address strips built with smooth transform indicators.

---

## 🛠️ Tech Stack & Architecture

| Layer                    | Technology                                    | Purpose                                                                                       |
| :----------------------- | :-------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| **Framework**            | [React 18](https://reactjs.org/)              | Declarative, component-driven UI architecture                                                 |
| **Language**             | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety, reliable interface contracts, and rich IDE tooling                    |
| **Build Tool**           | [Vite](https://vitejs.dev/)                   | Next-generation frontend tooling and fast production builds                                   |
| **Internationalization** | Custom Context + JSON Locales                 | Lightweight, zero-dependency i18n solution with dynamic English & Arabic toggling             |
| **Styling**              | Modular Vanilla CSS & Design Tokens           | Custom CSS variables, utility layers, keyframe animations, and multi-breakpoint media queries |
| **Deployment**           | [Vercel](https://vercel.com/)                 | Edge network hosting with automated continuous deployment pipelines                           |

---

## 📁 Project Structure

The project follows an intuitive, domain-driven modular structure designed for scalability and maintainability:

```text
src/
├── app/                  # Application initialization & layouts
│   ├── App.tsx           # Global provider wrapping & application routes
│   └── layouts/
│       └── MainLayout.tsx # Core layout wrapper (Navbar, Footer, ScrollToTop)
│
├── assets/               # Brand assets, crests, taglines, and logotypes
│   └── brand/
│
├── components/           # Reusable UI & structural components
│   ├── footer/           # Global site footer & dynamic links
│   ├── navigation/       # Responsive navigation bar & language switchers
│   ├── shared/           # SEO management & shared layout primitives
│   ├── ui/               # Atomic UI components (Buttons, LazyImage loader)
│   └── ScrollToTop.tsx   # Smooth viewport restoration on route change
│
├── constants/            # Static data structures & hero image registries
│
├── contexts/             # Global application state management
│   └── I18nContext.tsx   # Language state, context provider, and translation helpers
│
├── locales/              # Translation dictionaries for localization
│   ├── ar/               # Arabic JSON dictionaries (common, contact, home, projects)
│   └── en/               # English JSON dictionaries (common, contact, home, projects)
│
├── pages/                # High-level page views & route handlers
│   ├── About/            # Company history, vision, leadership, & values
│   ├── Contact/          # Quick connect, location map, & inquiry forms
│   ├── Home/             # Hero banners, featured developments, & testimonials
│   ├── Portfolio/        # Architectural project galleries & specifications
│   ├── Services/         # Real estate development & architectural consultation
│   ├── Privacy/          # Privacy policy & data protection protocols
│   ├── Terms/            # Terms of service & legal disclosures
│   └── NotFound/         # Custom 404 error page experience
│
├── styles/               # Global CSS design system layer
│   ├── variables.css     # Design tokens (Color palettes, spacing, typography)
│   ├── typography.css    # Font faces, scales, and letter-spacing definitions
│   ├── animations.css    # Keyframes (Pulses, hover transitions, fades)
│   ├── utilities.css     # Layout utilities & helper classes
│   ├── reset.css         # Modern CSS browser reset
│   └── globals.css       # Global element defaults & root declarations
│
├── types/                # Central TypeScript interfaces & type definitions
└── utils/                # Helper utilities & i18n resolution scripts
🚀 Getting Started
Follow these steps to run the project locally on your machine.

Prerequisites
Node.js: v18.0.0 or higher

npm or yarn or pnpm

Local Installation
Clone the Repository:

Bash
git clone [https://github.com/EmadGaballa/FortressIRD-App.git](https://github.com/EmadGaballa/FortressIRD-App.git)
cd FortressIRD-App
Install Dependencies:

Bash
npm install
Start the Development Server:

Bash
npm run dev
The application will start locally at http://localhost:5173.

Build for Production:

Bash
npm run build
Preview Production Build:

Bash
npm run preview
🌐 Related Links & Portfolio
🚀 Live Application: fortress-ird.vercel.app

📦 GitHub Repository: github.com/EmadGaballa/FortressIRD-App

👨‍💻 Developer Portfolio: emadgaballa.vercel.app

📄 License & Attribution
Designed and engineered with care for Fortress Investment & Real Estate Development.

All rights reserved © 2026. Built by Emad Gaballa.
```
