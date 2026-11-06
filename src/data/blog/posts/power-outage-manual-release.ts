import type { BlogPost } from '../types';
import { estimateReadMinutes } from '../utils';

const blocks = [
  {
    type: 'p' as const,
    text: 'When Hydro Ottawa drops power across Stittsville — ice on lines near the 417, a windstorm through Fairwinds, or a planned outage on a Jackson Trails street — the garage door opener goes dark with everything else. The car is still inside. The wall button does nothing. The red emergency-release cord is the way out, but only if the door is balanced and nothing is jammed. Pulling it on a broken spring, or yanking a half-open door that is hanging on one cable, is how a power outage turns into a track and cable job.',
  },
  {
    type: 'callout' as const,
    variant: 'warning' as const,
    title: 'Do not force the door',
    text: 'If the door is crooked, a cable is off the drum, or the door feels twice as heavy as usual, leave it and call <a href="tel:6137776401">(613) 777-6401</a>. Manual release does not fix a failed spring. See <a href="/blog/garage-door-off-track-stittsville/">garage door off track after a bump</a> if a roller is out of the rail.',
  },
  {
    type: 'h2' as const,
    text: 'What still works when the power is out',
  },
  {
    type: 'ul' as const,
    items: [
      'The door itself — springs, cables, and rollers do not need electricity',
      'The emergency release on the opener trolley (usually a red cord)',
      'A battery-backup opener, if yours has one and the battery is still charged',
      'The keypad and remotes — they do nothing until power or battery backup returns',
    ],
  },
  {
    type: 'p' as const,
    text: 'Belt-drive MyQ units common in Bryanston Gate and Jackson Trails often include a battery. If the app shows the door and the backup light is on, try the wall control once before you pull the release. A dead backup battery behaves exactly like a full outage: silence, no travel, no lights on the motor head.',
  },
  {
    type: 'h2' as const,
    text: 'How to open the door by hand',
  },
  {
    type: 'ol' as const,
    items: [
      'Make sure nobody is under the door. Tell kids and pets to stand clear of the opening.',
      'If the door is partly open, do not walk under it. Support it or leave it until you can lower it fully by hand after release.',
      'Pull the red emergency-release cord straight down until you hear or feel the trolley disconnect from the rail. One firm pull — not a yank that snaps the cord.',
      'Lift the door from the bottom rail with both hands, or have a second person help on a double-car door. It should move smoothly and stay where you leave it around waist height.',
      'Once the car is out, close the door fully by hand so the opening is secure while power is off.',
    ],
  },
  {
    type: 'h3' as const,
    text: 'The balance test',
  },
  {
    type: 'p' as const,
    text: 'After you disconnect the opener, lift the door to about halfway and let go carefully, keeping your hands ready. A healthy door stays put. A door that slams to the floor or shoots upward has a spring or cable problem — reconnect nothing and do not keep cycling it. That is a <a href="/services/spring-repair/">spring repair</a> or <a href="/services/cable-repair/">cable repair</a> visit, not a power problem.',
  },
  {
    type: 'h2' as const,
    text: 'How to reconnect the opener when power returns',
  },
  {
    type: 'ol' as const,
    items: [
      'Close the door fully by hand so the trolley and the door arm line up',
      'Pull the release cord toward the door (or toward the opener, depending on the model) until the trolley clicks back onto the rail',
      'On many LiftMaster and Chamberlain units you can also run the opener once with the door closed — the trolley picks up the arm on the next cycle',
      'Test open and close from the wall button only. Remotes and the app come after the door path is smooth',
      'If the opener hums, flashes, or reverses immediately, stop. Photo-eyes, force limits, or a door that shifted during the outage are the usual causes — see <a href="/blog/opener-flashing-lights-troubleshooting/">opener flashing lights</a>',
    ],
  },
  {
    type: 'callout' as const,
    variant: 'tip' as const,
    title: 'Cord hard to reach',
    text: 'On tall RV bays in Crossing Bridge Estates the release hangs high. A broom handle through the cord handle works. Do not stand on a ladder under a moving door. If the cord is missing, the door stays locked to the opener until power or a technician disconnects the arm.',
  },
  {
    type: 'h2' as const,
    text: 'When manual release is the wrong move',
  },
  {
    type: 'ul' as const,
    items: [
      'Door is off one or both tracks',
      'A lift cable is slack, frayed, or off the drum',
      'You heard a bang before the outage — treat it as a broken spring until proven otherwise',
      'The door is frozen to the slab after an ice storm; thaw the seal instead of forcing the opener when power returns',
      'The trolley is already disconnected and the door will not stay up — springs are not holding the weight',
    ],
  },
  {
    type: 'h2' as const,
    text: 'After the lights come back on',
  },
  {
    type: 'p' as const,
    text: 'Power returning does not reset a door that was left crooked or a trolley that was pulled while the door was halfway up. Run one slow test from the wall control. Wipe the safety sensors if the opener flashes — outages and wet driveways often leave salt film on the lenses, which is covered in <a href="/blog/garage-door-safety-sensors-winter-frost/">winter sensor frost</a>. If the motor runs and the door does not move, the release may still be disengaged.',
  },
  {
    type: 'p' as const,
    text: 'Homes that lose power every winter benefit from a charged battery backup and a door that is already balanced. A fall <a href="/services/maintenance/">maintenance visit</a> is the right time to confirm the release cord is present, the door holds at mid-height, and the backup battery actually opens the door once. Our <a href="/blog/fall-garage-door-tune-up-stittsville/">fall tune-up checklist</a> is the list we use before the first hard outage of the season.',
  },
  {
    type: 'callout' as const,
    variant: 'info' as const,
    text: 'Stuck with the car inside and the door will not lift by hand? Call <a href="tel:6137776401">(613) 777-6401</a>. Tell us whether the power is still out, whether you already pulled the red cord, and whether the door feels heavy or crooked. We will tell you if it is safe to wait or if we should roll out.',
  },
];

export const powerOutageManualRelease: BlogPost = {
  slug: 'garage-door-power-outage-manual-release-stittsville',
  title: 'Power Outage: How to Open Your Garage Door by Hand in Stittsville',
  metaDescription:
    'Hydro outage in Stittsville and the garage door will not move? How to use the emergency release safely, when not to pull it, and how to reconnect the opener when power returns.',
  excerpt:
    'When the lights go out, the opener is dead — the door is not. How to release it by hand without turning a power cut into a spring or track repair.',
  category: 'Safety',
  publishedAt: '2026-11-06',
  updatedAt: '2026-11-06',
  readMinutes: estimateReadMinutes(blocks),
  featured: true,
  relatedSlugs: [
    'garage-door-off-track-stittsville',
    'opener-flashing-lights-troubleshooting',
    'garage-door-safety-sensors-winter-frost',
  ],
  relatedServiceSlugs: ['opener-repair', 'spring-repair'],
  keyTakeaways: [
    'Pull the red emergency-release cord only if the door is square and lifts like it normally does.',
    'A door that slams or flies up after release has a spring or cable problem — stop.',
    'Reconnect the trolley with the door fully closed before you test the opener.',
    'Battery-backup openers still fail if the battery was never tested.',
  ],
  blocks,
};
