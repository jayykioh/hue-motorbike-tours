import Image from "next/image";

type Props = {
  locale: string;
};

export default function MeetExpert({ locale }: Props) {
  const isVi = locale === "vi";

  const t = {
    title: isVi ? "Chuyên Gia Địa Phương Của Bạn" : "Meet Your Local Expert",
    subtitle: isVi 
      ? "Người sáng lập Hue Bike Tour với 15+ năm kinh nghiệm" 
      : "Founder of Hue Bike Tour & 15+ Year Veteran Easy Rider",
    bio: isVi 
      ? "Xin chào, tôi là Tú. Sau hơn một thập kỷ rong ruổi trên mọi nẻo đường đèo từ Huế đến Hội An, tôi thành lập Hue Bike Tour với một sứ mệnh duy nhất: Mang đến cho bạn một trải nghiệm Việt Nam chân thực nhất. Chúng tôi không đi theo những lối mòn công nghiệp. Chúng tôi đưa bạn khám phá những đầm phá hoang sơ, những ngôi làng ẩn mình và những con đèo hùng vĩ nhất miền Trung."
      : "Hi, I'm Tu. After more than a decade of navigating the stunning mountain passes from Hue to Hoi An, I founded Hue Bike Tour with a single mission: To give you the most authentic Vietnamese experience. We don't do industrial tourism. We take you to pristine lagoons, hidden villages, and the most majestic mountain passes in Central Vietnam.",
    credentials: isVi 
      ? ["15+ Năm Kinh Nghiệm", "Lái Xe An Toàn", "Am Hiểu Văn Hóa"] 
      : ["15+ Years Experience", "Safety Certified", "Cultural Expert"],
    signature: "Tu Le"
  };

  return (
    <section className="py-20 md:py-32 bg-[var(--color-ink)] text-[var(--color-sand)] overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <span className="text-[var(--color-terracotta)] font-bold tracking-widest uppercase text-sm">
                {isVi ? "Về Chúng Tôi" : "Who We Are"}
              </span>
              <h2 className="font-display text-h2 lg:text-h1 leading-tight text-white">
                {t.title}
              </h2>
              <h3 className="text-body-lg text-[var(--color-sand)]/70 border-l-2 border-[var(--color-terracotta)] pl-4">
                {t.subtitle}
              </h3>
            </div>
            
            <p className="text-body leading-relaxed text-[var(--color-sand)]/90">
              {t.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {t.credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                  <span className="text-[var(--color-terracotta)] text-lg">✓</span>
                  <span className="text-sm font-semibold">{cred}</span>
                </div>
              ))}
            </div>

            {/* Sister site network */}
            <div className="flex flex-col gap-3 pt-2 border-t border-white/10 mt-2">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-terracotta)]">
                {isVi ? "Mạng lưới Tour" : "Tour Network"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hoianmotorbike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--color-terracotta)]/40 transition-all text-sm font-semibold text-[var(--color-sand)]/80 hover:text-white"
                >
                  <svg className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {isVi ? "Tour Xe Máy Hội An" : "Hoi An Motorbike Tours"}
                </a>
                <a
                  href="https://dananghoiantour.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--color-terracotta)]/40 transition-all text-sm font-semibold text-[var(--color-sand)]/80 hover:text-white"
                >
                  <svg className="w-3.5 h-3.5 text-[var(--color-terracotta)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {isVi ? "Tour Đà Nẵng & Hội An" : "Da Nang & Hoi An Tours"}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-display text-3xl text-white/90 italic">{t.signature}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/gallery/IMG_3962.jpg"
              alt="Tu - Founder of Hue Motorbike Tours"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/50 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}