import { MEDIA } from '../content/site';

// Logo com tagline. Altura controla o tamanho; largura fica automática
// para preservar a proporção real do arquivo (evita qualquer distorção).
export default function Logo({ variant = 'header', height }) {
  const isFooter = variant === 'footer';
  const src = isFooter ? MEDIA.logoFooter : MEDIA.logoHeader;
  const h = height || (isFooter ? 42 : 38);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Prana Nutrition®"
      height={h}
      style={{ height: h, width: 'auto', display: 'block' }}
      loading={isFooter ? 'lazy' : 'eager'}
      decoding="async"
      fetchPriority={isFooter ? 'auto' : 'high'}
    />
  );
}
