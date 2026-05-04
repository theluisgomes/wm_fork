import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t, paths } = useI18n();
  const links = [
    { to: paths.home, label: t.nav.home },
    { to: paths.about, label: t.nav.about },
    { to: paths.portfolio, label: t.nav.portfolio },
  ];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label={t.nav.aria}>
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
        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Language selector">
            <button type="button" className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <NavLink to={paths.contact} className="nav-cta">
            {t.nav.contact}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
