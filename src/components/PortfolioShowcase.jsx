import { Link } from 'react-router-dom';
import { useCallback, useMemo, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PortfolioShowcase({ cases }) {
  const { paths, t } = useI18n();
  const trackRef = useRef(null);

  const slides = useMemo(
    () =>
      cases.flatMap((c) =>
        c.images.map((img) => ({
          src: img.src,
          alt: img.alt,
          caseId: c.id,
          caseTitle: c.title,
          category: c.category,
        })),
      ),
    [cases],
  );

  const scrollByDir = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = Math.min(el.clientWidth * 0.82, 520);
    el.scrollBy({ left: dir * step, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, []);

  return (
    <div className="port-show">
      <div className="port-show-scroller" aria-roledescription="carousel">
        <div className="port-show-track-wrap">
          <button
            type="button"
            className="port-show-dir prev"
            onClick={() => scrollByDir(-1)}
            aria-label={t.lightbox.prev}
          >
            <ChevronLeft />
          </button>
          <div
            ref={trackRef}
            className="port-show-track"
            tabIndex={0}
            role="list"
            aria-label={t.home.portfolioCarouselLabel}
          >
            {slides.map((slide, index) => (
              <div className="port-show-slide" role="listitem" key={`${slide.caseId}-${slide.src}-${index}`}>
                <Link
                  to={`${paths.portfolio}#${slide.caseId}`}
                  className="port-show-card"
                  aria-label={`${t.home.portfolioOpenCase}: ${slide.caseTitle}`}
                >
                  <img src={slide.src} alt="" loading="lazy" decoding="async" />
                  <div className="port-show-card-cap">
                    <span className="port-show-card-cat">{slide.category}</span>
                    <span className="port-show-card-title">{slide.caseTitle}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="port-show-dir next"
            onClick={() => scrollByDir(1)}
            aria-label={t.lightbox.next}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
