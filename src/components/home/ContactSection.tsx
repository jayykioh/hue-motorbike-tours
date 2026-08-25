"use client";

import { usePathname } from "next/navigation";

export default function ContactSection() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      eyebrow: "FIND US",
      headline: "We're based in Hue.\nAlways reachable.",
      whatsapp: "Chat on WhatsApp",
      hours: "Available daily, 7 AM – 9 PM (Vietnam time)",
      mapLabel: "Hue City, Vietnam",
      address: "Hue City, Thua Thien Hue Province, Vietnam",
    },
    vi: {
      eyebrow: "LIÊN HỆ",
      headline: "Chúng tôi ở Huế.\nLuôn sẵn sàng.",
      whatsapp: "Nhắn tin WhatsApp",
      hours: "Hoạt động mỗi ngày, 7 SA – 9 CH (giờ Việt Nam)",
      mapLabel: "Thành phố Huế, Việt Nam",
      address: "Thành phố Huế, Tỉnh Thừa Thiên Huế, Việt Nam",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="bg-[var(--color-limestone)] py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        {/* Left — contact info */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-small font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)]">
              {lang.eyebrow}
            </p>
            <h2 className="font-display text-[2.5rem] lg:text-[3rem] leading-[1.05] tracking-tight text-[var(--color-ink)] whitespace-pre-line overflow-wrap-anywhere">
              {lang.headline}
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {/* WhatsApp */}
            <div className="flex flex-col gap-2">
              <span className="text-small font-semibold uppercase tracking-widest text-[var(--color-ink)]/50">WhatsApp</span>
              <a
                href="https://wa.me/84862391918?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors"
              >
                +84 862 391 918
              </a>
              <span className="text-small text-[var(--color-ink)]/50">{lang.hours}</span>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <span className="text-small font-semibold uppercase tracking-widest text-[var(--color-ink)]/50">
                {currentLocale === 'vi' ? 'Địa chỉ' : 'Location'}
              </span>
              <p className="text-body text-[var(--color-ink)]/75">{lang.address}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <span className="text-small font-semibold uppercase tracking-widest text-[var(--color-ink)]/50">
                Email
              </span>
              <a
                href="mailto:info.hoianmotorbike@gmail.com"
                className="text-body font-semibold text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors"
              >
                info.hoianmotorbike@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-2">
              <span className="text-small font-semibold uppercase tracking-widest text-[var(--color-ink)]/50">
                {currentLocale === 'vi' ? 'Mạng xã hội' : 'Social'}
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.facebook.com/Vietnamonmotorbike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body font-semibold text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g293926-d12453921-Reviews-Trider_Adventure_Motorbike_Tours-Hue_Thua_Thien_Hue_Province.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body font-semibold text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors"
                >
                  TripAdvisor
                </a>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="https://wa.me/84862391918?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start mt-2"
            >
              {lang.whatsapp} →
            </a>
          </div>
        </div>

        {/* Right — Google Maps embed */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)] shadow-lg shadow-black/5">
            <iframe
              title={lang.mapLabel}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30627.84735994249!2d107.56994!3d16.4637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13d3711b281%3A0x8b79a2e929cbbda!2sHue%20Imperial%20City!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-small text-[var(--color-ink)]/50 text-center">
            {lang.mapLabel}
          </p>
        </div>

      </div>
    </section>
  );
}
