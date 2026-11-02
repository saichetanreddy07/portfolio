---
name: polished-frontend
description: Use whenever building or editing any UI (pages, components, styling, layout). Enforces intentional visual design, real UX, and accessibility so the result doesn't look like generic AI-generated "vibe coded" output.
---

# Polished Frontend

Goal: the UI should look like a designer and an engineer made deliberate choices. Every color, size, space, and motion has a reason. If a choice is just a default, change it.

**Precedence:** If this guide conflicts with the project brief on look and feel, the **brief wins**. If they conflict on accessibility or performance, **this guide wins**.

## 1. Decide before you code
Before writing components, write a short design brief in `DESIGN.md`:
- **Audience and goal** of the page (who is looking, what should they do next).
- **Visual direction** in 3 adjectives, and what it is NOT (e.g. "sharp, confident, playful; NOT corporate-generic, NOT neon-cyberpunk").
- **Design tokens**: define them once as CSS variables or in the Tailwind config, then use only those. No arbitrary values scattered in components.
  - **Color:** 1 neutral scale (7-9 steps), 1 primary accent, at most 1 secondary, plus semantic success/warning/danger, roughly 60/30/10 (neutral/surface/accent). **Exception:** each project card may define its own theme tokens (accent, surface, pattern) from the brief, scoped to that card only. The rest of the site keeps the global palette.
  - **Type:** up to 3 families (display, body, and mono for labels). A fixed scale (e.g. 12/14/16/20/24/32/48/64) with defined line-heights and weights.
  - **Spacing:** a 4px base grid (4, 8, 12, 16, 24, 32, 48, 64, 96). Nothing off-scale.
  - **Radius, border, shadow, and motion** (durations and easing) as a small set of named tokens.

## 2. Things that make UI look vibe-coded (avoid)
- Default purple-to-blue or pink gradients and gradient text on everything.
- Random glowing blobs, and glassmorphism or blur used decoratively. Glow and blur are allowed only when they carry meaning (e.g. a card's focus/hover glow, dimming other cards while one is expanded).
- Inter/system font with no typographic hierarchy. Same size and weight everywhere.
- Emoji used as icons or bullets. Use ONE icon set (e.g. lucide) at consistent size and stroke.
- Every element a rounded card with the same shadow.
- Everything centered. Walls of identical cards in a 3-column grid with no hierarchy.
- Decorative animation on everything (floating, pulsing, bouncing, parallax with no purpose).
- Fake testimonials, fake logos, fake stats, lorem ipsum, "Welcome to my website", "Unlock the power of...".
- Low-contrast gray text on dark or colored backgrounds.
- Hover effects that shift layout; stacked shadows; inconsistent border radius.

## 3. What to do instead
- **Hierarchy first.** One clear focal point per screen. Size, weight, color, and space should make the reading order obvious in 3 seconds. Squint test: the most important thing should still stand out when blurred.
- **Whitespace is a feature.** Use generous, consistent section spacing. Group related items closely and separate unrelated ones clearly (proximity).
- **Alignment.** Use a real grid and a max content width (~1100-1280px). Left-align body text; limit paragraph width to ~60-75 characters.
- **Restraint.** Use the accent color only for the primary action and key highlights. Few borders, few shadows, each one meaningful.
- **Real content.** Write real, specific, concise copy. Use verbs on buttons ("View project", not "Click here"). Never invent facts, metrics, or testimonials.
- **Distinct personality in small, intentional places** (one memorable hero moment, one signature component), not sprinkled on everything.

## 4. Themed backgrounds
- Themes are atmosphere, not decoration: low opacity (roughly 4-10%), built with CSS/SVG only, no image files.
- Put a scrim or overlay behind text if a pattern would reduce contrast. Check AA on every themed card in both collapsed and expanded states.
- Never use official logos, sprites, characters, or artwork from any brand. Use original shapes inspired by the theme.
- All themes share the same typography, spacing, and base dark palette so the site feels like one product. Only accents and background patterns change per theme.

## 5. UX requirements (every interactive element)
- **All states:** default, hover, focus-visible, active, disabled, loading, empty, and error. Design them, don't leave browser defaults.
- **Visible keyboard focus** that meets contrast. Tab order follows visual order. Everything reachable and operable by keyboard; Escape closes overlays.
- **Touch:** targets at least 44x44px. Don't rely on hover for essential content; provide a tap/focus equivalent.
- **Feedback:** user actions get an immediate visible response (state change, loading indicator, confirmation).
- **Navigation clarity:** the user always knows where they are and what to do next. One primary CTA per section.
- **Expanded cards and modals:**
  - Move focus into the panel on open, trap focus while open, restore focus to the trigger on close, and lock background scroll on mobile.
  - Nested scroll areas must use `overscroll-behavior: contain`.
  - Hover-opened cards must not close when the pointer moves slightly (add a small hover-intent delay), and must never shift the layout of neighboring cards.

## 6. Accessibility baseline (non-negotiable)
- Text contrast at least WCAG AA (4.5:1 body, 3:1 large text and UI components).
- Semantic HTML (`header`, `nav`, `main`, `section`, `button` vs `a`), one `h1`, logical heading order, meaningful `alt` text, labels for inputs, correct ARIA only where HTML can't express it.
- Respect `prefers-reduced-motion` and `prefers-color-scheme` where relevant. Never convey meaning by color alone.

## 7. Motion
- Motion must communicate something (entrance, state change, spatial relationship), not decorate.
- Durations 150-300ms for UI, up to ~500ms for page-level moments. Use ease-out for entering, ease-in for leaving.
- Animate only `transform` and `opacity`. No layout-shifting animations. Provide a reduced-motion fallback (fade or no motion).
- **Exception:** faint ambient background motion (e.g. slow drift in a themed page background) is allowed only if it is very low contrast, never moves text, and is fully disabled under `prefers-reduced-motion`.

## 8. Responsive and performance
- Mobile-first. Verify at 375px, 768px, and 1440px. No horizontal scroll, no overlapping or clipped content, no tiny text.
- Use fluid type and spacing (`clamp()`) where helpful. Images sized and lazy-loaded; no layout shift from late-loading content.
- Avoid heavy libraries and large unused assets. Aim for Lighthouse 90+ on performance and accessibility.

## 9. Code quality that shows in the UI
- Build a small set of reusable components (Button, Card, Chip, Section, Container) instead of copy-pasting styles. Use the tokens everywhere.
- No magic numbers, no inline styles for design values, no unused CSS or dead components.
- Keep content in a data file, separate from components.
- Implement theme patterns as reusable SVG/CSS components driven by tokens, not one-off styles.

## 10. Before you say you're done: self-review
Run through this and fix what fails:
1. Does the hierarchy read correctly at a glance (squint test)?
2. Is every color, size, and space from the tokens (or a card's scoped theme tokens)? Any one-off values?
3. Are there any emoji icons, default gradients, fake content, or lorem ipsum?
4. Do all interactive elements have hover, focus-visible, active, and disabled states?
5. Is keyboard navigation complete, focus managed in overlays, and contrast AA on every themed background?
6. Does it look right at 375, 768, and 1440px with no overflow?
7. Is each animation purposeful, cheap, and reduced-motion safe?
8. Run `npm run build` and `npm run lint`. If Playwright is available, take screenshots at 375, 768, and 1440px and check for overflow, clipped text, and layout jumps when cards expand. Run an accessibility check (e.g. axe) if available. Say plainly which checks you could not run.

Report anything you could not verify instead of claiming it's done.