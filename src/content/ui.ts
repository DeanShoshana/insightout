// UI strings live in a content file, not in components, so a future Hebrew/RTL
// build can swap them without touching markup (CLAUDE.md rule 8, SPEC §7 i18n).

export interface NavItem {
  label: string;
  /** Route path, relative to the site base (joined via withBase()). */
  href: string;
}

// Information architecture — SPEC §4 (LOCKED).
// Home · Services · Industries · Approach · About · [Let's talk]
// Contact is the CTA, NOT a tab.
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Approach', href: '/approach' },
  { label: 'About', href: '/about' },
];

export const ui = {
  // Primary CTA — opens contact (SPEC §4: scrolls to footer/contact section).
  ctaContact: "Let's talk",
  navAriaLabel: 'Primary',
  skipToContent: 'Skip to content',
  logoAlt: 'InsightOut',
  footerTagline: 'Analytical and product services, grounded in business strategy.',
  footerRights: 'All rights reserved.',
} as const;
