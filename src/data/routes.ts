export type ProgrammaticRoute = {
  id: string;
  slug: string;
  origin: {
    en: string;
    vi: string;
  };
  destination: {
    en: string;
    vi: string;
  };
  distanceKm: number;
  durationHours: number;
  stops: {
    en: string;
    vi: string;
  }[];
  mapEmbedUrl: string;
  meta: {
    en: { title: string; description: string; keywords: string[] };
    vi: { title: string; description: string; keywords: string[] };
  };
};

export const programmaticRoutes: ProgrammaticRoute[] = [
  {
    id: "route-phong-nha",
    slug: "hue-to-phong-nha-motorbike-tour",
    origin: { en: "Hue", vi: "Huế" },
    destination: { en: "Phong Nha", vi: "Phong Nha" },
    distanceKm: 215,
    durationHours: 6.5,
    stops: [
      { en: "Quang Tri Citadel", vi: "Thành cổ Quảng Trị" },
      { en: "Hien Luong Bridge (DMZ)", vi: "Cầu Hiền Lương (Vĩ tuyến 17)" },
      { en: "Vinh Moc Tunnels", vi: "Địa đạo Vịnh Mốc" },
      { en: "Phong Nha Ke Bang National Park", vi: "Vườn quốc gia Phong Nha Kẻ Bàng" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1956100.22271836!2d105.78763565013093!3d16.99723795328229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3141a115e1a7935f%3A0xbf3b50af70b5c7b7!2sHue%2C%20Thua%20Thien%20Hue%2C%20Vietnam!3m2!1d16.4637136!2d107.5908662!4m5!1s0x313f8cfeb2fdf109%3A0xc39281a8bba1d80b!2sPhong%20Nha%2C%20Son%20Trach%2C%20B%E1%BB%91%20Tr%E1%BA%A1ch%20District%2C%20Quang%20Binh%20Province%2C%20Vietnam!3m2!1d17.5873994!2d106.2796123!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s",
    meta: {
      en: {
        title: "Hue to Phong Nha Motorbike Tour | Easy Rider DMZ Route",
        description: "Ride from Hue to Phong Nha by motorbike with an expert easy rider guide. Explore the DMZ, Vinh Moc Tunnels, and arrive safely in Phong Nha.",
        keywords: ["hue to phong nha motorbike tour", "hue to phong nha easy rider", "motorbike tour from hue to phong nha", "hue to dmz to phong nha"]
      },
      vi: {
        title: "Tour Xe Máy Huế đi Phong Nha qua Vĩ tuyến 17",
        description: "Khám phá tuyến đường từ Huế đến Phong Nha bằng xe máy cùng Easy Rider địa phương. Dừng chân tại DMZ, Địa đạo Vịnh Mốc.",
        keywords: ["tour xe máy huế đi phong nha", "hue to phong nha motorbike", "thuê xe máy huế đi phong nha"]
      }
    }
  },
  {
    id: "route-da-nang",
    slug: "hue-to-da-nang-motorbike-tour",
    origin: { en: "Hue", vi: "Huế" },
    destination: { en: "Da Nang", vi: "Đà Nẵng" },
    distanceKm: 105,
    durationHours: 4.5,
    stops: [
      { en: "Chuon Lagoon", vi: "Đầm Chuồn" },
      { en: "Lang Co Bay", vi: "Vịnh Lăng Cô" },
      { en: "Hai Van Pass (The Ocean Cloud Pass)", vi: "Đỉnh đèo Hải Vân" },
      { en: "My Khe Beach", vi: "Biển Mỹ Khê (Đà Nẵng)" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d491564.0863765103!2d107.56847293522271!3d16.27315579973273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3141a115e1a7935f%3A0xbf3b50af70b5c7b7!2sHue%2C%20Thua%20Thien%20Hue!3m2!1d16.4637136!2d107.5908662!4m5!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2sDa%20Nang%2C%20Vietnam!3m2!1d16.0544068!2d108.2021667!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s",
    meta: {
      en: {
        title: "Hue to Da Nang Motorbike Tour via Hai Van Pass",
        description: "The ultimate Hue to Da Nang easy rider experience. Cross the spectacular Hai Van Pass, stop at Lang Co beach, and arrive in Da Nang safely.",
        keywords: ["hue to da nang motorbike tour", "hue to da nang easy rider", "hai van pass motorbike tour to da nang"]
      },
      vi: {
        title: "Tour Xe Máy Huế đi Đà Nẵng qua đèo Hải Vân",
        description: "Trải nghiệm cung đường biển đẹp nhất miền Trung. Từ Huế đi Đà Nẵng qua Đèo Hải Vân cùng hướng dẫn viên bản địa chuyên nghiệp.",
        keywords: ["tour xe máy huế đà nẵng", "huế đà nẵng đèo hải vân", "easy rider huế đà nẵng"]
      }
    }
  },
  {
    id: "route-bach-ma",
    slug: "hue-to-bach-ma-national-park-tour",
    origin: { en: "Hue", vi: "Huế" },
    destination: { en: "Bach Ma National Park", vi: "Vườn Quốc gia Bạch Mã" },
    distanceKm: 65,
    durationHours: 2.0,
    stops: [
      { en: "Cau Hai Lagoon", vi: "Đầm Cầu Hai" },
      { en: "Bach Ma Summit (Hai Vong Dai)", vi: "Hải Vọng Đài (Đỉnh Bạch Mã)" },
      { en: "Do Quyen Waterfall", vi: "Thác Đỗ Quyên" },
      { en: "Five Lakes (Ngu Ho)", vi: "Ngũ Hồ" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d245973.9109012462!2d107.63290680654716!3d16.271383796590924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3141a115e1a7935f%3A0xbf3b50af70b5c7b7!2sHue!3m2!1d16.4637136!2d107.5908662!4m5!1s0x31418721de0f5cd3%3A0x95cf233ed138d6a8!2sBach%20Ma%20National%20Park!3m2!1d16.1963496!2d107.8540866!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s",
    meta: {
      en: {
        title: "Hue to Bach Ma National Park Motorbike Tour",
        description: "A scenic motorbike trip from Hue to Bach Ma National Park. Experience untouched nature, waterfalls, and panoramic views from the summit.",
        keywords: ["hue to bach ma national park", "bach ma motorbike tour from hue", "hue to bach ma easy rider"]
      },
      vi: {
        title: "Tour Xe Máy Huế đi Vườn Quốc gia Bạch Mã",
        description: "Khám phá Vườn Quốc gia Bạch Mã hùng vĩ bằng xe máy từ Huế. Lịch trình chi tiết khám phá Thác Đỗ Quyên, Ngũ Hồ và Hải Vọng Đài.",
        keywords: ["tour xe máy huế bạch mã", "từ huế đi bạch mã", "tour bạch mã huế"]
      }
    }
  }
];