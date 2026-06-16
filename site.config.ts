// Central site configuration - single place for feature flags, contact, analytics.
// SPEC §4, §5.6, §7. Sections behind a flag are built but shipped dark (flag = false).

export interface SiteConfig {
  /** Company / brand name. */
  name: string;
  /** Sub-positioning line (SPEC §1). */
  tagline: string;

  /** Feature flags - all default OFF. Build the sections, ship them dark (CLAUDE.md rule 5). */
  flags: {
    /** Advisory Circle / expert network at the bottom of Approach (SPEC §4). Needs signed MOUs. */
    showNetwork: boolean;
    /** Case Studies - reserved route /work, unlinked until 2–3 engagements exist (SPEC §4). */
    showWork: boolean;
    /** Blog / Insights - reserved route /insights, unlinked at launch (SPEC §4). */
    showInsights: boolean;
  };

  /** Contact backend (SPEC §5.6). OPEN: Formspree vs. mailto. Defaults to mailto fallback for now. */
  contact: {
    /** 'mailto' (zero-dependency) or a form-POST endpoint URL (Formspree / Web3Forms). */
    mode: 'mailto' | 'endpoint';
    /** mailto address or POST endpoint, per `mode`. Empty until Dean supplies it (SPEC §8). */
    target: string;
  };

  /** Privacy-first analytics (SPEC §7). Empty until wired at Milestone 5. */
  analytics: {
    provider: 'plausible' | 'goatcounter' | 'none';
    domain: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Claritix',
  tagline: 'Your product and analytics function, on demand.',

  flags: {
    showNetwork: false,
    // Case Studies launched on /work in the current milestone.
    showWork: true,
    showInsights: false,
  },

  contact: {
    // Formspree endpoint (M5b). Public by design - the destination address
    // stays server-side with Formspree; no email appears in the markup.
    mode: 'endpoint',
    target: 'https://formspree.io/f/xjgdpndn',
  },

  analytics: {
    provider: 'none',
    domain: '',
  },
};

export default siteConfig;
