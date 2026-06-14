// Approach page copy (SPEC §5.4) - the differentiation page. Company voice
// throughout (M3b: first person reversed site-wide, supersedes the old §1
// allowance).
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export const approach = {
  intro: {
    kicker: 'Approach',
    headline: 'Research-grade rigor, startup speed.',
    lede: 'The method comes from research training. The pace comes from a decade inside startups. The offer is both at once.',
  },

  // §5.4 #1 - origin arc.
  origin: {
    headline: 'Where the method comes from',
    paragraphs: [
      'The practice began in research: careful questions, honest measurement, conclusions that survive scrutiny. Research has a low tolerance for convenient answers - the evidence either holds or it doesn’t.',
      'Startups taught the opposite lesson: a rigorous answer that arrives late is worth nothing. Product analytics, experimentation, growth - the questions are research questions, but the clock is a business clock.',
      'Claritix is the merger of the two. Research standards applied to commercial questions, delivered at the speed those questions are actually decided.',
    ],
  },

  // §5.4 #2 - the model: three engines feed the seat.
  model: {
    headline: 'Three engines feed the seat',
    body: 'Behavioral data shows what users do. Business data shows what it adds up to. Market intelligence shows what is happening outside the building. Each is an engine; none is the point. They converge into the seat - the advisory work where evidence becomes a decision.',
    diagramCaption: 'Three engines. One seat at the table.',
  },

  // §5.4 #3 - how engagements work: three shapes.
  engagements: {
    headline: 'How engagements work',
    lede: 'Three shapes. Most work starts as one and grows into another.',
    shapes: [
      {
        name: 'Embedded',
        kicker: 'Fractional senior analyst / product manager',
        who: 'For teams with more questions than analytical capacity - a senior pair of hands inside your tools, your standups, your data.',
        duration: 'Typically 2–4 days a week, three months and up.',
        outcome: 'You get a running analytics practice and a backlog that empties: instrumented funnels, live dashboards, experiments that conclude.',
      },
      {
        name: 'Project',
        kicker: 'Defined deliverable, defined timeline',
        who: 'For a specific question with a deadline - a churn investigation, a market entry, a board-ready product report.',
        duration: 'Typically 2–8 weeks, scoped up front.',
        outcome: 'You get the deliverable and the working behind it - data, method, and the recommendation, ready to be acted on.',
      },
      {
        name: 'Advisory',
        kicker: 'The seat',
        who: 'For founders and executives who want the evidence in the room when decisions get made - ongoing, senior, on call.',
        duration: 'Monthly retainer; cadence set by your decision calendar.',
        outcome: 'You get a standing analytical counterpart: briefings before the board meets, a straight read before you commit.',
      },
    ],
  },

  // §5.4 #4 - Advisory Circle. FLAG-GATED (showNetwork: false) until signed
  // MOUs exist (§4). Placeholder profiles only - clearly fake, never shipped
  // while the flag is off.
  network: {
    headline: 'The Advisory Circle',
    lede: 'Specialists brought in when the question demands a second discipline.',
    profiles: [
      {
        name: 'Advisor Name',
        title: 'Title',
        affiliation: 'Affiliation',
        linkedin: '#',
        note: 'Brought in for placeholder-discipline questions.',
      },
    ],
  },
} as const;
