import Image from 'next/image';
import { SITE, MEDIA } from '../content/site';
import JsonLd from '../components/JsonLd';
import StickyBar from '../components/StickyBar';
import Marquee from '../components/Marquee';
import { InfoImunidade70, InfoPreparo, InfoComposicao, InfoSinergia, InfoBarreira, InfoMicrobiota } from '../components/Infographics';

export const metadata = {
  title: 'Gut Balance: Suplemento para Saúde Intestinal e Imunidade | Prana Nutrition®',
  description: 'Gut Balance é o suplemento em pó da Prana Nutrition® com L-glutamina, glicina, NAC, beta-glucana, goma acácia, vitaminas C e D e zinco. Sabor tangerina. Apoie sua saúde intestinal e imunidade.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', siteName: 'Gut Balance · Prana Nutrition®',
    title: 'Gut Balance: Suplemento para Saúde Intestinal e Imunidade',
    description: 'L-glutamina, glicina, NAC, beta-glucana, goma acácia, vitaminas C e D e zinco. Sabor tangerina. Sua saúde começa no intestino.',
    url: '/', images: [MEDIA.packshot],
  },
  twitter: { card: 'summary_large_image' },
};

const produtoLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'Gut Balance: Suplemento Alimentar de Vitaminas, Minerais, Aminoácidos e Beta-glucana',
  sku: SITE.ficha.codigo, image: SITE.dominio + MEDIA.packshot,
  description: 'Suplemento alimentar em pó sabor tangerina com L-glutamina, glicina, N-acetil L-cisteína, beta-glucana, goma acácia, vitaminas C e D e zinco. 240g, rende até 30 doses.',
  category: 'Suplemento alimentar', brand: { '@type': 'Brand', name: 'Prana Nutrition®' },
  offers: { '@type': 'Offer', url: SITE.dominio + '/', priceCurrency: 'BRL', price: SITE.preco.valorNumerico, availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Prana Nutrition®' } },
};
const orgLd = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'Prana Nutrition®',
  url: SITE.loja, slogan: 'Eleve seu dia.',
  sameAs: [SITE.instagram, SITE.facebook, SITE.youtube],
};
const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    ['Para que serve o Gut Balance?', 'É um suplemento alimentar em pó com aminoácidos (L-glutamina, glicina, NAC), fibra prebiótica (goma acácia), vitaminas C e D e zinco. As vitaminas C, D e o zinco contribuem para o funcionamento normal do sistema imunológico. A goma acácia é uma fibra prebiótica que ajuda a nutrir bactérias benéficas do intestino.'],
    ['Como tomar o Gut Balance?', 'Adicione 8g (1 dosador) em 200ml de água e misture até dissolver. Consuma uma vez ao dia, ao acordar ou antes de dormir, ou conforme orientação de um profissional de saúde.'],
    ['O Gut Balance trata intestino permeável?', 'Não. O Gut Balance é um suplemento alimentar, não um medicamento, e não trata nem cura doenças. A ciência de ingredientes como a L-glutamina é discutida de forma educativa, mas o produto não faz promessa terapêutica.'],
    ['O Gut Balance tem glúten, lactose ou açúcar?', 'Não contém glúten nem lactose (RDC nº 727/2022 e Lei 10.674/2003) e é adoçado sem adoçantes artificiais. Pode conter traços de leite, ovo e soja por contaminação cruzada.'],
    ['Qual o sabor do Gut Balance?', 'Tangerina. Cada pote de 240g rende até 30 doses.'],
  ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const ATIVOS = [
  ['L-glutamina', 'Aminoácido', '#6B5C96', 'Principal combustível dos enterócitos, as células que revestem o intestino.'],
  ['Glicina', 'Aminoácido', '#7D6EA8', 'Aminoácido estudado por propriedades anti-inflamatórias e antioxidantes.'],
  ['N-acetil L-cisteína', 'Aminoácido (NAC)', '#8F81B8', 'Precursor da glutationa, um dos antioxidantes centrais do organismo.'],
  ['Goma acácia', 'Fibra prebiótica', '#E88A3C', 'Fibra que ajuda a nutrir bactérias benéficas, como bifidobactérias e lactobacilos.'],
  ['Beta-glucana', 'Fibra de levedura', '#D98A4A', 'Composto de Saccharomyces cerevisiae estudado por ação imunomoduladora.'],
  ['Vitamina C', 'Vitamina', '#7BA4DB', 'Contribui para o funcionamento normal do sistema imunológico e tem ação antioxidante.'],
  ['Vitamina D', 'Vitamina', '#5E8FCB', 'Auxilia no funcionamento do sistema imunológico.'],
  ['Zinco', 'Mineral', '#B9A9D6', 'Contribui para o funcionamento normal do sistema imunológico.'],
];

