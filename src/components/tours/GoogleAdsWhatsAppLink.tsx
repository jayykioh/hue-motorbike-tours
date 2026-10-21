'use client';

import type { ReactNode } from 'react';

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: 'conversion',
      parameters: { send_to: string }
    ) => void;
  }
}

type Props = {
  href: string;
  className: string;
  children: ReactNode;
};

export default function GoogleAdsWhatsAppLink({ href, className, children }: Props) {
  const trackConversion = () => {
    window.gtag?.('event', 'conversion', { send_to: 'AW-789962253/m6e1CIH5l6cZEI281_gC' });
  };

  return (
    <a href={href} onClick={trackConversion} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
