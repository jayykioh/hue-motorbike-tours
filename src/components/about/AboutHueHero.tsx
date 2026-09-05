/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5
 * macrostructure: Long Document · genre: editorial · theme: Lumen
 * nav: inherited N10 Scroll-Morph · footer: inherited
 */
"use client";

import Image from "next/image";

type Props = {
  locale: string;
};

export default function AboutHueHero({ locale }: Props) {
  const isVi = locale === "vi";

  const t = {
    eyebrow: isVi ? "CỐ ĐÔ VIỆT NAM" : "ANCIENT IMPERIAL CAPITAL",
    title: isVi ? "Huế — Kinh Thành\nCủa Hồn Việt" : "Hue — Where Vietnam's\nSoul Lives On",
    lead: isVi
      ? "Hơn 700 năm lịch sử, 7 di tích UNESCO, và một nhịp sống không nơi nào có được. Đây là tất cả những gì bạn cần biết để thực sự hiểu Huế."
      : "Over 700 years of history, 7 UNESCO monuments, and a pace of life found nowhere else. Everything you need to truly understand Hue.",
    scrollHint: isVi ? "Khám phá" : "Explore below",
    statsHistory: isVi ? "Năm thủ đô" : "Years as Capital",
    statsUNESCO: isVi ? "Di tích UNESCO" : "UNESCO Monuments",
    statsRiver: isVi ? "Km sông Hương" : "Km Perfume River",
    statsDishes: isVi ? "Món ăn hoàng gia" : "Royal Dishes",
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-end overflow-hidden bg-[var(--color-night)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/photo/about-hue-aerial-hero.jpg"
          alt="Aerial view of Hue Imperial Citadel and the Perfume River at golden hour"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — bottom heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-night)] via-[var(--color-night)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-night)]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-5 sm:px-6 lg:px-10 pb-12 lg:pb-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--color-terracotta)]" />
            <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-[var(--color-terracotta)]">
              {t.eyebrow}
            </p>
          </div>

          {/* Main title */}
          <h1 className="font-display text-[2.8rem] sm:text-[4rem] lg:text-[5.5rem] text-[var(--color-limestone)] leading-[0.95] tracking-tight mb-6 whitespace-pre-line">
            {t.title}
          </h1>

          {/* Lead paragraph */}
          <p className="text-base sm:text-body-lg text-[var(--color-limestone)]/80 max-w-xl leading-relaxed mb-10 lg:mb-14">
            {t.lead}
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-[var(--radius-md)] overflow-hidden border border-white/10">
            {[
              { value: "143", label: t.statsHistory },
              { value: "7", label: t.statsUNESCO },
              { value: "70+", label: t.statsRiver },
              { value: "300+", label: t.statsDishes },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 px-5 py-4 bg-[var(--color-night)]/60 backdrop-blur-sm"
              >
                <span className="font-display text-2xl sm:text-3xl text-[var(--color-limestone)] font-bold leading-none">
                  {stat.value}
                </span>
                <span className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider text-[var(--color-limestone)]/55">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-10 flex items-center gap-2 text-[var(--color-limestone)]/40">
          <span className="text-xs font-semibold tracking-widest uppercase">{t.scrollHint}</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
