function ProofIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 23h22" />
      <path d="M8 19l5-6 4 4 7-9" />
      <path d="M21 8h3v3" />
    </svg>
  );
}

export default function CaseCard({ item, index, onImageClick }) {
  return (
    <div id={item.id} className={`case-row${item.reversed ? ' rev' : ''}`} data-case={index}>
      <div aria-hidden="true" className="case-ghost">{String(index + 1).padStart(2, '0')}</div>
      <div className="container">
        <div className="case-inner">
          <div className="case-imgs" data-gal={item.id}>
            <div className={`case-grid ${item.layout || ''}`.trim()}>
              {item.images.map((image, imageIndex) => (
                <button
                  type="button"
                  className="gi"
                  key={image.src}
                  onClick={() => onImageClick(item.images, imageIndex)}
                  aria-label={`Ampliar ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="gi-ov"><span className="gi-z">↗</span></div>
                </button>
              ))}
            </div>
          </div>
          <div className="case-text">
            <div className="case-badge">{item.category}</div>
            <h3 className="case-title">{item.title}</h3>
            <p className="case-partner">{item.partner}</p>
            <p className="case-brief">{item.brief}</p>
            <div className="case-body">
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="case-proof">
              <ProofIcon />
              <div>
                <b>{item.proof.title}</b>
                <span>{item.proof.text}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
