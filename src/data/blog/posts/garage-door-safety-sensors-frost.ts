import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'Photo-eye safety sensors have been mandatory on garage door openers for decades — they stop the door if the infrared beam is broken. In Stittsville winters, that beam fails more often from frost, salt film, and bumped brackets than from dead electronics. Understanding how they work saves you a service call when a cloth and two minutes of alignment fixes the problem.',
  },
  {
    type: 'h2' as const,
    text: 'How to tell if sensors are the problem',
  },
  {
    type: 'ul' as const,
    items: [
      'Opener flashes lights and reverses when closing but may open fine',
      'One sensor LED blinking or off while the other is solid',
      'Door worked yesterday, failed after plowing or washing the driveway',
      'Garage faces the street — more salt spray on lenses (common on Hazeldean-facing bays)',
    ],
  },
  {
    type: 'h2' as const,
    text: 'Safe DIY steps',
  },
  {
    type: 'ol' as const,
    items: [
      'Unplug the opener or use wall control — keep clear of the door path',
      'Wipe both lenses with a dry microfiber cloth (not abrasive pad)',
      'Check brackets are tight and sensors point at each other — same height',
      'Remove obstructions: shovel, recycling bin, bike tire in the beam',
      'Plug in and test — LEDs should be solid on both units',
    ],
  },
  {
    type: 'h2' as const,
    text: 'When sensors need professional repair',
  },
  {
    type: 'p' as const,
    text: 'Cracked housings, chewed wires, or sensors that still blink after alignment may need new units or wiring — typically $150–$200 for sensor repair in our pricing table. If the door still will not close after sensors are clean, test balance and ice at the seal — see <a href="/blog/garage-door-wont-close-cold-weather-stittsville/">garage door won’t close in cold weather</a>.',
  },
];

export const garageDoorSafetySensorsFrost: BlogPost = {
  slug: 'garage-door-safety-sensors-winter-frost',
  title: 'Garage Door Safety Sensors & Winter Frost: Stittsville Homeowner Guide',
  metaDescription:
    'Frosted or misaligned garage door safety sensors in Stittsville winter? How photo-eyes work, DIY cleaning steps, and when sensor repair ($150–$200) is needed.',
  excerpt:
    'Blinking sensor LEDs and a door that reverses in winter usually mean frost or salt on the lenses — not a dead opener. How to fix it safely.',
  category: 'Safety',
  publishedAt: '2026-01-08',
  updatedAt: '2026-05-18',
  readMinutes: estimateReadMinutes(blocks),
  relatedSlugs: [
    'garage-door-wont-close-cold-weather-stittsville',
    'opener-flashing-lights-troubleshooting',
  ],
  relatedServiceSlugs: ['opener-repair'],
  keyTakeaways: [
    'Wipe both sensor lenses after plowing and cold snaps.',
    'Solid LEDs on both units mean aligned beam.',
    'Sensor repair typically $150–$200 if wiring or housing is damaged.',
    'If sensors are clean, check ice on seal and door balance next.',
  ],
  blocks,
};
