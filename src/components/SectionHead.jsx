export default function SectionHead({ number, eyebrow, title, subtitle, titleId }) {
  return (
    <div className="section-head">
      <div className="num">{number}</div>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        {title && (
          <h2 id={titleId} className="s-title" style={{ marginTop: 'var(--s4)' }}>
            {title}
          </h2>
        )}
        {subtitle && <p className="sub">{subtitle}</p>}
      </div>
    </div>
  );
}
