// Brand raster asset generator (M4e). Run once; outputs are committed to
// public/ so CI font/renderer differences can never change them:
//   node scripts/generate-brand-assets.mjs
//
// Produces, all from the brand SVGs in public/brand/ (no new colors):
//   favicon.svg            scalable ink tile + light-glass mark (modern browsers)
//   favicon.ico            multi-res 16/32/48 (legacy)
//   favicon-32.png         png fallback
//   apple-touch-icon.png   180, ink tile (iOS fills transparency, so solid)
//   icon-192.png / 512.png PWA manifest icons (ink tile)
//   og-image.png           1200×630 — logo lockup + triad on ink (SPEC §6a)
//
// Favicons use the dark-surface icon variant (light glass) on the ink token
// so the mark stays legible on both light and dark browser chrome.

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const BRAND = new URL('../public/brand/', import.meta.url);
const OUT = new URL('../public/', import.meta.url);
const INK = '#101828'; // --ink (SPEC §6a)

const iconDark = readFileSync(new URL('insightout-icon-dark.svg', BRAND));
const logoDark = readFileSync(new URL('insightout-logo-dark.svg', BRAND));

// ---- Favicon tile: ink square + the icon mark, contained with padding ----
async function tilePng(size, { pad = 0.16, bg = INK } = {}) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(iconDark, { density: 384 })
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  })
    .composite([{ input: mark, gravity: 'centre' }])
    .png()
    .toBuffer();
}

// ---- Minimal ICO container (PNG-encoded entries; accepted by all modern UAs) ----
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4);
  const entries = [];
  const images = [];
  let offset = 6 + pngs.length * 16;
  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 => 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bpp
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
    images.push(data);
  }
  return Buffer.concat([header, ...entries, ...images]);
}

// ---- favicon.svg: ink rounded tile wrapping the icon-dark glyph ----
function faviconSvg() {
  // Icon content sits in viewBox "245 215 640 430"; map it into a padded 512 tile.
  const inner = readFileSync(new URL('insightout-icon-dark.svg', BRAND), 'utf8')
    .replace(/^[\s\S]*?<defs>/, '<defs>')
    .replace(/<\/svg>\s*$/, '');
  const pad = 64;
  const target = 512 - pad * 2;
  const cw = 640,
    ch = 430,
    vbx = 245,
    vby = 215;
  const s = Math.min(target / cw, target / ch);
  const tx = (512 - cw * s) / 2 - vbx * s;
  const ty = (512 - ch * s) / 2 - vby * s;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="InsightOut">
  <rect width="512" height="512" rx="112" fill="${INK}"/>
  <g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(4)})">
    ${inner}
  </g>
</svg>\n`;
}

// ---- OG image: 1200×630 ink, logo lockup + triad ----
async function ogImage() {
  const W = 1200,
    H = 630;
  const LOGO_W = 430;
  const logo = await sharp(logoDark, { density: 240 })
    .resize({ width: LOGO_W, fit: 'inside' })
    .png()
    .toBuffer();
  const logoH = (await sharp(logo).metadata()).height;
  const logoTop = 96; // lockup (icon + INSIGHT OUT wordmark) sits up top

  // Triad — the positioning line, set clearly below the lockup. Geometric
  // system sans; rendered once here and committed as PNG (no runtime font dep).
  const triad = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="110">
    <style>.t{font-family:'Avenir Next','Avenir','Futura','Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:600;font-size:44px;letter-spacing:-1px;}</style>
    <text x="${W / 2}" y="68" text-anchor="middle" class="t">
      <tspan fill="#FFFFFF">Product</tspan><tspan fill="#7FAFF8">  •  </tspan><tspan fill="#FFFFFF">Analytics</tspan><tspan fill="#7FAFF8">  •  </tspan><tspan fill="#FFFFFF">Strategy</tspan>
    </text>
  </svg>`;
  const triadPng = await sharp(Buffer.from(triad)).png().toBuffer();

  return sharp({ create: { width: W, height: H, channels: 4, background: INK } })
    .composite([
      { input: logo, top: logoTop, left: Math.round((W - LOGO_W) / 2) },
      { input: triadPng, top: logoTop + logoH + 28, left: 0 },
    ])
    .png()
    .toBuffer();
}

// ---- run ----
const write = (name, buf) => writeFileSync(new URL(name, OUT), buf);

write('favicon.svg', Buffer.from(faviconSvg()));

const p16 = await tilePng(16, { pad: 0.08 });
const p32 = await tilePng(32, { pad: 0.1 });
const p48 = await tilePng(48, { pad: 0.12 });
write('favicon.ico', buildIco([
  { size: 16, data: p16 },
  { size: 32, data: p32 },
  { size: 48, data: p48 },
]));
write('favicon-32.png', p32);
write('apple-touch-icon.png', await tilePng(180, { pad: 0.14 }));
write('icon-192.png', await tilePng(192, { pad: 0.16 }));
write('icon-512.png', await tilePng(512, { pad: 0.16 }));
write('og-image.png', await ogImage());

console.log('brand assets written to public/');
