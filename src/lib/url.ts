// Join a root-relative path with Astro's configured base so links/assets resolve
// regardless of base - now "/" on the claritix.co custom domain, previously the
// "/insightout/" GitHub Pages subpath.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // "/" on the custom domain
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (path === '/') return trimmedBase === '' ? '/' : `${trimmedBase}/`;
  const trimmedPath = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}
