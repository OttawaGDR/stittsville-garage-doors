export type PriceRow = {
  job: string;
  startingAt: number;
  note?: string;
  serviceSlug?: string;
};

export const serviceCallFee = 89;

export const pricingTable: PriceRow[] = [
  { job: 'Service call (diagnosis)', startingAt: serviceCallFee, note: 'Applied to repair if you proceed same visit' },
  { job: 'Spring repair (single torsion)', startingAt: 250, serviceSlug: 'spring-repair' },
  { job: 'Opener repair', startingAt: 150, serviceSlug: 'opener-repair' },
  { job: 'Cable repair', startingAt: 180, serviceSlug: 'cable-repair' },
  { job: 'Track realignment', startingAt: 200, serviceSlug: 'track-repair' },
  { job: 'Maintenance tune-up', startingAt: 129, serviceSlug: 'maintenance' },
  { job: 'Opener installation', startingAt: 550, serviceSlug: 'opener-installation' },
  { job: 'Panel replacement', startingAt: 400, note: 'Per panel', serviceSlug: 'panel-replacement' },
  { job: 'New door installation', startingAt: 1800, serviceSlug: 'new-door-installation' },
];

export const homepagePricingSnapshot = pricingTable.filter((r) =>
  ['spring-repair', 'opener-repair', 'cable-repair', 'track-repair', 'maintenance', 'opener-installation'].includes(
    r.serviceSlug ?? '',
  ),
).slice(0, 6);
