"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function BrandStatement() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      eyebrow: "OUR PHILOSOPHY",
      headline: "You won't find the real Vietnam looking through a bus window.",
      paragraph1: "Central Vietnam isn't meant to be rushed through an air-conditioned bus window. Its true soul lives in the coastal wind whistling through the Hai Van pines, the scent of morning woodsmoke over countryside rice fields, and the unhurried warmth of roadside noodle stalls.",
      paragraph2: "On the back of a motorbike with an experienced local guide, you are not a passive spectator. You stop wherever a view calls you, ride hidden coastal trails that tour buses can't reach, and experience Vietnam at human scale — authentic, immersive, and completely safe.",
      imageCaption: "The open road between Hue and Hoi An · Central Vietnam",
    },
    vi: {
      eyebrow: "TRIẾT LÝ HÀNH TRÌNH",
      headline: "Việt Nam thực sự không nằm sau khung cửa kính xe buýt.",
      paragraph1: "Miền Trung không phải là nơi để lướt qua vội vã sau ô kính xe khách có điều hòa. Cái hồn của mảnh đất này nằm ở tiếng gió rít qua rặng thông đèo Hải Vân, mùi rơm rạ thơm nồng trên những cánh đồng làng quê, và nụ cười đôn hậu bên quán nước ven đường.",
      paragraph2: "Ngồi sau tay lái của người bạn địa phương dày dặn kinh nghiệm, bạn không còn là du khách đứng ngoài cuộc. Bạn có thể dừng chân bất cứ khi nào thấy cảnh đẹp, luồn lách qua những cung đường ven biển vắng bóng xe du lịch, và cảm nhận một Việt Nam trọn vẹn theo cách chân thực nhất.",
      imageCaption: "Những nẻo đường tự do giữa Huế và Hội An · Miền Trung",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-white py-16 lg:py-40 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
        
        {/* Left: Typography */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-terracotta)]" />
              <p className="text-[0.8rem] font-bold tracking-[0.25em] uppercase text-[var(--color-terracotta)]">
                {lang.eyebrow}
              </p>
            </div>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-display text-[var(--color-ink)] leading-[1.05] tracking-tight">
              {lang.headline}
            </h2>
          </div>
          
          <div className="flex flex-col gap-5 text-base sm:text-lg text-[var(--color-ink)]/75 max-w-xl font-body">
            <p className="leading-relaxed">{lang.paragraph1}</p>
            <p className="leading-relaxed">{lang.paragraph2}</p>
          </div>
        </div>

        {/* Right: Scenic Journey Image */}
        <figure className="lg:col-span-5 flex flex-col gap-3 order-1 lg:order-2">
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-sand)] border border-[var(--color-sand)] shadow-xl shadow-black/8">
            <Image 
              src="/photo/danangtuhue.png" 
              alt="Motorbike touring the open road between Hue and Hoi An"
              fill
              className="object-cover transition-transform duration-1000 ease-[var(--ease-standard)] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <figcaption className="text-xs text-[var(--color-ink)]/55 flex items-center justify-between px-1">
            <span>{lang.imageCaption}</span>
            <span className="font-mono text-[10px] uppercase text-[var(--color-ink)]/40 tracking-wider">Field Note</span>
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
