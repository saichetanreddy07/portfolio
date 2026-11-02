# Portfolio Build Brief: Sai Chetan Reddy

## 1. Task
Build a brand-new personal portfolio website from scratch.

- Start clean: delete all existing source, assets, configs, and build output from any previous attempt (keep only `.git`). Do not reuse or refactor old code.
- Follow the `polished-frontend` guidelines for all UI work.

## 2. About the owner and audience
Sai Chetan Reddy is a CS graduate (Artificial Intelligence) looking for his first AI/ML engineer role at startups and big tech.

The site must serve two audiences:
- **Recruiters** who skim for 30 seconds.
- **Hiring managers** who want to see real projects.

## 3. Tone and visual direction
- Professional and confident, with small touches of personality. Not a meme site.
- Bold, playful look with a subtle game-HUD feel (polished "player card" and "loadout" theme), used in restrained doses so it still reads as a serious engineer's site.
- Humor appears only in Beyond Code and small microcopy. Hero and project text stay clean and credible.
- Dark base with one bold accent and one secondary accent. Choose a distinctive palette; avoid generic purple gradients.
- Typography: strong display font for headings, clean sans for body, mono for small labels.
- Game-inspired touches (keep subtle): thin scroll-progress "XP bar" at the top, HUD-style nav, loadout-style project cards, small stat chips.
- One memorable hero moment (short typing line or light animated background) that doesn't slow the page.

## 4. Tech and constraints
- React + TypeScript + Vite, Tailwind CSS, Framer Motion (light use only).
- Single-page, scroll-based, mobile-first, fully responsive.
- Deployable to GitHub Pages or Vercel.
- Keep it light: no 3D, no heavy libraries, lazy-load below the fold, aim for Lighthouse 90+ on performance.
- Respect `prefers-reduced-motion`; good contrast; full keyboard accessibility.
- All content lives in one `src/data.ts` file so text and links can be edited without touching components.
- The whole page should feel short: about 4-5 screens on desktop.

## 5. Sections

### 5.1 Hero
- Name and tagline: "I build AI things that actually work, and are actually fun."
- Two lines on what I do: end-to-end AI/ML, RAG, backend, data analytics.
- Buttons: View Projects, Download Resume, LinkedIn, Contact.

### 5.2 Projects (expandable cards)
Show the 4 projects as small, compact cards in a row or grid. Each card expands to reveal full details in a scrollable area, with the GitHub link at the very end.

**Collapsed (default):**
- Project name, one-line pitch, status badge where relevant (e.g. "In progress"), and 3 small tech chips.
- Loadout-card styling: subtle border glow, small number or icon, consistent size across cards.
- Each card carries its project’s theme from 5.6: a faint hint when collapsed, and the full themed background when expanded.
**Expanded (hover, keyboard focus, or tap):**
- The card scales up smoothly and floats above its neighbors in an overlay layer (transform + z-index), so the grid does **not** reflow or jump. Dim or blur the other cards slightly.
- Inside is a fixed-height scrollable area: thin custom scrollbar, a bottom fade gradient hinting at more content, and `overscroll-behavior: contain` so scrolling the card doesn't scroll the page.
- Only the project title sits outside the scroll area. Content order inside it:
  1. Why I built it (1-2 lines)
  2. What it does (3-4 short bullets)
  3. Key metrics (small stat chips)
  4. Full tech stack
  5. "Live Demo" button (disabled with a "coming soon" state if no URL)
  6. **GitHub link, always the last item**

**Behavior and accessibility:**
- Touch devices: tap to expand (tap again or outside to close), shown as a bottom sheet or centered modal.
- Cards are focusable; Enter/Space expands, Escape closes. Use `aria-expanded` and visible focus rings.
- With `prefers-reduced-motion`, fade instead of scale. Animate only `transform` and `opacity`.

**Projects:**

| Project | Details | Repo |
|---|---|---|
| **PokéDex AI** | Local RAG Q&A, recommender, team builder, and analyzer over 1,576 documents (151 Pokémon, 592 moves, 78 evolution chains) from PokéAPI. ChromaDB, SentenceTransformers, Phi-3 via Ollama, FastAPI backend, 4-tab Gradio UI. *Why:* "What if we had an IRL Pokédex?", and a way to learn RAG and its features. | https://github.com/saichetanreddy07/pokedex-ai-rag |
| **Meta-Learning for Time-Series Model Selection** | Predicts whether ARIMA or Prophet will forecast a series better, without fitting both. 10 statistical meta-features, 1,359 M4 series, Random Forest meta-classifier, 69.12% holdout accuracy, Streamlit app. | https://github.com/saichetanreddy07/Meta-Learning-Time-Series-Forecasting |
| **Enterprise SQL Analytics & BI Platform** | Python ETL on a 5+ GB e-commerce dataset (309,967 sampled records), 4-table PostgreSQL schema, 39 SQL business questions with window functions, 4-page Power BI dashboard. | https://github.com/saichetanreddy07/ecommerce-sql-bi-platform |
| **RestaurantAI** *(In progress)* | FastAPI + SQLAlchemy + MySQL backend with FEFO stock consumption, immutable audit ledger, and real-time dish availability. React 19 + TypeScript dashboard in progress. | https://github.com/saichetanreddy07/Restaurant-AI |

