"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine current locale (en or vi)
  const currentLocale = pathname.startsWith('/vi') ? 'vi' : 'en';
  
  // Helper to switch locale while keeping the rest of the path
  const getLocaleSwitchPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale; // Replace the locale segment
    return segments.join('/') || `/${targetLocale}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: currentLocale === 'vi' ? 'Các Tour' : 'Tours', href: `/${currentLocale}/tours` },
    { label: currentLocale === 'vi' ? 'Điểm đến' : 'Destinations', href: `/${currentLocale}/destinations` },
    { label: currentLocale === 'vi' ? 'Nhật ký' : 'Journal', href: `/${currentLocale}/journal` },
    { label: currentLocale === 'vi' ? 'Về chúng tôi' : 'About', href: `/${currentLocale}/about` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-limestone)] text-[var(--color-ink)] border-b border-[var(--color-sand)] py-4"
          : "bg-transparent text-[var(--color-limestone)] py-6"
      }`}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href={`/${currentLocale}`} 
          className="text-h3 font-display hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
        >
          HUE MOTORBIKE TOURS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small font-semibold hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
            >
              {link.label}
            </Link>
          ))}

          {/* Locale Switcher */}
          <div className="flex items-center gap-2 text-small font-semibold">
            <Link 
              href={getLocaleSwitchPath('vi')} 
              className={`hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] ${currentLocale === 'vi' ? 'opacity-100' : 'opacity-50'}`}
            >
              VN
            </Link>
            <span>|</span>
            <Link 
              href={getLocaleSwitchPath('en')} 
              className={`hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] ${currentLocale === 'en' ? 'opacity-100' : 'opacity-50'}`}
            >
              EN
            </Link>
          </div>

          <Link href={`/${currentLocale}/plan`} className="btn-primary">
            {currentLocale === 'vi' ? 'Lên kế hoạch →' : 'Plan a Trip →'}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[var(--color-limestone)] text-[var(--color-ink)] z-40 p-6 flex flex-col gap-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-h2 font-display">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[var(--color-terracotta)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6 border-t border-[var(--color-sand)] pt-6">
            <div className="flex items-center gap-4 text-body font-semibold">
              <Link 
                href={getLocaleSwitchPath('vi')} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`min-w-[44px] min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] ${currentLocale === 'vi' ? 'text-[var(--color-terracotta)]' : 'opacity-60'}`}
              >
                Tiếng Việt (VN)
              </Link>
              <Link 
                href={getLocaleSwitchPath('en')} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`min-w-[44px] min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] ${currentLocale === 'en' ? 'text-[var(--color-terracotta)]' : 'opacity-60'}`}
              >
                English (EN)
              </Link>
            </div>
            
            <Link 
              href={`/${currentLocale}/plan`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-4"
            >
              {currentLocale === 'vi' ? 'Lên kế hoạch chuyến đi →' : 'Plan a Trip →'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
