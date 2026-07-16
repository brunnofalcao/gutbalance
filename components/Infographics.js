// Infográficos científicos do Gut Balance, estilo Brisa (paleta roxo).
const ROXO = '#6B5C96';
const DEEP = '#4A3F6B';
const LILAS = '#B9A9D6';
const TANG = '#E88A3C';
const INK = '#0F0F0F';
const G = '#878787';
const LINE = '#E3DEEC';
const mono = 'var(--font-mono)';
const sans = 'var(--font-sans)';

function Frame({ title, children, viewBox = '0 0 800 360' }) {
  return (
    <figure className="infographic rv">
      <svg viewBox={viewBox} role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">{children}</svg>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export function InfoComposicao() {
  const grupos = [
    ['Aminoácidos', ROXO, ['L-glutamina', 'Glicina', 'N-acetil L-cisteína']],
    ['Fibra prebiótica', TANG, ['Goma acácia']],
    ['Vitaminas', '#7BA4DB', ['Vitamina C', 'Vitamina D']],
    ['Minerais', LILAS, ['Zinco']],
  ];
  return (
    <Frame title="Composição do Gut Balance: aminoácidos, fibra prebiótica, vitaminas e minerais" viewBox="0 0 800 336">
      <text x="0" y="24" fill={G} fontFamily={mono} fontSize="12" letterSpacing="2">A FÓRMULA · 8 ATIVOS</text>
      {grupos.map(([classe, cor, itens], gi) => {
        const y = 52 + gi * 66;
        return (
          <g key={gi}>
            <rect x="0" y={y} width="250" height="48" rx="10" fill={cor} />
            <text x="18" y={y + 29} fill="#fff" fontFamily={sans} fontSize="17">{classe}</text>
            {itens.map((it, ii) => (
              <g key={ii}>
                <circle cx={290 + ii * 170 + 8} cy={y + 24} r="4" fill={cor} />
                <text x={290 + ii * 170 + 22} y={y + 29} fill={INK} fontFamily={sans} fontSize="15">{it}</text>
              </g>
            ))}
          </g>
        );
      })}
    </Frame>
  );
}

export function InfoBarreira() {
  return (
    <Frame title="Barreira intestinal íntegra versus permeável: o conceito de integridade da mucosa" viewBox="0 0 800 310">
      <text x="0" y="24" fill={G} fontFamily={mono} fontSize="12" letterSpacing="2">BARREIRA INTESTINAL</text>
      <text x="40" y="54" fill={ROXO} fontFamily={sans} fontSize="16">Íntegra</text>
      {[0,1,2,3,4].map(i => <rect key={i} x={40 + i * 52} y="70" width="46" height="90" rx="8" fill="#EDE8F5" stroke={DEEP} strokeWidth="1.5" />)}
      <text x="450" y="54" fill={TANG} fontFamily={sans} fontSize="16">Permeável</text>
      {[0,1,2,3,4].map(i => <rect key={i} x={450 + i * 62} y="70" width="46" height="90" rx="8" fill="#FBF1E8" stroke={TANG} strokeWidth="1.5" strokeDasharray="4 4" />)}
      <text x="40" y="205" fill={G} fontFamily={sans} fontSize="14">Enterócitos unidos por junções firmes,</text>
      <text x="40" y="227" fill={G} fontFamily={sans} fontSize="14">selecionando o que passa.</text>
      <text x="450" y="205" fill={G} fontFamily={sans} fontSize="14">Espaços entre as células aumentam,</text>
      <text x="450" y="227" fill={G} fontFamily={sans} fontSize="14">tema de estudo da permeabilidade.</text>
      <text x="0" y="288" fill={G} fontFamily={sans} fontSize="12.5" fontStyle="italic">Ilustração conceitual para fins educativos. Não representa diagnóstico.</text>
    </Frame>
  );
}

export function InfoImunidade70() {
  return (
    <Frame title="70% das células do sistema imunológico residem no intestino" viewBox="0 0 800 240">
      <rect x="0" y="0" width="800" height="240" rx="16" fill={DEEP} />
      <text x="56" y="122" fill="#fff" fontFamily={sans} fontWeight="300" fontSize="96">70%</text>
      <line x1="330" y1="60" x2="330" y2="180" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
      <text x="368" y="104" fill="#fff" fontFamily={sans} fontSize="22">das células do sistema</text>
      <text x="368" y="134" fill="#fff" fontFamily={sans} fontSize="22">imunológico residem</text>
      <text x="368" y="164" fill={LILAS} fontFamily={sans} fontSize="22">no intestino</text>
      <text x="56" y="202" fill={LILAS} fontFamily={mono} fontSize="12" letterSpacing="1">RIOS ET AL., 2017</text>
    </Frame>
  );
}

export function InfoPreparo() {
  const passos = [['1', '8g', 'um dosador'], ['2', '200ml', 'de água'], ['3', 'misture', 'até dissolver']];
  return (
    <Frame title="Como tomar o Gut Balance: 8g em 200ml de água, uma vez ao dia" viewBox="0 0 800 240">
      <text x="0" y="26" fill={G} fontFamily={mono} fontSize="12" letterSpacing="2">MODO DE PREPARO</text>
      {passos.map(([n, big, small], i) => {
        const x = 30 + i * 260;
        return (
          <g key={n}>
            <circle cx={x + 40} cy="110" r="40" fill="none" stroke={ROXO} strokeWidth="1.5" />
            <text x={x + 40} y="119" textAnchor="middle" fill={ROXO} fontFamily={mono} fontSize="26">{n}</text>
            <text x={x + 100} y="102" fill={INK} fontFamily={sans} fontSize="29">{big}</text>
            <text x={x + 100} y="128" fill={G} fontFamily={sans} fontSize="15">{small}</text>
            {i < 2 && <text x={x + 214} y="119" fill={LILAS} fontSize="26">〰</text>}
          </g>
        );
      })}
      <text x="30" y="200" fill={G} fontFamily={sans} fontSize="14">Uma vez ao dia, ao acordar ou antes de dormir. Sabor tangerina.</text>
    </Frame>
  );
}

export function InfoMicrobiota() {
  return (
    <Frame title="Fibra prebiótica alimenta bactérias benéficas, como bifidobactérias e lactobacilos" viewBox="0 0 800 260">
      <defs><marker id="arrmb" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill={ROXO} /></marker></defs>
      <text x="0" y="24" fill={G} fontFamily={mono} fontSize="12" letterSpacing="2">MICROBIOTA · PREBIÓTICO</text>
      <rect x="0" y="50" width="210" height="70" rx="12" fill={TANG} />
      <text x="105" y="82" textAnchor="middle" fill="#fff" fontFamily={sans} fontSize="17">Fibra prebiótica</text>
      <text x="105" y="104" textAnchor="middle" fill="#fff" fontFamily={sans} fontSize="13">(goma acácia)</text>
      <path d="M215 85 H320" stroke={ROXO} strokeWidth="2" markerEnd="url(#arrmb)" />
      <text x="340" y="70" fill={INK} fontFamily={sans} fontSize="16">alimenta bactérias benéficas</text>
      {['Bifidobactérias', 'Lactobacilos'].map((b, i) => (
        <g key={b}>
          <circle cx="356" cy={104 + i * 40} r="7" fill={ROXO} />
          <text x="374" y={109 + i * 40} fill={INK} fontFamily={sans} fontSize="15">{b}</text>
        </g>
      ))}
      <text x="0" y="200" fill={INK} fontFamily={sans} fontSize="15">Resultado estudado: equilíbrio da microbiota (menos disbiose).</text>
      <text x="0" y="232" fill={G} fontFamily={sans} fontSize="12.5" fontStyle="italic">Efeito prebiótico descrito para a goma acácia (Rios et al., 2017).</text>
    </Frame>
  );
}

export function InfoSinergia() {
  const cols = [
    ['Barreira', ROXO, 'L-glutamina, glicina, zinco, vitamina C'],
    ['Microbiota', TANG, 'goma acácia (fibra prebiótica)'],
    ['Imunidade', '#7BA4DB', 'beta-glucana, vitaminas C e D, zinco'],
  ];
  return (
    <Frame title="As três frentes do Gut Balance: barreira intestinal, microbiota e imunidade" viewBox="0 0 800 240">
      <text x="0" y="24" fill={G} fontFamily={mono} fontSize="12" letterSpacing="2">SINERGIA · TRÊS FRENTES</text>
      {cols.map(([t, cor, itens], i) => {
        const x = i * 270;
        return (
          <g key={t}>
            <rect x={x} y="46" width="250" height="164" rx="16" fill="#F4F1F9" />
            <rect x={x} y="46" width="250" height="6" rx="3" fill={cor} />
            <text x={x + 24} y="98" fill={INK} fontFamily={sans} fontSize="22">{t}</text>
            <foreignObject x={x + 24} y="116" width="205" height="86">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ font: `14px ${sans}`, color: G, lineHeight: 1.4 }}>{itens}</div>
            </foreignObject>
          </g>
        );
      })}
    </Frame>
  );
}

