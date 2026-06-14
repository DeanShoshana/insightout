// Approach page copy (SPEC §5.4) - the differentiation page. Company voice
// throughout (M3b: first person reversed site-wide, supersedes the old §1
// allowance).
//
// DRAFT COPY - everything below is placeholder until content lock (M5).

export const approach = {
  intro: {
    kicker: 'Approach',
    headline: 'Where product, data, and strategy become one decision.',
    lede: 'The work starts with the business question, traces the product reality behind it, and builds the evidence leaders can act on.',
  },

  // §5.4 #1 - origin arc.
  origin: {
    headline: 'Start with the decision, not the dashboard',
    paragraphs: [
      'Claritix begins by locating the decision on the table: a roadmap call, a retention problem, a market move, a board narrative, or a growth question the team can no longer answer by instinct.',
      'From there, the work moves backward through the product, the data, the user behavior, and the market context until the evidence is strong enough to carry the decision.',
      'Research-grade standards still matter: clean questions, honest measurement, and conclusions that survive scrutiny. The difference is that the work is applied to commercial questions at the moment they need to be decided.',
    ],
  },

  decisionFrame: {
    kicker: 'Decision frame',
    headline: 'One frame, four pressures.',
    body: 'The useful answer rarely lives in one discipline. Product appetite, technical feasibility, user behavior, and market motion have to be read together before a recommendation deserves executive attention.',
    signals: ['Product question', 'Technical reality', 'User evidence', 'Market pressure'],
    artifact: 'Decision',
  },

  // §5.4 #2 - the model: three engines feed the seat.
  model: {
    headline: 'Three engines feed the seat',
    body: 'Product direction sets the question. Behavioral data shows what users do. Business data shows what it adds up to. Market intelligence shows what is happening outside the building. The engines converge into the seat - the advisory work where evidence becomes a decision.',
    diagramCaption: 'Three engines. One seat at the table.',
  },

  // Enhancement spec: no public timing commitments. This section is
  // a story about the operating model: product, technology, analytics, strategy.
  operatingSystem: {
    headline: 'The operating system',
    lede: 'The approach is not a sequence of steps. It is a way of keeping product reality, technical feasibility, analytical evidence, and business strategy in the same frame.',
    parts: [
      {
        name: 'Product',
        visual: 'product',
        kicker: 'Characterization & growth fit',
        body: 'Characterize the product before it becomes a build list: connect the market, growth question, user journey, and business model, then turn mockups into production-ready product direction.',
      },
      {
        name: 'Technology',
        visual: 'technology',
        kicker: 'Feasibility & implementation',
        body: 'Translate that direction into technical reality: surfaces, instrumentation, requirements, constraints, and implementation choices the team can actually ship.',
      },
      {
        name: 'Analytics',
        visual: 'analytics',
        kicker: 'Evidence discipline',
        body: 'Build the evidence layer that explains what is happening, why it matters, and which signal is strong enough to act on.',
      },
      {
        name: 'Strategy',
        visual: 'strategy',
        kicker: 'Decision altitude',
        body: 'Carry the evidence into the executive frame: the recommendation, the story, the risk, and the call the business needs to make.',
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
