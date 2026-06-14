// Industries page copy (SPEC §5.3). One block per locked label: problem
// statement (2–3 sentences) + which pillars typically engage + a
// representative question. No logos, no fake client grids.
// Three-label default per §3 (fourth slot remains OPEN).
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export interface IndustryEntry {
  label: string;
  /** Where Claritix enters the business conversation. */
  entry: string;
  /** 2–3 sentence problem statement. */
  problem: string;
  /** Pillars that typically engage (display names + services anchors). */
  pillars: { label: string; anchor: string }[];
  /** The representative question this industry asks. */
  question: string;
}

export const industries = {
  intro: {
    kicker: 'Industries',
    headline: 'Where the work lands.',
    lede: 'Claritix enters when a product, growth, or market question is too important to leave to instinct - and too cross-functional for a dashboard alone.',
  },

  items: [
    {
      label: 'Technology',
      entry: 'Product direction, retention, instrumentation, and roadmap evidence.',
      problem:
        'In software and mobile apps, teams ship fast and measure late. Feature lists grow, retention stays flat, and nobody can say which bets paid off. Claritix enters where product direction needs evidence: which journeys matter, which features create movement, and which bets should stop.',
      pillars: [
        { label: 'Technology & Product', anchor: '/services#product' },
        { label: 'Behavioral & User Analytics', anchor: '/services#behavioral' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Product Strategy & Advisory', anchor: '/services#advisory' },
      ],
      question: 'What should we build next - and how do we defend that call?',
    },
    {
      label: 'E-Commerce & Retail',
      entry: 'Funnel leaks, conversion quality, shopper behavior, and commercial prioritization.',
      problem:
        'Traffic is bought, baskets are built, and then most shoppers quietly disappear. Funnel reports show where they left, not why. Claritix enters where behavior has to become a commercial decision: which leaks matter, what they cost, and which fixes are worth building.',
      pillars: [
        { label: 'Technology & Product', anchor: '/services#product' },
        { label: 'Behavioral & User Analytics', anchor: '/services#behavioral' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Market & Consumer Intelligence', anchor: '/services#market' },
      ],
      question: 'Where do shoppers leak out of the funnel - and what does it cost?',
    },
    {
      label: 'Brands & CPG',
      entry: 'Consumer signal, pricing questions, category movement, and market-facing decisions.',
      problem:
        'Brands hear from consumers constantly - reviews, panels, social, sales data - and still struggle to hear them clearly. Claritix enters where consumer signal has to be separated from noise: what people buy, why they switch, what they would pay for, and what the market is already telling you.',
      pillars: [
        { label: 'Market & Consumer Intelligence', anchor: '/services#market' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Product Strategy & Advisory', anchor: '/services#advisory' },
      ],
      question: 'Why do loyal buyers switch - and what would they pay to stay?',
    },
  ] as IndustryEntry[],

  closing:
    'Across all three, the work is the same: turn product behavior, operating data, and external market signals into a decision the business can defend.',
} as const;
