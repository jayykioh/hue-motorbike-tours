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
    bookThisTour: isVi ? 'Đặt Tour Này' : 'Book This Tour',
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
    haveQuestionsDesc: isVi ? 'Nhắn tin qua WhatsApp để chúng tôi tư vấn lịch trình tốt nhất cho bạn.' : 'Drop us a message on WhatsApp and we will help you figure out the best route.',
    messageUs: isVi ? 'Nhắn tin WhatsApp' : 'Message on WhatsApp'
  };
  
  // JSON-LD for TouristTrip
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": title,
    "description": description,
    "provider": {
      "@type": "TravelAgency",
      "name": "Hue Motorbike Tours",
      "telephone": "+84862391918"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <div className="bg-[var(--color-limestone)] border-b border-[var(--color-sand)] py-4 px-6 mt-16 lg:mt-24">
          <div className="max-w-[var(--container-max)] mx-auto flex items-center gap-2 text-small uppercase tracking-widest font-semibold opacity-60">
            <Link href={`/${locale}`} className="hover:text-[var(--color-terracotta)] transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/tours`} className="hover:text-[var(--color-terracotta)] transition-colors">Tours</Link>
            <span>/</span>
            <span className="text-[var(--color-ink)] truncate max-w-[200px] sm:max-w-none">{title}</span>
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
                <a href="https://wa.me/84862391918?text=Hi" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
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
            
            {/* Left Column: Itinerary & Details */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              
              {/* Highlights */}
              <div className="flex flex-col gap-6">
                <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.highlights}</h2>
                <ul className="flex flex-col gap-4">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[var(--color-terracotta)] mt-1">•</span>
                      <span className="text-body text-[var(--color-ink)] opacity-80 leading-relaxed">
                        {isVi ? highlight.vi : highlight.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

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
                        <p className="text-body text-[var(--color-ink)] opacity-70">
                          {isVi ? item.description.vi : item.description.en}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {tour.faq && tour.faq.length > 0 && (
                <div className="flex flex-col gap-8 pt-8 border-t border-[var(--color-sand)]">
                  <h2 className="text-h3 font-display text-[var(--color-ink)]">{strings.faq}</h2>
                  <div className="flex flex-col gap-6">
                    {tour.faq.map((q, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <h4 className="text-body font-semibold text-[var(--color-ink)]">
                          {isVi ? q.question.vi : q.question.en}
                        </h4>
                        <p className="text-body text-[var(--color-ink)] opacity-70">
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
              <div className="sticky top-32 bg-[var(--color-sand)] p-8 rounded-[var(--radius-md)] flex flex-col gap-6">
                <h3 className="text-h4 font-display text-[var(--color-ink)]">{strings.haveQuestions}</h3>
                <p className="text-body text-[var(--color-ink)] opacity-80">
                  {strings.haveQuestionsDesc}
                </p>
                <a 
                  href="https://wa.me/84862391918?text=Hi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full"
                >
                  {strings.messageUs}
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
