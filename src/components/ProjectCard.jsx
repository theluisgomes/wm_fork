import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function ProjectCard({ project }) {
  const { paths } = useI18n();
  const thumb = project.heroSrc ?? project.images[0]?.src;

  return (
    <Link className="project-card" to={`${paths.portfolio}/${project.slug}`}>
      <div className="project-card-media">
        {thumb ? (
          <img src={thumb} alt="" loading="lazy" decoding="async" />
        ) : (
          <div className="project-card-fallback" aria-hidden="true" />
        )}
      </div>
      <div className="project-card-body">
        {project.category && <span className="project-card-cat">{project.category}</span>}
        <h3 className="project-card-title">{project.title}</h3>
        {project.brief && <p className="project-card-brief">{project.brief}</p>}
      </div>
    </Link>
  );
}
