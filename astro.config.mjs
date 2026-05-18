import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

/** @param {import('@astrojs/sitemap').SitemapItem} item */
function sitemapPriority(item) {
  const pathname = new URL(item.url, 'https://stittsvillegaragedoors.ca').pathname;
  if (pathname === '/') item.priority = 1;
  else if (pathname.startsWith('/services/') || pathname === '/emergency/' || pathname === '/pricing/')
    item.priority = 0.9;
  else if (pathname.startsWith('/neighbourhoods/')) item.priority = 0.85;
  else if (pathname.startsWith('/blog/')) item.priority = 0.8;
  else if (pathname.startsWith('/resources/')) item.priority = 0.75;
  else item.priority = 0.7;
  item.changefreq = pathname === '/' ? 'weekly' : 'monthly';
  return item;
}

export default defineConfig({
  site: 'https://stittsvillegaragedoors.ca',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/api/'),
      serialize: sitemapPriority,
    }),
    tailwind({ applyBaseStyles: true }),
  ],
  build: {
    inlineStylesheets: 'always',
    assets: 'assets',
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
  compressHTML: true,
});
