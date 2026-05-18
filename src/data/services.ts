export type Service = {
  slug: string;
  name: string;
  fullName: string;
  startingPrice: number;
  priceLabel?: string;
  duration: string;
  icon: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: 'spring-repair',
    name: 'Spring Repair',
    fullName: 'Garage Door Spring Repair',
    startingPrice: 250,
    duration: '60–90 min',
    icon: 'spring',
    summary: 'Broken torsion or extension spring replaced same day.',
  },
  {
    slug: 'opener-repair',
    name: 'Opener Repair',
    fullName: 'Garage Door Opener Repair',
    startingPrice: 150,
    duration: '45–90 min',
    icon: 'opener',
    summary: 'LiftMaster, Chamberlain, Genie — motors, sensors, remotes.',
  },
  {
    slug: 'opener-installation',
    name: 'Opener Installation',
    fullName: 'Garage Door Opener Installation',
    startingPrice: 550,
    duration: '2–3 hours',
    icon: 'install',
    summary: 'New belt-drive or chain-drive opener mounted and programmed.',
  },
  {
    slug: 'cable-repair',
    name: 'Cable Repair',
    fullName: 'Garage Door Cable Repair',
    startingPrice: 180,
    duration: '45–60 min',
    icon: 'cable',
    summary: 'Frayed or snapped lift cables and drum re-seat.',
  },
  {
    slug: 'track-repair',
    name: 'Track Repair',
    fullName: 'Garage Door Track Repair',
    startingPrice: 200,
    duration: '60–90 min',
    icon: 'track',
    summary: 'Bent verticals, loose brackets, rollers back in the channel.',
  },
  {
    slug: 'panel-replacement',
    name: 'Panel Replacement',
    fullName: 'Garage Door Panel Replacement',
    startingPrice: 400,
    priceLabel: '$400 per panel',
    duration: '2–4 hours',
    icon: 'panel',
    summary: 'Single section swap when the rest of the door is sound.',
  },
  {
    slug: 'new-door-installation',
    name: 'New Door Installation',
    fullName: 'New Garage Door Installation',
    startingPrice: 1800,
    duration: '4–6 hours',
    icon: 'door',
    summary: 'Full door and hardware — steel, carriage, or wood-look.',
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    fullName: 'Garage Door Maintenance & Tune-Up',
    startingPrice: 129,
    duration: '45 min',
    icon: 'wrench',
    summary: 'Lube, balance check, hardware tighten, safety test.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
