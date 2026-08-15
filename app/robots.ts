import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://a-b-e-tech-lab.vercel.app/sitemap.xml',
  };
}
