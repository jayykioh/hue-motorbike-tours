"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function QuickIntro() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      eyebrow: "WHAT WE DO",
      headline: "Real roads. Authentic food. The true Hue.",
      body: "Forget the crowded tourist buses and rushed itineraries. We guide you at the pace of the locals — stopping where the locals eat, riding the backroads absent from Google Maps, and ensuring every mile of your journey is safe, comfortable, and deeply authentic.",
      cta: "See all tours →",
    },
    vi: {
      eyebrow: "CHÚNG TÔI LÀM GÌ",
      headline: "Những cung đường thật. Ẩm thực nguyên bản. Một Huế rất riêng.",
      body: "Hãy quên đi những chuyến xe buýt đông đúc và lịch trình vội vã. Chúng mình sẽ đưa bạn đi theo nhịp sống của người bản địa — dừng chân tại những quán ăn không tên, chạy qua những con đường làng vắng bóng trên bản đồ số, và đảm bảo mỗi dặm đường bạn đi đều an toàn, thoải mái và chân thực nhất.",
      cta: "Xem tất cả tour →",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-xl">
          <p className="text-small font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)]">
            {lang.eyebrow}
          </p>
          <h2 className="font-display text-[2.4rem] lg:text-[3rem] leading-[1.05] tracking-tight text-[var(--color-ink)]">
            {lang.headline}
          </h2>
          <p className="text-body-lg text-[var(--color-ink)]/65 leading-relaxed">
            {lang.body}
          </p>
        </div>
        <Link
          href={`/${currentLocale}/tours`}
          className="shrink-0 self-start md:self-end text-body font-semibold text-[var(--color-ink)] border-b-2 border-[var(--color-terracotta)] pb-0.5 hover:text-[var(--color-terracotta)] transition-colors"
        >
          {lang.cta}
        </Link>
      </div>
    </section>
  );
}
