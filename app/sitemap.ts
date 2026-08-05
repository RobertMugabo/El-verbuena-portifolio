import type { MetadataRoute } from 'next';

const base = 'https://el-verbuena.vercel.app';
const locales = ['en', 'fr'];
const routes = ['', '/logo', '/businesscard', '/flyer', '/songcovers', '/ui', '/package'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
