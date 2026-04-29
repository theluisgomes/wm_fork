import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/portfolio', label: 'Portfolio' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Navegação principal">
      <div className="nav-in">
        <Link to="/" className="nav-brand" aria-label="Wisemetrics">
          <Logo />
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <NavLink to="/contato" className="nav-cta">
          Contato
        </NavLink>
      </div>
    </nav>
  );
}
