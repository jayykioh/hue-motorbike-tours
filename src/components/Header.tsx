"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentLocale = pathname.startsWith('/vi') ? 'vi' : 'en';
  
  const getLocaleSwitchPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: currentLocale === 'vi' ? 'Các Tour' : 'Tours', href: `/${currentLocale}/tours` },
    { label: currentLocale === 'vi' ? 'Điểm đến' : 'Destinations', href: `/${currentLocale}/destinations` },
    { label: currentLocale === 'vi' ? 'Nhật ký' : 'Journal', href: `/${currentLocale}/journal` },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
        {/* N5 Floating Pill */}
        <div 
          className={`pointer-events-auto flex items-center justify-between gap-8 rounded-full px-6 py-3 transition-all duration-300 shadow-sm border ${
            isScrolled 
              ? "bg-[var(--color-limestone)]/90 backdrop-blur-md border-[var(--color-sand)] text-[var(--color-ink)]" 
              : "bg-[var(--color-night)]/80 backdrop-blur-md border-transparent text-[var(--color-limestone)]"
          }`}
        >
          {/* Logo */}
          <Link 
            href={`/${currentLocale}`} 
            className="flex items-center hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
          >
            <Image 
              src="/photo/logo.jpeg" 
              alt="Hue Motorbike Tours Logo" 
              width={48} 
              height={48} 
              className="rounded-full object-cover"
            />
            <span className="hidden sm:block ml-3 text-small font-display font-bold tracking-widest uppercase">
              HUE MOTORBIKE TOURS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-small font-semibold opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-small font-semibold">
              <Link 
                href={getLocaleSwitchPath('vi')} 
                className={`px-2 py-1 rounded-md transition-colors ${currentLocale === 'vi' ? 'bg-[var(--color-terracotta)] text-white' : 'hover:bg-black/10'}`}
              >
                VN
              </Link>
              <Link 
                href={getLocaleSwitchPath('en')} 
                className={`px-2 py-1 rounded-md transition-colors ${currentLocale === 'en' ? 'bg-[var(--color-terracotta)] text-white' : 'hover:bg-black/10'}`}
              >
                EN
              </Link>
            </div>
            <Link 
              href={`/${currentLocale}/plan`} 
              className={`text-small font-semibold px-5 py-2 rounded-full transition-colors ${
                isScrolled 
                  ? "bg-[var(--color-night)] text-[var(--color-limestone)] hover:bg-[var(--color-river)]"
                  : "bg-[var(--color-limestone)] text-[var(--color-ink)] hover:bg-[var(--color-sand)]"
              }`}
            >
              {currentLocale === 'vi' ? 'Lên kế hoạch' : 'Plan Trip'}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden ml-auto p-1 focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[var(--color-limestone)] text-[var(--color-ink)] z-40 p-6 pt-32 flex flex-col gap-6 lg:hidden">
          <nav className="flex flex-col gap-6 text-h2 font-display">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[var(--color-terracotta)] transition-colors"
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
                className={`flex-1 py-3 text-center rounded-lg border ${currentLocale === 'vi' ? 'border-[var(--color-terracotta)] text-[var(--color-terracotta)]' : 'border-[var(--color-sand)] opacity-60'}`}
              >
                Tiếng Việt
              </Link>
              <Link 
                href={getLocaleSwitchPath('en')} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 py-3 text-center rounded-lg border ${currentLocale === 'en' ? 'border-[var(--color-terracotta)] text-[var(--color-terracotta)]' : 'border-[var(--color-sand)] opacity-60'}`}
              >
                English
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
    </>
  );
}
