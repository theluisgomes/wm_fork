import { Link } from 'react-router-dom';
import Button from './Button.jsx';
import OrbitCanvas from './OrbitCanvas.jsx';
import Logo from './Logo.jsx';

function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <OrbitCanvas className="foot-canvas" variant="footer" />
      <div className="container foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <Link to="/" className="nav-brand foot-wordmark" aria-label="Wisemetrics">
              <Logo />
            </Link>
            <p className="foot-tagline">Data into Action</p>
          </div>
          <div className="foot-cta-mini">
            <span className="foot-cta-label">Pronto para começar?</span>
            <Button href="mailto:contato@wisemetrics.com.br">Fale com a gente</Button>
            <Button to="/portfolio" variant="ghost">
              Ver portfolio
            </Button>
          </div>
        </div>

        <nav className="foot-nav" aria-label="Mapa do site">
          <div className="foot-col">
            <div className="foot-col-label">Serviços</div>
            <ul>
              <li><Link to="/">Strategy & Growth</Link></li>
              <li><Link to="/">Data Insights & Intelligence</Link></li>
              <li><Link to="/">Product Development</Link></li>
              <li><Link to="/sobre">Metodologia</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <div className="foot-col-label">Trabalhos</div>
            <ul>
              <li><Link to="/portfolio">Penalty + M+C Saatchi</Link></li>
              <li><Link to="/portfolio">Radar ATMMOS</Link></li>
              <li><Link to="/portfolio">O Boticário + ALMAPBBDO</Link></li>
              <li><Link to="/sobre">Parceiros</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <div className="foot-col-label">Empresa</div>
            <ul>
              <li><Link to="/sobre">Equipe</Link></li>
              <li><Link to="/sobre">Ecossistema</Link></li>
              <li><Link to="/">Nossa visão</Link></li>
            </ul>
            <div className="foot-certs" style={{ marginTop: 'var(--s5)' }}>
              <span className="foot-cert">Google Analytics Certified</span>
              <span className="foot-cert">Google Looker Studio</span>
              <span className="foot-cert">Instituto 12 (RJ)</span>
            </div>
          </div>
          <div className="foot-col">
            <div className="foot-col-label">Contato</div>
            <ul>
              <li><a href="mailto:contato@wisemetrics.com.br" className="accent-link">contato@wisemetrics.com.br</a></li>
              <li><Link to="/contato">Página de contato</Link></li>
              <li><a href="https://www.linkedin.com/company/wisemetrics" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com/wisemetrics" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </nav>

        <div className="foot-bottom">
          <p className="foot-copy">© 2026 <strong>Wisemetrics</strong>. Todos os direitos reservados.</p>
          <div className="foot-socials" aria-label="Redes sociais">
            <a href="https://www.linkedin.com/company/wisemetrics" target="_blank" rel="noopener noreferrer" className="foot-social-link" aria-label="LinkedIn">
              <SocialIcon type="linkedin" />
            </a>
            <a href="https://instagram.com/wisemetrics" target="_blank" rel="noopener noreferrer" className="foot-social-link" aria-label="Instagram">
              <SocialIcon type="instagram" />
            </a>
          </div>
          <div className="foot-legal">
            <Link to="/contato">Política de Privacidade</Link>
            <Link to="/contato">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
