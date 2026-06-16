import { defineConfig } from 'astro/config';

// Served from the custom domain claritix.co at the root path.
// (Was a GitHub Pages project site at /insightout/; moved to the apex domain.)
export default defineConfig({
  site: 'https://claritix.co',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  redirects: {
    '/work': '/case-studies',
  },
});
