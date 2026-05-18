import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'Stittsville homeowners on Fairwind Way and in Amberwood often ask whether to repair a 1990s steel door or install new insulated steel before the next winter. The honest answer depends on how many sections are rusted through, whether the frame sags, and what you have already spent on springs and cables in the last three years — not on what a salesperson wants to sell this month.',
  },
  {
    type: 'h2' as const,
    text: 'When repair is usually the right call',
  },
  {
    type: 'ul' as const,
    items: [
      'One failed spring or frayed cable on an otherwise square door — <a href="/services/spring-repair/">spring repair</a> $250–$350',
      'Opener that hums but door is balanced — <a href="/services/opener-repair/">opener repair</a> $150–$300',
      'Bent bottom vertical or rollers out of track — <a href="/services/track-repair/">track repair</a> $150–$250',
      'Dent or rust at the bottom edge with sound steel — <a href="/services/panel-repair/">panel repair in place</a> $150–$400 (we do not swap sections)',
      'Door feels rough but opens — <a href="/services/maintenance/">maintenance</a> $150–$180',
    ],
  },
  {
    type: 'h2' as const,
    text: 'When replacement is usually smarter',
  },
  {
    type: 'ul' as const,
    items: [
      'Multiple sections rusted through or delaminating',
      'Door sags in the middle while tracks and springs test OK (frame or section fatigue)',
      'Repeated spring and cable failures because the door weight was never correct',
      'Attached garage with poor insulation and high heating bills — new door from about $1,800',
      'Discontinued profile where panel matching is impossible and curb appeal matters on Crossing Bridge',
    ],
  },
  {
    type: 'callout' as const,
    variant: 'info' as const,
    title: 'Panel repair vs new door',
    text: 'We repair panels in place — dents, rust edges, hinges, struts. We do <strong>not</strong> order or install replacement sections. Rust-through or cracked face steel usually means <a href="/services/new-door-installation/">new door installation</a> is the honest conversation.',
  },
  {
    type: 'h2' as const,
    text: 'Five-year math on a Fairwinds double',
  },
  {
    type: 'p' as const,
    text: 'Example: 1998 door, second spring failure in two years ($700 total spring work), bottom rust spreading, opener straining. A new insulated double often lands $2,500–$3,500 installed with new springs sized to weight, modern seals, and quieter operation. Another $350 spring band-aid plus rising heat loss may cost more over five years than replacement — we walk through real numbers on site, not a script.',
  },
];

export const repairVsReplaceGarageDoor: BlogPost = {
  slug: 'repair-vs-replace-garage-door-stittsville',
  title: 'Repair vs Replace Your Garage Door in Stittsville: An Honest Guide',
  metaDescription:
    'Should you repair or replace your garage door in Stittsville? When springs, panels, or openers are worth fixing vs when a new door from $1,800 makes sense — 2026 guide.',
  excerpt:
    'Fairwinds steel from the 1990s, Jackson Trails doubles, Crossing Bridge carriage doors — when repair pays off and when a new insulated door is better economics.',
  category: 'Local Stittsville',
  publishedAt: '2026-03-10',
  updatedAt: '2026-05-18',
  readMinutes: estimateReadMinutes(blocks),
  relatedSlugs: ['garage-door-repair-cost-stittsville-2026', 'spring-broke-stittsville-winter'],
  relatedServiceSlugs: ['new-door-installation', 'panel-repair'],
  keyTakeaways: [
    'Single-component failures on sound doors are usually repair.',
    'Multiple rusted sections or sagging middle → consider new door.',
    'Panel work is in-place repair only — not section replacement.',
    'We quote repair and replacement options on site with written numbers.',
  ],
  blocks,
};
