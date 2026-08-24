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
      viewTour: "View Tour",
      duration: "Duration",
      transport: "Transport"
    },
    vi: {
      subtitle: "HÀNH TRÌNH CỦA CHÚNG TÔI",
      title: "Các Tour Nổi Bật",
      viewTour: "Xem Chi Tiết",
      duration: "Thời gian",
      transport: "Di chuyển"
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-[var(--color-limestone)] py-20 lg:py-32 px-6 border-t border-[var(--color-sand)]">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="mb-12 lg:mb-20">
          <p className="text-small font-semibold tracking-widest uppercase opacity-60 text-[var(--color-ink)] mb-4">
            {lang.subtitle}
          </p>
          <h2 className="text-h3 lg:text-h2 font-display text-[var(--color-ink)]">
            {lang.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {tours.map((tour) => {
            // For now, exclude draft tours or those without slugs
            if (!tour.slug) return null;

            return (
              <Link 
                key={tour.id} 
                href={`/${currentLocale}/tours/${tour.slug}`}
                className="group flex flex-col gap-6"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)]">
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
                  <h3 className="text-h4 font-display text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
                    {isVi ? tour.title.vi : tour.title.en}
                  </h3>
                  
                  <p className="text-body text-[var(--color-ink)] opacity-70 line-clamp-2">
                    {isVi ? tour.shortDescription.vi : tour.shortDescription.en}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-small text-[var(--color-ink)] opacity-60">
                    <span className="flex items-center gap-2">
                      <span className="font-semibold uppercase tracking-wider">{lang.duration}:</span>
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-semibold uppercase tracking-wider">{lang.transport}:</span>
                      {isVi ? tour.transport.vi : tour.transport.en}
                    </span>
                  </div>
                  
                  <div className="mt-2 text-body font-semibold text-[var(--color-ink)] border-b border-[var(--color-ink)] self-start pb-1 opacity-80 group-hover:opacity-100 group-hover:border-[var(--color-terracotta)] transition-all">
                    {lang.viewTour} &rarr;
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
