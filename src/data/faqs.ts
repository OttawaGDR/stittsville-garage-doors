export type Faq = { question: string; answer: string };

export type FaqItem = Faq & {
  id: string;
  category: FaqCategory;
};

export type FaqCategory =
  | 'Booking & service area'
  | 'Pricing & payment'
  | 'Springs & cables'
  | 'Openers & remotes'
  | 'Tracks, panels & doors'
  | 'Winter & emergencies';

export const faqCategories: FaqCategory[] = [
  'Booking & service area',
  'Pricing & payment',
  'Springs & cables',
  'Openers & remotes',
  'Tracks, panels & doors',
  'Winter & emergencies',
];

export const homepageFaqs: Faq[] = [
  {
    question: 'Is the on-site estimate free?',
    answer:
      'Yes. We diagnose on site and give you a written quote before any repair — no dispatch fee and no charge that only counts toward the job if you approve same-day work. You decide yes or no after you see the number.',
  },
  {
    question: 'How fast can you get to my house in Stittsville?',
    answer:
      'Most Stittsville calls get a same-day window between 7 AM and 10 PM. Jackson Trails to Bryanston Gate is usually under 90 minutes when trucks are in the west Ottawa rotation.',
  },
  {
    question: 'Do you work on weekends?',
    answer:
      'Seven days a week, 7 AM to 10 PM. Garage doors fail on Sunday mornings too — we answer.',
  },
  {
    question: 'What brands of openers do you service?',
    answer:
      'LiftMaster, Chamberlain, Genie, Craftsman, and most belt-drive or chain-drive units sold in Canada. We carry common gears, sensors, and remotes on the truck.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes — liability insurance. You get a written invoice for every job, whether it is a spring on Amberway Drive or a full door in Crossing Bridge Estates.',
  },
  {
    question: 'Is Stittsville Garage Doors part of a larger Ottawa operation?',
    answer:
      'Stittsville Garage Doors is operated by GDS — Garage Doors & Openers Ottawa, the parent service that handles garage door work across the wider Ottawa region. We set up a dedicated Stittsville site and phone line because Stittsville has enough call volume to justify its own truck rotation, neighbourhood-specific content, and a number that does not get mixed in with east-end or central Ottawa jobs. When you call (613) 777-6401, you reach the team focused on Stittsville — same insurance, same warranty, same technicians who already know the housing stock here.',
  },
  {
    question: 'Do you do estimates over the phone?',
    answer:
      'We can quote ranges for common jobs (springs, openers, cables) if you describe the door size and problem. Complex repairs need a quick look — we will give you an expected range before we drive out, then confirm with a written quote on site.',
  },
];

