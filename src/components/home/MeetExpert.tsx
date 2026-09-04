import Image from "next/image";

type Props = {
  locale: string;
};

export default function MeetExpert({ locale }: Props) {
  const isVi = locale === "vi";

  const t = {
    eyebrow: isVi ? "NGƯỜI DẪN ĐƯỜNG BẢN ĐỊA" : "MEET YOUR LEAD EASY RIDER",
    title: isVi ? "Chuyên Gia Địa Phương Của Bạn" : "Meet Your Local Expert",
    subtitle: isVi 
      ? "Người sáng lập Hue Bike Tour với hơn 15 năm rong ruổi khắp các cung đèo miền Trung." 
      : "Founder of Hue Bike Tour & 15+ year veteran Easy Rider across Central Vietnam.",
    bio: isVi 
      ? "Xin chào, tôi là Tú. Sau hơn một thập kỷ rong ruổi trên mọi nẻo đường đèo từ Huế đến Hội An, tôi thành lập Hue Bike Tour với một sứ mệnh duy nhất: mang đến cho bạn trải nghiệm miền Trung nguyên bản nhất. Chúng tôi không đi theo những lối mòn du lịch công nghiệp. Chúng tôi đưa bạn khám phá những đầm phá hoang sơ, những ngôi làng ẩn mình và những khúc cua hùng vĩ nhất theo nhịp độ của riêng bạn."
      : "Hi, I'm Tu. After more than a decade navigating the mountain passes from Hue to Hoi An, I founded Hue Bike Tour with a single mission: to give you an authentic, unhurried Vietnamese experience. We don't do mass bus tours. We take you to serene coastal lagoons, tucked-away villages, and sweeping mountain roads — safely, and at your own pace.",
    statYears: isVi ? "Năm dẫn tour đèo" : "Years guiding passes",
    statLocal: isVi ? "Tài xế bản địa Huế" : "Native local riders",
    statRating: isVi ? "Đánh giá Google Maps" : "Google Maps rating",
    partnerLabel: isVi ? "Tuyến liên kết:" : "Partner routes:",
    partnerHoiAn: isVi ? "Tour Xe Máy Hội An" : "Hoi An Motorbike Tours",
    partnerDaNang: isVi ? "Tour Đà Nẵng & Hội An" : "Da Nang & Hoi An Tours",
    caption: isVi ? "Mai Anh Tú cùng du khách trên hành trình đèo Hải Vân" : "Mai Anh Tu with travelers along the Hai Van Pass route",
    role: isVi ? "Người sáng lập & Hướng dẫn viên trưởng" : "Founder & Lead Easy Rider",
  };

  return (
    <section className="py-20 md:py-32 bg-[var(--color-limestone)] text-[var(--color-ink)] border-t border-[var(--color-sand)] overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-5 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-terracotta)]" />
                <p className="text-[0.8rem] font-bold tracking-[0.25em] uppercase text-[var(--color-terracotta)]">
                  {t.eyebrow}
                </p>
              </div>
              <h2 className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.05] tracking-tight text-[var(--color-ink)]">
                {t.title}
              </h2>
              <p className="text-base sm:text-body-lg text-[var(--color-ink)]/75 border-l-2 border-[var(--color-terracotta)] pl-4 font-body leading-relaxed mt-1">
                {t.subtitle}
              </p>
            </div>
            
            <p className="text-base sm:text-[1.05rem] leading-relaxed text-[var(--color-ink)]/80 font-body">
              {t.bio}
            </p>

            {/* Editorial Credentials Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 pb-4 border-y border-[var(--color-sand)]">
              <div>
                <span className="font-display text-3xl sm:text-4xl text-[var(--color-ink)] font-bold block leading-none">15+</span>
                <span className="text-xs sm:text-small text-[var(--color-ink)]/65 font-medium mt-1.5 block">
                  {t.statYears}
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl text-[var(--color-ink)] font-bold block leading-none">100%</span>
                <span className="text-xs sm:text-small text-[var(--color-ink)]/65 font-medium mt-1.5 block">
                  {t.statLocal}
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl text-[var(--color-terracotta)] font-bold block leading-none">5.0 ★</span>
                <span className="text-xs sm:text-small text-[var(--color-ink)]/65 font-medium mt-1.5 block">
                  {t.statRating}
                </span>
              </div>
            </div>

            {/* Sign-off & Sister sites */}
            <div className="flex flex-col gap-4 pt-1">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] font-semibold tracking-tight">
                    Mai Anh Tú
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-terracotta)] tracking-wider uppercase mt-0.5">
                    {t.role}
                  </span>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-ink)]/40">
                  Huế · Việt Nam
                </span>
              </div>

              {/* Partner Routes */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[var(--color-ink)]/60 pt-2">
                <span className="font-semibold uppercase tracking-wider text-[var(--color-ink)]/50">
                  {t.partnerLabel}
                </span>
                <a
                  href="https://hoianmotorbike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-river)] hover:text-[var(--color-terracotta)] hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  {t.partnerHoiAn} →
                </a>
                <span className="text-[var(--color-sand)]">·</span>
                <a
                  href="https://dananghoiantour.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-river)] hover:text-[var(--color-terracotta)] hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  {t.partnerDaNang} →
                </a>
              </div>
            </div>

          </div>

          {/* Image Column */}
          <figure className="lg:col-span-5 flex flex-col gap-3 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-sand)] shadow-xl shadow-black/8 bg-[var(--color-sand)]">
              <Image
                src="/photo/maianhtu-momentswithcustomer.jpg"
                alt="Mai Anh Tu - Founder and lead easy rider guide of Hue Motorbike Tours"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <figcaption className="text-xs text-[var(--color-ink)]/60 flex items-center justify-between px-1">
              <span>{t.caption}</span>
              <span className="font-mono text-[10px] uppercase text-[var(--color-ink)]/40 tracking-wider">Field Note · 2024</span>
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
}