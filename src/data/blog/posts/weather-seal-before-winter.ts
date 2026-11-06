import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'By mid-October in Stittsville, the gap under your garage door is doing more than let in a draft — it is the path mice use toward stored tires, the reason slush tracks across the slab after the first plow on Abbott Street, and the spot where cold air meets warm concrete and creates the ice ridge that makes your door “stick” closed in January. The bottom weather seal and side jamb strips are cheap to replace compared with a callback for a door that will not close on a -20°C school morning. Checking them now beats discovering the problem when the seal is frozen to the driveway.',
  },
  {
    type: 'h2' as const,
    text: 'Signs your seal is failing',
  },
  {
    type: 'ul' as const,
    items: [
      'Daylight visible along the bottom when the door is down — especially the corners',
      'Rubber looks cracked, flat, or missing chunks (rodents chew U-shaped seals in Fairwinds and Wyldewood)',
      'Water or snow melt pools inside after rain — not just near the door, but under shelving',
      'Door sits slightly off the floor on one side — seal compensates until it cannot',
      'Musty smell or frost on stored items near the slab in unheated garages',
      'Opener works harder in cold weather because the seal drags instead of flexing',
    ],
  },
  {
    type: 'h2' as const,
    text: 'Bottom seal vs side jamb weatherstripping',
  },
  {
    type: 'p' as const,
    text: 'The bottom astragal (the rubber that hits the floor) takes the most abuse — salt, grit, and repeated compression. Side and top vinyl or brush strips seal the gap between the door sections and the frame. On Mattamy-era doubles in Jackson Trails, we often see a good bottom seal but dried-out jamb strips that whistle in a west wind off the 417. Both matter for heat loss in attached garages and for keeping the door path clean so photo-eyes and the bottom bracket are not coated in road grime.',
  },
  {
    type: 'callout' as const,
    variant: 'tip' as const,
    title: 'Quick DIY check',
    text: 'Close the door on a sunny day and look from inside — no light at the bottom except maybe a hairline at the centre on older doors. Run a finger along the jamb strips; they should contact the door without gaps. If the door already binds in cold weather, read <a href="/blog/garage-door-wont-close-cold-weather-stittsville/">garage door won’t close in cold weather</a> — seal and ice often stack with balance issues.',
  },
  {
    type: 'h2' as const,
    text: 'What homeowners can replace safely',
  },
  {
    type: 'ul' as const,
    items: [
      'Bottom U-shaped or T-shaped seal kits from hardware stores — measure door width and track type first',
      'Slide-in vinyl jamb strips if the retainer is intact and not bent',
      'Cleaning the floor channel and bottom retainer before installing new rubber',
    ],
  },
  {
    type: 'p' as const,
    text: 'Do not adjust spring tension, cables, or the bottom bracket to “make the door seal better” — a door that only closes when you slam it is a balance or track problem, not a seal problem. Wrong bracket torque causes cable slip and is a common DIY injury call in Amberwood and Crossing Bridge Estates.',
  },
  {
    type: 'h2' as const,
    text: 'When to book professional weather seal work',
  },
  {
    type: 'p' as const,
    text: 'Book <a href="/services/weather-seal/">weather seal replacement</a> when the retainer is rusted through, the door is uneven on the floor, or you need a full perimeter kit on an oversized or custom door. We measure on site, match profile to your door brand, and adjust the door stop so the new seal compresses evenly — one side too tight will twist the bottom panel over a Ottawa winter.',
  },
  {
    type: 'p' as const,
    text: 'Seal work pairs well with a fall <a href="/services/maintenance/">maintenance tune-up</a> — our <a href="/blog/fall-garage-door-tune-up-stittsville/">fall checklist</a> covers balance, cables, and opener limits that affect how hard the door hits the seal every cycle.',
  },
  {
    type: 'h2' as const,
    text: 'Stittsville-specific winter habits',
  },
  {
    type: 'ul' as const,
    items: [
      'Keep the first foot inside the threshold clear of leaves before they freeze — common on tree-lined Bryanston Gate courts',
      'Knock ice off the bottom seal after plowing; do not yank the door open with the opener if it is glued to ice',
      'Replace seals before November if mice appeared last year — they follow the same gaps every fall',
      'Attached garages with bedrooms above: a tight seal reduces cold air rising through the ceiling assembly',
    ],
  },
  {
    type: 'callout' as const,
    variant: 'info' as const,
    text: 'Not sure if you need new rubber or a balance adjustment? Call <a href="tel:6137776401">(613) 777-6401</a> or send a photo of the bottom gap with the door closed — we can often tell from a clear shot of the seal and floor contact.',
  },
];

export const weatherSealBeforeWinter: BlogPost = {
  slug: 'garage-door-weather-seal-stittsville-fall',
  title: 'Garage Door Weather Seal Check Before Stittsville Winter',
  metaDescription:
    'Check garage door weather seals in Stittsville before winter — daylight under the door, mice, ice bind, and when to replace bottom or jamb sealing vs DIY kits.',
  excerpt:
    'October is the right time to fix gaps under the door — before ice, mice, and slush make a worn seal an emergency in Jackson Trails or Fairwinds.',
  category: 'Winter & Climate',
  publishedAt: '2026-10-17',
  updatedAt: '2026-10-17',
  readMinutes: estimateReadMinutes(blocks),
  relatedSlugs: [
    'fall-garage-door-tune-up-stittsville',
    'garage-door-wont-close-cold-weather-stittsville',
    'garage-door-safety-sensors-winter-frost',
  ],
  relatedServiceSlugs: ['weather-seal', 'maintenance'],
  keyTakeaways: [
    'Daylight under a closed door means the bottom seal is gone or compressed flat.',
    'Side jamb strips matter as much as the bottom rubber on windy lots.',
    'Never crank springs or brackets to force a seal — fix balance and track first.',
    'Replace seals in fall before ice welds the door to the driveway.',
  ],
  blocks,
};
