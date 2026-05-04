import OrbitCanvas from './OrbitCanvas.jsx';

function ServiceIcon({ id }) {
  if (id === 'data') {
    return (
      <svg viewBox="0 0 32 32">
        <circle cx="10" cy="12" r="3" />
        <circle cx="22" cy="10" r="3" />
        <circle cx="18" cy="22" r="3" />
        <path d="M13 12l6-.8M12 14.5l4 5M21 13l-2 6" />
      </svg>
    );
  }
  if (id === 'product') {
    return (
      <svg viewBox="0 0 32 32">
        <rect x="6" y="8" width="20" height="15" rx="3" />
        <path d="M10 26h12M13 13h6M13 18h10" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32">
      <path d="M7 24c6-2 10-7 12-14" />
      <path d="M19 10h6v6" />
      <path d="M7 10h7M7 16h5" />
    </svg>
  );
}

export default function ServiceCard({ service }) {
  return (
    <div id={service.id} className="atu-card">
      <OrbitCanvas className="atu-card-canvas" lazy />
      <div className="service-picto" aria-hidden="true">
        <ServiceIcon id={service.id} />
      </div>
      <div className="atu-n" aria-hidden="true">{service.number}</div>
      <h3 className="atu-title">{service.title}</h3>
      <p className="atu-desc">{service.description}</p>
      <div className="tags">
        {service.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
