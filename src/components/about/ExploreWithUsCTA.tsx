import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_PLAN_URL } from "@/lib/whatsapp";

export default function ExploreWithUsCTA({ locale }: { locale: string }) {
  const isVi = locale === "vi";

  const t = {
    eyebrow: isVi ? "KHÁM PHÁ HUẾ CÙNG CHÚNG TÔI" : "EXPLORE HUE WITH US",
    title: isVi
      ? "Sẵn Sàng Trải Nghiệm\nHuế Thực Sự?"
      : "Ready to Experience\nthe Real Hue?",
    desc: isVi
      ? "Đừng chỉ đọc về Huế — hãy đến và cảm nhận. Các tour xe máy của chúng tôi đưa bạn đến những địa điểm này và xa hơn thế, theo nhịp của riêng bạn, với hướng dẫn viên địa phương thực sự biết từng con đường."
      : "Don't just read about Hue — come and feel it. Our motorbike tours bring you to these places and beyond, at your own pace, with local guides who actually know every road.",
    tours: [
      {
        name: isVi ? "Tour Đại Nội & Lăng Tẩm" : "Imperial City & Royal Tombs",
        slug: "hue-imperial-city-tour",
        desc: isVi ? "Đại Nội · Lăng Khải Định · Lăng Tự Đức" : "Imperial Citadel · Khai Dinh · Tu Duc Tombs",
        duration: isVi ? "1 ngày" : "Full day",
      },
      {
        name: isVi ? "Huế đến Hội An qua Hải Vân" : "Hue to Hoi An via Hai Van Pass",
        slug: "hue-to-hoi-an-via-hai-van-pass",
        desc: isVi ? "Đèo Hải Vân · Làng chài · Hội An" : "Hai Van Pass · Fishing villages · Hoi An",
        duration: isVi ? "1 ngày" : "Full day",
      },
      {
        name: isVi ? "Tour Ẩm Thực & Tam Giang" : "Food Tour & Tam Giang Sunset",
        slug: "hue-food-tour-tam-giang-sunset",
        desc: isVi ? "Chợ Đông Ba · Làng nghề · Đầm Tam Giang" : "Dong Ba Market · Craft villages · Tam Giang",
        duration: isVi ? "1 ngày" : "Full day",
      },
    ],
    ctaMain: isVi ? "Xem Tất Cả Các Tour →" : "Browse All Tours →",
    ctaWhatsApp: isVi ? "Đặt tour qua WhatsApp" : "Book via WhatsApp",
    ratings: isVi ? "87 đánh giá 5 sao · Google Maps" : "87 five-star reviews · Google Maps",
    imageAlt: "Easy rider guide with tourists on motorbike in Hue Vietnam",
  };

  return (
    <section className="py-20 lg:py-36 bg-[var(--color-night)] text-[var(--color-limestone)] border-t border-white/10">
      <div className="max-w-[var(--container-max)] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[var(--color-terracotta)]" />
              <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-[var(--color-terracotta)]">
                {t.eyebrow}
              </p>
            </div>

            {/* Title */}
            <h2 className="font-display text-[2.5rem] sm:text-[3.2rem] lg:text-[4rem] text-[var(--color-limestone)] leading-[0.95] tracking-tight whitespace-pre-line">
              {t.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-body-lg text-[var(--color-limestone)]/70 leading-relaxed max-w-lg">
              {t.desc}
            </p>

            {/* Tour teasers */}
            <div className="flex flex-col gap-3">
              {t.tours.map((tour, i) => (
                <Link
                  key={i}
                  href={`/${locale}/tours/${tour.slug}`}
                  className="flex items-center justify-between gap-4 p-4 rounded-[var(--radius-md)] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--color-terracotta)]/40 transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm sm:text-base font-semibold text-[var(--color-limestone)] group-hover:text-[var(--color-terracotta)] transition-colors">
                      {tour.name}
                    </span>
                    <span className="text-xs text-[var(--color-limestone)]/50">
                      {tour.desc}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs font-mono text-[var(--color-limestone)]/40 hidden sm:block">{tour.duration}</span>
                    <svg className="w-4 h-4 text-[var(--color-terracotta)] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={`/${locale}/tours`}
                className="btn-primary flex-1 sm:flex-none justify-center text-base"
              >
                {t.ctaMain}
              </Link>
              <a
                href={WHATSAPP_PLAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 sm:flex-none justify-center text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.ctaWhatsApp}
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-xs text-[var(--color-limestone)]/40">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span>{t.ratings}</span>
            </div>
          </div>

          {/* Right: Image */}
          <figure className="order-first lg:order-last">
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/photo/hoiantohue-pictureofeasyriderandcustomer.jpg"
                alt={t.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 right-4 bg-[var(--color-night)]/80 backdrop-blur-sm rounded-[var(--radius-md)] p-4 border border-white/10">
                <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-terracotta)] mb-1">
                  {isVi ? "Đây là những gì chúng tôi làm" : "This is what we do"}
                </p>
                <p className="text-sm text-[var(--color-limestone)]/80">
                  {isVi
                    ? "Không phải xe buýt, không phải lịch trình cứng nhắc. Chỉ là bạn, chiếc xe máy, và một hướng dẫn viên địa phương thực sự."
                    : "No buses, no rigid schedules. Just you, a motorbike, and a genuinely local guide."}
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
