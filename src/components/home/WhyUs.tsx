"use client";

import { usePathname } from "next/navigation";

export default function WhyUs() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      subtitle: "THE DIFFERENCE",
      title: "Why ride with us?",
      points: [
        {
          title: "Local Knowledge",
          desc: "We know the roads that aren't on Google Maps. The ones with the best views and the least traffic."
        },
        {
          title: "Safety First",
          desc: "Maintained bikes, experienced riders, and routes chosen for safety as much as scenery."
        },
        {
          title: "Cultural Immersion",
          desc: "We stop for real local food, village life, and historical context—not just photo ops."
        }
      ]
    },
    vi: {
      subtitle: "SỰ KHÁC BIỆT",
      title: "Tại sao chọn chúng tôi?",
      points: [
        {
          title: "Kiến thức địa phương",
          desc: "Chúng tôi biết những con đường không có trên bản đồ. Những lối đi cảnh đẹp và vắng xe nhất."
        },
        {
          title: "An toàn là trên hết",
          desc: "Xe luôn được bảo dưỡng tốt, người lái kinh nghiệm, và lộ trình ưu tiên an toàn tuyệt đối."
        },
        {
          title: "Trải nghiệm văn hóa",
          desc: "Dừng chân thưởng thức ẩm thực bản địa, ngắm nhìn cuộc sống làng quê và tìm hiểu lịch sử."
        }
      ]
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-[var(--color-ink)] py-16 lg:py-40 px-5 sm:px-6 text-[var(--color-limestone)]">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="text-center mb-12 lg:mb-28 flex flex-col items-center gap-4">
          <p className="text-small font-semibold tracking-widest uppercase text-[var(--color-terracotta)]">
            {lang.subtitle}
          </p>
          <h2 className="text-h2 lg:text-[3.5rem] font-display leading-[1.1] tracking-tight">
            {lang.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16">
          {lang.points.map((point, idx) => (
            <div key={idx} className="flex flex-col gap-4 text-center items-center p-6 sm:p-0 rounded-[var(--radius-md)] sm:rounded-none bg-white/5 sm:bg-transparent">
              <div className="w-12 h-12 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center text-[var(--color-limestone)] font-display text-h4 mb-2 shrink-0">
                {idx + 1}
              </div>
              <h3 className="text-xl sm:text-h4 font-display text-[var(--color-sand)]">
                {point.title}
              </h3>
              <p className="text-base text-[var(--color-limestone)]/75 leading-relaxed max-w-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
