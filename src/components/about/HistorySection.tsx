export default function HistorySection({ locale }: { locale: string }) {
  const isVi = locale === "vi";

  const t = {
    eyebrow: isVi ? "LỊCH SỬ HÌNH THÀNH" : "A HISTORY UNLIKE ANY OTHER",
    title: isVi ? "3.500 Năm Lịch Sử\nTrên Dải Đất Miền Trung" : "3,500 Years of History\nAlong Central Vietnam",
    intro: isVi
      ? "Trước khi trở thành kinh đô của triều Nguyễn, vùng đất Huế đã trải qua những chặng đường lịch sử dài đặc biệt — từ nền văn hóa Sa Huỳnh cổ đại, qua Vương quốc Champa hùng mạnh, đến khi người Việt tiếp nhận và biến nơi đây thành trái tim của đất nước."
      : "Long before becoming the Nguyen Dynasty's imperial capital, Hue passed through extraordinary chapters — from the ancient Sa Huynh culture, through the mighty Champa Kingdom, to when the Vietnamese made it the beating heart of a nation.",
    phases: [
      {
        period: isVi ? "Khoảng 1000 TCN – 192 SCN" : "c. 1000 BCE – 192 CE",
        name: isVi ? "Văn hóa Sa Huỳnh & Chăm Pa sơ kỳ" : "Sa Huynh Culture & Early Cham",
        desc: isVi
          ? "Vùng đất này từng là nơi định cư của người Sa Huỳnh — một nền văn hóa tiền sử phát triển rực rỡ. Sau đó, người Chăm xây dựng Vương quốc Champa với những đền tháp Chăm-pa hùng vĩ, dấu ấn còn in đậm trong kiến trúc và văn hóa Huế ngày nay."
          : "This land was home to the Sa Huynh people — a flourishing prehistoric culture. The Cham then built the mighty Champa Kingdom here, leaving architectural and cultural imprints that still echo through Hue today.",
        color: "bg-amber-100 border-amber-300",
        accent: "text-amber-700",
        dot: "bg-amber-400",
      },
      {
        period: isVi ? "1306 – 1802" : "1306 – 1802",
        name: isVi ? "Tiếp nhận & Giao thoa văn hóa Việt-Chăm" : "Vietnamese Arrival & Viet-Cham Fusion",
        desc: isVi
          ? "Năm 1306, vua Chiêm Thành nhường vùng đất Ô Lý (nay là Huế) cho Đại Việt qua cuộc hôn nhân hoàng tộc. Từ đây, Huế trở thành điểm giao thoa giữa hai nền văn minh, hình thành nên một bản sắc văn hóa vừa tinh tế vừa sâu sắc, độc nhất vô nhị ở Đông Nam Á."
          : "In 1306, the Cham king ceded this territory (then called Ô Lý) to Đại Việt through a royal marriage. Hue became the crossroads of two civilizations, forging a cultural identity — refined, layered, and unlike anywhere else in Southeast Asia.",
        color: "bg-orange-50 border-orange-200",
        accent: "text-orange-700",
        dot: "bg-orange-400",
      },
      {
        period: isVi ? "1802 – 1945" : "1802 – 1945",
        name: isVi ? "Triều đại Nguyễn — Kinh đô hoàng gia" : "The Nguyen Dynasty — Imperial Capital",
        desc: isVi
          ? "Vua Gia Long thống nhất đất nước và chọn Huế làm kinh đô năm 1802. Trong 143 năm, 13 vị vua Nguyễn đã xây dựng nên Đại Nội, 7 lăng tẩm, hàng chục cung điện và chùa chiền — tạo nên một quần thể di tích hoàng gia đồ sộ nhất Đông Nam Á. Năm 1993, UNESCO công nhận Quần thể di tích Cố đô Huế là Di sản Văn hóa Thế giới."
          : "Emperor Gia Long unified Vietnam and chose Hue as the capital in 1802. For 143 years, 13 Nguyen emperors built the Imperial Citadel, 7 royal tombs, and dozens of palaces and pagodas — creating the grandest royal heritage complex in Southeast Asia. UNESCO recognized it as a World Heritage Site in 1993.",
        color: "bg-red-50 border-red-200",
        accent: "text-[var(--color-terracotta)]",
        dot: "bg-[var(--color-terracotta)]",
      },
      {
        period: isVi ? "1945 – Nay" : "1945 – Present",
        name: isVi ? "Thành phố di sản hiện đại" : "A Living Heritage City",
        desc: isVi
          ? "Sau khi nhà Nguyễn sụp đổ, Huế trở thành một thành phố di sản sống động — nơi những con hẻm nhỏ vẫn giữ hương vị ẩm thực hoàng gia, những nghệ nhân vẫn lưu giữ nghề thủ công truyền thống, và dòng sông Hương vẫn lặng lẽ chảy qua những thế kỷ. Huế ngày nay là sự kết hợp tuyệt vời giữa quá khứ và hiện tại."
          : "After the dynasty's fall, Hue became a vibrant living heritage city — where narrow lanes still carry the scent of royal cuisine, artisans still practice ancient crafts, and the Perfume River quietly flows through the centuries. Today's Hue is a perfect weaving of past and present.",
        color: "bg-slate-50 border-slate-200",
        accent: "text-[var(--color-river)]",
        dot: "bg-[var(--color-river)]",
      },
    ],
  };

  return (
    <section className="py-20 lg:py-36 bg-[var(--color-limestone)] border-t border-[var(--color-sand)]">
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-[180px] top-0 bottom-0 w-px bg-[var(--color-sand)]" aria-hidden="true" />

          <div className="flex flex-col gap-0">
            {t.phases.map((phase, i) => (
              <div key={i} className="relative flex flex-col lg:flex-row gap-4 lg:gap-0 group">
                {/* Period label — left column on desktop */}
                <div className="lg:w-[180px] lg:pr-10 lg:pt-6 flex-shrink-0">
                  <span className={`text-[0.7rem] font-bold tracking-wider uppercase ${phase.accent} font-mono`}>
                    {phase.period}
                  </span>
                </div>

                {/* Dot on the timeline line */}
                <div className="hidden lg:flex items-start pt-[26px] relative z-10">
                  <span className={`w-3 h-3 rounded-full ${phase.dot} -translate-x-1/2 flex-shrink-0 ring-2 ring-[var(--color-limestone)]`} />
                </div>

                {/* Content card */}
                <div className={`lg:ml-10 flex-1 mb-0 border-l-2 lg:border-l-0 pl-4 lg:pl-0 pb-10 lg:pb-12 ${i < t.phases.length - 1 ? '' : ''}`}>
                  <div
                    className={`rounded-[var(--radius-md)] border p-6 sm:p-8 transition-all duration-300 hover:shadow-md cursor-default ${phase.color}`}
                  >
                    <h3 className="font-display text-xl sm:text-2xl text-[var(--color-ink)] mb-3 leading-tight">
                      {phase.name}
                    </h3>
                    <p className="text-base text-[var(--color-ink)]/75 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical note */}
        <div className="mt-4 border-t border-[var(--color-sand)] pt-8 flex items-start gap-4">
          <div className="w-1 h-16 bg-[var(--color-terracotta)] rounded-full flex-shrink-0 mt-1" />
          <p className="text-sm text-[var(--color-ink)]/60 leading-relaxed max-w-2xl italic">
            {isVi
              ? "\"Huế là nơi duy nhất ở Việt Nam mà khi bạn đứng giữa lòng thành phố, bạn có thể cảm nhận được cả nghìn năm lịch sử chảy qua từng viên gạch, từng giọng nói, từng bát bún bò buổi sớm.\" — Câu nói được lưu truyền trong giới nghiên cứu văn hóa Huế"
              : "\"Hue is the only place in Vietnam where, standing in the heart of the city, you can feel a thousand years of history flowing through every brick, every voice, every bowl of bun bo in the early morning.\" — Often cited among Hue cultural scholars"}
          </p>
        </div>
      </div>
    </section>
  );
}
