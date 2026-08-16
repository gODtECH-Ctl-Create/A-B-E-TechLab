import type { MetadataRoute } from 'next';
import { insights } from '@/lib/insights';

const baseUrl = 'https://a-b-e-tech-lab.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/products', '/programs', '/work', '/services', '/about', '/insights', '/team', '/contact'];
  const pages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));
  const articles = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
