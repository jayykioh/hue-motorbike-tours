export type ItineraryItem = {
  title: { en: string; vi: string };
  description?: { en: string; vi: string };
  image?: string;
  imageAlt?: { en: string; vi: string };
};

export type FAQItem = {
  question: { en: string; vi: string };
  answer: { en: string; vi: string };
};

export type TransportOption = {
  name: { en: string; vi: string };
  description: { en: string; vi: string };
  badge?: { en: string; vi: string };
  highlight?: boolean;
  features?: { en: string; vi: string }[];
};

export type TourGalleryItem = {
  url: string;
  alt: { en: string; vi: string };
  caption?: { en: string; vi: string };
};

export type InsiderTip = {
  title: { en: string; vi: string };
  content: { en: string; vi: string };
};

export type Tour = {
  id: string;
  slug: string;
  title: { en: string; vi: string };
  shortDescription: { en: string; vi: string };
  duration: string;
  transport: { en: string; vi: string };
  price: string;
  priceCaption?: { en: string; vi: string };
  priceLabel?: { en: string; vi: string };
  priceIsQuote?: boolean;
  bookingCta?: { en: string; vi: string };
  seo?: {
    en: { title: string; description: string; keywords: string[] };
    vi: { title: string; description: string; keywords: string[] };
  };
  image: string;
  ogImage?: string;
  ogImageDimensions?: { width: number; height: number };
  imageAlt?: { en: string; vi: string };
  departure?: { en: string; vi: string };
  relatedGuide?: {
    href: string;
    title: { en: string; vi: string };
    description: { en: string; vi: string };
  };
  relatedTourSlugs?: string[];
  highlights: { en: string; vi: string }[];
  itinerary: ItineraryItem[];
  faq?: FAQItem[];
  whatsappLink?: string;
  whyBookWithUs?: { en: string; vi: string }[];
  inclusions?: { en: string; vi: string }[];
  exclusions?: { en: string; vi: string }[];
  transportOptions?: TransportOption[];
  optionalAddons?: { en: string; vi: string }[];
  gallery?: TourGalleryItem[];
  insiderTips?: InsiderTip[];
};

