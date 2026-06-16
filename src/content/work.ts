// Case Studies page copy. This page is now live on /work and nav-linked as
// "Case Studies". All copy remains draft until content lock.
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export interface WorkCase {
  id: 'foundation' | 'opportunity' | 'velocity' | 'icp' | 'narrative' | 'specification';
  navLabel: string;
  kicker: string;
  title: string;
  summary: string;
  preview: string;
  outcome: string;
  statLabel: string;
  statValue: string;
  signals: string[];
  services: { label: string; anchor: string }[];
}

export const work = {
  hero: {
    kicker: 'Case Studies',
    headline: 'Where scattered signal becomes business direction.',
    lede:
      'These engagements show the shape of the work: product questions clarified, opportunity framed, time-to-insight compressed, ICP logic sharpened, public narrative decoded, and ambiguous ambition turned into something a team can actually build.',
    note: 'Specific company details stay private. The pattern is what matters: evidence becomes a usable decision system.',
    motionLabel: 'How one case comes together',
    motionValue: 'Signal to decision',
    rails: [
      'Product question',
      'Behavioral signal',
      'Operating data',
      'Market context',
    ],
    decisionTitle: 'Board-ready direction',
    decisionBody:
      'Separate streams stop competing for attention and resolve into one usable move for product, GTM, and leadership.',
    metrics: [
      { label: 'Operating frames', value: '06' },
      { label: 'Commercial upside framed', value: '$15M+' },
      { label: 'Category opening surfaced', value: '$67B' },
      { label: 'Faster time-to-insight', value: '75%' },
    ],
  },

  cases: [
    {
      id: 'foundation',
      navLabel: 'Foundation',
      kicker: 'Product Insights Foundation',
      title: 'Build the insight layer when product, market, and data signals move faster than the team can interpret them.',
      summary:
        'Across complex categories, the work often starts where dashboards stop: scattered evidence, unclear priority, and high-stakes product decisions that need a cleaner operating view. Claritix connects user behavior, product telemetry, market pressure, technical reality, and leadership context into one system teams can actually use.',
      preview:
        'An insight foundation is not another report. It is the layer that lets product, data, and leadership read the same reality.',
      outcome:
        'The result is a product insights foundation: one structured view that clarifies what to build, what the market is signaling, and how leadership should move.',
      statLabel: 'System outcome',
      statValue: 'One operating view',
      signals: ['User behavior', 'Product telemetry', 'Market pressure', 'Executive logic'],
      services: [
        { label: 'Product', anchor: '/services#product' },
        { label: 'Behavioral', anchor: '/services#behavioral' },
        { label: 'Data & BI', anchor: '/services#data' },
        { label: 'Advisory', anchor: '/services#advisory' },
      ],
    },
    {
      id: 'opportunity',
      navLabel: 'Opportunity',
      kicker: 'Opportunity Discovery',
      title: 'Turn fragmented behavioral, GTM, and product evidence into a commercial case with weight.',
      summary:
        'A company had strong signals but not yet a decision-grade story. Claritix connected behavioral data, product performance, market context, and GTM evidence to expose a major near-term opportunity and align roadmap and go-to-market teams around the same business direction.',
      preview:
        'The initial opportunity mattered on its own. The more important move was showing how that signal fit into a much larger category opening.',
      outcome:
        'The analysis surfaced a $15M+ opportunity inside the business and framed a broader $67B market opening with clear implications for roadmap, positioning, and GTM focus.',
      statLabel: 'Commercial frame',
      statValue: '$15M+ to $67B',
      signals: ['Behavioral data', 'Product performance', 'GTM evidence', 'Category context'],
      services: [
        { label: 'Behavioral', anchor: '/services#behavioral' },
        { label: 'Market', anchor: '/services#market' },
        { label: 'Advisory', anchor: '/services#advisory' },
      ],
    },
    {
      id: 'velocity',
      navLabel: 'Insight speed',
      kicker: 'Decision Velocity',
      title: 'Compress the time between analysis happening and analysis becoming usable.',
      summary:
        'The problem was not a lack of analytical effort. It was the lag between findings and action. Claritix redesigned the way recurring questions were structured, how behavioral and product evidence was translated, and how raw analysis became repeatable insight flows instead of isolated outputs.',
      preview:
        'Faster reporting is not the point. The real gain is faster validation, faster prioritization, and fewer decisions stalled between teams.',
      outcome:
        'The organization cut time-to-insight by 75 percent and doubled the annual throughput of actionable insights, creating a cleaner path from signal to product decision.',
      statLabel: 'Operating shift',
      statValue: '75% faster insight',
      signals: ['Recurring questions', 'Behavioral analysis', 'Insight flow design', 'Decision throughput'],
      services: [
        { label: 'Behavioral', anchor: '/services#behavioral' },
        { label: 'Data & BI', anchor: '/services#data' },
        { label: 'Advisory', anchor: '/services#advisory' },
      ],
    },
    {
      id: 'icp',
      navLabel: 'ICP / GTM',
      kicker: 'ICP And GTM Intelligence',
      title: 'Define who the product is really for by reading movement, not static personas.',
      summary:
        'When teams know the product has value but not exactly for whom or why now, Claritix connects journeys, adoption patterns, competitive context, category pressure, and external signal into a sharper ICP view. The work treats ICP as a living market condition, not a persona exercise.',
      preview:
        'The aim is not a prettier segmentation slide. It is a GTM logic sturdy enough to guide messaging, focus, and market timing.',
      outcome:
        'The result is clearer segmentation, sharper messaging, better prioritization, and a stronger bridge from product capability to market demand.',
      statLabel: 'Go-to-market outcome',
      statValue: 'Sharper ICP logic',
      signals: ['Journeys', 'Adoption patterns', 'Competitive context', 'Category pressure'],
      services: [
        { label: 'Behavioral', anchor: '/services#behavioral' },
        { label: 'Market', anchor: '/services#market' },
        { label: 'Advisory', anchor: '/services#advisory' },
      ],
    },
    {
      id: 'narrative',
      navLabel: 'Narrative',
      kicker: 'Public Narrative Analysis',
      title: 'Map the digital ecosystem when business outcomes are being shaped in public.',
      summary:
        'Some strategic questions are decided outside the product itself. Claritix analyzes digital communities, authenticity signals, sentiment, virality patterns, and narrative movement across major platforms to show how perception is spreading, where momentum is concentrating, and which signals actually matter.',
      preview:
        'Knowing what is being said is table stakes. The edge is knowing how the narrative is moving, who is carrying it, and where it can start to change business reality.',
      outcome:
        'Stakeholders get a clearer read on how public perception, authenticity, and momentum can affect strategic choices, brand position, and market response.',
      statLabel: 'Strategic lens',
      statValue: 'Narrative intelligence',
      signals: ['Digital communities', 'Authenticity signal', 'Sentiment movement', 'Virality patterns'],
      services: [
        { label: 'Market', anchor: '/services#market' },
        { label: 'Data & BI', anchor: '/services#data' },
        { label: 'Advisory', anchor: '/services#advisory' },
      ],
    },
    {
      id: 'specification',
      navLabel: 'Specification',
      kicker: 'Ambiguity To Product Specification',
      title: 'Turn strategic ambition into product direction clear enough to build.',
      summary:
        'Many companies do not fail because they lack ideas. They fail because the idea is still too abstract. Claritix turns ambiguous product ambition into specification by clarifying market need, user logic, technical constraints, prototype direction, decision criteria, and the evidence required before execution begins.',
      preview:
        'Better documentation is only the visible layer. The deeper value is removing ambiguity between leadership, product, data, and engineering before the team commits to build.',
      outcome:
        'The result is a tighter path from concept to production-ready direction, with less drag between teams and a stronger business case behind the build.',
      statLabel: 'Delivery gain',
      statValue: 'Build-ready direction',
      signals: ['Market need', 'User logic', 'Technical constraints', 'Decision criteria'],
      services: [
        { label: 'Product', anchor: '/services#product' },
        { label: 'Data & BI', anchor: '/services#data' },
        { label: 'Advisory', anchor: '/services#advisory' },
      ],
    },
  ] as WorkCase[],

  closing: {
    kicker: 'What holds across them',
    headline: 'Different categories. Same operating pattern.',
    body:
      'The work keeps resolving the same way: product logic, behavior, operating data, and market pressure stop competing for attention and start pointing to one usable move.',
    primary: { label: "Let's talk", href: '/#contact' },
    secondary: { label: 'See the connected services', href: '/services' },
  },
} as const;
