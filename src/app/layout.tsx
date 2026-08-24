import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://huemotorbiketour.com'),
  title: {
    template: "%s | Hue Motorbike Tour",
    default: "Hue Motorbike Tour - Authentic Vietnam Experiences",
  },
  description: "Experience the real Vietnam with Hue Motorbike Tour. We offer guided motorbike tours through Hue's historic sites, countryside, and spectacular Hai Van Pass.",
  keywords: ["Hue motorbike tour", "Vietnam motorbike tours", "Hai Van pass", "Hue tours", "motorcycle tour Vietnam", "Hue to Hoi An"],
  openGraph: {
    title: "Hue Motorbike Tour - Authentic Vietnam Experiences",
    description: "Experience the real Vietnam with Hue Motorbike Tour. We offer guided motorbike tours through Hue's historic sites, countryside, and spectacular Hai Van Pass.",
    url: "https://huemotorbiketour.com",
    siteName: "Hue Motorbike Tour",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hue Motorbike Tour - Authentic Vietnam Experiences",
    description: "Experience the real Vietnam with Hue Motorbike Tour.",
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
    canonical: "https://huemotorbiketour.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
