export type Neighbourhood = {
  slug: string;
  name: string;
  yearBuilt: string;
  housingStock: string;
  topServices: string[];
  landmarks: string[];
  streets: string[];
  summary: string;
  commonIssues: string;
  recentJobs: { title: string; body: string }[];
};

export const neighbourhoods: Neighbourhood[] = [
  {
    slug: 'jackson-trails',
    name: 'Jackson Trails',
    yearBuilt: '2005–present',
    housingStock: 'Mattamy/Tartan attached homes, mostly double-car garages',
    topServices: ['opener-repair', 'spring-repair', 'maintenance'],
    landmarks: ['Jackson Trails Park', 'Bridlewood Drive', 'Abbeydale Circle'],
    streets: ['Bridlewood Drive', 'Trail Side Drive', 'Jackson Trails Boulevard'],
    summary:
      'Jackson Trails sits on the west side of Stittsville with newer Mattamy and Tartan builds — most homes have double-car attached garages and belt-drive openers that see daily use commuting down Hazeldean Road.',
    commonIssues:
      'Cold snaps after a January thaw are brutal on torsion springs in Jackson Trails garages — we see a spike every year along Bridlewood Drive. Belt-drive openers from the late 2000s builds also fail when the travel limits drift after temperature swings. Sensor misalignment after snowbanks build up near the apron is another repeat call near Jackson Trails Park.',
    recentJobs: [
      {
        title: 'Torsion spring replacement — Bridlewood Drive',
        body: 'Homeowner heard a loud bang leaving for work on Hazeldean. We replaced both torsion springs, set balance, and tested auto-reverse — done in under 90 minutes before the school run past Sacred Heart Catholic High School.',
      },
      {
        title: 'LiftMaster belt-drive limit adjustment',
        body: 'Door reversed halfway on a Mattamy build off Trail Side Drive. Travel limits and force settings were recalibrated; no new opener needed.',
      },
    ],
  },
  {
    slug: 'fairwinds',
    name: 'Fairwinds',
    yearBuilt: '1990s–2000s',
    housingStock: 'Established suburb west of Stittsville Main St, double-car garages common',
    topServices: ['spring-repair', 'panel-replacement', 'maintenance'],
    landmarks: ['Fairwinds Park', 'Stittsville Main Street', 'Abbot Street'],
    streets: ['Fairwind Way', 'Granite Ridge Drive', 'West Ridge Drive'],
    summary:
      'Fairwinds is one of Stittsville’s established pockets west of Main Street — 1990s and early-2000s homes with double-car garages, many still on original extension spring setups or first-generation openers.',
    commonIssues:
      'Original extension springs in Fairwinds split at the pulley when they hit cycle fatigue — common on Fairwind Way and Granite Ridge. Wood-look steel doors from the 2000s also show bottom seal rot after Ottawa Valley freeze-thaw. We do a lot of annual tune-ups here before winter hits Village Square Park season.',
    recentJobs: [
      {
        title: 'Extension spring conversion — Fairwind Way',
        body: 'Both extension springs failed on a 1998 build. Replaced pair, adjusted cables, and verified door weight — homeowner back in the garage before dinner.',
      },
      {
        title: 'Bottom seal and retainer — West Ridge Drive',
        body: 'Draft and mice under the door. New aluminum retainer and rubber seal installed; door closes flush on the slab after Carp Road windstorms.',
      },
    ],
  },
  {
    slug: 'crossing-bridge-estates',
    name: 'Crossing Bridge Estates',
    yearBuilt: '2000s–2010s',
    housingStock: 'Larger lots, executive homes, carriage-style doors, three-car garages',
    topServices: ['new-door-installation', 'panel-replacement', 'opener-installation'],
    landmarks: ['Crossing Bridge Park', 'Fernbank Road', 'Tim Hortons on Hazeldean'],
    streets: ['Crossing Bridge Way', 'Stonebridge Boulevard', 'Fernbank Road'],
    summary:
      'Crossing Bridge Estates features larger executive lots off Fernbank and Stonebridge — three-car garages and custom carriage-style doors are the norm, not the exception.',
    commonIssues:
      'Heavy wood-look doors stress hinges and rollers on three-car setups — we replace worn rollers before tracks bend. Carriage panels with faux hardware also take impact dents from basketball nets and hockey nets in the driveway. Jackshaft opener installs are popular when ceiling storage is tight near the Goulbourn Recreation Complex commute route.',
    recentJobs: [
      {
        title: 'Carriage panel replacement — Crossing Bridge Way',
        body: 'Vehicle contact cracked one section on a three-car door. Matched panel profile, swapped section, adjusted spring tension for the added weight.',
      },
      {
        title: 'Jackshaft opener installation',
        body: 'Executive home near Stonebridge Boulevard needed ceiling clearance for storage lifts. Wall-mount LiftMaster installed and paired to existing remotes.',
      },
    ],
  },
  {
    slug: 'amberwood',
    name: 'Amberwood Village',
    yearBuilt: '1980s–1990s',
    housingStock: 'Mature subdivision around golf course, original doors due for replacement',
    topServices: ['new-door-installation', 'spring-repair', 'maintenance'],
    landmarks: ['Amberwood Village Golf Club', 'Amberway Drive', 'Trans Canada Trail access'],
    streets: ['Amberway Drive', 'Amberhill Way', 'Village Green Drive'],
    summary:
      'Amberwood Village wraps the golf course with mature trees and 1980s–90s housing stock — many garage doors are original steel still on the first spring set.',
    commonIssues:
      'Thirty-year-old torsion springs in Amberwood fail without warning — we stock common wire sizes for Amberway Drive calls. Original single-layer steel doors also sag in the middle; homeowners often move to insulated replacements rather than another panel patch. Humidity off the golf course warps older wooden jambs on Village Green Drive.',
    recentJobs: [
      {
        title: 'Full door replacement — Amberway Drive',
        body: 'Rust-through bottom section and failed springs on a 1989 door. New insulated steel door, hardware, and opener bracket reinforcement — same-day install.',
      },
      {
        title: 'Torsion spring and cable — Amberhill Way',
        body: 'Cable off the drum after spring snap. Both springs replaced, cables seated, door balanced — no opener strain.',
      },
    ],
  },
  {
    slug: 'wyldewood',
    name: 'Wyldewood',
    yearBuilt: '1990s–2000s',
    housingStock: 'South of Hazeldean, mid-density family homes, mainly steel doors',
    topServices: ['track-repair', 'spring-repair', 'opener-repair'],
    landmarks: ['Wyldewood Park', 'Hazeldean Road', 'Saunders Farm nearby'],
    streets: ['Wyldewood Drive', 'Wild Senna Way', 'Eaglewatch Drive'],
    summary:
      'Wyldewood sits south of Hazeldean Road — family-oriented streets between Saunders Farm country and suburban Stittsville, with straightforward steel sectional doors on most homes.',
    commonIssues:
      'Kids’ hockey and bikes mean bent bottom tracks on Wyldewood Drive — we straighten or replace verticals before rollers chew the steel. Steel doors also get loud when rollers dry out after summer; maintenance calls spike before Saunders Farm fall traffic on Hazeldean. Opener sensors frost over on unheated garages facing north.',
    recentJobs: [
      {
        title: 'Track straightening — Wyldewood Drive',
        body: 'Bottom vertical bent from vehicle tap. Track replaced, rollers swapped, safety eyes realigned — door runs quiet again.',
      },
      {
        title: 'Sensor and weather seal service',
        body: 'Door would not close on Eaglewatch Drive after cold night. Frost cleared from sensors, thresholds adjusted, new bottom seal where gap let slush in.',
      },
    ],
  },
  {
    slug: 'bryanston-gate',
    name: 'Bryanston Gate',
    yearBuilt: '2015–present',
    housingStock: 'Newer Mattamy development off Stittsville Main, modern flush-panel doors',
    topServices: ['opener-repair', 'opener-installation', 'maintenance'],
    landmarks: ['Bryanston Gate Park', 'Stittsville Main Street', 'Johnny Leroux Community Arena'],
    streets: ['Bryanston Avenue', 'Gatehouse Way', 'Main Street frontage'],
    summary:
      'Bryanston Gate is Mattamy’s newer pocket off Stittsville Main — flush-panel steel doors, smart openers, and tight garage-to-kitchen layouts typical of 2015+ builds.',
    commonIssues:
      'Factory-set opener limits on Bryanston Avenue homes drift within the first five years — door gaps let garage heat bleed toward the kitchen. Wi-Fi openers lose pairing after router swaps; we reprogram MyQ and wall controls. New-home warranty sometimes excludes impact damage — we document photos for insurance when a panel gets hit backing out toward Main Street.',
    recentJobs: [
      {
        title: 'Chamberlain belt-drive repair — Bryanston Avenue',
        body: 'Motor hummed, door did not move. Worm gear and carriage assembly replaced — common wear item on this model year.',
      },
      {
        title: 'Pre-winter maintenance — Gatehouse Way',
        body: 'Full tune-up before arena season: lube, balance, hardware torque, force and travel test — homeowner wanted zero surprises on -25°C mornings.',
      },
    ],
  },
];

export function getNeighbourhood(slug: string): Neighbourhood | undefined {
  return neighbourhoods.find((n) => n.slug === slug);
}
