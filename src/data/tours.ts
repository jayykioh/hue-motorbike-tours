export type ItineraryItem = {
  title: { en: string; vi: string };
  description?: { en: string; vi: string };
};

export type FAQItem = {
  question: { en: string; vi: string };
  answer: { en: string; vi: string };
};

export type Tour = {
  id: string;
  slug: string;
  title: {
    en: string;
    vi: string;
  };
  shortDescription: {
    en: string;
    vi: string;
  };
  duration: string;
  transport: {
    en: string;
    vi: string;
  };
  price: string;
  image: string;
  highlights: { en: string; vi: string }[];
  itinerary: ItineraryItem[];
  faq?: FAQItem[];
};

export const tours: Tour[] = [
  {
    id: 'hue-to-hoi-an-via-hai-van-pass',
    slug: 'hue-to-hoi-an-via-hai-van-pass',
    title: {
      en: 'Hue to Hoi An via Hai Van Pass',
      vi: 'Huế đi Hội An qua đèo Hải Vân'
    },
    shortDescription: {
      en: 'Why take a boring bus when you can ride over the legendary Hai Van Pass? This isn’t just a transfer; it’s a full-day adventure where we guide you through the hidden beauty of Lap An Lagoon, Lang Co Beach, and the winding coastal roads.',
      vi: 'Tại sao phải ngồi xe khách nhàm chán khi bạn có thể chinh phục đèo Hải Vân huyền thoại? Đây không chỉ là một chuyến đi, mà là cả một hành trình phiêu lưu trọn vẹn khám phá Đầm Lập An tĩnh lặng và Vịnh Lăng Cô tuyệt đẹp.'
    },
    duration: '6–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe ô tô riêng hoặc Xe máy'
    },
    price: 'From $— USD',
    image: '/photo/haivanpass.jpg',
    highlights: [
      { en: 'Escape the crowds and travel scenic backroads', vi: 'Tránh xa đám đông để tận hưởng những cung đường vắng vẻ' },
      { en: 'Conquer the legendary curves of Hai Van Pass', vi: 'Chinh phục những khúc cua ngoạn mục của Đèo Hải Vân' },
      { en: 'Relax by the tranquil waters of Lap An Lagoon', vi: 'Thư giãn bên dòng nước tĩnh lặng của Đầm Lập An' },
      { en: 'Breathe the ocean air at Lang Co Beach', vi: 'Hít thở bầu không khí biển trong lành tại Lăng Cô' },
      { en: 'Cool off in the natural pools of Nhị Hồ Waterfall', vi: 'Đắm mình trong làn nước mát tại thác Nhị Hồ' }
    ],
    itinerary: [
      { title: { en: 'We pick you up directly from your hotel in Hue', vi: 'Xe đón bạn tận nơi tại khách sạn ở Huế' } },
      { title: { en: 'Discover Lap An Lagoon', vi: 'Khám phá Đầm Lập An' }, description: { en: 'Take in the stunning views where the mountains meet the calm lagoon waters.', vi: 'Ngắm nhìn khung cảnh tuyệt mỹ nơi đồi núi giao hòa cùng mặt đầm tĩnh lặng.' } },
      { title: { en: 'Unwind at Lang Co Beach', vi: 'Dừng chân tại Vịnh Lăng Cô' }, description: { en: 'Stretch your legs, feel the ocean breeze, and snap some incredible photos.', vi: 'Tản bộ, hít thở gió biển và lưu lại những bức ảnh kỷ niệm tuyệt đẹp.' } },
      { title: { en: 'Swim at Nhị Hồ Waterfall', vi: 'Tắm suối tại Thác Nhị Hồ' }, description: { en: 'Jump into clear, refreshing natural pools surrounded by lush jungle.', vi: 'Thả mình vào làn nước suối mát lạnh giữa khung cảnh rừng cây xanh ngát.' } },
      { title: { en: 'Cross the Hai Van Pass', vi: 'Vượt Đèo Hải Vân' }, description: { en: 'Experience the thrill of Vietnam’s most famous coastal mountain road.', vi: 'Trải nghiệm cảm giác phấn khích trên cung đường đèo ven biển nổi tiếng nhất Việt Nam.' } },
      { title: { en: 'Arrive safely at your hotel in Hoi An or Da Nang', vi: 'Trở về an toàn tại khách sạn ở Hội An hoặc Đà Nẵng' } }
    ],
    faq: [
      { question: { en: 'How long does the journey take?', vi: 'Chuyến đi kéo dài trong bao lâu?' }, answer: { en: 'Expect a relaxed pace lasting 6 to 8 hours, giving us plenty of time to stop and enjoy the views.', vi: 'Chúng mình sẽ di chuyển thong thả trong khoảng 6 đến 8 tiếng, đủ thời gian để dừng lại và thưởng thức cảnh đẹp.' } },
      { question: { en: 'Is riding on a motorbike safe?', vi: 'Đi xe máy có an toàn không?' }, answer: { en: 'Absolutely. You ride behind highly experienced local guides, and we provide top-quality helmets and protective gear.', vi: 'Chắc chắn rồi. Bạn sẽ ngồi sau những tài xế địa phương dày dặn kinh nghiệm, được trang bị mũ bảo hiểm và đồ bảo hộ chất lượng cao nhất.' } },
      { question: { en: 'What happens to my luggage?', vi: 'Hành lý của tôi sẽ được xử lý ra sao?' }, answer: { en: 'We securely strap your bags to the motorbikes, or if you choose a car, there is plenty of trunk space.', vi: 'Hành lý sẽ được chằng buộc an toàn phía sau xe máy, hoặc nếu đi ô tô thì có khoang chứa đồ vô cùng rộng rãi.' } }
    ]
  },
  {
    id: 'hue-imperial-city-tour',
    slug: 'hue-imperial-city-tour',
    title: {
      en: 'Hue Imperial City Tour',
      vi: 'Tour Khám Phá Đại Nội Huế'
    },
    shortDescription: {
      en: 'Leave the guidebooks behind and step into the real history of Vietnam’s last royal dynasty. We’ll guide you through the intricate architecture of the Imperial Citadel, royal tombs, and share the deep stories behind the walls.',
      vi: 'Hãy cất sách hướng dẫn đi và bước vào trang sử có thật của triều đại phong kiến cuối cùng. Chúng mình sẽ kể cho bạn nghe những câu chuyện chưa từng được tiết lộ đằng sau những bức tường của Đại Nội và các lăng tẩm hoàng gia.'
    },
    duration: '7–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe ô tô riêng hoặc Xe máy'
    },
    price: 'From $— USD',
    image: '/photo/hue-kien-trung-palace.jpg',
    highlights: [
      { en: 'Wander the ancient halls of the Imperial Citadel', vi: 'Rảo bước qua những dãy hành lang cổ kính của Đại Nội' },
      { en: 'Marvel at the breathtaking details of Khai Dinh Tomb', vi: 'Chiêm ngưỡng sự tinh xảo trong kiến trúc Lăng Khải Định' },
      { en: 'Experience the serenity of Thien Mu Pagoda', vi: 'Cảm nhận sự tĩnh lặng bình yên tại Chùa Thiên Mụ' },
      { en: 'Savor an authentic, home-cooked style Hue lunch', vi: 'Thưởng thức bữa trưa đậm đà hương vị truyền thống Huế' },
      { en: 'Shape your own afternoon with flexible local stops', vi: 'Tự do tùy chỉnh lịch trình buổi chiều theo sở thích cá nhân' }
    ],
    itinerary: [
      { title: { en: 'We pick you up directly from your hotel', vi: 'Xe đón bạn tận nơi tại khách sạn' } },
      { title: { en: 'Step into the Imperial Citadel', vi: 'Bước vào Đại Nội Huế' }, description: { en: 'Walk the grounds of the Forbidden Purple City and hear stories of ancient kings.', vi: 'Khám phá Tử Cấm Thành và lắng nghe những giai thoại về các vị vua triều Nguyễn.' } },
      { title: { en: 'Visit Thien Mu Pagoda', vi: 'Vãn cảnh Chùa Thiên Mụ' }, description: { en: 'Enjoy the peaceful atmosphere overlooking the Perfume River.', vi: 'Tận hưởng không gian thanh tịnh với tầm nhìn hướng ra dòng sông Hương.' } },
      { title: { en: 'Share a delicious local lunch', vi: 'Thưởng thức bữa trưa đậm chất Huế' } },
      { title: { en: 'Marvel at Khai Dinh Tomb', vi: 'Chiêm ngưỡng Lăng Khải Định' }, description: { en: 'Witness the striking blend of Eastern tradition and Western architecture.', vi: 'Tận mắt thấy sự pha trộn độc đáo giữa kiến trúc phương Đông và phương Tây.' } },
      { title: { en: 'Customize your afternoon', vi: 'Lịch trình tự chọn buổi chiều' }, description: { en: 'Choose to visit the abandoned waterpark, Vong Canh Hill, or a traditional incense-making village.', vi: 'Lựa chọn khám phá công viên nước bỏ hoang, Đồi Vọng Cảnh, hoặc làng làm hương truyền thống.' } },
      { title: { en: 'Arrive safely back at your hotel', vi: 'Trở về khách sạn an toàn' } }
    ],
    faq: [
      { question: { en: 'Are we locked into a strict schedule?', vi: 'Lịch trình có bị gò bó không?' }, answer: { en: 'Not at all. We keep the afternoon flexible so you can choose the spots that interest you most.', vi: 'Hoàn toàn không. Buổi chiều rất linh hoạt, bạn có thể tự do chọn những điểm đến mà mình thích nhất.' } },
      { question: { en: 'Is this a good choice for families?', vi: 'Tour này có phù hợp cho gia đình không?' }, answer: { en: 'Yes, our experienced drivers ensure a smooth, comfortable ride for guests of all ages.', vi: 'Có, các bác tài của chúng mình luôn lái xe vô cùng cẩn thận, đảm bảo sự thoải mái cho mọi lứa tuổi.' } }
    ]
  },
  {
    id: 'hue-dmz-tour',
    slug: 'hue-dmz-tour',
    title: {
      en: 'Hue DMZ Historical Tour',
      vi: 'Tour Lịch Sử Khu Phi Quân Sự (DMZ)'
    },
    shortDescription: {
      en: 'Journey back in time to the Demilitarized Zone. With our knowledgeable local guides, you’ll safely explore the underground Vinh Moc Tunnels, the iconic 17th Parallel, and hear the powerful history of the Vietnam War.',
      vi: 'Quay ngược thời gian về Khu Phi Quân Sự. Dưới sự dẫn dắt của hướng dẫn viên bản địa, bạn sẽ an toàn khám phá địa đạo Vịnh Mốc, vĩ tuyến 17 lịch sử và lắng nghe những câu chuyện hào hùng về chiến tranh.'
    },
    duration: 'Full day',
    transport: {
      en: 'Private Car',
      vi: 'Xe ô tô riêng'
    },
    price: 'From $70 USD',
    image: '/photo/f06819e96f07b159e8167.jpg',
    highlights: [
      { en: 'Walk deep into the historic Vinh Moc Tunnels', vi: 'Đi bộ vào sâu trong hệ thống Địa Đạo Vịnh Mốc' },
      { en: 'Stand exactly on the 17th Parallel at Hien Luong Bridge', vi: 'Đứng ngay trên Vĩ Tuyến 17 tại cầu Hiền Lương' },
      { en: 'Pay your respects at the Quang Tri Ancient Citadel', vi: 'Thăm viếng và dâng hương tại Thành Cổ Quảng Trị' }
    ],
    itinerary: [
      { title: { en: 'Morning pickup from your hotel in Hue', vi: 'Đón tại khách sạn vào buổi sáng' } },
      { title: { en: 'Stand at Hien Luong Bridge', vi: 'Dừng chân tại Cầu Hiền Lương' }, description: { en: 'Look across the Ben Hai River that once divided the nation.', vi: 'Nhìn ngắm dòng sông Bến Hải từng là ranh giới chia cắt hai miền.' } },
      { title: { en: 'Explore Vinh Moc Tunnels', vi: 'Khám phá Địa Đạo Vịnh Mốc' }, description: { en: 'Safely walk through the remarkably preserved underground village.', vi: 'An toàn đi bộ qua ngôi làng dưới lòng đất được bảo tồn gần như nguyên vẹn.' } },
      { title: { en: 'Enjoy a hearty local lunch', vi: 'Dùng bữa trưa tại nhà hàng địa phương' } },
      { title: { en: 'Reflect at Quang Tri Ancient Citadel', vi: 'Lắng đọng tại Thành Cổ Quảng Trị' }, description: { en: 'Learn about the intense 81-day battle that took place here.', vi: 'Lắng nghe câu chuyện về 81 ngày đêm rực lửa bảo vệ thành cổ.' } },
      { title: { en: 'Comfortable drive back to Hue', vi: 'Ngồi xe êm ái trở về Huế' } }
    ]
  },
  {
    id: 'hue-food-tour-tam-giang-sunset',
    slug: 'hue-food-tour-tam-giang-sunset',
    title: {
      en: 'Hue Food Tour & Tam Giang Sunset',
      vi: 'Food Tour Xe Máy & Hoàng Hôn Phá Tam Giang'
    },
    shortDescription: {
      en: 'Food tastes better when locals show you where to eat. We’ll weave through small alleyways to find the best street food in Hue, then ride out to Tam Giang Lagoon just in time to watch a spectacular sunset over the water.',
      vi: 'Đồ ăn luôn ngon hơn khi có người địa phương dẫn đường. Chúng mình sẽ luồn lách qua các ngõ hẻm để tìm những quán ăn ngon nhất Huế, sau đó chạy xe ra Phá Tam Giang vừa kịp lúc ngắm hoàng hôn tuyệt đẹp rủ xuống mặt nước.'
    },
    duration: 'Half day / Evening',
    transport: {
      en: 'Motorbike',
      vi: 'Xe máy'
    },
    price: 'From $— USD',
    image: '/photo/huefoodtour.jpg',
    highlights: [
      { en: 'Ride safely through vibrant city streets with a local expert', vi: 'Ngồi sau tay lái an toàn của người địa phương dạo quanh phố phường' },
      { en: 'Savor authentic, off-the-beaten-path Hue dishes', vi: 'Thưởng thức những món ăn đặc sản Huế ẩn mình trong các con hẻm' },
      { en: 'Experience the energetic vibe of a traditional local market', vi: 'Hòa mình vào không khí nhộn nhịp của một khu chợ truyền thống' },
      { en: 'Watch an unforgettable sunset over the vast Tam Giang Lagoon', vi: 'Chiêm ngưỡng buổi chiều tà rực rỡ trên đầm phá Tam Giang bao la' }
    ],
    itinerary: [
      { title: { en: 'First bite: Legendary Bún Bò Huế', vi: 'Món đầu tiên: Bún Bò Huế trứ danh' } },
      { title: { en: 'Second bite: Steamed Royal Cakes & Nem Lụi', vi: 'Món thứ hai: Bánh bèo, nậm, lọc & Nem lụi' } },
      { title: { en: 'Market walk: Exploring ingredients and Bánh Khoái', vi: 'Dạo chợ địa phương: Khám phá nguyên liệu và Bánh khoái' } },
      { title: { en: 'The views: Golden hour at Tam Giang Lagoon', vi: 'Ngắm cảnh: Giờ vàng trên Phá Tam Giang' } },
      { title: { en: 'Sweet finish: Traditional Chè Huế', vi: 'Kết thúc ngọt ngào: Ly chè Huế thanh mát' } }
    ]
  },
  {
    id: 'hue-cyclo-tour',
    slug: 'hue-cyclo-tour-explore-the-ancient-city-at-a-gentle-pace',
    title: {
      en: 'Hue Cyclo Slow Travel Tour',
      vi: 'Tour Xích Lô Chậm Trải Cố Đô'
    },
    shortDescription: {
      en: 'There is no better way to feel the soul of Hue than from the seat of a traditional cyclo. Sit back and let our trusted riders pedal you through the ancient streets, sharing smiles and pointing out hidden details you’d miss in a car.',
      vi: 'Không có cách nào cảm nhận cái hồn của Huế trọn vẹn hơn là ngồi trên chiếc xích lô truyền thống. Hãy ngả lưng thư giãn để các bác tài xích lô hiền lành đưa bạn đi qua những góc phố rêu phong, nơi bạn có thể thấy những nét đẹp bị bỏ lỡ nếu đi bằng ô tô.'
    },
    duration: '2–3 hours',
    transport: {
      en: 'Cyclo',
      vi: 'Xích lô'
    },
    price: 'From $— USD',
    image: '/photo/hue-incense-sticks-village.jpg',
    highlights: [
      { en: 'Embrace the gentle, unhurried pace of a classic cyclo ride', vi: 'Tận hưởng nhịp điệu chậm rãi, bình yên của chiếc xích lô cổ điển' },
      { en: 'Glide through tree-lined avenues and bustling local markets', vi: 'Lướt đi dưới những tán cây xanh mát và khu chợ nhộn nhịp' },
      { en: 'Capture perfect photos from a comfortable, open-air seat', vi: 'Bắt trọn những khoảnh khắc đẹp nhất từ góc nhìn mở vô cùng thoải mái' }
    ],
    itinerary: [
      { title: { en: 'Our friendly cyclo drivers pick you up', vi: 'Bác tài xích lô thân thiện đón bạn tận nơi' } },
      { title: { en: 'Pedal smoothly around the towering Citadel walls', vi: 'Đạp xe chầm chậm dọc theo những bức tường thành cổ kính' } },
      { title: { en: 'Immerse in the daily buzz of the local markets', vi: 'Hòa mình vào nhịp sống thường ngày tại các khu chợ địa phương' } },
      { title: { en: 'Safe return to your starting point', vi: 'Đưa bạn trở về điểm xuất phát một cách an toàn' } }
    ]
  }
];

export const getTourBySlug = (slug: string) => {
  return tours.find((tour) => tour.slug === slug);
};
