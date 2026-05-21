export type PriceRow = {
  job: string;
  startingAt: number;
  priceHigh?: number;
  note?: string;
  serviceSlug?: string;
};

/** Same model as GDS Ottawa — written quote on site before work; no separate dispatch fee. */
export const pricingPolicy = {
  freeOnSiteEstimate: true,
  seniorsVeteransDiscountPercent: 10,
} as const;

export const pricingTable: PriceRow[] = [
  {
    job: 'Torsion spring replacement (single door)',
    startingAt: 250,
    priceHigh: 350,
    serviceSlug: 'spring-repair',
    note: 'Both springs recommended on double doors — typically $450–$550',
  },
  {
    job: 'Cable repair or replacement',
    startingAt: 150,
    priceHigh: 250,
    serviceSlug: 'cable-repair',
  },
  {
    job: 'Garage door opener repair',
    startingAt: 150,
    priceHigh: 300,
    serviceSlug: 'opener-repair',
    note: 'Gears, motor, sensors, remotes',
  },
  {
    job: 'Track adjustment or repair',
    startingAt: 150,
    priceHigh: 250,
    serviceSlug: 'track-repair',
  },
  {
    job: 'Off-track door (re-set & minor repair)',
    startingAt: 200,
    priceHigh: 400,
  },
  {
    job: 'Garage door panel repair',
    startingAt: 150,
    priceHigh: 400,
    serviceSlug: 'panel-repair',
    note: 'Dents, rust treatment, hinges, struts — in-place repair only',
  },
  {
    job: 'Photo-eye sensor repair',
    startingAt: 150,
    priceHigh: 200,
  },
  {
    job: 'Roller replacement (set)',
    startingAt: 150,
    priceHigh: 200,
  },
  {
    job: 'Annual maintenance / tune-up (21-point)',
    startingAt: 150,
    priceHigh: 180,
    serviceSlug: 'maintenance',
  },
  {
    job: 'Bottom seal & aluminium retainer',
    startingAt: 250,
    priceHigh: 350,
    serviceSlug: 'weather-seal',
    note: 'Includes new aluminum retainer, rubber seal, and side/top weather stripping if needed',
  },
  {
    job: 'New opener installed',
    startingAt: 650,
    priceHigh: 950,
    serviceSlug: 'opener-installation',
    note: 'Chain $650–$750 · Belt $750–$850 · Smart WiFi $850–$950',
  },
  {
    job: 'New insulated garage door installed',
    startingAt: 1800,
    priceHigh: 2500,
    serviceSlug: 'new-door-installation',
    note: 'Single door; double doors typically $2,500–$3,500',
  },
];

export const homepagePricingSnapshot = pricingTable.filter((r) =>
  ['spring-repair', 'cable-repair', 'opener-repair', 'track-repair', 'maintenance', 'opener-installation'].includes(
    r.serviceSlug ?? '',
  ),
);
