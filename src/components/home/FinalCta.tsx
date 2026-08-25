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
      buttonText: "Message on WhatsApp",
      badges: ["No Hidden Fees", "Free Cancellation", "Book Now, Pay Later"]
    },
    vi: {
      subtitle: "SẴN SÀNG LÊN ĐƯỜNG?",
      title: "Lên kế hoạch chuyến đi.",
      description: "Gửi tin nhắn cho chúng tôi qua WhatsApp. Chúng tôi sẽ tư vấn lộ trình phù hợp nhất dựa trên thời tiết, thời gian và sở thích của bạn.",
      buttonText: "Nhắn tin qua WhatsApp",
      badges: ["Không Phí Ẩn", "Hủy Miễn Phí", "Đặt Trước, Trả Sau"]
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-[var(--color-limestone)] py-16 lg:py-32 px-5 sm:px-6 border-t border-[var(--color-sand)]">
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
            href="https://wa.me/84899215366?text=Hi%20I%27d%20like%20to%20plan%20a%20trip" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary mt-4 w-full sm:w-auto text-center min-h-[56px] text-lg px-10 flex items-center justify-center hover:scale-105 transition-transform"
          >
            {lang.buttonText} →
          </a>

          {/* Trust Badges / Marketing Hooks */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-6">
            {lang.badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[0.875rem] font-semibold text-[var(--color-ink)]/70">
                <svg className="w-5 h-5 text-[var(--color-terracotta)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
