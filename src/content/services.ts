// Services page copy (SPEC §5.2). One page, four anchored sections in the
// ascent order P1→P4; each: outcome headline → short paragraph → offerings
// (§2 lists) → one example-deliverable line. Anchor slugs match the homepage
// card links exactly: behavioral / data / market / advisory.
//
// DRAFT COPY — everything below is placeholder until content lock (M5).

export interface ServicePillar {
  /** Anchor id — stable, linked from the homepage engine cards. */
  id: 'behavioral' | 'data' | 'market' | 'advisory';
  /** Pillar name (§2). */
  pillar: string;
  /** Short label for the sticky sub-nav. */
  navLabel: string;
  /** Outcome headline. */
  headline: string;
  /** Short paragraph under the headline. */
  body: string;
  /** 3–5 concrete offerings (§2). */
  offerings: string[];
  /** One example-deliverable line ("e.g., …"). */
  example: string;
  /** Optional mono footnote (e.g. P3's methods line). */
  footnote?: string;
}

export const services = {
  intro: {
    kicker: 'Services',
    headline: 'From behavior to the boardroom.',
    lede: 'Four practices, one ascent: what users do, what the numbers say, where the market is moving — and what to decide about it.',
  },

  pillars: [
    {
      id: 'behavioral',
      pillar: 'Behavioral & User Analytics',
      navLabel: 'Behavioral',
      headline: 'Know what users actually do.',
      body: 'Product decisions fail when they rest on what users say or what teams hope. This practice instruments what actually happens — who converts, who churns, which features earn their place — and turns it into product calls you can defend.',
      offerings: [
        'PMF validation',
        'A/B testing & feature analysis',
        'User journeys & funnel analysis',
        'Behavioral & cohort analytics',
        'Product & data QA',
      ],
      example:
        'e.g., a churn-driver analysis with prioritized fixes, or a funnel teardown with a clickable Figma prototype of the strongest fix.',
    },
    {
      id: 'data',
      pillar: 'Data & Business Intelligence',
      navLabel: 'Data & BI',
      headline: 'Numbers the company can run on.',
      body: 'Most reporting answers questions nobody asked. This practice builds the layer leadership actually uses: KPIs that map to decisions, reporting that runs itself, and models that flag what changed before it becomes expensive.',
      offerings: [
        'BI dashboards & KPI frameworks',
        'Automated reporting systems',
        'Predictive analytics & anomaly detection',
        'Data modeling & data quality',
        'Data storytelling & visualization',
      ],
      example:
        'e.g., an executive KPI framework with an automated weekly readout, or an anomaly-detection layer on revenue-critical funnels.',
    },
    {
      id: 'market',
      pillar: 'Market & Consumer Intelligence',
      navLabel: 'Market',
      headline: 'See the market before it moves you.',
      body: 'Internal data tells you what is happening; it rarely tells you why, or what is coming. This practice looks outward — competitors, categories, consumers — and brings the outside view to the same standard of evidence as the inside one.',
      offerings: [
        'Competitive intelligence & benchmarking',
        'Market research & opportunity assessment',
        'Shopper & consumer insights, Voice of Customer',
        'GTM & expansion research',
      ],
      example:
        'e.g., a competitive teardown ahead of a category entry, or a Voice-of-Customer study that explains a soft quarter.',
      footnote:
        'Methods include OSINT, SOCMINT, and social network analysis — applied where the question calls for them, never as an end in themselves.',
    },
    {
      id: 'advisory',
      pillar: 'Product Strategy & Advisory',
      navLabel: 'Advisory',
      headline: 'A seat at the table, backed by evidence.',
      body: 'The flagship practice, and where the other three converge. Analysis is only useful when it survives contact with a boardroom — this is the work of turning evidence into the narrative, the recommendation, and the decision.',
      offerings: [
        'Product & analytics advisory for executives, boards, investors',
        'Board & investor keynotes',
        'Product reports & executive briefings',
        'Strategic analysis & decision support',
        'Stakeholder narratives & data storytelling',
      ],
      example:
        'e.g., an investor keynote on retention economics, or a product report that settles a roadmap argument.',
    },
  ] as ServicePillar[],

  // §5.2 footer line — the only place tool names live on the site.
  toolingNote:
    'Work delivered in SQL, Python, BI tooling, and whatever your stack already runs on.',
} as const;
