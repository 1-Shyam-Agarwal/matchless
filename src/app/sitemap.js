import { site } from '@/data/site';

// Required by `output: export` so the file is emitted at build time.
export const dynamic = 'force-static';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

/** Generates /sitemap.xml at build time from the same data the site renders. */
export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/products/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/categories/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/custom-gifting/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/quote/', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/about/', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/contact/', priority: 0.7, changeFrequency: 'yearly' },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...categories.map((c) => ({
      url: `${site.url}/categories/${c.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...products.map((p) => ({
      url: `${site.url}/products/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
