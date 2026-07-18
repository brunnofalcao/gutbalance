import Link from 'next/link';
import { SITE } from '../content/site';
import Logo from './Logo';

export default function Header() {
  return (
    <>
      <div className="topbar"><div className="wrap"><span className="nadis">〰</span> {SITE.faixaTopo}</div></div>
      <header className="site">
        <div className="wrap">
          <Link href="/" className="brand-logo" aria-label="Gut Balance, Prana Nutrition®"><Logo variant="header" /></Link>
          <nav className="main">
            <Link href="/#intestino">O intestino</Link>
            <Link href="/#formula">Ingredientes</Link>
            <Link href="/#ciencia">A ciência</Link>
            <Link href="/tecnologia-lha">Tecnologia LHA</Link>
            <Link href="/glp1-apetite-e-intestino">Comer menos</Link>
            <Link href="/como-tomar">Como tomar</Link>
            <Link href="/#duvidas">Dúvidas</Link>
          </nav>
          <a className="mini-cta" href={SITE.checkout}>Comprar na loja</a>
        </div>
      </header>
    </>
  );
}
