// Navigation config — shared by Nav and Footer. Page copy lives in
// src/content/<page>.ts so content-lock edits never touch markup.

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

// Primary CTA label — appears in the nav and the mobile menu (SPEC §4).
export const ctaContact = "Let's talk";
