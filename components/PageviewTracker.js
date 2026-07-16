'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_ID = 'G-S45LFVW09L';

// Dispara pageview a cada navegação no cliente (Next troca de rota sem recarregar).
export default function PageviewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag === 'function') window.gtag('config', GA_ID, { page_path: pathname });
    if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
  }, [pathname]);
  return null;
}