export const tours: Tour[] = [
  {
    id: 'hue-to-hoi-an-via-hai-van-pass',
    slug: 'hue-to-hoi-an-via-hai-van-pass',
    relatedTourSlugs: ['hue-imperial-city-day-tour-from-da-nang-hoi-an', 'hue-imperial-city-tour'],
    title: {
      en: 'Hue to Hoi An Tour via Hai Van Pass: Motorbike or Private Car',
      vi: 'Tour Huế đi Hội An qua đèo Hải Vân: Xe máy hoặc ô tô riêng'
    },
    shortDescription: {
      en: 'Travel from Hue to Hoi An by motorbike or private car via Hai Van Pass. This full-day route includes listed stops at Lap An Lagoon and Lang Co; check the itinerary for details by transport option.',
      vi: 'Đi từ Huế đến Hội An bằng xe máy hoặc ô tô riêng qua đèo Hải Vân. Lịch trình trong ngày có các điểm dừng tại đầm Lập An và Lăng Cô; xem chi tiết theo phương tiện bạn chọn.'
    },
    duration: '6–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe ô tô riêng hoặc Xe máy'
    },
    price: 'From $70 USD',
    image: '/photo/haivanpass.jpg',
    ogImage: '/photo/haivanpass.jpg',
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20Hue%20to%20Hoi%20An%20via%20Hai%20Van%20Pass%20%E2%80%93%20Scenic%20Transfer',
    highlights: [
      { en: 'Travel the coastal route via Hai Van Pass', vi: 'Di chuyển theo cung đường ven biển qua đèo Hải Vân' },
      { en: 'Conquer the legendary curves of Hai Van Pass', vi: 'Chinh phục những khúc cua ngoạn mục của Đèo Hải Vân' },
      { en: 'Relax by the tranquil waters of Lap An Lagoon', vi: 'Thư giãn bên dòng nước tĩnh lặng của Đầm Lập An' },
      { en: 'Breathe the ocean air at Lang Co Beach', vi: 'Hít thở bầu không khí biển trong lành tại Lăng Cô' },
      { en: 'Cool off in the natural pools of Nhị Hồ Waterfall', vi: 'Đắm mình trong làn nước mát tại thác Nhị Hồ' },
      { en: 'Optional stop at the Marble Mountains before reaching Hoi An', vi: 'Ghé thăm Ngũ Hành Sơn trước khi đến Hội An (tuỳ chọn)' }
    ],
    itinerary: [
      { title: { en: 'Hotel pickup in Hue', vi: 'Xe đón bạn tận nơi tại khách sạn ở Huế' } },
      { title: { en: 'Lap An Lagoon', vi: 'Đầm Lập An' }, description: { en: 'Take in the stunning views where the mountains meet the calm lagoon waters.', vi: 'Ngắm nhìn khung cảnh tuyệt mỹ nơi đồi núi giao hòa cùng mặt đầm tĩnh lặng.' } },
      { title: { en: 'Lang Co Beach', vi: 'Vịnh Lăng Cô' }, description: { en: 'Stretch your legs, feel the ocean breeze, and snap some incredible photos.', vi: 'Tản bộ, hít thở gió biển và lưu lại những bức ảnh kỷ niệm tuyệt đẹp.' } },
      { title: { en: 'Nhị Hồ Waterfall', vi: 'Thác Nhị Hồ' }, description: { en: 'Jump into clear, refreshing natural pools surrounded by lush jungle.', vi: 'Thả mình vào làn nước suối mát lạnh giữa khung cảnh rừng cây xanh ngát.' } },
      { title: { en: 'Hai Van Pass', vi: 'Đèo Hải Vân' }, description: { en: 'Experience the thrill of Vietnam\'s most famous coastal mountain road with panoramic views.', vi: 'Trải nghiệm cảm giác phấn khích trên cung đường đèo ven biển nổi tiếng nhất Việt Nam với tầm nhìn toàn cảnh.' } },
      { title: { en: 'Marble Mountains (optional)', vi: 'Ngũ Hành Sơn (tuỳ chọn)' }, description: { en: 'Explore pagodas, ancient caves, and enjoy sweeping viewpoints over Da Nang.', vi: 'Khám phá chùa chiền, hang động cổ và tầm nhìn tuyệt đẹp ra vịnh Đà Nẵng.' } },
      { title: { en: 'Hotel drop-off in Hoi An or Da Nang', vi: 'Trả khách tại khách sạn ở Hội An hoặc Đà Nẵng' } }
    ],
    transportOptions: [
      {
        name: { en: 'Private Car', vi: 'Xe ô tô riêng' },
        description: { en: 'Comfortable, air-conditioned vehicle with an English-speaking driver. Perfect for families and travelers who want a relaxed, hassle-free ride with plenty of luggage space.', vi: 'Xe ô tô điều hòa thoải mái với tài xế nói tiếng Anh. Lý tưởng cho gia đình và du khách muốn có một chuyến đi thư thái, không phiền não với nhiều chỗ để hành lý.' }
      },
      {
        name: { en: 'Motorbike', vi: 'Xe máy' },
        description: { en: 'Travel as a passenger with a local driver on the coastal route. The listed itinerary includes stops at Lap An Lagoon, Lang Co, Hai Van Pass, and an optional Marble Mountains visit.', vi: 'Ngồi sau xe cùng tài xế địa phương trên cung đường ven biển. Lịch trình liệt kê các điểm dừng tại đầm Lập An, Lăng Cô, đèo Hải Vân và lựa chọn ghé Ngũ Hành Sơn.' }
      }
    ],
    optionalAddons: [
      { en: 'Fresh seafood lunch at Lang Co Beach', vi: 'Bữa trưa hải sản tươi ngon tại Bãi biển Lăng Cô' },
      { en: 'Visit My Khe Beach in Da Nang before arriving in Hoi An', vi: 'Thăm bãi biển Mỹ Khê ở Đà Nẵng trước khi đến Hội An' }
    ],
    whyBookWithUs: [
      { en: 'Local drivers and guides can recommend stops along the route', vi: 'Tài xế và hướng dẫn viên địa phương có thể gợi ý các điểm dừng dọc đường' },
      { en: 'Flexible itinerary — stop wherever you like, at your own pace', vi: 'Lịch trình linh hoạt — dừng chân bất cứ đâu bạn thích, theo nhịp độ của riêng bạn' },
      { en: 'Choose a private car or motorbike for this route', vi: 'Chọn ô tô riêng hoặc xe máy cho cung đường này' },
      { en: 'Choice of private car or motorbike to suit your travel style', vi: 'Lựa chọn xe ô tô riêng hoặc xe máy phù hợp với phong cách du lịch của bạn' },
      { en: 'Door-to-door pickup and drop-off service in Hue, Hoi An, and Da Nang', vi: 'Dịch vụ đón và trả khách tận nơi tại Huế, Hội An và Đà Nẵng' }
    ],
    faq: [
      { question: { en: 'How long is the trip from Hue to Hoi An via Hai Van Pass?', vi: 'Chuyến đi từ Huế đến Hội An qua Đèo Hải Vân kéo dài bao lâu?' }, answer: { en: 'Around 6–8 hours with sightseeing stops. We travel at a relaxed pace so you have plenty of time to enjoy each location.', vi: 'Khoảng 6–8 tiếng bao gồm các điểm dừng ngắm cảnh. Chúng mình di chuyển với nhịp độ thư thái để bạn có đủ thời gian tận hưởng từng địa điểm.' } },
      { question: { en: 'What should I know about the motorbike option?', vi: 'Tôi cần biết gì về lựa chọn xe máy?' }, answer: { en: 'You travel as a passenger with a local driver. Road and weather conditions vary, so ask us about the route and safety equipment before booking.', vi: 'Bạn ngồi sau tài xế địa phương. Tình trạng đường sá và thời tiết có thể thay đổi; hãy hỏi trước về cung đường và trang bị an toàn.' } },
      { question: { en: 'Can I bring my luggage?', vi: 'Tôi có thể mang theo hành lý không?' }, answer: { en: 'Luggage arrangements depend on the selected vehicle and bag size. Share your luggage details when requesting availability so we can confirm the suitable option.', vi: 'Phương án hành lý tùy theo phương tiện và kích thước túi. Hãy cho chúng tôi biết hành lý khi hỏi lịch để xác nhận lựa chọn phù hợp.' } },
      { question: { en: 'Do you provide hotel pickup and drop-off?', vi: 'Có dịch vụ đón và trả khách tận khách sạn không?' }, answer: { en: 'Yes, we offer door-to-door service in Hue, Hoi An, and Da Nang. Just share your hotel name when you book.', vi: 'Có, chúng mình cung cấp dịch vụ đón và trả tận nơi tại Huế, Hội An và Đà Nẵng. Bạn chỉ cần chia sẻ tên khách sạn khi đặt tour.' } }
    ]
  },
  {
    id: 'hue-imperial-city-tour',
    slug: 'hue-imperial-city-tour',
    relatedTourSlugs: ['hue-imperial-city-day-tour-from-da-nang-hoi-an', 'hue-cyclo-tour-explore-the-ancient-city-at-a-gentle-pace'],
    title: {
      en: 'Hue Imperial City Tour: Citadel, Royal Tombs & Pagoda',
      vi: 'Tour Khám Phá Đại Nội Huế & Lăng Tẩm Triều Nguyễn'
    },
    shortDescription: {
      en: 'Explore the UNESCO-listed Hue Imperial Citadel (Đại Nội), Khai Dinh Tomb, Thien Mu Pagoda, and Thuy Xuan Incense Village with a local guide. Choose a private air-conditioned car or a motorbike tour.',
      vi: 'Bước vào trái tim kinh đô phong kiến 143 năm của triều Nguyễn. Khám phá Quần thể Di tích Cố đô & Đại Nội Huế được UNESCO công nhận, chiêm ngưỡng nghệ thuật khảm sành sứ Lăng Khải Định, viếng chùa Thiên Mụ 400 năm tuổi và trải nghiệm làng hương Thủy Xuân. Lựa chọn linh hoạt giữa ô tô riêng có điều hòa mát mẻ hoặc xe máy cùng hướng dẫn viên bản địa Huế.'
    },
    duration: '7–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe ô tô riêng hoặc Xe máy'
    },
    price: 'From $65 USD',
    priceCaption: {
      en: 'Tour price per person',
      vi: 'Giá tour trọn gói'
    },
    priceLabel: {
      en: 'From $65 USD',
      vi: 'Từ $65 USD (~1.650.000 VNĐ)'
    },
    bookingCta: {
      en: 'Book Imperial City Tour',
      vi: 'Đặt Tour Đại Nội Ngay'
    },
    departure: {
      en: 'Hue City Center (Hotel Pickup)',
      vi: 'Đón tại khách sạn trung tâm Huế'
    },
    seo: {
      en: {
        title: 'Hue Imperial City Tour | Private Car & Motorbike Options',
        description: 'Comprehensive Hue Imperial City full-day tour. Discover the Imperial Citadel (Đại Nội), Kien Trung Palace, Khai Dinh Tomb & Thien Mu Pagoda with local guides by private car or motorbike.',
        keywords: [
          'Hue Imperial City tour',
          'Hue Citadel tour',
          'Hue Imperial Citadel tour',
          'Hue private car tour',
          'Khai Dinh Tomb tour',
          'Thien Mu Pagoda tour',
          'Hue motorbike tour'
        ]
      },
      vi: {
        title: 'Tour Đại Nội Huế 1 Ngày | Kinh Thành, Lăng Tẩm & Chùa Thiên Mụ',
        description: 'Tour khám phá Đại Nội Huế trọn gói 1 ngày. Tham quan Kinh Thành Huế, điện Kiến Trung, lăng Khải Định, chùa Thiên Mụ và làng hương cùng hướng dẫn viên bản địa bằng xe ô tô riêng hoặc xe máy.',
        keywords: [
          'tour đại nội huế',
          'tour kinh thành huế',
          'tour huế 1 ngày',
          'xe ô tô du lịch huế',
          'tham quan lăng tẩm huế',
          'tour lăng khải định',
          'giá vé đại nội huế 2026',
          'tour xe máy đại nội huế'
        ]
      }
    },
    image: '/photo/hue-imperial-city/dai-noi.jpg',
    ogImage: '/photo/hue-imperial-city/dai-noi.jpg',
    ogImageDimensions: { width: 1200, height: 630 },
    imageAlt: {
      en: 'Meridian Gate Ngo Mon at Hue Imperial Citadel',
      vi: 'Cổng Ngọ Môn Đại Nội Huế'
    },
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20Hue%20Imperial%20City%20Tour%20%E2%80%93%20Discover%20Vietnam%E2%80%99s%20Royal%20Heritage',
    relatedGuide: {
      href: '/about-hue',
      title: {
        en: 'Hue Cultural Travel Guide',
        vi: 'Cẩm nang khám phá Huế'
      },
      description: {
        en: 'Explore the full story behind Hue royal heritage, culinary traditions, and hidden gems.',
        vi: 'Tìm hiểu sâu hơn về lịch sử triều Nguyễn, ẩm thực cung đình và các điểm đến đặc sắc tại Huế.'
      }
    },
    highlights: [
      { en: 'Walk through Ngo Mon Gate and explore the newly restored Kien Trung Palace inside the Imperial Citadel', vi: 'Bước qua Cổng Ngọ Môn và chiêm ngưỡng Điện Kiến Trung vừa được phục dựng tráng lệ trong lòng Đại Nội Huế' },
      { en: 'Learn the uncensored royal secrets, court politics, and daily lives of Vietnam\'s 13 Nguyen Emperors', vi: 'Lắng nghe những thâm cung bí sử chân thực, nghi lễ triều đình và đời sống của 13 vị vua triều Nguyễn' },
      { en: 'Marvel at Khai Dinh Tomb’s breathtaking mosaic interior crafted from millions of porcelain and glass shards', vi: 'Kinh ngạc trước nghệ thuật khảm sành sứ độc nhất vô nhị từ hàng triệu mảnh sứ và thủy tinh tại Lăng Khải Định' },
      { en: 'Visit peaceful 400-year-old Thien Mu Pagoda overlooking the poetic Perfume River', vi: 'Viếng thăm Chùa Thiên Mụ hơn 400 năm tuổi soi bóng tĩnh lặng xuống dòng sông Hương thơ mộng' },
      { en: 'Savor authentic royal & street cuisine specialties like Bún Bò Huế, Bánh Bèo, Nậm, Lọc', vi: 'Thưởng thức bữa trưa đặc sản Huế đậm vị: Bún bò Huế, bộ ba bánh Bèo - Nậm - Lọc, Nem lụi' },
      { en: 'Immerse in Thuy Xuan Incense Village with vibrant rainbow bamboo incense sticks and craft making', vi: 'Check-in rực rỡ tại Làng hương Thủy Xuân 700 năm tuổi và tự tay trải nghiệm se que hương truyền thống' }
    ],
    itinerary: [
      {
        title: { en: '8:00 AM – Hotel pickup & Imperial Citadel orientation', vi: '8:00 – Đón tại khách sạn & giới thiệu tổng quan' },
        description: {
          en: 'Your friendly guide and driver meet you at your Hue hotel. We begin with a brief historical overview of the Nguyen Dynasty (1802–1945) before heading to the ancient Imperial Citadel.',
          vi: 'Hướng dẫn viên và tài xế đón bạn tại khách sạn ở trung tâm Huế. Xe khởi hành qua những con phố rợp bóng cây cổ thụ, giới thiệu khái quát về kinh đô triều Nguyễn trước khi đến Hoàng Thành.'
        }
      },
      {
        title: { en: '8:30 AM – Hue Imperial Citadel (Đại Nội)', vi: '8:30 – Quần thể Đại Nội & Kinh Thành Huế' },
        description: {
          en: 'Step through the grand Ngo Mon (Meridian Gate) where emperor decrees were once announced. Walk across the Golden Waters Bridge to Thai Hoa Palace (Hall of Supreme Harmony), the Ancestral Temple (The Mieu) housing the Nine Dynastic Urns, and the masterfully restored Kien Trung Palace. Hear gripping stories of royal concubines, power struggles, and French colonial treaties.',
          vi: 'Bước qua Cổng Ngọ Môn uy nghiêm nơi từng diễn ra các lễ truyền ngôi và đọc sắc chiếu. Đi qua Cầu Trung Đạo tới Điện Thái Hòa, Thế Miếu với Cửu Đỉnh đúc đồng tinh xảo, và Điện Kiến Trung vừa khánh thành. Hướng dẫn viên chia sẻ những câu chuyện lịch sử chân thực, nghi lễ hoàng cung và ý nghĩa phong thủy của từng công trình.'
        },
        image: '/photo/hue-imperial-city/dai-noi.jpg',
        imageAlt: { en: 'Meridian Gate Ngo Mon at Hue Imperial Citadel', vi: 'Cổng Ngọ Môn Đại Nội Huế' }
      },
      {
        title: { en: '11:00 AM – Historic Thien Mu Pagoda by the Perfume River', vi: '11:00 – Chùa Thiên Mụ & Dòng Sông Hương' },
        description: {
          en: 'Perched on Ha Khe hill since 1601, Hue’s oldest pagoda features the iconic octagonal 7-storey Phuoc Duyen Tower. See the vintage Austin motor vehicle that carried monk Thich Quang Duc to Saigon in 1963, and enjoy serene panoramic river views.',
          vi: 'Tọa lạc trên đồi Hà Khê từ năm 1601, chùa Thiên Mụ là biểu tượng tâm linh lâu đời nhất xứ Huế với Tháp Phước Duyên 7 tầng hình bát giác. Chiêm ngưỡng chiếc xe Austin lịch sử gắn liền với Bồ tát Thích Quảng Đức và ngắm trọn khúc quanh sông Hương êm đềm.'
        },
        image: '/photo/hue-imperial-city/thien-mu-pagoda.jpg',
        imageAlt: { en: 'Thien Mu Pagoda 7-storey tower in Hue', vi: 'Tháp Phước Duyên chùa Thiên Mụ Huế' }
      },
      {
        title: { en: '12:15 PM – Authentic Hue culinary feast at a local eatery', vi: '12:15 – Bữa trưa ẩm thực đặc sản Huế chính gốc' },
        description: {
          en: 'Taste the distinctive flavors of Hue’s culinary capital at a hand-picked local restaurant. Enjoy authentic Bún Bò Huế (spicy lemongrass beef noodle soup), freshly steamed royal savory rice cakes (Bánh Bèo, Nậm, Lọc), and lemongrass-grilled pork skewers (Nem Lụi). Vegetarian and dietary options available upon request.',
          vi: 'Thưởng thức bữa trưa đậm chất cố đô tại quán ăn truyền thống được người dân địa phương yêu thích: Bún bò Huế cay nồng thơm lừng sả ớt, bộ ba bánh hoàng cung (Bánh bèo chén, Bánh nậm, Bánh lọc) và Nem lụi nướng chấm nước tương gia truyền. Có thực đơn chay theo yêu cầu.'
        },
        image: '/photo/banh-nam-hue-food.jpg',
        imageAlt: { en: 'Authentic Hue steamed cakes and local delicacies', vi: 'Bánh nậm và các món ngon đặc sản Huế' }
      },
      {
        title: { en: '1:30 PM – Khai Dinh Royal Tomb (Ung Lang)', vi: '13:30 – Lăng Khải Định (Ứng Lăng) tuyệt tác sành sứ' },
        description: {
          en: 'Climb the dragon-carved staircase on Chau Chu mountain to enter Khai Dinh Tomb — the most extravagant royal mausoleum in Vietnam. Admire the breathtaking Thien Dinh Palace walls and ceilings covered in intricate mosaics crafted from broken porcelain bowls and beer bottles, blending Gothic, Baroque, and traditional Vietnamese art.',
          vi: 'Băng qua các bậc tam cấp chạm khắc rồng trên triền núi Châu Chữ để bước vào Lăng Khải Định — lăng tẩm hoàng gia kỳ công và đắt giá bậc nhất. Chiêm ngưỡng Cung Thiên Định với trần tranh "Cửu Long Ẩn Vân" và các bức phù điêu khảm sành sứ, thủy tinh hoa lệ giao thoa giữa nghệ thuật Pháp và Việt.'
        },
        image: '/photo/visithue-tomb.jpg',
        imageAlt: { en: 'Intricate royal architecture of Khai Dinh Tomb in Hue', vi: 'Kiến trúc lăng tẩm hoàng gia triều Nguyễn tại Huế' }
      },
      {
        title: { en: '3:00 PM – Thuy Xuan Incense Village & Craft Making', vi: '15:00 – Làng hương Thủy Xuân 700 năm tuổi' },
        description: {
          en: 'Stroll through vibrant rainbow-colored displays of traditional incense sticks. Learn the ancient 700-year technique of blending agarwood, cinnamon, and herbal scents, and try rolling your own incense stick alongside friendly local artisans.',
          vi: 'Dạo bước giữa những bó hương đủ sắc màu xòe bung như những đóa hoa rực rỡ dưới nắng. Tìm hiểu kỹ thuật làm hương gia truyền 700 năm từ trầm hương, quế và thảo mộc tự nhiên, đồng thời thử tay se que hương lưu niệm cùng các nghệ nhân.'
        },
        image: '/photo/hue-imperial-city/incense-village.jpg',
        imageAlt: { en: 'Colorful incense bundles at Thuy Xuan Incense Village in Hue', vi: 'Làng làm hương Thủy Xuân rực rỡ sắc màu tại Huế' }
      },
      {
        title: { en: '4:00 PM – Flexible Choice: Abandoned Water Park or Vong Canh Hill', vi: '16:00 – Điểm dừng tự chọn: Hồ Thủy Tiên hoặc Đồi Vọng Cảnh' },
        description: {
          en: 'Choose your afternoon highlight: venture into the surreal Ho Thuy Tien Abandoned Water Park to photograph the iconic lakeside giant dragon statue, or relax on pine-shaded Vong Canh Hill with breathtaking panoramic views of the Perfume River at golden hour.',
          vi: 'Tự do chọn điểm dừng theo sở thích: Khám phá bức tượng rồng khổng lồ ma mị tại Công viên nước bỏ hoang Hồ Thủy Tiên, hoặc thư thái ngắm khúc quanh sông Hương trong ánh chiều tà từ Đồi Vọng Cảnh bạt ngàn thông reo.'
        },
        image: '/photo/hothuytien-abondandedwaterpark.jpg',
        imageAlt: { en: 'Giant dragon structure at Ho Thuy Tien abandoned water park in Hue', vi: 'Tượng rồng công viên nước bỏ hoang Hồ Thủy Tiên Huế' }
      },
      {
        title: { en: '4:45 PM – Return to your hotel & Hue evening suggestions', vi: '16:45 – Trở về khách sạn & gợi ý buổi tối ở Huế' },
        description: {
          en: 'Return to your hotel in Hue city center. Your guide can suggest evening stops such as the Perfume River promenade, local coffee shops, or the night market.',
          vi: 'Trở về khách sạn tại trung tâm thành phố Huế. Bạn có thể hỏi hướng dẫn viên gợi ý điểm dạo buổi tối như phố đi bộ ven sông Hương, quán cà phê địa phương hoặc chợ đêm.'
        }
      }
    ],
    gallery: [
      {
        url: '/photo/hue-imperial-city/dai-noi.jpg',
        alt: { en: 'Meridian Gate of Hue Citadel', vi: 'Cổng Ngọ Môn Đại Nội' },
        caption: { en: 'Ngo Mon Meridian Gate - Grand entrance to the Hue Imperial Citadel', vi: 'Cổng Ngọ Môn - Lối vào chính diện Đại Nội Huế' }
      },
      {
        url: '/photo/hue-imperial-city/dai-noi-customer.jpg',
        alt: { en: 'Happy travelers exploring Hue Citadel courtyards', vi: 'Du khách tham quan sân chầu Đại Nội Huế' },
        caption: { en: 'Guests discovering historic courtyards and ancient royal halls', vi: 'Du khách cùng hướng dẫn viên khám phá các cung điện cổ kính' }
      },
      {
        url: '/photo/hue-imperial-city/customer-pic.jpg',
        alt: { en: 'Guests enjoying comfortable tour in Hue', vi: 'Khách hàng vui vẻ trong chuyến đi' },
        caption: { en: 'Personalized care and memorable travel moments', vi: 'Khoảnh khắc vui vẻ, đồng hành tận tâm cùng du khách' }
      },
      {
        url: '/photo/hue-imperial-city/thien-mu-pagoda.jpg',
        alt: { en: 'Phuoc Duyen Tower at Thien Mu Pagoda', vi: 'Tháp Phước Duyên chùa Thiên Mụ' },
        caption: { en: 'Iconic 7-tier Phuoc Duyen Tower overlooking the Perfume River', vi: 'Tháp Phước Duyên 7 tầng soi bóng bên dòng sông Hương' }
      },
      {
        url: '/photo/hue-imperial-city/incense-village.jpg',
        alt: { en: 'Vibrant rainbow incense displays in Thuy Xuan village', vi: 'Làng hương Thủy Xuân rực rỡ' },
        caption: { en: 'Photogenic colorful incense bundles in Thuy Xuan village', vi: 'Những bó hương rực rỡ sắc màu tại làng hương Thủy Xuân' }
      },
      {
        url: '/photo/hue-kien-trung-palace.jpg',
        alt: { en: 'Newly restored Kien Trung Palace in Hue Imperial City', vi: 'Điện Kiến Trung phục dựng lộng lẫy' },
        caption: { en: 'Kien Trung Palace - masterpiece of French-Indochinese architecture', vi: 'Điện Kiến Trung - kiệt tác kiến trúc Pháp - Đông Dương vừa hồi sinh' }
      }
    ],
    transportOptions: [
      {
        name: { en: 'Private Air-Conditioned Car', vi: 'Xe ô tô riêng có điều hòa' },
        description: {
          en: 'A modern, private 4, 7, or 16-seater vehicle with cool air-conditioning and a courteous local driver. Perfect for multi-generational families, seniors, young children, or travelers who want a completely relaxed, weather-protected journey away from the tropical midday heat.',
          vi: 'Xe ô tô riêng 4–7–16 chỗ đời mới với điều hòa mát mẻ và tài xế bản địa chu đáo. Lựa chọn lý tưởng hàng đầu cho gia đình có người lớn tuổi, trẻ nhỏ hoặc du khách muốn hành trình thư thái, tránh trưa nắng gắt và thời tiết thất thường của miền Trung.'
        },
        badge: {
          en: 'Private car option',
          vi: '✨ Khuyên dùng cho gia đình & tránh nắng mưa'
        },
        highlight: true,
        features: [
          { en: 'Cool air-conditioning throughout the entire day', vi: 'Điều hòa mát mẻ suốt toàn bộ hành trình' },
          { en: 'Enclosed travel with air conditioning', vi: 'Di chuyển trong xe có điều hòa' },
          { en: 'Generous luggage space & comfortable seating', vi: 'Không gian riêng tư, cốp chứa hành lý rộng rãi' },
          { en: 'Door-to-door hotel pickup and drop-off in Hue', vi: 'Đón trả tận nơi tại khách sạn trung tâm Huế' }
        ]
      },
      {
        name: { en: 'Authentic Motorbike with Rider', vi: 'Xe máy riêng cùng tài xế bản địa' },
        description: {
          en: 'Ride as a passenger behind an experienced local driver. Weave through ancient Hue alleys, feel the river breeze, and enjoy flexible, spontaneous photography stops along scenic tree-lined avenues.',
          vi: 'Ngồi sau xe máy cùng tài xế bản địa dày dặn kinh nghiệm. Luồn lách qua các ngõ phố cổ kính xứ Huế, tận hưởng làn gió mát và trải nghiệm du lịch chân thực, linh hoạt dừng chụp ảnh bất cứ đâu.'
        },
        badge: {
          en: '🏍️ Authentic Local Adventure',
          vi: '🏍️ Trải nghiệm phiêu lưu bản địa'
        },
        features: [
          { en: 'Skilled, gentle local Easy Rider driver', vi: 'Tài xế bản địa tay lái vững vàng, êm ái' },
          { en: 'High-quality safety helmets & rain gear provided', vi: 'Trang bị mũ bảo hiểm chuẩn & áo mưa tiện lợi' },
          { en: 'Immersive street-level exploration & photo stops', vi: 'Dễ dàng dừng ngắm cảnh & chụp hình góc đẹp' }
        ]
      }
    ],
    inclusions: [
      { en: 'Private air-conditioned car or private motorbike with experienced rider', vi: 'Ô tô riêng có điều hòa mát mẻ hoặc xe máy riêng cùng tài xế bản địa giàu kinh nghiệm' },
      { en: 'English-speaking local guide', vi: 'Hướng dẫn viên địa phương nói tiếng Anh' },
      { en: 'Hotel pickup and drop-off in Hue city center', vi: 'Đón và trả khách tận nơi tại khách sạn trong trung tâm TP Huế' },
      { en: 'Cold bottled drinking water throughout the tour', vi: 'Nước suối đóng chai mát lạnh suốt hành trình' },
      { en: 'High-quality safety helmets and emergency rain ponchos for motorbike option', vi: 'Mũ bảo hiểm đạt chuẩn an toàn và áo mưa tiện lợi cho khách đi xe máy' }
    ],
    exclusions: [
      { en: 'Citadel & royal tomb entrance tickets (guide assists with purchasing on-site)', vi: 'Vé tham quan Đại Nội và các lăng tẩm (hướng dẫn viên hỗ trợ mua trực tiếp tại quầy)' },
      { en: 'Lunch and personal beverage orders unless requested in advance', vi: 'Bữa trưa và đồ uống cá nhân (trừ khi yêu cầu đặt trọn gói trước)' },
      { en: 'Personal souvenirs and gratuities for guide/driver (appreciated but optional)', vi: 'Chi phí mua sắm cá nhân và tiền tip tùy tâm cho tài xế/hướng dẫn viên' }
    ],
    optionalAddons: [
      { en: 'Traditional Hue lunch banquet featuring royal specialties', vi: 'Bữa trưa đặc sản Huế thịnh soạn với các món cung đình trứ danh' },
      { en: 'Visit Tu Duc Tomb (Khiem Lang) — Vietnam’s most poetic royal mausoleum', vi: 'Tham quan thêm Lăng Tự Đức (Khiêm Lăng) — lăng tẩm thơ mộng nhất của triều Nguyễn' },
      { en: 'Dragon boat cruise on the Perfume River between Citadel and Thien Mu Pagoda', vi: 'Du thuyền rồng ngắm cảnh sông Hương từ bến thuyền Đại Nội đến Chùa Thiên Mụ' },
      { en: 'Explore the surreal Ho Thuy Tien Abandoned Water Park dragon structure', vi: 'Khám phá kiến trúc tượng rồng ma mị tại Công viên nước bỏ hoang Hồ Thủy Tiên' }
    ],
    whyBookWithUs: [
      { en: 'Plan your itinerary with founder and lead guide Mai Anh Tu', vi: 'Cùng lên lịch trình với Mai Anh Tú, người sáng lập và hướng dẫn viên trưởng' },
      { en: 'Unrushed, flexible itinerary with freedom to spend as much time as you desire at key monuments', vi: 'Lịch trình linh hoạt, không gò bó, bạn hoàn toàn làm chủ thời gian tại mỗi điểm di tích' },
      { en: 'True historical depth beyond guidebooks — unearthing hidden palace anecdotes and royal life', vi: 'Chiều sâu văn hóa vượt xa sách hướng dẫn — khám phá những câu chuyện thâm cung bí sử chân thật' },
      { en: 'Hotel pickup and drop-off in Hue city center', vi: 'Đón và trả khách tại khách sạn trong trung tâm Huế' },
      { en: 'Confirm the route, inclusions, and optional costs before booking', vi: 'Xác nhận lộ trình, dịch vụ bao gồm và chi phí tùy chọn trước khi đặt' }
    ],
    insiderTips: [
      {
        title: { en: 'Respectful Temple & Shrine Dress Code', vi: 'Quy định trang phục nơi tôn nghiêm' },
        content: {
          en: 'Hue Imperial Citadel and royal tombs contain sacred ancestral temples (The Mieu, Trieu Mieu). Please wear clothes covering your shoulders and knees. Avoid sleeveless tops or short skirts.',
          vi: 'Đại Nội và các lăng tẩm có nhiều khu vực thờ phụng trang nghiêm (Thế Miếu, Triệu Miếu, điện thờ vua). Vui lòng mặc trang phục lịch sự, che vai và đầu gối. Tránh áo sát nách hoặc váy ngắn.'
        }
      },
      {
        title: { en: 'Money-Saving Ticket Combo Tip', vi: 'Mẹo mua vé combo tiết kiệm chi phí' },
        content: {
          en: 'If visiting the Citadel plus Khai Dinh and Tu Duc tombs, buy the 3-site or 4-site Combo Ticket at the gate. It costs roughly 420,000 VND (~$17 USD) instead of buying separate tickets, saving you over 25%.',
          vi: 'Nếu bạn có kế hoạch đi Đại Nội cùng Lăng Khải Định và Lăng Tự Đức, hãy chọn mua Vé Tuyến (combo 3 điểm hoặc 4 điểm) tại quầy vé. Giá khoảng 420.000 VNĐ, tiết kiệm hơn 25% so với mua vé lẻ từng nơi.'
        }
      },
      {
        title: { en: 'Best Times for Golden Hour Photos', vi: 'Thời điểm chụp ảnh đẹp nhất' },
        content: {
          en: 'The morning light (8:30–10:00 AM) illuminates Ngo Mon Gate and Thai Hoa Palace beautifully with minimal crowds. Late afternoon (3:30–5:00 PM) offers magical golden reflections at Thien Mu Pagoda and Thuy Xuan village.',
          vi: 'Ánh nắng buổi sáng (8:30 - 10:00) chiếu rọi Cổng Ngọ Môn và sân chầu tuyệt đẹp khi chưa quá đông người. Khoảng 15:30 - 17:00 chiều là lúc chùa Thiên Mụ và làng hương đón ánh hoàng hôn lung linh nhất.'
        }
      },
      {
        title: { en: 'Pacing & Comfortable Walking Shoes', vi: 'Giày dép thoải mái & nhịp độ tham quan' },
        content: {
          en: 'The Imperial Citadel spans over 500 hectares with cobblestone courtyards. Wear supportive walking shoes, bring sunscreen and a hat. Our guides pace the walking tour smoothly with shaded rest stops.',
          vi: 'Đại Nội có diện tích hơn 500ha với nhiều sân gạch và cung điện trải dài. Hãy mang giày đi bộ êm chân, mũ nón và kem chống nắng. Hướng dẫn viên sẽ sắp xếp thời gian nghỉ ngơi râm mát hợp lý.'
        }
      }
    ],
    faq: [
      {
        question: { en: 'How much are entrance tickets and how do we pay?', vi: 'Giá vé tham quan là bao nhiêu và thanh toán thế nào?' },
        answer: {
          en: 'The Imperial Citadel ticket is 200,000 VND (~$8 USD) for adults, and Khai Dinh Tomb is 150,000 VND. A 3-site combo ticket (Citadel + Khai Dinh + Minh Mang) is 420,000 VND. Your guide will assist you in purchasing tickets directly at the official ticket counters by cash or QR bank transfer.',
          vi: 'Vé Đại Nội là 200.000 VNĐ/người lớn, Lăng Khải Định là 150.000 VNĐ. Vé combo 3 điểm (Đại Nội + Khải Định + Minh Mạng) là 420.000 VNĐ. Hướng dẫn viên sẽ hỗ trợ bạn mua vé trực tiếp tại quầy bằng tiền mặt hoặc chuyển khoản mã QR.'
        }
      },
      {
        question: { en: 'Can I customize the afternoon stops or tour duration?', vi: 'Tôi có thể tùy chỉnh các điểm dừng buổi chiều hoặc thời gian tour không?' },
        answer: {
          en: 'Yes! We pride ourselves on custom flexibility. You can substitute royal tombs, add the abandoned water park (Ho Thuy Tien), visit conical hat craft villages, or shorten the day into a 4-hour half-day tour.',
          vi: 'Hoàn toàn được! Tour mang tính cá nhân hóa cao. Bạn có thể đổi lăng tẩm khác, ghé công viên nước bỏ hoang Hồ Thủy Tiên, làng nón truyền thống, hoặc rút ngắn thành tour nửa ngày 4 tiếng.'
        }
      },
      {
        question: { en: 'Is this tour suitable for seniors and young children?', vi: 'Tour có phù hợp với người cao tuổi và trẻ nhỏ không?' },
        answer: {
          en: 'Yes! Our private air-conditioned car option is especially popular for multi-generational families with seniors or young children, offering total climate control and relaxed comfort. Inside the Citadel, electric buggies (trams) can also be arranged on-site for guests who prefer less walking.',
          vi: 'Rất phù hợp! Lựa chọn xe ô tô riêng có điều hòa mát mẻ là phương án được các gia đình nhiều thế hệ, có người lớn tuổi hoặc trẻ nhỏ yêu thích nhất. Bên trong Đại Nội, bạn còn có thể thuê thêm xe điện trung chuyển nếu người lớn tuổi ngại đi bộ xa.'
        }
      },
      {
        question: { en: 'What should I wear for temples and royal tombs?', vi: 'Tôi nên mặc trang phục thế nào khi tham quan?' },
        answer: {
          en: 'Dress respectfully with covered shoulders and knees for royal ancestral temples and pagodas. Wear lightweight, breathable fabrics and comfortable walking sneakers.',
          vi: 'Hãy mặc trang phục lịch sự che kín vai và đầu gối khi vào các điện thờ hoàng gia và chùa chiền. Nên chọn chất vải thoáng mát và giày thể thao đi bộ êm chân.'
        }
      },
      {
        question: { en: 'What happens if it rains during the tour?', vi: 'Nếu trời mưa trong ngày đi tour thì sao?' },
        answer: {
          en: 'Hue weather can be unpredictable. If traveling by private car, rain will never disrupt your day as our vehicle stays dry and comfortable with large umbrellas provided. If choosing motorbike, we supply high-grade rain ponchos and adjust stops to sheltered palaces and cozy tea houses.',
          vi: 'Thời tiết Huế đôi khi có mưa bất chợt. Nếu chọn đi ô tô riêng, bạn hoàn toàn yên tâm vì xe luôn khô ráo mát mẻ, có sẵn dù lớn che mưa tận cửa. Nếu chọn đi xe máy, chúng mình trang bị sẵn áo mưa cao cấp và linh hoạt ưu tiên tham quan các cung điện có mái che hoặc thưởng thức trà cung đình trong lúc đợi tạnh mưa.'
        }
      },
      {
        question: { en: 'Can you accommodate vegetarian or gluten-free diets for lunch?', vi: 'Có thực đơn ăn chay hoặc yêu cầu ăn kiêng cho bữa trưa không?' },
        answer: {
          en: 'Hue is world-renowned for its exquisite Buddhist vegetarian cuisine (cơm chay Huế). Simply inform us when booking and we will reserve an authentic vegetarian dining experience with zero hassle.',
          vi: 'Huế rất nổi tiếng với ẩm thực chay thanh tịnh cung đình. Bạn chỉ cần báo trước khi đặt tour, chúng mình sẽ sắp xếp quán chay đặc sản chuẩn vị và chu đáo nhất.'
        }
      }
    ]
  },
  {
    id: 'hue-dmz-tour',
    slug: 'hue-dmz-tour',
    relatedTourSlugs: ['hue-to-hoi-an-via-hai-van-pass', 'hue-imperial-city-tour'],
    title: {
      en: 'Hue DMZ Tour: Vinh Moc Tunnels & Quang Tri Citadel',
      vi: 'Tour Lịch Sử Khu Phi Quân Sự (DMZ)'
    },
    shortDescription: {
      en: 'Walk through history on Vietnam\'s former Demilitarized Zone. With our knowledgeable local guides, you\'ll explore the underground Vinh Moc Tunnels, stand on the 17th Parallel at Hien Luong Bridge, and feel the weight of history at Quang Tri Citadel.',
      vi: 'Bước đi giữa lịch sử tại Khu Phi Quân Sự của Việt Nam. Cùng hướng dẫn viên địa phương am hiểu, bạn sẽ khám phá địa đạo Vịnh Mốc, đứng trên Vĩ Tuyến 17 tại cầu Hiền Lương, và cảm nhận sức nặng của lịch sử tại Thành Cổ Quảng Trị.'
    },
    duration: 'Full day',
    transport: {
      en: 'Private Car',
      vi: 'Xe ô tô riêng'
    },
    price: 'From $70 USD',
    image: '/photo/f06819e96f07b159e8167.jpg',
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20Hue%20DMZ%20Tour%20%E2%80%93%20Vinh%20Moc%20Tunnels%2C%20Hien%20Luong%20Bridge%20%26%20Quang%20Tri%20Citadel',
    highlights: [
      { en: 'Walk deep into the historic Vinh Moc Tunnels — one of Vietnam\'s most preserved underground villages', vi: 'Đi bộ sâu vào Địa Đạo Vịnh Mốc lịch sử — một trong những làng ngầm được bảo tồn tốt nhất Việt Nam' },
      { en: 'Stand exactly on the 17th Parallel at the iconic Hien Luong Bridge', vi: 'Đứng ngay trên Vĩ Tuyến 17 tại cây cầu biểu tượng Hiền Lương' },
      { en: 'Pay your respects at the moving Quang Tri Ancient Citadel memorial', vi: 'Thăm viếng khu tưởng niệm xúc động tại Thành Cổ Quảng Trị' },
      { en: 'Travel with a knowledgeable local guide who shares the real stories', vi: 'Đi cùng hướng dẫn viên địa phương am hiểu, người chia sẻ những câu chuyện thực sự' }
    ],
    itinerary: [
      { title: { en: 'Morning pickup in Hue', vi: 'Đón tại Huế vào buổi sáng' }, description: { en: 'Depart north along Highway 1, passing rice paddies, fishing villages, and peaceful countryside.', vi: 'Khởi hành về phía bắc theo Quốc lộ 1, đi qua ruộng lúa, làng chài và vùng quê bình yên.' } },
      { title: { en: 'Hien Luong Bridge & Ben Hai River (17th Parallel)', vi: 'Cầu Hiền Lương & Sông Bến Hải (Vĩ tuyến 17)' }, description: { en: 'Stand on the historic line that once divided North and South Vietnam. Visit the DMZ Museum and flag tower, and walk across the iconic blue-and-yellow bridge.', vi: 'Đứng trên ranh giới lịch sử từng chia cắt hai miền Nam Bắc. Thăm Bảo tàng DMZ, tháp cờ và đi bộ qua cây cầu xanh vàng biểu tượng.' } },
      { title: { en: 'Vinh Moc Tunnels', vi: 'Địa Đạo Vịnh Mốc' }, description: { en: 'Explore the incredible underground network where hundreds of villagers lived during the war. See kitchens, wells, family chambers, and maternity rooms that tell a story of extraordinary survival.', vi: 'Khám phá mạng lưới địa đạo phi thường nơi hàng trăm người dân sinh sống trong chiến tranh. Nhìn thấy bếp núc, giếng nước, buồng gia đình và phòng sinh đẻ kể câu chuyện về sự sống sót phi thường.' } },
      { title: { en: 'Lunch at a local restaurant', vi: 'Ăn trưa tại nhà hàng địa phương' }, description: { en: 'Recharge with authentic Vietnamese food at a local eatery near the coast.', vi: 'Nạp năng lượng với ẩm thực Việt Nam chính gốc tại nhà hàng địa phương gần bờ biển.' } },
      { title: { en: 'Quang Tri Ancient Citadel', vi: 'Thành Cổ Quảng Trị' }, description: { en: 'Visit the memorial park built on the site of the 1972 battle. Walk among monuments and exhibits honoring the thousands who fought and fell during the 81-day siege.', vi: 'Thăm công viên tưởng niệm được xây trên nơi diễn ra trận chiến năm 1972. Đi qua các tượng đài và hiện vật tưởng nhớ hàng nghìn người đã chiến đấu và hy sinh trong trận công hãm 81 ngày.' } },
      { title: { en: 'Scenic drive back to Hue', vi: 'Chạy xe ngắm cảnh trở về Huế' }, description: { en: 'Relax and enjoy the countryside views on the way back.', vi: 'Thư giãn và tận hưởng cảnh đồng quê trên đường về.' } }
    ],
    inclusions: [
      { en: 'Private transport from/to Hue', vi: 'Xe ô tô riêng đón và trả tại Huế' },
      { en: 'English-speaking guide', vi: 'Hướng dẫn viên nói tiếng Anh' },
      { en: 'Entrance tickets to all sites', vi: 'Vé vào cửa tất cả các điểm tham quan' },
      { en: 'Lunch included', vi: 'Bữa trưa được bao gồm' }
    ],
    exclusions: [
      { en: 'Personal expenses', vi: 'Chi phí cá nhân' },
      { en: 'Tips for guide and driver (appreciated but not required)', vi: 'Tiền tip cho hướng dẫn viên và tài xế (được hoan nghênh nhưng không bắt buộc)' }
    ],
    whyBookWithUs: [
      { en: 'Focused and powerful — just the 3 most meaningful DMZ landmarks', vi: 'Tập trung và ấn tượng — chỉ 3 địa danh DMZ có ý nghĩa nhất' },
      { en: 'Local guides who share real stories that go beyond the textbooks', vi: 'Hướng dẫn viên địa phương kể những câu chuyện thực sự vượt ra ngoài sách giáo khoa' },
      { en: 'Comfortable, hassle-free experience with all tickets and lunch covered', vi: 'Trải nghiệm thoải mái, không rắc rối với toàn bộ vé và bữa trưa được bao gồm' },
      { en: 'Small groups or private tours for a more personal experience', vi: 'Nhóm nhỏ hoặc tour riêng để có trải nghiệm cá nhân hơn' }
    ],
    faq: [
      { question: { en: 'What is included in the tour price?', vi: 'Giá tour bao gồm những gì?' }, answer: { en: 'Private transport, an English-speaking guide, all entrance tickets, and lunch at a local restaurant.', vi: 'Xe ô tô riêng, hướng dẫn viên nói tiếng Anh, tất cả vé vào cửa và bữa trưa tại nhà hàng địa phương.' } },
      { question: { en: 'Is the tour physically demanding?', vi: 'Tour này có đòi hỏi sức lực nhiều không?' }, answer: { en: 'The Vinh Moc Tunnels require some bending and walking through narrow passages, but the overall tour is manageable for most fitness levels. We walk slowly and take regular breaks.', vi: 'Địa Đạo Vịnh Mốc đòi hỏi phải khom người và đi qua các lối hẹp, nhưng nhìn chung tour phù hợp với hầu hết mức thể lực. Chúng mình đi chậm và nghỉ ngơi thường xuyên.' } },
      { question: { en: 'Is this a private tour or group tour?', vi: 'Đây là tour riêng hay tour nhóm?' }, answer: { en: 'We specialize in private tours, meaning the vehicle and guide are exclusively for your group. This gives you a more personal, unrushed experience.', vi: 'Chúng mình chuyên về tour riêng, nghĩa là xe và hướng dẫn viên dành riêng cho nhóm của bạn. Điều này mang lại trải nghiệm cá nhân hơn, không vội vã.' } }
    ]
  },
  {
    id: 'hue-food-tour-tam-giang-sunset',
    slug: 'hue-food-tour-tam-giang-sunset',
    relatedTourSlugs: ['hue-cyclo-tour-explore-the-ancient-city-at-a-gentle-pace', 'hue-imperial-city-tour'],
    title: {
      en: 'Hue Food Tour & Tam Giang Sunset',
      vi: 'Food Tour Xe Máy & Hoàng Hôn Phá Tam Giang'
    },
    shortDescription: {
      en: 'Food tastes better when a local shows you where to eat. We\'ll weave through small alleyways to find Hue\'s best street food, then ride out to Tam Giang Lagoon just in time to watch a spectacular sunset paint the water gold.',
      vi: 'Đồ ăn luôn ngon hơn khi có người địa phương dẫn đường. Chúng mình sẽ luồn lách qua các ngõ hẻm để tìm những quán ăn ngon nhất Huế, rồi chạy xe ra Phá Tam Giang vừa kịp lúc ngắm hoàng hôn nhuộm vàng cả mặt nước.'
    },
    duration: 'Half day / Evening',
    transport: {
      en: 'Motorbike',
      vi: 'Xe máy'
    },
    price: 'From $35 USD',
    image: '/photo/huefoodtour.jpg',
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20%F0%9F%8C%9F%20Hue%20Food%20Tour%20%26%20Sunset%20at%20Tam%20Giang%20Lagoon',
    highlights: [
      { en: 'Ride safely through vibrant streets with a knowledgeable local guide', vi: 'Di chuyển an toàn qua những con phố sôi động cùng hướng dẫn viên địa phương am hiểu' },
      { en: 'Taste iconic Bún Bò Huế, Royal Cakes, Nem Lụi, and more', vi: 'Thưởng thức Bún Bò Huế nổi tiếng, Bánh bèo nậm lọc, Nem Lụi và nhiều món khác' },
      { en: 'Discover the rare Bánh Khoái Cá Kình — nearly impossible to find outside Hue', vi: 'Khám phá Bánh Khoái Cá Kình hiếm gặp — gần như không thể tìm thấy ngoài Huế' },
      { en: 'Experience the energetic buzz of a traditional local market', vi: 'Hòa mình vào không khí nhộn nhịp của một khu chợ truyền thống' },
      { en: 'Watch an unforgettable sunset over the vast Tam Giang Lagoon', vi: 'Chiêm ngưỡng hoàng hôn không thể nào quên trên đầm phá Tam Giang bao la' },
      { en: 'Finish with a sweet, colorful bowl of traditional Chè Huế', vi: 'Kết thúc bằng ly chè Huế ngọt ngào và đầy màu sắc truyền thống' }
    ],
    itinerary: [
      {
        title: { en: 'Stop 1 — Bún Bò Huế', vi: 'Điểm 1 — Bún Bò Huế' },
        description: { en: 'The soul of Hue cuisine. A steaming bowl of thick round rice noodles in spicy lemongrass broth, topped with beef, crab cakes, and fresh herbs. The aroma of chili oil will pull you in before your first spoonful.', vi: 'Linh hồn của ẩm thực Huế. Một tô bún sợi tròn to trong nước lèo cay sả thơm ngào ngạt, phủ thịt bò, chả cua và rau sống. Mùi dầu ớt sẽ hút bạn vào trước cả khi thưởng thức miếng đầu tiên.' }
      },
      {
        title: { en: 'Stop 2 — Royal Cakes & Nem Lụi', vi: 'Điểm 2 — Bánh bèo, nậm, lọc & Nem Lụi' },
        description: { en: 'Bánh Bèo (soft rice cakes with dried shrimp), Bánh Nậm (flat cakes in banana leaves), and Bánh Lọc (chewy tapioca dumplings). Then Nem Lụi — smoky pork skewers grilled on lemongrass, wrapped with herbs and dipped in peanut sauce.', vi: 'Bánh Bèo (bánh gạo mềm với tôm khô), Bánh Nậm (bánh dẹp gói lá chuối), và Bánh Lọc (bánh bột lọc dai dai). Tiếp theo là Nem Lụi — nem heo nướng trên sả thơm khói, cuộn với rau thơm và chấm nước lạc đậu đà.' }
      },
      {
        title: { en: 'Stop 3 — Local Market & Bánh Khoái Cá Kình', vi: 'Điểm 3 — Chợ địa phương & Bánh Khoái Cá Kình' },
        description: { en: 'Dive into a bustling local market full of colorful produce and street vendors. Then taste the rare Bánh Khoái Cá Kình — a golden crispy pancake stuffed with fresh mackerel, bean sprouts, and herbs, served with Hue\'s special peanut-sesame dipping sauce.', vi: 'Hòa mình vào khu chợ địa phương nhộn nhịp đầy rau củ sắc màu và người bán hàng rong. Rồi thưởng thức Bánh Khoái Cá Kình hiếm gặp — bánh xèo vàng giòn nhân cá kình tươi, giá đỗ và rau thơm, ăn kèm nước chấm lạc vừng đặc trưng của Huế.' }
      },
      {
        title: { en: 'Stop 4 — Sunset at Tam Giang Lagoon', vi: 'Điểm 4 — Hoàng hôn Phá Tam Giang' },
        description: { en: 'Ride through rice paddies and fishing villages to reach the peaceful lagoon. As the sun dips low, fishermen cast their nets and the sky glows orange and pink over the water. A magical scene that perfectly balances the lively flavors you\'ve just tasted.', vi: 'Phóng xe qua cánh đồng lúa và làng chài để đến đầm phá bình yên. Khi mặt trời dần xuống thấp, ngư dân thả lưới và bầu trời rực rỡ màu cam hồng trên mặt nước. Một khung cảnh kỳ diệu cân bằng hoàn hảo với những hương vị sống động bạn vừa nếm trải.' }
      },
      {
        title: { en: 'Stop 5 — Chè Huế', vi: 'Điểm 5 — Chè Huế' },
        description: { en: 'Cool down with Hue\'s famous dessert soup. A colorful mix of beans, lotus seeds, jelly, taro, and coconut milk served over crushed ice. Sweet, refreshing, and the perfect finale to your food journey.', vi: 'Giải nhiệt với chè nổi tiếng của Huế. Hỗn hợp đậu, hạt sen, thạch, khoai môn và nước cốt dừa đầy màu sắc phục vụ cùng đá bào. Ngọt ngào, mát lạnh và là kết thúc hoàn hảo cho hành trình ẩm thực của bạn.' }
      }
    ],
    whyBookWithUs: [
      { en: 'Handpicked dishes from the most authentic, off-the-beaten-path local eateries', vi: 'Các món ăn được lựa chọn kỹ từ những quán ăn địa phương chân thực nhất, ít người biết đến' },
      { en: 'Knowledgeable English-speaking guide who loves sharing Hue food culture', vi: 'Hướng dẫn viên nói tiếng Anh am hiểu, yêu thích chia sẻ văn hóa ẩm thực Huế' },
      { en: 'A perfect mix of food, culture, and natural scenery', vi: 'Sự kết hợp hoàn hảo giữa ẩm thực, văn hóa và cảnh quan thiên nhiên' },
      { en: 'Safe and fun ride on the back of a motorbike with an experienced driver', vi: 'Chuyến đi xe máy an toàn và vui vẻ cùng tài xế có kinh nghiệm' },
      { en: 'Small group size for a personal, relaxed experience', vi: 'Quy mô nhóm nhỏ để có trải nghiệm cá nhân, thoải mái' }
    ],
    faq: [
      { question: { en: 'What if I have dietary restrictions?', vi: 'Nếu tôi có yêu cầu đặc biệt về chế độ ăn uống thì sao?' }, answer: { en: 'Please let us know in advance and we will adjust the food stops accordingly. We can accommodate vegetarian and most dietary needs.', vi: 'Vui lòng cho chúng mình biết trước và chúng mình sẽ điều chỉnh các điểm ăn phù hợp. Chúng mình có thể phục vụ người ăn chay và hầu hết các yêu cầu ăn uống.' } },
      { question: { en: 'How much food will I eat?', vi: 'Tôi sẽ ăn bao nhiêu thức ăn?' }, answer: { en: 'Quite a lot! We spread it across 5 stops with small portions at each, so you get to taste everything without feeling overly full. Come hungry!', vi: 'Khá nhiều! Chúng mình chia thành 5 điểm dừng với khẩu phần nhỏ ở mỗi nơi, để bạn nếm thử mọi thứ mà không cảm thấy quá no. Hãy đến khi đói!' } },
      { question: { en: 'Is riding a motorbike safe?', vi: 'Đi xe máy có an toàn không?' }, answer: { en: 'Yes! You ride pillion (on the back) with an experienced local driver. All riders wear proper helmets and we travel at a safe, comfortable speed.', vi: 'Có! Bạn ngồi sau (ngồi đèo) cùng tài xế địa phương kinh nghiệm. Tất cả đều đội mũ bảo hiểm đúng chuẩn và chúng mình di chuyển với tốc độ an toàn, thoải mái.' } }
    ]
  },
  {
    id: 'hue-cyclo-tour',
    slug: 'hue-cyclo-tour-explore-the-ancient-city-at-a-gentle-pace',
    relatedTourSlugs: ['hue-imperial-city-tour', 'hue-food-tour-tam-giang-sunset'],
    title: {
      en: 'Hue Cyclo Tour',
      vi: 'Tour Xích Lô Khám Phá Cố Đô'
    },
    shortDescription: {
      en: 'There is no better way to feel the soul of Hue than from the seat of a traditional cyclo. Sit back and let our friendly riders pedal you through ancient streets, across the Eiffel-designed Truong Tien Bridge, and along the peaceful Perfume River.',
      vi: 'Không có cách nào cảm nhận cái hồn của Huế trọn vẹn hơn là ngồi trên chiếc xích lô truyền thống. Hãy ngả lưng thư giãn để các bác tài xích lô thân thiện đưa bạn qua các phố cổ, qua cầu Trường Tiền do Eiffel thiết kế và dọc bờ sông Hương bình yên.'
    },
    duration: '1.5–2 hours',
    transport: {
      en: 'Cyclo',
      vi: 'Xích lô'
    },
    price: 'From $18 USD',
    image: '/photo/hue-incense-sticks-village.jpg',
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20Hue%20Cyclo%20Tour%20%E2%80%93%20Explore%20the%20Ancient%20City%20at%20a%20Gentle%20Pace',
    highlights: [
      { en: 'Ride a traditional Hue cyclo with your own personal driver', vi: 'Ngồi xích lô truyền thống Huế cùng bác tài riêng của bạn' },
      { en: 'Cross the iconic Truong Tien Bridge, designed by Gustave Eiffel', vi: 'Băng qua cầu Trường Tiền biểu tượng, do Gustave Eiffel thiết kế' },
      { en: 'Explore Dong Ba Market — the oldest and most vibrant in Hue', vi: 'Khám phá chợ Đông Ba — chợ lâu đời và sôi động nhất Huế' },
      { en: 'Pass by the Imperial Citadel for beautiful photo opportunities', vi: 'Đi qua Đại Nội để có những bức ảnh đẹp tuyệt vời' },
      { en: 'Relax along the Perfume River and admire the French colonial architecture', vi: 'Thư giãn dọc sông Hương và ngắm nhìn kiến trúc thuộc địa Pháp' }
    ],
    itinerary: [
      { title: { en: 'Pickup at your hotel in Hue city center', vi: 'Đón tại khách sạn ở trung tâm thành phố Huế' } },
      { title: { en: 'Truong Tien Bridge', vi: 'Cầu Trường Tiền' }, description: { en: 'Ride across this elegant six-span steel bridge spanning the Perfume River. Designed by the Eiffel company in 1899, it\'s one of Hue\'s most beloved landmarks.', vi: 'Đi qua cây cầu thép thanh lịch sáu nhịp bắc qua sông Hương. Do công ty Eiffel thiết kế năm 1899, đây là một trong những địa danh được yêu mến nhất của Huế.' } },
      { title: { en: 'Dong Ba Market', vi: 'Chợ Đông Ba' }, description: { en: 'Stop at the heart of Hue\'s daily trade — a colorful, lively market filled with local produce, street food, and traditional crafts.', vi: 'Dừng chân tại trung tâm giao thương hàng ngày của Huế — một khu chợ đầy màu sắc và sôi động với rau củ địa phương, đồ ăn vỉa hè và đồ thủ công truyền thống.' } },
      { title: { en: 'Imperial Citadel (exterior)', vi: 'Đại Nội (bên ngoài)' }, description: { en: 'Ride past the ancient walls of the Imperial Citadel for wonderful photos. (Entrance to the Citadel is not included but can be arranged separately.)', vi: 'Đi qua những bức tường cổ của Đại Nội để chụp những bức ảnh tuyệt vời. (Vé vào cửa Đại Nội không được bao gồm nhưng có thể sắp xếp riêng.)' } },
      { title: { en: 'Riverside boulevards', vi: 'Đại lộ ven sông' }, description: { en: 'Roll through Hue\'s tree-lined avenues and peaceful riverside streets at a beautifully unhurried pace.', vi: 'Đi qua những đại lộ bóng cây và phố ven sông yên bình của Huế với nhịp độ không vội vã tuyệt đẹp.' } },
      { title: { en: 'Return to your hotel or Hue city center', vi: 'Trả khách tại khách sạn hoặc trung tâm thành phố Huế' } }
    ],
    inclusions: [
      { en: 'Traditional cyclo with an experienced driver', vi: 'Xích lô truyền thống với bác tài kinh nghiệm' },
      { en: 'Hotel pickup and drop-off (Hue city center)', vi: 'Đón và trả tại khách sạn (trung tâm thành phố Huế)' },
      { en: 'Mineral water', vi: 'Nước suối' }
    ],
    exclusions: [
      { en: 'Imperial Citadel entrance fee (pass-by only, not entering)', vi: 'Vé vào cửa Đại Nội (chỉ đi qua, không vào bên trong)' },
      { en: 'Personal expenses', vi: 'Chi phí cá nhân' }
    ],
    whyBookWithUs: [
      { en: 'Experienced cyclo drivers with years of local knowledge', vi: 'Bác tài xích lô nhiều kinh nghiệm với kiến thức địa phương phong phú' },
      { en: 'Flexible itinerary that can be adjusted to your preferences', vi: 'Lịch trình linh hoạt có thể điều chỉnh theo sở thích của bạn' },
      { en: 'A genuinely authentic, slow-travel cultural experience', vi: 'Trải nghiệm văn hóa du lịch chậm chân thực, đúng nghĩa' },
      { en: 'Perfect for couples, families, and solo travelers of all ages', vi: 'Hoàn hảo cho các cặp đôi, gia đình và du khách đơn độc ở mọi lứa tuổi' }
    ],
    faq: [
      { question: { en: 'Is the cyclo tour suitable for elderly travelers?', vi: 'Tour xích lô có phù hợp với người cao tuổi không?' }, answer: { en: 'Absolutely. The cyclo is comfortable, gentle, and requires no physical exertion from the passenger. You simply sit back and enjoy the ride.', vi: 'Hoàn toàn phù hợp. Xích lô thoải mái, nhẹ nhàng và không đòi hỏi hành khách phải gắng sức. Bạn chỉ cần ngồi thoải mái và tận hưởng chuyến đi.' } },
      { question: { en: 'How many people can ride in one cyclo?', vi: 'Mỗi xe xích lô chở được bao nhiêu người?' }, answer: { en: 'Each cyclo comfortably seats one adult, or one adult with a small child. For couples, we use two cyclos side by side so you can enjoy the experience together.', vi: 'Mỗi xe xích lô thoải mái cho một người lớn, hoặc một người lớn kèm một trẻ nhỏ. Với các cặp đôi, chúng mình dùng hai xe đi cạnh nhau để bạn có thể cùng nhau tận hưởng trải nghiệm.' } },
      { question: { en: 'Can we customize the route?', vi: 'Chúng tôi có thể tùy chỉnh lộ trình không?' }, answer: { en: 'Yes! The itinerary is just a suggestion. Let us know if there are specific places you\'d like to visit and we\'ll do our best to include them.', vi: 'Có! Lịch trình chỉ là gợi ý. Hãy cho chúng mình biết nếu có những nơi cụ thể bạn muốn đến và chúng mình sẽ cố gắng đưa vào lộ trình.' } }
    ]
  },
  {
    id: 'hue-abandoned-water-park-tour',
    slug: 'hue-abandoned-water-park-tour',
    title: {
      en: 'Ho Thuy Tien Former Water Park Tour by Motorbike',
      vi: 'Tour Xe Máy Đến Khu Công Viên Nước Cũ Hồ Thủy Tiên'
    },
    shortDescription: {
      en: 'Take a motorbike trip from Hue to the former Ho Thuy Tien water park near Thien An Hill. Confirm current site access and visit permissions before booking; entry to restricted structures is not included.',
      vi: 'Đi xe máy từ Huế đến khu công viên nước Hồ Thủy Tiên cũ gần đồi Thiên An. Hãy xác nhận tình trạng tiếp cận và quyền tham quan trước khi đặt; tour không bao gồm việc vào các công trình bị hạn chế.'
    },
    duration: 'Half day',
    transport: {
      en: 'Motorbike',
      vi: 'Xe máy'
    },
    price: 'From $25 USD',
    image: '/photo/hothuytien-abondandedwaterpark.jpg',
    ogImage: '/photo/hothuytien-abondandedwaterpark.jpg',
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20Hue%20Abandoned%20Water%20Park%20Tour',
    highlights: [
      { en: 'See the former water park and dragon structure from areas open to visitors', vi: 'Ngắm khu công viên nước cũ và công trình hình rồng từ khu vực được phép tham quan' },
      { en: 'Check current access rules before planning a visit', vi: 'Kiểm tra quy định tiếp cận hiện hành trước khi lên kế hoạch tham quan' },
      { en: 'Ride a motorbike through cool, scenic pine forests', vi: 'Chạy xe máy qua những đồi thông mát mẻ, tuyệt đẹp' },
      { en: 'Combine with an optional visit to Vong Canh Hill or Thien Mu Pagoda', vi: 'Kết hợp tham quan Đồi Vọng Cảnh hoặc Chùa Thiên Mụ (tuỳ chọn)' }
    ],
    itinerary: [
      { title: { en: 'Pickup in Hue', vi: 'Đón tại Huế' }, description: { en: 'Our local rider will pick you up from your hotel.', vi: 'Tài xế địa phương của chúng mình sẽ đón bạn tại khách sạn.' } },
      { title: { en: 'Thien An Pine Forest', vi: 'Rừng Thông Thiên An' }, description: { en: 'Enjoy a refreshing ride up the winding roads of Thien An Hill, surrounded by thick pine forests.', vi: 'Tận hưởng chuyến đi mát mẻ lên những con đường ngoằn ngoèo của đồi Thiên An, bao quanh bởi rừng thông dày.' } },
      { title: { en: 'Ho Thuy Tien former water park site', vi: 'Khu công viên nước Hồ Thủy Tiên cũ' }, description: { en: 'Visit only areas currently open to the public. Do not enter closed structures or restricted areas.', vi: 'Chỉ tham quan khu vực đang mở cửa cho công chúng. Không vào công trình đóng cửa hoặc khu vực bị hạn chế.' } },
      { title: { en: 'Vong Canh Hill (Optional)', vi: 'Đồi Vọng Cảnh (Tuỳ chọn)' }, description: { en: 'Stop for a panoramic view of the Perfume River.', vi: 'Dừng chân ngắm toàn cảnh Sông Hương.' } },
      { title: { en: 'Return to Hue', vi: 'Trở về Huế' } }
    ],
    inclusions: [
      { en: 'Experienced local rider/guide', vi: 'Tài xế/hướng dẫn viên địa phương kinh nghiệm' },
      { en: 'Quality helmet and rain poncho (if needed)', vi: 'Mũ bảo hiểm chất lượng và áo mưa (nếu cần)' },
      { en: 'Hotel pickup and drop-off', vi: 'Đón và trả tại khách sạn' }
    ],
    exclusions: [
      { en: 'Any entrance or parking fees confirmed by the site operator', vi: 'Phí tham quan hoặc gửi xe do đơn vị quản lý điểm đến xác nhận' },
      { en: 'Personal expenses', vi: 'Chi phí cá nhân' }
    ],
    whyBookWithUs: [
      { en: 'We confirm the planned stops and site access before the trip', vi: 'Chúng tôi xác nhận điểm dừng và tình trạng tiếp cận trước chuyến đi' },
      { en: 'Ask about route conditions and available safety equipment before booking', vi: 'Hãy hỏi về điều kiện cung đường và trang bị an toàn trước khi đặt' }
    ],
    faq: [
      { question: { en: 'Can visitors enter the former water park?', vi: 'Khách có thể vào khu công viên nước cũ không?' }, answer: { en: 'Access and permission can change. Confirm the current status with the site operator or local authorities before traveling, follow posted signs, and do not enter closed structures or restricted areas.', vi: 'Tình trạng tiếp cận và quyền tham quan có thể thay đổi. Hãy xác nhận với đơn vị quản lý hoặc cơ quan địa phương trước khi đi, tuân thủ biển báo và không vào công trình đóng cửa hay khu vực hạn chế.' } }
    ]
  },
  {
    id: 'hue-imperial-city-day-tour-from-da-nang-hoi-an',
    slug: 'hue-imperial-city-day-tour-from-da-nang-hoi-an',
    relatedTourSlugs: ['hue-to-hoi-an-via-hai-van-pass', 'hue-imperial-city-tour'],
    title: {
      en: 'Hue Imperial City Day Tour from Da Nang & Hoi An',
      vi: 'Tour Đại Nội Huế 1 Ngày từ Đà Nẵng & Hội An'
    },
    shortDescription: {
      en: 'Travel from Da Nang or Hoi An to Hue on a full-day journey over Hai Van Pass. Explore the Imperial Citadel, enjoy a local Hue lunch, and visit royal heritage sites with an experienced local guide. Choose between a private air-conditioned car for maximum comfort or an exhilarating Easy Rider motorbike.',
      vi: 'Khởi hành từ Đà Nẵng hoặc Hội An đến Huế qua đèo Hải Vân trong chuyến đi trọn ngày. Khám phá Đại Nội, thưởng thức bữa trưa địa phương và ghé thăm các di tích triều Nguyễn. Lựa chọn linh hoạt giữa ô tô riêng có điều hòa mát mẻ hoặc xe máy cùng Easy Rider.'
    },
    duration: '10–11 hours',
    transport: {
      en: 'Private Car or Easy Rider Motorbike',
      vi: 'Ô tô riêng hoặc xe máy cùng Easy Rider'
    },
    price: 'Request a quote',
    priceCaption: {
      en: 'Tour price',
      vi: 'Giá tour'
    },
    priceLabel: {
      en: 'Request a quote',
      vi: 'Liên hệ nhận báo giá'
    },
    priceIsQuote: true,
    bookingCta: {
      en: 'Check availability',
      vi: 'Kiểm tra lịch trống'
    },
    departure: {
      en: 'Da Nang or Hoi An',
      vi: 'Đà Nẵng hoặc Hội An'
    },
    relatedGuide: {
      href: '/about-hue',
      title: {
        en: 'Plan more time in Hue',
        vi: 'Lên kế hoạch khám phá Huế'
      },
      description: {
        en: 'Read our Hue travel guide for ideas on heritage sites, local food, and when to visit.',
        vi: 'Xem cẩm nang du lịch Huế để tìm hiểu về di sản, ẩm thực địa phương và thời điểm phù hợp để ghé thăm.'
      }
    },
    seo: {
      en: {
        title: 'Hue Day Tour from Da Nang & Hoi An | Private Car & Easy Rider',
        description: 'Visit Hue Imperial City on a full-day tour from Da Nang or Hoi An. Cross Hai Van Pass, see Lap An Lagoon and royal landmarks by private car or Easy Rider.',
        keywords: [
          'Hue day tour from Da Nang',
          'Hue day trip from Hoi An',
          'Hue Imperial City tour from Da Nang',
          'Da Nang to Hue private car tour',
          'Hoi An to Hue Easy Rider tour',
          'Da Nang to Hue motorbike tour'
        ]
      },
      vi: {
        title: 'Tour Huế 1 Ngày từ Đà Nẵng & Hội An | Ô Tô Riêng & Easy Rider',
        description: 'Tour Huế 1 ngày từ Đà Nẵng hoặc Hội An, đón tận khách sạn, qua đèo Hải Vân và đầm Lập An, tham quan Đại Nội bằng ô tô riêng hoặc Easy Rider. Hỏi lịch trình.',
        keywords: [
          'tour Huế từ Đà Nẵng 1 ngày',
          'tour Hội An đi Huế',
          'tour Đại Nội Huế từ Đà Nẵng',
          'xe riêng Đà Nẵng đi Huế',
          'thuê xe ô tô Đà Nẵng đi Huế 1 ngày',
          'tour xe máy Hội An Huế',
          'easy rider Đà Nẵng Huế'
        ]
      }
    },
    image: '/photo/hue-imperial-city-tour.webp',
    ogImage: '/photo/hue-imperial-city-tour-og.jpg',
    ogImageDimensions: { width: 1200, height: 630 },
    imageAlt: {
      en: 'A visitor at Kien Trung Palace inside Hue Imperial City',
      vi: 'Du khách tại cung Kiến Trung trong Đại Nội Huế'
    },
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20check%20availability%20for%20the%20Hue%20Imperial%20City%20Day%20Tour%20from%20Da%20Nang%20or%20Hoi%20An.',
    highlights: [
      { en: 'Door-to-door hotel pickup in Da Nang or Hoi An, with drop-off back at your hotel', vi: 'Đón tận khách sạn tại Đà Nẵng hoặc Hội An và đưa bạn về lại khách sạn' },
      { en: 'Enjoy coastal viewpoints and photo stops along Hai Van Pass', vi: 'Ngắm cảnh biển và dừng chụp ảnh trên cung đường đèo Hải Vân' },
      { en: 'Pause at Lap An Lagoon and take in views of Lang Co Bay', vi: 'Dừng chân tại đầm Lập An và ngắm cảnh vịnh Lăng Cô' },
      { en: 'Explore Hue Imperial Citadel and royal palaces with a local guide', vi: 'Khám phá Đại Nội và Kinh Thành Huế cùng hướng dẫn viên địa phương' },
      { en: 'Choose a private air-conditioned car for weather-proof comfort or ride as a passenger with an Easy Rider', vi: 'Lựa chọn ô tô riêng có điều hòa mát mẻ, tránh nắng mưa hoặc ngồi sau xe máy cùng Easy Rider' },
      { en: 'Add royal tombs, Thien Mu Pagoda, or a local food stop to suit your day', vi: 'Có thể thêm lăng tẩm, chùa Thiên Mụ hoặc điểm dừng ẩm thực địa phương theo lịch trình' }
    ],
    itinerary: [
      {
        title: { en: 'Hotel pickup in Hoi An or Da Nang', vi: 'Đón tại khách sạn ở Hội An hoặc Đà Nẵng' },
        description: { en: 'Meet your driver and guide at your hotel. Hoi An pickups usually begin around 7:30 am and Da Nang pickups around 8:00 am; the exact time is confirmed when you book.', vi: 'Gặp tài xế và hướng dẫn viên tại khách sạn. Giờ đón thường khoảng 7:30 tại Hội An và 8:00 tại Đà Nẵng; thời gian cụ thể sẽ được xác nhận khi đặt tour.' }
      },
      {
        title: { en: 'Hai Van Pass viewpoints & Lang Co panorama', vi: 'Các điểm ngắm cảnh trên đèo Hải Vân' },
        description: { en: 'Follow the winding coastal mountain road and pause at scenic viewpoints when weather permits. Take in breathtaking panoramas of the East Sea, Da Nang coastline, and Lang Co Bay.', vi: 'Đi theo cung đường núi ven biển uốn lượn và dừng tại các điểm ngắm cảnh tuyệt đẹp. Hướng dẫn viên sẽ cùng bạn ngắm nhìn biển Đông, bờ biển Đà Nẵng và toàn cảnh vịnh Lăng Cô.' },
        image: '/photo/hue-imperial-city/hai-van-pass.jpg',
        imageAlt: { en: 'Panoramic view from Hai Van Pass looking towards Lang Co Bay', vi: 'Toàn cảnh đèo Hải Vân hướng về vịnh Lăng Cô' }
      },
      {
        title: { en: 'Lap An Lagoon & oyster farming village', vi: 'Đầm Lập An và làng nuôi hàu' },
        description: { en: 'Take a refreshing break beside the calm brackish water of Lap An Lagoon, framed by the majestic Bach Ma mountain range. Watch local fishermen tend their oyster farms.', vi: 'Nghỉ chân bên mặt nước êm ả của đầm Lập An tựa lưng vào dãy núi Bạch Mã hùng vĩ. Khám phá nghề nuôi hàu truyền thống của ngư dân địa phương.' },
        image: '/photo/about-hue-tam-giang-lagoon.jpg',
        imageAlt: { en: 'Serene Lap An Lagoon and fishing huts near Hue', vi: 'Khung cảnh thanh bình tại đầm Lập An gần Huế' }
      },
      {
        title: { en: 'Hue Imperial Citadel (Đại Nội) & Royal Palaces', vi: 'Quần thể Đại Nội & Kinh Thành Huế' },
        description: { en: 'Explore the gates, courtyards, and ancient palaces of the Nguyen Dynasty’s former imperial capital. Walk through Ngo Mon Gate and see Thai Hoa Palace and Kien Trung Palace with your knowledgeable guide.', vi: 'Khám phá cổng thành uy nghiêm, sân chầu và các cung điện cổ kính của hoàng triều nhà Nguyễn. Đi qua Cổng Ngọ Môn, Điện Thái Hòa và Điện Kiến Trung cùng hướng dẫn viên bản địa.' },
        image: '/photo/hue-imperial-city/dai-noi.jpg',
        imageAlt: { en: 'Ngo Mon Meridian Gate inside Hue Imperial Citadel', vi: 'Cổng Ngọ Môn Đại Nội Huế' }
      },
      {
        title: { en: 'Authentic Hue local lunch', vi: 'Bữa trưa đặc sản Huế' },
        description: { en: 'Savor regional specialties at a hand-picked Hue restaurant, featuring savory steamed rice cakes, local noodles, and lemongrass pork skewers.', vi: 'Thưởng thức bữa trưa đậm đà hương vị Huế tại quán ăn địa phương tuyển chọn với các loại bánh bèo, nậm, lọc và đặc sản bún bò thơm ngon.' },
        image: '/photo/banh-nam-hue-food.jpg',
        imageAlt: { en: 'Hue royal culinary specialty cakes', vi: 'Bánh nậm đặc sản xứ Huế' }
      },
      {
        title: { en: 'Khai Dinh Royal Tomb or Thien Mu Pagoda', vi: 'Lăng Khải Định hoặc Chùa Thiên Mụ' },
        description: { en: 'Visit the architectural marvel of Khai Dinh Tomb with its intricate porcelain mosaics, or experience peaceful Thien Mu Pagoda overlooking the Perfume River before the return trip.', vi: 'Chiêm ngưỡng kiệt tác khảm sành sứ tại Lăng Khải Định hoặc cảm nhận sự thanh tịnh của Chùa Thiên Mụ bên bờ sông Hương trước khi lên xe trở về.' },
        image: '/photo/visithue-tomb.jpg',
        imageAlt: { en: 'Khai Dinh Tomb royal architectural details', vi: 'Kiến trúc lăng Khải Định Huế' }
      },
      {
        title: { en: 'Return drive to Da Nang or Hoi An (or Hue drop-off)', vi: 'Trở về Đà Nẵng hoặc Hội An (hoặc trả tại Huế)' },
        description: { en: 'Relax on the return scenic journey and finish with convenient hotel drop-off. You can also request a one-way trip ending in Hue if you plan to stay overnight.', vi: 'Nghỉ ngơi thư giãn trên cung đường về và kết thúc chuyến đi tận khách sạn ở Đà Nẵng hoặc Hội An. Bạn cũng có thể yêu cầu trả khách tại Huế nếu muốn lưu trú lại.' }
      }
    ],
    gallery: [
      {
        url: '/photo/hue-imperial-city/hai-van-pass.jpg',
        alt: { en: 'Coastal curves along Hai Van Pass', vi: 'Cung đường đèo Hải Vân uốn lượn ven biển' },
        caption: { en: 'Scenic mountain road connecting Da Nang, Hai Van Pass, and Hue', vi: 'Cung đường đèo Hải Vân hùng vĩ nối liền Đà Nẵng và Huế' }
      },
      {
        url: '/photo/hue-imperial-city/hao-van-pass-group-pic.jpg',
        alt: { en: 'Traveler group enjoying Hai Van Pass lookout', vi: 'Nhóm du khách chụp ảnh kỷ niệm tại đỉnh đèo Hải Vân' },
        caption: { en: 'Unforgettable moments with friendly riders and fellow travelers', vi: 'Khoảnh khắc đáng nhớ cùng bạn bè và tài xế trên đèo Hải Vân' }
      },
      {
        url: '/photo/hue-imperial-city/dai-noi.jpg',
        alt: { en: 'Hue Imperial Citadel Meridian Gate', vi: 'Cổng Ngọ Môn Đại Nội Huế' },
        caption: { en: 'The grand Meridian Gate at the Hue Imperial Citadel', vi: 'Cổng Ngọ Môn uy nghiêm tại Đại Nội Huế' }
      },
      {
        url: '/photo/hue-imperial-city/dai-noi-customer.jpg',
        alt: { en: 'Guests discovering the Imperial Citadel courtyards', vi: 'Du khách tham quan sân điện trong Đại Nội' },
        caption: { en: 'Guided walk through centuries of royal Vietnamese history', vi: 'Khám phá chiều sâu lịch sử triều Nguyễn cùng hướng dẫn viên' }
      },
      {
        url: '/photo/hue-imperial-city/thien-mu-pagoda.jpg',
        alt: { en: 'Thien Mu Pagoda on the Perfume River', vi: 'Chùa Thiên Mụ bên bờ sông Hương' },
        caption: { en: 'Historic 7-tier Phuoc Duyen Tower beside the Perfume River', vi: 'Tháp Phước Duyên 7 tầng thanh bình bên dòng sông Hương' }
      },
      {
        url: '/photo/hue-imperial-city/customer-pic.jpg',
        alt: { en: 'Happy customer moments with our local guides', vi: 'Nụ cười rạng rỡ của du khách cùng hướng dẫn viên' },
        caption: { en: 'Attentive, friendly service from start to finish', vi: 'Sự đồng hành chu đáo, tận tâm từ đầu đến cuối chuyến đi' }
      }
    ],
    transportOptions: [
      {
        name: { en: 'Private Air-Conditioned Car', vi: 'Ô tô riêng có điều hòa' },
        description: {
          en: 'A modern, private air-conditioned car (4, 7, or 16 seats) with plenty of luggage space and a professional driver. Perfect for families, children, groups, or travelers seeking a relaxed, scenic road trip across Hai Van Pass protected from tropical heat and rain.',
          vi: 'Ô tô riêng 4–7–16 chỗ đời mới với điều hòa mát mẻ, khoang hành lý rộng rãi và tài xế chu đáo. Lựa chọn số 1 cho gia đình, nhóm bạn hoặc du khách muốn hành trình qua đèo Hải Vân êm ái, tránh nắng gió gắt và thời tiết thất thường.'
        },
        badge: {
          en: '✨ Top Comfort & Weather Protection',
          vi: '✨ Êm ái tối đa & tránh nắng mưa'
        },
        highlight: true,
        features: [
          { en: 'Air-conditioned comfort across Hai Van Pass', vi: 'Máy lạnh mát mẻ vượt đèo Hải Vân êm ái' },
          { en: 'Spacious trunk for suitcases & backpack luggage', vi: 'Khoang hành lý rộng rãi cho vali & balo lớn' },
          { en: 'Ideal for families, children, and elderly travelers', vi: 'Rất phù hợp cho gia đình có người già & trẻ em' },
          { en: 'Flexible scenic stops at lagoon and pass viewpoints', vi: 'Dừng chân ngắm đầm Lập An & đỉnh đèo tùy thích' }
        ]
      },
      {
        name: { en: 'Easy Rider Motorbike Adventure', vi: 'Xe máy cùng Easy Rider' },
        description: {
          en: 'Travel as a passenger with a local Easy Rider and cross the winding curves of Hai Van Pass. Enjoy the coastal views and flexible photo stops.',
          vi: 'Ngồi sau tài xế Easy Rider địa phương qua những khúc cua đèo Hải Vân, ngắm cảnh biển và dừng chụp ảnh theo lịch trình.'
        },
        badge: {
          en: '🏍️ Hai Van Pass Coastal Thrill',
          vi: '🏍️ Chinh phục đèo Hải Vân mở'
        },
        features: [
          { en: 'Local Easy Rider driver', vi: 'Tài xế Easy Rider địa phương' },
          { en: 'Top-tier helmets and emergency raincoats', vi: 'Trang bị mũ bảo hiểm chuẩn an toàn & áo mưa tiện lợi' },
          { en: 'Open-air panoramic viewpoints & photo flexibility', vi: 'Tầm nhìn 360 độ ngắm cảnh biển & dừng chụp ảnh tự do' }
        ]
      }
    ],
    inclusions: [
      { en: 'Hotel pickup and drop-off in Da Nang or Hoi An', vi: 'Đón và trả khách tại khách sạn ở Đà Nẵng hoặc Hội An' },
      { en: 'Private air-conditioned car with driver or motorbike with local Easy Rider, based on your selection', vi: 'Ô tô riêng có điều hòa mát mẻ hoặc xe máy cùng Easy Rider địa phương theo lựa chọn của bạn' },
      { en: 'Local English-speaking guide', vi: 'Hướng dẫn viên địa phương nói tiếng Anh' },
      { en: 'High-quality helmet and rain gear for motorbike option', vi: 'Mũ bảo hiểm đạt chuẩn an toàn và áo mưa tiện lợi cho khách đi xe máy' },
      { en: 'Bottled water during the journey', vi: 'Nước uống đóng chai trong hành trình' }
    ],
    exclusions: [
      { en: 'Entrance tickets to the Imperial Citadel and royal tombs unless stated in your confirmed quote', vi: 'Vé vào Đại Nội và các lăng tẩm, trừ khi có ghi rõ trong báo giá đã xác nhận' },
      { en: 'Meals, drinks, and personal expenses unless confirmed as included', vi: 'Bữa ăn, đồ uống và chi phí cá nhân, trừ khi được xác nhận là đã bao gồm' },
      { en: 'Travel insurance and optional gratuities', vi: 'Bảo hiểm du lịch và tiền tip tùy tâm' }
    ],
    optionalAddons: [
      { en: 'Khai Dinh Tomb or another royal tomb', vi: 'Lăng Khải Định hoặc lăng tẩm khác' },
      { en: 'Thien Mu Pagoda and a Perfume River viewpoint', vi: 'Chùa Thiên Mụ và điểm ngắm sông Hương' },
      { en: 'A local Hue lunch or specialty coffee stop', vi: 'Bữa trưa Huế hoặc điểm dừng thưởng thức cà phê đặc sản' },
      { en: 'Luggage storage and drop-off in Hue instead of returning to Da Nang or Hoi An', vi: 'Gửi hành lý và trả khách tại Huế thay vì quay về Đà Nẵng hoặc Hội An' }
    ],
    whyBookWithUs: [
      { en: 'Plan your route with founder and lead guide Mai Anh Tu', vi: 'Cùng lên lịch trình với Mai Anh Tú, người sáng lập và hướng dẫn viên trưởng' },
      { en: 'Plan one day around Hue’s heritage, scenic coastal stops, and your preferred travel style', vi: 'Sắp xếp một ngày kết hợp di sản Huế, điểm dừng ven biển và phương tiện phù hợp với bạn' },
      { en: 'Start and finish at your hotel in Da Nang or Hoi An', vi: 'Khởi hành và kết thúc ngay tại khách sạn ở Đà Nẵng hoặc Hội An' },
      { en: 'Choose a private car for comfort and luggage, or an Easy Rider for an open-air coastal ride', vi: 'Chọn ô tô riêng để thoải mái, che nắng mưa và mang hành lý, hoặc Easy Rider để trải nghiệm cung đường thoáng' },
      { en: 'Discuss timing, entrance tickets, meal preferences, and optional stops before confirming', vi: 'Trao đổi trước về giờ giấc, vé tham quan, bữa ăn và điểm dừng tùy chọn trước khi xác nhận' }
    ],
    insiderTips: [
      {
        title: { en: 'Hai Van Pass Coastal Weather', vi: 'Thời tiết cung đường đèo Hải Vân' },
        content: {
          en: 'Morning mist often gathers on the pass. Bring a light windbreaker jacket for motorbike rides, and keep your camera easily accessible for roadside coastal viewpoints.',
          vi: 'Sương sớm thường giăng trên đỉnh đèo. Hãy mang theo áo khoác mỏng nếu đi xe máy và để máy ảnh ở vị trí thuận tiện để chụp cảnh biển.'
        }
      },
      {
        title: { en: 'Luggage & One-Way Trip to Hue', vi: 'Mang hành lý & chuyến đi một chiều đến Huế' },
        content: {
          en: 'You can use this day tour as a scenic transfer to Hue with your luggage safely strapped on motorbikes or in car trunks, ending the trip at your Hue hotel without returning to Da Nang or Hoi An.',
          vi: 'Bạn có thể kết hợp tour này làm chuyến di chuyển kết hợp ngắm cảnh đến Huế. Hành lý được chằng buộc an toàn trên xe máy hoặc trong cốp ô tô và trả tận khách sạn tại Huế.'
        }
      }
    ],
    faq: [
      { question: { en: 'Can I take this Hue day tour from either Da Nang or Hoi An?', vi: 'Tôi có thể khởi hành tour Huế từ Đà Nẵng hoặc Hội An không?' }, answer: { en: 'Yes. Pickup and drop-off are available at hotels in both cities. Share your hotel name and preferred pickup time when requesting availability.', vi: 'Có. Tour hỗ trợ đón và trả tại khách sạn ở cả hai thành phố. Hãy gửi tên khách sạn và giờ đón mong muốn khi hỏi lịch.' } },
      { question: { en: 'How long is the trip?', vi: 'Chuyến đi kéo dài bao lâu?' }, answer: { en: 'Plan for around 10–11 hours, depending on your pickup location, traffic, weather, and the stops you choose. The schedule is confirmed with your booking.', vi: 'Bạn nên dự trù khoảng 10–11 tiếng, tùy nơi đón, giao thông, thời tiết và các điểm dừng đã chọn. Lịch trình sẽ được xác nhận khi đặt tour.' } },
      { question: { en: 'Is the Easy Rider option suitable if I have never driven a motorbike?', vi: 'Tôi chưa từng lái xe máy thì có đi Easy Rider được không?' }, answer: { en: 'Yes. You travel as a passenger behind your local rider and do not drive the motorbike. Ask us about the route and safety equipment before booking if you have concerns.', vi: 'Có. Bạn ngồi sau tài xế địa phương và không phải tự lái xe. Nếu còn băn khoăn, hãy hỏi thêm về cung đường và trang bị an toàn trước khi đặt.' } },
      { question: { en: 'Are entrance tickets and lunch included?', vi: 'Vé tham quan và bữa trưa đã bao gồm chưa?' }, answer: { en: 'They are not included by default. Ask for an itemized quote so you know which tickets, meals, and drinks are covered for your selected itinerary.', vi: 'Thông thường các khoản này chưa bao gồm. Hãy yêu cầu báo giá chi tiết để biết vé, bữa ăn và đồ uống nào được tính theo lịch trình bạn chọn.' } },
      { question: { en: 'Can I finish the trip in Hue instead of returning?', vi: 'Tôi có thể kết thúc chuyến đi ở Huế thay vì quay về không?' }, answer: { en: 'A Hue drop-off may be arranged. Tell us in advance if you are bringing luggage so we can confirm storage and the end point before your trip.', vi: 'Có thể sắp xếp trả khách tại Huế. Hãy báo trước nếu bạn mang hành lý để xác nhận chỗ gửi và điểm kết thúc chuyến đi.' } },
      { question: { en: 'What happens in rainy weather?', vi: 'Nếu trời mưa thì sao?' }, answer: { en: 'Conditions can affect the Hai Van Pass route, especially on a motorbike. We provide rain gear for riders and will discuss a safer alternative or itinerary adjustment if needed.', vi: 'Thời tiết có thể ảnh hưởng đến cung đường đèo Hải Vân, đặc biệt khi đi xe máy. Tour có áo mưa và sẽ trao đổi phương án an toàn hơn hoặc điều chỉnh lịch trình khi cần.' } }
    ]
  }
];

export const getTourBySlug = (slug: string) => {
  return tours.find((tour) => tour.slug === slug);
};
