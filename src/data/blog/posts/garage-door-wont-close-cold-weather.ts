import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'When a garage door will not close on a -20°C morning in Stittsville, the opener often flashes lights and reverses for no obvious reason. Before you assume the motor is dead, check three winter-specific causes we see daily on Hazeldean, Fernbank, and in unheated bays in Wyldewood: frozen bottom seal, misaligned or frosted photo-eyes, and a door that is mechanically too heavy for the opener because springs or cables are failing.',
  },
  {
    type: 'h2' as const,
    text: 'Step 1: Photo-eye sensors (safety sensors)',
  },
  {
    type: 'p' as const,
    text: 'Infrared sensors sit low on each side of the opening. Slush spray, road salt mist, and condensation frost the lenses after you clear snow off the apron. The opener thinks something is blocking the beam and reverses. Wipe both lenses with a dry cloth, confirm the small LED indicators are solid (not blinking), and make sure a shovel or garbage bin is not blocking the beam.',
  },
  {
    type: 'callout' as const,
    variant: 'tip' as const,
    title: 'Jackson Trails tip',
    text: 'Garages with the door facing the street on Bridlewood or Gatehouse often get more salt spray on sensors than rear-facing bays — wipe sensors after every plow pass.',
  },
  {
    type: 'h2' as const,
    text: 'Step 2: Ice at the bottom seal',
  },
  {
    type: 'p' as const,
    text: 'Rubber bottom seals freeze to the concrete slab overnight. The opener hits high force trying to close, then reverses. Do not repeatedly hammer the button — that strips opener gears. Gently break the ice bond (warm water only if you accept a brief re-freeze risk; many homeowners use a plastic scraper on the seal, not the panel face). If the seal is torn or the panel lip is bent, see our <a href="/services/panel-repair/">panel repair</a> page.',
  },
  {
    type: 'h2' as const,
    text: 'Step 3: Door balance and spring health',
  },
  {
    type: 'p' as const,
    text: 'Disconnect the opener (pull the red emergency release with the door closed if safe) and lift the door manually halfway. If it drifts down hard or feels like 200+ pounds, springs are weak or broken — the opener cannot close a heavy door reliably in cold weather. That is a <a href="/services/spring-repair/">spring repair</a> job, not an opener replacement.',
  },
  {
    type: 'h2' as const,
    text: 'When to call a technician',
  },
  {
    type: 'ul' as const,
    items: [
      'Flashing lights persist after cleaning sensors and clearing ice',
      'Door is crooked, one side higher, or cable is hanging',
      'You heard a bang in the garage recently (spring failure)',
      'Opener hums but door barely moves — possible gears or balance issue — <a href="/services/opener-repair/">opener repair</a>',
    ],
  },
  {
    type: 'p' as const,
    text: 'Opener repair in Stittsville typically runs $150–$300 when the rail and door are sound. We test balance before selling a new motor — see <a href="/blog/opener-flashing-lights-troubleshooting/">opener flashing lights troubleshooting</a> for more detail.',
  },
];

export const garageDoorWontCloseColdWeather: BlogPost = {
  slug: 'garage-door-wont-close-cold-weather-stittsville',
  title: 'Garage Door Won’t Close in Cold Weather? Stittsville Winter Checklist',
  metaDescription:
    'Door reverses or won’t close in Stittsville winter? Fix frosted sensors, frozen bottom seals, and balance issues — step-by-step before you call. Updated May 2026.',
  excerpt:
    'Flashing opener lights and a door that won’t seal in January usually trace to sensors, ice on the slab, or weak springs — not a dead motor. A practical checklist for Stittsville winters.',
  category: 'Winter & Climate',
  publishedAt: '2026-01-22',
  updatedAt: '2026-05-18',
  readMinutes: estimateReadMinutes(blocks),
  relatedSlugs: [
    'spring-broke-stittsville-winter',
    'opener-flashing-lights-troubleshooting',
    'garage-door-safety-sensors-winter-frost',
  ],
  relatedServiceSlugs: ['opener-repair', 'spring-repair'],
  keyTakeaways: [
    'Clean photo-eye lenses first — salt and frost are the top winter cause.',
    'Ice on the bottom seal causes force reversals; do not cycle the opener repeatedly.',
    'Heavy manual lift means springs — not a new opener.',
    'Typical opener repair $150–$300 when mechanics are sound.',
  ],
  blocks,
};
