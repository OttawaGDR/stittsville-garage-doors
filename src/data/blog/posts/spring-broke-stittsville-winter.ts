import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'A garage door spring that snaps in a Stittsville winter is one of the loudest, most stressful failures a homeowner hears — often described as a gunshot or shelf collapsing in the garage. After Ottawa Valley cold snaps, we see waves of spring calls from Jackson Trails, Fairwinds, Amberwood, and Wyldewood in the same week. The spring did not “randomly” break: fatigue, cold-brittle steel, and a door that was already out of balance usually explain it.',
  },
  {
    type: 'callout' as const,
    variant: 'warning' as const,
    title: 'Safety first',
    text: 'Never try to wind, cut, or remove a torsion spring yourself. Stored energy can cause serious injury. If both springs are broken or the door is crooked on one cable, stop using the opener and book a professional <a href="/services/spring-repair/">spring repair</a> visit.',
  },
  {
    type: 'h2' as const,
    text: 'Why springs fail after cold snaps in Stittsville',
  },
  {
    type: 'p' as const,
    text: 'Torsion springs above the header and extension springs along the horizontal tracks are high-carbon steel under enormous tension. At -20°C to -30°C, steel is more brittle. A coil that was already near end-of-cycle life — often 7–10 years on original Fairwinds and Amberwood stock — can fail on the first hard pull after ice bound the bottom seal or the opener fought an unbalanced door.',
  },
  {
    type: 'p' as const,
    text: 'Mattamy-era doubles in Jackson Trails and Bryanston Gate usually run torsion springs; older splits may still have extension springs with pulleys. Both types fail differently, but the symptom is similar: the door feels twice as heavy, opens only a foot, or hangs crooked. Continuing to run the opener strips gears and can unspool cables — turning a spring job into spring plus cable plus track work.',
  },
  {
    type: 'h2' as const,
    text: 'What it costs in Stittsville (2026 typical ranges)',
  },
  {
    type: 'p' as const,
    text: 'As of 2026, a standard single torsion spring replacement on a double-car door in Stittsville typically lands in the <strong>$250–$350</strong> range for parts, labour, and a balance check. On most double doors we recommend replacing <strong>both</strong> torsion springs when one fails — matched pairs share load; leaving a 10-year-old partner spring often means a callback three weeks later. Both springs on a double often run <strong>$380–$480</strong>.',
  },
  {
    type: 'p' as const,
    text: 'We provide a <strong>free on-site estimate</strong> and written quote before work — no dispatch fee and no charge that only rolls into the job if you approve same-day repair. Final price depends on wire size, door weight, and whether cables or drums were damaged when the spring let go. See our full <a href="/pricing/">pricing page</a> and <a href="/blog/garage-door-repair-cost-stittsville-2026/">2026 Stittsville cost guide</a> for other jobs.',
  },
  {
    type: 'h2' as const,
    text: 'Can you open the door with a broken spring?',
  },
  {
    type: 'ul' as const,
    items: [
      'If one torsion spring broke on a two-spring door, the door may lift partway but is unsafe to operate with the opener — uneven load bends tracks and burns the motor.',
      'If both springs are broken, most adults cannot lift a double-car door safely without proper bars and training.',
      'Trapped-car calls get priority when trucks are already west on Hazeldean — call with your cross street.',
    ],
  },
  {
    type: 'h2' as const,
    text: 'Prevention before the next January',
  },
  {
    type: 'p' as const,
    text: 'A <a href="/services/maintenance/">fall tune-up</a> ($150–$180) checks spring cycles remaining, cable wear, roller condition, and opener force settings before the worst weeks. Wrong lubricant in October (heavy grease in the track, WD-40 on hinges) makes January worse. We use cold-weather products on hinges and rollers only — not a slippery rail that lets rollers skid.',
  },
];

export const springBrokeStittsvilleWinter: BlogPost = {
  slug: 'spring-broke-stittsville-winter',
  title: 'Garage Door Spring Broke in Winter? What Stittsville Homeowners Should Do Next',
  metaDescription:
    'Loud bang in the garage after a cold snap? Why springs fail in Stittsville winters, typical $250–$350 repair costs, safety steps, and when to call — updated 2026.',
  excerpt:
    'After -25°C nights in Stittsville, torsion and extension springs snap in waves. Here is why it happens, what repair costs in 2026, and what not to do before a tech arrives.',
  category: 'Winter & Climate',
  publishedAt: '2026-01-15',
  updatedAt: '2026-05-18',
  readMinutes: estimateReadMinutes(blocks),
  featured: true,
  relatedSlugs: [
    'garage-door-wont-close-cold-weather-stittsville',
    'garage-door-repair-cost-stittsville-2026',
    'fall-garage-door-tune-up-stittsville',
  ],
  relatedServiceSlugs: ['spring-repair', 'maintenance'],
  keyTakeaways: [
    'A loud bang after cold weather usually means a broken spring — stop cycling the opener.',
    'Typical torsion spring repair in Stittsville: $250–$350; both springs on a double often $380–$480.',
    'Free on-site written quote before repair — no $89-style dispatch fee.',
    'Fall maintenance catches springs near end of life before January emergencies.',
  ],
  blocks,
};
