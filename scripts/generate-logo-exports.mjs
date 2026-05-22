import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = join(root, 'public', 'images');
const outDir = join(imagesDir, 'for-upload');

mkdirSync(outDir, { recursive: true });

function renderPng(svgPath, width, { background } = {}) {
  let svg = readFileSync(svgPath, 'utf8');
  if (background) {
    svg = svg.replace(
      /<svg([^>]*)>/,
      `<svg$1><rect width="100%" height="100%" fill="${background}"/>`,
    );
  }
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: {
      loadSystemFonts: true,
    },
  });
  return resvg.render().asPng();
}

const exports = [
  {
    name: 'stittsville-garage-doors-logo-840w.png',
    src: join(imagesDir, 'logo.svg'),
    width: 840,
    background: '#ffffff',
  },
  {
    name: 'stittsville-garage-doors-logo-transparent-840w.png',
    src: join(imagesDir, 'logo.svg'),
    width: 840,
  },
  {
    name: 'stittsville-garage-doors-logo-560w.png',
    src: join(imagesDir, 'logo.svg'),
    width: 560,
    background: '#ffffff',
  },
  {
    name: 'stittsville-garage-doors-icon-512.png',
    src: join(imagesDir, 'logo-mark.svg'),
    width: 512,
  },
  {
    name: 'stittsville-garage-doors-icon-256.png',
    src: join(imagesDir, 'logo-mark.svg'),
    width: 256,
  },
];

for (const item of exports) {
  const png = renderPng(item.src, item.width, { background: item.background });
  const dest = join(outDir, item.name);
  writeFileSync(dest, png);
  console.log('Wrote', dest);
}

console.log('\nUpload to Trusted Pros: use the 840w white-background PNG (full company name).');
