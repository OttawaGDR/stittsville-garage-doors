export type Review = {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  date: string;
  rating: 5;
  text: string;
  source: 'parent-network' | 'stittsville';
};

/** Real reviews from GDS Ottawa parent network — not Stittsville-specific. */
export const reviews: Review[] = [
  {
    id: '1',
    author: 'Diana G.',
    location: 'Ottawa, ON',
    serviceType: 'General repair',
    date: '2024',
    rating: 5,
    text: 'Vitaliy repaired our garage door, he was very professional and kind. Excellent work and he responded to our call extremely fast. We will definitely contact him again.',
    source: 'parent-network',
  },
  {
    id: '2',
    author: 'Jean Richard',
    location: 'Ottawa, ON',
    serviceType: 'Same-day repair',
    date: '2024',
    rating: 5,
    text: 'Excellent service. They responded very quickly to my call, and the problem was fixed in less than half a day. Fair price, professional work, and a very smooth experience overall. Highly recommended.',
    source: 'parent-network',
  },
  {
    id: '3',
    author: 'J. Price',
    location: 'Ottawa, ON',
    serviceType: 'Spring repair',
    date: '2024',
    rating: 5,
    text: 'Fast service, pleasant guy (Vitaliy). Took away all the old parts and left the place neat as he found it.',
    source: 'parent-network',
  },
  {
    id: '4',
    author: 'Robin G.',
    location: 'Ottawa, ON',
    serviceType: 'General repair',
    date: '2024',
    rating: 5,
    text: 'Great service. Vitaliy is very professional, arrives on time and has necessary tools and equipment to address any issues with garage. Reasonable charges. Thanks.',
    source: 'parent-network',
  },
  {
    id: '5',
    author: 'Ilan D.',
    location: 'Ottawa, ON',
    serviceType: 'Same-day service',
    date: '2024',
    rating: 5,
    text: 'Had such a great experience with Vitaly from GDS! Called him around noon, he came on time and did a great job. Really appreciate his professionalism, attitude and punctuality. HIGHLY RECOMMENDED!',
    source: 'parent-network',
  },
  {
    id: '6',
    author: 'Megane B.',
    location: 'Ottawa, ON',
    serviceType: 'Affordable repair',
    date: '2024',
    rating: 5,
    text: 'Great service, was able to repair the problem very fast all for an affordable price. 10 out of 10 recommend.',
    source: 'parent-network',
  },
  {
    id: '7',
    author: 'P. Das',
    location: 'Ottawa, ON',
    serviceType: 'Transparent pricing',
    date: '2024',
    rating: 5,
    text: "Seriously one of the best experiences I've had for a long time. Amazing guy and no BS. Explained the issue and what needs to be done and fixed it. Reasonable pricing but the experience was amazing.",
    source: 'parent-network',
  },
  {
    id: '8',
    author: 'Kevin B.',
    location: 'Ottawa, ON',
    serviceType: 'Opener installation',
    date: '2024',
    rating: 5,
    text: 'I had an excellent experience with this company for my garage door opener installation. The communication was clear and timely, and Vitaliy kept me updated every step of the way. The workmanship was great — professional, efficient, and done with attention to detail.',
    source: 'parent-network',
  },
];

export const aggregateRating = {
  ratingValue: 5,
  reviewCount: 35,
  label: 'Based on 35+ verified Google reviews (parent network)',
};
