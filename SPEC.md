# InsightOut — Website Specification v0.1

**Status:** Draft for review
**Purpose:** Single source of truth for building the InsightOut marketing site. Written to be handed to Claude Code as the build brief. Every section is either **LOCKED** (decided in planning), **PROPOSED** (recommendation, review before build), or **OPEN** (decision required before or during build).

---

## 1. Brand Foundation — LOCKED

| Element | Value |
|---|---|
| Company name | **InsightOut** |
| Brand spine (hero triad) | **Product • Analytics • Strategy** |
| Sub-positioning line | *Analytical and product services, grounded in business strategy.* |
| Core concept | Internal data (product, behavioral) + external intelligence (market, OSINT) → insight delivered outward to the decision table. The name encodes the architecture. |
| Founder positioning | Company-forward branding; founder credibility carried in About + Approach. Social-science research → product & analytics in startups is the differentiation story. |
| Tone of voice | Senior, direct, analytical. No agency fluff, no buzzword inflation. Confident statements over adjectives. **Company voice (InsightOut / "we") everywhere — no first person singular anywhere, including About/Approach** (reversed at M3b, 2026-06; supersedes the earlier first-person allowance). |

**Pre-build action item (OPEN):** domain + trademark availability check for "InsightOut" in operating markets. Shortlist fallbacks if check fails: *Latent*, *Outsight*. Do not begin visual identity work until name is confirmed.

---

## 2. Service Architecture — LOCKED

Four pillars. Three engines + one seat. The hero triad maps onto them: Product → Pillar 1, Analytics → Pillars 2–3, Strategy → Pillar 4.

### Pillar 1 — Behavioral & User Analytics *(the behavioral engine)*
- PMF validation
- A/B testing & feature analysis
- User journeys & funnel analysis
- Behavioral & cohort analytics
- Product / data QA

### Pillar 2 — Data & Business Intelligence *(the data engine)*
- BI dashboards & KPI frameworks
- Automated reporting systems
- Predictive analytics & anomaly detection
- Data modeling & data quality
- Data storytelling & visualization

### Pillar 3 — Market & Consumer Intelligence *(the external engine)*
- Competitive intelligence & benchmarking
- Market research & opportunity assessment
- Shopper / consumer insights, Voice of Customer
- GTM & expansion research
- OSINT / SOCMINT / SNA — presented as *methods*, not a standalone practice. The words "Threat Intelligence" and "Crisis/Risk Intelligence" do **not** appear on the site.

### Pillar 4 — Product Strategy & Advisory *(the seat — flagship)*
- Product & analytics advisory for executives, boards, investors
- Board & investor keynotes
- Product reports & executive briefings
- Strategic analysis & decision support
- Stakeholder narratives & data storytelling

**Hierarchy rule:** Pillar 4 is the premium tier. On the Services page it appears **last** (the culmination of the ascent: behavior → data → market → strategy) but is visually distinguished (see §6). On the homepage, the narrative leads with the *outcome* (the decision artifact) and presents the three engines as how you get there.

Demoted to footnote-level mentions, never service cards: SQL / Pandas / NumPy (a "how I work" line), Figma prototypes (one line under Pillar 1 or 4).

---

## 3. Industries — PARTIALLY LOCKED

Locked labels:

> **Technology · E-Commerce & Retail · Brands & CPG**

**OPEN — fourth slot.** Candidate is "Growth," with three resolution paths discussed:
1. Keep **Growth** but relabel the section *Focus Areas* / *Where I Work* (legitimizes mixing sectors with a stage)
2. **Growth Companies** (two words, kills the growth-marketing misreading)
3. Run **three industries** and use "growth" in the positioning copy instead

→ Decision required before homepage build. Spec defaults to option 3 (three labels) if undecided, since it requires no copy changes later.

**Presentation rule:** Industries are framed as *problem statements*, not bare labels — one short block each ("In e-commerce, the work is finding where shoppers leak out of the funnel" — example reworded to company voice at M3b). Mobile apps must appear in the Technology blurb text (the label "Tech" absorbed the former Mobile & Digital Products slot).

---

## 4. Information Architecture — LOCKED

```
Home  ·  Services  ·  Industries  ·  Approach  ·  About  ·  [Let's talk]
```

- **Contact is a CTA button**, not a tab. Opens contact section/modal or scrolls to footer form.
- **No Case Studies tab** at launch — added when 2–3 anonymized engagements exist. Reserve the route (`/work`) in the codebase, unlinked.
- **No Blog/Insights tab** at launch — reserve `/insights`, unlinked.
- **Advisory Circle / expert network** — PARKED. Build as a feature-flagged section at the bottom of Approach (`showNetwork: false` in config). Section label TBD (front-runners: *Advisory Circle*; two-layer *Advisory Board + delivery network* if relationships support it). Requires signed one-page MOUs (consent, rates, confidentiality, non-circumvention) before flag flips on.

