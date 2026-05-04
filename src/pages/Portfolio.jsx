import { useCallback, useMemo, useState } from 'react';
import CaseCard from '../components/CaseCard.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { getCases } from '../data/cases.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Portfolio() {
  const { lang, t } = useI18n();
  const cases = getCases(lang);
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
          <span className="eyebrow">{t.portfolio.eyebrow}</span>
          <h1 className="page-title" style={{ marginTop: 'var(--s5)' }}>
            {t.portfolio.title}
          </h1>
          <p className="page-intro">
            {t.portfolio.intro}
          </p>
        </div>
      </section>

      <section id="cases" aria-labelledby="cases-h">
        <div className="container">
          <div className="cases-head section-head">
            <div className="num">01</div>
            <div>
              <span className="eyebrow">{t.portfolio.cases}</span>
              <h2 id="cases-h" className="s-title" style={{ marginTop: 'var(--s4)' }}>
                {t.portfolio.subtitle}
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
