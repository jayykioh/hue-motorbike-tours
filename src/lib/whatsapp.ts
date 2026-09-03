/**
 * Centralised WhatsApp contact constants.
 * All CTAs across the site must use these — never hardcode the number/message inline.
 *
 * Phone: +84 862 391 918 (Mai Anh Tu, Hue Motorbike Tours)
 */

export const WHATSAPP_PHONE = "84862391918";

/** Generic "plan a tour" CTA — used in header, hero, and mobile menu */
export const WHATSAPP_PLAN_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=Hi%20I%27d%20like%20to%20plan%20a%20Hue%20motorbike%20tour`;

/** Booking intent — used in FinalCta and ContactSection */
export const WHATSAPP_BOOK_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=Hi%20I%27d%20like%20to%20book%20a%20Hue%20motorbike%20tour`;

/**
 * Returns a tour-specific WhatsApp booking URL with the tour name pre-filled.
 * Falls back to generic booking URL if no name provided.
 */
export function whatsappBookTour(tourName?: string): string {
  if (!tourName) return WHATSAPP_BOOK_URL;
  const encoded = encodeURIComponent(
    `Hi I'd like to book: ${tourName}`
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}
