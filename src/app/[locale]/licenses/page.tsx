import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isVi = locale === 'vi';
  const title = isVi
    ? 'Thông Tin Pháp Lý & Đăng Ký Kinh Doanh | Hue Motorbike Tours'
    : 'Business & Legal Information | Hue Motorbike Tours';
  const description = isVi
    ? 'Liên hệ Hue Motorbike Tours để yêu cầu thông tin pháp lý và giấy tờ đăng ký đơn vị tổ chức tour.'
    : 'Contact Hue Motorbike Tours to request current business registration and tour operator documentation.';
  const canonicalUrl = `https://huebiketour.com/${locale}/licenses`;

  return {
    title,
    description,
    robots: { index: false, follow: true },
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

  const title = isVi ? 'Thông Tin Pháp Lý & Đăng Ký Kinh Doanh' : 'Business & Legal Information';
  const description = isVi
    ? 'Trang này hiện chưa đăng tải bản sao giấy tờ đăng ký kinh doanh hoặc giấy phép lữ hành. Vui lòng liên hệ để yêu cầu thông tin hiện hành trước khi đặt tour.'
    : 'Copies of business registration and tour operator documents are not published on this page yet. Contact us to request current documentation before booking.';
  const contactLabel = isVi ? 'Liên hệ Hue Motorbike Tours' : 'Contact Hue Motorbike Tours';

  return (
    <div className="flex-1 flex flex-col pt-24 lg:pt-32 pb-20 bg-[var(--color-limestone)] min-h-screen">
      <div className="max-w-[var(--container-max)] mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-h2 lg:text-h1 font-display text-[var(--color-ink)] mb-6">
            {title}
          </h1>
          <p className="text-body-lg text-[var(--color-ink)] opacity-80 leading-relaxed">
            {description}
          </p>
          <div className="mt-8">
            <h2 className="text-h4 font-display text-[var(--color-ink)] mb-3">
              {contactLabel}
            </h2>
            <a
              href="mailto:info@huebiketour.com"
              className="text-body font-semibold text-[var(--color-terracotta)] underline underline-offset-4"
            >
              info@huebiketour.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
