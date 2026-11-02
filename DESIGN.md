# Design brief — Sai Chetan Reddy

## Audience and goal

Recruiters should be able to identify Sai's focus, strongest projects, and contact links in a quick scan. Hiring managers should be able to inspect project rationale, capabilities, and implementation details without leaving the page. The main actions are viewing projects, downloading the resume, and getting in touch.

## Visual direction

**Editorial, calm, premium, and personal.** The site adopts a refined editorial design system where large typography is the primary design element. It prioritizes left-aligned structure, generous whitespace, thin hairline dividers instead of heavy card containers, minimal borders, and zero decorative gradients or glowing effects.

Use a dark ink canvas (`ink-950`), warm amber for the main action, and restrained teal for secondary metadata and mono cues. Compact navigation and small mono labels provide clear hierarchy; generous spacing, left-aligned layouts, clear copy, and large display headings keep the experience professional and uncrowded. No glassmorphism, no gradient overlays, no glowing blobs, and no oversized icons.

## Palette tokens

| Token | Value | Use |
|---|---|---|
| `ink-950` | `#0B1012` | Main page background (unified canvas) |
| `ink-900` | `#11191B` | Raised surfaces and subtle fills |
| `ink-800` | `#1B2729` | Hairline dividers, subtle borders, active surfaces |
| `ink-700` | `#293739` | Subtle structural borders |
| `ink-500` | `#647477` | Metadata numerals and decorative lines; never for essential text |
| `ink-300` | `#AAB7B5` | Secondary body text |
| `ink-100` | `#E8EFEB` | Main text and headings |
| `paper` | `#F7F5EE` | Warm neutral |
| `amber-400` | `#F2B84B` | Primary accent, key highlights, primary CTA |
| `amber-500` | `#D9982E` | Active/pressed primary accent |
| `teal-300` | `#73C9BD` | Secondary accent, mono eyebrows, metadata |
| `success` | `#8ED1A6` | Success status |
| `warning` | `#F2B84B` | In-progress status |
| `danger` | `#F28D7D` | Error status |

Keep the overall balance near 65% dark canvas, 25% quiet surfaces and neutral type, 10% accents. Amber and teal are reserved for actions, status, and meaningful highlights; avoid gradient text and broad decorative glows. Filled amber buttons use `ink-950` text. Use `ink-300` or brighter for all muted text; `ink-500` is restricted to borders and decoration. Check actual text and component contrast against WCAG AA before implementation.

## Typography

Typography is the primary visual element:

- **Display/headings:** Space Grotesk, 600–700. Large, tight tracking (-0.04em) editorial headings with confident scale.
- **Body/UI:** Inter, 400–600. Clear, open reading at small and medium sizes.
- **Labels/data:** IBM Plex Mono, 500. Eyebrows, stat chips, and compact indices.

| Token | Size / line height | Weight and use |
|---|---|---|
| `type-xs` | 12px / 16px | Mono metadata and tiny labels; do not use for essential body copy |
| `type-sm` | 14px / 20px | Supporting labels and compact UI |
| `type-base` | 16px / 26px | Body copy |
| `type-lg` | 20px / 28px | Lead text and summaries |
| `type-xl` | 24px / 32px | Sub-headings and smaller section heads |
| `type-2xl` | 32px / 40px | Medium section headings |
| `type-3xl` | 44px / 1.10 | Large section headings |
| `type-4xl` | 56px / 1.05 | Prominent editorial headings |
| `type-5xl` | 68px / 1.00 | Display titles |

Use a fluid hero title equivalent to `clamp(2.75rem, 7.5vw, 5.25rem)` and fluid lead `clamp(1.25rem, 2.8vw, 2rem)`. Keep paragraphs around 60–68 characters wide and left-aligned.

## Layout and component tokens

- **Spacing:** 4px base grid; generous section pacing: `py-12 sm:py-16 lg:py-20` (compact), `py-20 sm:py-28 lg:py-32` (default), `py-28 sm:py-36 lg:py-40` (spacious).
- **Content width:** 1200px maximum, centered with generous padding (`px-6 sm:px-8 lg:px-12`). All content left-aligned within containers.
- **Dividers:** Thin 1px hairline dividers (`border-ink-800/80`) separating sections and items cleanly instead of heavy cards.
- **Radius:** 2px for controls, 4px for cards, 6px for panels. Crisp and architectural rather than bubbly.
- **Borders:** Minimal hairline borders (`border-ink-800/80`); amber outline for focus.
- **Shadows:** Minimal / none (`--shadow-overlay: none`).
- **Motion:** 180ms ease-out for entering and 140ms ease-in for leaving; animate only transform and opacity. Reduced motion switches to a quick fade or no transition.
- **Targets:** interactive hit areas at least 44×44px; navigation and controls operable by keyboard and touch.

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
