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
  }
];