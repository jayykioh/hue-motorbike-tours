import { notFound } from 'next/navigation';
import { tours, getTourBySlug } from '@/data/tours';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ['en', 'vi'];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const tour of tours) {
      params.push({ locale, slug: tour.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {};
  }

  const title = locale === 'vi' ? tour.title.vi : tour.title.en;
  const description = locale === 'vi' ? tour.shortDescription.vi : tour.shortDescription.en;

  return {
    title: `${title} | Hue Motorbike Tours`,
    description: description,
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const isVi = locale === 'vi';
  const title = isVi ? tour.title.vi : tour.title.en;
  const description = isVi ? tour.shortDescription.vi : tour.shortDescription.en;
  const transportText = isVi ? tour.transport.vi : tour.transport.en;

  const strings = {
    bookThisTour: isVi ? 'Đặt Tour Ngay' : 'Book This Tour',
    duration: isVi ? 'Thời Gian' : 'Duration',
    start: isVi ? 'Khởi Hành' : 'Start',
    transport: isVi ? 'Di Chuyển' : 'Transport',
    style: isVi ? 'Phong Cách' : 'Style',
    styleValue: isVi ? 'Khám phá / Lịch sử' : 'Culture / History',
    whyThisTrip: isVi ? 'Tại sao chọn chuyến đi này?' : 'Why this trip?',
    highlights: isVi ? 'Điểm nổi bật' : 'Highlights',
    itinerary: isVi ? 'Lịch trình dự kiến' : 'Itinerary',
    faq: isVi ? 'Câu hỏi thường gặp' : 'FAQ',
    haveQuestions: isVi ? 'Bạn có câu hỏi?' : 'Have questions?',
    haveQuestionsDesc: isVi ? 'Nhắn tin qua WhatsApp để chúng tôi tư vấn lịch trình tốt nhất cho bạn.' : 'Drop us a message on WhatsApp and we\'ll help you plan the perfect trip.',
    messageUs: isVi ? 'Nhắn tin WhatsApp' : 'Message on WhatsApp',
    transportOptions: isVi ? 'Phương thức di chuyển' : 'Transport Options',
    whyBookWithUs: isVi ? 'Tại sao chọn chúng tôi?' : 'Why Book With Us',
    included: isVi ? 'Bao gồm' : 'What\'s Included',
    notIncluded: isVi ? 'Không bao gồm' : 'Not Included',
    optionalAddons: isVi ? 'Tuỳ chọn thêm' : 'Optional Add-ons',
  };

  const whatsappHref = tour.whatsappLink ?? `https://wa.me/84899215366?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(title)}`;

  // JSON-LD for TouristTrip
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": title,
    "description": description,
    "provider": {
      "@type": "TravelAgency",
      "name": "Hue Motorbike Tours",
      "telephone": "+84899215366"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb / Back Navigation */}
        <div className="bg-[var(--color-limestone)] py-4 px-6 pt-20 lg:pt-24 border-b border-[var(--color-sand)]">
          <div className="max-w-[var(--container-max)] mx-auto flex items-center gap-4">
            <Link
              href={`/${locale}/tours`}
              className="flex items-center gap-2 text-small font-semibold uppercase tracking-widest text-[var(--color-ink)] opacity-60 hover:opacity-100 hover:text-[var(--color-terracotta)] transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {isVi ? 'Tất Cả Tour' : 'All Tours'}
            </Link>
            <span className="w-px h-4 bg-[var(--color-ink)] opacity-20"></span>
            <span className="text-small font-semibold tracking-wide text-[var(--color-ink)] truncate opacity-90">
              {title}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[var(--color-limestone)] py-12 lg:py-24 px-6">
          <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h1 className="text-h2 lg:text-h1 font-display text-[var(--color-ink)] mb-6">{title}</h1>
              <p className="text-body-lg text-[var(--color-ink)] opacity-80 mb-10 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                  {strings.bookThisTour} →
                </a>
                <span className="text-body font-semibold">{tour.price}</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] bg-[var(--color-sand)] rounded-[var(--radius-lg)] w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Rail */}
        <section className="bg-[var(--color-sand)] py-8 px-6 text-[var(--color-ink)] border-y border-opacity-20 border-[var(--color-ink)]">
          <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-small font-semibold uppercase tracking-widest opacity-60">{strings.duration}</span>
              <span className="text-body font-semibold">{tour.duration}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-small font-semibold uppercase tracking-widest opacity-60">{strings.start}</span>
              <span className="text-body font-semibold">Hue</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-small font-semibold uppercase tracking-widest opacity-60">{strings.transport}</span>
              <span className="text-body font-semibold">{transportText}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-small font-semibold uppercase tracking-widest opacity-60">{strings.style}</span>
              <span className="text-body font-semibold">{strings.styleValue}</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="bg-[var(--color-limestone)] py-20 px-6">
          <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left Column: Details */}
            <div className="lg:col-span-8 flex flex-col gap-16">

              {/* Highlights */}
              <div className="flex flex-col gap-6">
                <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.highlights}</h2>
                <ul className="flex flex-col gap-4">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[var(--color-terracotta)] mt-0.5 text-lg leading-tight">✓</span>
                      <span className="text-body text-[var(--color-ink)] opacity-80 leading-relaxed">
                        {isVi ? highlight.vi : highlight.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transport Options */}
              {tour.transportOptions && tour.transportOptions.length > 0 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.transportOptions}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tour.transportOptions.map((opt, idx) => (
                      <div key={idx} className="bg-[var(--color-sand)] rounded-[var(--radius-md)] p-6 flex flex-col gap-3">
                        <h3 className="text-body font-semibold text-[var(--color-ink)]">
                          {isVi ? opt.name.vi : opt.name.en}
                        </h3>
                        <p className="text-body text-[var(--color-ink)] opacity-70 leading-relaxed">
                          {isVi ? opt.description.vi : opt.description.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Itinerary */}
              <div className="flex flex-col gap-8">
                <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.itinerary}</h2>
                <div className="flex flex-col border-l-2 border-[var(--color-sand)] ml-2">
                  {tour.itinerary.map((item, idx) => (
                    <div key={idx} className="relative pl-8 pb-10 last:pb-0">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[var(--color-terracotta)] ring-4 ring-[var(--color-limestone)]"></div>

                      <h3 className="text-h4 font-display text-[var(--color-ink)] mb-2">
                        {isVi ? item.title.vi : item.title.en}
                      </h3>
                      {item.description && (
                        <p className="text-body text-[var(--color-ink)] opacity-70 leading-relaxed">
                          {isVi ? item.description.vi : item.description.en}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              {(tour.inclusions || tour.exclusions) && (
                <div className="flex flex-col gap-6 pt-8 border-t border-[var(--color-sand)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tour.inclusions && tour.inclusions.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <h3 className="text-body font-semibold uppercase tracking-widest text-[var(--color-ink)] opacity-60">{strings.included}</h3>
                        <ul className="flex flex-col gap-3">
                          {tour.inclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-green-600 font-bold mt-0.5">✓</span>
                              <span className="text-body text-[var(--color-ink)] opacity-80">{isVi ? item.vi : item.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tour.exclusions && tour.exclusions.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <h3 className="text-body font-semibold uppercase tracking-widest text-[var(--color-ink)] opacity-60">{strings.notIncluded}</h3>
                        <ul className="flex flex-col gap-3">
                          {tour.exclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-[var(--color-terracotta)] font-bold mt-0.5">✗</span>
                              <span className="text-body text-[var(--color-ink)] opacity-80">{isVi ? item.vi : item.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Optional Add-ons */}
              {tour.optionalAddons && tour.optionalAddons.length > 0 && (
                <div className="flex flex-col gap-4 pt-4">
                  <h3 className="text-body font-semibold uppercase tracking-widest text-[var(--color-ink)] opacity-60">{strings.optionalAddons}</h3>
                  <ul className="flex flex-col gap-3">
                    {tour.optionalAddons.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[var(--color-terracotta)] mt-0.5">+</span>
                        <span className="text-body text-[var(--color-ink)] opacity-80">{isVi ? item.vi : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Book With Us */}
              {tour.whyBookWithUs && tour.whyBookWithUs.length > 0 && (
                <div className="flex flex-col gap-6 pt-8 border-t border-[var(--color-sand)]">
                  <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.whyBookWithUs}</h2>
                  <ul className="flex flex-col gap-4">
                    {tour.whyBookWithUs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[var(--color-terracotta)] font-bold text-lg mt-0.5">✓</span>
                        <span className="text-body text-[var(--color-ink)] opacity-80 leading-relaxed">
                          {isVi ? item.vi : item.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ */}
              {tour.faq && tour.faq.length > 0 && (
                <div className="flex flex-col gap-8 pt-8 border-t border-[var(--color-sand)]">
                  <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.faq}</h2>
                  <div className="flex flex-col gap-8">
                    {tour.faq.map((q, idx) => (
                      <div key={idx} className="flex flex-col gap-2 pb-8 border-b border-[var(--color-sand)] last:border-none last:pb-0">
                        <h4 className="text-body font-semibold text-[var(--color-ink)]">
                          {isVi ? q.question.vi : q.question.en}
                        </h4>
                        <p className="text-body text-[var(--color-ink)] opacity-70 leading-relaxed">
                          {isVi ? q.answer.vi : q.answer.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Sticky Booking Widget */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 flex flex-col gap-4">
                {/* Booking CTA card */}
                <div className="bg-[var(--color-sand)] p-8 rounded-[var(--radius-md)] flex flex-col gap-6">
                  <div>
                    <p className="text-small font-semibold uppercase tracking-widest text-[var(--color-terracotta)] mb-2">{isVi ? 'Giá từ' : 'Starting from'}</p>
                    <p className="text-h3 font-display text-[var(--color-ink)]">{tour.price}</p>
                  </div>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    {strings.bookThisTour} →
                  </a>
                  <p className="text-small text-[var(--color-ink)] opacity-60 text-center leading-relaxed">
                    {isVi ? 'Nhắn tin qua WhatsApp — phản hồi trong vòng vài tiếng.' : 'Book via WhatsApp — we reply within a few hours.'}
                  </p>
                </div>

                {/* Questions card */}
                <div className="bg-[var(--color-limestone)] border border-[var(--color-sand)] p-6 rounded-[var(--radius-md)] flex flex-col gap-4">
                  <h3 className="text-h4 font-display text-[var(--color-ink)]">{strings.haveQuestions}</h3>
                  <p className="text-body text-[var(--color-ink)] opacity-70 leading-relaxed">
                    {strings.haveQuestionsDesc}
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body font-semibold text-[var(--color-terracotta)] hover:opacity-75 transition-opacity"
                  >
                    {strings.messageUs} →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
