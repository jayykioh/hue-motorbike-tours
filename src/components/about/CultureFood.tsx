import Image from "next/image";

export default function CultureFood({ locale }: { locale: string }) {
  const isVi = locale === "vi";

  const t = {
    eyebrow: isVi ? "VĂN HÓA & ẨM THỰC" : "CULTURE & CUISINE",
    title: isVi ? "Ẩm Thực Hoàng Gia &\nNhững Nét Văn Hóa Riêng Biệt" : "Royal Cuisine &\nA Culture All Its Own",
    foodTitle: isVi ? "Ẩm thực Huế — Nghệ thuật trong từng bát" : "Hue Food — Art in Every Bowl",
    foodIntro: isVi
      ? "Ẩm thực Huế là một trong những tinh hoa của ẩm thực Việt Nam — được hình thành từ nhu cầu phục vụ hoàng gia và sự sáng tạo không ngừng của người dân địa phương. Người Huế có câu: ăn không chỉ là no, mà còn phải đẹp mắt và vừa miệng."
      : "Hue cuisine is one of Vietnam's great culinary traditions — shaped by royal demands and the endless creativity of local cooks. Hue people say: food isn't just about fullness, it must please the eye and the palate.",
    dishes: [
      {
        name: "Bún Bò Huế",
        desc: isVi
          ? "Bát bún bò đặc trưng với nước dùng sả và mắm ruốc đậm đà — cay, thơm và hoàn toàn khác bún bò nơi khác. Đây là món ăn sáng linh hồn của người Huế."
          : "The iconic Hue beef noodle soup — fragrant lemongrass, shrimp paste, and a heat that's unmistakably Hue. The city's definitive breakfast soul food.",
      },
      {
        name: "Bánh Khoái",
        desc: isVi
          ? "Bánh khoái giòn rụm với tôm, thịt và giá đỗ, ăn kèm nước chấm đặc biệt từ gan heo — một món ăn đường phố không thể bỏ qua của Huế."
          : "Crispy sizzling pancakes with shrimp, pork and bean sprouts, dipped in a unique liver-based sauce — Hue's unmissable street food.",
      },
      {
        name: "Bánh Bèo",
        desc: isVi
          ? "Những chiếc bánh bèo nhỏ xinh được hấp trong chén nhỏ, phủ tôm chà và mỡ hành xanh. Một trong hàng chục loại bánh đặc sản được sáng tạo ra để phục vụ cung đình."
          : "Steamed rice cakes in tiny saucers, topped with dried shrimp and scallion oil. One of dozens of specialty cakes once created for the royal palace.",
      },
      {
        name: isVi ? "Cơm Hến" : "Com Hen",
        desc: isVi
          ? "Cơm hến — cơm trắng ăn kèm với hến sông được xào cùng gia vị Huế, rau sống, bánh tráng và hàng chục loại gia vị. Một bát cơm hến đầy đủ lên đến 20 thành phần."
          : "Rice served with tiny river clams sautéed in Hue spices, fresh herbs, rice crackers, and up to 20 different condiments. A symphony of textures.",
      },
    ],
    cultureTitle: isVi ? "Nét Văn Hóa Riêng Biệt" : "A Distinctive Cultural Identity",
    cultureItems: [
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        ),
        title: isVi ? "Nhã Nhạc Cung Đình" : "Royal Court Music",
        desc: isVi
          ? "Nhã Nhạc Cung Đình Huế được UNESCO công nhận là Di sản Văn hóa Phi vật thể năm 2003. Đây là loại nhạc từng được biểu diễn trong các nghi lễ hoàng gia, nay vẫn được truyền dạy và biểu diễn tại Huế."
          : "Hue's Royal Court Music received UNESCO Intangible Heritage status in 2003. Once performed at imperial ceremonies, it is still taught and performed in Hue today.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: isVi ? "Nghề Thủ Công Truyền Thống" : "Traditional Craftsmanship",
        desc: isVi
          ? "Từ làng hương Thủy Xuân, làng nón lá Phú Cam, đến những xưởng thêu và chạm khảm xà cừ — Huế là nơi bảo tồn nhiều nghề thủ công truyền thống nhất Việt Nam."
          : "From the Thuy Xuan incense village to Phu Cam conical hat village, from embroidery workshops to lacquerware — Hue preserves more traditional crafts than anywhere in Vietnam.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ),
        title: isVi ? "Tà Áo Dài Xứ Huế" : "The Hue Ao Dai",
        desc: isVi
          ? "Người phụ nữ Huế nổi tiếng với vẻ đẹp thanh lịch và áo dài truyền thống. Huế là một trong những trung tâm may đo áo dài thủ công đẹp nhất Việt Nam — nghề may áo dài ở đây được truyền qua nhiều thế hệ."
          : "Hue women are renowned for their elegance and traditional ao dai. Hue is one of Vietnam's finest centers for handmade ao dai — the craft passed down through generations.",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        title: isVi ? "Festival Huế" : "Hue Festival",
        desc: isVi
          ? "Được tổ chức 2 năm một lần, Festival Huế là lễ hội văn hóa lớn nhất miền Trung với các màn trình diễn đường phố, triển lãm nghệ thuật và phục dựng nghi lễ cung đình thu hút hàng triệu du khách."
          : "Held biennially, Hue Festival is Central Vietnam's biggest cultural celebration — street performances, art exhibitions, and reenacted royal ceremonies drawing millions of visitors.",
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
          <h2 className="font-display text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] text-[var(--color-ink)] leading-[1.05] tracking-tight whitespace-pre-line">
            {t.title}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Food */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-3">
                {t.foodTitle}
              </h3>
              <p className="text-base text-[var(--color-ink)]/70 leading-relaxed">
                {t.foodIntro}
              </p>
            </div>

            {/* Food image */}
            <div className="relative aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-sand)] shadow-md">
              <Image
                src="/photo/huefoodtour.jpg"
                alt="Traditional Hue food spread including Bun Bo Hue and royal rice cakes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Dish list */}
            <div className="flex flex-col gap-4">
              {t.dishes.map((dish, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-[var(--radius-md)] bg-white border border-[var(--color-sand)] hover:border-[var(--color-terracotta)]/30 transition-colors">
                  <div className="w-1 rounded-full bg-[var(--color-terracotta)] flex-shrink-0 my-1" />
                  <div>
                    <h4 className="font-display text-lg text-[var(--color-ink)] mb-1">{dish.name}</h4>
                    <p className="text-sm text-[var(--color-ink)]/70 leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Culture */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-3">
                {t.cultureTitle}
              </h3>
            </div>

            {/* Culture image */}
            <div className="relative aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-sand)] shadow-md">
              <Image
                src="/photo/hue-incense-sticks-village.jpg"
                alt="Traditional incense sticks at Thuy Xuan Village Hue — colorful craft heritage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Culture items */}
            <div className="flex flex-col gap-5">
              {t.cultureItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-terracotta)]/10 flex items-center justify-center text-[var(--color-terracotta)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-sm text-[var(--color-ink)]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
