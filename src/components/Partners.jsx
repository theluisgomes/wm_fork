import { certifications, partners } from '../data/partners.js';
import AmbientCanvas from './AmbientCanvas.jsx';

export default function Partners() {
  const repeated = [...partners, ...partners];

  return (
    <section id="parceiros" aria-label="Parceiros">
      <AmbientCanvas className="ambient-canvas parc-canvas-wrap" density={30} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="parc-head">
          <span className="eyebrow">Ecossistema</span>
          <h2 className="parc-title">
            Quem confia na
            <br />
            Wisemetrics.
          </h2>
        </div>
      </div>
      <div className="marq-out" role="region" aria-label="Parceiros">
        <div className="marq" aria-hidden="true">
          {repeated.map((partner, index) => (
            <span className="marq-item" key={`${partner}-${index}`}>
              {partner}
            </span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="certs">
          {certifications.map((cert) => (
            <span className="cert" key={cert}>{cert}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
