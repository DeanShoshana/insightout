// About page copy (SPEC §5.5, revised at M5a). Pure company story - Claritix
// the firm, company voice ("Claritix" / "we"), no first person, no founder/
// individual. Concise and confident.
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export const about = {
  intro: {
    kicker: 'About',
    headline: 'Why Claritix exists',
    lede: 'Companies are not short on data. They are short on the means to carry it from the warehouse to the decision table.',
  },

  // The thesis, as one confident statement.
  thesis:
    'Claritix turns data and research into the decision a leader actually has to make. The hard part was never the dashboard - it is the distance between what the numbers show and what the business does next. We close that distance with research-grade rigor, applied to the call on the table.',

  sections: [
    {
      id: 'how',
      headline: 'How Claritix works',
      body: 'Three services, one outcome. Product analytics shows what users actually do; business intelligence turns it into numbers the company can run on; market and consumer intelligence brings in the view from outside. None of them is the point on its own - they feed the seat at the table, where evidence becomes a recommendation a board can act on.',
    },
    {
      id: 'difference',
      headline: 'What makes it different',
      body: 'Most analytics stops at the dashboard. Claritix is built to reach the decision. The combination is what is rare: the analytical depth to trust the evidence, and the product and strategy instinct to know which decision it should drive. We work at the altitude where those calls get made - with executives, boards, and investors - and we measure the work by the action it produces, not the charts it leaves behind.',
    },
  ],
} as const;
