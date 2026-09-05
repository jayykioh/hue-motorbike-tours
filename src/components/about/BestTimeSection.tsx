export default function BestTimeSection({ locale }: { locale: string }) {
  const isVi = locale === "vi";

  const t = {
    eyebrow: isVi ? "THỜI TIẾT & THỜI ĐIỂM ĐẸP NHẤT" : "WHEN TO VISIT HUE",
    title: isVi ? "Thời Điểm Nào Là\nTốt Nhất Để Đến Huế?" : "When Is the Best\nTime to Visit Hue?",
    intro: isVi
      ? "Huế có khí hậu nhiệt đới, chia thành hai mùa rõ rệt. Mỗi mùa mang lại một trải nghiệm khác nhau — điều quan trọng là chọn đúng thời điểm phù hợp với chuyến đi của bạn."
      : "Hue has a tropical climate with two distinct seasons. Each brings a different experience — the key is choosing the right time for your travel style.",
    bestBadge: isVi ? "Tốt nhất" : "Best",
    goodBadge: isVi ? "Khá tốt" : "Good",
    avoidBadge: isVi ? "Mưa nhiều" : "Rainy",
    months: [
      { name: isVi ? "Jan" : "Jan", weather: "good", temp: "22°C", rain: "low", icon: "☀️" },
      { name: isVi ? "Feb" : "Feb", weather: "best", temp: "23°C", rain: "low", icon: "☀️" },
      { name: isVi ? "Mar" : "Mar", weather: "best", temp: "25°C", rain: "low", icon: "☀️" },
      { name: isVi ? "Apr" : "Apr", weather: "best", temp: "28°C", rain: "low", icon: "☀️" },
      { name: isVi ? "May" : "May", weather: "good", temp: "30°C", rain: "moderate", icon: "⛅" },
      { name: isVi ? "Jun" : "Jun", weather: "good", temp: "31°C", rain: "moderate", icon: "⛅" },
      { name: isVi ? "Jul" : "Jul", weather: "good", temp: "31°C", rain: "moderate", icon: "⛅" },
      { name: isVi ? "Aug" : "Aug", weather: "good", temp: "31°C", rain: "moderate", icon: "⛅" },
      { name: isVi ? "Sep" : "Sep", weather: "avoid", temp: "27°C", rain: "high", icon: "🌧️" },
      { name: isVi ? "Oct" : "Oct", weather: "avoid", temp: "24°C", rain: "heavy", icon: "🌧️" },
      { name: isVi ? "Nov" : "Nov", weather: "avoid", temp: "22°C", rain: "high", icon: "🌧️" },
      { name: isVi ? "Dec" : "Dec", weather: "good", temp: "20°C", rain: "moderate", icon: "⛅" },
    ],
    seasons: [
      {
        period: isVi ? "Tháng 2 – 4" : "February – April",
        name: isVi ? "Mùa Khô — Đẹp Nhất" : "Dry Season — Prime Time",
        badge: isVi ? "Tốt nhất" : "Best",
        badgeColor: "bg-emerald-500",
        desc: isVi
          ? "Đây là thời điểm lý tưởng nhất để thăm Huế. Trời nắng đẹp, nhiệt độ mát mẻ (22–28°C), ít mưa. Phù hợp cho tất cả các hoạt động ngoài trời: tour xe máy, thăm lăng tẩm, dã ngoại đầm Tam Giang."
          : "The ideal time to visit. Sunny skies, comfortable temperatures (22–28°C), minimal rain. Perfect for all outdoor activities: motorbike tours, royal tomb visits, Tam Giang lagoon trips.",
        color: "border-emerald-200 bg-emerald-50",
        textAccent: "text-emerald-700",
      },
      {
        period: isVi ? "Tháng 5 – 8" : "May – August",
        name: isVi ? "Mùa Hè — Nóng Nhưng Vui" : "Summer — Hot but Vibrant",
        badge: isVi ? "Khá tốt" : "Good",
        badgeColor: "bg-amber-400",
        desc: isVi
          ? "Mùa hè Huế nóng (30–32°C) nhưng Festival Huế thường diễn ra vào tháng 4 hoặc tháng 6. Đây là mùa cao điểm du lịch — đặt trước 2-3 tuần. Tốt nhất nên đi sớm buổi sáng hoặc chiều muộn."
          : "Hue summer is hot (30–32°C) but the Hue Festival often falls in April or June. Peak tourist season — book 2-3 weeks ahead. Best to tour in early morning or late afternoon.",
        color: "border-amber-200 bg-amber-50",
        textAccent: "text-amber-700",
      },
      {
        period: isVi ? "Tháng 9 – 11" : "September – November",
        name: isVi ? "Mùa Mưa — Hạn Chế" : "Rainy Season — Proceed with Caution",
        badge: isVi ? "Mưa nhiều" : "Rainy",
        badgeColor: "bg-slate-400",
        desc: isVi
          ? "Huế nằm trong vùng mưa bão miền Trung — tháng 10 và 11 là thời điểm mưa nhất, có thể có lũ lụt. Nếu bạn đến trong mùa mưa, hãy chuẩn bị áo mưa tốt và linh hoạt với lịch trình."
          : "Hue sits in Central Vietnam's typhoon belt — October and November are the wettest months with possible flooding. If visiting in rainy season, pack good rain gear and keep your itinerary flexible.",
        color: "border-slate-200 bg-slate-50",
        textAccent: "text-slate-600",
      },
    ],
    tipTitle: isVi ? "Mẹo từ hướng dẫn viên địa phương" : "Tip from local guides",
    tip: isVi
      ? "Chúng tôi vẫn dẫn tour trong mùa mưa với áo mưa đầy đủ — nhưng thành thật mà nói, tháng 2 đến tháng 4 mới thực sự là thời điểm bạn sẽ không muốn bỏ lỡ. Buổi sáng sớm trên đèo Hải Vân khi trời quang đãng là một trong những khoảnh khắc đẹp nhất Trung Việt Nam."
      : "We do run tours in the rainy season with proper gear — but honestly, February through April is when you'll see Hue at its absolute best. An early morning clear-sky run over Hai Van Pass is one of Central Vietnam's most breathtaking moments.",
  };

  const getBarColor = (weather: string) => {
    if (weather === "best") return "bg-emerald-400";
    if (weather === "good") return "bg-amber-300";
    return "bg-slate-300";
  };

  const getBarHeight = (weather: string) => {
    if (weather === "best") return "h-14";
    if (weather === "good") return "h-9";
    return "h-5";
  };

  return (
    <section className="py-20 lg:py-36 bg-white border-t border-[var(--color-sand)]">
      <div className="max-w-[var(--container-max)] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[var(--color-terracotta)]" />
            <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-[var(--color-terracotta)]">
              {t.eyebrow}
            </p>
          </div>
          <h2 className="font-display text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] text-[var(--color-ink)] leading-[1.05] tracking-tight mb-5 whitespace-pre-line">
            {t.title}
          </h2>
          <p className="text-base sm:text-body-lg text-[var(--color-ink)]/70 leading-relaxed max-w-2xl">
            {t.intro}
          </p>
        </div>

        {/* Visual month bar chart */}
        <div className="mb-14 p-6 sm:p-8 bg-[var(--color-limestone)] rounded-[var(--radius-lg)] border border-[var(--color-sand)]">
          <div className="flex items-end justify-between gap-1 sm:gap-2 h-20 mb-3">
            {t.months.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-1 flex-1 group">
                <span className="hidden sm:block text-[0.55rem] font-mono text-[var(--color-ink)]/50">{m.temp}</span>
                <div
                  className={`w-full rounded-t-sm transition-all duration-300 group-hover:opacity-80 ${getBarHeight(m.weather)} ${getBarColor(m.weather)}`}
                  title={`${m.name}: ${m.temp}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-1 sm:gap-2">
            {t.months.map((m) => (
              <div key={m.name} className="flex flex-col items-center flex-1">
                <span className="text-[0.6rem] sm:text-xs font-semibold text-[var(--color-ink)]/60">{m.name}</span>
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[var(--color-sand)]">
            {[
              { color: "bg-emerald-400", label: t.bestBadge },
              { color: "bg-amber-300", label: t.goodBadge },
              { color: "bg-slate-300", label: t.avoidBadge },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded-sm ${l.color}`} />
                <span className="text-xs text-[var(--color-ink)]/60 font-medium">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Season cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {t.seasons.map((season, i) => (
            <div
              key={i}
              className={`rounded-[var(--radius-md)] border p-5 sm:p-6 flex flex-col gap-3 ${season.color}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`text-xs font-bold tracking-wider uppercase ${season.textAccent} font-mono`}>
                  {season.period}
                </span>
                <span className={`text-[0.65rem] font-bold tracking-widest uppercase text-white px-2.5 py-1 rounded-[var(--radius-pill)] flex-shrink-0 ${season.badgeColor}`}>
                  {season.badge}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl text-[var(--color-ink)] leading-tight">
                {season.name}
              </h3>
              <p className="text-sm text-[var(--color-ink)]/70 leading-relaxed">
                {season.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Local guide tip */}
        <div className="flex gap-5 p-6 sm:p-8 bg-[var(--color-night)] rounded-[var(--radius-lg)] text-[var(--color-limestone)]">
          <div className="w-10 h-10 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-terracotta)] mb-2">
              {t.tipTitle}
            </p>
            <p className="text-sm sm:text-base text-[var(--color-limestone)]/80 leading-relaxed italic">
              &ldquo;{t.tip}&rdquo;
            </p>
            <p className="text-xs text-[var(--color-limestone)]/40 font-semibold mt-2 tracking-wider uppercase">
              — Mai Anh Tú, Hue Motorbike Tours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
