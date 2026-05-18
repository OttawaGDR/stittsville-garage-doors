export type BlogCategory =
  | 'Winter & Climate'
  | 'Repair Guides'
  | 'Cost & Pricing'
  | 'Safety'
  | 'Maintenance'
  | 'Local Stittsville';

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id?: string }
  | { type: 'h3'; text: string; id?: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; variant: 'tip' | 'warning' | 'info'; title?: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  featured?: boolean;
  relatedSlugs: string[];
  relatedServiceSlugs?: string[];
  keyTakeaways: string[];
  blocks: BlogBlock[];
};