---

## 5. Page-by-Page Content Spec

### 5.1 Home — LOCKED structure

| # | Section | Content |
|---|---|---|
| 1 | **Hero** | InsightOut wordmark/logo · triad **Product • Analytics • Strategy** as the visual lockup · sub-line *"Analytical and product services, grounded in business strategy."* · single primary CTA ("Let's talk") |
| 2 | **Problem framing** | 2–3 sentences: data everywhere, decisions still guesswork. Names the gap between dashboards and decisions. |
| 3 | **Outcome-first services narrative** | Leads with Pillar 4's outcome (the board deck / investor narrative / product report), then three engine cards (Pillars 1–3) as "how that gets built." Each card: outcome headline + 3 offerings + link to Services anchor. |
| 4 | **Approach teaser** | The social-science → startup analytics arc in 3–4 sentences + link to Approach. |
| 5 | **Industries strip** | The locked labels (§3) with one-line problem statements. |
| 6 | **Closing CTA** | "Work with InsightOut" — name, email, one-line message. |

### 5.2 Services — LOCKED structure
- **One page, four anchored sections** (not four pages). Sticky sub-nav with the four pillar anchors.
- Order: Pillar 1 → 2 → 3 → 4 (the ascent). Pillar 4 visually elevated.
- Each section: outcome headline → short paragraph → 3–5 concrete offerings → one example deliverable line ("e.g., investor keynote on retention economics; churn-driver analysis with prioritized fixes").
- Footer line of the page: tooling note ("Work delivered in SQL, Python, BI tooling, and whatever your stack already runs on.") — the only place the tool names live.

### 5.3 Industries — LOCKED structure
- One block per locked label: problem statement (2–3 sentences) + which pillars typically engage + a representative question the industry asks ("Which features actually move retention?" / "Where do shoppers leak out of the funnel?").
- No logos, no fake client grids.

### 5.4 Approach — LOCKED structure (the differentiation page)
1. **Origin arc** — research → behavioral analytics → product & strategy in startups. Why research-grade rigor at startup speed is the offer. Told in company voice (first person reversed at M3b, 2026-06; the phrase "social science" stays off visitor-facing copy per M3a).
2. **The model** — three engines feed the seat. Diagram (see §6 signature element).
3. **How engagements work** — three shapes: embedded (fractional senior analyst/PM), project (defined deliverable), advisory (the seat). Each: who it's for, typical duration, what you get.
4. **[FLAGGED OFF] Advisory Circle** — profile grid: name, title, affiliation, LinkedIn, one line on when they're brought in. 5–6 profiles max.

### 5.5 About — REVISED at M5a (company story, no founder)
- **Reversal (2026-06, M5a):** About is a pure company story about Claritix the
  firm — no founder bio, no individual named. Supersedes the original
  founder-bio structure below.
- Company-voice sections: the Claritix thesis (research-grade rigor → the
  decision), how Claritix works (three engines feed the seat), what makes the
  approach distinct (analytical depth + product/strategy instinct, action over
  dashboards, exec/board altitude).
- *(Original, superseded: founder bio ~120 words + headshot + LinkedIn.)*

### 5.6 Contact (footer/modal) — LOCKED
- Minimal form: name, email, message. No dropdowns, no budget selectors at launch.
- **OPEN:** form backend — Formspree / Web3Forms (static-friendly) vs. plain `mailto:`. Recommend Formspree free tier; mailto as zero-dependency fallback.

---

## 6. Design Direction — LOCKED direction, PROPOSED execution

**Direction (LOCKED, per Dean):** Business-Techy. Reference class: Apple product marketing pages and Google's modern app/Material 3 surfaces. Very clean static foundation; the sophistication lives in **scroll-driven motion**. The site should read as a cutting-edge business product page, not a consultancy brochure.

### The two reference languages, blended
- **Apple-style:** generous whitespace, oversized confident type, sticky scroll scenes where one idea pins and transforms as you scroll, content revealed in orchestrated sequences.
- **Google/Material-style:** soft elevated surfaces, large radii on cards (16–24px), subtle layered shadows, crisp geometric sans, restrained color on white.
- Blend rule: **Apple's motion + Google's surfaces.** Layout and components feel Material-clean; the scroll experience feels Apple-produced.

