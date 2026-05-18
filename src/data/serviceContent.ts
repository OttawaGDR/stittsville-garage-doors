export type ServicePageContent = {
  slug: string;
  h1: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string[];
  signs: string[];
  whyHappens: string[];
  process: { title: string; time: string; body: string }[];
  pricing: string[];
  durationNote: string;
  diyRisks: string[];
  relatedSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceContents: Record<string, ServicePageContent> = {
  'spring-repair': {
    slug: 'spring-repair',
    h1: 'Garage Door Spring Repair in Stittsville',
    metaDescription: 'Broken garage door spring in Stittsville? Same-day torsion and extension spring replacement from $250. Jackson Trails, Fairwinds, Amberwood. Call (613) 777-6401.',
    heroSubtitle: 'Loud bang, door won\'t lift, or a gap in the spring coil — we replace torsion and extension springs across Stittsville the same day you call.',
    intro: [
      'A broken garage door spring is the most common emergency call we get in Stittsville — especially after an Ottawa Valley cold snap when metal that was already fatigued finally lets go. You are not stuck because the opener failed; the opener was never meant to lift a double-car door on its own. The springs carry the weight. When one breaks, the door feels like it weighs twice what it should, and forcing it with the motor can strip gears or burn out the unit.',
      'We work Stittsville neighbourhoods every week: Jackson Trails along Bridlewood Drive, Fairwinds off Main Street, Amberwood around the golf course, Wyldewood south of Hazeldean near Saunders Farm, Crossing Bridge on Fernbank, and Bryanston Gate by the arena. Mattamy builds from the 2000s usually run torsion springs above the header; older Fairwinds and Amberwood homes often still have extension springs along the tracks. Both setups fail differently, and both need the right parts sized to your door weight.',
      'If you heard a sound like a firecracker in the garage and the door only opens a foot before stopping, treat it as a spring job until proven otherwise. Leave the door down if you can — an unbalanced door on a single spring is a pinch hazard at the hinges and at the bottom bracket where the lift cable attaches. We stock common wire sizes for standard 16×7 and 16×8 doors so most Stittsville driveways are done in one visit without a return trip for parts.',
      'Same-day spring repair means you are not parking on the street overnight because the car is trapped inside, and you are not paying for an after-hours tow because you backed into a door that was hanging crooked on one cable. We quote a clear starting price before we roll out, explain what we see on the springs and cables, and balance the door when we are finished so the opener is not fighting gravity every cycle.',
    ],
    signs: [
      'A loud bang from the garage — homeowners on Trail Side Drive and Fairwind Way often describe it as a gunshot or a shelf collapsing',
      'The door feels extremely heavy when you try to lift it by hand, or it will not stay open past your waist',
      'A visible gap in the torsion spring above the door, or a stretched, rusted, or snapped extension spring along the horizontal track',
      'The opener runs but the door barely moves, hums, or reverses immediately because the motor is overloaded',
      'One side of the door sits higher than the other when closed — classic sign the lift cable jumped after the spring failed',
      'You see a loose cable dangling near the drum on one side — do not operate the door; the other spring may still be under tension',
      'The door opened fine yesterday but will not lift this morning after an overnight drop below -20°C — common on unheated garages facing north in Wyldewood and Jackson Trails',
    ],
    whyHappens: [
      'Garage door springs are rated by cycle life — typically 10,000 cycles for standard wire. A cycle is one open and one close. A family leaving for work, school runs past Sacred Heart, hockey at the Johnny Leroux arena, and errands down Hazeldean can easily hit four cycles a day. Do the math on a 15-year-old spring set and you are living on borrowed time.',
      'Cold makes it worse. Steel contracts in January and February. A spring that was marginal in October can snap on the first deep freeze after a thaw. We see clusters along Bridlewood Drive, Granite Ridge, and Amberway Drive every winter — not because those streets are unlucky, but because the housing stock hit the same age at the same time and shares the same climate.',
      'Torsion springs need even tension on both sides of the bar. If one was replaced years ago and the other was left, the older spring does more work until it fails — then the survivor often goes within weeks. Extension spring setups fail at the pulley or the safety cable when the spring rusts through at the loop. Either way, the door weight transfers to you, the opener, or the cables — and only the springs are designed to hold it.',
    ],
    process: [
      {
        title: 'Phone triage and safe parking',
        time: '5 min',
        body: 'We ask door size, single vs double, torsion vs extension, and whether the car is trapped. We tell you to disconnect the opener if the door is hanging crooked and to keep people clear of the door path.',
      },
      {
        title: 'On-site assessment and lock',
        time: '10 min',
        body: 'We clamp or lock the door in a safe position, check both springs, cables, drums, and bottom brackets, and confirm wire size and door weight. If a cable came off the drum, we address that before tensioning new springs.',
      },
      {
        title: 'Spring replacement',
        time: '35–50 min',
        body: 'We install matched springs — both sides on torsion systems — wind to manufacturer spec for your door weight, and verify even lift. Extension setups get new springs, pulleys checked, and safety cables inspected.',
      },
      {
        title: 'Balance and hardware check',
        time: '10–15 min',
        body: 'With the opener disconnected, we lift the door to the halfway point and confirm it stays put. We torque lag screws on the spring anchor plate, check roller bearings, and look for bent tracks that showed up after the break.',
      },
      {
        title: 'Opener test and homeowner walkthrough',
        time: '5–10 min',
        body: 'We reconnect the opener, set force limits if needed, run full travel, and test auto-reverse. You get a plain explanation of what failed and what to watch for on the remaining hardware.',
      },
    ],
    pricing: [
      'Most single torsion spring replacements on standard residential doors in Stittsville start around $250 for labour and a matched spring pair where both sides are due. Double-width doors, high-lift tracks in three-car garages near Crossing Bridge, or non-standard wire sizes can run higher because the parts cost more and the wind takes longer.',
      'Extension spring jobs on older Fairwinds and Amberwood setups often land in a similar range for a pair, but pulley wear or a cable that came off the drum adds line items. We will tell you before we install anything — no surprise invoice after the fact.',
      'If both springs failed and one cable is frayed, bundling cable replacement on the same visit saves a second service call. We do not upsell full door replacements when the panels and tracks are sound.',
      'The starting prices on this page are starting points — we confirm the final price on site after we see your door — final quotes depend on door weight, headroom, and parts availability. You will always get a range on the phone and a confirmed price after we see the door in person.',
    ],
    durationNote: 'Plan on 60–90 minutes for a straightforward torsion spring swap on a standard double-car door in Stittsville. Extension spring conversions, three-car garages, or a cable re-seat on the drum can push toward the longer end. We carry common sizes locally so you are not waiting on a warehouse run to Kanata unless you have an unusual commercial-size door.',
    diyRisks: [
      'Torsion springs store serious energy in the steel bar — winding with the wrong bars or a homemade socket extension has sent people to the ER; this is not a YouTube afternoon project',
      'If only one spring is replaced, the door can track crooked and chew rollers until the second spring snaps',
      'Releasing tension without locking the door can drop a hundred-plus pounds of steel on a vehicle or foot',
      'Extension springs without safety cables can whip through drywall when they break during adjustment',
      'An unbalanced door after DIY work burns out opener gears within months — the repair bill becomes spring plus motor',
    ],
    relatedSlugs: ['cable-repair', 'maintenance', 'opener-repair'],
    faqs: [
      {
        question: 'Can I open the garage door with a broken spring?',
        answer: 'If the door is already off the ground and balanced on one spring, do not try to close it with the opener — the weight can slam. If both springs are broken, the door is too heavy for most adults to lift safely without helper bars. We treat trapped-car calls as priority in Stittsville and can often be there the same day.',
      },
      {
        question: 'Should both torsion springs be replaced at once?',
        answer: 'Yes, in almost every case. They were installed together and share the load. Replacing one and leaving a 10-year-old partner spring is how we get a callback three weeks later on the same street in Jackson Trails.',
      },
      {
        question: 'Why did my spring break after the January thaw?',
        answer: 'Rapid temperature swings stress fatigued steel. The spring did not fail because of the thaw alone — it failed because it was near end of cycle life and the cold finished the job. That is why we see waves of breaks after -25°C nights across the Ottawa Valley.',
      },
      {
        question: 'Will a new spring match my old wire size?',
        answer: 'We measure inside diameter, wire gauge, and length, or match the drum and door weight directly. Guessing leads to a door that floats open or slams shut. We stock common sizes for standard 16-foot doors used in most Stittsville subdivisions.',
      },
      {
        question: 'Is spring repair covered by home insurance?',
        answer: 'Usually not — wear items are maintenance. If the failure caused panel damage or vehicle impact, your policy may cover the collateral damage but not the spring itself. We can provide a detailed invoice for your records.',
      },
      {
        question: 'How fast can you get to Jackson Trails or Fairwinds for a spring call?',
        answer: 'When trucks are already west on Hazeldean, many spring jobs are same-day. Trapped-car calls get priority. Call with your cross street — we give a realistic window, not a four-hour “sometime today” block from across the city.',
      },
      {
        question: 'Do you replace extension springs on older Stittsville homes?',
        answer: 'Yes. Amberwood and early Fairwinds stock often still use extension springs along the horizontal track. We carry common sizes and convert to torsion only when the header and framing make it the right long-term fix — not as an automatic upsell.',
      },
    ],
  },
  'opener-repair': {
    slug: 'opener-repair',
    h1: 'Garage Door Opener Repair in Stittsville',
    metaDescription: 'Garage door opener not working in Stittsville? LiftMaster, Chamberlain, Genie repair from $150. Sensors, gears, remotes. Same-day. (613) 777-6401.',
    heroSubtitle: 'Motor hums but nothing moves, lights flash, or the door reverses for no reason — we diagnose openers on-site across Stittsville, not over a call centre script.',
    intro: [
      'When the garage door opener stops doing its job in Stittsville, the cause is rarely "the motor is dead." More often it is a safety sensor knocked out of alignment after you cleared ice off the apron, a worn gear set in a belt-drive unit that has cycled thousands of times since the house was built on Bryanston Avenue, or a door that is so out of balance the opener hits its force limit and gives up.',
      'We repair LiftMaster, Chamberlain, Genie, and most chain- and belt-drive units found in Jackson Trails Mattamy garages, Fairwinds split-levels, and Amberwood originals still running first-generation openers. You get a technician who tests the door mechanically first — springs, cables, rollers — before blaming the box on the ceiling. That order matters because replacing a motor on a door that is too heavy is throwing money away.',
      'Stittsville driveways see real wear: slush spray on photo-eyes near Wyldewood Park, Wi-Fi openers losing pairing after a router swap on Gatehouse Way, and wall buttons with intermittent contacts in unheated garages. We carry common wear parts — gears, couplers, safety sensors, wall stations — so most repairs finish in one trip.',
      'If you are commuting on Hazeldean or Main Street and the door will not close behind you, call before you leave it open all day. We schedule same-day opener repair across Stittsville so you are not manually heaving a 200-pound door every night through the winter.',
      'Stittsville homes mix detached heated garages, cold rooms above the bay, and long commutes — your opener cycles more than you think. A door that closes fine at 5 PM but reverses at 6 AM often traces to frost on the sensor lens or a stiff bottom seal, not a dead motor. We document what we find so you are not guessing whether to buy a $600 unit when a $150 alignment fixes it.',
      'We are not a dispatch centre routing you to whoever is closest to Kanata. The person who answers has likely already worked on your model opener in another Stittsville driveway this month. That matters when a Chamberlain belt-drive on Bryanston Avenue needs a specific gear kit and a big-box store shelf part does not fit.',
      'Opener repair also covers the small failures that waste an evening: a wall control with a cracked wire where the garage meets the house, a trolley that disengaged after someone pulled the red rope and did not re-engage it correctly, or a vacation lock switch bumped on by storage boxes. We trace electrical and mechanical paths until the symptom matches the cause — not until we have sold you hardware you do not need.',
      'Response time matters when you cannot secure the garage at night. We stage routes around Stittsville so a technician already working Jackson Trails or Fairwinds can often pivot to your street without a Kanata depot delay. You get a name and an ETA, not a four-hour window from a national queue. That is how local service is supposed to work when the door will not close and the hockey bag is still inside.',
    ],
    signs: [
      'The opener lights blink in a pattern but the door does not move — often a safety sensor or force issue',
      'You hear the motor run with no movement — classic stripped plastic drive gear on 2008–2015 belt drives in Jackson Trails and Bryanston Gate',
      'The door closes partway then reverses — dirty sensors, frost on the lens, or a binding track near the floor',
      'Remotes work inconsistently but the wall button works — battery, antenna, or logic board communication',
      'The opener strains, stalls, or smells hot — door balance or spring problem overloading the motor',
      'MyQ or Wi-Fi features dropped off after a power bump — pairing lost, not necessarily a dead unit',
      'The trolley engages but the chain sags or skips — worn carriage, chain tension, or rail damage from storage hooks',
      'Wall button works but wireless keypad does not — often wiring or frequency, not the whole opener',
      'Door opens fine but will not close until you hold the wall button — safety beam or force issue',
    ],
    whyHappens: [
      'Openers are built to guide a balanced door, not dead-lift it. When a spring weakens slowly, homeowners compensate by tapping the remote twice until the motor burns out. We fix the balance first on calls near Sacred Heart and along West Ridge Drive because that is the honest long-term fix.',
      'Safety sensors are mandatory for a reason. A bump from a garbage bin, a shovel leaned against the track, or salt film after a Carp Road storm blocks the beam and the opener refuses to close. Alignment takes minutes if you know what you are looking at; guessing leads to bypassing safety — which we will not do.',
      'Plastic drive gears wear out on a predictable schedule — roughly 10–15 years on heavily used double-car doors. The motor is fine; the teeth are gone. Replacing the gear and carriage assembly restores full power for a fraction of new opener cost, which is why opener repair is popular in established Fairwinds and Amberwood homes.',
      'Rodents chew low-voltage sensor wire in unheated bays — especially on homes backing greenspace off the Trans Canada Trail near Amberwood. Intermittent closes that work when you wiggle the wire are a tell. We repair with proper jacketed wire routed out of pinch points.',
      'Power surges after Ottawa storms can scramble logic boards without visible damage — we test capacitors and connections before recommending a board swap. Unheated garages on north-facing lots in Wyldewood also let condensation form inside the housing, which corrodes terminals over years.',
    ],
    process: [
      {
        title: 'Symptom and model check',
        time: '5 min',
        body: 'We note brand, model, age, and what the lights or app report. We ask if the door moves smoothly by hand with the opener disconnected.',
      },
      {
        title: 'Mechanical door test',
        time: '10–15 min',
        body: 'We disconnect the trolley, lift the door manually, and check balance, springs, cables, and track bind. If the door is heavy, we flag spring service before motor work.',
      },
      {
        title: 'Opener diagnostics',
        time: '15–25 min',
        body: 'We test sensors, force settings, travel limits, wall control wiring, and remote signal. We inspect the rail, chain or belt, trolley, and gear housing.',
      },
      {
        title: 'Repair or parts swap',
        time: '20–40 min',
        body: 'Common fixes include gear and sprocket kits, sensor realignment or replacement, carriage assembly, capacitor, or circuit board. We use OEM-compatible parts where it matters.',
      },
      {
        title: 'Travel programming and safety test',
        time: '10 min',
        body: 'We set up and down limits, force, and auto-reverse with a 2×4 test. We pair remotes and confirm the door seals on the slab without slamming.',
      },
    ],
    pricing: [
      'Straightforward opener repairs in Stittsville — sensor realignment, limit adjustment, remote programming — often start around $150 for labour when no major parts are needed.',
      'Gear and carriage kits for common LiftMaster and Chamberlain models typically land between $150 and $350 parts plus labour, still well under a full replacement when the rail and motor are sound.',
      'Logic boards and jackshaft components on newer smart openers cost more; we quote after model identification, not from a generic menu.',
      'Starting prices listed here are starting points — we confirm the final price on site after we see your door. We confirm parts pricing before ordering anything non-stock.',
      'After-hours emergency opener service on a door stuck open may include a trip premium — we disclose that on the phone before we head out past 10 PM on a Friday when you are leaving for the cottage.',
    ],
    durationNote: 'Most opener repairs in Stittsville take 45–90 minutes on site. Sensor and programming-only calls can be shorter; gear replacements on high ceilings in Crossing Bridge three-car garages run longer. If the door needs spring work, we may schedule that in the same visit when parts are on the truck.',
    diyRisks: [
      'Adjusting force limits too high overrides safety and can crush an obstruction',
      'Bypassing sensors with tape or wire tricks creates liability if someone is hurt',
      'Opening the gear housing without unplugging the unit risks finger injury from stored tension in the rail',
      'Ladder work on uneven garage floors — common in older Amberwood slabs — causes falls',
      'Misdiagnosing a spring problem as a motor problem leads to buying an opener you did not need',
      'Standing on a car roof to reach the emergency release without stabilizing the ladder — we see dents on hoods along Stonebridge Boulevard from DIY attempts',
    ],
    relatedSlugs: ['opener-installation', 'spring-repair', 'maintenance'],
    faqs: [
      {
        question: 'My opener clicks but the door does not move — is the motor dead?',
        answer: 'Usually not. Clicks often mean the capacitor or gear assembly is failing, or the door is locked out by safety logic. We test manually first to separate mechanical from electrical causes.',
      },
      {
        question: 'Do you service smart Wi-Fi openers?',
        answer: 'Yes. We troubleshoot MyQ and similar apps, reprogram Wi-Fi, and replace boards when needed. Router changes on Stittsville home networks are a frequent fix without any new hardware.',
      },
      {
        question: 'Should I repair or replace a 15-year-old opener?',
        answer: 'If the rail is straight, safety sensors are modern, and parts exist, repair is often the better value. If the unit lacks photo-eyes, has no battery backup option you want, or the rail is bent, we will tell you replacement makes sense.',
      },
      {
        question: 'Why does my door reverse at the floor?',
        answer: 'Force settings think they hit an object, or the bottom seal is binding on ice. We check tracks, rollers, and limits — not just the sensor eyes.',
      },
      {
        question: 'Can you match new remotes to my existing opener?',
        answer: 'In most cases yes. We program remotes and keypads on site. Very old frequency systems may need an external receiver upgrade.',
      },
      {
        question: 'Do you carry parts on the truck for common openers?',
        answer: 'Yes for frequent failure items — gears, sensors, couplers. Rare boards may be next-day order; we tell you upfront so you can plan.',
      },
    ],
  },
  'opener-installation': {
    slug: 'opener-installation',
    h1: 'Garage Door Opener Installation in Stittsville',
    metaDescription: 'New garage door opener installed in Stittsville from $650. Belt-drive, chain-drive, jackshaft. LiftMaster & Chamberlain. Same-week booking. (613) 777-6401.',
    heroSubtitle: 'Quiet belt-drive for a bedroom above the garage, jackshaft when ceiling storage is tight, or a straight swap when the old unit is done — installed and programmed in your driveway.',
    intro: [
      'A new garage door opener installation in Stittsville is more than hanging a motor on a bracket. The rail has to follow the door\'s path, the header lag screws need solid wood, safety sensors must sit low enough to see a child or pet but not catch snowbanks, and the travel limits have to match how your door actually hits the seal on a -20°C morning when the rubber is stiff.',
      'Homeowners on Bryanston Avenue and in Jackson Trails often upgrade to belt-drive for noise — bedrooms sit right over the garage. Crossing Bridge executive homes ask for jackshaft wall-mount units when a storage lift or tall vehicle eats headroom. Fairwinds and Amberwood replacements are frequently chain-to-belt swaps on doors that still have years of life left in the panels.',
      'We install LiftMaster, Chamberlain, and Genie openers with battery backup options where you want the door to work during a power outage — useful when Ottawa storms take out Hydro along Hazeldean. We mount the rail, wire the wall control, pair remotes and keypads, and connect smart features only if you want them — no forced upsell on subscriptions.',
      'If your old opener stripped gears twice or lacks modern safety photo-eyes, installation is the right reset. We still balance-check the door first. Installing a powerful new motor on a door with a fatigued spring shortens the life of everything you just bought.',
      'Installation day in Stittsville often lines up with other projects — new siding on a Fairwinds split-level, an EV charger install in the garage, or finishing a mudroom above the bay on Jackson Trails. We coordinate mounting height and outlet location so the rail does not conflict with lights or storage racks you already planned.',
      'Noise bylaws are not usually the issue here, but neighbor courtesy is. Belt-drive installs near lot lines on Amberhill Way are noticeably quieter than the chain unit you are retiring — we can show the difference on a test unit before you pick a model.',
      'We also handle accessory installs you might postpone: wireless keypads for side doors facing the lane, motion-activated lighting tied to the opener circuit, and battery backup units that matter when the hydro map shows another ice storm rolling through the Valley. Each add-on is wired and tested — not tossed in the box for you to figure out Sunday night.',
      'Permits and inspections are rare for opener swaps, but we still install to manufacturer spec so warranty stays valid. We leave you with a labeled breaker note if we add an outlet, clean packaging haul-away when possible, and a quick demo for every remote in the household — including the one the teenager will lose by next week.',
    ],
    signs: [
      'The opener is over 12–15 years old and repairs are becoming frequent',
      'You want belt-drive quiet for a room above the garage — common in newer Stittsville two-storeys',
      'Ceiling height is tight because of storage racks or a lift — jackshaft mount may be required',
      'You need battery backup for power outages during Eastern Ontario ice storms',
      'The old unit has no safety sensors or uses outdated one-beam systems',
      'You are finishing a new build or renovation on Main Street frontage and need a clean install to code',
      'Smart home integration failed on an old board and replacement parts are discontinued',
      'You added insulation panels inside the door and the old opener now stalls — horsepower and rail support may be inadequate',
    ],
    whyHappens: [
      'Openers do not last forever. Heat in uninsulated garages cooks capacitors; cold thickens grease in the rail. Stittsville\'s four-season swing accelerates wear on plastic gears. When repair quotes approach half the price of a new unit with modern safety and warranty, installation wins.',
      'Noise complaints drive many upgrades. Chain drives on metal rails transmit vibration into joists. Belt drives and DC motors cut rumble dramatically — neighbors on Wild Senna Way notice when three kids leave for hockey at 6 AM.',
      'Renovations change the equation. Added insulation makes doors heavier; old openers rated for lighter panels struggle. A new install includes verifying horsepower rating, high-lift kits if needed, and proper reinforcement on the top section.',
      'Three-car garages in Crossing Bridge sometimes need a second opener or a high-horsepower unit on the heavy bay while a standard unit handles the single — we spec each opening independently instead of copying one template across bays.',
      'Insurance and home-sale inspections increasingly flag missing battery backup and modern photo-eyes. Upgrading during a listing on Main Street frontage avoids a last-minute buyer credit for garage door work.',
      'Ottawa Valley weather is the hidden mechanic on every garage door: freeze-thaw at the slab, salt on the apron, humidity in unheated bays, and UV on seals. Repairs that ignore climate fail again. We choose lubricants, seals, and hardware torque with winter in mind because Stittsville is not a mild-climate market — and your door cycles in that reality every day.',
    ],
    process: [
      {
        title: 'Pre-install consult',
        time: '15 min',
        body: 'We confirm ceiling height, headroom, outlet location, and whether you want belt, chain, or jackshaft. We inspect door balance and recommend spring service if needed before mounting hardware.',
      },
      {
        title: 'Remove old unit',
        time: '20–30 min',
        body: 'We disconnect power, remove the old rail and motor, patch minor ceiling marks, and verify the header bracket area is solid — some Amberwood installs need new lag locations.',
      },
      {
        title: 'Mount rail and motor',
        time: '45–60 min',
        body: 'We assemble the rail, square it to the door, install the header bracket and motor unit, and attach the trolley to the inner slide. Jackshaft installs get wall brackets aligned to the torsion bar.',
      },
      {
        title: 'Wire and sensor setup',
        time: '30 min',
        body: 'We run bell wire for sensors and wall control, mount eyes at the correct height, install the release rope at reachable height, and secure the emergency disconnect.',
      },
      {
        title: 'Programming and handoff',
        time: '20–30 min',
        body: 'We set travel and force, test auto-reverse, pair remotes and keypad, connect Wi-Fi if applicable, and walk you through battery backup and manual release use.',
      },
    ],
    pricing: [
      'Standard belt-drive or chain-drive opener installation in Stittsville typically starts around $650 labour plus the unit you choose — we can supply common models or install a homeowner-purchased opener if it is compatible.',
      'Jackshaft and wall-mount installs on three-car Crossing Bridge garages or high-lift tracks run higher due to extra hardware and programming time.',
      'Adding a new outlet, structural reinforcement for heavy doors, or converting extension springs to torsion is quoted separately before work starts.',
      'All starting figures are starting points — we confirm the final price on site after we see your door; we give an itemized quote after seeing your ceiling layout and door weight.',
      'Package pricing when we install a door and opener together on a new-door job is quoted as one project — ask when scheduling a full replacement in Crossing Bridge or Amberwood.',
      'We serve all of Stittsville — Jackson Trails, Fairwinds, Amberwood, Wyldewood, Crossing Bridge, Bryanston Gate, and surrounding streets. Same typical price ranges whether you are five minutes from Main Street or west toward Fernbank.',
    ],
    durationNote: 'Most opener installations take 2–3 hours in Stittsville driveways. Jackshaft units, smart hub setup, or door balance corrections add time. We schedule half-day blocks so you are not rushing the safety tests before dinner.',
    diyRisks: [
      'Header brackets pulling out of thin trim — the motor drops when the door slams',
      'Incorrect rail angle causes binding and premature gear wear',
      'Sensors mounted too high do not meet safety code and will not pass inspection on new work',
      'Undersized horsepower on heavy insulated doors burns out a new unit in one season',
      'Working on ladders with a rail overhead is awkward; dropped rails dent cars',
      'Ceiling-mounted openers on unbraced drywall ceilings pull through — we lag into framing members, not just drywall anchors',
    ],
    relatedSlugs: ['opener-repair', 'new-door-installation', 'maintenance'],
    faqs: [
      {
        question: 'Can I buy the opener and have you install it?',
        answer: 'Yes, if the model is compatible with your door height and weight. We reserve the right to refuse off-brand units without safety certifications. We warranty our labour; manufacturer warranty stays on the unit.',
      },
      {
        question: 'Belt or chain drive for Stittsville winters?',
        answer: 'Belt for noise and smoothness; chain for budget and simplicity in detached unheated garages. Both work in cold if lubricated properly — we set that up at install.',
      },
      {
        question: 'Do you install jackshaft openers on high ceilings?',
        answer: 'Yes. They are ideal when ceiling storage or tall vehicles block a traditional rail. We verify torsion bar clearance and wall structure first.',
      },
      {
        question: 'Will a new opener fix a heavy door?',
        answer: 'No. It might lift it once, but springs carry weight — openers guide. We balance the door or quote spring work before install so you do not void warranties.',
      },
      {
        question: 'How loud will it be in the room above?',
        answer: 'Belt-drive DC models are noticeably quieter than 15-year-old chain units. We can show decibel comparisons and recommend vibration isolation if joists transmit sound.',
      },
      {
        question: 'Can you install openers in a workshop with high ceilings?',
        answer: 'Yes with extension kits or jackshaft mounts. We measure headroom and side room first — photos by text help for a rough quote before the site visit.',
      },
    ],
  },
  'cable-repair': {
    slug: 'cable-repair',
    h1: 'Garage Door Cable Repair in Stittsville',
    metaDescription: 'Frayed or snapped garage door cable in Stittsville? Lift cable repair from $150. Drum re-seat, spring-related fixes. Same-day. (613) 777-6401.',
    heroSubtitle: 'Cable off the drum, door hanging crooked, or frayed strands near the bottom bracket — we re-seat, replace, and balance so both sides lift evenly.',
    intro: [
      'Garage door lift cables do the unglamorous work of connecting the bottom bracket to the drum while the springs rotate. When a cable frays or jumps the drum, the door skews, binds in the track, or drops on one corner — and the opener should not be used until it is fixed. We see cable calls across Stittsville after spring failures, after someone tried to force a stuck door, and on older Amberwood doors where corrosion met Ottawa slush.',
      'A cable job is never "just the cable" in isolation. The reason it failed matters. A worn spring changes tension; a bent bottom fixture cuts strands; a drum with chewed grooves chews the next cable faster. We inspect the full lift system on every visit to Fairwinds, Jackson Trails, Wyldewood, and Crossing Bridge — not only the one rusty wire you noticed.',
      'If one side of your door sits six inches higher than the other while closed, stop cycling it. Continuing bends the vertical track and can fold a panel. We lock the door safely, release tension correctly, install matched cables, and wind springs only when we have the training and tools on the truck — same standard we use on spring calls along Hazeldean and Main Street.',
      'Most cable repairs are same-day in Stittsville when drums and brackets are serviceable. We carry standard cable lengths for residential doors so you are not leaving the car outside overnight near Saunders Farm traffic on a busy fall weekend.',
      'Cable calls spike in Stittsville after spring breaks because homeowners try one more open cycle before calling. That last cycle often unspools cable on the drum and bends the bottom fixture — turning a spring job into spring plus cable plus minor track work. Calling early keeps the repair smaller.',
      'We explain drum condition in plain language: grooves that look like worn pulleys will shred a new cable in months. Replacing drums costs more than cable alone but cheaper than a repeat visit when you are headed to work on Hazeldean.',
      'Lift cables are not clothesline rope — they are swaged assemblies rated for door weight. The wrong diameter looks fine until it buries into the drum under load. We match OEM specs for the drums on your door, whether you have a standard 4-inch wrap or a high-lift setup on a tall RV bay near Fernbank.',
      'After repair we watch the door cycle slowly with you so you see even lift on both sides. If the door was crooked for a week, minor roller wear may still noise up until it seats — we flag that instead of calling it fixed while something still rubs. Honest follow-up beats a five-star sticker on a door that still grinds.',
    ],
    signs: [
      'One corner of the door hangs lower than the other when closed',
      'A cable is loose, slack, or looped off the drum — often after a spring snap on Bridlewood or Amberway drives',
      'Visible fraying or broken strands near the bottom bracket or drum',
      'The door binds halfway up on one side while the other side moves',
      'You hear scraping metal — the cable may be rubbing a bent track or misaligned drum',
      'The opener struggles or stops mid-travel because lift geometry is wrong',
      'Rust bulges on the cable near the bottom fixture — common on salted driveways in Wyldewood',
      'Cables look uneven on the drums when the door is closed — wrap count mismatch means something slipped',
    ],
    whyHappens: [
      'Cables fail after springs break because the remaining spring slams the door unevenly and overloads one cable. Homeowners in Jackson Trails sometimes try to open the door manually with one good spring; the drum spins faster on one side and spools cable wrong.',
      'Pulley wear on extension systems lets cables rub sharp edges until strands break. Fairwinds homes with original hardware often need pulleys at the same time as cables — we say so upfront.',
      'Moisture and road salt wick into bottom brackets. Freeze-thaw cycles at the slab edge flex the cable where it enters the ferrule. Eastern Ontario winters are hard on anything steel touching the floor.',
      'DIY spring videos rarely show cable seating order — homeowners unwind one side and the drum loses count. Professional re-seat takes training bars, winding discipline, and knowing when the door weight is actually on the cables versus the springs.',
      'Garage heaters and thaw cycles create drip lines that hit bottom brackets on sloped driveways — rust starts where water sits. Homes backing onto greenspace in Amberwood see more rodent chew on low cables than urban lots; we look for that on inspection.',
      'Ottawa Valley weather is the hidden mechanic on every garage door: freeze-thaw at the slab, salt on the apron, humidity in unheated bays, and UV on seals. Repairs that ignore climate fail again. We choose lubricants, seals, and hardware torque with winter in mind because Stittsville is not a mild-climate market — and your door cycles in that reality every day.',
    ],
    process: [
      {
        title: 'Secure the door',
        time: '10 min',
        body: 'We clamp or vise-grip the door in place, verify spring tension state, and plan whether controlled unwind is needed before touching cables.',
      },
      {
        title: 'Inspect drums, brackets, springs',
        time: '10 min',
        body: 'We check drum grooves, bottom fixtures, spring condition, and track alignment. We explain if a spring caused the cable failure.',
      },
      {
        title: 'Cable replacement',
        time: '20–30 min',
        body: 'We install matched cables, seat them on the drums with the door in the correct position, and verify even wrap counts on both sides.',
      },
      {
        title: 'Tension and balance',
        time: '10–15 min',
        body: 'With springs properly wound, we lift the door manually to midpoint and confirm it stays. We correct minor track issues that appeared from the skew.',
      },
      {
        title: 'Opener cycle test',
        time: '5 min',
        body: 'We run full travel, listen for rub points, and confirm the door closes square on the seal.',
      },
    ],
    pricing: [
      'Single lift cable replacement with a straightforward drum re-seat in Stittsville often starts around $150 for labour and standard cable.',
      'If both cables need replacement, drums are damaged, or a spring failed at the same time, pricing moves up — we bundle where it saves you a second visit.',
      'Bottom bracket replacement or track straightening from a crooked drop adds line items we quote on site.',
      'Starting prices are starting points — we confirm the final price on site after we see your door; we confirm after seeing drum condition and door weight.',
      'Emergency cable securing when the door is stuck partially open may cost more than a scheduled repair — we stabilize first, then quote full replacement.',
      'We serve all of Stittsville — Jackson Trails, Fairwinds, Amberwood, Wyldewood, Crossing Bridge, Bryanston Gate, and surrounding streets. Same typical price ranges whether you are five minutes from Main Street or west toward Fernbank.',
    ],
    durationNote: 'Expect 45–60 minutes for a standard cable swap when springs are stable and drums are healthy. Combined spring-and-cable jobs after a break take longer because tensioning must be done safely — plan 90+ minutes in those cases.',
    diyRisks: [
      'Releasing a cable off a drum under tension can whip metal across the garage',
      'Wrong cable diameter or length causes uneven lift and repeat failures',
      'Attempting to wind springs to seat cables without proper bars risks serious injury',
      'A crooked door released from the opener can fall on a vehicle',
      'Frayed cables cut gloves and hands — rust makes strands razor sharp',
      'Using vice-grips on a live cable frays strands and weakens the line — proper locking bars exist for a reason',
      'YouTube fixes filmed in warm climates do not account for -30°C hardware and frozen seals — what works in Texas binds in Stittsville.',
    ],
    relatedSlugs: ['spring-repair', 'track-repair', 'maintenance'],
    faqs: [
      {
        question: 'Is a cable issue always related to a broken spring?',
        answer: 'Often, but not always. Impact, rust, and worn drums can damage cables on their own. We diagnose the root cause so you are not replacing cables every few months.',
      },
      {
        question: 'Can I use the door with one cable off?',
        answer: 'No. The door is unstable and can twist off the tracks. Disconnect the opener and keep it closed until service if possible.',
      },
      {
        question: 'Do you replace both cables at once?',
        answer: 'Usually yes — if one failed from age, the mate is likely close behind. Matching pairs keep lift even.',
      },
      {
        question: 'Will insurance cover cable repair?',
        answer: 'Wear items are typically out of pocket. Impact damage from a vehicle may be different — we document with photos if you need them for a claim.',
      },
      {
        question: 'How do I know if the drum also needs replacement?',
        answer: 'We inspect grooves and end bearings. Shiny worn grooves or wobble mean drum replacement — we show you before we order parts.',
      },
      {
        question: 'My cable snapped on one side — can I pull the emergency release?',
        answer: 'Only if the door is fully closed and you understand it may drop unevenly. If one side is already higher, do not cycle the opener — call us. We secure the door with proper locking before we touch springs or cables.',
      },
      {
        question: 'Do you service Wyldewood and Crossing Bridge the same day as Main Street?',
        answer: 'Yes — same service area and same price ranges. We route west daily; distance inside Stittsville does not change how we quote cable or drum work.',
      },
    ],
  },
  'track-repair': {
    slug: 'track-repair',
    h1: 'Garage Door Track Repair in Stittsville',
    metaDescription: 'Bent garage door track repair in Stittsville from $150. Verticals, brackets, rollers back in line. Same-day. Wyldewood, Jackson Trails. (613) 777-6401.',
    heroSubtitle: 'Door jammed, gap at the vertical track, or rollers popping out — we straighten, replace sections, and realign so the door glides without grinding.',
    intro: [
      'Garage door track repair in Stittsville usually starts with a sound — metal grinding, a thump when the roller hits a bent spot, or silence because the door will not move past a certain height. Tracks guide the door; when verticals shift or horizontals sag, the whole system fights itself and the opener pays the price.',
      'We straighten minor bends, replace short track sections when steel is creased, reset brackets to the jamb, and swap damaged rollers so the door runs true. Wyldewood sees plenty of bottom vertical damage from hockey nets and bike bumps; Crossing Bridge three-car doors get top-section bind when a roller flat-spots from lack of lube.',
      'Tracks do not fail in a vacuum. A bent lower vertical often means the door dropped on one side because of a cable or spring issue. We fix the cause, not only hammer the steel back — otherwise you are back on Eaglewatch Drive next month with the same scrape marks.',
      'Same-day track work keeps your door sealing before the next snow on Hazeldean. We carry common vertical lengths and roller sizes for residential doors built in Stittsville from the 1980s through today\'s Mattamy stock.',
      'Track problems show up loudest on the first cold morning of the season when grease thickens and a slightly bent vertical becomes a full bind. Stittsville homeowners on Eaglewatch and Wild Senna often blame the opener when the door is physically fighting the rail — we separate those issues in the first five minutes on site.',
      'We carry roller sizes common to North American residential doors so a track job does not stop at straight steel while old nylon wheels keep carving the channel. Quiet travel after repair is the goal, not only "it moves."',
      'Horizontal track sag near the opener is another repeat issue when ceiling brackets loosen from opener vibration over years. The door rises fine then drops its nose into the weather seal — we square horizontals to manufacturer spacing and lag into solid framing, not just drywall on finished garage ceilings in Bryanston Gate.',
      'Track steel is galvanized but not magic — once bent past yield, heat-and-bend tricks weaken the channel. We would rather replace a short vertical than sell you a bend that releases under the next cold night. Stittsville homeowners who haul trailers and snowblowers feel that load on the bottom rollers first; we check those loads when we quote.',
    ],
    signs: [
      'The door sticks or stops at the same height every time',
      'You see a gap between the roller stem and the track channel',
      'The vertical track is visibly bent near the floor — common after light vehicle contact',
      'Rollers pop out of the track when opening — often top rollers on older Fairwinds doors',
      'Metal shavings or black dust under the track — worn rollers carving steel',
      'The door rubs the weather seal on one side only',
      'Loud grinding that got worse over weeks — usually rollers and track, not "just needs lube forever"',
      'Daylight visible between the vertical track and the jamb on one side — bracket failure or impact shift',
    ],
    whyHappens: [
      'Impact is the obvious one: tapping the vertical with a bumper while parking, or a basketball post shifting into the door path on Wyldewood Drive. Less obvious is slow bracket loosening — screws back out from vibration until the track moves and rollers bind.',
      'One bad roller forces others to carry extra load. Flat spots hammer the track every cycle until the steel bends. Maintenance skipped before Saunders Farm traffic season turns into track repair season.',
      'Spring or cable failures let the door fall crooked into the verticals. Fixing track without addressing lift components repeats the damage on the next cycle.',
      'High-cycle commercial-style rollers on residential doors in busy households wear flat — the flat spot hammers the track every rotation until the steel mushrooms outward. Swapping rollers during track service prevents a callback before Christmas travel.',
      'Settling garage slabs tilt the vertical track relative to the header over decades — common on 1980s Amberwood pads. Shimming brackets correctly matters more than muscling the door through a bind every day.',
      'Ottawa Valley weather is the hidden mechanic on every garage door: freeze-thaw at the slab, salt on the apron, humidity in unheated bays, and UV on seals. Repairs that ignore climate fail again. We choose lubricants, seals, and hardware torque with winter in mind because Stittsville is not a mild-climate market — and your door cycles in that reality every day.',
    ],
    process: [
      {
        title: 'Door position and safety',
        time: '5–10 min',
        body: 'We secure the door, disconnect the opener, and identify whether the bind is at the bottom, top, or horizontal curve.',
      },
      {
        title: 'Track and roller inspection',
        time: '10 min',
        body: 'We measure gap, check bracket spacing, inspect hinges, and look for creases that need replacement rather than bend-back.',
      },
      {
        title: 'Straighten or replace',
        time: '25–40 min',
        body: 'Minor bends get corrected with proper tools; crushed sections get replaced. We align verticals parallel and level horizontals to manufacturer spacing.',
      },
      {
        title: 'Roller and hardware',
        time: '15–20 min',
        body: 'We replace seized or worn rollers, tighten jamb brackets into solid framing, and verify lag screws on header supports.',
      },
      {
        title: 'Full travel test',
        time: '10 min',
        body: 'We run the door by hand then with the opener, adjust limits if needed, and confirm quiet travel through the full arc.',
      },
    ],
    pricing: [
      'Simple track straightening and bracket tightening in Stittsville often starts around $150 for labour when parts are sound.',
      'Replacing a short vertical section, multiple rollers, or both lower verticals increases cost with material — we quote before cutting steel.',
      'If the door dropped because of springs or cables, those repairs are line items we explain separately.',
      'Listed starting prices are starting points — we confirm the final price on site after we see your door; final numbers depend on track profile and damage extent.',
      'Multi-door properties with the same bend from a shared basketball net get per-door quotes — we do not assume both bays are identical without looking.',
      'We serve all of Stittsville — Jackson Trails, Fairwinds, Amberwood, Wyldewood, Crossing Bridge, Bryanston Gate, and surrounding streets. Same typical price ranges whether you are five minutes from Main Street or west toward Fernbank.',
    ],
    durationNote: 'Straightforward track alignment runs 60–90 minutes. Full lower vertical replacement on a double-car door can approach two hours when we replace rollers and reset cables. We pad estimates so you are not late for pickup at Sacred Heart because we rushed a bind test.',
    diyRisks: [
      'Hammering bent track without releasing door weight can collapse the section',
      'Loosening the wrong bracket drops the horizontal track on your head or the car',
      'Forcing a bound door with the opener bends panels and strips gear teeth',
      'Improper roller size falls out of track at the header curve',
      'Cutting track without supporting the door risks sudden drop',
      'Prying a bent vertical with a crowbar without unloading spring tension can snap the track into the car windshield',
      'YouTube fixes filmed in warm climates do not account for -30°C hardware and frozen seals — what works in Texas binds in Stittsville.',
    ],
    relatedSlugs: ['cable-repair', 'panel-repair', 'spring-repair'],
    faqs: [
      {
        question: 'Can bent track be straightened instead of replaced?',
        answer: 'Light bends sometimes yes. Deep creases or kinks mean replacement — straightening weakens steel and fails again quickly.',
      },
      {
        question: 'Why does my door bind only in winter?',
        answer: 'Metal contracts, grease thickens, and ice builds at the slab. We check seal contact and roller condition, not only the track.',
      },
      {
        question: 'Do I need new rollers with track repair?',
        answer: 'Often. Worn rollers caused the damage. We recommend swapping any flat-spotted rollers while the door is apart.',
      },
      {
        question: 'Will track repair fix a loud door?',
        answer: 'If noise came from bind or flat rollers, yes. If hinges are loose or springs are dry, we address those too in the same visit when possible.',
      },
      {
        question: 'Can a dented bottom section be saved?',
        answer: 'Panel dents are separate from track. If the panel is structurally fine, track work alone may be enough. Cracked or rusted-through steel may need a new door — we repair dents and edges where the section is still sound.',
      },
      {
        question: 'Should I fix track before panel repair?',
        answer: 'Yes. Bent tracks will damage repaired panels on the first cycle. We align track first, then quote panel work if still needed.',
      },
    ],
  },
  'panel-repair': {
    slug: 'panel-repair',
    h1: 'Garage Door Panel Repair in Stittsville',
    metaDescription:
      'Garage door panel repair in Stittsville from $150. Dents, rust edges, hinges, struts — in-place repair only. We do not swap sections. (613) 777-6401.',
    heroSubtitle:
      'Hockey puck dent, slow backup crease, or rust at the bottom edge — we repair panels in place. We do not remove or replace full sections.',
    intro: [
      'Garage door panel repair in Stittsville is for damage you can fix without swapping an entire section. We straighten minor dents where the steel is not cracked, treat rust at the bottom edge before it eats through, tighten hinge lines, add or replace struts, and touch up seal contact — all with the existing sections still on the door.',
      'We do not supply or install replacement panels. If a section is rusted through, cracked across the face, or a discontinued profile cannot be matched, we tell you upfront and discuss new door installation when that is the honest answer — not a patch that fails in one winter.',
      'Most panel calls on Fairwind Way, Jackson Trails, and Amberwood are impact dents from vehicles on tight driveways, basketball damage beside the court, or salt holding moisture on the lowest two feet of 1990s steel. When the panel skin is still structurally sound, in-place repair restores operation and curb appeal without freight, factory matching, or half a day to swap a 16-foot section.',
      'Repair is mechanical as well as cosmetic. A creased bottom edge binds rollers; loose hinges transfer stress every cycle; missing struts let wide doubles flex toward Saunders Farm winds. We fix the failure mode, not only what you see from the driveway.',
      'We photograph before and after for your records — useful if insurance covers vehicle impact minus deductible. We do not adjust claims; we document hinge lines and impact points so your conversation with the insurer stays factual.',
      'If rollers or track caused the panel damage, we quote that work too. Repairing steel while a seized roller keeps yanking the same edge is how dents come back before the next hockey season.',
    ],
    signs: [
      'A dent or crease in one section but no crack through the face — door still moves',
      'Surface rust or bubbled paint at the bottom edge before it rusts through',
      'Hinge bolts loose or elongated holes at a panel joint — door rattles on the way up',
      'One section flexes more than its neighbours — often missing or bent strut',
      'Bottom seal gap after impact — panel lip bent, not a full section failure',
      'DIY body filler or clamp marks that need proper prep and paint touch-up',
      'Vehicle tap that kinked the lower two feet but left upper decorative sections intact',
    ],
    whyHappens: [
      'Sheet steel handles compression along the panel face but folds on point impacts — hockey pucks, car corners, and bike bumps on Wyldewood driveways.',
      'Salt and slush sit on the bottom seal and wick into the lowest edge. Early rust repair stops a pinhole from becoming a full rust-through that only a new door fixes.',
      'Hinges and rollers transfer cyclic stress. A flat-spotted roller pulls the same panel corner until the steel creases — we repair the panel and fix the roller cause when needed.',
      'Wide double doors without struts flex in wind toward open fields; fatigue shows at hinge lines first. Adding strut is repair, not replacement.',
      'Ottawa Valley freeze-thaw makes minor binds worse — a small crease that scraped the track in October becomes a loud grind by January if ignored.',
    ],
    process: [
      {
        title: 'Damage assessment',
        time: '15–20 min',
        body: 'We inspect dents, rust depth, hinge lines, struts, and rollers. If the section is cracked through or delaminating, we stop and discuss new door options instead of promising a repair.',
      },
      {
        title: 'Door secured',
        time: '10–15 min',
        body: 'We support the door and release spring tension only when hinge or strut work requires it — not for every cosmetic dent.',
      },
      {
        title: 'Panel repair',
        time: '45–90 min',
        body: 'Dent straightening where safe, rust grind and prime, hinge reinforcement, strut install or straighten, and seal edge alignment — all in place on the existing section.',
      },
      {
        title: 'Hardware and balance check',
        time: '20–30 min',
        body: 'We verify rollers, track, and spring balance so the repaired panel is not fighting the rest of the system.',
      },
      {
        title: 'Cycle test',
        time: '10–15 min',
        body: 'Multiple full cycles, listen for bind, confirm opener limits and bottom seal contact.',
      },
    ],
    pricing: [
      'Panel repair in Stittsville typically runs $150–$400 for labour on in-place work — rust treatment, dent work, hinges, and struts. Material for struts or touch-up paint is extra when needed.',
      'We do not quote section replacement or factory panel orders. Severe damage is quoted as new door installation or declined honestly if repair would not last a season.',
      'Combined jobs (panel repair plus rollers, track, or spring balance) are itemized on one written quote before work starts.',
      'Starting prices are starting points — final price is confirmed on site after we see the steel, not from a phone photo alone.',
      'We serve all of Stittsville — Jackson Trails, Fairwinds, Amberwood, Wyldewood, Crossing Bridge, Bryanston Gate, and surrounding streets. Same typical price ranges whether you are five minutes from Main Street or west toward Fernbank.',
    ],
    durationNote:
      'Most panel repairs finish in 1–3 hours on site when parts are on the truck. Larger rust jobs or strut installs on wide doubles may run toward the top of that window.',
    diyRisks: [
      'Hammering a dent without supporting the back side stretches steel and cracks paint — worse than the original bump',
      'Grinding rust without primer lets moisture return under the paint bubble within one winter',
      'Clamping a bent section and cycling the opener — clamps shift and tear hinge bar holes through the panel',
      'Body filler on a flexing section cracks the first time the door bows in cold weather',
      'Ignoring loose hinges — repaired metal fails again at the same bolt line',
    ],
    relatedSlugs: ['new-door-installation', 'track-repair', 'spring-repair'],
    faqs: [
      {
        question: 'Do you replace garage door panels?',
        answer:
          'No. We repair panels in place — dents, rust edges, hinges, struts, and seal lines. If a section needs to be swapped, we discuss new door installation or refer you to a supplier who specializes in section replacement.',
      },
      {
        question: 'Can you fix a dent from backing into the door?',
        answer:
          'Often yes when the steel is not cracked and the section still tracks smoothly. We assess on site and set realistic expectations for how it will look from the street after repair.',
      },
      {
        question: 'What if the panel is rusted through?',
        answer:
          'Rust-through means the section is no longer structurally sound for in-place repair. We quote a new door when multiple sections are gone, or explain options if only one area failed but the rest of the door is near end of life.',
      },
      {
        question: 'Will panel repair match my door colour?',
        answer:
          'We touch up small areas where practical. We do not factory-match embossed sections or order replacement steel. Expect improvement, not a brand-new panel appearance.',
      },
      {
        question: 'Should I repair the panel or replace the whole door?',
        answer:
          'If one area is damaged and the door is otherwise sound, repair is usually the right call. Multiple rusted sections, a sagging frame, or a 25-year-old door often mean new installation is better economics — we say that plainly on site.',
      },
      {
        question: 'Do you repair window sections or glass inserts?',
        answer:
          'We address frame and hinge issues around window sections. Broken glass or full lite replacement is outside our in-place repair scope — we tell you what we can and cannot do before you book.',
      },
    ],
  },
  'new-door-installation': {
    slug: 'new-door-installation',
    h1: 'New Garage Door Installation in Stittsville',
    metaDescription: 'New garage door installation in Stittsville from $1,800. Insulated steel, carriage look, full hardware. Amberwood, Jackson Trails. (613) 777-6401.',
    heroSubtitle: 'Full door, tracks, springs, and hardware — sized for your opening, insulated for Ottawa winters, installed in one day when the opening is ready.',
    intro: [
      'New garage door installation in Stittsville is the right call when panels are rusted through, the frame is sagging, or you are renovating curb appeal on a 1989 Amberwood facade that still has the original thin steel. We remove the old door, install tracks, springs, hardware, and sections sized to your rough opening, and leave you with a balanced system — not just pretty panels that fight the opener.',
      'Most homeowners choose insulated steel — R-value matters when the garage shares a wall with the house or when you use the space as a gym or workshop off Village Green Drive. Carriage-style wood-look doors are popular on Crossing Bridge and Fernbank executive fronts; we handle weight ratings so springs match from day one.',
      'We work new construction rough openings on Bryanston Gate, replacement on Fairwinds split-levels, and upgrades on Jackson Trails where the builder-grade door is noisy and uninsulated. Stittsville wind loads and snow on the slab mean bottom seals and reinforcement struts are not optional extras — they are part of a proper install.',
      'Installation day includes haul-away of the old door when possible, perimeter seal check, and opener compatibility review. If your opener is undersized for a heavier insulated door, we say so before install — not after the first failed close attempt on a January night.',
      'A new door changes how the house feels — less draft in the mudroom on a Jackson Trails split, less road noise on a Hazeldean-facing Fairwinds garage, better street presence when you are listing before spring market. We treat install as a system: door, springs, tracks, seals, and opener compatibility together.',
      'Winter installs happen in Stittsville when a door fails during a cold snap and you cannot wait until April. We use cold-weather procedures for seal contact and lubricant choice so the first week of operation is not a series of stuck closes on the slab ice rim.',
      'Colour and window layouts are not just cosmetic — they affect weight and spring sizing. A full-view aluminum section weighs differently than a solid insulated panel. We weigh the door after hang and wind springs to spec instead of copying the old spring color code from a door that is already in the landfill.',
      'Post-install we leave you with spring color codes written on the jamb, maintenance intervals, and opener force settings recorded — the next tech or future you knows what was done. A new door is a fifteen-to-twenty-year decision in this climate; five minutes of documentation at handoff prevents guesswork later.',
    ],
    signs: [
      'Multiple sections rusted or delaminating — in-place panel repair will not last',
      'The door sags in the middle despite spring and track service',
      'You are renovating and the old door profile clashes with new siding on Main Street',
      'Energy bills and cold rooms suggest poor insulation on a garage attached to the house',
      'The old door has no modern safety hardware and cannot be economically upgraded',
      'Noise and vibration from thin single-layer steel bother bedrooms above the garage',
      'Insurance or sale inspection flagged the garage door as end-of-life',
      'You want windows or carriage hardware but the current frame cannot support the weight — structural review first',
    ],
    whyHappens: [
      'Doors age out on a 20–30 year horizon in Eastern Ontario. Salt, sun, and cycle count win over paint and galvanizing. Amberwood and Fairwinds stock from the 1980s is hitting that wall now in waves.',
      'Upgrades follow lifestyle changes — EV charging in the garage needs a reliable door seal; home gyms need warmer spaces; resale wants street presence on streets feeding Hazeldean commuters.',
      'Builder-grade doors on 2000s subdivisions prioritize cost over insulation and cycle rating. Replacing before the third spring failure saves cumulative repair bills.',
      'Tax credits and energy programs change year to year — we do not promise rebates, but we document insulation values on your invoice if your accountant or energy auditor needs them for a home upgrade file.',
      'City snow clearing and narrow plow piles on some Main Street area driveways mean wider doors or side-mounted openers get considered during replacement — we advise on clearance before you order.',
      'Ottawa Valley weather is the hidden mechanic on every garage door: freeze-thaw at the slab, salt on the apron, humidity in unheated bays, and UV on seals. Repairs that ignore climate fail again. We choose lubricants, seals, and hardware torque with winter in mind because Stittsville is not a mild-climate market — and your door cycles in that reality every day.',
    ],
    process: [
      {
        title: 'Measure and quote',
        time: '30 min visit',
        body: 'We measure rough opening, headroom, and side room; discuss insulation, windows, and colour; confirm opener suitability.',
      },
      {
        title: 'Remove old door',
        time: '45–60 min',
        body: 'We safely release springs, remove sections and tracks, inspect jambs for rot or framing issues common on older Stittsville garages.',
      },
      {
        title: 'Install tracks and hardware',
        time: '60–90 min',
        body: 'We mount verticals and horizontals square, install torsion spring assembly rated for door weight, and hang rear tracks.',
      },
      {
        title: 'Hang sections',
        time: '90–120 min',
        body: 'We stack sections, install hinges and struts, set rollers, and verify alignment through the full travel path.',
      },
      {
        title: 'Balance, seal, opener hookup',
        time: '45–60 min',
        body: 'We wind springs, test manual balance, attach opener if included, set limits, and review maintenance with you.',
      },
    ],
    pricing: [
      'New garage door installation in Stittsville typically starts around $1,800 for a standard single insulated steel door installed — double doors, windows, and premium carriage profiles increase material cost significantly.',
      'Opener installation, structural framing repairs, and electrical work are quoted separately when needed.',
      'We provide written quotes with door model, insulation value, warranty, and labour — no vague "starting at" without context on the phone.',
      'All starting figures are starting points — we confirm the final price on site after we see your door; custom sizes and commercial-height openings are priced after measurement.',
      'Financing and deposit terms are explained in writing before we order custom doors — final totals depend on size, insulation, and hardware choices after measurement.',
      'We serve all of Stittsville — Jackson Trails, Fairwinds, Amberwood, Wyldewood, Crossing Bridge, Bryanston Gate, and surrounding streets. Same typical price ranges whether you are five minutes from Main Street or west toward Fernbank.',
    ],
    durationNote: 'Most residential installs take 4–6 hours with two technicians on a standard double-car opening. Odd sizes, rotted jambs, or combined opener upgrades extend the day — we book accordingly so quality does not get rushed before sunset on short winter days.',
    diyRisks: [
      'Door weight on a DIY install has caused fatal accidents — springs must be wound by trained installers',
      'Wrong spring rating snaps cables or bends tracks within weeks',
      'Improper headroom measurement orders a door that cannot physically fit',
      'Cutting tracks on site without deburring destroys rollers',
      'Voided manufacturer warranty when install is not professional',
      'Ordering online without measuring headroom for track radius — doors arrive that cannot physically operate in low garages',
      'YouTube fixes filmed in warm climates do not account for -30°C hardware and frozen seals — what works in Texas binds in Stittsville.',
    ],
    relatedSlugs: ['panel-repair', 'opener-installation', 'maintenance'],
    faqs: [
      {
        question: 'What R-value do I need for a Stittsville garage?',
        answer: 'Attached garages benefit from higher R-value insulated doors; detached unheated sheds can use lower specs. We recommend based on how you use the space, not only upfront cost.',
      },
      {
        question: 'Can you reuse my existing opener?',
        answer: 'Sometimes. We check horsepower, rail length, and condition. Heavier doors may need an upgrade — we tell you before install day.',
      },
      {
        question: 'How long from order to install?',
        answer: 'Popular sizes often arrive within 1–2 weeks; custom colours or windows can take longer. We schedule install as soon as parts land.',
      },
      {
        question: 'Do you haul away the old door?',
        answer: 'Yes on standard jobs. We leave the site clean — no panels leaning against the fence for you to drag to the curb.',
      },
      {
        question: 'Do I need a permit in Stittsville?',
        answer: 'Most residential like-for-like replacements do not. Structural opening changes may — we flag if your renovation alters the header.',
      },
      {
        question: 'Will a new door work with my smart home?',
        answer: 'New openers integrate with common platforms. We can install or recommend compatible openers during the same project.',
      },
      {
        question: 'What brands do you install?',
        answer: 'We work with major North American manufacturers suited to Ottawa climate. Brand choice affects lead time, colour range, and warranty — we narrow options at the measure visit.',
      },
    ],
  },
  'maintenance': {
    slug: 'maintenance',
    h1: 'Garage Door Maintenance & Tune-Up in Stittsville',
    metaDescription: 'Garage door tune-up in Stittsville from $150. Lube, balance, safety test, hardware tighten. Before winter hits. (613) 777-6401.',
    heroSubtitle: 'Forty-five minutes that catches worn rollers, loose bolts, and a door heading for a spring snap — scheduled before Ottawa winter or after a noisy season.',
    intro: [
      'Garage door maintenance in Stittsville is the cheapest way to avoid the expensive call — the spring break on the coldest morning, the cable off the drum before you drive to Saunders Farm, or the opener gear stripped because the door was out of balance all summer. A tune-up is lube where it belongs, hardware torqued to spec, balance checked with the opener disconnected, and safety devices tested the way they would matter if a kid ducked under a closing door.',
      'We see maintenance spikes in September and October when homeowners along Hazeldean and in Fairwinds remember what -25°C feels like on a door that has not been touched in years. Jackson Trails owners book after the first noisy season on a new-to-them home; Amberwood owners book because they know their original springs are living on borrowed time.',
      'A proper tune-up is not spray-and-pray. We hit hinges and rollers with the right product for cold climates, avoid greasing tracks where rollers need to roll not slide, tighten flag brackets and spring anchor plates, and test force and auto-reverse on the opener. We tell you if a spring is counting down cycles — honest notice beats a surprise bang.',
      'At $150 starting, maintenance pays for itself if it prevents one emergency visit. We service every Stittsville neighbourhood from Bryanston Gate new builds to 1980s Amberwood Village stock before the Village Square Park rink season fills your calendar.',
      'Maintenance visits are when we meet your door before it is an emergency — kids heading back to Sacred Heart, snow tires stacked against the wall, the opener cycling four times before breakfast. A tuned door is boring, and boring is good.',
      'Landlords with rentals near Stittsville Main and property managers with multiple doors on one cul-de-sac book maintenance on a schedule so tenants are not calling at midnight with a spring bang. We keep records of what we tightened last year so repeat issues are visible.',
      'We also check weather seal contact along the full width — a seal that gaps on one corner lets mice and slush in, and tricks the opener into thinking it hit an obstruction. Replacing a retainer during maintenance is cheaper than diagnosing mysterious reversals all winter on Wyldewood Drive.',
      'Tune-ups are also when we meet your pets and kids — we keep the work area blocked while the door is disconnected and we explain the red release handle so nobody tests it as a toy. Safety is part of maintenance, not a separate lecture. If we see an expired photo-eye lens cracked from hockey, we mention it before someone assumes the opener is "just slow."',
    ],
    signs: [
      'The door rattles or squeals on the first lift of the day — dry rollers and hinges',
      'It has been more than two years since anyone looked at the springs and cables',
      'The opener strains mid-travel but springs look OK at a glance — often balance drift',
      'You are buying a home in Stittsville and want a baseline before winter possession',
      'Remote works but auto-reverse has never been tested with a real obstruction',
      'Rust dust on the floor under the bottom brackets after a wet spring',
      'You are planning panel repair or opener install and want the rest of the system verified first',
      'Door shakes the house frame on the top section — hinge wear or loose flag bracket, caught early at tune-up',
    ],
    whyHappens: [
      'Garage doors are the largest moving part of the house and the most ignored. Dust, temperature, and vibration loosen hardware gradually — not dramatically until something fails.',
      'Homeowners lube the chain but not the hinges, or grease the track so rollers skid instead of roll. Wrong maintenance causes problems maintenance was supposed to prevent.',
      'Stittsville climate accelerates wear: salt on the apron, UV on seals, cold on springs. Annual tune-ups align with how Ottawa Valley homes actually live.',
      'Paint and caulk on wooden jambs around older Fairwinds garages crack in freeze-thaw — water rots the jamb and shifts the vertical track. Maintenance notes catch early rot before a full reframing job.',
      'Garage door neglect often continues until a real estate inspection lists "service recommended" — we provide a written summary you can attach to a listing or keep for your file.',
      'Ottawa Valley weather is the hidden mechanic on every garage door: freeze-thaw at the slab, salt on the apron, humidity in unheated bays, and UV on seals. Repairs that ignore climate fail again. We choose lubricants, seals, and hardware torque with winter in mind because Stittsville is not a mild-climate market — and your door cycles in that reality every day.',
    ],
    process: [
      {
        title: 'Visual and safety scan',
        time: '5 min',
        body: 'We look at cables, springs, drums, bottom brackets, and tracks for fray, gap, or bend. We note anything that needs repair beyond tune-up scope.',
      },
      {
        title: 'Hardware torque',
        time: '10 min',
        body: 'We tighten track brackets, hinge bolts, and opener mounting — vibration loosens these on doors near busy streets like Main and Hazeldean.',
      },
      {
        title: 'Lubrication',
        time: '10 min',
        body: 'We lubricate hinges, rollers, and bearing plates with products suited for cold; we clean excessive buildup on tracks if present.',
      },
      {
        title: 'Balance test',
        time: '10 min',
        body: 'Opener disconnected, we lift the door to midpoint and verify it holds — out-of-balance doors get a recommendation, not a silent ignore.',
      },
      {
        title: 'Opener safety and report',
        time: '10 min',
        body: 'We test force, travel, photo-eyes, and auto-reverse. You get a plain summary: good for winter, or schedule spring/cable work soon.',
      },
    ],
    pricing: [
      'A standard residential garage door tune-up in Stittsville starts at $150 for the visit described above on a single door.',
      'Second doors on the same property, commercial-size doors, or repairs discovered during the tune-up are quoted separately before we proceed.',
      'We do not turn maintenance into a surprise parts bill — if a roller is bad, we show you and you decide.',
      'The $150 tune-up is our standard single-door rate; multi-door packages may be discounted when booked together.',
      'Booking maintenance the same week as a neighbour on your street sometimes qualifies for a block discount — ask when scheduling multiple homes in Jackson Trails or Fairwinds.',
      'We serve all of Stittsville — Jackson Trails, Fairwinds, Amberwood, Wyldewood, Crossing Bridge, Bryanston Gate, and surrounding streets. Same typical price ranges whether you are five minutes from Main Street or west toward Fernbank.',
    ],
    durationNote: 'Most tune-ups take about 45 minutes per door when no repairs are needed. If we find a frayed cable or cracked spring, we may extend the visit or schedule a follow-up with parts — your choice, not pressure.',
    diyRisks: [
      'Testing springs by hand without training misjudges remaining cycle life',
      'WD-40 on tracks attracts grit; proper roller lube is different from what most homeowners grab',
      'Over-tightening hinge bolts strips square holes in door sections',
      'Bypassing safety tests leaves you liable if the door does not reverse on a person',
      'Adjusting opener force without balance check burns motors',
      'Spraying silicone on nylon rollers — some formulations attract dust and gum up faster than dry rollers',
      'YouTube fixes filmed in warm climates do not account for -30°C hardware and frozen seals — what works in Texas binds in Stittsville.',
    ],
    relatedSlugs: ['spring-repair', 'opener-repair', 'track-repair'],
    faqs: [
      {
        question: 'How often should I service my garage door in Ottawa?',
        answer: 'Once a year is right for most Stittsville homes — fall before winter is ideal. Heavy daily use or doors over 15 years old benefit from twice yearly.',
      },
      {
        question: 'Is maintenance worth it on an old door?',
        answer: 'Yes for safety and to know when to stop repairing. We will tell you if the door is near replacement so you are not tuning up dead steel.',
      },
      {
        question: 'Do you replace parts during a tune-up?',
        answer: 'Only with approval. Minor items like rollers may be swappable on the spot if stocked; springs and panels are quoted first.',
      },
      {
        question: 'Will maintenance void my warranty?',
        answer: 'Professional maintenance supports warranties on new doors and openers. DIY botched adjustments can void them — another reason to have a tech document the visit.',
      },
      {
        question: 'Can you maintain commercial doors?',
        answer: 'Our focus is residential Stittsville homes. Light commercial roll-ups may be possible — ask when you call with sizes and photos.',
      },
      {
        question: 'What is included vs extra on a tune-up?',
        answer: 'Included: inspection, lube of moving parts, hardware torque, balance check, opener safety test. Extra: parts and any repair labor — always quoted before we proceed.',
      },
    ],
  },
};

export function getServiceContent(slug: string): ServicePageContent | undefined {
  return serviceContents[slug];
}
