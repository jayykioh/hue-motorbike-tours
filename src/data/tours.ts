export type ItineraryItem = {
  title: { en: string; vi: string };
  description?: { en: string; vi: string };
};

export type FAQItem = {
  question: { en: string; vi: string };
  answer: { en: string; vi: string };
};

export type TransportOption = {
  name: { en: string; vi: string };
  description: { en: string; vi: string };
};

export type Tour = {
  id: string;
  slug: string;
  title: { en: string; vi: string };
  shortDescription: { en: string; vi: string };
  duration: string;
  transport: { en: string; vi: string };
  price: string;
  image: string;
  highlights: { en: string; vi: string }[];
  itinerary: ItineraryItem[];
  faq?: FAQItem[];
  whatsappLink?: string;
  whyBookWithUs?: { en: string; vi: string }[];
  inclusions?: { en: string; vi: string }[];
  exclusions?: { en: string; vi: string }[];
  transportOptions?: TransportOption[];
  optionalAddons?: { en: string; vi: string }[];
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
      en: 'Why take a boring bus when you can ride over the legendary Hai Van Pass? This isn\'t just a transfer — it\'s a full-day coastal adventure through Lap An Lagoon, Lang Co Beach, and the winding mountain roads that made this route famous.',
      vi: 'Tại sao phải ngồi xe khách nhàm chán khi bạn có thể chinh phục đèo Hải Vân huyền thoại? Đây không chỉ là một chuyến đi — đây là cả một hành trình ven biển trọn vẹn qua Đầm Lập An và Vịnh Lăng Cô.'
    },
    duration: '6–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe ô tô riêng hoặc Xe máy'
    },
    price: 'From $70 USD',
    image: '/photo/haivanpass.jpg',
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20Hue%20to%20Hoi%20An%20via%20Hai%20Van%20Pass%20%E2%80%93%20Scenic%20Transfer',
    highlights: [
      { en: 'Escape the crowds and travel scenic coastal backroads', vi: 'Tránh xa đám đông để tận hưởng những cung đường ven biển vắng vẻ' },
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
        description: { en: 'Sit on the back of a motorbike with an experienced local driver. Feel the thrill of the open road, stop at every viewpoint, and enjoy the most authentic, immersive version of this journey.', vi: 'Ngồi sau xe máy cùng tài xế địa phương giàu kinh nghiệm. Cảm nhận sức hút của cung đường mở, dừng lại ở mọi điểm ngắm cảnh và tận hưởng phiên bản chân thực, đắm chìm nhất của hành trình này.' }
      }
    ],
    optionalAddons: [
      { en: 'Fresh seafood lunch at Lang Co Beach', vi: 'Bữa trưa hải sản tươi ngon tại Bãi biển Lăng Cô' },
      { en: 'Visit My Khe Beach in Da Nang before arriving in Hoi An', vi: 'Thăm bãi biển Mỹ Khê ở Đà Nẵng trước khi đến Hội An' }
    ],
    whyBookWithUs: [
      { en: 'Local drivers and guides who know the best viewpoints and hidden spots', vi: 'Tài xế và hướng dẫn viên địa phương biết rõ những điểm ngắm cảnh đẹp nhất và những góc khuất bí ẩn' },
      { en: 'Flexible itinerary — stop wherever you like, at your own pace', vi: 'Lịch trình linh hoạt — dừng chân bất cứ đâu bạn thích, theo nhịp độ của riêng bạn' },
      { en: 'Safe, reliable, and well-maintained vehicles', vi: 'Phương tiện di chuyển an toàn, đáng tin cậy và được bảo dưỡng kỹ lưỡng' },
      { en: 'Choice of private car or motorbike to suit your travel style', vi: 'Lựa chọn xe ô tô riêng hoặc xe máy phù hợp với phong cách du lịch của bạn' },
      { en: 'Door-to-door pickup and drop-off service in Hue, Hoi An, and Da Nang', vi: 'Dịch vụ đón và trả khách tận nơi tại Huế, Hội An và Đà Nẵng' }
    ],
    faq: [
      { question: { en: 'How long is the trip from Hue to Hoi An via Hai Van Pass?', vi: 'Chuyến đi từ Huế đến Hội An qua Đèo Hải Vân kéo dài bao lâu?' }, answer: { en: 'Around 6–8 hours with sightseeing stops. We travel at a relaxed pace so you have plenty of time to enjoy each location.', vi: 'Khoảng 6–8 tiếng bao gồm các điểm dừng ngắm cảnh. Chúng mình di chuyển với nhịp độ thư thái để bạn có đủ thời gian tận hưởng từng địa điểm.' } },
      { question: { en: 'Is it safe to travel by motorbike?', vi: 'Đi xe máy có an toàn không?' }, answer: { en: 'Absolutely. You ride behind a highly experienced local driver. We provide top-quality helmets and protective gear for every passenger.', vi: 'Chắc chắn rồi. Bạn sẽ ngồi sau tài xế địa phương dày dặn kinh nghiệm. Chúng mình trang bị mũ bảo hiểm và đồ bảo hộ chất lượng cao nhất cho mọi hành khách.' } },
      { question: { en: 'Can I bring my luggage?', vi: 'Tôi có thể mang theo hành lý không?' }, answer: { en: 'Absolutely. Cars have plenty of trunk space, and motorbikes are equipped with secure luggage transport. We handle your bags so you can focus on the views.', vi: 'Hoàn toàn có thể. Xe ô tô có khoang chứa hành lý rộng rãi, còn xe máy được trang bị hệ thống buộc hành lý chắc chắn. Chúng mình lo hành lý để bạn tập trung tận hưởng cảnh đẹp.' } },
      { question: { en: 'Do you provide hotel pickup and drop-off?', vi: 'Có dịch vụ đón và trả khách tận khách sạn không?' }, answer: { en: 'Yes, we offer door-to-door service in Hue, Hoi An, and Da Nang. Just share your hotel name when you book.', vi: 'Có, chúng mình cung cấp dịch vụ đón và trả tận nơi tại Huế, Hội An và Đà Nẵng. Bạn chỉ cần chia sẻ tên khách sạn khi đặt tour.' } }
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
      en: 'Leave the guidebooks behind and step into the real history of Vietnam\'s last royal dynasty. We guide you through the Imperial Citadel, royal tombs, and Thien Mu Pagoda — sharing the deep stories behind the walls that most tourists never hear.',
      vi: 'Hãy cất sách hướng dẫn đi và bước vào trang sử có thật của triều đại phong kiến cuối cùng. Chúng mình sẽ kể cho bạn nghe những câu chuyện chưa từng được tiết lộ đằng sau những bức tường của Đại Nội và các lăng tẩm hoàng gia.'
    },
    duration: '7–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe ô tô riêng hoặc Xe máy'
    },
    price: 'From $65 USD',
    image: '/photo/hue-kien-trung-palace.jpg',
    whatsappLink: 'https://wa.me/84862391918?text=Hello!%20I%27d%20like%20to%20book:%20Hue%20Imperial%20City%20Tour%20%E2%80%93%20Discover%20Vietnam%E2%80%99s%20Royal%20Heritage',
    highlights: [
      { en: 'Explore the UNESCO-listed Imperial Citadel and Forbidden Purple City', vi: 'Khám phá Đại Nội và Tử Cấm Thành được UNESCO công nhận là Di sản Thế giới' },
      { en: 'Marvel at Khai Dinh Tomb — a breathtaking blend of Eastern and Western architecture', vi: 'Chiêm ngưỡng Lăng Khải Định — sự kết hợp độc đáo của kiến trúc Đông và Tây' },
      { en: 'Experience the serene beauty of Thien Mu Pagoda on the Perfume River', vi: 'Cảm nhận vẻ đẹp thanh tịnh của Chùa Thiên Mụ bên bờ sông Hương' },
      { en: 'Savor an authentic Hue lunch at a local restaurant', vi: 'Thưởng thức bữa trưa đậm đà hương vị Huế tại nhà hàng địa phương' },
      { en: 'Customize your afternoon — abandoned waterpark, scenic hills, or cultural villages', vi: 'Tự do thiết kế lịch trình buổi chiều — công viên nước bỏ hoang, đồi ngắm cảnh, làng nghề truyền thống' }
    ],
    itinerary: [
      { title: { en: 'Hotel pickup in Hue', vi: 'Xe đón bạn tận nơi tại khách sạn' } },
      { title: { en: 'Imperial Citadel & Forbidden Purple City', vi: 'Đại Nội & Tử Cấm Thành' }, description: { en: 'Walk through palaces, temples, and royal courtyards. Hear the stories of the Nguyen Dynasty from our knowledgeable guide.', vi: 'Rảo bước qua các cung điện, đền đài và sân chầu. Lắng nghe câu chuyện về triều Nguyễn từ hướng dẫn viên am hiểu của chúng mình.' } },
      { title: { en: 'Thien Mu Pagoda', vi: 'Chùa Thiên Mụ' }, description: { en: 'Hue\'s oldest pagoda, standing peacefully on the banks of the Perfume River since 1601.', vi: 'Ngôi chùa lâu đời nhất Huế, đứng yên bình bên bờ sông Hương từ năm 1601.' } },
      { title: { en: 'Lunch at a local restaurant', vi: 'Ăn trưa tại nhà hàng địa phương' }, description: { en: 'Enjoy authentic Hue cuisine — specialties like bún bò Huế, bánh khoái, and more.', vi: 'Thưởng thức ẩm thực Huế chính gốc — các đặc sản như bún bò Huế, bánh khoái và nhiều món khác.' } },
      { title: { en: 'Khai Dinh Tomb', vi: 'Lăng Khải Định' }, description: { en: 'Marvel at the unique architecture blending Eastern and Western influences — a bold statement of power and artistry.', vi: 'Chiêm ngưỡng kiến trúc độc đáo kết hợp phong cách Đông và Tây — một tuyên ngôn táo bạo về quyền lực và nghệ thuật.' } },
      { title: { en: 'Flexible afternoon stops (your choice)', vi: 'Các điểm dừng buổi chiều tự chọn' }, description: { en: 'Choose from: the abandoned waterpark, Vong Canh Hill, traditional incense village, Thanh Toan Bridge, or other royal tombs.', vi: 'Lựa chọn từ: công viên nước bỏ hoang, Đồi Vọng Cảnh, làng làm hương truyền thống, Cầu Thanh Toàn, hoặc các lăng tẩm khác.' } },
      { title: { en: 'Return to your hotel', vi: 'Trở về khách sạn' } }
    ],
    transportOptions: [
      {
        name: { en: 'Private Car', vi: 'Xe ô tô riêng' },
        description: { en: 'Comfortable, air-conditioned car with an English-speaking driver. Ideal for families and travelers seeking a relaxed pace.', vi: 'Xe ô tô điều hòa thoải mái với tài xế nói tiếng Anh. Lý tưởng cho gia đình và du khách muốn đi thư thái.' }
      },
      {
        name: { en: 'Motorbike', vi: 'Xe máy' },
        description: { en: 'Ride with an experienced local driver, see hidden spots, and enjoy a more adventurous and immersive experience through Hue\'s streets.', vi: 'Đi cùng tài xế địa phương kinh nghiệm, khám phá những góc khuất và tận hưởng trải nghiệm phiêu lưu, đắm chìm hơn qua các con phố Huế.' }
      }
    ],
    whyBookWithUs: [
      { en: 'Local guides with extensive knowledge of Hue\'s history and culture', vi: 'Hướng dẫn viên địa phương am hiểu sâu rộng về lịch sử và văn hóa Huế' },
      { en: 'Flexible schedule with optional afternoon stops tailored to your interests', vi: 'Lịch trình linh hoạt với các điểm dừng buổi chiều tùy chỉnh theo sở thích của bạn' },
      { en: 'Comfortable and safe transportation', vi: 'Phương tiện di chuyển thoải mái và an toàn' },
      { en: 'A perfect balance of culture, history, and off-the-beaten-path adventure', vi: 'Sự kết hợp hoàn hảo giữa văn hóa, lịch sử và những cuộc phiêu lưu ngoài lề' }
    ],
    faq: [
      { question: { en: 'Can I customize the afternoon stops?', vi: 'Tôi có thể tùy chỉnh các điểm dừng buổi chiều không?' }, answer: { en: 'Yes! You can choose between royal tombs, cultural villages, scenic hilltops, or the abandoned waterpark. Just let us know your preferences when you book.', vi: 'Có! Bạn có thể lựa chọn giữa lăng tẩm hoàng gia, làng văn hóa, đỉnh đồi ngắm cảnh, hoặc công viên nước bỏ hoang. Hãy cho chúng mình biết sở thích của bạn khi đặt tour.' } },
      { question: { en: 'How long is the tour?', vi: 'Tour kéo dài bao lâu?' }, answer: { en: '7–8 hours for a full-day tour. Half-day options are also available — just ask.', vi: '7–8 tiếng cho tour trọn ngày. Cũng có tùy chọn nửa ngày — chỉ cần hỏi chúng mình.' } },
      { question: { en: 'Is the tour suitable for children?', vi: 'Tour có phù hợp với trẻ em không?' }, answer: { en: 'Yes, both car and motorbike options are family-friendly. We always prioritize comfort and safety for all passengers.', vi: 'Có, cả phương án xe ô tô và xe máy đều thân thiện với gia đình. Chúng mình luôn ưu tiên sự thoải mái và an toàn cho mọi hành khách.' } },
      { question: { en: 'What should I wear?', vi: 'Tôi nên mặc gì?' }, answer: { en: 'Comfortable clothing and walking shoes. Please cover your shoulders and knees when visiting temples and pagodas.', vi: 'Trang phục thoải mái và giày đi bộ. Vui lòng mặc che vai và đầu gối khi tham quan chùa chiền.' } },
      { question: { en: 'Is the abandoned waterpark safe to visit?', vi: 'Công viên nước bỏ hoang có an toàn để tham quan không?' }, answer: { en: 'Yes, it\'s perfectly safe to explore with your guide. We recommend wearing comfortable shoes as the grounds can be uneven.', vi: 'Có, hoàn toàn an toàn khi khám phá cùng hướng dẫn viên. Chúng mình khuyên bạn nên đi giày thoải mái vì mặt đất có thể gồ ghề.' } }
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
  }
];

export const getTourBySlug = (slug: string) => {
  return tours.find((tour) => tour.slug === slug);
};
