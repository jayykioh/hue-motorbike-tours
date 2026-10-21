import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { tours } from '@/data/tours';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'vi'
    ? 'Tour Xe Máy Huế & Các Hành Trình Easy Rider'
    : 'Hue Motorbike Tours & Easy Rider Journeys';
  const description = locale === 'vi'
    ? 'Chọn tour xe máy tại Huế: khám phá Đại Nội, ẩm thực địa phương, tour DMZ và hành trình qua đèo Hải Vân đến Đà Nẵng, Hội An.'
    : 'Choose a Hue motorbike tour: explore the Imperial City, local food, the DMZ, or ride the Hai Van Pass toward Da Nang and Hoi An.';
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://huebiketour.com/${locale}/tours`,
      languages: {
        'en': 'https://huebiketour.com/en/tours',
        'vi': 'https://huebiketour.com/vi/tours',
        'x-default': 'https://huebiketour.com/en/tours',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://huebiketour.com/${locale}/tours`,
      siteName: 'Hue Motorbike Tours',
    },
  };
}

export default async function ToursPage({ params }: Props) {
  const { locale } = await params;
  const isVi = locale === 'vi';

  const strings = {
    title: isVi ? 'Tour Xe Máy Huế & Hành Trình Easy Rider' : 'Hue Motorbike Tours & Easy Rider Journeys',
    subtitle: isVi ? 'KHÁM PHÁ HUẾ VÀ MIỀN TRUNG' : 'EXPLORE HUE AND CENTRAL VIETNAM',
    viewTour: isVi ? 'Xem Chi Tiết' : 'View Tour',
    duration: isVi ? 'Thời gian' : 'Duration',
    transport: isVi ? 'Di chuyển' : 'Transport',
    intro: isVi
      ? 'So sánh thời lượng, phương tiện và lịch trình để chọn chuyến đi phù hợp. Mở từng tour để xem các điểm dừng, thông tin bao gồm và gửi yêu cầu xác nhận lịch.'
      : 'Compare duration, transport and itinerary to find a trip that suits you. Open a tour for its stops, inclusions and a request to confirm current availability.'
  };

  return (
    <div className="flex-1 flex flex-col bg-[var(--color-limestone)] min-h-screen">
      {/* Header Spacer / Title Section */}
      <section className="pt-32 pb-16 px-6 border-b border-[var(--color-sand)]">
        <div className="max-w-[var(--container-max)] mx-auto flex flex-col items-center text-center gap-4">
          <p className="text-small font-semibold tracking-widest uppercase text-[var(--color-terracotta)]">
            {strings.subtitle}
          </p>
          <h1 className="text-h2 lg:text-h1 font-display text-[var(--color-ink)]">
            {strings.title}
          </h1>
          <p className="max-w-3xl text-body-lg text-[var(--color-ink)]/70 leading-relaxed">
            {strings.intro}
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {tours.map((tour) => {
              if (!tour.slug) return null;

              return (
                <Link 
                  key={tour.id} 
                  href={`/${locale}/tours/${tour.slug}`}
                  className="group flex flex-col gap-6"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)] shadow-sm">
                    <Image 
                      src={tour.image} 
                      alt={isVi ? tour.title.vi : tour.title.en}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-h3 font-display text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
                      {isVi ? tour.title.vi : tour.title.en}
                    </h3>
                    
                    <p className="text-body text-[var(--color-ink)] opacity-70 line-clamp-2">
                      {isVi ? tour.shortDescription.vi : tour.shortDescription.en}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-small text-[var(--color-ink)] opacity-60">
                      <span className="flex items-center gap-2">
                        <span className="font-semibold uppercase tracking-wider">{strings.duration}:</span>
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="font-semibold uppercase tracking-wider">{strings.transport}:</span>
                        {isVi ? tour.transport.vi : tour.transport.en}
                      </span>
                    </div>
                    
                    <div className="mt-2 text-body font-semibold text-[var(--color-ink)] border-b border-[var(--color-ink)] self-start pb-1 opacity-80 group-hover:opacity-100 group-hover:border-[var(--color-terracotta)] transition-all">
                      {strings.viewTour} &rarr;
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
