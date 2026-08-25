"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function QuickIntro() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      eyebrow: "WHAT WE DO",
      headline: "Real roads. Authentic food. The true Hue.",
      body: "Forget the crowded tourist buses and rushed itineraries. We guide you at the pace of the locals. We stop where the locals eat, ride the backroads absent from Google Maps, and ensure every mile of your journey is safe, comfortable, and deeply authentic.",
      cta: "See all tours →",
    },
    vi: {
      eyebrow: "CHÚNG TÔI LÀM GÌ",
      headline: "Những cung đường thật. Ẩm thực nguyên bản. Một Huế rất riêng.",
      body: "Hãy quên đi những chuyến xe buýt đông đúc và lịch trình vội vã. Chúng mình sẽ đưa bạn đi theo nhịp sống của người bản địa. Dừng chân tại những quán ăn không tên, chạy qua những con đường làng vắng bóng trên bản đồ số, và trên hết, đảm bảo mỗi dặm đường bạn đi đều an toàn, thoải mái và chân thực nhất.",
      cta: "Xem tất cả tour →",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-white py-24 lg:py-36 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        {/* Left — text */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <p className="text-small font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)]">
            {lang.eyebrow}
          </p>
          <h2 className="font-display text-[2.8rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-[var(--color-ink)] whitespace-pre-line overflow-wrap-anywhere">
            {lang.headline}
          </h2>
          <p className="text-body-lg text-[var(--color-ink)]/65 leading-relaxed max-w-sm">
            {lang.body}
          </p>
          <Link
            href={`/${currentLocale}/tours`}
            className="self-start text-body font-semibold text-[var(--color-ink)] border-b-2 border-[var(--color-terracotta)] pb-0.5 hover:text-[var(--color-terracotta)] transition-colors"
          >
            {lang.cta}
          </Link>
        </div>

        {/* Right — asymmetric photo grid */}
        <div className="lg:col-span-7 grid grid-cols-12 grid-rows-2 gap-4 h-[480px] lg:h-[560px]">
          {/* Large image — left, spans 2 rows */}
          <div className="col-span-7 row-span-2 relative rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)]">
            <Image
              src="/photo/haivanpass.jpg"
              alt="Hai Van Pass motorbike tour"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 60vw, 35vw"
            />
          </div>
          {/* Top-right image */}
          <div className="col-span-5 row-span-1 relative rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)]">
            <Image
              src="/photo/hue-imperal-city.jpg"
              alt="Hue Imperial City"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 40vw, 25vw"
            />
          </div>
          {/* Bottom-right image */}
          <div className="col-span-5 row-span-1 relative rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)]">
            <Image
              src="/photo/huefoodtour.jpg"
              alt="Hue food tour"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 40vw, 25vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
