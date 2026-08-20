export type InsightCategory = 'Research' | 'Product' | 'Technology' | 'Perspectives';

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  author: string;
  featured?: boolean;
  content: string[];
  relatedSlugs?: string[];
  relatedPaths?: string[];
};
