import { createServer } from 'node:http';
import { rm, mkdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { chromium } from 'playwright';

const rootDir = new URL('../dist/', import.meta.url).pathname;
const outDir = new URL('../visual-qa/', import.meta.url).pathname;
const port = Number(process.env.VISUAL_QA_PORT || 4173);
const baseUrl = `http://127.0.0.1:${port}`;

const mime = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
  ['.json', 'application/json; charset=utf-8'],
  ['.webmanifest', 'application/manifest+json; charset=utf-8'],
  ['.woff2', 'font/woff2'],
]);

const pages = [
  ['home', '/'],
  ['services', '/services/'],
  ['industries', '/industries/'],
  ['approach', '/approach/'],
  ['about', '/about/'],
];

const viewports = [
  ['desktop-1440', { width: 1440, height: 1000 }],
  ['mobile-390', { width: 390, height: 844 }],
];

function serveFile() {
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', baseUrl);
      let pathname = decodeURIComponent(url.pathname);
      if (pathname.endsWith('/')) pathname += 'index.html';

      const safePath = normalize(pathname).replace(/^\/+/, '');
      let filePath = join(rootDir, safePath);
      if (!filePath.startsWith(rootDir)) throw new Error('Path escapes dist');

      let data;
      try {
        data = await readFile(filePath);
      } catch {
        filePath = join(rootDir, safePath, 'index.html');
        if (!filePath.startsWith(rootDir)) throw new Error('Path escapes dist');
        data = await readFile(filePath);
      }

      res.writeHead(200, {
        'content-type': mime.get(extname(filePath)) || 'application/octet-stream',
      });
      res.end(data);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Not found');
    }
  });
}

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const server = serveFile();
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });

  const browser = await chromium.launch();
  const summary = [];
  const failures = [];

  try {
    for (const [themeName] of [
      ['light'],
      ['dark'],
    ]) {
      for (const [viewportName, viewport] of viewports) {
        const context = await browser.newContext({
          viewport,
          // Full-page screenshots should capture the complete static fallback,
          // not below-the-fold elements still waiting for scroll reveal.
          reducedMotion: 'reduce',
        });
        await context.addInitScript((theme) => {
          localStorage.setItem('theme', theme);
        }, themeName);

        const page = await context.newPage();
        const pageErrors = [];
        page.on('pageerror', (error) => pageErrors.push(error.message));

        for (const [pageName, pagePath] of pages) {
          const url = `${baseUrl}${pagePath}`;
          await page.goto(url, { waitUntil: 'load' });
          await page.waitForTimeout(1400);

          const result = await page.evaluate(() => {
            const overflow = document.documentElement.scrollWidth - window.innerWidth;
            const theme = document.documentElement.dataset.theme || '';
            const title = document.title;
            const h1 = document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim() || '';
            return { overflow, theme, title, h1 };
          });

          const file = `${viewportName}-${themeName}-${pageName}.png`;
          await page.screenshot({ path: join(outDir, file), fullPage: true });

          const entry = {
            page: pageName,
            path: pagePath,
            viewport: viewportName,
            theme: themeName,
            screenshot: file,
            ...result,
            pageErrors: [...pageErrors],
          };
          summary.push(entry);

          if (result.overflow > 1) {
            failures.push(`${viewportName}/${themeName}/${pageName}: horizontal overflow ${result.overflow}px`);
          }
          if (result.theme !== themeName) {
            failures.push(`${viewportName}/${themeName}/${pageName}: expected theme ${themeName}, got ${result.theme}`);
          }
          if (pageErrors.length) {
            failures.push(`${viewportName}/${themeName}/${pageName}: page errors: ${pageErrors.join('; ')}`);
          }
          pageErrors.length = 0;
        }

        await context.close();
      }
    }

    await writeFile(join(outDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);

    if (failures.length) {
      console.error(failures.join('\n'));
      process.exitCode = 1;
    } else {
      console.log(`Visual QA complete: ${summary.length} screenshots written to visual-qa/`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
