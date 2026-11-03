# Sai Chetan Reddy — Portfolio

Personal portfolio website for Sai Chetan Reddy, AI/ML engineer.

Built with **React + TypeScript + Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## Getting started

### Prerequisites

- Node.js 18+
- pnpm (or npm)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Preview the production build

```bash
npm run preview
```

---

## Deploy

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the repository in [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite — no extra configuration required.
4. Every push to `main` triggers a new deployment.

### GitHub Pages

1. In `vite.config.ts`, set `base` to your repo name:

   ```ts
   base: '/your-repo-name/'
   ```

2. Install the deploy helper:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Run:

   ```bash
   npm run deploy
   ```

---

## Content placeholders

Before going live, replace the following:

| Placeholder | Location | Action needed |
|---|---|---|
| Resume PDF | `public/Sai_Chetan_Resume.pdf` | Verify this file is the latest version |
| Live demo URLs | `src/data/projects.ts` — each project's `liveDemo` field | Add URLs once projects are deployed; buttons auto-hide when value is `null` |
| Project images | `src/components/projects/ProjectMockup.tsx` | Replace SVG placeholders with real screenshots when available |

---

## Project structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, RootLayout
│   ├── projects/        # Carousel, modal, mockup
│   ├── sections/        # Hero, About, Projects, Skills, Contact, …
│   └── ui/              # Button, Card, Chip, Container, Section, …
├── data/
│   └── projects.ts      # All project content
├── data.ts              # Site-wide copy (nav, hero, about, skills, …)
├── pages/
│   └── HomePage.tsx     # Section order
└── styles/
    └── tokens.css       # Design tokens
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type-checking |

