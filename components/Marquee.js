const ITENS = ['Sem glúten', 'Sem lactose', 'Adoçado com estévia', 'Quente ou gelado', '12 kcal por dose', 'Rende 50 doses'];

export default function Marquee() {
  const linha = ITENS.map((t, i) => (
    <span key={i} className="mq-item">{t} <span className="nadis">〰</span></span>
  ));
  return (
    <div className="strip mq" aria-label={ITENS.join(' · ')}>
      <div className="mq-track">
        <div className="mq-group">{linha}</div>
        <div className="mq-group" aria-hidden="true">{linha}</div>
      </div>
    </div>
  );
}
