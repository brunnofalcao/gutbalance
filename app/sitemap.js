import { PAGINAS } from '../content/paginas';
import { SITE } from '../content/site';

export default function sitemap() {
  const prio = { 'para-que-serve': 0.9, 'como-tomar': 0.9, 'gut-balance-funciona': 0.9, 'l-glutamina': 0.8, 'saude-intestinal': 0.8, 'permeabilidade-intestinal': 0.8, 'microbiota': 0.8, ingredientes: 0.8, 'o-que-e': 0.8, 'mitos-e-fatos': 0.7 };
  return [
    { url: `${SITE.dominio}/`, changeFrequency: 'monthly', priority: 1.0 },
    ...PAGINAS.map((p) => ({
      url: `${SITE.dominio}/${p.slug}`,
      changeFrequency: 'monthly',
      priority: prio[p.slug] ?? 0.6,
    })),
  ];
}
