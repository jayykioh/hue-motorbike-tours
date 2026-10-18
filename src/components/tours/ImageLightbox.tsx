'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import Image from 'next/image';

export type LightboxItem = {
  url: string;
  alt: string;
  title: string;
  description?: string;
  tag?: string;
};

type LightboxContextType = {
  openLightbox: (items: LightboxItem[], startIndex?: number) => void;
  closeLightbox: () => void;
};

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}

export function LightboxProvider({ children, locale = 'en' }: { children: ReactNode; locale?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const isVi = locale === 'vi';

  const openLightbox = useCallback((newItems: LightboxItem[], startIndex = 0) => {
    if (!newItems || newItems.length === 0) return;
    setItems(newItems);
    setCurrentIndex(Math.max(0, Math.min(startIndex, newItems.length - 1)));
    setIsZoomed(false);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setIsZoomed(false);
  }, []);

  const nextImage = useCallback(() => {
    if (items.length <= 1) return;
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevImage = useCallback(() => {
    if (items.length <= 1) return;
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll while open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 60) {
      nextImage();
      setTouchStart(null);
    } else if (diff < -60) {
      prevImage();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const currentItem = items[currentIndex];

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}

      {/* Lightbox Modal Overlay */}
      {isOpen && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title || 'Image Preview'}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-md text-white select-none transition-all duration-300 animate-fadeIn"
          onClick={(e) => {
            // Close if clicking outside the modal content or buttons
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Counter & Controls */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 z-20 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-terracotta)] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                {currentItem.tag ?? (isVi ? 'Chi Tiết Hình Ảnh' : 'Photo Details')}
              </span>
              {items.length > 1 && (
                <span className="text-xs sm:text-sm text-slate-300 font-mono">
                  {currentIndex + 1} / {items.length}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Zoom toggle button */}
              <button
                type="button"
                onClick={() => setIsZoomed((prev) => !prev)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all text-white border border-white/15 cursor-pointer"
                title={isZoomed ? (isVi ? 'Thu nhỏ' : 'Reset zoom') : (isVi ? 'Phóng to' : 'Zoom in')}
                aria-label="Toggle zoom"
              >
                {isZoomed ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                )}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-terracotta)] active:scale-95 flex items-center justify-center transition-all text-white border border-white/15 cursor-pointer"
                title={isVi ? 'Đóng (Esc)' : 'Close (Esc)'}
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Center Stage: Image and Left/Right Navigation */}
          <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 overflow-hidden">
            {/* Previous Button */}
            {items.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[var(--color-terracotta)] text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 active:scale-90 cursor-pointer group shadow-lg"
                title={isVi ? 'Ảnh trước (←)' : 'Previous photo (←)'}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}

            {/* Main Image Container */}
            <div
              className={`relative max-w-5xl max-h-[68vh] sm:max-h-[72vh] w-full h-full flex items-center justify-center transition-transform duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-default'
              }`}
              onClick={() => isZoomed && setIsZoomed(false)}
            >
              <Image
                src={currentItem.url}
                alt={currentItem.alt || currentItem.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Next Button */}
            {items.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[var(--color-terracotta)] text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 active:scale-90 cursor-pointer group shadow-lg"
                title={isVi ? 'Ảnh tiếp theo (→)' : 'Next photo (→)'}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>

          {/* Bottom Caption & Details Card */}
          <div className="z-20 px-4 sm:px-8 py-4 sm:py-6 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-white/10">
            <div className="max-w-4xl mx-auto flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base sm:text-xl font-display text-white font-semibold leading-snug">
                  {currentItem.title}
                </h3>
                <span className="hidden sm:inline-block text-xs text-slate-400">
                  {isVi ? 'Phím [← / →] chuyển ảnh • [Esc] đóng' : 'Use [← / →] arrows • [Esc] to close'}
                </span>
              </div>
              {currentItem.description && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {currentItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

/**
 * ClickableImage is a lightweight wrapper around an image that makes it clickable
 * to open full details in the Lightbox.
 */
export function ClickableImage({
  items,
  index = 0,
  children,
  className = '',
  buttonLabel,
}: {
  items: LightboxItem[];
  index?: number;
  children: ReactNode;
  className?: string;
  buttonLabel?: string;
}) {
  const { openLightbox } = useLightbox();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openLightbox(items, index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(items, index);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`group relative cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] ${className}`}
      aria-label={buttonLabel ?? 'View full photo and details'}
    >
      {children}

      {/* Hover visual cue overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
        <span className="inline-flex items-center gap-2 bg-black/75 backdrop-blur-sm text-white text-xs sm:text-small font-semibold px-3.5 py-2 rounded-full border border-white/20 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          {buttonLabel ?? 'Xem chi tiết'}
        </span>
      </div>
    </div>
  );
}
