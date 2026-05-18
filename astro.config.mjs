import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stittsvillegaragedoors.ca',
  output: 'static',
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
  compressHTML: true,
});
