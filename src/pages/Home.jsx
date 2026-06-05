import { Link } from 'react-router-dom';
import { getProjects } from '../lib/projects.js';
import { getServices } from '../data/services.js';
import AmbientCanvas from '../components/AmbientCanvas.jsx';
import Button from '../components/Button.jsx';
import PortfolioShowcase from '../components/PortfolioShowcase.jsx';
import HeroCanvas from '../components/HeroCanvas.jsx';
import Methodology from '../components/Methodology.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Home() {
  const { lang, t, paths } = useI18n();
  const cases = getProjects(lang);
  const services = getServices(lang);

  return (
    <>
      <section id="hero" aria-label="Hero">
        <HeroCanvas />
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-wrap">
          <p className="eyebrow hero-eyebrow"><span className="dot" />{t.home.eyebrow}</p>
          <h1 className="hero-title">
            <div className="hl"><span>Data into</span></div>
            <div className="hl"><em>Action</em></div>
          </h1>
          <div className="hero-foot">
            <p className="hero-sub">
              {t.home.sub}
            </p>
            <div className="hero-cta-g">
              <Button to={paths.portfolio}>{t.home.seeCases}</Button>
              <Button to={paths.contact} variant="ghost">{t.home.talk}</Button>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>scroll</span>
          <div className="sc-bar" />
        </div>
      </section>

      <section id="problem" aria-labelledby="prob-h">
        <AmbientCanvas className="ambient-canvas problem-canvas-wrap" density={34} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHead number="01" eyebrow={t.home.problemEyebrow} subtitle={t.home.problemSubtitle} />
          <div className="prob-grid">
            <div>
              <h2 id="prob-h" className="prob-h">
                {t.home.problemTitle1}
                <br />
                {t.home.problemTitle2}
              </h2>
              <div className="circles">
                {t.home.bullets.map((text, index) => (
                  <div className="circle-card" key={text}>
                    <div className="circle-n" aria-hidden="true">{index + 1}</div>
                    <span className="circle-txt">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="prob-r-title">{t.home.problemRightTitle}</h3>
              <p className="prob-r-body">
                {t.home.problemRightBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacoes" aria-labelledby="atu-h">
        <div className="container">
          <SectionHead number="02" eyebrow={t.home.actionEyebrow} title={t.home.actionTitle} titleId="atu-h" />
          <div className="atu-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Methodology number="03" />

      <section id="cases" aria-labelledby="cases-h">
        <div className="container">
          <div className="cases-head">
            <SectionHead number="04" eyebrow={t.home.portfolioEyebrow} title={t.home.portfolioTitle} titleId="cases-h" />
            <p className="page-intro">
              {t.home.portfolioIntro}
            </p>
          </div>
        </div>
        <PortfolioShowcase cases={cases} />
        <div className="container" style={{ paddingBottom: 'var(--s10)' }}>
          <Link className="wm-btn ghost" to={paths.portfolio}>
            {t.home.fullPortfolio} <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
