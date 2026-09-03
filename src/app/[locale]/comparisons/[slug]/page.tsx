import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons } from '@/data/comparisons';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return comparisons.flatMap((comp) => [
    { locale: 'en', slug: comp.slug },
    { locale: 'vi', slug: comp.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  
  if (!comp) return {};

  const meta = locale === 'vi' ? comp.meta.vi : comp.meta.en;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://huebiketour.com/${locale}/comparisons/${slug}`,
      languages: {
        'en': `https://huebiketour.com/en/comparisons/${slug}`,
        'vi': `https://huebiketour.com/vi/comparisons/${slug}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://huebiketour.com/${locale}/comparisons/${slug}`,
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { locale, slug } = await params;
  const isVi = locale === 'vi';
  
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) notFound();

  // JSON-LD: Article + FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": isVi ? comp.meta.vi.title : comp.meta.en.title,
        "description": isVi ? comp.meta.vi.description : comp.meta.en.description,
        "author": {
          "@type": "Organization",
          "name": "Hue Motorbike Tours",
          "url": "https://huebiketour.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": comp.features.map(f => ({
          "@type": "Question",
          "name": isVi ? `Đánh giá về ${f.featureName.vi}?` : `How is the ${f.featureName.en}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": isVi ? f.values[0].text.vi : f.values[0].text.en
          }
        }))
      }
    ]
  };

  const whatsappMessage = encodeURIComponent(
    isVi ? `Chào bạn, tôi muốn tư vấn tour xe máy Huế đi Hội An sau khi đọc bài so sánh!` : `Hi, I'd like to book the motorbike tour to Hoi An after reading your comparison guide!`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full min-h-screen pt-24 pb-20 bg-[var(--color-sand)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 w-full flex flex-col gap-12">
          
          {/* Header */}
          <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto">
            <h1 className="font-display text-[2.5rem] lg:text-[4rem] text-[var(--color-ink)] leading-tight">
              {isVi ? comp.title.vi : comp.title.en}
            </h1>
            <p className="text-body-lg text-[var(--color-ink)]/70">
              {isVi ? comp.subtitle.vi : comp.subtitle.en}
            </p>
          </div>

          {/* Feature Matrix Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 md:p-6 bg-gray-50 border-b border-gray-200 font-display text-h4 text-[var(--color-ink)] min-w-[150px]">
                      {isVi ? "Tiêu chí" : "Features"}
                    </th>
                    {comp.competitors.map((c, i) => (
                      <th key={i} className={`p-4 md:p-6 border-b border-gray-200 font-display text-h4 text-center min-w-[150px] ${c.isOurs ? 'bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)]' : 'bg-gray-50 text-[var(--color-ink)]'}`}>
                        {c.name}
                        {c.isOurs && <span className="block text-xs uppercase tracking-wider mt-1">{isVi ? "Khuyên chọn" : "Recommended"}</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comp.features.map((feature, idx) => (
                    <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="p-4 md:p-6 font-bold text-[var(--color-ink)]">
                        {isVi ? feature.featureName.vi : feature.featureName.en}
                      </td>
                      {feature.values.map((val, vIdx) => {
                        const isOurs = comp.competitors[vIdx].isOurs;
                        return (
                          <td key={vIdx} className={`p-4 md:p-6 text-center ${isOurs ? 'bg-[var(--color-terracotta)]/5' : ''}`}>
                            <div className="flex flex-col items-center gap-2">
                              {val.isPositive && !val.isNeutral && <span className="text-green-500 text-xl">✓</span>}
                              {!val.isPositive && !val.isNeutral && <span className="text-red-400 text-xl">✕</span>}
                              {val.isNeutral && <span className="text-yellow-500 text-xl">~</span>}
                              <span className="text-body text-gray-700">
                                {isVi ? val.text.vi : val.text.en}
                              </span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verdict Section */}
          <div className="bg-[var(--color-ink)] text-[var(--color-sand)] p-8 md:p-12 rounded-2xl shadow-md max-w-4xl mx-auto w-full text-center flex flex-col gap-6">
            <h3 className="font-display text-h2 text-[var(--color-terracotta)]">
              {isVi ? "Kết Luận (Verdict)" : "The Verdict"}
            </h3>
            <p className="text-body-lg leading-relaxed">
              {isVi ? comp.verdict.vi.replace(/\*\*(.*?)\*\*/g, '$1') : comp.verdict.en.replace(/\*\*(.*?)\*\*/g, '$1')}
            </p>
            <div className="pt-4">
              <a 
                href={`https://wa.me/84862391918?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block py-4 px-10"
              >
                {isVi ? "Đặt Tour Xe Máy Ngay" : "Book Your Motorbike Tour Now"}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}