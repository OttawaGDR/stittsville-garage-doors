import type { BlogCategory, BlogPost } from './types';
import { slugifyHeading } from './utils';
import { springBrokeStittsvilleWinter } from './posts/spring-broke-stittsville-winter';
import { garageDoorRepairCostStittsville2026 } from './posts/garage-door-repair-cost-stittsville-2026';
import { garageDoorWontCloseColdWeather } from './posts/garage-door-wont-close-cold-weather';
import { repairVsReplaceGarageDoor } from './posts/repair-vs-replace-garage-door';
import { openerFlashingLights } from './posts/opener-flashing-lights';
import { fallGarageDoorTuneUp } from './posts/fall-garage-door-tune-up';
import { garageDoorSafetySensorsFrost } from './posts/garage-door-safety-sensors-frost';
import { noisyGarageDoorSummer } from './posts/noisy-garage-door-summer';
import { garageDoorOffTrack } from './posts/garage-door-off-track';

export const blogPosts: BlogPost[] = [
  garageDoorOffTrack,
  noisyGarageDoorSummer,
  springBrokeStittsvilleWinter,
  garageDoorRepairCostStittsville2026,
  garageDoorWontCloseColdWeather,
  repairVsReplaceGarageDoor,
  openerFlashingLights,
  fallGarageDoorTuneUp,
  garageDoorSafetySensorsFrost,
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

export const blogCategories: BlogCategory[] = [
  'Winter & Climate',
  'Repair Guides',
  'Cost & Pricing',
  'Safety',
  'Maintenance',
  'Local Stittsville',
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return post.relatedSlugs
    .map((s) => getBlogPost(s))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, limit);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getTocFromPost(post: BlogPost): { id: string; text: string; level: 2 | 3 }[] {
  return post.blocks
    .filter((b): b is Extract<typeof b, { type: 'h2' } | { type: 'h3' }> => b.type === 'h2' || b.type === 'h3')
    .map((b) => ({
      id: b.id ?? slugifyHeading(b.text),
      text: b.text,
      level: b.type === 'h2' ? 2 : 3,
    }));
}
