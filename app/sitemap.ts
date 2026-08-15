import type { MetadataRoute } from 'next';

const baseUrl = 'https://a-b-e-tech-lab.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/work', '/services', '/about', '/contact'];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
