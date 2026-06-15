<div align="center">

# Personal Developer Portfolio

### Built with React 18 · TypeScript · Vite · shadcn/ui · Tailwind CSS

[![Live Demo](https://img.shields.io/badge/Live_Demo-adityalolla04.github.io/portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://adityalolla04.github.io/portfolio)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

![Deployments](https://img.shields.io/badge/Deployments-79+-brightgreen?style=for-the-badge)

</div>

---

## Overview

A production-grade personal portfolio web application built with a modern, enterprise-quality React stack. This portfolio showcases the work, skills, certifications, and engineering projects of **Aditya Srivatsav Lolla** — Senior Software AI Engineer with 5+ years of experience in full-stack AI, LLM systems, and distributed backends.

The application leverages a component-driven architecture using **shadcn/ui** (Radix UI primitives), **TanStack Query** for async state management, **React Router v7** for client-side navigation, and **Recharts** for interactive data visualizations. Continuously deployed via GitHub Actions to GitHub Pages with 79+ successful deployments.

**Live Site:** [adityalolla04.github.io/portfolio](https://adityalolla04.github.io/portfolio)

---

## Architecture Overview

```
portfolio/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
├── public/                 # Static assets (favicon, images, CNAME)
├── src/
│   ├── assets/             # Images, icons, and media
│   ├── components/         # Reusable UI components (shadcn/ui + custom)
│   │   ├── ui/             # Radix UI-backed primitives (Button, Card, Dialog, etc.)
│   │   └── layout/         # Header, Footer, Navigation
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions (cn, formatters)
│   ├── pages/              # Route-level page components
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Root component with router configuration
│   └── main.tsx            # Vite entry point
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind CSS configuration with custom theme
├── vite.config.ts          # Vite bundler configuration
└── tsconfig.json           # TypeScript compiler configuration
```

---

## Tech Stack

### Core Framework
| Technology | Version | Purpose |
|---|---|---|
| React | ^18.3.1 | UI component library and rendering engine |
| TypeScript | ^5.8.3 | Static type safety across the entire codebase |
| Vite | ^7.3.1 | Lightning-fast build tool with HMR |
| React Router DOM | ^7.13.1 | Client-side routing and navigation |

### UI Component System
| Technology | Version | Purpose |
|---|---|---|
| shadcn/ui | Latest | Accessible, unstyled component primitives |
| Radix UI | Multiple | Accessible headless UI components |
| Tailwind CSS | ^3.4.17 | Utility-first CSS framework |
| tailwindcss-animate | ^1.0.7 | Animation utilities |
| Lucide React | ^0.462.0 | Icon library |
| class-variance-authority | ^0.7.1 | Variant-driven component styling |
| clsx + tailwind-merge | Latest | Conditional class name composition |

### Data & State Management
| Technology | Version | Purpose |
|---|---|---|
| TanStack Query | ^5.83.0 | Async state management and data fetching |
| React Hook Form | ^7.61.1 | Performant form state management |
| Zod | ^3.25.76 | Schema validation and type inference |
| date-fns | ^3.6.0 | Date utility functions |

### Data Visualization
| Technology | Version | Purpose |
|---|---|---|
| Recharts | ^2.15.4 | Declarative chart library built on D3 |
| Embla Carousel | ^8.6.0 | Touch-friendly carousel component |

### Development & Build
| Technology | Version | Purpose |
|---|---|---|
| @vitejs/plugin-react-swc | ^3.11.0 | SWC-powered React Fast Refresh |
| ESLint | ^10.0.1 | Static code analysis |
| typescript-eslint | ^8.36.0 | TypeScript-specific lint rules |
| gh-pages | ^6.3.0 | GitHub Pages deployment utility |
| @tailwindcss/typography | ^0.5.16 | Prose typography plugin |

---

## Portfolio Sections

- **Hero** — Name, role, and primary CTA with animated introduction
- - **About** — Professional background, current role at Equifax, and focus areas
  - - **Experience** — Timeline of 5+ years across Equifax, Evoke Technologies, Community Dreams Foundation, and more
    - - **Projects** — Featured AI/ML projects with tech stacks, metrics, and live links
      - - **Skills** — Categorized tech stack with visual indicators
        - - **Certifications** — Azure Developer Associate, AWS Data Engineer, Stanford ML Specialization, and more
          - - **Education** — MS Data Science, SUNY University at Buffalo
            - - **Contact** — Email and LinkedIn links
             
              - ---

              ## Getting Started

              ### Prerequisites

              - **Node.js** >= 18.x
              - - **npm** >= 9.x (or **bun** for faster installs)
               
                - ### Installation & Development
               
                - ```bash
                  # Clone the repository
                  git clone https://github.com/Adityalolla04/portfolio.git
                  cd portfolio

                  # Install dependencies
                  npm install

                  # Start development server (with HMR)
                  npm run dev
                  # → App available at http://localhost:5173
                  ```

                  ### Build for Production

                  ```bash
                  # Create optimized production build
                  npm run build

                  # Preview the production build locally
                  npm run preview
                  ```

                  ### Deploy to GitHub Pages

                  ```bash
                  # Build and deploy to gh-pages branch
                  npm run deploy
                  ```

                  The `predeploy` script automatically runs `npm run build` before deployment. GitHub Actions workflows handle automated CI/CD on every push to `main`.

                  ---

                  ## CI/CD Pipeline

                  ```
                  Push to main
                       │
                       ▼
                  GitHub Actions Workflow
                       │
                       ├── Install dependencies (npm ci)
                       ├── Run ESLint linting
                       ├── Build with Vite (npm run build)
                       └── Deploy dist/ to gh-pages branch
                                │
                                ▼
                       GitHub Pages CDN
                       adityalolla04.github.io/portfolio
                  ```

                  79+ successful production deployments with zero-downtime rollouts via GitHub Pages.

                  ---

                  ## Key Design Decisions

                  **Component Architecture:** Built on shadcn/ui with Radix UI primitives to ensure WAI-ARIA accessibility compliance across all interactive components without sacrificing design flexibility.

                  **Type Safety:** Full TypeScript coverage with strict mode enabled. All component props, API responses, and form schemas are typed with Zod validation at runtime boundaries.

                  **Performance:** Vite with SWC plugin for sub-second HMR during development and optimized chunk splitting in production builds. TanStack Query handles caching and background refetching for any async data.

                  **Styling Architecture:** Tailwind CSS with `tailwind-merge` and `clsx` for deterministic class composition. The `class-variance-authority` library manages component variant systems without runtime CSS-in-JS overhead.

                  ---

                  ## License

                  MIT License — feel free to use this as a template for your own portfolio.

                  ---

                  <div align="center">

                  Built by [Aditya Srivatsav Lolla](https://www.linkedin.com/in/lolla-aditya-srivatsav-2296671b0/) · Saint Louis, MO · 2025

                  </div>
