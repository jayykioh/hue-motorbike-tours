import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isVi = locale === 'vi';

  const title = isVi
    ? 'Kinh Nghiệm Du Lịch Công Viên Bỏ Hoang Hồ Thuỷ Tiên Huế'
    : 'Ultimate Guide to Ho Thuy Tien Abandoned Water Park Hue';

  const description = isVi
    ? 'Khám phá công viên nước bỏ hoang ma mị nhất Huế. Kinh nghiệm đi lại, giá vé, an toàn và những góc chụp ảnh rồng khổng lồ đẹp nhất tại Hồ Thuỷ Tiên.'
    : 'Discover Hue\'s eerie abandoned water park. How to get there, safety tips, and the best photo spots at the iconic Ho Thuy Tien dragon.';

  const canonicalUrl = `https://huebiketour.com/${locale}/about-hue/ho-thuy-tien`;

  return {
    title,
    description,
    keywords: isVi
      ? ['hồ thuỷ tiên huế', 'công viên bỏ hoang huế', 'kinh nghiệm đi hồ thuỷ tiên', 'du lịch huế', 'chụp ảnh hồ thuỷ tiên', 'địa điểm ma mị huế']
      : ['ho thuy tien hue', 'abandoned water park hue', 'hue dragon park', 'urbex vietnam', 'things to do in hue', 'hue hidden gems'],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: 'https://huebiketour.com/en/about-hue/ho-thuy-tien',
        vi: 'https://huebiketour.com/vi/about-hue/ho-thuy-tien',
        'x-default': 'https://huebiketour.com/en/about-hue/ho-thuy-tien',
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: '/photo/haivanpass.jpg', // Placeholder for actual dragon image
          width: 1200,
          height: 800,
          alt: isVi ? 'Toàn cảnh công viên nước bỏ hoang Hồ Thuỷ Tiên' : 'Panoramic view of Ho Thuy Tien abandoned water park',
        },
      ],
    },
  };
}

