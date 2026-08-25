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
      headline: "Step into the soul of Vietnam's ancient capital.",
      paragraph1: "Hue was once the imperial heart of Vietnam. Today, it remains a city of quiet poetry, where royal tombs hide in pine forests and life moves at the gentle pace of the Perfume River.",
      paragraph2: "Forget the crowded buses and rushed schedules. We guide you through the real Hue. You will taste authentic local dishes, ride along hidden village roads, and experience the profound beauty of Central Vietnam in complete safety and comfort.",
      cta: "Explore Our Tours →",
    },
    vi: {
      eyebrow: "KHÁM PHÁ HUẾ",
      headline: "Chạm vào linh hồn của vùng đất cố đô.",
      paragraph1: "Huế từng là trái tim của các triều đại hoàng gia Việt Nam. Đến tận bây giờ, nơi đây vẫn giữ vẹn nguyên nét thơ mộng với những lăng tẩm ẩn mình giữa đồi thông và nhịp sống êm đềm bên dòng sông Hương.",
      paragraph2: "Hãy gác lại những chuyến xe buýt đông đúc và lịch trình vội vã. Chúng mình sẽ đưa bạn đi sâu vào một Huế rất đỗi chân thực. Bạn sẽ thưởng thức ẩm thực nguyên bản, rong ruổi trên những con đường làng yên ả và tận hưởng trọn vẹn vẻ đẹp của dải đất miền Trung một cách an toàn nhất.",
      cta: "Xem Các Lịch Trình →",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-white py-16 lg:py-28 px-5 sm:px-6">
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
          <Link
            href={`/${currentLocale}/tours`}
            className="mt-2 self-start text-body font-semibold text-[var(--color-ink)] border-b-2 border-[var(--color-terracotta)] pb-0.5 hover:text-[var(--color-terracotta)] transition-colors"
          >
            {lang.cta}
          </Link>
        </div>

        {/* Right: Illustrative Image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-[var(--radius-lg)] overflow-hidden shadow-2xl shadow-black/5 order-1 lg:order-2">
          <Image 
            src="/photo/hue-imperal-city.jpg" 
            alt="Hue Imperial City" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-1000 ease-[var(--ease-standard)]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
