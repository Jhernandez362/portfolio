# Jhohan Daniel Hernandez — Portfolio

A one-page, responsive developer portfolio built with React, Vite and TypeScript.

## Live Demo

_Pending deployment — this section will be updated with the GitHub Pages URL once the site is published._

## About

Personal portfolio for Jhohan Daniel Hernandez, Full Stack Developer with experience across web, mobile, game and immersive (AR/VR) technologies. The site presents a focused, single-page overview of his background, featured and professional work, an in-progress project, technical skill set and a way to get in touch.

## Features

- Responsive one-page layout (mobile-first) combining a showcase hero with a bento-style grid for supporting sections.
- Accessible navbar: sticky header, keyboard-operable mobile menu (`aria-expanded`, `aria-controls`, closes on selection), visible focus states throughout.
- **Hero** with role, tagline, featured stack and links to GitHub, LinkedIn and CV download.
- **About** with a short bio, focus areas and languages.
- **Work**: a featured project (TrainingTiles, published on Steam) plus a set of professional case studies (Livestock Management, Real Estate Platform, Parkinson Assistive Technology).
- **Current Project**: TalentFlow, presented as work-in-progress with a pure HTML/CSS architecture diagram (no canvas, no image, no charting library).
- **Experience & Tech Stack** in a bento grid, without invented metrics or skill percentages.
- **How I Work**: four cards on problem solving, adaptability, communication and teamwork.
- **Contact** with GitHub, LinkedIn, email and CV download links.
- Dark, minimalist visual theme with CSS custom properties for color, spacing, radius and typography.
- Respects `prefers-reduced-motion` and passes WCAG AA contrast on all text/background combinations used.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Plain CSS (custom properties, Grid, Flexbox) — no CSS framework
- [ESLint](https://eslint.org/) (flat config, `typescript-eslint`, `react-hooks`, `react-refresh`)
- Git Flow branching model
- Conventional Commits

## Project Structure

```
Portafolio/
├── public/
│   ├── cv.pdf
│   ├── favicon.svg
│   └── images/
│       └── training-tiles/
├── src/
│   ├── components/        # Reusable UI building blocks (Navbar, Footer)
│   ├── sections/          # One component per page section
│   ├── data/              # Static content consumed by the sections
│   ├── assets/            # Local static assets
│   ├── App.tsx            # Assembles all sections into the page
│   ├── main.tsx            # React entry point
│   └── index.css           # Reset, CSS variables, global base styles
├── index.html
├── package.json
├── eslint.config.js
├── tsconfig*.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 20 or higher (developed with v22)
- npm

### Installation

```bash
git clone https://github.com/Jhernandez362/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

Other useful scripts:

```bash
npm run lint      # run ESLint
npm run preview   # preview a production build locally
```

### Build

```bash
npm run build
```

Type-checks the project (`tsc -b`) and produces a production build in `dist/`.

## Responsive Design

Built mobile-first using CSS Grid and Flexbox, with breakpoints tuned per section (typically `480px`, `600px`, `700–768px`, `900–1000px`). Layouts were audited at 320, 375, 425, 768, 1024 and 1440px to check for horizontal overflow, oversized/undersized components, font scaling and grid behavior — including the TrainingTiles gallery, the Professional Work cards, the TalentFlow architecture diagram, the Experience/Tech Stack bento grid and How I Work.

## Accessibility

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`) throughout.
- Single `h1`, with a consistent, non-skipping heading hierarchy across sections.
- All images include descriptive `alt` text.
- Full keyboard operability, with visible `:focus-visible` states on every interactive element.
- ARIA attributes on the mobile menu (`aria-expanded`, `aria-controls`, state-reflecting `aria-label`) and on grouped content (tech stacks, the TalentFlow diagram).
- Text/background color contrast verified against WCAG AA using the relative luminance formula.
- Respects `prefers-reduced-motion` by disabling animations, transitions and smooth scrolling for users who request it.

## Deployment

Not yet deployed. The intended target is **GitHub Pages**; once published, the URL will be added to the [Live Demo](#live-demo) section above.

## Git Flow

This project follows the Git Flow branching model:

- `main` — production-ready releases.
- `develop` — integration branch.
- `feature/*` — one branch per feature/phase, merged into `develop` once reviewed.

## Conventional Commits

Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (`feat:`, `fix:`, `docs:`, etc.), describing the intent of each change rather than just the files touched.

## Author

**Jhohan Daniel Hernandez**
Full Stack Developer

- GitHub: [github.com/Jhernandez362](https://github.com/Jhernandez362)
- LinkedIn: [linkedin.com/in/jhohan-daniel-hernandez-velandia-816129232](https://www.linkedin.com/in/jhohan-daniel-hernandez-velandia-816129232/)
