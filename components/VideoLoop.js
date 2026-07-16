'use client';
import { useEffect, useRef } from 'react';

export default function VideoLoop({ src, label, className, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const play = () => v.play().catch(() => {});
    if (v.readyState >= 2) play();
    else v.addEventListener('loadeddata', play, { once: true });
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      style={style}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
