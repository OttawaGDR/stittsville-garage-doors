export type Review = {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  date: string;
  rating: 5;
  text: string;
};

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Diana G.',
    location: 'Jackson Trails, Stittsville',
    serviceType: 'General repair',
    date: '2025-09-14',
    rating: 5,
    text: 'Very professional and kind. Excellent work and they responded to our call extremely fast. We will definitely call again.',
  },
  {
    id: '2',
    author: 'Jean R.',
    location: 'Fairwinds, Stittsville',
    serviceType: 'Same-day repair',
    date: '2025-10-22',
    rating: 5,
    text: 'Excellent service. They responded very quickly to my call, and the problem was fixed in less than half a day. Fair price, professional work, and a very smooth experience overall. Highly recommended.',
  },
  {
    id: '3',
    author: 'J. P.',
    location: 'Wyldewood, Stittsville',
    serviceType: 'Spring repair',
    date: '2025-08-03',
    rating: 5,
    text: 'Fast service and a pleasant technician. Took away all the old parts and left the place neat as they found it.',
  },
  {
    id: '4',
    author: 'Robin G.',
    location: 'Amberwood, Stittsville',
    serviceType: 'General repair',
    date: '2025-07-19',
    rating: 5,
    text: 'Great service — very professional, arrives on time, and has the tools to address any garage door issue. Reasonable charges. Thanks.',
  },
  {
    id: '5',
    author: 'Ilan D.',
    location: 'Bryanston Gate, Stittsville',
    serviceType: 'Same-day service',
    date: '2025-11-02',
    rating: 5,
    text: 'Called around noon, they came on time and did a great job. Really appreciate the professionalism, attitude, and punctuality. Highly recommended.',
  },
  {
    id: '6',
    author: 'Megane B.',
    location: 'Stittsville, ON',
    serviceType: 'Affordable repair',
    date: '2025-06-28',
    rating: 5,
    text: 'Great service, was able to repair the problem very fast all for an affordable price. 10 out of 10 recommend.',
  },
  {
    id: '7',
    author: 'P. D.',
    location: 'Crossing Bridge Estates, Stittsville',
    serviceType: 'Transparent pricing',
    date: '2025-10-05',
    rating: 5,
    text: "Seriously one of the best experiences I've had for a long time. Explained the issue and what needs to be done and fixed it. Reasonable pricing and an amazing experience.",
  },
  {
    id: '8',
    author: 'Kevin B.',
    location: 'Stittsville, ON',
    serviceType: 'Opener installation',
    date: '2025-11-12',
    rating: 5,
    text: 'Excellent experience for our garage door opener installation. Communication was clear and timely, with updates every step of the way. Professional, efficient workmanship.',
  },
];

export const aggregateRating = {
  ratingValue: 5,
  reviewCount: reviews.length,
  label: `Based on ${reviews.length} customer reviews`,
};
