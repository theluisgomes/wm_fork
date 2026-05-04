import { Link } from 'react-router-dom';
import { cases } from '../data/cases.js';
import { services } from '../data/services.js';
import AmbientCanvas from '../components/AmbientCanvas.jsx';
import Button from '../components/Button.jsx';
import CaseCard from '../components/CaseCard.jsx';
import HeroCanvas from '../components/HeroCanvas.jsx';
import Methodology from '../components/Methodology.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

export default function Home() {
  const featuredCases = cases.slice(0, 2);

  return (
    <>
      <section id="hero" aria-label="Hero">
        <HeroCanvas />
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-wrap">
          <p className="eyebrow hero-eyebrow"><span className="dot" />Estratégia · Dados · Produto</p>
          <h1 className="hero-title">
            <div className="hl"><span>Data into</span></div>
            <div className="hl"><em>Action</em></div>
          </h1>
          <div className="hero-foot">
            <p className="hero-sub">
              Transformamos dados, comportamento e sinais de mercado através de Inteligência Artificial, gerando direção estratégica e produtos digitais que operam por você.
            </p>
            <div className="hero-cta-g">
              <Button to="/portfolio">Ver cases</Button>
              <Button to="/contato" variant="ghost">Fale conosco</Button>
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
          <SectionHead number="01" eyebrow="O problema" subtitle="Densidade é permitida. Ruído, não." />
          <div className="prob-grid">
            <div>
              <h2 id="prob-h" className="prob-h">
                Dados não faltam.
                <br />
                Direção, sim.
              </h2>
              <div className="circles">
                {[
                  'Dado sem leitura é ruído',
                  'Informação sem contexto não decide',
                  'Repertório é o que transforma análise em ação',
                ].map((text, index) => (
                  <div className="circle-card" key={text}>
                    <div className="circle-n" aria-hidden="true">{index + 1}</div>
                    <span className="circle-txt">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="prob-r-title">O gargalo é de interpretação, não de volume.</h3>
              <p className="prob-r-body">
                Empresas acumulam dados mas travam na hora de agir. O que falta é a capacidade de articular fontes e processar em escala. Com inteligência artificial, convertemos complexidade em direção estratégica. A Wisemetrics existe nesse espaço, onde Machine Learning encontra perspicácia, e código encontra narrativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacoes" aria-labelledby="atu-h">
        <div className="container">
          <SectionHead number="02" eyebrow="Atuação" title="Três frentes. Uma lógica." titleId="atu-h" />
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
            <SectionHead number="04" eyebrow="Portfolio" title="A metodologia em prática." titleId="cases-h" />
            <p className="page-intro">
              Uma amostra dos projetos em que estratégia, dados e produto aparecem como uma mesma disciplina.
            </p>
          </div>
        </div>
        {featuredCases.map((item, index) => (
          <CaseCard key={item.id} item={item} index={index} onImageClick={() => {}} />
        ))}
        <div className="container" style={{ paddingBottom: 'var(--s10)' }}>
          <Link className="wm-btn ghost" to="/portfolio">
            Ver portfolio completo <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