export default async function HoThuyTienGuide({ params }: Props) {
  const { locale } = await params;
  const isVi = locale === 'vi';

  const title = isVi
    ? 'Cẩm Nang Khám Phá Công Viên Bỏ Hoang Hồ Thuỷ Tiên'
    : 'The Ultimate Guide to Ho Thuy Tien Abandoned Water Park';

  // Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": isVi
      ? "Kinh nghiệm chi tiết nhất để khám phá công viên nước bỏ hoang Hồ Thuỷ Tiên ở Huế an toàn và có những bức ảnh tuyệt đẹp."
      : "The most detailed guide to exploring the Ho Thuy Tien abandoned water park in Hue safely and getting the best photos.",
    "image": "https://huebiketour.com/photo/haivanpass.jpg",
    "author": {
      "@type": "Person",
      "name": "Mai Anh Tu",
      "url": "https://huebiketour.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hue Motorbike Tours",
      "logo": {
        "@type": "ImageObject",
        "url": "https://huebiketour.com/photo/logo.jpeg"
      }
    }
  };

  // FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isVi ? "Công viên Hồ Thuỷ Tiên nằm ở đâu?" : "Where is Ho Thuy Tien located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isVi 
            ? "Hồ Thuỷ Tiên nằm trên đồi Thiên An, xã Thuỷ Bằng, cách trung tâm thành phố Huế khoảng 10km về phía Tây Nam." 
            : "Ho Thuy Tien is located on Thien An Hill, Thuy Bang Commune, about 10km southwest of Hue city center."
        }
      },
      {
        "@type": "Question",
        "name": isVi ? "Vào Hồ Thuỷ Tiên có bị cấm không?" : "Is it illegal to enter Ho Thuy Tien?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isVi 
            ? "Công viên đã chính thức đóng cửa và có biển cấm. Tuy nhiên, du khách vẫn thường xuyên ghé thăm." 
            : "The park is officially closed with 'no trespassing' signs. However, visitors still frequently explore the site."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="flex-1 flex flex-col pt-24 lg:pt-32 pb-20 bg-[var(--color-limestone)] min-h-screen">
        <article className="max-w-4xl mx-auto px-6 w-full flex flex-col gap-12">
          
          {/* Header */}
          <header className="flex flex-col gap-6 text-center">
            <Link 
              href={`/${locale}/about-hue`}
              className="text-small font-semibold uppercase tracking-widest text-[var(--color-terracotta)] hover:opacity-75 transition-opacity"
            >
              ← {isVi ? 'Về Huế' : 'About Hue'}
            </Link>
            <h1 className="text-h2 lg:text-h1 font-display text-[var(--color-ink)]">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-small text-[var(--color-ink)] opacity-60">
              <span>By Mai Anh Tu</span>
              <span>•</span>
              <span>{isVi ? 'Cập nhật 2026' : 'Updated 2026'}</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-sand)]">
            <Image
              src="/photo/haivanpass.jpg" // Using existing image as placeholder
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-headings:font-display prose-headings:text-[var(--color-ink)] prose-p:text-[var(--color-ink)] prose-p:opacity-80 prose-a:text-[var(--color-terracotta)] max-w-none">
            {isVi ? (
              <>
                <p>Nằm ẩn mình giữa những đồi thông bạt ngàn của ngọn đồi Thiên An, <strong>Hồ Thuỷ Tiên</strong> từng là một công viên nước đầy hứa hẹn của Cố Đô Huế. Giờ đây, nơi này đã bị thiên nhiên "nuốt chửng" và trở thành một trong những địa điểm khám phá (urbex) nổi tiếng và ma mị nhất thế giới, từng xuất hiện trên Huffington Post.</p>
                
                <h2>1. Hồ Thuỷ Tiên Nằm Ở Đâu?</h2>
                <p>Công viên toạ lạc tại xã Thuỷ Bằng, thị xã Hương Thuỷ, cách trung tâm thành phố Huế khoảng 10km về phía Tây Nam. Đường lên đồi Thiên An rợp bóng thông xanh, không khí mát mẻ, rất lý tưởng để di chuyển bằng xe máy.</p>

                <h2>2. Câu Chuyện Lịch Sử Khởi Đầu và Bỏ Hoang</h2>
                <p>Mở cửa đón khách từ năm 2004 khi vẫn chưa hoàn thiện, công viên trị giá 3 triệu USD này không đạt được thành công như mong đợi và nhanh chóng đóng cửa chỉ vài năm sau đó. Kể từ đó, rêu phong, cây rừng và sự hoang tàn đã biến nơi đây thành một vương quốc bị lãng quên.</p>

                <h2>3. Những Góc Chụp Ảnh Đỉnh Nhất</h2>
                <ul>
                  <li><strong>Đầu Rồng Khổng Lồ:</strong> Biểu tượng của công viên. Bạn có thể leo lên miệng rồng để ngắm nhìn toàn cảnh hồ nước tuyệt đẹp bên dưới.</li>
                  <li><strong>Khu Cầu Trượt Bị Bỏ Hoang:</strong> Những đường ống trượt phủ đầy rêu phong nằm lọt thỏm giữa rừng cây, mang lại cảm giác rùng rợn như trong phim kinh dị.</li>
                  <li><strong>Khu Sân Khấu Nhạc Nước:</strong> Nơi từng có hàng ngàn chỗ ngồi, nay chỉ còn lại những hàng ghế đá mọc đầy cỏ dại.</li>
                </ul>

                <h2>4. Kinh Nghiệm Đi Lại và An Toàn</h2>
                <p>Vì đây là khu vực bị bỏ hoang, bạn cần cẩn thận với những mảnh kính vỡ, bậc thang rêu trơn trượt và cỏ dại. Luôn đi giày bít mũi và nên đi cùng người dân địa phương để biết rõ đường vào.</p>
              </>
            ) : (
              <>
                <p>Hidden amidst the vast pine forests of Thien An Hill, <strong>Ho Thuy Tien</strong> was once a promising water park in the Imperial City of Hue. Today, reclaimed by nature, it has become one of the most famous and eerie urban exploration (urbex) destinations in the world, even featured on the Huffington Post.</p>
                
                <h2>1. Where is Ho Thuy Tien?</h2>
                <p>The park is located in Thuy Bang Commune, Huong Thuy Town, about 10km southwest of Hue city center. The winding road up Thien An Hill is shaded by lush green pines, making it an ideal, refreshing motorbike ride.</p>

                <h2>2. The Story of its Rise and Fall</h2>
                <p>Opened to the public in 2004 while still incomplete, this $3 million park failed to achieve the expected success and shut down just a few years later. Since then, moss, jungle vines, and decay have transformed it into a forgotten kingdom.</p>

                <h2>3. The Best Photo Spots</h2>
                <ul>
                  <li><strong>The Giant Dragon:</strong> The icon of the park. You can climb up inside the dragon's body to its mouth for a panoramic view of the serene lake below.</li>
                  <li><strong>The Abandoned Water Slides:</strong> Moss-covered tubes emerging from the overgrown jungle, giving off a thrilling, post-apocalyptic movie vibe.</li>
                  <li><strong>The Amphitheater:</strong> Once seating thousands, now just rows of stone benches conquered by weeds and nature.</li>
                </ul>

                <h2>4. Safety and Access Tips</h2>
                <p>Since this is an abandoned site, beware of broken glass, slippery mossy steps, and overgrown paths. Always wear closed-toe shoes and consider going with a local guide who knows the safest routes in.</p>
              </>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-[var(--color-sand)] p-8 lg:p-12 rounded-[var(--radius-lg)] border border-[var(--color-ink)]/10 flex flex-col md:flex-row items-center gap-8 md:justify-between mt-8">
            <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
              <h3 className="text-h3 font-display text-[var(--color-ink)]">
                {isVi ? 'Khám phá Hồ Thuỷ Tiên cùng chúng tôi' : 'Explore Ho Thuy Tien with us'}
              </h3>
              <p className="text-body text-[var(--color-ink)] opacity-70">
                {isVi 
                  ? 'Trải nghiệm chuyến đi xe máy an toàn cùng tài xế địa phương dày dặn kinh nghiệm, khám phá những góc khuất ma mị nhất mà không lo lạc đường.' 
                  : 'Experience a safe motorbike ride with experienced local drivers. Discover the most eerie corners without worrying about getting lost or access issues.'}
              </p>
            </div>
            <Link 
              href={`/${locale}/tours/hue-abandoned-water-park-tour`}
              className="btn-primary whitespace-nowrap"
            >
              {isVi ? 'Xem Chi Tiết Tour →' : 'View Tour Details →'}
            </Link>
          </div>

        </article>
      </div>
    </>
  );
}
