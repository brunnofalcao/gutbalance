'use client';
import { useRef, useState } from 'react';

export default function MainVideo({ src, poster, label }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    setPlaying(true);
    v.muted = false;
    v.play().catch(() => { v.muted = true; v.play().catch(() => {}); });
  };

  return (
    <div className={`vwrap rv${playing ? ' playing' : ''}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        controls={playing}
        preload="metadata"
        aria-label={label}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button className="playbtn" onClick={start} aria-label="Assistir ao vídeo">
          <span className="ring"><span className="tri" /></span>
          <span className="ptxt">Assistir o filme</span>
        </button>
      )}
    </div>
  );
}
