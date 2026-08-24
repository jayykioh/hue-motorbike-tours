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
    <section className="bg-[var(--color-ink)] py-20 lg:py-32 px-6 text-[var(--color-limestone)]">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-small font-semibold tracking-widest uppercase opacity-60 text-[var(--color-sand)] mb-4">
            {lang.subtitle}
          </p>
          <h2 className="text-h3 lg:text-h2 font-display">
            {lang.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {lang.points.map((point, idx) => (
            <div key={idx} className="flex flex-col gap-4 text-center items-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center text-[var(--color-limestone)] font-display text-h4 mb-2">
                {idx + 1}
              </div>
              <h3 className="text-h4 font-display text-[var(--color-sand)]">
                {point.title}
              </h3>
              <p className="text-body opacity-80 leading-relaxed max-w-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
