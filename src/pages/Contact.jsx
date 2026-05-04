import Button from '../components/Button.jsx';
import OrbitCanvas from '../components/OrbitCanvas.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Contact() {
  const { t, paths } = useI18n();

  return (
    <>
      <section className="page-hero">
        <div className="page-grid-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h1 className="page-title" style={{ marginTop: 'var(--s5)' }}>
            {t.contact.title}
          </h1>
          <p className="page-intro">
            {t.contact.intro}
          </p>
        </div>
      </section>

      <section id="contato" aria-labelledby="contato-h">
        <div className="contato-glow" aria-hidden="true" />
        <OrbitCanvas className="contato-orbit-wrap" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">{t.contact.ctaEyebrow}</span>
          <h2 id="contato-h" className="contato-title">
            {t.contact.ctaTitle1}
            <br />
            <em>{t.contact.ctaTitle2}</em>
          </h2>
          <p className="contato-sub">
            {t.contact.ctaSub}
          </p>
          <div className="contato-acts">
            <Button href="mailto:contato@wisemetrics.com.br">{t.contact.talk}</Button>
            <Button to={paths.portfolio} variant="ghost">{t.contact.seePortfolio}</Button>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 'var(--s12)' }}>
        <p id="privacidade" className="page-intro" style={{ marginBottom: 'var(--s5)' }}>
          <strong>{t.contact.privacyLabel}</strong>{' '}
          {t.contact.privacyBody}{' '}
          <a href="mailto:contato@wisemetrics.com.br" className="accent-link">
            contato@wisemetrics.com.br
          </a>
          .
        </p>
        <p id="termos" className="page-intro">
          <strong>{t.contact.termsLabel}</strong>{' '}
          {t.contact.termsBody}
        </p>
      </section>
    </>
  );
}
