"use client";

import { usePathname } from "next/navigation";
import ScrollExpand from "@/components/ui/ScrollExpand";

export default function ImmersiveExperience() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      title: "Your Easy Rider Awaits",
      scrollHint: "Scroll to discover",
      overlay: {
        headline: "Ride behind a local. See the real thing.",
        body: "Our experienced Easy Riders carry you safely through Hue's royal tombs, the DMZ, Hai Van Pass, Lang Co Beach, Thien Mu Pagoda and beyond — at your pace, on roads no tour bus ever takes.",
        tags: ["Imperial Citadel", "Hai Van Pass", "Lang Co Beach", "Thien Mu Pagoda", "Tam Giang Lagoon", "DMZ Tunnels"],
      }
    },
    vi: {
      title: "Tài Xế Easy Rider Đang Chờ",
      scrollHint: "Cuộn để khám phá",
      overlay: {
        headline: "Ngồi sau một người địa phương. Trải nghiệm thật sự.",
        body: "Những tài xế Easy Rider lâu năm của chúng mình sẽ đưa bạn đi an toàn qua các lăng tẩm hoàng triều, khu DMZ, đèo Hải Vân, vịnh Lăng Cô, chùa Thiên Mụ và nhiều nơi khác — theo nhịp của bạn, trên những con đường mà xe du lịch không bao giờ đặt chân tới.",
        tags: ["Đại Nội", "Đèo Hải Vân", "Vịnh Lăng Cô", "Chùa Thiên Mụ", "Phá Tam Giang", "Địa Đạo DMZ"],
      }
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-white w-full">
      <ScrollExpand
        src="/photo/immersive.jpg"
        alt="Easy Rider Hue Motorbike Tours"
        title={lang.title}
        scrollHint={lang.scrollHint}
        startWidth={42}
        startHeight={58}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.35}
        scrollDistance={1.2}
        holdDistance={0.35}
        smoothing={0.1}
        overlayScrim={0.55}
        useWindowScroll={true}
        enabled={true}
      >
        {/* Overlay shown when image is fully expanded */}
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto text-center px-6">
          <h2 className="text-white font-display text-3xl lg:text-5xl leading-tight">
            {lang.overlay.headline}
          </h2>
          <p className="text-white/85 text-base lg:text-lg leading-relaxed max-w-xl">
            {lang.overlay.body}
          </p>
          {/* Destination tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {lang.overlay.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-white/30 text-white/80 text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}
