"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type Review = {
  id: string;
  name: string;
  location: string;
  avatar: string;
  badge: { en: string; vi: string };
  platform: "google";
  tour: { en: string; vi: string };
  category: "all" | "haivan" | "food" | "city";
  date: { en: string; vi: string };
  rating: number;
  content: { en: string; vi: string };
  photos?: string[];
  helpfulCount: number;
};

const reviewsData: Review[] = [
  {
    id: "review-1",
    name: "Liam & Chloe Davies",
    location: "Melbourne, Australia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    badge: { en: "Local Guide · 34 reviews", vi: "Local Guide · 34 đánh giá" },
    platform: "google",
    tour: { en: "Hue to Hoi An via Hai Van Pass", vi: "Huế đi Hội An qua đèo Hải Vân" },
    category: "haivan",
    date: { en: "2 weeks ago", vi: "2 tuần trước" },
    rating: 5,
    content: {
      en: "Honestly the highlight of our 3 weeks in Vietnam. We were hesitant about doing the pass on motorbikes with our heavy luggage, but Tu tied everything down securely and drove so smoothly. The stop at Lap An lagoon for fresh coconut and the mountain curves at the top were breathtaking. No tourist rush at all.",
      vi: "Thực sự là điểm sáng lớn nhất trong 3 tuần du lịch Việt Nam của chúng tôi. Ban đầu tụi mình hơi lo về việc đi xe máy qua đèo kèm hành lý cồng kềnh, nhưng anh Tú đã chằng đồ rất chắc chắn và lái xe cực kỳ êm ái. Điểm dừng ở đầm Lập An uống nước dừa tươi và ngắm cảnh đèo hùng vĩ trên đỉnh đèo thật sự tuyệt đẹp.",
    },
    photos: [
      "/photo/haivanpass-customerfeedback.jpg",
      "/photo/hoiantohue-pictureofeasyriderandcustomer.jpg",
      "/photo/haivanpass-customerfeedback2.jpg",
    ],
    helpfulCount: 19,
  },
  {
    id: "review-2",
    name: "Marc Hoffmann",
    location: "Munich, Germany",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    badge: { en: "Local Guide · 42 reviews", vi: "Local Guide · 42 đánh giá" },
    platform: "google",
    tour: { en: "Hue Street Food Discovery", vi: "Khám phá ẩm thực đường phố Huế" },
    category: "food",
    date: { en: "1 month ago", vi: "1 tháng trước" },
    rating: 5,
    content: {
      en: "Forget standard tourist restaurant lists, this was the real deal. We rode through quiet neighborhood alleys and sat on small stools eating hot banh khoai and fresh nem lui right by the charcoal grills. Tu explained every single ingredient and local custom with so much pride. A genuine culinary adventure.",
      vi: "Không giống các nhà hàng du lịch thông thường, đây là trải nghiệm ẩm thực đường phố thực thụ. Chúng tôi len lỏi vào các con hẻm yên tĩnh, ngồi ghế nhỏ ăn bánh khoái nóng giòn và nem lụi thơm phức ngay cạnh bếp than hồng. Anh Tú giải thích từng món ăn và câu chuyện địa phương với niềm tự hào sâu sắc.",
    },
    photos: [
      "/photo/banh-nam-hue-food.jpg",
      "/photo/huefoodtour1.jpg",
      "/photo/huefoodtour2.jpg",
    ],
    helpfulCount: 14,
  },
  {
    id: "review-3",
    name: "Elena Rostova",
    location: "Prague, Czech Republic",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    badge: { en: "Local Guide · Level 5 (19 reviews)", vi: "Local Guide · Cấp 5 (19 đánh giá)" },
    platform: "google",
    tour: { en: "Imperial City & Royal Tombs", vi: "Đại Nội và Lăng tẩm Hoàng gia" },
    category: "city",
    date: { en: "October 2024", vi: "Tháng 10, 2024" },
    rating: 5,
    content: {
      en: "Taking the motorbike around Hue instead of being trapped on a big tour bus was the best decision we made. We reached the quiet countryside tombs early in the morning before any crowds arrived. The riders drove carefully, provided clean quality helmets, and made us feel safe throughout the journey.",
      vi: "Đi xe máy vòng quanh Huế thay vì ngồi trên xe buýt du lịch đông đúc là quyết định sáng suốt nhất của chúng tôi. Chúng tôi đến các lăng tẩm yên bình từ sáng sớm trước khi có đông khách. Các anh lái xe rất cẩn thận, chuẩn bị mũ bảo hiểm sạch sẽ và luôn đảm bảo sự an tâm suốt chuyến đi.",
    },
    photos: [
      "/photo/visithue-tomb.jpg",
      "/photo/hothuytien-abondandedwaterpark.jpg",
    ],
    helpfulCount: 8,
  },
  {
    id: "review-4",
    name: "David & Sarah Miller",
    location: "London, United Kingdom",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    badge: { en: "Local Guide · 28 reviews", vi: "Local Guide · 28 đánh giá" },
    platform: "google",
    tour: { en: "Hue to Hoi An Coastal Route", vi: "Cung đường ven biển Huế đến Hội An" },
    category: "haivan",
    date: { en: "September 2024", vi: "Tháng 9, 2024" },
    rating: 5,
    content: {
      en: "We booked the private car and easy rider combination for our family. My parents sat comfortably in the air conditioned car while my partner and I rode on the bikes behind. The panoramic view from the summit of Hai Van Pass and stopping by Dragon Bridge was pure magic. Highly recommend to everyone visiting Central Vietnam.",
      vi: "Gia đình chúng tôi đặt kết hợp cả ô tô riêng và xe máy. Bố mẹ ngồi thoải mái trong xe có điều hòa mát mẻ, còn hai vợ chồng mình chạy xe máy ngay phía sau. Khung cảnh nhìn từ đỉnh đèo Hải Vân và điểm dừng tại Cầu Rồng thật sự như tranh vẽ. Rất khuyên các bạn nên thử khi đến miền Trung.",
    },
    photos: [
      "/photo/hai-van-pass-from the top.jpg",
      "/photo/dragon-bridge-in-da-nang.jpeg",
      "/photo/haivanpass.jpg",
    ],
    helpfulCount: 23,
  },
  {
    id: "review-5",
    name: "Sophie & Julien Laurent",
    location: "Lyon, France",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    badge: { en: "Local Guide · Level 6 (52 reviews)", vi: "Local Guide · Cấp 6 (52 đánh giá)" },
    platform: "google",
    tour: { en: "Hue Food Tour & Tam Giang Sunset", vi: "Food Tour Xe Máy & Hoàng Hôn Phá Tam Giang" },
    category: "food",
    date: { en: "August 2024", vi: "Tháng 8, 2024" },
    rating: 5,
    content: {
      en: "The food tour was beyond exceptional. Mai Anh Tu took us to hidden family stalls serving authentic bánh nậm, crispy bánh khoái, and hearty Cao Lầu. Watching the golden sunset at Tam Giang lagoon with a cold drink was a memory of a lifetime.",
      vi: "Tour ẩm thực vượt xa mong đợi của chúng tôi. Anh Tú đưa tụi mình đến những quán gia truyền với món bánh nậm thơm lừng, bánh khoái giòn rụm và tô Cao Lầu đậm đà. Ngắm hoàng hôn nhuộm vàng trên phá Tam Giang thật sự là trải nghiệm nhớ mãi không quên.",
    },
    photos: [
      "/photo/cao-lau-hoianfood.jpg",
      "/photo/huefoodtour.jpg",
    ],
    helpfulCount: 16,
  },
  {
    id: "review-6",
    name: "Tobias Becker",
    location: "Berlin, Germany",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    badge: { en: "Verified Google Review", vi: "Đánh giá xác thực trên Google" },
    platform: "google",
    tour: { en: "Hue Imperial Citadel & Hidden Gems", vi: "Đại Nội Huế & Điểm Đến Ẩn Mình" },
    category: "city",
    date: { en: "July 2024", vi: "Tháng 7, 2024" },
    rating: 5,
    content: {
      en: "Visiting Kien Trung Palace and the abandoned waterpark with the giant dragon sculpture was an unforgettable adventure. Traveling by motorbike gave us complete freedom, and the guide's storytelling about Hue's history was brilliant.",
      vi: "Tham quan Điện Kiến Trung lộng lẫy và công viên nước bỏ hoang với tượng rồng khổng lồ là một chuyến phiêu lưu không thể nào quên. Đi xe máy mang lại sự tự do tuyệt đối, và những câu chuyện lịch sử của anh hướng dẫn viên rất cuốn hút.",
    },
    photos: [
      "/photo/hothuytien-abondandedwaterpark.jpg",
      "/photo/hue-kien-trung-palace.jpg",
    ],
    helpfulCount: 11,
  },
];

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${star <= rating ? "text-[#fbbf24] fill-[#fbbf24]" : "text-gray-300"}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const pathname = usePathname();
  const isVi = pathname?.startsWith("/vi");
  const [filter, setFilter] = useState<"all" | "haivan" | "food" | "city">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const t = {
    eyebrow: isVi ? "ĐÁNH GIÁ THỰC TẾ" : "HUE MOTORBIKE TOUR REVIEWS",
    title: isVi
      ? "Trải nghiệm chân thực từ những vị khách quý"
      : "What travelers say about our hue motorbike tours",
    googleRatingText: isVi ? "Đánh giá xuất sắc 5.0 trên Google Maps" : "Excellent 5.0 on Google Reviews",
    reviewCountNotice: isVi ? "Dựa trên hơn 80 đánh giá từ du khách quốc tế" : "Based on 80+ verified reviews of our hue motorbike tours",
    filterAll: isVi ? "Tất cả đánh giá" : "All Reviews",
    filterHaiVan: isVi ? "Đèo Hải Vân" : "Hai Van Pass",
    filterFood: isVi ? "Ẩm thực đường phố" : "Food Tours",
    filterCity: isVi ? "Đại Nội và Cố Đô" : "Imperial City",
    helpfulText: isVi ? "Hữu ích" : "Helpful",
    viewOnGoogle: isVi ? "Xem đánh giá trên Google" : "View on Google Maps",
    photosAttached: isVi ? "Ảnh chụp từ chuyến đi" : "Photos from the journey",
  };

  const filteredReviews = filter === "all"
    ? reviewsData
    : reviewsData.filter((r) => r.category === filter);

  return (
    <section className="bg-[var(--color-limestone)] py-20 lg:py-32 px-5 sm:px-6 border-t border-[var(--color-sand)]">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col gap-12 lg:gap-16">

        {/* Section Header with Authentic Google Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-terracotta)]" />
              <p className="text-[0.8rem] font-bold tracking-[0.25em] uppercase text-[var(--color-terracotta)]">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-display text-[var(--color-ink)] leading-[1.05] tracking-tight">
              {t.title}
            </h2>
          </div>

          {/* Google Verified Reviews Aggregate Trust Card */}
          <div className="bg-white rounded-[var(--radius-lg)] p-5 sm:p-6 border border-[var(--color-sand)] shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-gray-100 flex items-center justify-center shadow-inner">
                <GoogleIcon />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-[var(--color-ink)] leading-none">5.0</span>
                  <StarRating rating={5} />
                </div>
                <span className="text-xs font-semibold text-[var(--color-ink)]/60 mt-1">
                  {t.googleRatingText}
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-[var(--color-sand)]" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#16a34a]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{isVi ? "100% Đánh giá thật đã xác thực" : "100% Verified Google Reviews"}</span>
              </div>
              <span className="text-xs text-[var(--color-ink)]/60">{t.reviewCountNotice}</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {[
            { key: "all", label: t.filterAll, count: 87 },
            { key: "haivan", label: t.filterHaiVan, count: 46 },
            { key: "food", label: t.filterFood, count: 24 },
            { key: "city", label: t.filterCity, count: 17 },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key as typeof filter)}
              className={`px-4 py-2.5 rounded-[var(--radius-pill)] text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                filter === item.key
                  ? "bg-[var(--color-ink)] text-white shadow-md"
                  : "bg-white text-[var(--color-ink)]/70 border border-[var(--color-sand)] hover:border-[var(--color-ink)]/30 hover:text-[var(--color-ink)]"
              }`}
            >
              <span>{item.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                filter === item.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
              }`}>
                {item.count}
              </span>
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-[var(--radius-lg)] p-6 sm:p-8 border border-[var(--color-sand)] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-[var(--color-sand)]">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-base text-[var(--color-ink)] leading-tight">
                          {review.name}
                        </span>
                        <span title={isVi ? "Đánh giá Google đã xác thực" : "Verified Google Review"}>
                          <GoogleIcon />
                        </span>
                      </div>
                      <span className="text-xs text-[var(--color-ink)]/55">
                        {review.location}
                      </span>
                      <span className="text-[0.75rem] font-medium text-[var(--color-terracotta)] mt-0.5">
                        {isVi ? review.badge.vi : review.badge.en}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <StarRating rating={review.rating} />
                    <span className="text-xs text-[var(--color-ink)]/40 mt-1">
                      {isVi ? review.date.vi : review.date.en}
                    </span>
                  </div>
                </div>

                {/* Tour Tag */}
                <div className="self-start px-3 py-1 rounded-md bg-[var(--color-sand)]/60 text-[0.75rem] font-semibold text-[var(--color-river)]">
                  {isVi ? review.tour.vi : review.tour.en}
                </div>

                {/* Review Paragraph */}
                <p className="text-[var(--color-ink)]/80 text-base sm:text-[1.05rem] leading-relaxed font-body">
                  &ldquo;{isVi ? review.content.vi : review.content.en}&rdquo;
                </p>

                {/* Customer Attached Photos (Real trip proof) */}
                {review.photos && review.photos.length > 0 && (
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-xs font-semibold tracking-wider text-[var(--color-ink)]/50 uppercase">
                      {t.photosAttached}
                    </span>
                    <div className="flex items-center gap-3 overflow-x-auto pb-1">
                      {review.photos.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setSelectedPhoto(photo)}
                          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[var(--radius-md)] overflow-hidden border border-black/10 shrink-0 hover:opacity-90 hover:scale-105 transition-all cursor-pointer group"
                        >
                          <Image
                            src={photo}
                            alt={`Photo from ${review.name}'s tour`}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Helpful counter & Authentic interaction */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-sand)] text-xs text-[var(--color-ink)]/60">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{t.helpfulText} ({review.helpfulCount})</span>
                </div>

                <span className="font-semibold text-[var(--color-river)] hover:underline cursor-pointer flex items-center gap-1">
                  <span>Google Maps</span>
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Lightbox for Customer Photos */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[85vh] aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto}
                alt="Tour feedback preview"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer backdrop-blur-md transition-colors"
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
