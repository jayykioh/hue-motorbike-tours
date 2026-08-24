"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      subtitle: "CENTRAL VIETNAM\nHue → Hai Van → Hoi An",
      title: "Take the scenic way.",
      description: "Curated journeys through Hue, Da Nang & Hoi An — shaped by local knowledge, good food and the roads worth slowing down for.",
      primaryCta: "Plan My Trip →",
      secondaryCta: "Explore Tours",
    },
    vi: {
      subtitle: "MIỀN TRUNG VIỆT NAM\nHuế → Hải Vân → Hội An",
      title: "Đi theo con đường đẹp nhất.",
      description: "Hành trình được chọn lọc qua Huế, Đà Nẵng và Hội An — với kiến thức địa phương, ẩm thực ngon và những con đường xứng đáng được đi chậm lại.",
      primaryCta: "Lên Kế Hoạch Chuyến Đi →",
      secondaryCta: "Khám Phá Tour",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-20 px-6">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-[var(--color-night)]">
        <div className="w-full h-full bg-[var(--color-sand)] opacity-20 object-cover"></div>
        {/* Real image would go here with fetchPriority="high" */}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-night)] via-[var(--color-night)]/40 to-transparent opacity-80"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[var(--container-max)] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 xl:col-span-6 flex flex-col gap-6 text-[var(--color-limestone)]">
          <p className="whitespace-pre-line text-small font-semibold tracking-widest uppercase opacity-80">
            {lang.subtitle}
          </p>
          <h1 className="text-display-l font-display">
            {lang.title}
          </h1>
          <p className="text-body-lg opacity-80 max-w-md">
            {lang.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link href={`/${currentLocale}/plan`} className="btn-primary w-full sm:w-auto">
              {lang.primaryCta}
            </Link>
            <Link 
              href={`/${currentLocale}/tours`} 
              className="w-full sm:w-auto text-center px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--color-limestone)] border-opacity-30 hover:bg-[var(--color-limestone)] hover:text-[var(--color-ink)] transition-colors font-semibold"
            >
              {lang.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
