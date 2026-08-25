import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import QuickIntro from '@/components/home/QuickIntro';
import FeaturedTours from '@/components/home/FeaturedTours';
import BrandStatement from '@/components/home/BrandStatement';
import WhyUs from '@/components/home/WhyUs';
import ContactSection from '@/components/home/ContactSection';
import FinalCta from '@/components/home/FinalCta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'vi' 
    ? 'Hue Motorbike Tours | Trải nghiệm du lịch miền Trung' 
    : 'Hue Motorbike Tours | Central Vietnam, Slowly';
    
  const description = locale === 'vi'
    ? 'Khám phá Huế và đèo Hải Vân với những chuyến đi xe máy mang đậm dấu ấn địa phương.'
    : 'Curated motorbike journeys through Hue and the Hai Van Pass shaped by local knowledge.';

  return {
    title,
    description,
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Hue Motorbike Tours",
    "telephone": "+84862391918",
    "areaServed": ["Hue", "Thua Thien Hue"],
    "url": "https://huemotorbiketours.com"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero underlaps the transparent header — no top padding needed */}
      <div className="flex-1 flex flex-col w-full -mt-16">
        {/* 1. Hero — full viewport, thum.png */}
        <Hero />
        {/* 3. Quick intro — what we do + photo grid */}
        <QuickIntro />
        {/* 4. Featured tours list */}
        <FeaturedTours />
        {/* 5. About — Mai Anh Tu story */}
        <BrandStatement />
        {/* 6. Why ride with us — 3 pillars */}
        <WhyUs />
        {/* 7. Contact + Google Maps */}
        <ContactSection />
        {/* 8. Final WhatsApp CTA */}
        <FinalCta />
      </div>
    </>
  );
}
