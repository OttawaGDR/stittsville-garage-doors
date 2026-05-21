export type Review = {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  date: string;
  rating: 5;
  text: string;
};

export const reviews: Review[] = [];

export const aggregateRating = {
  ratingValue: 0,
  reviewCount: 0,
  label: '',
};
