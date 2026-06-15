// Industries page copy (SPEC §5.3). One block per locked label: problem
// statement (2–3 sentences) + which pillars typically engage + a
// representative question. No logos, no fake client grids.
// Three-label default per §3 (fourth slot remains OPEN).
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export interface IndustryEntry {
  label: string;
  visual: 'product' | 'behavior' | 'data' | 'market';
  /** Where Claritix enters the business conversation. */
  entry: string;
  /** What the work makes possible for the business. */
  value: string;
  /** 2–3 sentence problem statement. */
  problem: string;
  /** Pillars that typically engage (display names + services anchors). */
  pillars: { label: string; anchor: string }[];
  /** The representative question this industry asks. */
  question: string;
  cta: { label: string; anchor: string };
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
      visual: 'product',
      entry: 'Enterprise platforms, SaaS products, internal tools, mobile apps, and customer-facing systems - from concept to production-ready direction.',
      value:
        'The value is sharper product definition: clearer product logic, stronger market connection, buildable requirements, and evidence the leadership team can defend before production begins.',
      problem:
        'In enterprise platforms, SaaS products, internal tools, mobile apps, and customer-facing systems, teams often move from idea to backlog before the product is fully specified. Claritix enters where a product needs to move from concept to production-ready direction: market logic, user flows, business requirements, mockups, measurement hooks, and the build choices that make the product coherent.',
      pillars: [
        { label: 'Technology & Product', anchor: '/services#product' },
        { label: 'Behavioral & User Analytics', anchor: '/services#behavioral' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Product Strategy & Advisory', anchor: '/services#advisory' },
      ],
      question: 'How do we turn this product idea into something the team can build and the market can understand?',
      cta: { label: 'Shape the product from concept to build', anchor: '/services#product' },
    },
    {
      label: 'E-Commerce & Retail',
      visual: 'behavior',
      entry: 'Funnel leaks, conversion quality, shopper behavior, and commercial prioritization.',
      value:
        'The value is focus: know which leaks are expensive, which fixes deserve product attention, and where shopper behavior changes the business case.',
      problem:
        'Traffic is bought, baskets are built, and then most shoppers quietly disappear. Funnel reports show where they left, not why. Claritix enters where behavior has to become a commercial decision: which leaks matter, what they cost, and which fixes are worth building.',
      pillars: [
        { label: 'Technology & Product', anchor: '/services#product' },
        { label: 'Behavioral & User Analytics', anchor: '/services#behavioral' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Market & Consumer Intelligence', anchor: '/services#market' },
      ],
      question: 'Where do shoppers leak out of the funnel - and what does it cost?',
      cta: { label: 'Read the shopper signal', anchor: '/services#behavioral' },
    },
    {
      label: 'Brands & CPG',
      visual: 'market',
      entry: 'Consumer signal, pricing questions, category movement, and market-facing decisions.',
      value:
        'The value is signal discipline: separate noise from evidence, connect consumer movement to category economics, and turn market pressure into a clear next move.',
      problem:
        'Brands hear from consumers constantly - reviews, panels, social, sales data - and still struggle to hear them clearly. Claritix enters where consumer signal has to be separated from noise: what people buy, why they switch, what they would pay for, and what the market is already telling you.',
      pillars: [
        { label: 'Market & Consumer Intelligence', anchor: '/services#market' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Product Strategy & Advisory', anchor: '/services#advisory' },
      ],
      question: 'Why do loyal buyers switch - and what would they pay to stay?',
      cta: { label: 'Decode the market signal', anchor: '/services#market' },
    },
  ] as IndustryEntry[],

  closing:
    'Across all three, the work resolves in the same place: product behavior, operating data, and external market signals become one evidence base for the decision the business has to make next.',
} as const;
