const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://a-b-e-tech-lab.vercel.app';

export const siteUrl = configuredSiteUrl.replace(/\/+$/, '');
export const siteName = 'ABE TechLab';
export const siteEmail = 'abeayo6@gmail.com';

export function absoluteUrl(path = '') {
  const normalizedPath = path ? `/${path.replace(/^\/+/, '')}` : '';
  return `${siteUrl}${normalizedPath}`;
}