export function InfoMitos() {
  const linhas = [
    ['Existe pó que "desintoxica" o intestino', false],
    ['Suplemento sozinho cura intestino permeável', false],
    ['Fibra prebiótica ajuda a nutrir bactérias boas', true],
    ['Vitaminas C, D e zinco apoiam a imunidade', true],
  ];
  return (
    <Frame title="Detox intestinal e intestino permeável: o que é mito e o que é fato" viewBox="0 0 800 268">
      <text x="0" y="24" fill={G} fontFamily={mono} fontSize="12" letterSpacing="2">MITO OU FATO</text>
      {linhas.map(([txt, fato], i) => {
        const y = 58 + i * 50;
        return (
          <g key={i}>
            <rect x="0" y={y - 22} width="600" height="38" rx="8" fill="#F4F1F9" />
            <text x="16" y={y + 2} fill={INK} fontFamily={sans} fontSize="15">{txt}</text>
            <rect x="630" y={y - 22} width="170" height="38" rx="8" fill={fato ? ROXO : '#F6E7DA'} />
            <text x="715" y={y + 2} textAnchor="middle" fill={fato ? '#fff' : TANG} fontFamily={mono} fontSize="13" letterSpacing="1">{fato ? 'FATO' : 'MITO'}</text>
          </g>
        );
      })}
    </Frame>
  );
}

