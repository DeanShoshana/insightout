// About page copy (SPEC §5.5, revised at M5a). Pure company story - Claritix
// the firm, company voice ("Claritix" / "we"), no first person, no founder/
// individual. Concise and confident.
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export const about = {
  intro: {
    kicker: 'About',
    headline: 'Built for the distance between product reality and business decision.',
    lede: 'Claritix exists for technology-driven companies, startups, and fast-moving markets where product, analytics, and strategy cannot be treated as separate conversations.',
  },

  // The thesis, as one confident statement.
  thesis:
    'Claritix turns product questions, analytical evidence, and market signal into the decision a leader actually has to make. The hard part is not collecting another dashboard. It is connecting what the product should become, what users actually do, what the market is saying, and what the business can defend next.',

  system: {
    kicker: 'The company system',
    headline: 'Product, analytics, and strategy are designed to work as one.',
    lede: 'Each service can stand alone, but the Claritix advantage is the connection between them: product definition creates the question, analytics proves or challenges it, market context tests the outside reality, and strategy carries the answer into action.',
    nodes: [
      {
        label: 'Product',
        title: 'Specify what should be built',
        body: 'Concepts, requirements, prototypes, user flows, and production-ready direction.',
      },
      {
        label: 'Analytics',
        title: 'Read what the system is showing',
        body: 'Behavioral signal, operating data, KPI logic, data quality, and decision evidence.',
      },
      {
        label: 'Market',
        title: 'Place the work in reality',
        body: 'Category movement, buyer context, consumer pressure, and competitive signal.',
      },
      {
        label: 'Strategy',
        title: 'Turn evidence into the call',
        body: 'Executive framing, board-level narratives, product choices, and growth direction.',
      },
    ],
  },

  sections: [
    {
      id: 'how',
      kicker: 'How Claritix thinks',
      headline: 'The question comes before the model.',
      body: 'The work starts by making the business question precise: what is being decided, what evidence would change the decision, and where the product or market reality is still unclear. That discipline keeps analytics from becoming reporting theatre and keeps product work connected to business growth.',
    },
    {
      id: 'where',
      kicker: 'Where it fits',
      headline: 'Built for technological worlds and fast-moving companies.',
      body: 'Claritix is designed for startups, software products, enterprise platforms, mobile experiences, e-commerce, digital operations, and brands operating under pressure. These are environments where product choices, data systems, user behavior, market movement, and leadership expectations all move at once.',
    },
    {
      id: 'difference',
      kicker: 'What makes it different',
      headline: 'The output is not the analysis. The output is clarity.',
      body: 'Most analytics stops at the dashboard. Claritix is built to reach the decision. The combination is the point: enough analytical depth to trust the evidence, enough product judgment to know what it means, and enough business altitude to carry it into action.',
    },
  ],

  proof: {
    kicker: 'Operating altitude',
    headline: 'The work is close enough to the product to be useful, and senior enough to matter.',
    points: [
      'From prototype and product logic to the leadership narrative around what should be built.',
      'From user behavior and operating data to the KPI structure the company can actually run on.',
      'From market pressure and consumer signal to the strategic choice the business needs to make.',
    ],
  },

  closing:
    'Claritix is built for the moment when a company needs more than analysis and more than advice. It needs a connected product, analytics, and strategy function that can turn evidence into movement.',
} as const;
