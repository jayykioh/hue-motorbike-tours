import Image from "next/image";

type Landmark = {
  name: string;
  tag: string;
  desc: string;
  image: string;
  alt: string;
  highlight: string;
};

export default function LandmarksGrid({ locale }: { locale: string }) {
  const isVi = locale === "vi";

  const t = {
    eyebrow: isVi ? "ĐỊA ĐIỂM NỔI BẬT" : "MUST-SEE LANDMARKS",
    title: isVi ? "6 Địa Điểm Không Thể\nBỏ Qua Khi Đến Huế" : "6 Places You Cannot\nLeave Hue Without Seeing",
    subtitle: isVi
      ? "Từ những công trình hoàng gia ngàn năm đến đầm phá hoang sơ, Huế là một bộ sưu tập những kiệt tác tự nhiên và nhân tạo."
      : "From millennia-old royal monuments to untouched lagoons, Hue is a collection of natural and human masterpieces.",
    mustVisit: isVi ? "Không thể bỏ lỡ" : "Must Visit",
    hiddenGem: isVi ? "Viên ngọc ẩn" : "Hidden Gem",
    unescoTag: isVi ? "UNESCO" : "UNESCO",
    locals: isVi ? "Nơi người dân tụ họp" : "Local Favourite",
  };

  const landmarks: Landmark[] = [
    {
      name: isVi ? "Đại Nội Huế" : "Hue Imperial Citadel",
      tag: t.unescoTag,
      desc: isVi
        ? "Quần thể cung điện hoàng gia rộng 520ha với 3 vòng thành. Trái tim của triều đại Nguyễn — nơi 13 vị vua từng trị vì. Được UNESCO công nhận năm 1993."
        : "A 520-hectare royal complex with three concentric walls. The heart of the Nguyen Dynasty, where 13 emperors once ruled. UNESCO-listed since 1993.",
      image: "/photo/hue-imperal-city.jpg",
      alt: "Hue Imperial Citadel - Ngo Mon Gate of the Nguyen Dynasty",
      highlight: isVi ? "Di sản thế giới UNESCO" : "UNESCO World Heritage",
    },
    {
      name: isVi ? "Lăng Khải Định" : "Khai Dinh Royal Tomb",
      tag: t.unescoTag,
      desc: isVi
        ? "Lăng của vua Khải Định — sự pha trộn độc đáo giữa kiến trúc Gothic châu Âu và nghệ thuật trang trí Chăm-pa. Hàng nghìn mảnh sứ và thủy tinh tạo nên những bức tranh ghép tuyệt đẹp."
        : "Tomb of Emperor Khai Dinh — a unique blend of European Gothic and Cham decorative arts. Thousands of porcelain and glass pieces create breathtaking mosaic murals.",
      image: "/photo/hue-kien-trung-palace.jpg",
      alt: "Khai Dinh Royal Tomb - unique mix of Gothic and Cham architecture",
      highlight: isVi ? "Kiến trúc độc nhất Đông Dương" : "Unique Indochinese Architecture",
    },
    {
      name: isVi ? "Chùa Thiên Mụ" : "Thien Mu Pagoda",
      tag: isVi ? "Biểu tượng Huế" : "Hue Icon",
      desc: isVi
        ? "Ngôi chùa cổ kính nhất Huế với tháp Phước Duyên 7 tầng soi bóng xuống sông Hương. Được xây dựng từ năm 1601, đây là chứng nhân lịch sử của hơn 400 năm thăng trầm."
        : "Hue's most ancient pagoda with the 7-storey Phuoc Duyen Tower reflected in the Perfume River. Built in 1601, it has witnessed 400+ years of the city's history.",
      image: "/photo/about-hue-thien-mu-pagoda.jpg",
      alt: "Thien Mu Pagoda and Phuoc Duyen Tower on the Perfume River at sunrise",
      highlight: isVi ? "Xây dựng từ năm 1601" : "Built in 1601",
    },
    {
      name: isVi ? "Đầm Phá Tam Giang" : "Tam Giang Lagoon",
      tag: t.hiddenGem,
      desc: isVi
        ? "Đầm phá nước lợ lớn nhất Đông Nam Á với diện tích 22.000 ha. Hoàng hôn trên đầm Tam Giang là một trong những cảnh sắc thiên nhiên đẹp nhất miền Trung, nơi ngư dân vẫn mưu sinh theo cách của cha ông."
        : "Southeast Asia's largest lagoon system at 22,000 hectares. Sunset over Tam Giang is one of Central Vietnam's most breathtaking natural spectacles, where fishermen still live by ancestral ways.",
      image: "/photo/about-hue-tam-giang-lagoon.jpg",
      alt: "Tam Giang Lagoon at sunset with fishing boats and fish farms",
      highlight: isVi ? "Đầm phá lớn nhất ĐNA" : "Largest lagoon in SEA",
    },
    {
      name: isVi ? "Lăng Tự Đức" : "Tu Duc Royal Tomb",
      tag: t.mustVisit,
      desc: isVi
        ? "Lăng tẩm mơ màng nhất trong số các lăng của các vua Nguyễn — một khu vườn rộng lớn với hồ sen, rừng thông xanh và các công trình kiến trúc nhẹ nhàng. Vua Tự Đức từng dành nhiều năm sống và sáng tác thơ ở đây."
        : "The most poetic of all Nguyen royal tombs — a vast garden of lotus ponds, pine forests, and delicate pavilions. Emperor Tu Duc spent years here composing poetry amidst its beauty.",
      image: "/photo/visithue-tomb.jpg",
      alt: "Tu Duc Royal Tomb surrounded by pine trees and lotus ponds",
      highlight: isVi ? "Vua thi sĩ của Việt Nam" : "Vietnam's Poet Emperor",
    },
    {
      name: isVi ? "Làng Hương Thủy Xuân" : "Thuy Xuan Incense Village",
      tag: t.locals,
      desc: isVi
        ? "Làng nghề làm hương truyền thống từ hơn 700 năm — những bó hương sặc sỡ đỏ, tím, vàng phơi dưới nắng tạo nên khung cảnh nhiếp ảnh không thể bỏ qua. Nghề hương gắn liền với đời sống tâm linh của người Huế."
        : "A traditional incense-making village over 700 years old — vibrant red, purple, and yellow bundles drying in the sun create unmissable photography scenes. Incense craft is woven into Hue's spiritual identity.",
      image: "/photo/hue-incense-sticks-village.jpg",
      alt: "Colorful incense sticks at Thuy Xuan Incense Village in Hue",
      highlight: isVi ? "Làng nghề 700 năm tuổi" : "700-year-old craft village",
    },
  ];

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
            {t.subtitle}
          </p>
        </div>

        {/* Landmarks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {landmarks.map((lm, i) => (
            <article
              key={i}
              className="group flex flex-col bg-[var(--color-limestone)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-sand)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-sand)]">
                <Image
                  src={lm.image}
                  alt={lm.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Tag badge */}
                <div className="absolute top-3 left-3 bg-[var(--color-night)]/70 backdrop-blur-sm text-[var(--color-limestone)] text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-[var(--radius-pill)]">
                  {lm.tag}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
                <h3 className="font-display text-xl sm:text-2xl text-[var(--color-ink)] leading-tight">
                  {lm.name}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-ink)]/70 leading-relaxed flex-1">
                  {lm.desc}
                </p>
                {/* Highlight strip */}
                <div className="flex items-center gap-2 pt-3 border-t border-[var(--color-sand)] mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[var(--color-terracotta)] uppercase tracking-wider">
                    {lm.highlight}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
