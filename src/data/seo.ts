import { site } from './site';

/** Default meta description for pages that do not override. */
export const defaultDescription =
  'Same-day garage door repair in Stittsville. Springs, openers, cables, tracks, panels — free on-site written quote, no dispatch fee. Call (613) 777-6401.';

/** Primary social / Google preview image — new garage door installation in Stittsville. */
export const defaultOgImage = '/images/og/door-install.png';

export const defaultOgImageAlt =
  'New modern charcoal flush-panel garage door installed on a Stittsville home';

/** Matches `public/images/og/door-install.png` (1024×1024). */
export const ogImageDimensions = { width: 1024, height: 1024 } as const;

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

/** SERP title — phone only on contact/emergency pages to save title space elsewhere. */
export function pageTitle(primary: string, options?: { includePhone?: boolean }): string {
  if (options?.includePhone) return `${primary} | ${site.phone}`;
  return `${primary} | ${site.name}`;
}
