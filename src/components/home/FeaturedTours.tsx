"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { tours } from "@/data/tours";

export default function FeaturedTours() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';
  const isVi = currentLocale === 'vi';

  const t = {
    en: {
      subtitle: "OUR JOURNEYS",
      title: "Featured Tours",
      viewTour: "Explore Itinerary",
      duration: "Duration",
      transport: "Transport",
      bestSeller: "Bestseller",
      viewAll: "Explore All Tours",
      startingAt: "From",
    },
    vi: {
      subtitle: "HÀNH TRÌNH CỦA CHÚNG TÔI",
      title: "Các Tour Nổi Bật",
      viewTour: "Xem Lịch Trình",
      duration: "Thời gian",
      transport: "Di chuyển",
      bestSeller: "Bán Chạy Nhất",
      viewAll: "Xem Tất Cả Các Tour",
      startingAt: "Chỉ từ",
    }
  };

  const lang = t[currentLocale];

  // Assign a marketing badge specifically to the first two tours to make them stand out
  const getBadge = (id: string, index: number) => {
    if (index === 0) return lang.bestSeller;
    if (index === 1 && id.includes('dmz')) return isVi ? 'Lịch Sử Hào Hùng' : 'Top Historical';
    return null;
  };

  return (
    <section className="bg-[var(--color-limestone)] py-16 lg:py-40 px-5 sm:px-6">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="mb-12 lg:mb-24 flex flex-col items-start gap-4">
          <p className="text-[0.875rem] font-bold tracking-[0.2em] uppercase text-[var(--color-terracotta)]">
            {lang.subtitle}
          </p>
          <h2 className="text-[2.2rem] sm:text-h2 lg:text-[3.5rem] font-display text-[var(--color-ink)] leading-[1.1] tracking-tight">
            {lang.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {tours.map((tour, index) => {
            if (!tour.slug) return null;
            const badge = getBadge(tour.id, index);

            return (
              <Link 
                key={tour.id} 
                href={`/${currentLocale}/tours/${tour.slug}`}
                className="group flex flex-col bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[var(--color-sand)] overflow-hidden">
                  {badge && (
                    <div className="absolute top-4 left-4 z-10 bg-[var(--color-terracotta)] text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-[var(--radius-pill)] shadow-md">
                      {badge}
                    </div>
                  )}
                  <Image 
                    src={tour.image} 
                    alt={isVi ? tour.title.vi : tour.title.en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-sm text-[var(--color-ink)] px-4 py-2 rounded-[var(--radius-md)] shadow-lg font-semibold flex flex-col items-end">
                    <span className="text-[0.65rem] uppercase tracking-widest text-[var(--color-ink)]/60 leading-none mb-1">
                      {lang.startingAt}
                    </span>
                    <span className="text-lg leading-none">
                      {tour.price}
                    </span>
                  </div>
                </div>

                {/* Content Container - Generous padding for mobile tap targets */}
                <div className="flex flex-col gap-4 p-6 sm:p-8 flex-1">
                  <h3 className="text-2xl sm:text-[1.75rem] font-display text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors leading-tight">
                    {isVi ? tour.title.vi : tour.title.en}
                  </h3>
                  
                  {/* High readability text for all users */}
                  <p className="text-base sm:text-lg text-[var(--color-ink)]/75 line-clamp-2 leading-relaxed">
                    {isVi ? tour.shortDescription.vi : tour.shortDescription.en}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2 py-4 border-y border-[var(--color-ink)]/10 text-sm sm:text-base text-[var(--color-ink)]/70">
                    <span className="flex items-center gap-2">
                      <span className="font-semibold uppercase tracking-wider text-[var(--color-ink)]/90 text-xs">{lang.duration}:</span>
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-semibold uppercase tracking-wider text-[var(--color-ink)]/90 text-xs">{lang.transport}:</span>
                      {isVi ? tour.transport.vi : tour.transport.en}
                    </span>
                  </div>
                  
                  <div className="mt-2 w-full text-center py-3.5 sm:py-4 rounded-[var(--radius-pill)] border-2 border-[var(--color-ink)] text-[var(--color-ink)] font-bold text-base group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-limestone)] transition-all">
                    {lang.viewTour}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            href={`/${currentLocale}/tours`}
            className="w-full sm:w-auto text-center px-8 py-4 sm:py-5 rounded-[var(--radius-pill)] border-2 border-[var(--color-ink)] text-[var(--color-ink)] font-bold text-lg hover:bg-[var(--color-ink)] hover:text-[var(--color-limestone)] transition-colors"
          >
            {lang.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