export const faqPageFaqs: FaqItem[] = [
  // Booking & service area (6)
  {
    id: 'service-area',
    category: 'Booking & service area',
    question: 'What areas do you serve besides Stittsville?',
    answer:
      'Stittsville is our home base — Jackson Trails, Fairwinds, Crossing Bridge Estates, Amberwood, Wyldewood, Bryanston Gate, and the village core. We also take west Ottawa calls when drive time is reasonable (Kanata, Carp, parts of Nepean). Call and we will tell you honestly if today works or if tomorrow morning is smarter.',
  },
  {
    id: 'same-day',
    category: 'Booking & service area',
    question: 'Do you offer same-day garage door repair in Stittsville?',
    answer:
      'Yes, for most mechanical repairs when trucks are already west on Hazeldean or returning from Jackson Trails. Springs, cables, openers, and track realignments are common same-day jobs. New door installs need lead time on the door itself.',
  },
  {
    id: 'hours',
    category: 'Booking & service area',
    question: 'What are your business hours?',
    answer:
      'Monday through Sunday, 7 AM to 10 PM for standard bookings. Emergency service (door stuck open, car trapped, security risk) is available 24/7 — call (613) 777-6401 any time.',
  },
  {
    id: 'who-answers',
    category: 'Booking & service area',
    question: 'Will I talk to a call centre or a local technician?',
    answer:
      'You speak with the technician who runs the route — not a national franchise queue. The person who answers your call is the same person who pulls into your driveway on Bridlewood Drive or Fairwind Way.',
  },
  {
    id: 'book-visit',
    category: 'Booking & service area',
    question: 'How do I book a repair visit?',
    answer:
      'Call (613) 777-6401 with your Stittsville address and a short description of what the door is doing (bang, grind, gap on one side, opener flashing). Or use the contact form on this site — include your neighbourhood so we estimate drive time accurately.',
  },
  {
    id: 'neighbourhood-pages',
    category: 'Booking & service area',
    question: 'Do you have information for my specific Stittsville neighbourhood?',
    answer:
      'Yes. We publish pages for Jackson Trails, Fairwinds, Crossing Bridge Estates, Amberwood, Wyldewood, and Bryanston Gate with common failure patterns and recent job examples — see the Neighbourhoods section in the site menu.',
  },
  {
    id: 'gds-relationship',
    category: 'Booking & service area',
    question: 'Is Stittsville Garage Doors part of a larger Ottawa operation?',
    answer:
      'Stittsville Garage Doors is operated by GDS — Garage Doors & Openers Ottawa, the parent service that handles garage door work across the wider Ottawa region. We set up a dedicated Stittsville site and phone line because Stittsville has enough call volume to justify its own truck rotation, neighbourhood-specific content, and a number that does not get mixed in with east-end or central Ottawa jobs. When you call (613) 777-6401, you reach the team focused on Stittsville — same insurance, same warranty, same technicians who already know the housing stock here.',
  },
  // Pricing & payment (6)
  {
    id: 'free-estimate',
    category: 'Pricing & payment',
    question: 'Is the on-site estimate really free?',
    answer:
      'Yes. We diagnose on site, explain what failed, and leave you a written quote before any repair. There is no dispatch fee and no charge that only applies toward the job if you approve same-day work.',
  },
  {
    id: 'spring-price',
    category: 'Pricing & payment',
    question: 'How much does garage door spring repair cost in Stittsville?',
    answer:
      'Single-car torsion spring replacement typically starts around $250–$350. Double doors often need both springs and run $450–$550. Final price depends on wire size, door weight, and whether cables or drums were damaged when the spring let go. See our pricing page for the full table.',
  },
  {
    id: 'phone-quote',
    category: 'Pricing & payment',
    question: 'Can you give me a final price over the phone?',
    answer:
      'We can give honest ranges for common jobs if you describe door size and symptoms. We will not guess a final number on a complex repair without seeing it — that protects you from lowball quotes that jump on site. You always get a written quote in the driveway before work starts.',
  },
  {
    id: 'payment-methods',
    category: 'Pricing & payment',
    question: 'What payment methods do you accept?',
    answer:
      'E-transfer, credit card, and cash. Payment is due after you approve the written quote and we complete the work — not before we diagnose.',
  },
  {
    id: 'seniors-discount',
    category: 'Pricing & payment',
    question: 'Do you offer a seniors or veterans discount?',
    answer:
      'Yes — 10% off labour for seniors and veterans when you mention it at booking so it appears on the written quote upfront, not as an afterthought.',
  },
  {
    id: 'warranty',
    category: 'Pricing & payment',
    question: 'Do you warranty parts and labour?',
    answer:
      'We supply a one-year warranty on parts we install. Labour is documented on your invoice. If something we installed fails within warranty, call us with the invoice date and we will make it right.',
  },
  // Springs & cables (5)
  {
    id: 'spring-bang',
    category: 'Springs & cables',
    question: 'My spring snapped with a loud bang — what should I do?',
    answer:
      'Do not run the opener and do not try to lift the door manually — it is extremely heavy without spring counterbalance. Unplug the opener, leave the door where it is, and call us. We replace springs same day when the correct wire size is on the truck.',
  },
  {
    id: 'one-or-two-springs',
    category: 'Springs & cables',
    question: 'Should I replace one spring or both?',
    answer:
      'On double-car doors we almost always replace both torsion springs together. The second spring is near end of life if one broke, and mismatched springs cause uneven lift and opener strain. Single-car doors may only need one spring depending on what we find on site.',
  },
  {
    id: 'extension-vs-torsion',
    category: 'Springs & cables',
    question: 'Do you service extension springs and torsion springs?',
    answer:
      'Yes. Older Fairwinds and Amberwood homes often still have extension springs along the tracks; newer Mattamy builds in Jackson Trails use torsion springs above the header. We stock common sizes for both setups.',
  },
  {
    id: 'cable-off-drum',
    category: 'Springs & cables',
    question: 'The cable came off the drum — is that an emergency?',
    answer:
      'Stop using the opener immediately. A cable off the drum often means the door is hanging on one side and can bend track or panels if you keep cycling it. We re-seat cables, check spring balance, and replace frayed cables on the same visit when possible.',
  },
  {
    id: 'diy-springs',
    category: 'Springs & cables',
    question: 'Can I replace garage door springs myself?',
    answer:
      'We strongly advise against it. Torsion springs store serious energy — injuries from DIY spring work are common. Our visit includes correct sizing, winding, balance test, and auto-reverse check.',
  },
  // Openers & remotes (5)
  {
    id: 'opener-brands',
    category: 'Openers & remotes',
    question: 'What opener brands do you repair and install?',
    answer:
      'LiftMaster, Chamberlain, Genie, Craftsman, and most chain-drive, belt-drive, and wall-mount units sold in Canada. We carry common gears, carriages, sensors, and remotes on the truck.',
  },
  {
    id: 'flashing-lights',
    category: 'Openers & remotes',
    question: 'My opener lights are flashing and the door will not close — why?',
    answer:
      'Usually force limits, travel limits, or safety sensors. After snow or frost on north-facing bays in Wyldewood, photo-eyes misalign or ice over. We test sensors, rail, and door balance before selling you a new motor you may not need.',
  },
  {
    id: 'wifi-opener',
    category: 'Openers & remotes',
    question: 'Can you set up Wi-Fi or myQ openers?',
    answer:
      'Yes for Chamberlain and LiftMaster myQ units common in Bryanston Gate and newer builds. Bring your router password; we pair the opener, test the app, and confirm auto-close settings are safe.',
  },
  {
    id: 'remote-lost',
    category: 'Openers & remotes',
    question: 'I lost a remote — can you program a new one?',
    answer:
      'Yes. We program remotes and keypads and clear lost remotes from memory on supported models so old clickers no longer open your door.',
  },
  {
    id: 'opener-vs-spring',
    category: 'Openers & remotes',
    question: 'The opener hums but the door barely moves — is it the motor?',
    answer:
      'Often it is a broken spring or heavy door balance, not a dead motor. Running a strained opener burns gears and capacitors. We test balance first, then diagnose the opener — that order saves you money.',
  },
  // Tracks, panels & doors (5)
  {
    id: 'off-track',
    category: 'Tracks, panels & doors',
    question: 'My door is off the track — can you fix it today?',
    answer:
      'Usually yes if rollers and track are not bent beyond reuse. Stop using the opener, block the door safely, and call. Continuing to run it bends horizontal track and can ruin multiple panels.',
  },
  {
    id: 'panel-dent',
    category: 'Tracks, panels & doors',
    question: 'Can you replace a single dented panel?',
    answer:
      'We repair panels in place when the section is still available from the manufacturer. We do not swap full sections from mismatched donor doors — that creates alignment and safety problems. If the profile is discontinued, we explain honest options.',
  },
  {
    id: 'new-door-lead',
    category: 'Tracks, panels & doors',
    question: 'How long does a new garage door take to install?',
    answer:
      'Most insulated steel doors take three to five business days to arrive once ordered. Installation day is typically one visit when the door is on site — haul-away, balance, opener compatibility, and perimeter seal check included.',
  },
  {
    id: 'insulated-door',
    category: 'Tracks, panels & doors',
    question: 'Do I need an insulated garage door in Stittsville?',
    answer:
      'Worth it if the garage shares a wall with living space or you use it as a gym or workshop. R-value matters on Amberwood and Fairwinds homes with attached garages. We quote insulated steel and explain weight impact on springs and openers.',
  },
  {
    id: 'weather-seal',
    category: 'Tracks, panels & doors',
    question: 'Cold air blows under the door — can you fix the seal?',
    answer:
      'Yes. Bottom seals, threshold kits, and perimeter weather stripping are common winter jobs. We match retainers on Wayne Dalton and standard steel doors and show you the before-and-after gap at the apron.',
  },
  // Winter & emergencies (6)
  {
    id: 'wont-close-cold',
    category: 'Winter & emergencies',
    question: 'Why will my garage door not close in cold weather?',
    answer:
      'Frozen bottom seal to the apron, stiff grease on rollers, misaligned sensors after snowbanks, or a weak spring that only shows up at -20°C. We clear ice safely, align sensors, and test balance — see our winter guide for prevention tips.',
  },
  {
    id: 'emergency-definition',
    category: 'Winter & emergencies',
    question: 'What counts as a garage door emergency?',
    answer:
      'Door stuck open overnight, car trapped inside, broken spring with the door hanging crooked, or a door off track blocking the bay. Cosmetic dents and “old opener I want replaced eventually” are next-day jobs, not emergency dispatch.',
  },
  {
    id: 'after-hours-fee',
    category: 'Winter & emergencies',
    question: 'Is there an extra fee for after-hours emergency calls?',
    answer:
      'Emergency visits outside standard hours may include an after-hours premium — we disclose it when you call so you can decide. Standard same-day repairs between 7 AM and 10 PM follow our regular written-quote process.',
  },
  {
    id: 'power-outage',
    category: 'Winter & emergencies',
    question: 'How do I open the door during a power outage?',
    answer:
      'Pull the red manual release rope only when the door is fully closed and you have checked that springs are intact. If a spring is broken, the door can fall — call us instead. After release, lift smoothly and lock the door if leaving it open for security.',
  },
  {
    id: 'maintenance-winter',
    category: 'Winter & emergencies',
    question: 'Should I book a tune-up before winter?',
    answer:
      'Smart move in October before Ottawa Valley cold hits. We lube hinges and rollers with cold-rated products, torque hardware, test balance and auto-reverse, and flag cracked cables before they fail on the coldest morning of the year.',
  },
  {
    id: 'ice-sensors',
    category: 'Winter & emergencies',
    question: 'Can frost on safety sensors stop the door from closing?',
    answer:
      'Yes. Condensation and road salt mist can frost the lenses on north-facing doors. Wipe them gently with a dry cloth — do not use hot water. If they still blink, we realign or replace sensors and verify wiring.',
  },
];

export function getFaqByCategory(category: FaqCategory | 'All'): FaqItem[] {
  if (category === 'All') return faqPageFaqs;
  return faqPageFaqs.filter((f) => f.category === category);
}
