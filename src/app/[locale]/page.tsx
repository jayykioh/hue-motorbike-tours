import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import BrandStatement from '@/components/home/BrandStatement';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyUs from '@/components/home/WhyUs';
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
    ? 'Khám phá Huế, Đà Nẵng và Hội An với những chuyến đi xe máy mang đậm dấu ấn địa phương.'
    : 'Curated motorbike journeys through Hue, Da Nang & Hoi An shaped by local knowledge.';

  return {
    title,
    description,
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  
  // JSON-LD for TravelAgency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Hue Motorbike Tours",
    "telephone": "+84862391918",
    "areaServed": ["Hue", "Da Nang", "Hoi An"],
    "url": "https://huemotorbiketours.com" // Placeholder for actual domain
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-1 flex flex-col w-full -mt-24">
        {/* Negative margin top to allow hero to underlap the transparent header */}
        <Hero />
        <BrandStatement />
        <FeaturedTours />
        <WhyUs />
        <FinalCta />
      </div>
    </>
  );
}
