import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lightbox from '../components/Lightbox.jsx';
import MarkdownContent from '../components/MarkdownContent.jsx';
import { fetchProjectMarkdown, getProjectBySlug } from '../lib/projects.js';
import { useI18n } from '../i18n/I18nContext.jsx';

function ProofIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 23h22" />
      <path d="M8 19l5-6 4 4 7-9" />
      <path d="M21 8h3v3" />
    </svg>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, paths, t } = useI18n();
  const project = getProjectBySlug(slug, lang);
  const [body, setBody] = useState('');
  const [gallery, setGallery] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    let active = true;
    fetchProjectMarkdown(slug, lang).then((result) => {
      if (active && result) setBody(result.body);
    });
    return () => {
      active = false;
    };
  }, [slug, lang]);

  const openImage = useCallback((imageIndex) => {
    if (!project) return;
    setGallery(project.images);
    setIndex(imageIndex);
  }, [project]);

  const move = useCallback((direction) => {
    setIndex((current) => {
      if (!gallery.length) return -1;
      return (current + direction + gallery.length) % gallery.length;
    });
  }, [gallery.length]);

  if (!project) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t.project.notFound}</h1>
          <Link className="project-back" to={paths.portfolio}>{t.project.backToPortfolio}</Link>
        </div>
      </section>
    );
  }

  const previewUrl = project.url;
  const externalUrl = project.link ?? project.url;

  return (
    <>
      <section className="project-hero" aria-label={project.title}>
        {project.heroSrc && (
          <img className="project-hero-img" src={project.heroSrc} alt="" />
        )}
        <div className="project-hero-overlay" aria-hidden="true" />
        <div className="container project-hero-content">
          <Link className="project-back" to={paths.portfolio}>{t.project.backToPortfolio}</Link>
          {project.category && <span className="eyebrow">{project.category}</span>}
          <h1 className="project-hero-title">{project.title}</h1>
          {project.partner && <p className="project-hero-partner">{project.partner}</p>}
          {project.brief && <p className="project-hero-brief">{project.brief}</p>}
        </div>
      </section>

      <section className="project-content">
        <div className="container project-content-inner">
          <MarkdownContent content={body} />

          {project.proof && (
            <div className="case-proof project-proof">
              <ProofIcon />
              <div>
                <b>{project.proof.title}</b>
                <span>{project.proof.text}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {previewUrl && (
        <section className="project-embed-section" aria-labelledby="project-embed-h">
          <div className="container">
            <div className="project-section-head">
              <span className="eyebrow">{t.project.livePreview}</span>
              <h2 id="project-embed-h" className="s-title">{t.project.livePreview}</h2>
            </div>
            <div className="project-embed">
              <iframe
                src={previewUrl}
                title={project.title}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
            {externalUrl && (
              <p className="project-embed-fallback">
                <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                  {t.project.openLiveSite} <span className="arrow">→</span>
                </a>
              </p>
            )}
          </div>
        </section>
      )}

      {project.images.length > 0 && (
        <section className="project-gallery-section" aria-labelledby="project-gallery-h">
          <div className="container">
            <div className="project-section-head">
              <span className="eyebrow">{t.project.gallery}</span>
              <h2 id="project-gallery-h" className="s-title">{t.project.gallery}</h2>
            </div>
            <div className="project-gallery case-grid">
              {project.images.map((image, imageIndex) => (
                <button
                  type="button"
                  className="gi"
                  key={image.src}
                  onClick={() => openImage(imageIndex)}
                  aria-label={`${t.lightbox.zoom} ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="gi-ov"><span className="gi-z">↗</span></div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <Lightbox images={gallery} index={index} onClose={() => setIndex(-1)} onMove={move} />
    </>
  );
}
