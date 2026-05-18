import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'LiftMaster, Chamberlain, and Genie openers flash their built-in LED in patterns when something fails safety logic — not always because the motor is dead. In Stittsville we see more “flashing lights, door won’t move” calls from sensor issues, force limits, and unbalanced doors than from failed capacitors. Read the pattern, check mechanics first, then decide if you need <a href="/services/opener-repair/">opener repair</a> ($150–$300 typical) or <a href="/services/spring-repair/">spring work</a>.',
  },
  {
    type: 'h2' as const,
    text: 'Most common causes (in order)',
  },
  {
    type: 'ol' as const,
    items: [
      '<strong>Safety sensors misaligned or dirty</strong> — wipe lenses, check LED solid on both units',
      '<strong>Door too heavy</strong> — weak or broken spring; disconnect opener and test manual lift',
      '<strong>Force limit tripped</strong> — binding track, frozen seal, or worn rollers',
      '<strong>Wall button / lock engaged</strong> — vacation lock or disabled wall control',
      '<strong>Worn gear or capacitor</strong> — motor hums, clicks, no travel',
    ],
  },
  {
    type: 'h2' as const,
    text: 'MyQ / Wi-Fi openers after router changes',
  },
  {
    type: 'p' as const,
    text: 'Jackson Trails and Bryanston Gate homes often use belt-drive MyQ units. After a new router or ISP swap, the app shows offline while the wall button still works — reprogramming Wi-Fi fixes it without new hardware. If the door will not move from any control, the problem is mechanical or safety-related, not the app.',
  },
  {
    type: 'h2' as const,
    text: 'Repair or replace the opener?',
  },
  {
    type: 'p' as const,
    text: 'Repair when the rail is straight, photo-eyes are modern, and parts exist. Replace when the unit lacks safety sensors, the rail is bent, or you want belt-drive quiet for a bedroom above the garage ($650–$950 installed). Installing a stronger opener on a door that will not lift by hand burns out the new unit — balance first.',
  },
  {
    type: 'callout' as const,
    variant: 'warning' as const,
    text: 'Never increase force limits to “make it close” on a binding door — that bypasses safety and risks injury or property damage.',
  },
];

export const openerFlashingLights: BlogPost = {
  slug: 'opener-flashing-lights-troubleshooting',
  title: 'Garage Door Opener Flashing Lights? Troubleshooting for Stittsville Homes',
  metaDescription:
    'LiftMaster or Chamberlain opener flashing? Stittsville troubleshooting — sensors, balance, force limits, when opener repair ($150–$300) beats replacement.',
  excerpt:
    'Flashing LED on your opener usually means safety logic — not a dead motor. Check sensors, balance, and ice before you buy a new unit.',
  category: 'Repair Guides',
  publishedAt: '2026-02-18',
  updatedAt: '2026-05-18',
  readMinutes: estimateReadMinutes(blocks),
  relatedSlugs: [
    'garage-door-wont-close-cold-weather-stittsville',
    'garage-door-safety-sensors-winter-frost',
  ],
  relatedServiceSlugs: ['opener-repair', 'opener-installation'],
  keyTakeaways: [
    'Clean and align photo-eyes before replacing the opener.',
    'Test door balance with opener disconnected.',
    'Typical opener repair $150–$300 when rail and door are sound.',
    'Do not crank force limits on a binding door.',
  ],
  blocks,
};
