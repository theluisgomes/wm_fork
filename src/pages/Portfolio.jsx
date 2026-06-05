import ProjectCard from '../components/ProjectCard.jsx';
import { getProjects } from '../lib/projects.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Portfolio() {
  const { lang, t } = useI18n();
  const projects = getProjects(lang);

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
          <div className="cases-head">
            <span className="eyebrow">{t.portfolio.cases}</span>
            <h2 id="cases-h" className="s-title" style={{ marginTop: 'var(--s4)' }}>
              {t.portfolio.subtitle}
            </h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
