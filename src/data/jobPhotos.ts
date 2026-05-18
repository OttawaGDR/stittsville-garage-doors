export type JobPhoto = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  services: string[];
  featured?: boolean;
  hero?: boolean;
};

export const jobPhotos: JobPhoto[] = [
  {
    id: 'hero-door',
    src: '/images/jobs/black-garage-door-windows-stittsville.png',
    alt: 'New black sectional garage door with windows installed in Stittsville',
    caption: 'New insulated door install — Stittsville winter',
    width: 900,
    height: 1200,
    services: ['new-door-installation'],
    featured: true,
    hero: true,
  },
  {
    id: 'spring-broken',
    src: '/images/jobs/broken-torsion-springs-stittsville.png',
    alt: 'Broken garage door torsion springs removed during repair in Stittsville',
    caption: 'Broken torsion springs — same-day replacement',
    width: 900,
    height: 1200,
    services: ['spring-repair', 'emergency'],
    featured: true,
  },
  {
    id: 'spring-parts',
    src: '/images/jobs/torsion-spring-replacement-parts-stittsville.png',
    alt: 'Garage door torsion springs and rollers stocked for Stittsville repair',
    width: 900,
    height: 1200,
    services: ['spring-repair', 'maintenance'],
    featured: true,
  },
  {
    id: 'opener-chamberlain',
    src: '/images/jobs/chamberlain-myq-opener-install-stittsville.png',
    alt: 'Chamberlain myQ garage door opener installation in Stittsville',
    width: 900,
    height: 1200,
    services: ['opener-installation', 'opener-repair'],
    featured: true,
  },
  {
    id: 'opener-mount',
    src: '/images/jobs/chamberlain-opener-ceiling-mount-stittsville.png',
    alt: 'Chamberlain belt-drive opener ceiling mount in Stittsville garage',
    width: 900,
    height: 1200,
    services: ['opener-installation'],
  },
  {
    id: 'opener-arm',
    src: '/images/jobs/garage-door-opener-arm-bracket-stittsville.png',
    alt: 'Garage door opener arm and reinforcement bracket repair in Stittsville',
    width: 900,
    height: 1200,
    services: ['opener-repair', 'spring-repair'],
  },
  {
    id: 'roller-bracket',
    src: '/images/jobs/nylon-roller-bottom-bracket-stittsville.png',
    alt: 'Nylon garage door roller in bottom bracket and vertical track, Stittsville',
    width: 900,
    height: 1200,
    services: ['track-repair', 'maintenance'],
    featured: true,
  },
  {
    id: 'roller-replace',
    src: '/images/jobs/garage-door-roller-replacement-stittsville.png',
    alt: 'Worn vs new nylon garage door rollers during tune-up in Stittsville',
    width: 900,
    height: 1200,
    services: ['maintenance', 'track-repair'],
  },
  {
    id: 'cable-bracket',
    src: '/images/jobs/garage-door-lift-cable-bracket-stittsville.png',
    alt: 'Garage door lift cable and bottom bracket under tension, Stittsville',
    width: 900,
    height: 1200,
    services: ['cable-repair', 'spring-repair'],
  },
  {
    id: 'panel-bent',
    src: '/images/jobs/bent-garage-door-panel-winter-stittsville.png',
    alt: 'Bent garage door panel after winter impact in Stittsville',
    width: 900,
    height: 1200,
    services: ['panel-repair', 'track-repair', 'emergency'],
  },
  {
    id: 'panel-after',
    src: '/images/jobs/garage-door-panel-replacement-after-stittsville.png',
    alt: 'Garage door panel repair completed in Stittsville winter',
    width: 900,
    height: 1200,
    services: ['panel-repair', 'new-door-installation'],
    featured: true,
  },
  {
    id: 'door-grey',
    src: '/images/jobs/grey-sectional-door-install-stittsville.png',
    alt: 'Grey raised-panel garage door installation on brick home in Stittsville',
    width: 900,
    height: 1200,
    services: ['new-door-installation'],
  },
  {
    id: 'door-keypad',
    src: '/images/jobs/black-garage-door-keypad-stittsville.png',
    alt: 'Black garage door with wireless keypad installed in Stittsville',
    width: 900,
    height: 1200,
    services: ['opener-installation', 'new-door-installation'],
  },
  {
    id: 'jamb-rot',
    src: '/images/jobs/garage-door-jamb-rot-sensor-stittsville.png',
    alt: 'Garage door track, safety sensor, and jamb repair in Stittsville winter',
    width: 900,
    height: 1200,
    services: ['track-repair', 'opener-repair'],
  },
];

export function getHeroPhoto(): JobPhoto {
  return jobPhotos.find((p) => p.hero) ?? jobPhotos[0]!;
}

export function getPhotosForService(slug: string, limit = 3): JobPhoto[] {
  return jobPhotos.filter((p) => p.services.includes(slug)).slice(0, limit);
}

export function getFeaturedPhotos(limit = 6): JobPhoto[] {
  const featured = jobPhotos.filter((p) => p.featured && !p.hero);
  return featured.slice(0, limit);
}

export function getBeforeAfter(): { before: JobPhoto; after: JobPhoto } {
  return {
    before: jobPhotos.find((p) => p.id === 'panel-bent')!,
    after: jobPhotos.find((p) => p.id === 'panel-after')!,
  };
}
