// Industries page copy (SPEC §5.3). One block per locked label: problem
// statement (2–3 sentences) + which pillars typically engage + a
// representative question. No logos, no fake client grids.
// Three-label default per §3 (fourth slot remains OPEN).
//
// DRAFT COPY — everything below is placeholder until content lock (M5).

export interface IndustryEntry {
  label: string;
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
    lede: 'Framed as problems, not logos — because the sector matters less than the question on the table.',
  },

  items: [
    {
      label: 'Technology',
      problem:
        'In software and mobile apps, teams ship fast and measure late. Feature lists grow, retention stays flat, and nobody can say which bets paid off. The work here is separating the features that move retention from the ones that just look busy.',
      pillars: [
        { label: 'Behavioral & User Analytics', anchor: '/services#behavioral' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Product Strategy & Advisory', anchor: '/services#advisory' },
      ],
      question: 'What should we build next — and how do we defend that call?',
    },
    {
      label: 'E-Commerce & Retail',
      problem:
        'Traffic is bought, baskets are built, and then most shoppers quietly disappear. Funnel reports show where they left, not why. The work here is finding the leaks that cost the most — and what it takes to close them.',
      pillars: [
        { label: 'Behavioral & User Analytics', anchor: '/services#behavioral' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Market & Consumer Intelligence', anchor: '/services#market' },
      ],
      question: 'Where do shoppers leak out of the funnel — and what does it cost?',
    },
    {
      label: 'Brands & CPG',
      problem:
        'Brands hear from their consumers constantly — reviews, panels, social, sales data — and still struggle to hear them clearly. The work here is turning that noise into a signal: what people buy, why they switch, and what they would pay.',
      pillars: [
        { label: 'Market & Consumer Intelligence', anchor: '/services#market' },
        { label: 'Data & Business Intelligence', anchor: '/services#data' },
        { label: 'Product Strategy & Advisory', anchor: '/services#advisory' },
      ],
      question: 'Why do loyal buyers switch — and what would they pay to stay?',
    },
  ] as IndustryEntry[],
} as const;
