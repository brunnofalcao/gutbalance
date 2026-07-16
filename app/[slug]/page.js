import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PAGINAS } from '../../content/paginas';
import { SITE, MEDIA } from '../../content/site';
import JsonLd from '../../components/JsonLd';
import CtaBand from '../../components/CtaBand';
import { InfoComposicao, InfoBarreira, InfoImunidade70, InfoPreparo, InfoMicrobiota, InfoSinergia, InfoMitos, InfoFicha, InfoLHA, InfoComerMenos, InfoGLP1 } from '../../components/Infographics';

function renderInfografico(ig, i) {
  switch (ig.type) {
    case 'composicao': return <InfoComposicao key={i} />;
    case 'barreira': return <InfoBarreira key={i} />;
    case 'imunidade': return <InfoImunidade70 key={i} />;
    case 'preparo': return <InfoPreparo key={i} />;
    case 'microbiota': return <InfoMicrobiota key={i} />;
    case 'sinergia': return <InfoSinergia key={i} />;
    case 'mitos': return <InfoMitos key={i} />;
    case 'ficha': return <InfoFicha key={i} {...ig.props} />;
    case 'lha': return <InfoLHA key={i} />;
    case 'comer-menos': return <InfoComerMenos key={i} />;
    case 'glp1': return <InfoGLP1 key={i} />;
    default: return null;
  }
}

export function generateStaticParams() {
  return PAGINAS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pg = PAGINAS.find((p) => p.slug === slug);
  if (!pg) return {};
  return {
    title: pg.title,
    description: pg.meta,
    alternates: { canonical: `/${pg.slug}` },
    openGraph: {
      type: 'article',
      siteName: 'Gut Balance · Prana Nutrition®',
      title: pg.title,
      description: pg.meta,
      url: `/${pg.slug}`,
      images: [MEDIA.packshot],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function Pagina({ params }) {
  const { slug } = await params;
  const pg = PAGINAS.find((p) => p.slug === slug);
  if (!pg) notFound();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Gut Balance', item: `${SITE.dominio}/` },
      { '@type': 'ListItem', position: 2, name: pg.h1, item: `${SITE.dominio}/${pg.slug}` },
    ],
  };

  const faqLd = pg.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pg.faqs.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null;

  return (
    <main className="article">
      <JsonLd data={breadcrumb} />
      {pg.schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      {faqLd && <JsonLd data={faqLd} />}

      <div className="wrap">
        <nav className="crumbs">
          <Link href="/">Gut Balance</Link> <span className="nadis">〰</span> <span>{pg.h1}</span>
        </nav>
        <span className="sec-eyebrow tag">{pg.eyebrow}</span>
        <h1 className="art-title rv in">{pg.h1}</h1>
        <div className="aeo rv in">{pg.aeo}</div>
        {pg.infograficos && pg.infograficos.length > 0 && (
          <div className="infographic-band">
            {pg.infograficos.map((ig, i) => renderInfografico(ig, i))}
          </div>
        )}
        <div className="prose rv" dangerouslySetInnerHTML={{ __html: pg.corpo }} />

        {pg.faqs.length > 0 && (
          <section className="faq-block rv">
            <h2>Perguntas frequentes</h2>
            {pg.faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </section>
        )}

        <div className="related rv">
          <h2>Continue navegando</h2>
          <div className="cards">
            {pg.relacionadas.map(([href, label]) => (
              <Link key={href} href={`/${href}`}>
                <span className="k">Continuar</span>
                <span className="t">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        <CtaBand />
      </div>
    </main>
  );
}