export function InfoFicha({ nome, sub, cor = ROXO, papel = '', estudo = '' }) {
  return (
    <Frame title={`Ficha do ingrediente: ${nome}`} viewBox="0 0 800 210">
      <rect x="0" y="0" width="800" height="210" rx="16" fill="#F4F1F9" />
      <circle cx="66" cy="70" r="30" fill={cor} />
      <text x="120" y="60" fill={INK} fontFamily={sans} fontSize="28">{nome}</text>
      <text x="120" y="86" fill={G} fontFamily={mono} fontSize="13" letterSpacing="1">{sub}</text>
      <line x1="40" y1="112" x2="760" y2="112" stroke={LINE} strokeWidth="1" />
      <text x="40" y="140" fill={G} fontFamily={mono} fontSize="11" letterSpacing="1">PAPEL NA FÓRMULA</text>
      <foreignObject x="40" y="148" width="340" height="56">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ font: `15px ${sans}`, color: INK, lineHeight: 1.35 }}>{papel}</div>
      </foreignObject>
      <text x="420" y="140" fill={G} fontFamily={mono} fontSize="11" letterSpacing="1">O QUE A CIÊNCIA ESTUDA</text>
      <foreignObject x="420" y="148" width="340" height="56">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ font: `15px ${sans}`, color: INK, lineHeight: 1.35 }}>{estudo}</div>
      </foreignObject>
    </Frame>
  );
}
