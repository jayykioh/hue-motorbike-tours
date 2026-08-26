"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function BrandStatement() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      headline: "You won't find the real Vietnam looking through a bus window.",
      paragraph1: "I'm Mai Anh Tu. For over a decade, my team and I have been showing travelers the hidden side of Central Vietnam. We don't just drive; we share the stories, the secret food spots, and the vibrant culture of our home.",
      paragraph2: "Your safety is our absolute priority. We use well-maintained bikes, provide high-quality safety gear, and ride at a pace that lets you truly take in the scenery. Whether it's your first time on a motorbike or you're a seasoned rider, you're in safe, experienced hands.",
      imageCaption: "Mai Anh Tu — Founder & Head Guide",
    },
    vi: {
      headline: "Việt Nam thực sự không nằm sau khung cửa kính xe buýt.",
      paragraph1: "Chào bạn, mình là Mai Anh Tú. Hơn 10 năm qua, đội ngũ của mình đã dẫn đường cho du khách khám phá một miền Trung rất khác. Chúng mình không chỉ là tài xế, mà còn là những người kể chuyện, đưa bạn đến những quán ăn bí mật và trải nghiệm văn hóa bản địa chân thực nhất.",
      paragraph2: "Sự an toàn của bạn luôn được đặt lên hàng đầu. Toàn bộ xe đều được bảo dưỡng kỹ lưỡng, trang bị đồ bảo hộ chất lượng cao và di chuyển với tốc độ vừa phải để bạn tha hồ ngắm cảnh. Dù bạn lần đầu ngồi xe máy hay đã quá quen thuộc, bạn luôn được đảm bảo an toàn tuyệt đối.",
      imageCaption: "Mai Anh Tú — Người sáng lập",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-white py-16 lg:py-40 px-5 sm:px-6">
      <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
        
        {/* Left: Typography — appears below image on mobile */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
          <h2 className="text-[1.9rem] sm:text-h2 lg:text-[3.5rem] font-display text-[var(--color-ink)] leading-[1.1] tracking-tight">
            {lang.headline}
          </h2>
          <div className="flex flex-col gap-5 text-body text-[var(--color-ink)]/70 max-w-xl">
            <p className="leading-relaxed">{lang.paragraph1}</p>
            <p className="leading-relaxed">{lang.paragraph2}</p>
          </div>
        </div>

        {/* Right: Founder Image — appears first on mobile */}
        <div className="lg:col-span-5 flex flex-col gap-3 order-1 lg:order-2">
          <div className="relative w-full aspect-[3/2] sm:aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-limestone)] shadow-xl shadow-black/8">
            <Image 
              src="/photo/thumbnail.jpg" 
              alt="Mai Anh Tu - Founder of Hue Motorbike Tours"
              fill
              className="object-cover transition-transform duration-1000 ease-[var(--ease-standard)]"
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
