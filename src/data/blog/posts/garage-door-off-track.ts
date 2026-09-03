import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'A garage door that jumps the track after you clip it with a trailer hitch, bike rack, or the corner of a recycling bin is one of the most common “I was backing out and heard a crunch” calls we get in Stittsville — especially on tight double-car bays in Jackson Trails and Bryanston Gate where the centre post leaves little margin. Sometimes the fix is a careful manual re-seat. Sometimes the door is hanging on one cable and forcing it will make things worse. Knowing which situation you are in saves an hour of frustration and avoids a bigger bill.',
  },
  {
    type: 'callout' as const,
    variant: 'warning' as const,
    title: 'Stop using the opener',
    text: 'If the door is crooked, jammed, or you see a cable off the drum, do not keep hitting the wall button. The opener will bend track, strip gears, or unspool more cable. Disconnect the opener and leave the door where it is until you know it is safe to move by hand — or call <a href="tel:6137776401">(613) 777-6401</a> for a <a href="/services/track-repair/">track repair</a> visit.',
  },
  {
    type: 'h2' as const,
    text: 'How to tell the door is off track',
  },
  {
    type: 'ul' as const,
    items: [
      'Door stops partway and one side sits higher than the other',
      'Grinding or scraping on one vertical track only',
      'Roller visible outside the track channel — often the top roller on the bent side',
      'Gap between the door edge and the weather seal on one side when “closed”',
      'Opener runs but the door barely moves, then reverses or flashes lights',
    ],
  },
  {
    type: 'h2' as const,
    text: 'When a careful DIY re-seat is reasonable',
  },
  {
    type: 'p' as const,
    text: 'You can sometimes re-seat a door yourself when a single roller popped out of the horizontal or vertical track, the door is still roughly square in the opening, both lift cables are still on the drums, and the track is not visibly bent. This happens after a light bump — a roller skipped the rail but nothing structural failed. If you are unsure, a photo from inside the garage (track, roller, cable at the drum) and a call to us is faster than guessing.',
  },
  {
    type: 'h3' as const,
    text: 'Safe re-seat steps (only if the door is square and cables look seated)',
  },
  {
    type: 'ol' as const,
    items: [
      'Close the garage and tell everyone to stay clear of the door path',
      'Pull the emergency release cord with the door fully closed so the trolley disengages',
      'Lift the door manually by the bottom rail — not by a single panel edge — until the popped roller aligns with the track opening',
      'Use a flat pry bar or pliers with a cloth to guide the roller stem back into the track — never put fingers in the path if the door is heavy',
      'Cycle the door by hand through one full open and close; it should move smoothly with no new grinding',
      'Re-engage the opener and test once; if it binds again, stop and book professional track work',
    ],
  },
  {
    type: 'callout' as const,
    variant: 'tip' as const,
    text: 'Two people make this safer on double-car doors. A door that feels twice as heavy as usual usually has a spring problem — re-seating the roller will not fix that.',
  },
  {
    type: 'h2' as const,
    text: 'When to stop and call a technician',
  },
  {
    type: 'ul' as const,
    items: [
      '<strong>Cable off the drum or hanging loose</strong> — spring tension is involved; do not move the door',
      '<strong>Door hung crooked on one side</strong> — often cable + roller + track together',
      '<strong>Vertical track bent or pulled away from the wall</strong> — needs straightening and new lag screws, not forcing',
      '<strong>Horizontal track kinked</strong> — common after a hard hit; section replacement or professional straightening required',
      '<strong>Bottom bracket or flag bracket bent</strong> — the lift point failed; continuing damages the panel',
      '<strong>Spring broke during or after the bump</strong> — see <a href="/blog/spring-broke-stittsville-winter/">spring failure guide</a>; track work comes after spring safety',
      '<strong>Door came off both sides</strong> — never walk under it; we secure and re-hang with proper tools',
    ],
  },
  {
    type: 'h2' as const,
    text: 'What we do on a Stittsville track repair visit',
  },
  {
    type: 'p' as const,
    text: 'Track calls in Wyldewood and Fairwinds often combine a bent lower vertical, one replaced roller, and a limit adjustment because the door path changed by half an inch. We secure the opening first, inspect cables and springs, straighten or replace track sections as needed, replace damaged rollers, then balance and set opener limits so the door does not repeat the bind on the next cycle. You get a written quote on site before work — same standard as every other service visit.',
  },
  {
    type: 'p' as const,
    text: 'If the bump also dented a panel, we assess whether <a href="/services/panel-repair/">in-place panel repair</a> is realistic or whether the door has other fatigue. We do not install replacement sections; deep structural damage may point toward a new door conversation instead of stacking track fixes on tired steel.',
  },
  {
    type: 'h2' as const,
    text: 'Common causes in Stittsville driveways',
  },
  {
    type: 'ul' as const,
    items: [
      'Trailer hitch or bike rack on the back of an SUV — especially backing out toward Fernbank or Abbott',
      'Snowbank or curb under the door after plowing — door closes on ice and rollers bind on the next open',
      'Kids’ hockey net or bike stored too close to the centre post on a double bay',
      'Worn nylon rollers that were ready to jump — the bump was the last straw, not the only problem',
      'Opener force set too high — masks a binding track until something gives',
    ],
  },
  {
    type: 'h2' as const,
    text: 'Prevent the next jump',
  },
  {
    type: 'p' as const,
    text: 'After a successful re-seat or repair, check that photo-eyes are aligned, the door balances at mid-height when released manually, and nothing blocks the centre of the opening. A fall <a href="/blog/fall-garage-door-tune-up-stittsville/">tune-up</a> catches flat-spotted rollers before they skip track on the first hard frost. If the opener struggled before the bump, read <a href="/blog/opener-flashing-lights-troubleshooting/">opener flashing lights troubleshooting</a> — force limits and balance are often related.',
  },
  {
    type: 'callout' as const,
    variant: 'info' as const,
    text: 'Send a photo of the track and roller from inside the garage if you are not sure whether it is DIY-safe. Call <a href="tel:6137776401">(613) 777-6401</a> and describe whether the door is crooked, whether both cables look seated, and what you hit — we will tell you if we need to roll out or if a careful re-seat is reasonable.',
  },
];

export const garageDoorOffTrack: BlogPost = {
  slug: 'garage-door-off-track-stittsville',
  title: 'Garage Door Off Track After a Bump: When to Re-Seat It vs When to Stop',
  metaDescription:
    'Garage door jumped the track in Stittsville? When a careful DIY re-seat is safe, when to stop using the opener, and what professional track repair covers.',
  excerpt:
    'Backed into the track or clipped a roller? How to tell if you can re-seat the door safely — and when a cable, bent track, or crooked hang means stop and call.',
  category: 'Repair Guides',
  publishedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  readMinutes: estimateReadMinutes(blocks),
  featured: true,
  relatedSlugs: [
    'noisy-garage-door-stittsville-summer',
    'opener-flashing-lights-troubleshooting',
    'spring-broke-stittsville-winter',
  ],
  relatedServiceSlugs: ['track-repair', 'cable-repair'],
  keyTakeaways: [
    'Stop using the opener if the door is crooked or a cable looks off the drum.',
    'DIY re-seat only when one roller popped out, the door is square, and cables are seated.',
    'Bent track, loose brackets, or both sides off track need professional work.',
    'Worn rollers often cause jumps — fix the track and replace the bad rollers together.',
  ],
  blocks,
};
