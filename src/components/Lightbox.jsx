import { useEffect } from 'react';

export default function Lightbox({ images, index, onClose, onMove }) {
  const open = index >= 0;
  const image = open ? images[index] : null;

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onMove(1);
      if (event.key === 'ArrowLeft') onMove(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose, onMove, open]);

  return (
    <div className={`lightbox${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Visualização de imagem" onClick={onClose}>
      <button className="lb-close" aria-label="Fechar" onClick={onClose}>✕</button>
      <div className="lb-wrap" onClick={(event) => event.stopPropagation()}>
        {image && <img src={image.src} alt={image.alt} />}
      </div>
      <div className="lb-ctrl" onClick={(event) => event.stopPropagation()}>
        <button className="lb-btn" aria-label="Anterior" onClick={() => onMove(-1)}>←</button>
        <span className="lb-cnt" aria-live="polite">{open ? `${index + 1} / ${images.length}` : '0 / 0'}</span>
        <button className="lb-btn" aria-label="Próximo" onClick={() => onMove(1)}>→</button>
      </div>
    </div>
  );
}
