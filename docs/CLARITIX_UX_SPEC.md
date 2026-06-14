# Claritix UX Gap Characterization

Design brief for the missing experiential layer. Written as specification, not narrative.

## Status

This document captures the next enhancement direction for Claritix after the initial site launch. It is a working UX and content brief for the next build phase.

`SPEC.md` remains the current production source of truth until these items are intentionally merged into it or implemented through a milestone PR.

## Through-Line

The site is correct but not yet alive. It is a well-built static page where a premium site should feel like a responsive surface: elements that move with the user, react to the cursor, and change state with weight.

The best work from Apple, Linear, and Google shares a quality the current site lacks: the interface should feel physical. Each gap below is a facet of that single deficiency.

## Part I - Experiential Gaps

### 1. Apple Lineup Cards And Tabbed Surfaces

Cards and sectioned content should read as objects with presence: gradient-backed, dimensional, with depth, a clear focal point, generous spacing, and a horizontal scan rhythm.

The deficiency is dimensionality. Pillar cards and tabbed sections should sit on the page as physical tiles, distinct surfaces with their own light and shadow, not divided blocks of copy.

Note: this was banked as an M4 backlog entry, but the current expectation is to push it further.

### 2. Cursor-Reactive Hover States

Interactive elements should respond to pointer attention.

A surface under the cursor should come alive through a soft signal-blue glow, gradient sheen, or subtle light/blur that tracks the pointer. This is the highest-impact "alive" signal: the interface should communicate that it is aware of the user.

Treatment must be restrained and on-brand: slow easing, low opacity, never flashy.

### 3. Weighted Scroll-Reveal Motion

Elements should arrive as they enter the viewport: rising, settling, resolving with momentum, subtly staggered, and sometimes entering from the edges.

Current reveals exist but feel emotionally flat: too fast, too small, too uniform. Entrance motion should carry weight and intention so content feels like it lands rather than blinks on.

The pinned Engine scene is the current benchmark for this quality.

### 4. Light/Dark Mode

The site should adapt to the user's theme preference. This is both a signal of considered engineering and a way to let the glass logo, which favors dark surfaces, shine.

This is a structural build, not a polish pass:

- Every color token needs light and dark values.
- A theme toggle belongs in the nav.
- Logo treatments must switch based on active mode.
- Contrast must pass in both modes.

### 5. Residual Empty / Not Cutting-Edge Feeling

This is a symptom of items 1-3, not a separate content problem.

The inner pages read bare because they lack surface life: no depth on cards, limited cursor reactivity, and insufficient weighted entrance. The fix is not more illustration by default. Resolving dimensionality, reactivity, and motion should dissolve the "empty" impression without adding generic imagery.

### 6. More Engaging Contact Section

The closing contact moment is the conversion point and should carry the most presence on the page, not the least.

It should feel like an invitation with weight:

- A confident headline.
- Low-friction framing.
- A designed form surface, not default inputs.
- A distinct background shift or gradient field.
- Brand motion language echoed on arrival.
- Field-focus micro-feedback, such as lift or glow.
- A deliberate submit interaction.

The section should make reaching out feel easy and inevitable.

### 7. Typography As A System

Typography should be the primary design tool.

The site needs a stronger type system:

- Deliberate scale ratios.
- Optical sizing.
- Tightened tracking on headlines.
- Comfortable body line-height.
- Real contrast between display and text registers.

Most "flat" feelings trace to undifferentiated type. Headlines should feel architectural; body copy should feel comfortable.

### 8. Intentional Whitespace And Rhythm

Premium sites breathe.

Spacing should follow a consistent vertical rhythm and use dramatic negative space at key moments, especially the full-viewport hero and major narrative sections.

The instinct under "looks empty" is usually wrong. The fix is rarely more content. It is more confident space, used deliberately rather than evenly.

### 9. Page Transitions

Navigation currently hard-cuts between pages.

Use native View Transitions where appropriate so moving from Home to Services feels like one continuous surface morphing, not a reload. This reads as "expensive" quickly when applied with restraint.

### 10. Loading And First-Paint Choreography

The hero should arrive on first load through a brief, weighted entrance cascade rather than appearing fully formed or popping in.

The first three seconds set the perceived quality of the entire site.

### 11. Micro-Interactions On Every Interactive Element

Buttons, links, nav, and form fields should all have considered hover, focus, and active states.

Create a unified interaction vocabulary:

- Same easing family.
- Same lift logic.
- Same focus-ring language.
- Same glow/shadow behavior where relevant.

Consistency is what makes the site feel crafted.

### 12. Scroll-Driven Storytelling Beyond The Engine Scene

The pinned Engine moment proves the capability.

Use scroll as a narrative device sparingly across the site:

- Subtle parallax.
- Sequences that build.
- Numbers or facts that resolve on enter if used.
- Service-specific visuals that animate into meaning.

This should turn scrolling from navigation into experience without scroll-jacking.

### 13. Responsive Refinement, Not Just Responsive Function

The site works at 360, 390, and 1440 widths. The next standard is that each breakpoint feels designed.

Mobile should not feel like a squeezed desktop:

