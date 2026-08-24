"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      tours: "Tours",
      company: "Company",
      contact: "Contact",
      language: "Language",
      rights: "© 2026 Hue Motorbike Tours. All rights reserved.",
      links: {
        tour1: "Hue Motorbike Tour",
        tour2: "Hue Imperial City",
        tour3: "DMZ Tour",
        about: "About Us",
        journal: "Journal",
        contact: "Contact",
      }
    },
    vi: {
      tours: "Các Tour",
      company: "Công ty",
      contact: "Liên hệ",
      language: "Ngôn ngữ",
      rights: "© 2026 Hue Motorbike Tours. Mọi quyền được bảo lưu.",
      links: {
        tour1: "Tour Xe Máy Huế",
        tour2: "Đại Nội Huế",
        tour3: "Tour DMZ",
        about: "Về Chúng Tôi",
        journal: "Nhật Ký",
        contact: "Liên Hệ",
      }
    }
  };

  const lang = t[currentLocale];

  // Helper to switch locale while keeping the rest of the path
  const getLocaleSwitchPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale; // Replace the locale segment
    return segments.join('/') || `/${targetLocale}`;
  };

  return (
    <footer className="bg-[var(--color-night)] text-[var(--color-limestone)] py-20 px-6 mt-auto">
      <div className="max-w-[var(--container-max)] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link 
            href={`/${currentLocale}`} 
            className="text-h3 font-display hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
          >
            HUE MOTORBIKE TOURS
          </Link>
          <p className="text-small opacity-70 max-w-xs">
            {currentLocale === 'en' 
              ? "Premium motorbike tours and authentic local experiences in Hue, Vietnam." 
              : "Trải nghiệm tour xe máy cao cấp và văn hóa địa phương đích thực tại Huế, Việt Nam."}
          </p>
        </div>

        {/* Tours */}
        <div className="flex flex-col gap-6">
          <h4 className="font-semibold text-small uppercase tracking-wider opacity-60">
            {lang.tours}
          </h4>
          <nav className="flex flex-col gap-4">
            <Link href={`/${currentLocale}/tours/hue-motorbike-tour`} className="text-body hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] w-fit">{lang.links.tour1}</Link>
            <Link href={`/${currentLocale}/tours/imperial-city`} className="text-body hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] w-fit">{lang.links.tour2}</Link>
            <Link href={`/${currentLocale}/tours/dmz-tour`} className="text-body hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] w-fit">{lang.links.tour3}</Link>
          </nav>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-6">
          <h4 className="font-semibold text-small uppercase tracking-wider opacity-60">
            {lang.company}
          </h4>
          <nav className="flex flex-col gap-4">
            <Link href={`/${currentLocale}/about`} className="text-body hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] w-fit">{lang.links.about}</Link>
            <Link href={`/${currentLocale}/journal`} className="text-body hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] w-fit">{lang.links.journal}</Link>
            <Link href={`/${currentLocale}/contact`} className="text-body hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] w-fit">{lang.links.contact}</Link>
          </nav>
        </div>

        {/* Contact & Language */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-small uppercase tracking-wider opacity-60">
              {lang.contact}
            </h4>
            <a 
              href="https://wa.me/84862391918" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-body hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] w-fit"
            >
              +84 862 391 918 (WhatsApp)
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-small uppercase tracking-wider opacity-60">
              {lang.language}
            </h4>
            <div className="flex items-center gap-4 text-body">
              <Link 
                href={getLocaleSwitchPath('en')} 
                className={`hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] ${currentLocale === 'en' ? 'text-[var(--color-terracotta)]' : 'opacity-70'}`}
              >
                EN
              </Link>
              <span className="opacity-40">|</span>
              <Link 
                href={getLocaleSwitchPath('vi')} 
                className={`hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] ${currentLocale === 'vi' ? 'text-[var(--color-terracotta)]' : 'opacity-70'}`}
              >
                VN
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-[var(--container-max)] mx-auto mt-20 pt-8 border-t border-[var(--color-limestone)] border-opacity-10 text-small opacity-50">
        {lang.rights}
      </div>
    </footer>
  );
}
