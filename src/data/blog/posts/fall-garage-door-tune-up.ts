import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'September and October are the best months for a garage door tune-up in Stittsville — before hockey season at Johnny Leroux, before the first -25°C morning traps cars behind doors with brittle springs. A $150–$180 maintenance visit is cheaper than an emergency spring call in January when every Fairwinds street seems to snap coils the same week.',
  },
  {
    type: 'h2' as const,
    text: 'What a 21-point tune-up includes',
  },
  {
    type: 'ul' as const,
    items: [
      'Lubricate hinges and rollers with cold-climate product (not grease in the track)',
      'Torque brackets, flag brackets, and hinge bolts loosened by vibration',
      'Test door balance and spring cycles remaining',
      'Inspect cables for fraying and drums for worn grooves',
      'Adjust opener force and travel limits for winter bind',
      'Test auto-reverse with a real obstruction (not just a sensor wipe)',
      'Check bottom seal contact and weatherstripping',
    ],
  },
  {
    type: 'h2' as const,
    text: 'What we catch before winter',
  },
  {
    type: 'p' as const,
    text: 'Flat-spotted rollers carving track in Wyldewood, pulleys ready to shred cables on extension-spring Fairwinds doors, and openers set too aggressive for summer that reverse constantly once ice forms on the slab. We give honest notice — “spring has months left” vs “replace before January” — so you choose timing, not discover it at 6 AM on a school day.',
  },
  {
    type: 'callout' as const,
    variant: 'tip' as const,
    title: 'Book early',
    text: 'Fall slots fill after the first frost forecast. Book <a href="/services/maintenance/">maintenance</a> before Thanksgiving if you want a choice of visit windows.',
  },
  {
    type: 'h2' as const,
    text: 'DIY vs professional tune-up',
  },
  {
    type: 'p' as const,
    text: 'Homeowners can wipe sensors and clear debris from tracks. Do not wind springs, adjust cables, or clamp bent sections and cycle the opener — those cause injuries and bigger bills. Wrong lube (WD-40 on hinges, grease in the track) often makes January worse.',
  },
];

export const fallGarageDoorTuneUp: BlogPost = {
  slug: 'fall-garage-door-tune-up-stittsville',
  title: 'Fall Garage Door Tune-Up Checklist for Stittsville (Before Winter Hits)',
  metaDescription:
    'Fall garage door maintenance in Stittsville — $150–$180 tune-up before winter. Balance, lube, springs, sensors. Why October beats a January emergency spring call.',
  excerpt:
    'Book maintenance in September or October before Ottawa Valley cold snaps — what a pro tune-up covers and what homeowners should not DIY.',
  category: 'Maintenance',
  publishedAt: '2026-04-20',
  updatedAt: '2026-05-18',
  readMinutes: estimateReadMinutes(blocks),
  relatedSlugs: ['spring-broke-stittsville-winter', 'garage-door-wont-close-cold-weather-stittsville'],
  relatedServiceSlugs: ['maintenance'],
  keyTakeaways: [
    'Fall tune-up $150–$180 — cheaper than emergency winter spring calls.',
    'We test balance, cables, springs, and auto-reverse before cold weather.',
    'Wrong DIY lube causes more winter bind — use cold-climate products on hinges/rollers only.',
    'Book before first hard frost for best scheduling.',
  ],
  blocks,
};
