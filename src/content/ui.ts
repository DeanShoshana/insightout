// Navigation config - shared by Nav and Footer. Page copy lives in
// src/content/<page>.ts so content-lock edits never touch markup.

export interface NavItem {
  label: string;
  /** Route path, relative to the site base (joined via withBase()). */
  href: string;
}

// Information architecture - SPEC §4 (LOCKED).
// Home · Services · Industries · Approach · About · [Let's talk]
// Contact is the CTA, NOT a tab.
const baseNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Approach', href: '/approach' },
  { label: 'About', href: '/about' },
];

export const getNavItems = ({
  showWork = false,
  showInsights = false,
}: {
  showWork?: boolean;
  showInsights?: boolean;
} = {}): NavItem[] => {
  const items = [...baseNavItems];

  if (showWork) {
    items.splice(3, 0, { label: 'Case Studies', href: '/work' });
  }

  if (showInsights) {
    const aboutIndex = items.findIndex((item) => item.href === '/about');
    items.splice(aboutIndex >= 0 ? aboutIndex : items.length, 0, {
      label: 'Insights',
      href: '/insights',
    });
  }

  return items;
};

// Primary CTA label - appears in the nav and the mobile menu (SPEC §4).
export const ctaContact = "Let's talk";
