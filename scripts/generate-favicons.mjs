import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'), 'utf8');

const sizes = [16, 32, 48, 192];

for (const size of sizes) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
  });
  const png = resvg.render().asPng();
  const name = size === 192 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
  writeFileSync(join(publicDir, name), png);
}

const icoBuffers = await pngToIco([
  join(publicDir, 'favicon-16.png'),
  join(publicDir, 'favicon-32.png'),
  join(publicDir, 'favicon-48.png'),
]);
writeFileSync(join(publicDir, 'favicon.ico'), icoBuffers);

console.log('Generated favicon.ico and PNG sizes:', sizes.join(', '), '+ apple-touch-icon.png');
