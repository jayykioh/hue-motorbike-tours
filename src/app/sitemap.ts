import { MetadataRoute } from 'next';
import { tours } from '@/data/tours';

const BASE_URL = 'https://huebiketour.com';
const LOCALES = ['en', 'vi'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage per locale
  const homePages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
  }));

  // Tour listing pages per locale
  const tourListPages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}/tours`,
  }));

  // Individual tour detail pages per locale
  const tourDetailPages: MetadataRoute.Sitemap = tours
    .filter((tour) => tour.slug && tour.slug !== 'hue-abandoned-water-park-tour')
    .flatMap((tour) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}/tours/${tour.slug}`,
      }))
    );

  // About Hue destination guide pages per locale
  const aboutHuePages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}/about-hue`,
  }));

  return [...homePages, ...tourListPages, ...aboutHuePages, ...tourDetailPages];
}
