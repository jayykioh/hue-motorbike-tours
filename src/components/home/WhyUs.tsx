"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function WhyUs() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      subtitle: "THE DIFFERENCE",
      title: "Why ride with us?",
      points: [
        {
          title: "Expert Hue Easy Rider Guides",
          desc: "Our easy rider hue guides know routes no Google Map shows — backroads with the best views, the freshest food stalls, and zero tourist crowds."
        },
        {
          title: "Safest Motorbike Tour in Hue",
          desc: "Every hue bike tour uses well-maintained motorbikes, full safety gear, and experienced riders who know every bend of every road."
        },
        {
          title: "Authentic Hue Cultural Experience",
          desc: "We stop for real local food, royal tomb stories, and village life — not just photo ops. A hue motorbike tour that goes beyond the surface."
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
    <section className="bg-[var(--color-ink)] py-16 lg:py-40 px-5 sm:px-6 text-[var(--color-limestone)] overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="text-center mb-12 lg:mb-20 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-terracotta)]" />
            <p className="text-[0.8rem] font-bold tracking-[0.25em] uppercase text-[var(--color-terracotta)]">
              {lang.subtitle}
            </p>
          </div>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-display leading-[1.05] tracking-tight text-white">
            {lang.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
          {lang.points.map((point, idx) => {
            const pointImages = [
              "/photo/hoiantohue-pictureofeasyriderandcustomer.jpg",
              "/photo/hai-van-pass-from the top.jpg",
              "/photo/visithue-tomb.jpg",
            ];

            return (
              <div
                key={idx}
                className="flex flex-col gap-5 text-left p-5 sm:p-6 rounded-[var(--radius-lg)] bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all group"
              >
                <div className="relative w-full aspect-[16/10] rounded-[var(--radius-md)] overflow-hidden border border-white/10 shadow-lg">
                  <Image
                    src={pointImages[idx]}
                    alt={point.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--color-terracotta)] tracking-widest uppercase">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      Standard
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display text-white leading-tight">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-body">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
