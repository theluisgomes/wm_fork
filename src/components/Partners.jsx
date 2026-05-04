import { certifications, partners } from '../data/partners.js';
import AmbientCanvas from './AmbientCanvas.jsx';

function CertBadgeIcon({ id }) {
  const svgProps = {
    viewBox: '0 0 32 32',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  };
  const stroke = {
    stroke: 'currentColor',
    strokeWidth: 1.55,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  if (id === 'institute12') {
    return (
      <svg {...svgProps}>
        <path
          {...stroke}
          d="M16 5l8 3.5v6.5c0 4.8-3.2 9.2-8 11-4.8-1.8-8-6.2-8-11V8.5L16 5z"
        />
        <path {...stroke} d="M12 16l3 3 6-6" />
      </svg>
    );
  }
  if (id === 'googleAnalytics') {
    return (
      <svg {...svgProps}>
        <circle {...stroke} cx="16" cy="16" r="10.5" />
        <path {...stroke} d="M11 21v-7M16 21v-11M21 21v-5" />
      </svg>
    );
  }
  return (
    <svg {...svgProps}>
      <rect {...stroke} x="7" y="8" width="18" height="17" rx="2.5" />
      <path {...stroke} d="M11 13h10M11 17h7M11 21h9" />
      <circle {...stroke} cx="23.5" cy="11.5" r="2" />
    </svg>
  );
}

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
      <div className="parc-clients">
        <div className="container parc-clients-top">
          <p id="parc-clients-heading" className="parc-clients-lead">
            Marcas & instituições
          </p>
        </div>
        <div className="parc-marq-band" role="region" aria-labelledby="parc-clients-heading">
          <div className="marq-out">
            <div className="marq" aria-hidden="true">
              {repeated.map((partner, index) => (
                <span className="marq-item" key={`${partner}-${index}`}>
                  <span className="marq-item-pill">{partner}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="certs-block">
          <p className="certs-lead">Credenciais</p>
          <ul className="certs">
            {certifications.map((item) => (
              <li className="cert" key={item.id}>
                <span className="cert-icon-wrap">
                  <CertBadgeIcon id={item.id} />
                </span>
                <span className="cert-text">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
