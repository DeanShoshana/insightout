// About page copy (SPEC §5.5). Short, senior, no life story. First-person
// acceptable (§1). Company-forward: the thesis paragraph leads.
//
// DRAFT COPY — everything below is placeholder until content lock (M5).
// Needed from Dean before M5 (§8): final bio (~120 words), headshot
// decision, LinkedIn URL, contact email.

export const about = {
  intro: {
    kicker: 'About',
    headline: 'Why InsightOut exists',
    lede: 'Companies are not short on data. They are short on people who can carry it from the warehouse to the decision table.',
  },

  thesis:
    'InsightOut was built on one observation: the distance between what a company’s data shows and what its leadership decides is usually not a technology gap — it is a translation gap. Dashboards exist; conviction doesn’t. The name is the architecture: internal signals and outside intelligence, turned into insight, delivered outward to the room where it counts.',

  founder: {
    headline: 'The founder',
    // ~120-word placeholder bio — replace with Dean's final copy at M5.
    bio: 'Dean Shoshana is the founder of InsightOut. Trained in social-science research and shaped by a decade in startups, Dean has spent his career carrying evidence into rooms where decisions get made — as an analyst, a product manager, and an advisor to founders, executives, and boards. His work spans behavioral analytics, business intelligence, and market research, with one constant: conclusions held to a research standard and delivered on a business clock. InsightOut is that practice, productized — three analytical engines feeding one seat at the table. He works in English and Hebrew, across B2B and consumer products, from early-stage teams to public-company leadership.',
  },
} as const;
