// Home page copy (SPEC §5.1). Copy lives here, not in components, so
// content-lock edits (M5) never touch markup.
//
// DRAFT COPY - everything below is placeholder until content lock (M5).
// Register: senior, direct, analytical. Company voice. No agency fluff.

export interface EngineCard {
  /** Pillar label (matches SPEC §2 names). */
  pillar: string;
  /** Outcome headline - leads the card. */
  headline: string;
  /** Exactly 3 offerings on home (SPEC §5.1 #3); full list lives on Services. */
  offerings: [string, string, string];
  /** Anchor on the Services page (slugs stable for M3). */
  href: string;
  /** Engine label used in the diagram and card kicker. */
  engine: string;
  motif: 'devices' | 'funnel' | 'trend' | 'network';
}

export const home = {
  hero: {
    triad: ['Product', 'Analytics', 'Strategy'] as const,
    subline: 'Your product and analytics function, on demand.',
    cta: "Let's talk",
  },

  // §5.1 #2 - names the gap between dashboards and decisions. DRAFT COPY.
  problem: {
    statement:
      'Most companies don’t have a data problem or a product problem - they have a decision problem. Product ideas move into backlogs, dashboards multiply, reports pile up, and the calls that matter are still made on instinct. Claritix closes the gap between what the product needs, what the data shows, and what the business decides.',
  },

  // §5.1 #3 - outcome-first services narrative. Leads with Pillar 4's outcome,
  // then the three engines as "how that gets built." DRAFT COPY.
  services: {
    kicker: 'Services',
    headline: 'The deliverable is a decision.',
    lede: 'Not a dashboard. Not a deck that dies in a drive. The work turns product, analytics, and market evidence into a board keynote, investor narrative, product report, or roadmap call someone acts on.',

    seat: {
      pillar: 'Product Strategy & Advisory',
      headline: 'A seat at the table, backed by evidence.',
      body: 'Advisory for executives, boards, and investors: the analysis, the narrative, and the recommendation - delivered in the room where the decision gets made.',
      offerings: [
        'Product & analytics advisory for executives, boards, investors',
        'Board & investor keynotes',
        'Strategic analysis & decision support',
      ],
      href: '/services#advisory',
      linkLabel: 'How advisory works',
    },

    enginesIntro: 'Built through four focused offers.',
    engineLinkLabel: 'See the full offering',
    engines: [
      {
        pillar: 'Technology & Product',
        engine: 'Product',
        headline: 'Turn product questions into production-ready direction.',
        offerings: [
          'Product characterization & opportunity framing',
          'Mobile and web experience characterization',
          'Analytics instrumentation planning',
        ],
        href: '/services#product',
        motif: 'devices',
      },
      {
        pillar: 'Behavioral & User Analytics',
        engine: 'Behavior',
        headline: 'Know what users actually do.',
        offerings: [
          'PMF validation',
          'A/B testing & feature analysis',
          'User journeys & funnel analysis',
        ],
        href: '/services#behavioral',
        motif: 'funnel',
      },
      {
        pillar: 'Data & Business Intelligence',
        engine: 'Data',
        headline: 'Numbers the company can run on.',
        offerings: [
          'BI dashboards & KPI frameworks',
          'Automated reporting systems',
          'Predictive analytics & anomaly detection',
        ],
        href: '/services#data',
        motif: 'trend',
      },
      {
        pillar: 'Market & Consumer Intelligence',
        engine: 'Market',
        headline: 'See the market before it moves you.',
        offerings: [
          'Competitive intelligence & benchmarking',
          'Market research & opportunity assessment',
          'Shopper & consumer insights, Voice of Customer',
        ],
        href: '/services#market',
        motif: 'network',
      },
    ] as EngineCard[],

    diagramCaption: 'Three engines. One seat at the table.',
    diagram: {
      streams: ['Behavior', 'Data', 'Market'],
      artifact: 'The decision',
      aria: 'Three engines - Behavior, Data, and Market - converge into one stream that ends at the decision.',
    },
  },

  // §5.1 #4 - the research-rigor → startup analytics arc. DRAFT COPY.
  approach: {
    kicker: 'Approach',
    headline: 'Product judgment, business context, data discipline.',
    body: 'Claritix sits where product reality meets business need. The work uses data to answer the questions that decide growth: what to build, where users get stuck, which market signals matter, and what leadership should do next.',
    linkLabel: 'Read the approach',
    href: '/approach',
  },

  // §5.1 #5 - industries strip. Three-label default (§3, OPEN decision).
  // Framed as problem statements, not bare labels. Mobile apps appear in the
  // Technology blurb (presentation rule, §3). DRAFT COPY.
  industries: {
    kicker: 'Industries',
    headline: 'Where the work lands.',
    items: [
      {
        label: 'Technology',
        blurb:
          'In software, SaaS, internal tools, and mobile apps, Claritix enters where product ideas need shape: what to build, how it should work, and what evidence makes the direction defensible.',
      },
      {
        label: 'E-Commerce & Retail',
        blurb:
          'In e-commerce, Claritix enters where funnel behavior becomes commercial judgment: where shoppers leak, what it costs, and which fixes deserve focus.',
      },
      {
        label: 'Brands & CPG',
        blurb:
          'For brands, Claritix enters where consumer noise needs structure: why people switch, what they will pay for, and which signals should guide the next move.',
      },
    ],
  },

  // §5.1 #6 - closing CTA. Minimal form: name, email, one-line message (§5.6).
  // M2c: stronger invitation framing; "Work with Claritix" kept as the kicker.
  contact: {
    kicker: 'Work with Claritix',
    headline: 'Bring the decision you’re sitting on.',
    body: 'No brief, no deck - a few lines about where you’re stuck is enough. You’ll get a straight answer on whether Claritix can help, and what it would take.',
    fields: {
      name: 'Name',
      email: 'Email',
      message: 'What are you working on?',
    },
    messagePlaceholder: 'Two or three lines is plenty.',
    submit: 'Start the conversation',
    sending: 'Sending…',
    // Post-submit states (M5b - form wired to Formspree). DRAFT COPY.
    successNote: 'Thanks - your message is on its way. We’ll be in touch.',
    errorNote: 'That didn’t send. Please try again in a moment.',
  },
} as const;
