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
  title: 'Hue Motorbike Tours',
  description: 'Explore Hue and Central Vietnam with local motorbike tours, Easy Rider journeys, cultural day trips, and food experiences.',
  openGraph: {
    title: 'Hue Motorbike Tours | Easy Rider & Local Day Trips',
    description: 'Explore Hue and Central Vietnam with local motorbike tours, Easy Rider journeys, cultural day trips, and food experiences.',
    url: 'https://huebiketour.com',
    siteName: 'Hue Motorbike Tours',
    images: [{ url: '/photo/hue-imperial-city-tour-og.jpg', width: 1200, height: 630, alt: 'Hue Imperial City tour in Central Vietnam' }],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/photo/logo.jpeg',
  },
  twitter: {
    card: "summary_large_image",
    title: "Hue Motorbike Tours | Easy Rider & Local Day Trips",
    description: "Explore Hue and Central Vietnam with local motorbike tours, cultural day trips, and food experiences.",
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
  // NOTE: Do NOT set alternates.canonical here in layout.
  // Each page's generateMetadata must set its own canonical URL.
  // A layout-level canonical bleeds into all child routes and overrides
  // them, causing Google to treat all tour pages as duplicates of the homepage.
  alternates: {
    languages: {
      'en': 'https://huebiketour.com/en',
      'vi': 'https://huebiketour.com/vi',
      'x-default': 'https://huebiketour.com/en',
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://huebiketour.com/#travel-agency",
  "name": "Hue Motorbike Tours",
  "alternateName": ["Hue Bike Tour", "Easy Rider Hue", "huebiketour.com"],
  "description": "Local motorbike tours, Easy Rider journeys, cultural day trips, and food experiences in Hue and Central Vietnam.",
  "telephone": "+84862391918",
  "email": "info@huebiketour.com",
  "url": "https://huebiketour.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84862391918",
    "contactType": "customer service",
    "availableLanguage": ["English", "Vietnamese"],
    "areaServed": "Central Vietnam"
  },
  "areaServed": ["Hue City", "Da Nang", "Hoi An", "Quang Tri"],
  "founder": {
    "@type": "Person",
    "name": "Mai Anh Tu",
    "jobTitle": "Founder & Head Easy Rider Guide",
    "knowsAbout": ["Hue Motorbike Tours", "Hoi An Tours", "Da Nang Tours", "Central Vietnam Travel", "Easy Rider Vietnam"],
  },
  "sameAs": [
    "https://www.facebook.com/Vietnamonmotorbike"
  ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
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
