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
    ? 'Hồ Thuỷ Tiên Huế: Cẩm Nang Tham Quan Công Viên Bỏ Hoang'
    : 'Ho Thuy Tien Abandoned Water Park in Hue: Visitor Guide';

  const description = isVi
    ? 'Thông tin đường đi, tình trạng lối vào và lưu ý an toàn khi tham quan khu công viên nước Hồ Thuỷ Tiên ở Huế.'
    : 'Find Ho Thuy Tien Water Park in Hue, with directions, current access notes and safety considerations for visiting the abandoned site.';

  const canonicalUrl = `https://huebiketour.com/${locale}/about-hue/ho-thuy-tien`;

  return {
    title,
    description,
    robots: { index: false, follow: true },
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
          url: '/photo/hothuytien-abondandedwaterpark.jpg',
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
    ? 'Hồ Thuỷ Tiên Huế: Thông Tin Tham Quan Khu Công Viên Nước Cũ'
    : 'Ho Thuy Tien Hue: Visitor Information for the Former Water Park';

  // Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": isVi
      ? "Thông tin vị trí và lưu ý kiểm tra quyền tham quan khu công viên nước Hồ Thuỷ Tiên cũ ở Huế."
      : "Location information and access considerations for the former Ho Thuy Tien water park site in Hue.",
    "image": "https://huebiketour.com/photo/hothuytien-abondandedwaterpark.jpg",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />

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
              src="/photo/hothuytien-abondandedwaterpark.jpg"
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
                <p><strong>Hồ Thuỷ Tiên</strong> là khu công viên nước cũ gần đồi Thiên An ở thành phố Huế. Nhiều bài viết du lịch cũ mô tả nơi này như một điểm khám phá bỏ hoang; tình trạng hoạt động và quyền vào khuôn viên có thể thay đổi.</p>
                
                <h2>1. Hồ Thuỷ Tiên Nằm Ở Đâu?</h2>
                <p>Khu vực nằm gần đồi Thiên An, thuộc phường Thủy Xuân, thành phố Huế. Trước khi đến, hãy xác nhận đường vào và quyền tham quan với đơn vị quản lý hoặc cơ quan địa phương. Tên đơn vị hành chính có thể khác trong các hướng dẫn cũ.</p>

                <h2>2. Câu Chuyện Lịch Sử Khởi Đầu và Bỏ Hoang</h2>
                <p>Khu công viên từng được xây dựng như một điểm vui chơi giải trí nhưng không tiếp tục hoạt động theo kế hoạch ban đầu. Hãy kiểm tra thông tin vận hành hiện tại trước khi lên lịch; trang này không xác nhận khu vực đang mở cửa.</p>

                <h2>3. Lưu Ý Khi Tham Quan</h2>
                <ul>
                  <li>Chỉ quan sát từ khu vực được phép tiếp cận.</li>
                  <li>Không vượt rào chắn, vào công trình đóng cửa hoặc trèo lên kết cấu cũ.</li>
                  <li>Tuân thủ hướng dẫn tại chỗ và không mặc định rằng địa điểm mở cửa cho khách.</li>
                </ul>

                <h2>4. Kinh Nghiệm Đi Lại và An Toàn</h2>
                <p>Không vào khu vực đóng cửa hoặc có biển hạn chế tiếp cận. Xác nhận quy định tham quan trước khi đi và cân nhắc hủy nếu không có xác nhận rõ ràng về quyền vào cửa.</p>
              </>
            ) : (
              <>
                <p><strong>Ho Thuy Tien</strong> is a former water park site near Thien An Hill in Hue City. Older travel articles often describe it as an abandoned attraction; current operations and visitor access may have changed.</p>
                
                <h2>1. Where is Ho Thuy Tien?</h2>
                <p>The site is near Thien An Hill in Thuy Xuan Ward, Hue City. Before traveling, confirm the current route and visitor permission with the site operator or local authorities. Older guides may use a previous administrative name.</p>

                <h2>2. The Story of its Rise and Fall</h2>
                <p>The water park was developed as an entertainment site but did not continue operating as originally planned. Check current status before making plans; this guide does not confirm that the site is open to visitors.</p>

                <h2>3. Visitor Access and Safety</h2>
                <ul>
                  <li>View the site only from areas where visitors are permitted.</li>
                  <li>Do not cross barriers, enter closed structures, or climb on old installations.</li>
                  <li>Follow on-site directions and do not assume the location is open to the public.</li>
                </ul>

                <h2>4. Safety and Access Tips</h2>
                <p>Do not enter closed or restricted areas. Confirm visitor access before traveling, and cancel if permission to enter is unclear.</p>
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
