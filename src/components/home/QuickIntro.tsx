"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

export default function QuickIntro() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      eyebrow: "DISCOVER HUE",
      headline: "See Hue by motorbike with a local guide.",
      paragraph1: "Once the imperial capital of Vietnam, Hue brings together royal tombs, the Perfume River, and a living food culture. Explore the city and its surroundings at a pace that leaves room for stories and local stops.",
      paragraph2: "Choose a Hue motorbike tour with a local Easy Rider, visit heritage sites, sample regional dishes, and follow scenic roads through Central Vietnam.",
      cta: "Explore Our Tours →",
    },
    vi: {
      eyebrow: "KHÁM PHÁ HUẾ",
      headline: "Chạm vào linh hồn của vùng đất cố đô.",
      paragraph1: "Huế từng là trái tim của các triều đại hoàng gia Việt Nam. Đến tận bây giờ, nơi đây vẫn giữ vẹn nguyên nét thơ mộng với những lăng tẩm ẩn mình giữa đồi thông và nhịp sống êm đềm bên dòng sông Hương.",
      paragraph2: "Khám phá Huế cùng hướng dẫn viên địa phương, thưởng thức món ăn đặc sản và ghé những điểm di sản theo nhịp độ phù hợp với bạn.",
      cta: "Xem Các Lịch Trình →",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-white py-16 lg:py-28 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
          <p className="text-small font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)]">
            {lang.eyebrow}
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-display leading-[1.05] tracking-tight text-[var(--color-ink)]">
            {lang.headline}
          </h2>
          <div className="flex flex-col gap-4 text-body-lg text-[var(--color-ink)]/70 max-w-xl">
            <p className="leading-relaxed">{lang.paragraph1}</p>
            <p className="leading-relaxed">{lang.paragraph2}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              href={`/${currentLocale}/tours`}
              className="btn-primary flex-1 sm:flex-none justify-center text-base"
            >
              {lang.cta}
            </Link>
            <Link
              href={`/${currentLocale}/about-hue`}
              className="flex-1 sm:flex-none justify-center text-base inline-flex items-center gap-2 min-h-[56px] px-8 rounded-[var(--radius-pill)] border-2 border-[var(--color-ink)] text-[var(--color-ink)] font-bold hover:bg-[var(--color-ink)] hover:text-[var(--color-limestone)] transition-all duration-200"
            >
              {currentLocale === 'vi' ? 'Tìm Hiểu Về Huế →' : 'Discover Hue →'}
            </Link>
          </div>
        </div>

        {/* Right: Illustrative Image */}
        <figure className="flex flex-col gap-3 order-1 lg:order-2">
          <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-[var(--radius-lg)] overflow-hidden shadow-xl shadow-black/6 border border-[var(--color-sand)] bg-[var(--color-sand)] group">
            <Image 
              src="/photo/hue-imperal-city.jpg" 
              alt="Hue Imperial City, a heritage stop on local Hue motorbike tours" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[var(--ease-standard)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <figcaption className="text-xs text-[var(--color-ink)]/55 flex items-center justify-between px-1">
            <span>{currentLocale === 'vi' ? "Đại Nội Huế — Điểm xuất phát của những chuyến đi nguyên bản" : "Hue Imperial Citadel — UNESCO World Heritage Site"}</span>
            <span className="font-mono text-[10px] uppercase text-[var(--color-ink)]/40 tracking-wider">Cố Đô Huế</span>
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
