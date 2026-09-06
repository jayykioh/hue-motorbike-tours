export type ComparisonPageData = {
  id: string;
  slug: string;
  meta: {
    en: { title: string; description: string; keywords: string[] };
    vi: { title: string; description: string; keywords: string[] };
  };
  title: { en: string; vi: string };
  subtitle: { en: string; vi: string };
  competitors: { name: string; isOurs: boolean }[];
  features: {
    featureName: { en: string; vi: string };
    values: { text: { en: string; vi: string }; isPositive: boolean; isNeutral?: boolean }[];
  }[];
  verdict: { en: string; vi: string };
};

export const comparisons: ComparisonPageData[] = [
  {
    id: "hue-hoi-an-transport",
    slug: "hue-to-hoi-an-motorbike-vs-bus-vs-train",
    meta: {
      en: {
        title: "Hue to Hoi An: Motorbike vs Bus vs Train (2026 Guide)",
        description: "Compare the best ways to travel from Hue to Hoi An. Discover why the Hai Van Pass motorbike tour beats the bus and train in price, scenery, and experience.",
        keywords: ["hue to hoi an by motorbike vs bus", "train vs motorbike hue to hoi an", "best way to travel from hue to hoi an"]
      },
      vi: {
        title: "Từ Huế đi Hội An: Xe máy vs Xe khách vs Tàu hoả",
        description: "So sánh chi tiết các phương tiện di chuyển từ Huế đi Hội An. Khám phá lý do tour xe máy vượt đèo Hải Vân mang lại trải nghiệm tuyệt vời nhất.",
        keywords: ["từ huế đi hội an bằng xe máy hay xe khách", "tàu hoả huế hội an", "cách đi huế hội an tốt nhất"]
      }
    },
    title: { 
      en: "Hue to Hoi An: Motorbike vs Bus vs Train", 
      vi: "Di chuyển Huế - Hội An: Xe máy, Xe khách hay Tàu hoả?" 
    },
    subtitle: {
      en: "The ultimate comparison to help you choose the best transport for your journey.",
      vi: "Bài so sánh chi tiết giúp bạn chọn phương tiện hoàn hảo nhất."
    },
    competitors: [
      { name: "Motorbike Tour (Easy Rider)", isOurs: true },
      { name: "Tourist Bus", isOurs: false },
      { name: "Train", isOurs: false }
    ],
    features: [
      {
        featureName: { en: "Scenic Views", vi: "Phong cảnh" },
        values: [
          { text: { en: "Incredible (Hai Van Pass)", vi: "Tuyệt đẹp (Đỉnh đèo Hải Vân)" }, isPositive: true },
          { text: { en: "Boring (Through tunnel)", vi: "Nhàm chán (Đi qua hầm)" }, isPositive: false },
          { text: { en: "Good (Coastal view)", vi: "Tốt (View biển)" }, isPositive: true, isNeutral: true }
        ]
      },
      {
        featureName: { en: "Photo Stops", vi: "Dừng chụp ảnh" },
        values: [
          { text: { en: "Unlimited, flexible", vi: "Không giới hạn, linh hoạt" }, isPositive: true },
          { text: { en: "Zero stops", vi: "Không dừng" }, isPositive: false },
          { text: { en: "Zero stops", vi: "Không dừng" }, isPositive: false }
        ]
      },
      {
        featureName: { en: "Travel Time", vi: "Thời gian di chuyển" },
        values: [
          { text: { en: "6-7 hours (Full day trip)", vi: "6-7 tiếng (Đi chơi cả ngày)" }, isPositive: true },
          { text: { en: "3-4 hours", vi: "3-4 tiếng" }, isPositive: true, isNeutral: true },
          { text: { en: "2.5-3 hours", vi: "2.5-3 tiếng" }, isPositive: true, isNeutral: true }
        ]
      },
      {
        featureName: { en: "Local Experience", vi: "Trải nghiệm bản địa" },
        values: [
          { text: { en: "100% Authentic with Local Guide", vi: "100% Chân thực với HDV bản địa" }, isPositive: true },
          { text: { en: "None", vi: "Không có" }, isPositive: false },
          { text: { en: "Minimal", vi: "Rất ít" }, isPositive: false }
        ]
      },
      {
        featureName: { en: "Luggage Transfer", vi: "Chở hành lý" },
        values: [
          { text: { en: "Included (Tied securely)", vi: "Bao gồm (Chằng buộc an toàn)" }, isPositive: true },
          { text: { en: "Stored underneath", vi: "Để dưới hầm xe" }, isPositive: true, isNeutral: true },
          { text: { en: "Carry yourself", vi: "Tự mang theo" }, isPositive: false }
        ]
      }
    ],
    verdict: {
      en: "While the bus is the cheapest and the train is the fastest, the **Motorbike Tour (Easy Rider)** is undeniably the BEST experience. You don't just get from A to B; you travel over the legendary Hai Van Pass, stop at hidden lagoons, and truly experience Vietnam.",
      vi: "Mặc dù xe khách rẻ nhất và tàu hoả nhanh nhất, nhưng **Tour Xe Máy (Easy Rider)** chắc chắn là trải nghiệm ĐÁNG GIÁ NHẤT. Bạn không chỉ di chuyển từ A đến B, mà còn được vượt đèo Hải Vân huyền thoại, dừng chân ở các đầm phá tuyệt đẹp và thực sự cảm nhận Việt Nam."
    }
  },
  {
    id: "hue-hoi-an-private-car-vs-motorbike",
    slug: "hue-to-hoi-an-private-car-vs-motorbike",
    meta: {
      en: {
        title: "Hue to Hoi An: Private Car vs Motorbike Tour",
        description: "Deciding between a private car and a motorbike tour from Hue to Hoi An? Compare the experience, comfort, luggage space, and cost to make the right choice.",
        keywords: ["hue to hoi an private car vs motorbike", "best way to travel central vietnam", "hue to hoi an transfer options"]
      },
      vi: {
        title: "Từ Huế đi Hội An: Xe ô tô riêng vs Xe máy",
        description: "Nên chọn thuê xe ô tô riêng hay đi tour xe máy từ Huế vào Hội An? So sánh chi tiết về trải nghiệm, sự thoải mái, giá cả và chở hành lý.",
        keywords: ["từ huế đi hội an bằng ô tô hay xe máy", "thuê xe riêng huế hội an", "phượt đèo hải vân bằng xe máy"]
      }
    },
    title: { 
      en: "Private Car vs Motorbike Tour", 
      vi: "Xe ô tô riêng vs Tour Xe máy" 
    },
    subtitle: {
      en: "Which is the best way to travel from Hue to Hoi An via the Hai Van Pass?",
      vi: "Đâu là cách tuyệt vời nhất để di chuyển qua Đèo Hải Vân?"
    },
    competitors: [
      { name: "Motorbike Tour (Easy Rider)", isOurs: true },
      { name: "Private Car", isOurs: false }
    ],
    features: [
      {
        featureName: { en: "The Experience", vi: "Trải nghiệm" },
        values: [
          { text: { en: "Unobstructed 360° views, open air thrill", vi: "Tầm nhìn 360°, cảm giác phiêu lưu ngoài trời" }, isPositive: true },
          { text: { en: "Comfortable, but views are behind glass", vi: "Thoải mái, nhưng ngắm cảnh qua cửa kính" }, isPositive: false }
        ]
      },
      {
        featureName: { en: "Comfort & AC", vi: "Thoải mái & Điều hoà" },
        values: [
          { text: { en: "Exposed to the weather", vi: "Chịu ảnh hưởng thời tiết" }, isPositive: false },
          { text: { en: "Fully air-conditioned, weather-proof", vi: "Có điều hoà, không ngại mưa nắng" }, isPositive: true }
        ]
      },
      {
        featureName: { en: "Luggage Space", vi: "Chở Hành lý" },
        values: [
          { text: { en: "Strapped to the bike (Safe, but limited)", vi: "Chằng sau xe (An toàn nhưng giới hạn số lượng)" }, isPositive: true, isNeutral: true },
          { text: { en: "Unlimited space in the trunk", vi: "Khoang hành lý rộng rãi" }, isPositive: true }
        ]
      },
      {
        featureName: { en: "Family Friendliness", vi: "Phù hợp cho Gia đình" },
        values: [
          { text: { en: "Great for teens, harder for infants", vi: "Tuyệt vời cho thanh thiếu niên, khó cho trẻ nhỏ" }, isPositive: true, isNeutral: true },
          { text: { en: "Perfect for families of all ages", vi: "Hoàn hảo cho gia đình mọi lứa tuổi" }, isPositive: true }
        ]
      }
    ],
    verdict: {
      en: "Choose the **Private Car** if you prioritize air conditioning, have lots of luggage, or are traveling with small children. But if you want a once-in-a-lifetime adventure with the wind in your hair and the best photos, the **Motorbike Tour** is the absolute winner. *Note: Hue Motorbike Tours provides BOTH options!*",
      vi: "Hãy chọn **Xe ô tô riêng** nếu bạn ưu tiên sự mát mẻ, có nhiều hành lý lớn, hoặc đi cùng trẻ nhỏ. Nhưng nếu bạn khao khát một chuyến phiêu lưu để đời, hít thở gió biển và tự do chụp ảnh, **Tour Xe Máy** là người chiến thắng tuyệt đối. *Lưu ý: Hue Motorbike Tours cung cấp cả 2 dịch vụ này!*"
    }
  },
  {
    id: "easy-rider-alternatives",
    slug: "easy-rider-vietnam-alternatives",
    meta: {
      en: {
        title: "Easy Rider Vietnam Alternatives: Self-drive, Bus & Train",
        description: "Looking for alternatives to Easy Rider tours in Vietnam? Compare self-driving, buses, and trains to see which option fits your adventure style and safety needs.",
        keywords: ["easy rider vietnam alternatives", "hue motorbike tour options", "self drive motorbike vietnam"]
      },
      vi: {
        title: "Các lựa chọn thay thế Easy Rider: Tự lái, Xe khách & Tàu hoả",
        description: "Bạn đang tìm cách đi phượt không cần thuê Easy Rider? So sánh việc tự lái xe, đi xe khách và tàu hoả để xem lựa chọn nào an toàn và phù hợp nhất.",
        keywords: ["tự lái xe máy xuyên việt", "kinh nghiệm phượt hải vân", "thay thế easy rider"]
      }
    },
    title: { 
      en: "Easy Rider Tours vs Self-Drive & Public Transport", 
      vi: "Easy Rider vs Tự Lái Xe & Công Cộng" 
    },
    subtitle: {
      en: "What happens when you skip the local guide?",
      vi: "Chuyện gì sẽ xảy ra nếu bạn không có hướng dẫn viên bản địa?"
    },
    competitors: [
      { name: "Easy Rider (With Guide)", isOurs: true },
      { name: "Self-Drive Motorbike", isOurs: false },
      { name: "Public Transport (Bus/Train)", isOurs: false }
    ],
    features: [
      {
        featureName: { en: "Safety & Navigation", vi: "An toàn & Dẫn đường" },
        values: [
          { text: { en: "100% Guided, zero stress", vi: "Hướng dẫn 100%, không lo lạc đường" }, isPositive: true },
          { text: { en: "Navigate chaotic traffic alone", vi: "Tự xoay sở với giao thông hỗn loạn" }, isPositive: false },
          { text: { en: "Safe, but you miss the stops", vi: "An toàn, nhưng bỏ lỡ mọi điểm dừng" }, isPositive: true, isNeutral: true }
        ]
      },
      {
        featureName: { en: "Hidden Gems & Food", vi: "Khám phá & Ẩm thực" },
        values: [
          { text: { en: "Guide knows the best spots", vi: "HDV biết rõ những quán ngon nhất" }, isPositive: true },
          { text: { en: "Rely on Google Maps", vi: "Phụ thuộc Google Maps (Hên xui)" }, isPositive: false },
          { text: { en: "Pre-packaged tourist traps", vi: "Điểm dừng công nghiệp" }, isPositive: false }
        ]
      },
      {
        featureName: { en: "Luggage Handling", vi: "Xử lý hành lý" },
        values: [
          { text: { en: "Tied securely by professionals", vi: "Được chằng buộc an toàn" }, isPositive: true },
          { text: { en: "Struggle to balance big bags", vi: "Vật lộn giữ thăng bằng với balo" }, isPositive: false },
          { text: { en: "Stored away easily", vi: "Cất gọn gàng" }, isPositive: true }
        ]
      },
      {
        featureName: { en: "Breakdowns & Weather", vi: "Hỏng hóc & Thời tiết" },
        values: [
          { text: { en: "Guide handles all repairs & rain gear", vi: "HDV lo sửa xe và áo mưa" }, isPositive: true },
          { text: { en: "Stranded if the bike breaks down", vi: "Bơ vơ nếu xe hỏng giữa đèo" }, isPositive: false },
          { text: { en: "Not an issue", vi: "Không thành vấn đề" }, isPositive: true }
        ]
      }
    ],
    verdict: {
      en: "If you are an extremely experienced rider with an international license, **Self-driving** can be fun. If you just want cheap transport, take the **Bus**. But if you want the thrill of a motorbike adventure WITHOUT the danger, navigation stress, and luggage problems, an **Easy Rider** is worth every penny.",
      vi: "Nếu bạn là một tay lái cực kỳ cừ khôi và quen đường, **Tự lái xe** sẽ rất vui. Nếu bạn chỉ cần di chuyển rẻ, hãy đi **Xe khách**. Nhưng nếu bạn muốn trải nghiệm phượt xe máy ĐÚNG NGHĨA mà KHÔNG PHẢI lo nguy hiểm, lạc đường hay hỏng xe, thuê **Easy Rider** là khoản đầu tư xứng đáng tới từng xu."
    }
  }
];