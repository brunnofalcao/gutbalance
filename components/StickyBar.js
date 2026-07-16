'use client';
import { useEffect, useRef, useState } from 'react';
import { SITE } from '../content/site';

export default function StickyBar() {
  const [show, setShow] = useState(false);
  const heroSeen = useRef(true);
  const buySeen = useRef(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const buy = document.getElementById('comprar');
    if (!hero) return;
    const update = () => setShow(!heroSeen.current && !buySeen.current);
    const io1 = new IntersectionObserver(([e]) => { heroSeen.current = e.isIntersecting; update(); });
    io1.observe(hero);
    let io2;
    if (buy) {
      io2 = new IntersectionObserver(([e]) => { buySeen.current = e.isIntersecting; update(); }, { threshold: 0.2 });
      io2.observe(buy);
    }
    return () => { io1.disconnect(); io2 && io2.disconnect(); };
  }, []);

  return (
    <div className={`sticky${show ? ' show' : ''}`}>
      <div className="wrap">
        <div className="info">
          <b>{SITE.produto} · 240g</b>
          <small>Valor de referência {SITE.preco.referencia}</small>
        </div>
        <div className="buyrow">
          <a href={SITE.checkout}>Comprar na loja</a>
        </div>
      </div>
    </div>
  );
}