### Motion system (the differentiator)
| Moment | Treatment |
|---|---|
| Hero load | Triad words **Product • Analytics • Strategy** cascade in (staggered fade-rise, ~120ms offsets); sub-line and CTA follow. Logo settles first. |
| Hero → problem framing | Scroll-linked: hero content eases up/out with slight scale-down (Apple product-page exit). |
| Engine narrative (Home §3 + Approach) | **Signature scene:** sticky pinned section. As the user scrolls, three labeled streams (Behavior, Data, Market) draw in sequentially and converge into one line terminating in the decision artifact — Pillar 4 materializes at the convergence point. This is the InsightOut concept told by the scroll itself. |
| Pillar cards | Staggered rise-on-enter (IntersectionObserver), 60–80ms offsets, once only. |
| Numbers/figures (if any) | Count-up on enter. |
| Nav | Transparent over hero → frosted-glass (backdrop-blur) on scroll past hero. |
| Micro | Hover lift on cards (translateY −4px + shadow step), magnetic-ish CTA hover, smooth anchor scrolling on Services sub-nav with scrollspy. |

**Motion discipline:**
- **No scroll-jacking.** Scroll position drives animation; animation never drives scroll. Native scroll speed always respected.
- One pinned scene per page maximum (the Engine scene). Everything else is enter-once reveals.
- `prefers-reduced-motion`: all scenes render in final state, reveals become instant. Non-negotiable.
- Performance budget: transforms + opacity only (compositor-friendly), no layout-thrashing animations; Lighthouse perf stays ≥ 90 *with* motion enabled.

### Palette — PROPOSED, **pending logo**
Final tokens will be derived from the logo Dean is generating (see §6a). Working defaults until then:

| Token | Hex | Role |
|---|---|---|
| `--surface` | `#FFFFFF` | Primary background (Google-white, not cream) |
| `--surface-2` | `#F6F8FA` | Elevated/alternate section background |
| `--ink` | `#0E1B25` | Primary text, dark scenes |
| `--signal` | `#2F6BFF` *(placeholder — replaced by logo accent)* | CTAs, active states, the convergence moment in the Engine scene |
| `--graphite` | `#5A6B78` | Secondary text |
| `--hairline` | `#E3E8ED` | Borders, rules |

One accent only; it spikes at "insight" moments (CTA, convergence point) and is otherwise absent.

### Typography — PROPOSED
- **Display + body from one geometric/grotesque family** for the techy-clean read: *Instrument Sans* or *Schibsted Grotesk* (display weights 600–700 for the triad and headlines; 400–450 body). Single-family systems are the Apple/Google signature — variety comes from weight and size, not typeface count.
- **Utility:** *IBM Plex Mono* only for the tooling footnote and Engine-scene labels.
- Scale: hero clamp(2.75rem, 7vw, 5rem), tight tracking (−0.02em) at display sizes; body 1.0625rem/1.6.

### Layout
- Max content width ~1140px; airy vertical rhythm (Apple-scale section padding, ~120–160px desktop).
- Cards: Material-style — white on `--surface-2` sections, radius 20px, soft layered shadow, no borders.
- Pillar 4 card: inverted (ink surface, white text, signal CTA) — the visual "seat."

### Quality floor (non-negotiable)
Responsive to 360px · visible keyboard focus states · `prefers-reduced-motion` respected · semantic HTML · WCAG AA contrast · no layout shift on font load · motion within perf budget above.

---

## 6a. Logo Integration — DONE (assets rebuilt as SVG)

Original logo received as 1024px PNG on solid black, no alpha, raster with soft glows. Rebuilt as production SVG from measured geometry (per Dean: colors adjusted for light backgrounds, glassy treatment preserved via gradient + sheen overlay + soft blue float-shadow). Slot-through-the-ring drawn as explicit path geometry (no masks) for maximum renderer compatibility.

**Production assets (`public/brand/` in repo):**
| File | Use |
|---|---|
| `insightout-logo-light.svg` | Full lockup on white/light surfaces — hero, footer |
| `insightout-logo-dark.svg` | Full lockup on ink surfaces — dark sections, OG image |
| `insightout-icon-light.svg` / `-dark.svg` | Icon-only — nav, favicon source, avatars |

Wordmark outlined to paths (Montserrat Light, tracked) — no font dependency. Speed lines are individual `<rect>` elements inside `<g id="speedlines">` — directly animatable for the hero moment (lines stream out of the O). Original PNG retained as design reference only.

**Final brand tokens (derived from logo, replacing §6 placeholders):**
| Token | Hex | Source |
|---|---|---|
| `--signal` | `#2470E5` | "OUT" wordmark / speed-line terminal blue |
| `--ink` | `#101828` | "INSIGHT" wordmark navy |
| `--glass-hi` / `--glass-lo` | `#E9F1FF` / `#76A6F3` | Icon glass gradient (light variant) |
| Speed-line gradient | `#7FAFF8 → #2470E5` | Motion/accent moments |

Remaining: favicon set (.ico + PNG sizes) and OG image generated at Milestone 4 from these SVGs.

