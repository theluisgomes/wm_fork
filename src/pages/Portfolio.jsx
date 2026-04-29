import { useCallback, useMemo, useState } from 'react';
import CaseCard from '../components/CaseCard.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { cases } from '../data/cases.js';

export default function Portfolio() {
  const [gallery, setGallery] = useState([]);
  const [index, setIndex] = useState(-1);

  const openImage = useCallback((images, imageIndex) => {
    setGallery(images);
    setIndex(imageIndex);
  }, []);

  const move = useCallback((direction) => {
    setIndex((current) => {
      if (!gallery.length) return -1;
      return (current + direction + gallery.length) % gallery.length;
    });
  }, [gallery.length]);

  const allImages = useMemo(() => gallery, [gallery]);

  return (
    <>
      <section className="page-hero">
        <div className="page-grid-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Portfolio</span>
          <h1 className="page-title" style={{ marginTop: 'var(--s5)' }}>
            Projetos onde método vira decisão, narrativa e produto.
          </h1>
          <p className="page-intro">
            Cases selecionados que mostram a metodologia Wisemetrics em estratégia de marca,
            inteligência de dados e desenvolvimento de plataformas.
          </p>
        </div>
      </section>

      <section id="cases" aria-labelledby="cases-h">
        <div className="container">
          <div className="cases-head section-head">
            <div className="num">01</div>
            <div>
              <span className="eyebrow">Cases</span>
              <h2 id="cases-h" className="s-title" style={{ marginTop: 'var(--s4)' }}>
                A metodologia em prática.
              </h2>
            </div>
          </div>
        </div>
        {cases.map((item, caseIndex) => (
          <CaseCard key={item.id} item={item} index={caseIndex} onImageClick={openImage} />
        ))}
      </section>

      <Lightbox images={allImages} index={index} onClose={() => setIndex(-1)} onMove={move} />
    </>
  );
}
