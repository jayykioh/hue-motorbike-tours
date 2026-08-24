"use client";

import { usePathname } from "next/navigation";

export default function FinalCta() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      subtitle: "READY TO RIDE?",
      title: "Let's plan your journey.",
      description: "Drop us a message on WhatsApp. We'll help you figure out the best route based on the weather, your timeline, and what you want to see.",
      buttonText: "Message on WhatsApp"
    },
    vi: {
      subtitle: "SẴN SÀNG LÊN ĐƯỜNG?",
      title: "Lên kế hoạch chuyến đi.",
      description: "Gửi tin nhắn cho chúng tôi qua WhatsApp. Chúng tôi sẽ tư vấn lộ trình phù hợp nhất dựa trên thời tiết, thời gian và sở thích của bạn.",
      buttonText: "Nhắn tin qua WhatsApp"
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-[var(--color-limestone)] py-24 lg:py-32 px-6 border-t border-[var(--color-sand)]">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-small font-semibold tracking-widest uppercase opacity-60 text-[var(--color-ink)]">
            {lang.subtitle}
          </p>
          <h2 className="text-h2 lg:text-h1 font-display text-[var(--color-ink)]">
            {lang.title}
          </h2>
        </div>
        
        <p className="text-body-lg text-[var(--color-ink)] opacity-80 max-w-xl">
          {lang.description}
        </p>

        <a 
          href="https://wa.me/84862391918?text=Hi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary mt-4"
        >
          {lang.buttonText} →
        </a>
      </div>
    </section>
  );
}
