// Brand raster asset generator (Claritix rebrand). Run once; outputs committed
// to public/ so CI renderer differences can't change them:
//   node scripts/generate-brand-assets.mjs
//
// Source: public/brand/claritix/claritix-logo.png (transparent glass wordmark).
// Produces:
//   brand/claritix/claritix-wordmark.png  trimmed + optimized (nav/hero/footer)
//   favicon.svg / favicon.ico / favicon-32.png   ink tile + the logo's "C" glyph
//   apple-touch-icon.png / icon-192.png / icon-512.png
//   og-image.png   1200×630 - wordmark + Product•Analytics•Strategy on ink

import sharp from 'sharp';
import { writeFileSync, statSync } from 'node:fs';

// Run from repo root (paths are relative to cwd).
const BRANDDIR = 'public/brand/claritix/';
const OUTDIR = 'public/';
const SRC = `${BRANDDIR}claritix-logo.png`;
const INK = '#101828'; // --ink

// ---- 1. Trimmed, display wordmark - WebP keeps the glassy gradient light
//         (it's the home hero LCP element; a 377KB PNG would hurt perf). ----
await sharp(SRC)
  .trim({ threshold: 10 })
  .resize({ width: 900 })
  .webp({ quality: 82, effort: 6 })
  .toFile(`${BRANDDIR}claritix-wordmark.webp`);
console.log('wordmark.webp', statSync(`${BRANDDIR}claritix-wordmark.webp`).size, 'bytes');

// ---- 2. Isolate the "C" glyph: crop the left of the trimmed mark, re-trim ----
const trimmed = await sharp(SRC).trim({ threshold: 10 }).toBuffer({ resolveWithObject: true });
const tw = trimmed.info.width,
  th = trimmed.info.height;
const cGlyph = await sharp(trimmed.data)
  .extract({ left: 0, top: 0, width: Math.round(tw * 0.135), height: th })
  .trim({ threshold: 10 })
  .toBuffer();

// ---- favicon tile: ink square + the C, contained with padding ----
async function tilePng(size, { pad = 0.18 } = {}) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(cGlyph)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: INK } })
    .composite([{ input: mark, gravity: 'centre' }])
    .png()
    .toBuffer();
}

// ---- multi-res ICO (PNG-encoded entries) ----
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const entries = [];
  const images = [];
  let offset = 6 + pngs.length * 16;
  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
    images.push(data);
  }
  return Buffer.concat([header, ...entries, ...images]);
}

// ---- favicon.svg: ink tile embedding the C glyph (base64) ----
async function faviconSvg() {
  const big = (await tilePng(512)).toString('base64');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Claritix">
  <image width="512" height="512" href="data:image/png;base64,${big}"/>
</svg>\n`;
}

// ---- OG image 1200×630 ----
async function ogImage() {
  const W = 1200,
    H = 630,
    LOGO_W = 640;
  const logo = await sharp(SRC).trim({ threshold: 10 }).resize({ width: LOGO_W }).png().toBuffer();
  const logoH = (await sharp(logo).metadata()).height;
  const triad = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="110">
    <style>.t{font-family:'Avenir Next','Avenir','Futura','Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:600;font-size:44px;letter-spacing:-1px;}</style>
    <text x="${W / 2}" y="68" text-anchor="middle" class="t">
      <tspan fill="#FFFFFF">Product</tspan><tspan fill="#7FAFF8">  •  </tspan><tspan fill="#FFFFFF">Analytics</tspan><tspan fill="#7FAFF8">  •  </tspan><tspan fill="#FFFFFF">Strategy</tspan>
    </text>
  </svg>`;
  const triadPng = await sharp(Buffer.from(triad)).png().toBuffer();
  const block = logoH + 44 + 70;
  const top = Math.round((H - block) / 2);
  return sharp({ create: { width: W, height: H, channels: 4, background: INK } })
    .composite([
      { input: logo, top, left: Math.round((W - LOGO_W) / 2) },
      { input: triadPng, top: top + logoH + 30, left: 0 },
    ])
    .png()
    .toBuffer();
}

// ---- run ----
const write = (name, buf) => writeFileSync(`${OUTDIR}${name}`, buf);
write('favicon.svg', Buffer.from(await faviconSvg()));
const p16 = await tilePng(16, { pad: 0.12 });
const p32 = await tilePng(32, { pad: 0.14 });
const p48 = await tilePng(48, { pad: 0.16 });
write('favicon.ico', buildIco([
  { size: 16, data: p16 },
  { size: 32, data: p32 },
  { size: 48, data: p48 },
]));
write('favicon-32.png', p32);
write('apple-touch-icon.png', await tilePng(180));
write('icon-192.png', await tilePng(192));
write('icon-512.png', await tilePng(512));
write('og-image.png', await ogImage());
console.log('Claritix brand assets written to public/');
