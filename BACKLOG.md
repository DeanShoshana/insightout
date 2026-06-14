# BACKLOG

Items deferred to a named milestone or parked. SPEC.md §9 remains the milestone
plan; this file tracks enhancements raised in reviews so they aren't lost.

## M4 - Polish (in addition to SPEC §9 M4 scope)

### Entry A - Pillar cards: Apple-lineup visual treatment (M4)

**Status: BUILT at M4 (m4-motion).** Gradient hero zones (tokens only), four
brand-native motifs (funnel / trend / network / converging streams), seat
polish, acceptance criteria verified in the M4 PR.

**Problem:** the current pillar cards on the homepage read flat - "like a
slide." **Goal:** give them the visual presence of Apple's product-lineup row
(reference: gradient-backed cards with a floating hero zone, rounded depth,
generous spacing, horizontal scan rhythm), while staying entirely within the
  Claritix design system - no photos, no stock imagery.

Requirements:
- Each pillar card becomes a visual object with depth: a soft gradient-backed
  hero zone (existing palette tokens only - warm white, surface-2,
  signal/glass; no invented colors), rounded corners per `--radius-card`,
  layered shadow per `--shadow-card`, more internal breathing room.
- The hero zone of each card carries a distinct, abstract, brand-native
  data-motif as inline SVG in the Engine/logo visual language (e.g. converging
  streams, node/network graph, trend curve, funnel) - one unique motif per
  pillar, in the blue-on-warm palette. These replace what would be product
  photos. Precise analytical motifs consistent with the Engine Diagram, not
  hand-drawn scratches.
- Pillar 4 (the "seat") keeps its inverted ink treatment but gains the same
  hero-zone polish so it still reads as the elevated tier.
- Motion: any reveal/hover follows §6 (transforms+opacity only,
  `prefers-reduced-motion` honored, no scroll-jacking). Keep the specced card
  hover lift.

**Acceptance:** the four cards read as designed visual objects with clear
hierarchy and brand-native imagery, not text-in-boxes; AA contrast verified
for any text over gradients; no new color tokens; build green; no horizontal
overflow at 360/390/1440.

### Entry B - Richer supporting motion (M4)

**Status: BUILT at M4 (m4-motion)** under Apple-cinematic art direction:
pinned scrubbed Engine scene, weighted reveals/cascade, logo speed-line
micro-animation, magnetic CTAs, cursor spotlight on cards. Scrollspy kept
from M3.

**Problem:** the page currently reads as a quiet static page; reveals are
intentionally subtle (16px rise). M4 should make the site feel cutting-edge
through scroll-choreographed motion, all §6-compliant (no scroll-jacking,
transforms+opacity only, `prefers-reduced-motion` fully honored).

Candidates already noted:
- The pinned Engine scene - streams draw in and converge to the decision as
  the user scrolls; the page's centerpiece (SPEC §6 signature scene).
- Logo speed-line micro-animation (the `<g id="speedlines">` rects are
  individually animatable by design).
- Magnetic CTA hover (§6 micro table).
- Nav scrollspy (basic active-state scrollspy ships with the M3 Services
  sub-nav; M4 may refine the motion of it).
- A convergence-accent moment on the Engine Diagram.

**Flag for the M4 build prompt:** this pass requires specific art direction at
M4 time - which elements pin, frame-by-frame scene behavior, hover physics.
The M4 prompt must include that direction rather than "make it premium."

## Parked (per SPEC)

- Advisory Circle section - built at M3, flag-gated off (`showNetwork: false`)
  until signed MOUs (§4).
- Case studies (/work) and Insights (/insights) - reserved, unlinked (§4).
