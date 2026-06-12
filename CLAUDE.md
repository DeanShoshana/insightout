# CLAUDE.md — InsightOut Website

## What this project is
Marketing site for **InsightOut** — a boutique analytics & product strategy consultancy.
**`SPEC.md` is the single source of truth.** Read it fully before any work. Every design,
content, and architecture decision is already made there; do not re-litigate locked decisions.

## Status markers in SPEC.md
- **LOCKED** — implement exactly as written. Do not propose alternatives.
- **PROPOSED** — implement as written unless it conflicts with something; flag conflicts.
- **OPEN** — use the stated default; surface the decision in the PR description.

## Hard rules
1. Follow the milestone plan in SPEC.md §9. One milestone = one PR. Stop after each
   milestone for review — do not run ahead.
2. Brand tokens in SPEC.md §6/§6a are final (`--signal: #2470E5`, `--ink: #101828`).
   Never invent colors.
3. Logo assets live in `public/brand/` — use the SVGs as-is. The speed lines inside the
   icon SVG (`<g id="speedlines">`) are individually animatable; that is intentional.
4. Motion discipline (§6): no scroll-jacking, one pinned scene per page max,
   `prefers-reduced-motion` always respected, transforms+opacity only.
5. Feature flags in `site.config.ts`: `showNetwork`, `showWork`, `showInsights` all
   default **false**. Build the sections, ship them dark.
6. The words "Threat Intelligence" and "Crisis/Risk Intelligence" must not appear
   anywhere on the site (SPEC.md §2, Pillar 3).
7. Copy register: senior, direct, no agency fluff. When writing placeholder copy,
   mark it `<!-- DRAFT COPY -->` so it's findable before content lock.
8. Future Hebrew/RTL must not be blocked: logical CSS properties
   (`margin-inline-*`, `padding-inline-*`), UI strings in content files, `dir` attribute
   plumbed through the base layout.

## Stack (SPEC.md §7)
Astro (static) · plain CSS with custom properties · GSAP + ScrollTrigger only for the
pinned Engine scene and hero scroll-link · IntersectionObserver for simple reveals ·
GitHub Pages via Actions.

## Quality floor (every PR)
Responsive to 360px · keyboard focus visible · WCAG AA contrast · Lighthouse ≥ 90 perf
with motion enabled, ≥ 95 elsewhere · no layout shift on font load.

## Workflow
- Branch per milestone: `m1-skeleton`, `m2-home`, etc.
- PR description: what was built, decisions taken on OPEN items, screenshots
  (desktop 1440 + mobile 390) for any visual change.
- Never commit directly to `main`.