- Touch targets should feel native.
- CTA placement should respect thumb reach.
- Motion should simplify appropriately.
- Mobile type scale should be reconsidered.
- Hero line breaks should be intentionally composed.

### 14. Detail-Level Polish

The "expensive" tells are small and cumulative:

- Custom focus rings.
- Refined text-selection color.
- Smooth-scroll behavior.
- Styled scrollbar where appropriate.
- Optical alignment of icons and text.
- Consistent corner radii.
- Shadows that follow a single light source.

Individually invisible. Collectively felt.

### 15. Accessibility As Craft

Accessibility should be treated as part of the quality bar, not only compliance.

Requirements:

- Focus order must feel natural.
- Motion must fully disable under `prefers-reduced-motion`.
- Static fallbacks must still look designed.
- Contrast must pass in light and dark modes.
- Keyboard interaction must feel first-class.

## Reference Anchor - The Pinned Engine Scene

Keep and extend the homepage pinned Engine Diagram as the quality anchor.

The current scroll-driven pinned form, where the section pins, the three input streams draw in sequentially, converge into the central node, and "THE DECISION" resolves as the user scrolls, is confirmed as a liked, anchor-quality moment.

This is the gold standard for the rest of the site: the one place where motion already has the weight, choreography, and alive quality missing elsewhere.

Use this quality only where necessary. Do not repeat pinned scenes everywhere.

## Part II - Page-Specific Direction

### Home

Needs more drama and premium feel, carried by elegant animation.

Constraint: it must read as refined, never childish. The bar is the pinned Engine scene. New motion should match its weight, not undercut it.

Content changes:

- Preserve the substance of this line: "Most companies don't have a data problem - they have a decision problem. Dashboards multiply, reports pile up, and the calls that matter are still made on instinct. Claritix closes the gap between what the data shows and what the business decides."
- Replace the current sub-line slogan. "Analytical and product services, grounded in business strategy" is too dry.
- Direction for the new tagline: something more commercial and reality-connected, along the lines of "Your Product & Analytics as a Service."
- Add the Product/Technology offering to the homepage service tabs/cards.
- Rewrite the "Research-grade rigor, startup speed" framing. Move away from "the company started in research." Emphasize that Claritix strikes the right balance between product and business need, leveraging data to answer the questions that let the business grow.
- Enrich "Where the work lands." It is currently too thin.

### Services

Preserve:

- Keep and maintain the service sub-menu that jumps to the relevant service on click. This works.

Add:

- Add a first service: Technology / Product.
- Present it commercially as a sellable service.
- Include mockups as part of the service visual language.

Animation direction:

- Each service should carry its own animation in the site's visual language.
- Animations must represent the service specifically.
- Animations must not be generic.
- Content and animation must speak to each other.

Service visual examples:

- Technology/Product: clean animation of a beautiful mobile/desktop mockup.
- Behavioral: a network of people or something evoking user experience.
- Data/BI: a data model, KPI surface, or dashboard logic that resolves into clarity.
- Market/Consumer: external signals, competitor/category movement, or consumer evidence converging.
- Advisory: evidence resolving into a board-level decision artifact.

### Industries

The page currently misses the focus: where Claritix actually enters each industry.

Needs:

- Clear entry point per industry.
- Call to action.
- Demonstration of added value.
- A connective thread linking the industries together, rather than isolated labels.
- A closing connective line.

Content direction:

- Open with Technology.
- End with something more genuinely data-proper, so the industries section resolves instead of trailing off.

### Approach

Remove:

- Remove the lower tabs/charts/process/timeline/deadline commitments.
- No online commitment to process or deadlines.

Replace with:

- A much stronger Apple/Google design-language showcase.
- A story about the real approach: the combination of product, technology, strategy, and data.
- Treat Approach as the page with the widest text and visual potential, not as a list.

### About

The current content is good but missing connective tissue.

Needs:

- More content richness.
- Stronger design.
- Clearer link between services.
- Explicit emphasis that Claritix offers product, analytics, and strategy services in technological worlds, fast-moving industries, and startups.
- About should shine in both design and program.

## Part III - Global Content Rules

### Tagline

Replace:

`Analytical and product services, grounded in business strategy.`

Direction:

- More commercial.
- More reality-connected.
- More clearly an offering than a description.
- Example territory: "Your Product & Analytics as a Service."

### Dash Convention

Site-wide:

- Convert every em dash to a hyphen.
- Apply across visible site copy.

### Protected Homepage Copy

Preserve the substance of:

`Most companies don't have a data problem - they have a decision problem. Dashboards multiply, reports pile up, and the calls that matter are still made on instinct. Claritix closes the gap between what the data shows and what the business decides.`

This is an anchor line.

## Part IV - Implementation Guardrails

- Keep the site refined, never childish.
- Do not add generic illustrations to compensate for flatness.
- Prefer physicality, motion, type, and surface quality over more content.
- Keep motion restrained, weighted, and on-brand.
- Respect `prefers-reduced-motion`.
- Keep one pinned scene per page maximum.
- Maintain the service sub-menu.
- Do not publish process/deadline commitments.
- Keep Work, Insights, and Advisory Circle gated unless intentionally launched.
- Dark mode must be token-driven, accessible, and logo-aware.
- Product/Technology must become a real sellable service, not a vague capability.
