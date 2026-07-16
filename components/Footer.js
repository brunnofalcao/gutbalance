import Link from 'next/link';
import { SITE } from '../content/site';
import Logo from './Logo';
import Social from './Social';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo variant="footer" />
            <p style={{ maxWidth: '34ch', marginTop: 16 }}>{SITE.slogan} <span className="nadis" style={{ color: 'var(--mint)' }}>〰</span></p>
            <Social />
          </div>
          <div>
            <h4>Guias Gut Balance</h4>
            <Link href="/o-que-e">O que é o Gut Balance</Link>
            <Link href="/para-que-serve">Para que serve</Link>
            <Link href="/como-tomar">Como tomar</Link>
            <Link href="/gut-balance-funciona">Gut Balance funciona?</Link>
            <Link href="/ingredientes">Ingredientes e fórmula</Link>
            <Link href="/tecnologia-lha">Tecnologia LHA</Link>
            <Link href="/mitos-e-fatos">Detox intestinal: mitos</Link>
            <Link href="/contraindicacoes">Contraindicações</Link>
          </div>
          <div>
            <h4>Ingredientes</h4>
            <Link href="/l-glutamina">L-glutamina</Link>
            <Link href="/glicina">Glicina</Link>
            <Link href="/nac">N-acetilcisteína (NAC)</Link>
            <Link href="/beta-glucana">Beta-glucana</Link>
            <Link href="/goma-acacia">Goma acácia</Link>
            <Link href="/vitamina-c">Vitamina C</Link>
            <Link href="/vitamina-d">Vitamina D</Link>
            <Link href="/zinco">Zinco</Link>
          </div>
          <div>
            <h4>Saúde intestinal</h4>
            <Link href="/saude-intestinal">Saúde intestinal</Link>
            <Link href="/microbiota">Microbiota intestinal</Link>
            <Link href="/permeabilidade-intestinal">Intestino permeável</Link>
            <Link href="/disbiose">Disbiose</Link>
            <Link href="/barreira-intestinal">Barreira intestinal</Link>
            <Link href="/eixo-intestino-cerebro">Eixo intestino-cérebro</Link>
            <Link href="/prebioticos">Prebióticos</Link>
            <Link href="/fibras">Fibras</Link>
            <Link href="/imunidade-intestino">Imunidade e intestino</Link>
          </div>
          <div>
            <h4>Comer menos e emagrecimento</h4>
            <Link href="/glp1-apetite-e-intestino">Comer muito menos</Link>
            <Link href="/analogos-glp1">Análogos de GLP-1</Link>
            <Link href="/glp1-efeitos-gastrointestinais">Efeitos gastrointestinais</Link>
            <Link href="/comer-menos-fibras">Comer menos e as fibras</Link>
            <Link href="/comer-menos-micronutrientes">Vitaminas e minerais</Link>
            <Link href="/massa-magra-e-proteina">Massa magra e proteína</Link>
            <Link href="/fibra-e-saciedade">Fibra e saciedade</Link>
            <Link href="/suplementacao-no-emagrecimento">Suplementação no emagrecimento</Link>
          </div>
          <div>
            <h4>Prana Nutrition®</h4>
            <Link href="/prana-nutrition">Quem é a Prana</Link>
            <a href={SITE.loja} target="_blank" rel="noopener noreferrer">Loja oficial</a>
            <a href={SITE.lojaIntestinal} target="_blank" rel="noopener noreferrer">Saúde intestinal</a>
            <a href={SITE.blog} target="_blank" rel="noopener noreferrer">Blog</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Atendimento</a>
          </div>
        </div>
        <p className="legal">{SITE.legal}</p>
      </div>
    </footer>
  );
}
