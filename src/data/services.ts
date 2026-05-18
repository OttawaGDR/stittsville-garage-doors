export type Service = {
  slug: string;
  name: string;
  fullName: string;
  startingPrice: number;
  priceHigh?: number;
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
    priceHigh: 350,
    priceLabel: '$250–$350',
    duration: '60–90 min',
    icon: 'spring',
    summary: 'Broken torsion or extension spring replaced same day.',
  },
  {
    slug: 'opener-repair',
    name: 'Opener Repair',
    fullName: 'Garage Door Opener Repair',
    startingPrice: 150,
    priceHigh: 300,
    priceLabel: '$150–$300',
    duration: '45–90 min',
    icon: 'opener',
    summary: 'LiftMaster, Chamberlain, Genie — motors, sensors, remotes.',
  },
  {
    slug: 'opener-installation',
    name: 'Opener Installation',
    fullName: 'Garage Door Opener Installation',
    startingPrice: 650,
    priceHigh: 950,
    priceLabel: '$650–$950 installed',
    duration: '2–3 hours',
    icon: 'install',
    summary: 'Chain, belt, or smart WiFi opener — mounted, programmed, safety-tested.',
  },
  {
    slug: 'cable-repair',
    name: 'Cable Repair',
    fullName: 'Garage Door Cable Repair',
    startingPrice: 150,
    priceHigh: 250,
    priceLabel: '$150–$250',
    duration: '45–60 min',
    icon: 'cable',
    summary: 'Frayed or snapped lift cables and drum re-seat.',
  },
  {
    slug: 'track-repair',
    name: 'Track Repair',
    fullName: 'Garage Door Track Repair',
    startingPrice: 150,
    priceHigh: 250,
    priceLabel: '$150–$250',
    duration: '60–90 min',
    icon: 'track',
    summary: 'Bent verticals, loose brackets, rollers back in the channel.',
  },
  {
    slug: 'panel-replacement',
    name: 'Panel Replacement',
    fullName: 'Garage Door Panel Replacement',
    startingPrice: 250,
    priceHigh: 500,
    priceLabel: '$250–$500 per section',
    duration: '2–4 hours',
    icon: 'panel',
    summary: 'Single section swap when the rest of the door is sound.',
  },
  {
    slug: 'new-door-installation',
    name: 'New Door Installation',
    fullName: 'New Garage Door Installation',
    startingPrice: 1800,
    priceHigh: 2500,
    duration: '4–6 hours',
    icon: 'door',
    summary: 'Full door and hardware — steel, carriage, or wood-look.',
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    fullName: 'Garage Door Maintenance & Tune-Up',
    startingPrice: 150,
    priceHigh: 180,
    priceLabel: '$150–$180',
    duration: '45–60 min',
    icon: 'wrench',
    summary: 'Lube, balance check, hardware tighten, safety test.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
