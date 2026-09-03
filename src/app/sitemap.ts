import { MetadataRoute } from 'next';
import { tours } from '@/data/tours';
import { programmaticRoutes } from '@/data/routes';
import { comparisons } from '@/data/comparisons';

const BASE_URL = 'https://huebiketour.com';
const LOCALES = ['en', 'vi'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage per locale
  const homePages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1.0,
  }));

  // Tour listing pages per locale
  const tourListPages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}/tours`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Individual tour detail pages per locale
  const tourDetailPages: MetadataRoute.Sitemap = tours
    .filter((tour) => tour.slug)
    .flatMap((tour) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}/tours/${tour.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
      }))
    );

  // Programmatic Route SEO pages per locale
  const programmaticRoutePages: MetadataRoute.Sitemap = programmaticRoutes
    .flatMap((route) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}/tours/routes/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    );

  // Comparison SEO pages per locale
  const comparisonPages: MetadataRoute.Sitemap = comparisons
    .flatMap((comp) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}/comparisons/${comp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    );

  return [...homePages, ...tourListPages, ...tourDetailPages, ...programmaticRoutePages, ...comparisonPages];
}