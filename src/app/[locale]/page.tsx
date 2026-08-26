import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ImmersiveExperience from '@/components/home/ImmersiveExperience';
import QuickIntro from '@/components/home/QuickIntro';
import FeaturedTours from '@/components/home/FeaturedTours';
import BrandStatement from '@/components/home/BrandStatement';
import WhyUs from '@/components/home/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';
import FinalCta from '@/components/home/FinalCta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'vi' 
    ? 'Hue Motorbike Tours | Trải nghiệm du lịch miền Trung chân thực' 
    : 'Hue Motorbike Tours | Authentic Guided Tours in Hue, Vietnam';
    
  const description = locale === 'vi'
    ? 'Khám phá Huế, Đèo Hải Vân và Hội An với những hướng dẫn viên địa phương. Tour xe máy, ẩm thực bản địa và di sản văn hóa. Đánh giá 5 sao từ khách quốc tế.'
    : 'Explore Hue, Hai Van Pass, and Hoi An with expert local guides. Motorbike tours, authentic food experiences, and UNESCO heritage sites. 5-star rated by international travelers.';

  return {
    title,
    description,
    keywords: locale === 'vi' 
      ? ['tour Huế', 'xe máy Huế', 'đèo Hải Vân', 'du lịch miền Trung']
      : ['Hue tour', 'Hai Van Pass motorbike', 'Hue travel', 'Vietnam motorbike tour', 'Hue food tour', 'DMZ tour', 'Central Vietnam travel'],
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  
  // Rich JSON-LD: TravelAgency + AggregateRating + Reviews
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Hue Motorbike Tours",
    "description": "Expert-guided motorbike tours through Hue, the Hai Van Pass, and Central Vietnam. Local food experiences, UNESCO heritage sites, and authentic cultural immersion.",
    "telephone": "+84899215366",
    "email": "info@huemotorbiketours.com",
    "url": "https://huemotorbiketours.com",
    "areaServed": ["Hue", "Thua Thien Hue", "Da Nang", "Hoi An", "Quang Tri"],
    "founder": {
      "@type": "Person",
      "name": "Mai Anh Tu"
    },
    "priceRange": "$$",
    "currenciesAccepted": "USD, VND",
    "paymentAccepted": "Cash, Bank Transfer",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah Mitchell" },
        "datePublished": "2025-03-12",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Absolutely the best day of our entire Vietnam trip. Tu took us through backroads we never would have found on our own, stopped at a tiny bun bo Hue shop where the owner knew him by name, and made sure we felt completely safe the whole time.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Marco Bianchi" },
        "datePublished": "2024-12-20",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "I'm a seasoned traveller and rarely leave reviews, but this deserves one. The team's local knowledge is extraordinary. Deeply authentic.",
        "publisher": { "@type": "Organization", "name": "TripAdvisor" }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero underlaps the transparent header — no top padding needed */}
      <div className="flex-1 flex flex-col w-full -mt-16">
        {/* 1. Hero — full viewport */}
        <Hero />
        {/* 2. Immersive Scroll Expand Effect */}
        <ImmersiveExperience />
        {/* 3. Quick intro — Discover Hue */}
        <QuickIntro />
        {/* 4. Featured tours list */}
        <FeaturedTours />
        {/* 5. About — Mai Anh Tu story */}
        <BrandStatement />
        {/* 6. Why ride with us — 3 pillars */}
        <WhyUs />
        {/* 7. Testimonials — social proof + SEO reviews */}
        <Testimonials />
        {/* 8. Contact + Google Maps */}
        <ContactSection />
        {/* 9. Final WhatsApp CTA */}
        <FinalCta />
      </div>
    </>
  );
}