If "why I built it" is missing for a project, leave an editable `TODO` placeholder in `data.ts`. Do not invent one.

### 5.3 Skills ("Loadout")
One compact row grouped as AI/LLMs, ML, Backend, Data, Databases, Tools. Chips or icons only, no long lists.

### 5.4 Beyond Code
A small, fun card grid, not a long section:
- Cricket, football, and Valorant (I main Omen and Fade, hardstuck Gold; one self-deprecating joke allowed).
- Cats are my favorite animal.
- One fun fact: axolotls can regrow limbs and even parts of their heart, spinal cord, and brain.
- One line: I'd like to use AI for wildlife conservation someday.

### 5.5 Contact
- Email: badvel.saichetanreddy@gmail.com
- LinkedIn: https://www.linkedin.com/in/sai-chetan-reddy-a18b4624b/
- GitHub: https://github.com/saichetanreddy07
- Download Resume button (placeholder path `/resume.pdf`)
- Closing line: "Open to AI/ML engineer, Data Analyst and software engineer roles." You can change the wordings

### 5.6 Themed backgrounds

Use themes to give the page character, but keep them **subtle and low-contrast** so text always stays readable. Build every theme with pure CSS and inline SVG (gradients, patterns, shapes). No image files and no video, to keep the page light.

**General page background: cricket**
- Dark base stays dominant. Layer very faint cricket cues behind the content: a stadium-floodlight glow in the hero, subtle pitch-and-crease line patterns (thin horizontal and vertical lines), and an occasional stumps or ball-seam motif as a section divider.
- Keep it low-opacity (roughly 4-10%) so it reads as atmosphere, not decoration. No scoreboard text, no clipart.
- A slow, tiny parallax or drift is optional. Disable it under `prefers-reduced-motion`.

**Per-project card themes** (apply a faint version on the collapsed card, and the full theme when expanded):

| Project | Theme | Cues (CSS/SVG only) |
|---|---|---|
| PokéDex AI | Pokémon-inspired | Red/white split-circle (Poké Ball-style) motif, soft red and electric-yellow accents, rounded "dex screen" frame, subtle scanline |
| RestaurantAI | Restaurant | Warm charcoal and amber palette, subtle tile or checker pattern, menu-card styling, thin cutlery-line or steam-curl accents |
| Meta-Learning Time-Series | Data and charts | Faint grid and line-chart waveform in the background, cool teal/blue accent |
| Enterprise SQL & BI Platform | Analytics dashboard | Faint bar-chart and table-grid pattern, deep navy with a gold or green accent |

**Rules for the themes:**
- Define each theme as tokens in `data.ts` (`themeKey`, accent, surface, pattern name) and implement patterns as reusable SVG or CSS components, not one-offs.
- Don't use official logos, sprites, characters, or artwork from Pokémon or any brand. Use original, generic shapes "inspired by" the theme only.
- Text on every themed background must still meet WCAG AA contrast. Check each card in both collapsed and expanded states.
- Themes must not make the expanded card feel heavy: no large images, no blur-heavy effects, and animate only `transform` and `opacity`.
- The overall page must still read as one cohesive site, with the same typography, spacing, and base dark palette across all themes. Only accents and background patterns change per card.

## 6. Rules
- Do **not** invent facts, metrics, jobs, awards, or testimonials. Use only what is written here.
- Mark clear placeholders for anything missing (live demo URLs, resume file).
- No lorem ipsum. Write real, tight copy.

## 7. Workflow
1. Scaffold the project, then build section by section.
2. Run `npm run build` and `npm run lint` (add a lint script if missing) and fix all errors and warnings.
3. Do not commit or push unless asked.

## 8. Done when
- `npm run build` passes with no errors.
- All 4 project cards expand on hover/focus/tap, scroll internally, and end with a working GitHub link, with no layout jump in the grid.
- The page works at 375px and 1440px widths.
- A short README covers `npm install`, `npm run dev`, and deploy steps for GitHub Pages and Vercel.
- The final message lists the files created and every placeholder still to fill.