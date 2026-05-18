import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'If you are searching garage door repair cost in Stittsville at 7 AM with a door stuck open, you have seen everything from “$69 specials” to “call for quote.” This guide reflects what we actually charge in 2026 for common jobs in Jackson Trails, Fairwinds, Amberwood, Crossing Bridge, Wyldewood, and Bryanston Gate — and what changes the final number after we inspect your door.',
  },
  {
    type: 'callout' as const,
    variant: 'info' as const,
    title: 'How we quote',
    text: 'Every visit includes diagnosis and a <strong>written quote on site before work</strong>. No dispatch fee and no teaser “service call” that only applies toward repair if you say yes the same day. Typical ranges below are anchors; your driveway quote is the number you approve.',
  },
  {
    type: 'h2' as const,
    text: '2026 typical price ranges (Stittsville)',
  },
  {
    type: 'ul' as const,
    items: [
      '<strong>Spring repair:</strong> $250–$350 per torsion spring; both springs on a double often $380–$480 — <a href="/services/spring-repair/">spring repair</a>',
      '<strong>Cable repair:</strong> $150–$250 — <a href="/services/cable-repair/">cable repair</a>',
      '<strong>Opener repair:</strong> $150–$300 (gears, motor, sensors, remotes) — <a href="/services/opener-repair/">opener repair</a>',
      '<strong>Track repair:</strong> $150–$250 align and minor; off-track re-set $200–$400',
      '<strong>Panel repair (in place only):</strong> $150–$400 — we do not swap full sections — <a href="/services/panel-repair/">panel repair</a>',
      '<strong>Maintenance tune-up:</strong> $150–$180 — <a href="/services/maintenance/">maintenance</a>',
      '<strong>New opener installed:</strong> $650–$950 (chain, belt, smart WiFi)',
      '<strong>New insulated door installed:</strong> from about $1,800 (single); doubles often $2,500–$3,500',
    ],
  },
  {
    type: 'p' as const,
    text: 'Seniors and veterans receive <strong>10% off labour</strong> when mentioned at booking. Emergency after-hours surcharges are quoted before we roll out — see our <a href="/emergency/">emergency page</a>.',
  },
  {
    type: 'h2' as const,
    text: 'What drives the price up',
  },
  {
    type: 'ul' as const,
    items: [
      'Three-car carriage doors in Crossing Bridge — heavier hardware and longer labour',
      'Spring break that also damaged cables, drums, or bent vertical track',
      'Obsolete opener boards or discontinued parts requiring special order',
      'High-lift or jackshaft setups over tall RV bays',
    ],
  },
  {
    type: 'h2' as const,
    text: 'What drives the price down',
  },
  {
    type: 'ul' as const,
    items: [
      'Single-component fixes (sensor alignment, limit adjustment, one roller set)',
      'Standard 16-foot doors with parts on the truck',
      'Fall maintenance that prevented a bigger failure later',
    ],
  },
  {
    type: 'h2' as const,
    text: 'Red flags in ads (including $69 and $89 dispatch)',
  },
  {
    type: 'p' as const,
    text: 'Real diagnosis, fuel, and insured labour cost more than a $69 or $89 dispatch. If the ad price cannot cover a legitimate job, the upsell on site is the business model. Ask: Is the on-site estimate free? Do you publish typical ranges? Will I get a written quote before drilling?',
  },
  {
    type: 'h2' as const,
    text: 'Phone estimate vs on-site quote',
  },
  {
    type: 'p' as const,
    text: 'We can share typical ranges if you describe door size and symptoms — a loud bang usually means springs; a humming motor with no movement often means opener or balance. We will not promise a final price over the phone for complex jobs because we would be guessing. The written quote on your driveway after inspection is what you approve.',
  },
];

export const garageDoorRepairCostStittsville2026: BlogPost = {
  slug: 'garage-door-repair-cost-stittsville-2026',
  title: 'Garage Door Repair Cost in Stittsville (2026 Guide)',
  metaDescription:
    'Updated 2026 garage door repair costs in Stittsville — springs $250–$350, cables $150–$250, openers $150–$300. Free on-site quote, no dispatch fee. Honest ranges.',
  excerpt:
    'Typical 2026 price ranges for every common garage door job in Stittsville — what affects your quote, red flags in ads, and how our free on-site estimate works.',
  category: 'Cost & Pricing',
  publishedAt: '2026-02-01',
  updatedAt: '2026-05-18',
  readMinutes: estimateReadMinutes(blocks),
  relatedSlugs: [
    'repair-vs-replace-garage-door-stittsville',
    'spring-broke-stittsville-winter',
    'opener-flashing-lights-troubleshooting',
  ],
  relatedServiceSlugs: ['spring-repair', 'opener-repair'],
  keyTakeaways: [
    'Published 2026 ranges match what we quote on site in Stittsville.',
    'Free written quote before repair — no $89-style dispatch fee.',
    'Both torsion springs on a double door are usually recommended when one fails.',
    'Panel work is in-place repair only ($150–$400); we do not order replacement sections.',
  ],
  blocks,
};
