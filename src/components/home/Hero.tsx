"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Mountain, Waves, Compass, Sun, Camera, Map } from "lucide-react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import { WHATSAPP_PLAN_URL } from "@/lib/whatsapp";

interface RouteMilestone {
  title: { en: string; vi: string };
  tag: { en: string; vi: string };
  icon: React.ReactNode;
}

const routeMilestones: RouteMilestone[] = [
  {
    title: { en: "Hải Vân Pass", vi: "Đèo Hải Vân" },
    tag: { en: "496m Peak · Coast Route", vi: "Đỉnh 496m · Cung đường ven biển" },
    icon: <Mountain className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" />,
  },
  {
    title: { en: "Huế Imperial Citadel", vi: "Đại Nội Huế" },
    tag: { en: "UNESCO Heritage 1993", vi: "Di sản UNESCO 1993" },
    icon: <MapPin className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" />,
  },
  {
    title: { en: "Lăng Cô Bay", vi: "Vịnh Lăng Cô" },
    tag: { en: "World's Most Beautiful Bays", vi: "Top Vịnh Đẹp Thế Giới" },
    icon: <Waves className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" />,
  },
  {
    title: { en: "Thiên Mụ Pagoda", vi: "Chùa Thiên Mụ" },
    tag: { en: "Perfume River · Est. 1601", vi: "Bên Sông Hương · Xây năm 1601" },
    icon: <Map className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" />,
  },
  {
    title: { en: "Lập An Lagoon", vi: "Đầm Lập An" },
    tag: { en: "Oyster Estuary & Mountains", vi: "Đầm nước lợ chân núi Bạch Mã" },
    icon: <Camera className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" />,
  },
  {
    title: { en: "Tam Giang Lagoon", vi: "Đầm Tam Giang" },
    tag: { en: "Largest Lagoon in SE Asia", vi: "Đầm phá lớn nhất Đông Nam Á" },
    icon: <Sun className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" />,
  },
  {
    title: { en: "Khải Định Tomb", vi: "Lăng Khải Định" },
    tag: { en: "Châu Chữ Mountain", vi: "Núi Châu Chữ" },
    icon: <Compass className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" />,
  },
];

export default function Hero() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';
  const isVi = currentLocale === 'vi';

  const t = {
    en: {
      subtitle: "HUE MOTORBIKE TOUR · Hai Van Pass · Easy Rider Experience",
      title: "Discover Hue on a Motorbike.",
      description: "The best hue motorbike tour & easy rider hue experience. Explore Imperial City, Hai Van Pass & Hoi An with expert local guides — at your pace, on roads no tourist bus ever takes.",
      primaryCta: "Plan My Trip →",
      secondaryCta: "Explore Tours",
      nowBooking: "Now Accepting Bookings",
      reviewScore: "5.0 · Rated by International Guests",
    },
    vi: {
      subtitle: "MIỀN TRUNG VIỆT NAM · Huế → Hải Vân → Hội An",
      title: "Đi theo con đường đẹp nhất.",
      description: "Hành trình được chọn lọc qua Huế, Đà Nẵng và Hội An với kiến thức địa phương, ẩm thực ngon và những cung đường xứng đáng để đi chậm lại.",
      primaryCta: "Lên Kế Hoạch Chuyến Đi →",
      secondaryCta: "Khám Phá Tour",
      nowBooking: "Đang nhận đặt lịch",
      reviewScore: "5.0 · Khách quốc tế đánh giá",
    }
  };

  const lang = t[currentLocale];

  const formattedMilestones: LogoItem[] = useMemo(() => {
    return routeMilestones.map((item) => ({
      node: (
        <div className="flex items-center gap-2.5 sm:gap-3.5 px-4 py-2 rounded-full bg-slate-100/85 border border-slate-200/80 hover:bg-slate-200/70 hover:border-slate-300/90 transition-all shadow-xs backdrop-blur-xs">
          {item.icon}
          <span className="font-display text-[var(--color-ink)] text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
            {isVi ? item.title.vi : item.title.en}
          </span>
          <span className="text-[9px] sm:text-[10.5px] font-mono tracking-wider uppercase text-slate-500 border-l border-slate-300/80 pl-2.5 sm:pl-3 whitespace-nowrap">
            {isVi ? item.tag.vi : item.tag.en}
          </span>
        </div>
      ),
    }));
  }, [isVi]);

  return (
    <>
      <section className="relative w-full min-h-[100svh] sm:min-h-[640px] sm:h-[88vh] flex items-end pt-28 pb-14 sm:pb-20 px-5 sm:px-6 overflow-hidden">
        {/* Background Image with Next.js Optimization */}
        <div className="absolute inset-0 z-0 bg-[var(--color-night)]">
          <Image
            src="/photo/thumbnail.jpg"
            alt="Hue Motorbike Tour - Easy Rider on Hai Van Pass, Central Vietnam"
            fill
            priority
            loading="eager"
            quality={90}
            className="object-cover opacity-80"
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-95 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 max-w-[var(--container-max)] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4 sm:mb-8">
          <div className="lg:col-span-9 xl:col-span-7 flex flex-col gap-4 sm:gap-6 text-[var(--color-limestone)]">
            <p className="text-xs sm:text-small font-semibold tracking-widest uppercase text-white/80">
              {lang.subtitle}
            </p>
            <h1 className="text-[2.3rem] sm:text-[3.2rem] lg:text-display-l font-display leading-[1.04] tracking-tight">
              {lang.title}
            </h1>
            <p className="text-base sm:text-body-lg text-white/80 max-w-xl leading-relaxed">
              {lang.description}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-3">
              <a
                href={WHATSAPP_PLAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center justify-center text-base sm:text-lg"
              >
                {lang.primaryCta}
              </a>
              <Link
                href={`/${currentLocale}/tours`}
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-[var(--radius-pill)] border-2 border-white/60 text-white font-bold text-base hover:bg-white hover:text-[var(--color-ink)] transition-colors min-h-[56px] flex items-center justify-center backdrop-blur-sm bg-white/10"
              >
                {lang.secondaryCta}
              </Link>
            </div>

            {/* Social Proof — Urgency + Trust */}
            <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Availability dot */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-[0.8rem] font-semibold text-white/80 tracking-wide uppercase">
                  {lang.nowBooking}
                </span>
              </div>
              {/* Stars */}
              <div className="flex items-center gap-2">
                <span className="text-[#fbbf24] text-base leading-none tracking-tight">★★★★★</span>
                <span className="text-[0.8rem] font-semibold text-white/80">
                  {lang.reviewScore}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Route Milestones Ticker — Clean White Background + Transparent Grey Badges */}
      <section
        className="w-full bg-white py-4 sm:py-5 border-y border-[var(--color-sand)] overflow-hidden relative z-20 shadow-xs"
        aria-label="Route highlights and heritage landmarks"
      >
        <LogoLoop
          logos={formattedMilestones}
          speed={20}
          direction="left"
          logoHeight={36}
          gap={24}
          pauseOnHover={true}
          hoverSpeed={6}
          fadeOut={true}
          fadeOutColor="#ffffff"
        />
      </section>
    </>
  );
}
