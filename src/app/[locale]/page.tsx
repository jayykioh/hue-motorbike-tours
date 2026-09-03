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
    ? 'Tour Xe Máy Huế | Easy Rider Hue - Hướng Dẫn Viên Địa Phương Số 1' 
    : 'Hue Motorbike Tour & Easy Rider Hue | #1 Local Guide in Central Vietnam';
    
  const description = locale === 'vi'
    ? 'Đặt tour xe máy Huế tốt nhất với hướng dẫn viên Easy Rider địa phương. Khám phá Huế, đèo Hải Vân & Hội An trên hue bike tour. Đánh giá 5 sao. Đặt qua WhatsApp.'
    : 'Book the best hue motorbike tour with expert easy rider guides. Explore Hue Imperial City, Hai Van Pass & Hoi An. Authentic motorbike tour in hue — 5-star rated. WhatsApp booking.';

  const keywords = locale === 'vi' 
    ? ['tour xe máy Huế', 'easy rider Huế', 'đèo Hải Vân xe máy', 'du lịch Huế', 'tour Huế', 'hướng dẫn viên Huế']
    : [
        'hue motorbike tour',
        'easy rider hue tour',
        'motorbike tour in hue',
        'hue bike tour',
        'tour in hue',
        'hue easy rider',
        'easy rider hue',
        'hai van pass motorbike tour',
        'hue to hoi an motorbike',
        'hue food tour',
        'dmz tour hue',
        'central vietnam motorbike tour',
        'hue imperial city tour',
        'huebiketour',
      ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://huebiketour.com/${locale}`,
      languages: {
        'en': 'https://huebiketour.com/en',
        'vi': 'https://huebiketour.com/vi',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://huebiketour.com/${locale}`,
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  
  // Rich JSON-LD: TravelAgency + AggregateRating + Reviews
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Hue Motorbike Tours",
    "description": "Expert easy rider hue tour guides for motorbike tours through Hue Imperial City, the Hai Van Pass, and Central Vietnam. Local food experiences, UNESCO heritage sites, and authentic cultural immersion.",
    "telephone": "+84862391918",
    "email": "info.hoianmotorbike@gmail.com",
    "url": "https://huebiketour.com",
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