// About page copy (SPEC §5.5, revised at M5a). Pure company story - Claritix
// the firm, company voice ("Claritix" / "we"), no first person, no founder/
// individual. Concise and confident.
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export const about = {
  intro: {
    kicker: 'About',
    headline: 'Why Claritix exists',
    lede: 'Fast-moving companies are not short on data. They are short on the means to carry it from product reality to the decision table.',
  },

  // The thesis, as one confident statement.
  thesis:
    'Claritix turns product questions, analytical evidence, and market signal into the decision a leader actually has to make. The hard part was never the dashboard - it is the distance between what the numbers show, what users do, and what the business does next.',

  sections: [
    {
      id: 'how',
      headline: 'One system, not separate services',
      body: 'Product work defines the question. Behavioral analytics shows what users actually do. Business intelligence turns it into numbers the company can run on. Market and consumer intelligence brings in the outside view. Strategy carries all of it into the recommendation.',
    },
    {
      id: 'where',
      headline: 'Built for technological worlds',
      body: 'The work is designed for startups, software products, mobile experiences, e-commerce, digital operations, and brands moving through fast markets. These are environments where product choices, data systems, consumer behavior, and leadership pressure all move at once.',
    },
    {
      id: 'difference',
      headline: 'What makes the work different',
      body: 'Most analytics stops at the dashboard. Claritix is built to reach the decision. The combination is the point: enough analytical depth to trust the evidence, enough product judgment to know what it means, and enough business altitude to carry it into action.',
    },
  ],
} as const;
