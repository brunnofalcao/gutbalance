// Moldura marcada para foto ou vídeo. Quando o arquivo chegar,
// substitua este componente pela mídia real no lugar onde ele é usado.
export default function MediaSlot({ label, detail, style }) {
  return (
    <div className="media-slot" style={style}>
      <div className="lbl">
        <b>{label}</b>
        {detail && (<><br />{detail}</>)}
      </div>
    </div>
  );
}
