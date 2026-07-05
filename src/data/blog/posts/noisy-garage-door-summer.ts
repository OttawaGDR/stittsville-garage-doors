import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'A garage door that used to whisper and now rattles every time you leave for Kanata Centrum is telling you something mechanical changed — not that the opener suddenly got weaker. In Stittsville summers, heat expansion, dried-out rollers, and hardware that loosened over winter vibration stack up. The good news: most loud-door calls we run in July and August are worn rollers or loose hinge bolts, not a door that needs replacing.',
  },
  {
    type: 'h2' as const,
    text: 'Sounds that point to specific problems',
  },
  {
    type: 'ul' as const,
    items: [
      '<strong>Grinding or scraping</strong> — steel rollers flat-spotted on track, or a bent vertical track section',
      '<strong>Popping or snapping on each panel</strong> — hinge pins dry or hinge bolts loose after cold–warm cycles',
      '<strong>Chain slap or rail chatter</strong> — opener chain too loose, or door so heavy the opener fights balance every cycle',
      '<strong>Rumbling when the door stops</strong> — nylon rollers cracked, or end bearings dry on torsion-spring headers',
      '<strong>Squeal only at the bottom</strong> — bottom bracket or flag bracket working loose; stop using the opener until checked',
    ],
  },
  {
    type: 'h2' as const,
    text: 'Why summer makes existing wear louder',
  },
  {
    type: 'p' as const,
    text: 'Aluminum tracks and steel hinges expand in a hot garage — especially on south-facing bays in Crossing Bridge Estates and Amberwood where afternoon sun hits the door before the AC catches up. A roller that barely cleared the track in April can bind in July. Vinyl bottom seals soften and drag. Openers set for winter force limits may cycle harder than they should once the door binds, which adds rail noise that sounds like a motor problem but starts at the rollers.',
  },
  {
    type: 'p' as const,
    text: 'Humidity after Ottawa thunderstorms also swells wooden jambs on older Fairwinds and Wyldewood splits. The door still opens, but panels flex and hinge gaps change — so a quiet door in May becomes a creaking one by mid-summer without any single broken part.',
  },
  {
    type: 'callout' as const,
    variant: 'tip' as const,
    title: 'Quick check before you call',
    text: 'Pull the emergency release with the door closed and lift manually to waist height. A balanced door stays put; one that slams down or shoots up has a spring or cable issue — noise is a symptom, not the root cause. See our <a href="/services/maintenance/">maintenance service</a> page for what a tune-up covers.',
  },
  {
    type: 'h2' as const,
    text: 'What homeowners can safely do',
  },
  {
    type: 'ol' as const,
    items: [
      'Tighten visible hinge bolts with a socket wrench — do not touch red-painted torsion hardware above the header',
      'Clear track of pebbles, hockey tape, and cobwebs; never grease inside the track itself',
      'Apply silicone or white lithium spray to hinge barrels and roller stems only — not the track walls',
      'Watch each roller as the door moves — wobble or flat spots mean replacement, not more lube',
      'If a bracket looks bent or a cable is frayed, stop and book a pro — those are not DIY fixes',
    ],
  },
  {
    type: 'h2' as const,
    text: 'When noise means track or opener work',
  },
  {
    type: 'p' as const,
    text: 'Repeated grinding after new rollers usually means the vertical track is bent or the horizontal radius is out of plumb — common after a minor bump with a trailer hitch or bike rack. We see that on double-car doors in Jackson Trails where the center post gets clipped. Opener chain noise without door bind may need rail tightening or a worn trolley bushing; if the motor hums but the door barely moves, balance the door before blaming the opener — see <a href="/blog/opener-flashing-lights-troubleshooting/">opener flashing lights troubleshooting</a>.',
  },
  {
    type: 'h2' as const,
    text: 'Neighbourhood patterns we see in Stittsville',
  },
  {
    type: 'p' as const,
    text: 'Mattamy-era homes with original short nylon rollers often get loud around year eight — Bryanston Gate and Jackson Trails in the same subdivision batch fail in clusters. Older raised-panel doors in Wyldewood more often need hinge kits and end bearing lube. Townhomes on narrow lots tend to collect road grit on the bottom rollers; a annual wipe-down in June prevents the September grind. Booking a fall tune-up after fixing summer noise catches springs before the first hard frost — our <a href="/blog/fall-garage-door-tune-up-stittsville/">fall tune-up checklist</a> explains what that visit includes.',
  },
  {
    type: 'callout' as const,
    variant: 'info' as const,
    text: 'Still not sure what you are hearing? Call <a href="tel:6137776401">(613) 777-6401</a> and describe the sound — grind vs pop vs chain slap — and whether the door lifts smoothly by hand. We can often narrow it to rollers, hinges, or track before we drive out.',
  },
];

export const noisyGarageDoorSummer: BlogPost = {
  slug: 'noisy-garage-door-stittsville-summer',
  title: 'Why Your Garage Door Got Loud: Rollers, Hinges, and Summer Heat in Stittsville',
  metaDescription:
    'Loud garage door in Stittsville summer? Grinding, popping, and chain slap — what each sound means, safe DIY checks, and when track or opener repair is needed.',
  excerpt:
    'Heat, humidity, and worn rollers turn a quiet door into a rattle by July. How to match the sound to the fix — and what not to touch yourself.',
  category: 'Maintenance',
  publishedAt: '2026-07-05',
  updatedAt: '2026-07-05',
  readMinutes: estimateReadMinutes(blocks),
  featured: true,
  relatedSlugs: [
    'fall-garage-door-tune-up-stittsville',
    'opener-flashing-lights-troubleshooting',
    'garage-door-safety-sensors-winter-frost',
  ],
  relatedServiceSlugs: ['maintenance', 'track-repair'],
  keyTakeaways: [
    'Grinding usually means worn rollers or bent track — not a dead opener.',
    'Summer heat expands metal and makes existing wear louder.',
    'Lube hinges and roller stems only — never grease inside the track.',
    'Manual lift test: a balanced door stays at mid-height when released.',
  ],
  blocks,
};
