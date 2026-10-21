import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ImmersiveExperience from '@/components/home/ImmersiveExperience';
import QuickIntro from '@/components/home/QuickIntro';
import FeaturedTours from '@/components/home/FeaturedTours';
import BrandStatement from '@/components/home/BrandStatement';
import WhyUs from '@/components/home/WhyUs';
import ContactSection from '@/components/home/ContactSection';
import FinalCta from '@/components/home/FinalCta';
import MeetExpert from '@/components/home/MeetExpert';
import FaqHome from '@/components/home/FaqHome';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'vi'
    ? 'Tour Xe Máy Huế | Easy Rider & Tour Địa Phương'
    : 'Hue Motorbike Tours | Easy Rider & Local Day Trips';
    
  const description = locale === 'vi'
    ? 'Khám phá Huế bằng tour xe máy cùng Easy Rider địa phương. Chọn hành trình qua đèo Hải Vân, Đại Nội, ẩm thực Huế và các điểm đến miền Trung.'
    : 'Explore Hue with local Easy Rider motorbike tours, cultural day trips, food experiences, and scenic journeys across Central Vietnam.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://huebiketour.com/${locale}`,
      languages: {
        'en': 'https://huebiketour.com/en',
        'vi': 'https://huebiketour.com/vi',
        'x-default': 'https://huebiketour.com/en',
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

  return (
    <>
      {/* Hero underlaps the transparent header — no top padding needed */}
      <div className="flex-1 flex flex-col w-full -mt-16">
        {/* 1. Hero — full viewport */}
        <Hero />
        {/* Give visitors a concise overview and tour choices before the long scroll effect. */}
        <QuickIntro />
        <FeaturedTours />
        {/* Immersive Scroll Expand Effect */}
        <ImmersiveExperience />
        {/* 5. About — Mai Anh Tu story */}
        <BrandStatement />
        {/* 6. Why ride with us — 3 pillars */}
        <WhyUs />
        {/* E-E-A-T Enhancement: Meet the Founder */}
        <MeetExpert locale={locale} />
        {/* E-E-A-T Enhancement: AI Citation FAQ */}
        <FaqHome locale={locale} />
        {/* 8. Contact + Google Maps */}
        <ContactSection />
        {/* 9. Final WhatsApp CTA */}
        <FinalCta />
      </div>
    </>
  );
}
