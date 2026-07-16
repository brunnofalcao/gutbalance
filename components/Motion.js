'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
