import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="article">
      <div className="wrap" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <span className="sec-eyebrow tag">404</span>
        <h1 className="art-title" style={{ margin: '0 auto 20px' }}>Essa página escapou.</h1>
        <p style={{ color: '#4a4a4a', marginBottom: 30 }}>Vamos voltar para um lugar leve?</p>
        <Link className="mini-cta" href="/">Voltar ao início</Link>
      </div>
    </main>
  );
}
