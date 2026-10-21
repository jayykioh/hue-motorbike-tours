import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programmaticRoutes } from '@/data/routes';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// SSG Generation
export async function generateStaticParams() {
  return programmaticRoutes.flatMap((route) => [
    { locale: 'en', slug: route.slug },
    { locale: 'vi', slug: route.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const route = programmaticRoutes.find((r) => r.slug === slug);
  
  if (!route) return {};

  const meta = locale === 'vi' ? route.meta.vi : route.meta.en;

  return {
    title: meta.title,
    description: meta.description,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `https://huebiketour.com/${locale}/tours/routes/${slug}`,
      languages: {
        'en': `https://huebiketour.com/en/tours/routes/${slug}`,
        'vi': `https://huebiketour.com/vi/tours/routes/${slug}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://huebiketour.com/${locale}/tours/routes/${slug}`,
    },
  };
}

export default async function ProgrammaticRoutePage({ params }: Props) {
  const { locale, slug } = await params;
  const isVi = locale === 'vi';
  
  const route = programmaticRoutes.find((r) => r.slug === slug);
  
  if (!route) {
    notFound();
  }

  const originName = isVi ? route.origin.vi : route.origin.en;
  const destName = isVi ? route.destination.vi : route.destination.en;
  const titleText = isVi ? `Tour Xe Máy ${originName} đi ${destName}` : `${originName} to ${destName} Motorbike Tour`;
  const labels = isVi
    ? { distance: 'Quãng đường', time: 'Thời gian dự kiến', transport: 'Phương tiện', guide: 'Hướng dẫn', departure: 'Khởi hành', arrival: 'Điểm đến' }
    : { distance: 'Distance', time: 'Estimated time', transport: 'Transport', guide: 'Guide', departure: 'Departure', arrival: 'Arrival' };

  // The route template has no visible FAQ section, so only describe the trip.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": isVi ? route.meta.vi.title : route.meta.en.title,
    "description": isVi ? route.meta.vi.description : route.meta.en.description,
    "touristType": "Sightseeing",
    "provider": { "@id": "https://huebiketour.com/#travel-agency" },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": route.stops.map((stop, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": isVi ? stop.vi : stop.en
        }
      }))
    }
  };

  const whatsappMessage = encodeURIComponent(
    isVi ? `Chào bạn, tôi muốn đặt tour xe máy từ ${originName} đi ${destName}` : `Hi, I would like to book the ${originName} to ${destName} motorbike tour`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full min-h-screen pt-24 pb-20 bg-[var(--color-sand)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 w-full flex flex-col gap-16">
          
          {/* Header */}
          <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
            <h1 className="font-display text-[2.5rem] lg:text-[4rem] text-[var(--color-ink)] leading-tight">
              {titleText}
            </h1>
            <p className="text-body-lg text-[var(--color-ink)]/70">
              {isVi ? route.meta.vi.description : route.meta.en.description}
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <span className="block text-small font-bold text-[var(--color-terracotta)] uppercase mb-2">{labels.distance}</span>
              <span className="text-h3 font-display text-[var(--color-ink)]">{route.distanceKm} km</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <span className="block text-small font-bold text-[var(--color-terracotta)] uppercase mb-2">{labels.time}</span>
              <span className="text-h3 font-display text-[var(--color-ink)]">{route.durationHours} hrs</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <span className="block text-small font-bold text-[var(--color-terracotta)] uppercase mb-2">{labels.transport}</span>
              <span className="text-h3 font-display text-[var(--color-ink)]">{isVi ? 'Xe máy' : 'Motorbike'}</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <span className="block text-small font-bold text-[var(--color-terracotta)] uppercase mb-2">{labels.guide}</span>
              <span className="text-h3 font-display text-[var(--color-ink)]">Easy Rider</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Map */}
            <div className="lg:col-span-7 h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-md">
              <iframe
                title={isVi ? `Bản đồ tuyến đường ${originName} đến ${destName}` : `Route map from ${originName} to ${destName}`}
                src={route.mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Itinerary */}
            <div className="lg:col-span-5 flex flex-col gap-8 bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-display text-h3 text-[var(--color-ink)]">
                {isVi ? "Lộ trình chi tiết" : "Tour Itinerary"}
              </h3>
              
              <div className="flex flex-col gap-6 relative">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--color-sand)]" />
                
                {/* Origin */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[var(--color-ink)]">{labels.departure}: {originName}</h4>
                  </div>
                </div>

                {/* Stops */}
                {route.stops.map((stop, i) => (
                  <div key={i} className="flex gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full border-2 border-[var(--color-terracotta)] bg-white shrink-0 mt-0.5" />
                    <div>
                      <p className="text-body text-[var(--color-ink)]/80">{isVi ? stop.vi : stop.en}</p>
                    </div>
                  </div>
                ))}

                {/* Destination */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-ink)] flex items-center justify-center shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[var(--color-ink)]">{labels.arrival}: {destName}</h4>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-sand)]">
                <a 
                  href={`https://wa.me/84862391918?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center py-4"
                >
                  {isVi ? "Đặt Xe Ngay (WhatsApp)" : "Book Now via WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
