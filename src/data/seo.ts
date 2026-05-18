import { site } from './site';

/** Default meta description for pages that do not override. */
export const defaultDescription =
  'Same-day garage door repair and installation in Stittsville, ON. Springs, openers, cables, tracks, panels. Free on-site quote. Call (613) 777-6401.';

export const defaultOgImage = '/images/og/home.jpg';

export const ogImageDimensions = { width: 1200, height: 630 } as const;

/** Ensures trailing slash on internal paths (matches `trailingSlash: "always"`). */
export function withTrailingSlash(path: string): string {
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function absoluteUrl(path: string): string {
  return new URL(withTrailingSlash(path), site.url).href;
}

/** Trim for SERP; keep primary keyword + location in first ~155 chars. */
export function metaDescription(text: string, max = 160): string {
  const trimmed = text.replace(/\s+/g, ' ').trim();
  if (trimmed.length <= max) return trimmed;
  const cut = trimmed.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}
