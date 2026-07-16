import { SITE } from '../content/site';

export default function CtaBand() {
  return (
    <div className="cta-band">
      <h2>Cuide do seu intestino com o Gut Balance</h2>
      <p>Suplemento em pó sabor tangerina. Aminoácidos, fibra prebiótica, vitaminas e minerais.</p>
      <a href={SITE.checkout}>Conhecer na loja oficial</a>
    </div>
  );
}
