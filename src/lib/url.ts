// Join a root-relative path with Astro's configured base so links/assets resolve
// correctly under the GitHub Pages subpath (/insightout/) and a future custom domain.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/insightout/" or "/"
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (path === '/') return trimmedBase === '' ? '/' : `${trimmedBase}/`;
  const trimmedPath = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}