export default function Home() {
  const { preco, checkout, ficha } = SITE;
  return (
    <>
      <JsonLd data={produtoLd} />
      <JsonLd data={orgLd} />
      <JsonLd data={faqLd} />

      <div className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <div className="eyebrow tag"><span className="nadis">〰</span> Suplemento · saúde intestinal e imunidade</div>
            <h1><span className="h1-kicker">Gut Balance</span>Sua saúde começa<br /><em>no intestino.</em></h1>
            <p className="lead">Um suplemento em pó com 8 ativos: aminoácidos, fibra prebiótica, vitaminas e minerais. Sabor tangerina, sem glúten e sem lactose.</p>
            <div className="facts">
              <div><b>8</b><small>ativos na fórmula</small></div>
              <div><b>240g</b><small>rende 30 doses</small></div>
              <div><b>0</b><small>glúten · lactose</small></div>
            </div>
            <a className="hero-cta" href="#comprar">Quero cuidar do meu intestino <span className="nadis" style={{ color: 'var(--forest)' }}>〰</span></a>
          </div>
          <div className="hero-visual">
            <div className="photo-frame" style={{ minHeight: 460, borderRadius: 24 }}>
              <Image src={MEDIA.packshot} alt="Gut Balance Prana Nutrition®, suplemento em pó sabor tangerina, 240g" fill sizes="(max-width:760px) 100vw, 46vw" priority />
            </div>
            <div className="flavor-chip">🍊 sabor tangerina</div>
          </div>
        </div>
      </div>

      <Marquee />

      <section id="intestino" className="science" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Por que o intestino importa</span>
          <h2 className="sec-title rv d1">Saúde intestinal e imunidade caminham juntas</h2>
          <p className="sec-intro rv d1">O intestino não cuida só da digestão. É onde reside grande parte da sua defesa: cerca de 70% das células do sistema imunológico estão no trato gastrointestinal. Cuidar do intestino é cuidar do corpo inteiro.</p>
          <InfoImunidade70 />
        </div>
      </section>

      <section id="formula" className="ingredients">
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Oito ativos, um propósito</span>
          <h2 className="sec-title rv d1">Ingredientes do Gut Balance e para que serve cada um</h2>
          <p className="sec-intro rv d1">Aminoácidos, fibra prebiótica, vitaminas e minerais reunidos em uma fórmula pensada para a saúde intestinal e a imunidade.</p>
          <div className="ing-grid">
            {ATIVOS.map(([nome, classe, cor, desc], i) => (
              <div className={`ing rv${i % 4 === 1 ? ' d1' : i % 4 === 2 ? ' d2' : i % 4 === 3 ? ' d3' : ''}`} key={nome}>
                <span className="dot" style={{ background: cor }}></span>
                <em className="latin">{classe}</em>
                <h3>{nome}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <InfoComposicao />
        </div>
      </section>

      <section id="ciencia" className="science">
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Confie na ciência, com honestidade</span>
          <h2 className="sec-title rv d1">O que o Gut Balance <em>é</em>, e o que ele não é</h2>
          <p className="sec-intro rv d1">Preferimos ser precisos a prometer demais. Aqui, a ciência dos ingredientes é uma coisa; o que o produto entrega, dentro da lei, é outra.</p>
          <div className="cols">
            <div className="honest is rv d1">
              <h3>O Gut Balance é</h3>
              <ul>
                <li>Um suplemento com 8 ativos: aminoácidos, fibra prebiótica, vitaminas e minerais.</li>
                <li>Fonte de vitaminas C, D e zinco, que contribuem para o funcionamento normal do sistema imunológico.</li>
                <li>Fonte de goma acácia, fibra prebiótica que ajuda a nutrir bactérias benéficas do intestino.</li>
                <li>Prático e saboroso: 8g em água, sabor tangerina, uma vez ao dia.</li>
              </ul>
            </div>
            <div className="honest isnt rv d2">
              <h3>O Gut Balance não é</h3>
              <ul>
                <li>Um medicamento. Não trata, não previne e não cura doenças.</li>
                <li>Uma solução para "intestino permeável", SII ou doenças inflamatórias.</li>
                <li>Um "detox". O corpo já se desintoxica pelo fígado e pelos rins.</li>
                <li>Um substituto de alimentação variada e acompanhamento profissional.</li>
              </ul>
            </div>
          </div>
          <InfoSinergia />
          <p className="note">A ciência citada sobre aminoácidos, beta-glucana e goma acácia refere-se aos ingredientes isolados, não a esta formulação específica. As alegações de imunidade referem-se às vitaminas C e D e ao zinco, conforme regras da ANVISA. Suplemento alimentar; não é medicamento. Consulte um profissional de saúde.</p>
        </div>
      </section>

      <section id="ritual" className="ritual">
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Como entra no seu dia</span>
          <h2 className="sec-title rv d1">Como tomar o Gut Balance</h2>
          <p className="sec-intro rv d1">Simples e diário. Uma dose por dia, ao acordar ou antes de dormir.</p>
          <InfoPreparo />
          <div className="steps">
            <div className="step rv d1"><span className="n">01 · Prepare</span><h3>8g em 200ml</h3><p>Um dosador em um copo de água. Misture até dissolver completamente.</p></div>
            <div className="step rv d2"><span className="n">02 · Tome</span><h3>Uma vez ao dia</h3><p>Ao acordar ou antes de dormir, ou conforme a orientação do seu profissional de saúde.</p></div>
            <div className="step rv d3"><span className="n">03 · Mantenha</span><h3>Constância</h3><p>Saúde intestinal se constrói com rotina. O sabor tangerina ajuda a manter o hábito.</p></div>
          </div>
        </div>
      </section>

      <section id="microbiota" className="science" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Microbiota em equilíbrio</span>
          <h2 className="sec-title rv d1">O que é fibra prebiótica e por que ela importa</h2>
          <p className="sec-intro rv d1">A goma acácia do Gut Balance é uma fibra prebiótica: ela serve de alimento para as bactérias benéficas que vivem no seu intestino.</p>
          <InfoMicrobiota />
        </div>
      </section>

      <section id="galeria" className="gallery">
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Na prática</span>
          <h2 className="sec-title rv d1">Uma dose, um copo de água, todos os dias</h2>
          <div className="photo-frame rv" style={{ minHeight: 460, marginTop: 40 }}>
            <Image src={MEDIA.preparo} alt="Gut Balance sendo preparado: dose sendo servida em um copo de água com tangerina ao lado" fill sizes="100vw" />
          </div>
        </div>
      </section>

      <section id="nutricao" className="nutri">
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Ficha honesta</span>
          <h2 className="sec-title rv d1">Composição e ficha técnica do Gut Balance</h2>
          <div className="panel rv d1">
            <div style={{ padding: '4px 0' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--forest)' }}>Ingredientes ativos</h3>
              <p style={{ color: 'var(--ink)', lineHeight: 1.7 }}>Goma acácia (Acacia senegal L.), L-glutamina, glicina, ácido ascórbico (vitamina C), N-acetil L-cisteína, beta-glucana de levedura (Saccharomyces cerevisiae), sulfato de zinco, colecalciferol (vitamina D3).</p>
              <h3 style={{ fontSize: 18, margin: '20px 0 12px', color: 'var(--forest)' }}>Excipientes</h3>
              <p style={{ color: 'var(--graphite)', lineHeight: 1.7 }}>Aromatizante, glicosídeos de esteviol, taumatina, dióxido de silício, corante de urucum e ácido cítrico.</p>
            </div>
            <ul className="spec">
              <li><span>Categoria</span><span>{ficha.categoria}</span></li>
              <li><span>Sabor</span><span>{ficha.sabor}</span></li>
              <li><span>Conteúdo</span><span>{ficha.conteudo}</span></li>
              <li><span>Modo de uso</span><span>{ficha.dose}</span></li>
              <li><span>Restrições</span><span>{ficha.restricoes}</span></li>
              <li><span>Alérgicos</span><span>{ficha.alergicos}</span></li>
              <li><span>Código</span><span>{ficha.codigo}</span></li>
            </ul>
          </div>
          <p className="note" style={{ marginTop: 24, fontSize: 13, color: 'var(--graphite)' }}>Não contém glúten. Não contém lactose (RDC nº 727/2022 e Lei 10.674/2003). Pode conter traços de leite, ovo e soja por contaminação cruzada. Consulte o rótulo para a quantidade de cada nutriente por dose.</p>
        </div>
      </section>

      <section className="reviews">
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Quem confia na Prana</span>
          <h2 className="sec-title rv d1">Gut Balance na rotina de quem cuida da saúde</h2>
          <div className="rev-grid">
            <div className="rev rv d1"><p>"A Prana tem feito parte da minha rotina de saúde. Produtos como o Desperte, Descanse, Body Thin e Gut Balance me ajudam a manter o equilíbrio da minha saúde física e cognitiva."</p><div className="who">Dra. Alessandra Petenon</div></div>
            <div className="rev rv d2"><p>"Fórmulas limpas, eficazes e sabor agradável, facilitando a adesão. Custo acessível e alta aceitação. Recomendo."</p><div className="who">Dr. Rodrigo Guimarães</div></div>
            <div className="rev rv d3"><p>"Uma vida corrida merece um cuidado especial. Estou amando ter a Prana cuidando de mim."</p><div className="who">Depoimento de cliente Prana</div></div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="faq">
        <div className="wrap">
          <span className="sec-eyebrow tag rv">Perguntas frequentes</span>
          <h2 className="sec-title rv d1">Sem letras miúdas</h2>
          <div style={{ marginTop: 40 }}>
            <details open><summary>Para que serve o Gut Balance?</summary><p>É um suplemento alimentar em pó com aminoácidos (L-glutamina, glicina, NAC), fibra prebiótica (goma acácia), vitaminas C e D e zinco. As vitaminas C, D e o zinco contribuem para o funcionamento normal do sistema imunológico. A goma acácia é uma fibra prebiótica que ajuda a nutrir bactérias benéficas do intestino.</p></details>
            <details><summary>Como tomar?</summary><p>Adicione 8g (1 dosador) em 200ml de água e misture até dissolver. Uma vez ao dia, ao acordar ou antes de dormir, ou conforme orientação profissional.</p></details>
            <details><summary>O Gut Balance trata intestino permeável ou doenças intestinais?</summary><p>Não. É um suplemento alimentar, não um medicamento, e não trata nem cura doenças. A ciência de ingredientes como a L-glutamina é apresentada de forma educativa, sem promessa terapêutica.</p></details>
            <details><summary>Tem glúten, lactose ou açúcar?</summary><p>Não contém glúten nem lactose. É adoçado sem adoçantes artificiais. Pode conter traços de leite, ovo e soja por contaminação cruzada.</p></details>
            <details><summary>Quem deve evitar?</summary><p>Gestantes, lactantes, crianças e pessoas com condições de saúde específicas devem consultar um profissional antes do uso.</p></details>
          </div>
        </div>
      </section>

      <section id="comprar" className="buy">
        <div className="wrap">
          <div className="panel">
            <div>
              <span className="sec-eyebrow tag rv">Seu cuidado começa aqui</span>
              <h2 className="sec-title rv d1">Gut Balance · 240g</h2>
              <p className="sec-intro">Suplemento em pó sabor tangerina. Aminoácidos, fibra prebiótica, vitaminas e minerais. Rende até 30 doses.</p>
              <div className="photo-frame rv" style={{ minHeight: 300, marginTop: 28 }}>
                <Image src={MEDIA.packshot} alt="Pote do Gut Balance Prana Nutrition®" fill sizes="(max-width:760px) 100vw, 45vw" />
              </div>
            </div>
            <div className="card rv d1">
              <div className="price-ref">Valor de referência</div>
              <div className="price-row"><span className="price-now">{preco.referencia}</span></div>
              <a className="promo-cta" href={checkout}>{preco.chamadaPromo} <span className="nadis" style={{ color: 'var(--azul)' }}>〰</span></a>
              <a className="buy-btn" href={checkout} style={{ marginTop: 20 }}>Comprar na loja oficial</a>
              <div className="trust"><span>✓ Frete grátis +R$150</span><span>✓ Compra segura</span><span>✓ Envio para todo o Brasil</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="prana" style={{ background: 'var(--forest)', color: '#F1EDF6' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'center' }}>
            <div>
              <span className="sec-eyebrow tag" style={{ color: 'var(--mint)' }}>A marca por trás</span>
              <h2 className="sec-title" style={{ color: '#fff' }}>Gut Balance nasce na <em style={{ color: 'var(--pineapple)' }}>Prana Nutrition®</em>.</h2>
              <p style={{ fontSize: 18, color: '#DED5EC', maxWidth: '52ch', margin: '22px 0 14px' }}>A Prana Nutrition® cria suplementos e chás funcionais com fórmulas limpas, honestas e saborosas. O Gut Balance é o ritual de quem cuida da saúde intestinal e da imunidade, ao lado de Desperte, Descanse, Body Thin e Prana Woman.</p>
              <a className="hero-cta" style={{ marginTop: 20 }} href={SITE.loja} target="_blank" rel="noopener noreferrer">Conhecer a Prana Nutrition® <span className="nadis" style={{ color: 'var(--forest)' }}>〰</span></a>
            </div>
            <div className="photo-frame rv" style={{ minHeight: 400 }}>
              <Image src={MEDIA.preparo} alt="Prana Nutrition®, a marca por trás do Gut Balance" fill sizes="(max-width:760px) 100vw, 48vw" />
            </div>
          </div>
        </div>
      </section>

      <StickyBar />
    </>
  );
}
