"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function BrandStatement() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      headline: "The real Vietnam isn't seen through a bus window.",
      paragraph1: "Hi, I'm Mai Anh Tu. For over 10 years, I've been guiding travelers through Central Vietnam. But the tours I lead today are different from the ones I started with.",
      paragraph2: "We skip the rushed tourist traps and crowded highways. Instead, we take the rural roads, stop at local cafes, and experience the landscape the way locals do—on a motorbike, taking it slow.",
      imageCaption: "Mai Anh Tu — Founder & Head Guide",
    },
    vi: {
      headline: "Việt Nam thực sự không nằm sau khung cửa kính xe buýt.",
      paragraph1: "Chào bạn, mình là Mai Anh Tú. Hơn 10 năm qua, mình đã dẫn đường cho du khách qua miền Trung. Nhưng những chuyến đi hiện tại khác xa với những ngày đầu.",
      paragraph2: "Chúng ta sẽ bỏ qua những điểm du lịch vội vã. Thay vào đó, len lỏi qua đường làng, dừng ở quán cà phê nhỏ ven đường và cảm nhận phong cảnh theo cách của người bản địa — trên chiếc xe máy, thật chậm rãi.",
      imageCaption: "Mai Anh Tú — Người sáng lập",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-[var(--color-limestone)] py-20 lg:py-32 px-6">
      <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left: Typography */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h2 className="text-h3 lg:text-h2 font-display text-[var(--color-terracotta)] leading-tight max-w-2xl">
            "{lang.headline}"
          </h2>
          <div className="flex flex-col gap-6 text-body-lg text-[var(--color-ink)] opacity-80 max-w-xl">
            <p>{lang.paragraph1}</p>
            <p>{lang.paragraph2}</p>
          </div>
        </div>

        {/* Right: Founder Image */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)]">
            <Image 
              src="https://images.unsplash.com/photo-1542640244-7e672d6cb466?auto=format&fit=crop&q=80&w=600" 
              alt="Mai Anh Tu - Founder"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <p className="text-small font-semibold tracking-widest uppercase opacity-60 text-[var(--color-ink)] text-center">
            {lang.imageCaption}
          </p>
        </div>

      </div>
    </section>
  );
}
