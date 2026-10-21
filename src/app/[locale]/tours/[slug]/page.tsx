import { notFound } from 'next/navigation';
import { tours, getTourBySlug } from '@/data/tours';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { LightboxProvider, ClickableImage, type LightboxItem } from '@/components/tours/ImageLightbox';
import GoogleAdsWhatsAppLink from '@/components/tours/GoogleAdsWhatsAppLink';

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

  const localizedSeo = locale === 'vi' ? tour.seo?.vi : tour.seo?.en;
  const title = localizedSeo?.title ?? (locale === 'vi' ? tour.title.vi : tour.title.en);
  const description = localizedSeo?.description ?? (locale === 'vi' ? tour.shortDescription.vi : tour.shortDescription.en);
  const canonicalUrl = `https://huebiketour.com/${locale}/tours/${slug}`;
  const ogImagePath = tour.ogImage ?? tour.image;
  const ogImage = ogImagePath.startsWith('/') ? `https://huebiketour.com${ogImagePath}` : ogImagePath;
  const imageAlt = (locale === 'vi' ? tour.imageAlt?.vi : tour.imageAlt?.en) ?? title;
  const metadataTitle = localizedSeo?.title ?? `${title} | Hue Motorbike Tours`;

  return {
    title: metadataTitle,
    description,
    ...(tour.slug === 'hue-abandoned-water-park-tour'
      ? { robots: { index: false, follow: true } }
      : {}),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `https://huebiketour.com/en/tours/${slug}`,
        'vi': `https://huebiketour.com/vi/tours/${slug}`,
        'x-default': `https://huebiketour.com/en/tours/${slug}`,
      },
    },
    openGraph: {
      title: metadataTitle,
      description,
      url: canonicalUrl,
      siteName: 'Hue Motorbike Tours',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      images: [{ url: ogImage, alt: imageAlt, ...tour.ogImageDimensions }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataTitle,
      description,
      images: [ogImage],
    },
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
  const departureText = (isVi ? tour.departure?.vi : tour.departure?.en) ?? (isVi ? 'Huế' : 'Hue');
  const priceCaption = (isVi ? tour.priceCaption?.vi : tour.priceCaption?.en) ?? (isVi ? 'Giá từ' : 'Starting from');
  const priceText = (isVi ? tour.priceLabel?.vi : tour.priceLabel?.en) ?? tour.price;
  const imageAlt = (isVi ? tour.imageAlt?.vi : tour.imageAlt?.en) ?? title;
  const bookingCta = (isVi ? tour.bookingCta?.vi : tour.bookingCta?.en);

  const strings = {
    bookThisTour: bookingCta ?? (isVi ? 'Đặt Tour Ngay' : 'Book This Tour'),
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
    gallery: isVi ? 'Hình Ảnh Thực Tế & Khách Hàng' : 'Tour Gallery & Real Moments',
    gallerySub: isVi ? 'Hình ảnh chân thực từ quần thể di tích Đại Nội, chùa chiền, làng nghề và những khoảnh khắc đáng nhớ cùng du khách.' : 'Authentic photos from the Imperial Citadel, royal heritage landmarks, craft villages, and memorable moments with our travelers.',
    insiderTips: isVi ? 'Kinh Nghiệm & Lưu Ý Tham Quan' : 'Insider Tips from Local Guides',
    relatedTours: isVi ? 'Có thể bạn cũng quan tâm' : 'You may also be interested in',
    viewRelatedTour: isVi ? 'Xem lịch trình' : 'View itinerary',
  };

  const whatsappHref = tour.whatsappLink ?? `https://wa.me/84862391918?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(title)}`;
  const relatedTours = (tour.relatedTourSlugs ?? [])
    .map((relatedSlug) => getTourBySlug(relatedSlug))
    .filter((relatedTour) => relatedTour && relatedTour.slug !== 'hue-abandoned-water-park-tour');

  // JSON-LD for TouristTrip + BreadcrumbList
  const canonicalUrl = `https://huebiketour.com/${locale}/tours/${slug}`;
  const structuredPrice = tour.priceIsQuote
    ? undefined
    : tour.price.match(/[0-9]+(?:\.[0-9]+)?/)?.[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "image": tour.image.startsWith('/') ? `https://huebiketour.com${tour.image}` : tour.image,
    "provider": { "@id": "https://huebiketour.com/#travel-agency" },
    "touristType": ["Cultural tourists", "Families", "History enthusiasts", "Sightseeing"],
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": tour.itinerary.length,
      "itemListElement": tour.itinerary.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": isVi ? item.title.vi : item.title.en,
          ...(item.description ? { "description": isVi ? item.description.vi : item.description.en } : {})
        }
      }))
    },
    ...(structuredPrice ? { "offers": {
      "@type": "Offer",
      "name": title,
      "price": structuredPrice,
      "priceCurrency": "USD",
      "url": canonicalUrl
    } } : {})
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://huebiketour.com/${locale}` },
      { "@type": "ListItem", "position": 2, "name": isVi ? "Tất cả tour" : "All Tours", "item": `https://huebiketour.com/${locale}/tours` },
      { "@type": "ListItem", "position": 3, "name": title, "item": canonicalUrl }
    ]
  };

  const faqJsonLd = tour.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tour.faq.map((q) => ({
      "@type": "Question",
      "name": isVi ? q.question.vi : q.question.en,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isVi ? q.answer.vi : q.answer.en
      }
    }))
  } : null;

  // Assemble all photos on the page for seamless lightbox navigation
  const allTourPhotos: LightboxItem[] = [];

  // 1. Hero photo
  const heroPhotoIndex = allTourPhotos.length;
  allTourPhotos.push({
    url: tour.image,
    alt: imageAlt,
    title: title,
    description: description,
    tag: isVi ? 'Toàn Cảnh Tour' : 'Tour Overview',
  });

  // 2. Itinerary photos
  const itineraryPhotoIndices: Record<number, number> = {};
  tour.itinerary.forEach((item, idx) => {
    if (item.image) {
      itineraryPhotoIndices[idx] = allTourPhotos.length;
      allTourPhotos.push({
        url: item.image,
        alt: (isVi ? item.imageAlt?.vi : item.imageAlt?.en) ?? (isVi ? item.title.vi : item.title.en),
        title: isVi ? item.title.vi : item.title.en,
        description: isVi ? item.description?.vi : item.description?.en,
        tag: isVi ? `Điểm Dừng ${idx + 1}` : `Stop ${idx + 1}`,
      });
    }
  });

  // 3. Gallery photos
  const galleryPhotoIndices: Record<number, number> = {};
  if (tour.gallery) {
    tour.gallery.forEach((img, gIdx) => {
      galleryPhotoIndices[gIdx] = allTourPhotos.length;
      allTourPhotos.push({
        url: img.url,
        alt: isVi ? img.alt.vi : img.alt.en,
        title: (isVi ? img.caption?.vi : img.caption?.en) ?? (isVi ? img.alt.vi : img.alt.en),
        description: isVi ? img.caption?.vi : img.caption?.en,
        tag: isVi ? 'Hình Ảnh Thực Tế' : 'Authentic Sights',
      });
    });
  }

  return (
    <LightboxProvider locale={locale}>
      {slug === 'hue-imperial-city-day-tour-from-da-nang-hoi-an' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-789962253"
            strategy="afterInteractive"
          />
          <Script id="google-ads-tag-aw-789962253" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-789962253');`}
          </Script>
        </>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
                {slug === 'hue-imperial-city-day-tour-from-da-nang-hoi-an' ? (
                  <GoogleAdsWhatsAppLink href={whatsappHref} className="btn-primary w-full sm:w-auto">
                    {strings.bookThisTour} →
                  </GoogleAdsWhatsAppLink>
                ) : (
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                    {strings.bookThisTour} →
                  </a>
                )}
                    <span className="text-body font-semibold">{priceText}</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-7">
              <ClickableImage
                items={allTourPhotos}
                index={heroPhotoIndex}
                buttonLabel={isVi ? 'Phóng to ảnh & chi tiết' : 'Click for full details'}
                className="rounded-[var(--radius-lg)] w-full shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-[var(--color-sand)] rounded-[var(--radius-lg)] w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </ClickableImage>
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
                    <span className="text-body font-semibold">{departureText}</span>
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
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.transportOptions}</h2>
                    <span className="text-xs text-[var(--color-terracotta)] font-medium">
                      {isVi ? '• Tùy chọn linh hoạt theo nhu cầu của bạn' : '• Flexible choice based on your preferences'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tour.transportOptions.map((opt, idx) => {
                      const isHighlighted = opt.highlight || opt.name.en.toLowerCase().includes('car') || opt.name.vi.toLowerCase().includes('ô tô');
                      return (
                        <div
                          key={idx}
                          className={`rounded-[var(--radius-md)] p-6 flex flex-col justify-between gap-4 transition-all duration-300 relative ${
                            isHighlighted
                              ? 'bg-gradient-to-br from-white via-[#faf7f2] to-[var(--color-sand)] border-2 border-[var(--color-terracotta)]/45 shadow-md ring-1 ring-[var(--color-terracotta)]/20'
                              : 'bg-[var(--color-sand)] border border-black/5 hover:border-black/10'
                          }`}
                        >
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h3 className="text-body font-semibold text-[var(--color-ink)] flex items-center gap-2.5">
                                <span className="text-xl sm:text-2xl" role="img" aria-label={isHighlighted ? 'Car' : 'Motorbike'}>
                                  {isHighlighted ? '🚗' : '🏍️'}
                                </span>
                                <span>{isVi ? opt.name.vi : opt.name.en}</span>
                              </h3>
                              {opt.badge && (
                                <span className={`text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full ${
                                  isHighlighted
                                    ? 'bg-[var(--color-terracotta)] text-white shadow-xs font-display tracking-wide'
                                    : 'bg-[var(--color-river)]/15 text-[var(--color-river)] border border-[var(--color-river)]/20'
                                }`}>
                                  {isVi ? opt.badge.vi : opt.badge.en}
                                </span>
                              )}
                            </div>
                            <p className="text-body text-[var(--color-ink)] opacity-75 leading-relaxed text-sm">
                              {isVi ? opt.description.vi : opt.description.en}
                            </p>
                          </div>

                          {opt.features && opt.features.length > 0 && (
                            <ul className="pt-3 border-t border-black/8 flex flex-col gap-2 text-xs text-[var(--color-ink)]/85">
                              {opt.features.map((f, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2">
                                  <span className="text-[var(--color-terracotta)] font-bold text-sm leading-none mt-0.5">✓</span>
                                  <span>{isVi ? f.vi : f.en}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
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
                      {item.image && (
                        <ClickableImage
                          items={allTourPhotos}
                          index={itineraryPhotoIndices[idx] ?? 0}
                          buttonLabel={isVi ? 'Xem chi tiết điểm dừng' : 'View milestone details'}
                          className="mt-4 rounded-[var(--radius-md)] w-full max-w-xl shadow-sm"
                        >
                          <div className="relative aspect-[16/9] w-full rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)]">
                            <Image
                              src={item.image}
                              alt={(isVi ? item.imageAlt?.vi : item.imageAlt?.en) ?? (isVi ? item.title.vi : item.title.en)}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 600px"
                            />
                          </div>
                        </ClickableImage>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery / Real Moments */}
              {tour.gallery && tour.gallery.length > 0 && (
                <div className="flex flex-col gap-6 pt-8 border-t border-[var(--color-sand)]">
                  <div className="flex flex-col gap-2">
                    <span className="text-small font-semibold uppercase tracking-widest text-[var(--color-terracotta)]">
                      {isVi ? 'HÌNH ẢNH THỰC TẾ' : 'AUTHENTIC SIGHTS & TRAVELERS'}
                    </span>
                    <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.gallery}</h2>
                    <p className="text-body text-[var(--color-ink)] opacity-70 leading-relaxed">
                      {strings.gallerySub}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tour.gallery.map((img, gIdx) => (
                      <figure key={gIdx} className="group relative rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-sand)] flex flex-col shadow-sm border border-[var(--color-sand)]">
                        <ClickableImage
                          items={allTourPhotos}
                          index={galleryPhotoIndices[gIdx] ?? 0}
                          buttonLabel={isVi ? 'Phóng to ảnh & chi tiết' : 'View full details'}
                          className="w-full"
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={img.url}
                              alt={isVi ? img.alt.vi : img.alt.en}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </ClickableImage>
                        {img.caption && (
                          <figcaption className="p-3 text-small text-[var(--color-ink)] opacity-80 bg-[var(--color-sand)]">
                            {isVi ? img.caption.vi : img.caption.en}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Insider Tips / Practical Local Advice */}
              {tour.insiderTips && tour.insiderTips.length > 0 && (
                <div className="flex flex-col gap-6 pt-8 border-t border-[var(--color-sand)]">
                  <div className="flex flex-col gap-2">
                    <span className="text-small font-semibold uppercase tracking-widest text-[var(--color-terracotta)]">
                      {isVi ? 'LƯU Ý THAM QUAN' : 'PRACTICAL TRAVEL TIPS'}
                    </span>
                    <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.insiderTips}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tour.insiderTips.map((tip, tIdx) => (
                      <div key={tIdx} className="p-5 rounded-[var(--radius-md)] bg-[var(--color-sand)] flex flex-col gap-2 border border-[var(--color-limestone)]">
                        <h3 className="text-body font-semibold text-[var(--color-ink)] flex items-center gap-2">
                          <span className="text-[var(--color-terracotta)]">💡</span>
                          {isVi ? tip.title.vi : tip.title.en}
                        </h3>
                        <p className="text-body text-[var(--color-ink)] opacity-75 text-sm leading-relaxed">
                          {isVi ? tip.content.vi : tip.content.en}
                        </p>
                      </div>
                    ))}
                  </div>
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

              {tour.relatedGuide && (
                <aside className="bg-[var(--color-sand)] rounded-[var(--radius-md)] p-6 sm:p-8 flex flex-col gap-3">
                  <h2 className="text-h4 font-display text-[var(--color-ink)]">
                    {isVi ? tour.relatedGuide.title.vi : tour.relatedGuide.title.en}
                  </h2>
                  <p className="text-body text-[var(--color-ink)] opacity-75 leading-relaxed">
                    {isVi ? tour.relatedGuide.description.vi : tour.relatedGuide.description.en}
                  </p>
                  <Link
                    href={`/${locale}${tour.relatedGuide.href}`}
                    className="text-body font-semibold text-[var(--color-terracotta)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-terracotta)]"
                  >
                    {isVi ? 'Đọc cẩm nang Huế' : 'Read the Hue travel guide'} →
                  </Link>
                </aside>
              )}

              {relatedTours.length > 0 && (
                <section className="flex flex-col gap-5 pt-8 border-t border-[var(--color-sand)]" aria-labelledby="related-tours-heading">
                  <h2 id="related-tours-heading" className="text-h3 font-display text-[var(--color-ink)]">{strings.relatedTours}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedTours.map((relatedTour) => relatedTour && (
                      <Link
                        key={relatedTour.slug}
                        href={`/${locale}/tours/${relatedTour.slug}`}
                        className="group overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-sand)] bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-terracotta)]"
                      >
                        <div className="relative aspect-[16/9] bg-[var(--color-sand)]">
                          <Image
                            src={relatedTour.image}
                            alt={(isVi ? relatedTour.imageAlt?.vi : relatedTour.imageAlt?.en) ?? (isVi ? relatedTour.title.vi : relatedTour.title.en)}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                          <h3 className="font-display text-h4 text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)]">
                            {isVi ? relatedTour.title.vi : relatedTour.title.en}
                          </h3>
                          <p className="text-sm text-[var(--color-ink)]/70 line-clamp-2">
                            {isVi ? relatedTour.shortDescription.vi : relatedTour.shortDescription.en}
                          </p>
                          <span className="text-sm font-semibold text-[var(--color-terracotta)]">{strings.viewRelatedTour} →</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              {tour.faq && tour.faq.length > 0 && (
                <div className="flex flex-col gap-8 pt-8 border-t border-[var(--color-sand)]">
                  <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.faq}</h2>
                  <div className="flex flex-col gap-4">
                    {tour.faq.map((q, idx) => (
                      <details key={idx} className="group border-b border-[var(--color-sand)] pb-4 last:border-none last:pb-0">
                        <summary className="flex items-center justify-between cursor-pointer list-none text-body font-semibold text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors">
                          {isVi ? q.question.vi : q.question.en}
                          <span className="text-[var(--color-terracotta)] transition-transform duration-300 group-open:rotate-180">
                            ▼
                          </span>
                        </summary>
                        <p className="mt-4 text-body text-[var(--color-ink)] opacity-70 leading-relaxed">
                          {isVi ? q.answer.vi : q.answer.en}
                        </p>
                      </details>
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
                    <p className="text-small font-semibold uppercase tracking-widest text-[var(--color-terracotta)] mb-2">{priceCaption}</p>
                    <p className="text-h3 font-display text-[var(--color-ink)]">{priceText}</p>
                  </div>
                  {slug === 'hue-imperial-city-day-tour-from-da-nang-hoi-an' ? (
                    <GoogleAdsWhatsAppLink href={whatsappHref} className="btn-primary w-full text-center">
                      {strings.bookThisTour} →
                    </GoogleAdsWhatsAppLink>
                  ) : (
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                      {strings.bookThisTour} →
                    </a>
                  )}
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
                  {slug === 'hue-imperial-city-day-tour-from-da-nang-hoi-an' ? (
                    <GoogleAdsWhatsAppLink href={whatsappHref} className="text-body font-semibold text-[var(--color-terracotta)] hover:opacity-75 transition-opacity">
                      {strings.messageUs} →
                    </GoogleAdsWhatsAppLink>
                  ) : (
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-body font-semibold text-[var(--color-terracotta)] hover:opacity-75 transition-opacity">
                      {strings.messageUs} →
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </LightboxProvider>
  );
}
