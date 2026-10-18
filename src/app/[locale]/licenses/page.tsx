import type { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === 'vi'
      ? 'Giấy Phép Kinh Doanh & Lữ Hành | Hue Motorbike Tours'
      : 'Business Registration & Tour Operator License | Hue Motorbike Tours';

  const description =
    locale === 'vi'
      ? 'Thông tin pháp lý và giấy phép hoạt động của Hue Motorbike Tours, đảm bảo trải nghiệm du lịch an toàn, uy tín và hợp pháp tại Việt Nam.'
      : 'Legal information and operating licenses for Hue Motorbike Tours, ensuring a safe, trusted, and fully legal travel experience in Vietnam.';

  const canonicalUrl = `https://huebiketour.com/${locale}/licenses`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: 'https://huebiketour.com/en/licenses',
        vi: 'https://huebiketour.com/vi/licenses',
        'x-default': 'https://huebiketour.com/en/licenses',
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
  };
}

export default async function LicensesPage({ params }: Props) {
  const { locale } = await params;
  const isVi = locale === 'vi';

  const strings = {
    title: isVi ? 'Giấy Phép Kinh Doanh' : 'Business & Tour Operator Licenses',
    subtitle: isVi
      ? 'Sự an toàn và trải nghiệm của bạn là ưu tiên hàng đầu của chúng tôi. Dưới đây là các giấy phép chứng nhận Hue Motorbike Tours là một đơn vị tổ chức tour hợp pháp và uy tín tại Việt Nam.'
      : 'Your safety and experience are our top priorities. Below are the official licenses certifying Hue Motorbike Tours as a legitimate and trusted tour operator in Vietnam.',
    bizRegTitle: isVi ? 'Giấy Chứng Nhận Đăng Ký Kinh Doanh' : 'Business Registration Certificate',
    bizRegDesc: isVi
      ? 'Được cấp bởi Sở Kế hoạch và Đầu tư tỉnh Thừa Thiên Huế, chứng nhận hoạt động doanh nghiệp hợp pháp.'
      : 'Issued by the Department of Planning and Investment of Thua Thien Hue Province, certifying legal business operations.',
    tourOpTitle: isVi ? 'Giấy Phép Kinh Doanh Dịch Vụ Lữ Hành' : 'Tour Operator License',
    tourOpDesc: isVi
      ? 'Chứng nhận đủ điều kiện kinh doanh dịch vụ lữ hành, tuân thủ nghiêm ngặt các tiêu chuẩn về an toàn du lịch và chất lượng dịch vụ.'
      : 'Certifying our eligibility to operate travel services, adhering strictly to tourism safety and service quality standards.',
    placeholderLabel: isVi ? 'Đang cập nhật hình ảnh...' : 'Image coming soon...',
  };

  // Structured Data to boost E-E-A-T and Trust signals
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Hue Motorbike Tours",
    "url": "https://huebiketour.com",
    "logo": "https://huebiketour.com/photo/logo.jpeg",
    "image": "https://huebiketour.com/photo/logo.jpeg",
    "telephone": "+84862391918",
    "email": "info@huebiketour.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hue",
      "addressRegion": "Thua Thien Hue",
      "addressCountry": "VN"
    },
    "sameAs": [
      "https://www.facebook.com/Vietnamonmotorbike"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-1 flex flex-col pt-24 lg:pt-32 pb-20 bg-[var(--color-limestone)] min-h-screen">
        <div className="max-w-[var(--container-max)] mx-auto px-6 w-full">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-h2 lg:text-h1 font-display text-[var(--color-ink)] mb-6">
              {strings.title}
            </h1>
            <p className="text-body-lg text-[var(--color-ink)] opacity-80 leading-relaxed">
              {strings.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Business Registration */}
            <div className="flex flex-col gap-6">
              <div className="bg-[var(--color-sand)] border border-[var(--color-ink)]/10 rounded-[var(--radius-lg)] aspect-[3/4] flex items-center justify-center relative overflow-hidden group p-8 shadow-sm">
                {/* Placeholder for License Image */}
                <div className="flex flex-col items-center gap-4 opacity-50 text-[var(--color-ink)]">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-semibold text-small uppercase tracking-widest text-center">{strings.placeholderLabel}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-h4 font-display text-[var(--color-ink)]">{strings.bizRegTitle}</h2>
                <p className="text-body text-[var(--color-ink)] opacity-70">{strings.bizRegDesc}</p>
              </div>
            </div>

            {/* Tour Operator License */}
            <div className="flex flex-col gap-6">
              <div className="bg-[var(--color-sand)] border border-[var(--color-ink)]/10 rounded-[var(--radius-lg)] aspect-[3/4] flex items-center justify-center relative overflow-hidden group p-8 shadow-sm">
                {/* Placeholder for License Image */}
                <div className="flex flex-col items-center gap-4 opacity-50 text-[var(--color-ink)]">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-semibold text-small uppercase tracking-widest text-center">{strings.placeholderLabel}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-h4 font-display text-[var(--color-ink)]">{strings.tourOpTitle}</h2>
                <p className="text-body text-[var(--color-ink)] opacity-70">{strings.tourOpDesc}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
