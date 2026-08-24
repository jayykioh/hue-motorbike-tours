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
      en: 'Turn a regular transfer from Hue into a scenic journey through Central Vietnam. Travel via the Hai Van Pass and stop along the way at Lap An Lagoon, Lang Co Beach, and Nhi Ho Waterfall.',
      vi: 'Biến chuyến đi từ Huế vào Hội An thành một hành trình ngắm cảnh. Vượt đèo Hải Vân và dừng chân tại Đầm Lập An, Vịnh Lăng Cô, và thác Nhị Hồ.'
    },
    duration: '6–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe riêng hoặc Xe máy'
    },
    price: 'From $— USD',
    image: 'https://picsum.photos/seed/haivanpass/800/600',
    highlights: [
      { en: 'Hue to Hoi An or Da Nang transfer with sightseeing', vi: 'Di chuyển từ Huế đến Hội An hoặc Đà Nẵng kết hợp ngắm cảnh' },
      { en: 'Ride through Hai Van Pass', vi: 'Chinh phục đèo Hải Vân' },
      { en: 'Visit Lap An Lagoon', vi: 'Thăm đầm Lập An' },
      { en: 'Visit Lang Co Beach', vi: 'Thăm vịnh Lăng Cô' },
      { en: 'Stop at Nhị Hồ Waterfall', vi: 'Dừng chân tại thác Nhị Hồ' },
      { en: 'Optional Marble Mountains stop', vi: 'Lựa chọn thêm: Thăm Ngũ Hành Sơn' }
    ],
    itinerary: [
      { title: { en: 'Pickup at hotel in Hue', vi: 'Đón khách tại khách sạn ở Huế' } },
      { title: { en: 'Lap An Lagoon', vi: 'Đầm Lập An' }, description: { en: 'Mountain and lagoon views.', vi: 'Ngắm nhìn khung cảnh đầm phá và núi non.' } },
      { title: { en: 'Lang Co Beach', vi: 'Vịnh Lăng Cô' }, description: { en: 'Relaxation and photo stop.', vi: 'Dừng chân nghỉ ngơi và chụp ảnh.' } },
      { title: { en: 'Nhị Hồ Waterfall', vi: 'Thác Nhị Hồ' }, description: { en: 'Natural pools and swimming opportunity.', vi: 'Tắm suối và thư giãn.' } },
      { title: { en: 'Hai Van Pass', vi: 'Đèo Hải Vân' }, description: { en: 'Scenic mountain road and panoramic viewpoints.', vi: 'Cung đường đèo tuyệt đẹp với tầm nhìn toàn cảnh.' } },
      { title: { en: 'Marble Mountains (optional)', vi: 'Ngũ Hành Sơn (tuỳ chọn)' }, description: { en: 'Pagodas, caves, and viewpoints.', vi: 'Khám phá hang động và chùa chiền.' } },
      { title: { en: 'Hotel drop-off in Hoi An or Da Nang', vi: 'Trả khách tại khách sạn Hội An hoặc Đà Nẵng' } }
    ],
    faq: [
      { question: { en: 'How long is the trip?', vi: 'Chuyến đi kéo dài bao lâu?' }, answer: { en: 'Around 6–8 hours with sightseeing stops.', vi: 'Khoảng 6–8 tiếng bao gồm cả thời gian dừng ngắm cảnh.' } },
      { question: { en: 'Is the motorbike option safe?', vi: 'Đi xe máy có an toàn không?' }, answer: { en: 'Travelers ride with an experienced local driver and helmets and safety gear are included.', vi: 'Du khách sẽ ngồi sau xe của tài xế địa phương giàu kinh nghiệm và được trang bị đầy đủ đồ bảo hộ.' } },
      { question: { en: 'Can travelers bring luggage?', vi: 'Có thể mang theo hành lý không?' }, answer: { en: 'Cars have luggage space and motorbikes use secure luggage transport.', vi: 'Xe ô tô có chỗ để hành lý, xe máy sẽ có dịch vụ chuyển hành lý an toàn.' } }
    ]
  },
  {
    id: 'hue-imperial-city-tour',
    slug: 'hue-imperial-city-tour',
    title: {
      en: 'Hue Imperial City Tour',
      vi: 'Tour Tham Quan Đại Nội Huế'
    },
    shortDescription: {
      en: 'Step into the heart of Vietnam’s last royal dynasty. Explore the Imperial Citadel, Forbidden Purple City, royal tombs, and Thien Mu Pagoda.',
      vi: 'Khám phá hoàng cung của triều đại phong kiến cuối cùng tại Việt Nam. Tham quan Đại Nội, Tử Cấm Thành, lăng tẩm hoàng gia và chùa Thiên Mụ.'
    },
    duration: '7–8 hours',
    transport: {
      en: 'Private Car or Motorbike',
      vi: 'Xe riêng hoặc Xe máy'
    },
    price: 'From $— USD',
    image: 'https://picsum.photos/seed/imperialcity/800/600',
    highlights: [
      { en: 'Explore the Imperial Citadel and Forbidden Purple City', vi: 'Khám phá Đại Nội và Tử Cấm Thành' },
      { en: 'Visit Khai Dinh Tomb', vi: 'Tham quan Lăng Khải Định' },
      { en: 'Discover Thien Mu Pagoda', vi: 'Tham quan Chùa Thiên Mụ' },
      { en: 'Enjoy lunch with authentic Hue cuisine', vi: 'Thưởng thức bữa trưa với ẩm thực Huế' },
      { en: 'Customize afternoon stops', vi: 'Tùy chỉnh lịch trình buổi chiều' }
    ],
    itinerary: [
      { title: { en: 'Hotel pickup in Hue', vi: 'Đón tại khách sạn ở Huế' } },
      { title: { en: 'Imperial Citadel & Forbidden Purple City', vi: 'Đại Nội & Tử Cấm Thành' }, description: { en: 'Explore palaces, temples, and royal courtyards.', vi: 'Khám phá cung điện, đền đài và sân chầu.' } },
      { title: { en: 'Thien Mu Pagoda', vi: 'Chùa Thiên Mụ' }, description: { en: 'Visit the historic pagoda overlooking the Perfume River.', vi: 'Thăm ngôi chùa lịch sử bên bờ sông Hương.' } },
      { title: { en: 'Lunch at a local restaurant', vi: 'Ăn trưa tại nhà hàng địa phương' } },
      { title: { en: 'Khai Dinh Tomb', vi: 'Lăng Khải Định' }, description: { en: 'Explore architecture combining Eastern and Western influences.', vi: 'Khám phá kiến trúc kết hợp giữa Đông và Tây.' } },
      { title: { en: 'Flexible afternoon stops', vi: 'Lịch trình chiều tự chọn' }, description: { en: 'Abandoned waterpark, Vong Canh Hill, traditional incense village, etc.', vi: 'Công viên nước bỏ hoang, Đồi Vọng Cảnh, làng làm hương truyền thống...' } },
      { title: { en: 'Return to hotel', vi: 'Trở về khách sạn' } }
    ],
    faq: [
      { question: { en: 'Can the afternoon stops be customized?', vi: 'Có thể tùy chỉnh điểm đến buổi chiều không?' }, answer: { en: 'Yes. Options include royal tombs, cultural villages, scenic spots, and the abandoned waterpark.', vi: 'Có. Các lựa chọn bao gồm lăng tẩm khác, làng văn hóa, điểm ngắm cảnh và công viên nước bỏ hoang.' } },
      { question: { en: 'Is the tour suitable for children?', vi: 'Tour có phù hợp với trẻ em không?' }, answer: { en: 'Both car and motorbike options are family-friendly.', vi: 'Cả lựa chọn xe máy và ô tô đều thân thiện với gia đình có trẻ nhỏ.' } }
    ]
  },
  {
    id: 'hue-dmz-tour',
    slug: 'hue-dmz-tour',
    title: {
      en: 'Hue DMZ Tour',
      vi: 'Tour Lịch Sử DMZ'
    },
    shortDescription: {
      en: 'Travel to Vietnam’s former Demilitarized Zone and explore Vinh Moc Tunnels, Hien Luong Bridge at the 17th Parallel, and Quang Tri Ancient Citadel.',
      vi: 'Đến thăm khu phi quân sự DMZ và khám phá địa đạo Vịnh Mốc, cầu Hiền Lương ở vĩ tuyến 17 và thành cổ Quảng Trị.'
    },
    duration: 'Full day',
    transport: {
      en: 'Private Car',
      vi: 'Xe riêng'
    },
    price: 'From $70 USD',
    image: 'https://picsum.photos/seed/dmztour/800/600',
    highlights: [
      { en: 'Explore Vinh Moc Tunnels', vi: 'Khám phá Địa đạo Vịnh Mốc' },
      { en: 'Stand at the 17th Parallel', vi: 'Đứng tại Vĩ tuyến 17' },
      { en: 'Visit Hien Luong Bridge', vi: 'Thăm Cầu Hiền Lương' },
      { en: 'Visit Quang Tri Citadel', vi: 'Thăm Thành cổ Quảng Trị' }
    ],
    itinerary: [
      { title: { en: 'Morning pickup in Hue', vi: 'Đón tại Huế vào buổi sáng' } },
      { title: { en: 'Hien Luong Bridge & Ben Hai River', vi: 'Cầu Hiền Lương & Sông Bến Hải' }, description: { en: 'Stand at the historic 17th Parallel and visit the DMZ Museum.', vi: 'Đứng tại Vĩ tuyến 17 lịch sử và thăm bảo tàng DMZ.' } },
      { title: { en: 'Vinh Moc Tunnels', vi: 'Địa đạo Vịnh Mốc' }, description: { en: 'Explore the underground tunnel network.', vi: 'Khám phá hệ thống địa đạo ngầm dưới đất.' } },
      { title: { en: 'Lunch at a local restaurant', vi: 'Ăn trưa tại nhà hàng địa phương' } },
      { title: { en: 'Quang Tri Ancient Citadel', vi: 'Thành cổ Quảng Trị' }, description: { en: 'Visit the memorial park and exhibits.', vi: 'Thăm công viên tưởng niệm và các di tích lịch sử.' } },
      { title: { en: 'Scenic drive back to Hue', vi: 'Trở về Huế' } }
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
      en: 'Explore Hue through food and adventure on two wheels. Taste Hue specialties, visit a local market, and end the journey at Tam Giang Lagoon for sunset.',
      vi: 'Khám phá ẩm thực Huế trên xe máy. Thưởng thức đặc sản địa phương, thăm chợ truyền thống và ngắm hoàng hôn trên phá Tam Giang.'
    },
    duration: 'Half day / Evening',
    transport: {
      en: 'Motorbike',
      vi: 'Xe máy'
    },
    price: 'From $— USD',
    image: 'https://picsum.photos/seed/huefood/800/600',
    highlights: [
      { en: 'Ride with a local motorbike guide', vi: 'Đi xe máy cùng hướng dẫn viên bản địa' },
      { en: 'Taste Hue dishes at local spots', vi: 'Thưởng thức các món Huế tại quán ăn địa phương' },
      { en: 'Visit a local market', vi: 'Tham quan khu chợ truyền thống' },
      { en: 'Watch sunset at Tam Giang Lagoon', vi: 'Ngắm hoàng hôn trên phá Tam Giang' }
    ],
    itinerary: [
      { title: { en: 'Stop 1 – Bún Bò Huế', vi: 'Điểm 1 - Bún Bò Huế' } },
      { title: { en: 'Stop 2 – Royal Cakes & Nem Lụi', vi: 'Điểm 2 - Bánh bèo, nậm, lọc & Nem lụi' } },
      { title: { en: 'Stop 3 – Local Market + Bánh Khoái Cá Kình', vi: 'Điểm 3 - Chợ địa phương & Bánh khoái cá kình' } },
      { title: { en: 'Stop 4 – Sunset at Tam Giang Lagoon', vi: 'Điểm 4 - Hoàng hôn Phá Tam Giang' } },
      { title: { en: 'Stop 5 – Chè Huế', vi: 'Điểm 5 - Chè Huế' } }
    ]
  },
  {
    id: 'hue-cyclo-tour',
    slug: 'hue-cyclo-tour-explore-the-ancient-city-at-a-gentle-pace',
    title: {
      en: 'Hue Cyclo Tour',
      vi: 'Tour Xích Lô Huế'
    },
    shortDescription: {
      en: 'Explore the ancient city at a gentle pace on a traditional cyclo. Discover hidden corners of the Imperial Citadel and experience the tranquil local life.',
      vi: 'Khám phá cố đô với nhịp độ chậm rãi trên chiếc xích lô truyền thống. Tận hưởng vẻ đẹp bình yên và nhịp sống của người dân địa phương.'
    },
    duration: '2–3 hours',
    transport: {
      en: 'Cyclo',
      vi: 'Xích lô'
    },
    price: 'From $— USD',
    image: 'https://picsum.photos/seed/cyclo/800/600',
    highlights: [
      { en: 'Gentle ride through the ancient city', vi: 'Trải nghiệm xích lô quanh khu phố cổ' },
      { en: 'Explore local streets and markets', vi: 'Tham quan các con phố và chợ địa phương' },
      { en: 'Perfect for photography and slow travel', vi: 'Phù hợp để chụp ảnh và đi chậm' }
    ],
    itinerary: [
      { title: { en: 'Hotel Pickup', vi: 'Đón tại khách sạn' } },
      { title: { en: 'Cyclo ride around the Citadel', vi: 'Đạp xích lô vòng quanh Đại Nội' } },
      { title: { en: 'Visit local markets', vi: 'Thăm chợ truyền thống' } },
      { title: { en: 'Drop off', vi: 'Trả khách' } }
    ]
  }
];

export const getTourBySlug = (slug: string) => {
  return tours.find((tour) => tour.slug === slug);
};
