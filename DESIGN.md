# Design brief — Sai Chetan Reddy

## Audience and goal

Recruiters should be able to identify Sai's focus, strongest projects, and contact links in a quick scan. Hiring managers should be able to inspect project rationale, capabilities, and implementation details without leaving the page. The main actions are viewing projects, downloading the resume, and getting in touch.

## Visual direction

**Confident, athletic, precise.** The page takes cues from a refined player card and game HUD, with cricket as a quiet atmospheric thread. It should feel like a serious engineer's portfolio with a little personality—not corporate-generic, not neon-cyberpunk, and not a game interface pretending to be a portfolio.

Use a dark ink canvas, warm amber for the main action, and restrained teal for secondary emphasis. A compact HUD-like navigation and small mono labels provide the game reference; generous spacing, clear project copy, and a strong typographic hierarchy keep the experience professional. The hero is the focal point. A single short typing line can provide the memorable moment, with a static equivalent and reduced-motion behavior. Cricket cues stay behind content: faint floodlight blooms, pitch/crease lines, and occasional seam geometry, all around 4–8% opacity.

## Palette tokens

| Token | Value | Use |
|---|---|---|
| `ink-950` | `#0B1012` | Main page background |
| `ink-900` | `#11191B` | Raised sections and card surfaces |
| `ink-800` | `#1B2729` | Hover/active surfaces and subtle pattern strokes |
| `ink-700` | `#293739` | Borders and dividers |
| `ink-500` | `#647477` | Borders and decoration only; never use for text |
| `ink-300` | `#AAB7B5` | Secondary body text |
| `ink-100` | `#E8EFEB` | Main text and headings |
| `paper` | `#F7F5EE` | Warm neutral for occasional light surfaces |
| `amber-400` | `#F2B84B` | Primary accent, key highlights, primary CTA |
| `amber-500` | `#D9982E` | Active/pressed primary accent |
| `teal-300` | `#73C9BD` | Secondary accent, links, data cues |
| `success` | `#8ED1A6` | Success status |
| `warning` | `#F2B84B` | In-progress status |
| `danger` | `#F28D7D` | Error status |

Keep the overall balance near 60% dark canvas, 30% raised surfaces and neutral type, 10% accents. Amber and teal are reserved for actions, status, and meaningful highlights; avoid gradient text and broad decorative glows. Filled amber buttons use `ink-950` text. Use `ink-300` or brighter for all muted text; `ink-500` is restricted to borders and decoration. Check actual text and component contrast against WCAG AA before implementation.

## Typography

Use three families with distinct roles:

- **Display/headings:** Space Grotesk, 600–700. Compact, slightly technical character for the name, section headings, and project titles.
- **Body/UI:** Inter, 400–600. Clear reading at small sizes for project details, navigation, and buttons.
- **Labels/data:** IBM Plex Mono, 500. Eyebrows, stat chips, project indices, and compact HUD details only.

Load locally when practical, with `Arial`/system sans and `monospace` fallbacks. If web fonts are used, keep the set to these three families and avoid delaying first paint.

| Token | Size / line height | Weight and use |
|---|---|---|
| `type-xs` | 12px / 16px | Mono metadata and tiny labels; do not use for essential body copy |
| `type-sm` | 14px / 20px | Supporting labels and compact UI |
| `type-base` | 16px / 26px | Body copy |
| `type-lg` | 20px / 28px | Lead text and card summaries |
| `type-xl` | 24px / 32px | Project titles and smaller section heads |
| `type-2xl` | 32px / 40px | Section headings |
| `type-3xl` | 48px / 1.05 | Hero name on compact desktop |
| `type-4xl` | 64px / 1.0 | Hero name at wide viewport; scale fluidly down on mobile |

Use a fluid hero size equivalent to `clamp(2.5rem, 7vw, 4rem)`. Keep paragraphs around 60–75 characters wide and left-aligned.

## Layout and component tokens

- **Spacing:** 4px base grid; use 4, 8, 12, 16, 24, 32, 48, 64, and 96px. Favor 24–32px within components and 64–96px between major sections.
- **Content width:** 1200px maximum, centered; 24px page gutters on desktop and 16px on narrow mobile.
- **Grid:** Projects use a balanced responsive grid; cards share a consistent collapsed height. Expanded details overlay the grid without moving neighboring cards.
- **Radius:** 4px for controls/chips, 8px for cards, 12px for larger panels. Keep corners crisp rather than pill-shaped except for compact status chips.
- **Borders:** 1px solid `ink-700`; use `amber-400` or `teal-300` only for focus and selected states.
- **Shadows:** one restrained elevation shadow for overlay cards; avoid stacked shadows. Focus uses a visible 2px amber outline with offset.
- **Motion:** 180ms ease-out for entering and 140ms ease-in for leaving; animate only transform and opacity. Expanded card may scale slightly and rise above neighbors. Reduced motion switches to a quick fade or no transition.
- **Targets:** interactive hit areas at least 44×44px; navigation and all card expansion must work by keyboard and touch.

## Signature details and project themes

- A thin amber scroll-progress line is the XP-bar reference. Keep it unobtrusive and hide decorative movement under `prefers-reduced-motion`.
- Navigation can use small mono section indices and a clear active/hover/focus state. Avoid simulated game stats that aren't supplied by the brief.
- Project cards use a restrained loadout frame, a clear title, one-line pitch, status where relevant, and three compact technology chips. The expanded overlay shares the global type, spacing, and surfaces.
- Each card may scope its own accent, surface, and pattern while retaining the global dark foundation:

| Project | Scoped accent | Pattern direction |
|---|---|---|
| PokéDex AI | Muted red with electric-yellow detail | Original split-circle motif, faint scanlines, rounded dex-screen frame; no branded artwork |
| Meta-Learning for Time-Series Model Selection | Cool teal/blue | Low-contrast grid and simple waveform |
| Enterprise SQL Analytics & BI Platform | Deep navy with gold/green detail | Faint bars and table-grid lines |
| RestaurantAI | Warm amber | Subtle tile/checker texture and thin steam/menu-line cues |

Patterns are CSS or inline SVG, kept around 4–8% opacity behind a dark scrim. They must not reduce text contrast. Preserve the same card geometry and typography across all themes.

## Experience priorities

The first screen should establish the name, the supplied tagline, the end-to-end AI/ML focus, and the primary project action. Keep the complete page to about four or five desktop screens. Use one cohesive, short scroll narrative: hero, projects, skills/loadout, Beyond Code, contact. Humor belongs only in Beyond Code and small microcopy. Resume, live demo, and other missing destinations remain clearly marked placeholders until supplied.

For expanded projects, make the title visible outside a fixed-height internal scroll region; put GitHub last in the content order. Open by hover intent, keyboard focus/activation, or touch; support Escape, outside close on touch, visible focus, and focus restoration. Dim neighboring cards only enough to clarify focus. Respect reduced motion and contain nested scrolling.

## Accessibility and responsive checks

Use semantic landmarks and one `h1`, preserve logical headings, and provide keyboard access and visible focus for every control. Do not rely on color alone for status. Maintain at least 4.5:1 contrast for body text and 3:1 for large text and UI boundaries. Validate themed cards in collapsed and expanded states. Design mobile-first for 375px, then check 768px and 1440px for overflow, clipped text, readable type, and usable card expansion.
