import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-display'
});

const manrope = Manrope({ 
  subsets: ['latin', 'vietnamese'], 
  display: 'swap',
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://huebiketour.com'),
  title: 'Hue Motorbike Tour & Easy Rider Hue | #1 Local Guide in Central Vietnam',
  description: 'Book the best hue motorbike tour with expert easy rider guides. Explore Hue, Hai Van Pass & Hoi An on a hue bike tour. 5-star rated. WhatsApp booking available.',
  keywords: [
    'hue motorbike tour',
    'easy rider hue tour',
    'motorbike tour in hue',
    'hue bike tour',
    'tour in hue',
    'hue easy rider',
    'easy rider hue',
    'hai van pass motorbike',
    'hue to hoi an motorbike',
    'hue food tour',
    'dmz tour hue',
    'central vietnam motorbike tour',
    'hue imperial city tour',
    'hue travel guide',
    'huebiketour',
    'Vietnam motorbike tour',
    'Hue guided tour',
  ],
  openGraph: {
    title: 'Hue Motorbike Tour & Easy Rider Hue | Best Local Guide',
    description: 'Experience the real Hue on a motorbike. Expert easy rider guides, authentic food stops, and UNESCO heritage sites. Book via WhatsApp today.',
    url: 'https://huebiketour.com',
    siteName: 'Hue Motorbike Tours',
    images: [{ url: '/og-home.webp', width: 1200, height: 630, alt: 'Hue Motorbike Tour - Easy Rider Central Vietnam' }],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/photo/logo.jpeg',
  },
  twitter: {
    card: "summary_large_image",
    title: "Hue Motorbike Tour & Easy Rider Hue | #1 Local Guide",
    description: "Best hue motorbike tour with local easy rider guides. Hai Van Pass, Imperial City, Food Tour & more. Book on WhatsApp.",
  },
  verification: {
    google: '_UFGjgDoCo5QghP8c2ZnF1cXde3XkWuuet3YcH7eORI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://huebiketour.com/en",
    languages: {
      'en': 'https://huebiketour.com/en',
      'vi': 'https://huebiketour.com/vi',
      'x-default': 'https://huebiketour.com/en',
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "name": "Hue Motorbike Tours",
  "alternateName": ["Hue Bike Tour", "Easy Rider Hue", "huebiketour.com"],
  "description": "Expert-guided motorbike tours through Hue, Hai Van Pass, and Central Vietnam. Easy Rider hue tour, local food tours, UNESCO heritage sites, and DMZ tours.",
  "telephone": "+84862391918",
  "email": "info.hoianmotorbike@gmail.com",
  "url": "https://huebiketour.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hue",
    "addressRegion": "Thua Thien Hue",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 16.46370,
    "longitude": 107.59100
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84862391918",
    "contactType": "customer service",
    "availableLanguage": ["English", "Vietnamese"],
    "contactOption": "TollFree",
    "areaServed": "VN"
  },
  "areaServed": ["Hue", "Thua Thien Hue", "Da Nang", "Hoi An", "Quang Tri"],
  "founder": {
    "@type": "Person",
    "name": "Mai Anh Tu",
    "jobTitle": "Founder & Head Easy Rider Guide",
    "knowsAbout": ["Hue Motorbike Tours", "Hoi An Tours", "Da Nang Tours", "Central Vietnam Travel", "Easy Rider Vietnam"],
    "sameAs": [
      "https://hoianmotorbike.com",
      "https://dananghoiantour.com",
      "https://huebiketour.com"
    ]
  },
  "priceRange": "$$",
  "currenciesAccepted": "USD, VND",
  "paymentAccepted": "Cash, Bank Transfer",
  "sameAs": [
    "https://www.facebook.com/Vietnamonmotorbike",
    "https://www.tripadvisor.com/Attraction_Review-g293926-d12453921-Reviews-Trider_Adventure_Motorbike_Tours-Hue_Thua_Thien_Hue_Province.html",
    "https://hoianmotorbike.com",
    "https://dananghoiantour.com"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hue Motorbike Tour Packages",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Hue to Hoi An via Hai Van Pass Motorbike Tour", "url": "https://huebiketour.com/en/tours/hue-to-hoi-an-via-hai-van-pass" } },
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Hue Imperial City Motorbike Tour", "url": "https://huebiketour.com/en/tours/hue-imperial-city-tour" } },
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Hue DMZ Historical Tour by Motorbike", "url": "https://huebiketour.com/en/tours/hue-dmz-tour" } },
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Hue Food Tour and Tam Giang Sunset", "url": "https://huebiketour.com/en/tours/hue-food-tour-tam-giang-sunset" } }
    ]
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${instrumentSerif.variable} ${manrope.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}