import type { MetadataRoute } from 'next';
import { insights } from '@/lib/insights';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/products', '/programs', '/services', '/insights', '/team', '/contact'];
  const pages = routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));
  const articles = insights.map((insight) => ({
    url: absoluteUrl(`/insights/${insight.slug}`),
    lastModified: new Date(insight.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