---

## 7. Technical Spec — PROPOSED

| Decision | Recommendation | Rationale |
|---|---|---|
| Framework | **Astro** (static output) | Content-driven site; zero JS by default; markdown/MDX content collections; trivial GitHub Pages deploy; Dean can edit content files without touching components. |
| Fallback | Vanilla HTML/CSS/JS | If Astro feels like overhead — site is small enough. Costs: manual nav/footer duplication, no content collections. |
| Styling | Plain CSS with custom properties (tokens from §6) | No Tailwind dependency for a site this size; tokens make the palette swappable if branding shifts post-name-check. |
| Motion | **GSAP + ScrollTrigger** for the pinned Engine scene and scroll-linked hero; native IntersectionObserver + CSS transitions for simple reveals | GSAP is the industry standard for Apple-style pinned scroll scenes and is free for this use; everything simpler stays dependency-free. Total JS stays small — Astro ships zero JS except these islands. |
| Hosting | **GitHub Pages** via Actions workflow | Free, in Dean's GitHub, custom domain ready when the domain check resolves. |
| Forms | Formspree (or Web3Forms) | Static-host compatible. |
| Analytics | Plausible or GoatCounter | Privacy-first, no cookie banner needed; an analytics consultancy shipping GA4 + consent walls is off-brand. |
| i18n | **English only, permanently** (decided at M2b review, 2026-06: there will be no Hebrew/RTL version). No RTL/translation hedging in the architecture. | Scope clarity; copy stays in content files for editability, not translation. |

### Repo structure (Astro)
```
insightout/
├── src/
│   ├── content/          # md/mdx: services, industries, approach, about
│   ├── components/       # Hero, PillarCard, EngineDiagram, IndustryBlock, ContactCTA, Nav, Footer
│   ├── layouts/Base.astro
│   ├── pages/            # index, services, industries, approach, about (+ reserved: work, insights — unlinked)
│   └── styles/tokens.css, global.css
├── public/               # favicon, og-image, headshot
├── site.config.ts        # flags: showNetwork, showWork, showInsights; contact endpoint; analytics
└── .github/workflows/deploy.yml
```

### SEO / meta
- Per-page titles & descriptions; OG image (triad lockup on ink background).
- JSON-LD: `ProfessionalService` + `Person` (founder) schema.
- Realistic expectation: "InsightOut" search is crowded — pipeline is network/LinkedIn, not cold search. Optimize for *name + analytics/advisory* compounds and for converting visitors who arrive with intent.

---

## 8. Content Inventory — what Dean must supply

| Item | Needed for | Status |
|---|---|---|
| ~~Final founder bio (~120 words) + LinkedIn URL~~ — dropped at M5a (About is a company story, no founder) | About | ✓ n/a |
| Headshot decision (yes/no, asset) | About | ☐ |
| One example deliverable line per pillar | Services | ☐ (can draft together) |
| Industry problem statements (or approve drafts) | Industries, Home | ☐ |
| Domain + trademark check result | Everything | ☐ |
| Fourth-industry-slot decision (§3) | Home, Industries | ☐ |
| Email for contact form | Contact | ☐ |
| Advisory Circle: signed MOUs + profiles | Approach (flagged) | ☐ parked |

---

## 9. Build Plan (for Claude Code)

1. **Milestone 1 — Skeleton:** repo init, Astro scaffold, tokens, Base layout, nav/footer, deploy pipeline green on GitHub Pages.
2. **Milestone 2 — Home:** hero with triad, problem framing, pillar cards, industries strip, CTA. Static Engine Diagram.
3. **Milestone 3 — Inner pages:** Services (anchored sections), Industries, Approach, About. Reserved routes stubbed + unlinked.
4. **Milestone 4 — Polish:** Engine Diagram animation (+ reduced-motion), responsive pass at 360/768/1100, focus states, OG/meta/JSON-LD, Lighthouse ≥ 95 across the board.
5. **Milestone 5 — Content lock:** real copy in, form wired, analytics in, custom domain when available.

Each milestone is a PR. Review between milestones; design tokens reviewed at end of M2 with screenshots before inner pages proceed.

---

## 10. Open Decisions — blocking vs. non-blocking

**Blocking before M2:**
- [ ] Fourth industry slot (§3) — defaults to three-label version if unresolved
- [ ] Design tokens sign-off (§6)

**Blocking before M5:**
- [ ] Name/domain/trademark check (§1)
- [ ] Contact email (§8) — founder bio dropped at M5a (About is now a company story)
- [ ] Form backend choice (§5.6)

**Non-blocking (flagged off):**
- [ ] Advisory Circle label + MOUs (§4)
- [ ] Case studies, Insights (reserved routes)
