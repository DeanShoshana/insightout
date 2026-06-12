import { defineConfig } from 'astro/config';

// GitHub Pages project site: served from https://<username>.github.io/insightout/
// `site` + `base` make asset URLs and links resolve correctly under the subpath.
// When the custom domain (SPEC §10) resolves, set base back to '/' and update `site`.
export default defineConfig({
  site: 'https://deanshoshana.github.io',
  base: '/insightout',
  output: 'static',
  trailingSlash: 'ignore',
});
