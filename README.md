# The Vinh Vuong — Personal Website

My personal portfolio and online home, built as a single-page React application and deployed to GitHub Pages at [thevinh0207.github.io](https://thevinh0207.github.io).

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![TanStack](https://img.shields.io/badge/TanStack%20Start-%E2%86%92-FF4154?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-181717?logo=github)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contact Form](#contact-form)
- [Theming](#theming)
- [License](#license)

---

## Overview

A single-page portfolio built with React 19 and TanStack Start, prerendered to static HTML and served from GitHub Pages. It introduces who I am, where I've worked, the projects I've shipped, and how to reach me — with motion-driven transitions and a fully themable dark/light interface.

## Features

### Hero

- Fullscreen landing with animated gradient heading and intro copy
- Fixed navigation bar that solidifies on scroll
- Mobile hamburger menu with full-screen overlay
- Download CV button and quick-contact anchor

### About

- Scroll-triggered animated paragraph introducing my background
- Technology-stack pill cloud rendered from Simple Icons / Devicon / local SVGs
- Decorative floating image corners with staggered FadeIn entries

### Experience

- Chronological role list with company, period, and achievement bullets
- Clean typographic layout — no cards, no boxes, just hierarchy
- Responsive stack-to-grid at the medium breakpoint

### Projects

- Scroll-driven **sticky-stack animation** — each project card pins at the top of the viewport and the next card slides up to cover it, Apple-style
- Per-project description, bullet highlights, and tech-stack pills with icons
- Three live-state treatments via `LiveProjectButton`:
  - **Public repo** → "View project" link opens the GitHub repo in a new tab
  - **Private repo** → disabled button + "Repository is private" tooltip on hover
  - **In development** → disabled button + "In development / Coming soon" tooltip
- Automatic default placeholder image (`default-project.jpg`) when a project has no screenshot yet

### Contact

- Formspree-backed contact form with name, email, and message fields
- Client-side validation:
  - Name blocks digits in real time and rejects non-letter characters on submit
  - Email checks a strict RFC-style pattern (no leading / trailing / consecutive dots)
  - Message requires a minimum length so one-letter submissions don't go through
- Inline per-field error messages with red border, icon, and screen-reader association
- Honeypot field to filter bot submissions silently
- Email subject auto-set to `"New message from personal Website"` via Formspree's `_subject` reserved field
- `Reply-To` set to the sender so replying from Gmail goes straight back to the visitor, not to Formspree
- **Click-to-copy email button** as a fallback (not a `mailto:` link, which breaks on devices without a mail client configured)
- GitHub and LinkedIn pills with external-link indicators

### Theming

- Dark mode by default, light-mode toggle in the top-right
- CSS custom properties (`--page-bg`, `--page-fg`, `--page-bg-invert`, `--page-fg-invert`) drive every color
- Shared `.btn-primary` class flips primary CTAs (Download CV, Send Message) to the opposite theme — white on dark, dark on light — so they always stand out
- Theme-aware form field placeholders via `::placeholder` + CSS vars
- All color transitions animate in sync (0.5s cubic-bezier)

### Routing

- Home route `/` — all portfolio sections stacked
- Services route `/servicios` — standalone services page (Spanish-language content preserved from an earlier iteration)
- 404 fallback resolved to the SPA shell via `404.html` → `index.html` copy in the build step, so deep-linking into GitHub Pages works

---

## Tech Stack

| Layer | Choice |
|---|---|
| **UI Framework** | React 19 |
| **Meta-framework** | [TanStack Start](https://tanstack.com/start) (SPA mode + prerender) |
| **Router** | TanStack Router with file-based routes |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Language** | TypeScript 5 |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + `tw-animate-css` |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), [Simple Icons](https://simpleicons.org/), [Devicon](https://devicon.dev/), self-hosted SVGs |
| **Contact Backend** | [Formspree](https://formspree.io/) |
| **Hosting** | GitHub Pages (static) |
| **CI/CD** | GitHub Actions |

See [`package.json`](package.json) for exact version pins.

---

## Project Structure

```
src/
├── assets/              # Local images and icons
│   ├── projects/        # Project screenshots + default-project fallback
│   └── tech/            # Self-hosted brand SVGs (Slim, Groq, etc.)
├── components/
│   └── portfolio/       # Page-level sections and shared widgets
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ServicesSection.tsx
│       ├── ContactSection.tsx
│       ├── ThemeToggle.tsx
│       ├── LiveProjectButton.tsx
│       ├── FadeIn.tsx
│       ├── AnimatedText.tsx
│       ├── Magnet.tsx
│       ├── MarqueeSection.tsx
│       └── ContactButton.tsx
├── routes/              # TanStack Router file routes
│   ├── __root.tsx       # Shared layout + 404 handler
│   ├── index.tsx        # Home
│   └── servicios.tsx    # Services page
├── lib/                 # Server-side helpers (config, error pages)
├── routeTree.gen.ts     # Auto-generated by TanStack Router plugin
├── styles.css           # Global styles, theme tokens, reusable utilities
├── router.tsx           # Router instance
├── server.ts            # Server entry (SSR)
└── start.ts             # Client entry

public/                  # Static assets served at the site root
.github/workflows/       # Deploy workflow (GitHub Pages via Actions)
```

---

## Getting Started

### Prerequisites

- **Node.js 22+** (TanStack Start requires it)
- **npm** (project is npm-locked; `pnpm` and `bun` are not configured)

### Install

```bash
git clone https://github.com/Thevinh0207/Thevinh0207.github.io.git
cd Thevinh0207.github.io
npm install --legacy-peer-deps
```

> The `--legacy-peer-deps` flag is also set via `.npmrc`, so plain `npm install` works too. It's needed because TanStack Start's internal plugins list Vite 8 as a `peerOptional`, but strict peer resolution would otherwise refuse the install.

### Dev server

```bash
npm run dev
```

Vite opens the dev server with HMR. Edit any component under `src/components/portfolio/` and changes hot-reload.

### Build

```bash
npm run build
```

Outputs:
- `dist/client/` — static assets, served by GitHub Pages
- `dist/server/` — SSR bundle (unused for Pages, kept for future dynamic hosting)

The build script also copies `_shell.html` → `index.html` and `404.html` so SPA deep-links work on GitHub Pages' no-rewrite behavior.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Deployment

The site deploys automatically on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Checkout the repo
2. Install Node 22 + npm cache
3. `npm ci`
4. `npm run build`
5. Upload `dist/client/` as a Pages artifact
6. Deploy to GitHub Pages

**Manual trigger:** Actions tab → *Deploy to GitHub Pages* → *Run workflow*.

**Pages configuration:** Settings → Pages → Source = **GitHub Actions**. (One-time setup.)

---

## Contact Form

Submissions are forwarded by Formspree. Setup:

1. Sign up at [formspree.io](https://formspree.io/) and create a new form.
2. Copy the endpoint (format: `https://formspree.io/f/xxxxxxxx`).
3. Open [`src/components/portfolio/ContactSection.tsx`](src/components/portfolio/ContactSection.tsx) and set:

```tsx
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
```

4. First submission triggers a one-time email verification to the form owner's inbox. Confirm it to activate forwarding.

**Reserved fields used by the form:**

- `_subject` → sets the email subject
- `_replyto` → sets the Reply-To header to the visitor's email

---

## Theming

Theme state lives in a `ThemeToggle` component that toggles the `.light` class on `<html>`. The CSS in [`src/styles.css`](src/styles.css) defines theme tokens on `:root` and overrides them under `html.light`:

```css
:root {
  --page-bg: #0C0C0C;
  --page-fg: #D7E2EA;
  --page-bg-invert: #FFFFFF;
  --page-fg-invert: #0C0C0C;
}

html.light {
  --page-bg: #F4F1EC;
  --page-fg: #0C0C0C;
  --page-bg-invert: #0C0C0C;
  --page-fg-invert: #F4F1EC;
}
```

Every colored surface, text run, and border reads one of these variables, so the switch is instant and site-wide. Primary CTAs use `.btn-primary` which binds to the `-invert` tokens so they always contrast with the current background.

---

## License

Personal portfolio — all rights reserved. Code may be referenced for learning, but assets, copy, and personal content are not licensed for reuse. For questions, use the contact form on the site or reach out via [LinkedIn](https://www.linkedin.com/in/the-vinh-vuong-6a54533a7/).
