"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Mountain, Waves, Compass, Sun, Camera, Map } from "lucide-react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

const partnerLogos: LogoItem[] = [
  { node: <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3"><Mountain className="w-5 h-5 opacity-70" /> HAI VAN PASS</span> },
  { node: <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3"><Waves className="w-5 h-5 opacity-70" /> LANG CO BEACH</span> },
  { node: <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3"><Sun className="w-5 h-5 opacity-70" /> DREAM SPRING</span> },
  { node: <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3"><MapPin className="w-5 h-5 opacity-70" /> IMPERIAL CITY</span> },
  { node: <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3"><Compass className="w-5 h-5 opacity-70" /> PERFUME RIVER</span> },
  { node: <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3"><Map className="w-5 h-5 opacity-70" /> THIEN MU PAGODA</span> },
  { node: <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3"><Camera className="w-5 h-5 opacity-70" /> LAP AN LAGOON</span> },
];

export default function Hero() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';
  const isVi = currentLocale === 'vi';

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
    <>
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-20 sm:pb-24 px-5 sm:px-6 overflow-hidden" style={{paddingBottom: 'max(5rem, env(safe-area-inset-bottom, 0px) + 3rem)'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[var(--color-night)]">
          <Image
            src="/photo/thumbnail.jpg"
            alt="Hue Motorbike Tours"
            fill
            priority
            loading="eager"
            className="object-cover opacity-80"
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90"></div>

        {/* Content */}
        <div className="relative z-20 max-w-[var(--container-max)] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 xl:col-span-6 flex flex-col gap-4 sm:gap-6 text-[var(--color-limestone)]">
            <p className="whitespace-pre-line text-small font-semibold tracking-widest uppercase opacity-80">
              {lang.subtitle}
            </p>
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-display-l font-display leading-[1.05]">
              {lang.title}
            </h1>
            <p className="text-body-lg opacity-80 max-w-md">
              {lang.description}
            </p>
            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
              <Link
                href={`/${currentLocale}/plan`}
                className="btn-primary w-full sm:w-auto text-center justify-center"
              >
                {lang.primaryCta}
              </Link>
              <Link
                href={`/${currentLocale}/tours`}
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-[var(--radius-pill)] border-2 border-white/60 text-white font-bold text-base hover:bg-white hover:text-[var(--color-ink)] transition-colors min-h-[56px] flex items-center justify-center backdrop-blur-sm bg-white/10"
              >
                {lang.secondaryCta}
              </Link>
            </div>

            {/* Social Proof — Urgency + Trust */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              {/* Availability dot */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[0.8rem] font-semibold text-white/75 tracking-wide uppercase">
                  {isVi ? 'Đang nhận đặt lịch' : 'Now Accepting Bookings'}
                </span>
              </div>
              {/* Stars */}
              <div className="flex items-center gap-2">
                <span className="text-[#fbbf24] text-base leading-none tracking-tight">★★★★★</span>
                <span className="text-[0.8rem] font-semibold text-white/75">
                  {isVi ? '5.0 · Khách quốc tế đánh giá' : '5.0 · Rated by International Guests'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Loop Section */}
      <section className="w-full bg-[#020617] py-8 border-b border-white/5 overflow-hidden">
        <LogoLoop
          logos={partnerLogos}
          speed={30}
          direction="left"
          logoHeight={32}
          gap={100}
          pauseOnHover={false}
          fadeOut={true}
          fadeOutColor="#020617"
        />
      </section>
    </>
  );
}
