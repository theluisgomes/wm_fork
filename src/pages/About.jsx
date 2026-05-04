import Methodology from '../components/Methodology.jsx';
import Partners from '../components/Partners.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { getTeam } from '../data/team.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function About() {
  const { lang, t } = useI18n();
  const team = getTeam(lang);

  return (
    <>
      <section className="page-hero">
        <div className="page-grid-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h1 className="page-title" style={{ marginTop: 'var(--s5)' }}>
            {t.about.title}
          </h1>
          <p className="page-intro">
            {t.about.intro}
          </p>
        </div>
      </section>

      <section>
        <div className="container split-panel">
          <div className="statement">
            {t.about.statement}
          </div>
          <div className="text-stack">
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
          </div>
        </div>
      </section>

      <Methodology number="01" />

      <section id="equipe" aria-labelledby="team-h">
        <div className="container">
          <div className="team-head">
            <span className="eyebrow">{t.about.teamEyebrow}</span>
            <h2 id="team-h" className="s-title" style={{ marginTop: 'var(--s4)' }}>
              {t.about.teamTitle1}
              <br />
              {t.about.teamTitle2}
            </h2>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <Partners />
    </>
  );
}
