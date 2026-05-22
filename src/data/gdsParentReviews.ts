export type GdsParentReview = {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  text: string;
  attribution: string;
};

export const gdsParentReviews: GdsParentReview[] = [
  {
    id: 'vin',
    author: 'Vin',
    location: 'Ottawa',
    serviceType: 'Same-day repair',
    text: 'Super fast and excellent service. I highly recommend to anyone in need of garage door repair or replacement. My door broke late last night and it\'s already repaired the next day. Very professional with excellent pricing.',
    attribution: 'Originally reviewed on GDS Ottawa',
  },
  {
    id: 'crystal-c',
    author: 'Crystal C.',
    location: 'Ottawa',
    serviceType: 'Same-day repair',
    text: 'Within less than one hour from our initial contact we had a return call from GDS and scheduled a visit. Within half an hour our garage door was repaired and the gentleman that came was pleasant. Bonus was the price was more competitive than the \'priority\' company that has yet to answer our request from last week. GDS was friendly, efficient, and cost competitive. A great experience.',
    attribution: 'Customer of our parent service, GDS Ottawa',
  },
  {
    id: 'jean-r',
    author: 'Jean R.',
    location: 'Ottawa',
    serviceType: 'Garage door repair',
    text: 'Excellent service. They responded very quickly to my call, and the problem was fixed in less than half a day. Fair price, professional work, and a very smooth experience overall. Highly recommended.',
    attribution: 'Job completed under GDS — Garage Doors & Openers Ottawa',
  },
];

export const gdsAttributionPhrases = [
  'Originally reviewed on GDS Ottawa',
  'Customer of our parent service, GDS Ottawa',
  'Job completed under GDS — Garage Doors & Openers Ottawa',
  'From GDS Ottawa — our parent operation',
] as const;
