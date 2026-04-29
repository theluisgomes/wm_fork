import Methodology from '../components/Methodology.jsx';
import Partners from '../components/Partners.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { team } from '../data/team.js';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-grid-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Sobre</span>
          <h1 className="page-title" style={{ marginTop: 'var(--s5)' }}>
            Inteligência aplicada para decisões.
          </h1>
          <p className="page-intro">
            A Wisemetrics atua no encontro entre estratégia, inteligência artificial e produto. Nosso papel é transformar grandes volumes de dados não-estruturados em sinais claros através de NLP, convertendo leitura em direção e direção em sistemas autônomos.
          </p>
        </div>
      </section>

      <section>
        <div className="container split-panel">
          <div className="statement">
            Construímos a lógica que faz uma organização enxergar melhor.
          </div>
          <div className="text-stack">
            <p>
              Trabalhamos com marcas e organizações que já têm dados, equipes e pressão por resposta.
              O desafio costuma estar na interpretação: saber quais sinais importam, o que eles revelam e
              como transformar isso em movimento.
            </p>
            <p>
              Por isso combinamos repertório estratégico, Machine Learning e desenvolvimento de produto guiado por I.A.
              A entrega pode ser um diagnóstico usando LLMs, uma plataforma proprietária ou uma arquitetura de Agentes Autônomos.
            </p>
          </div>
        </div>
      </section>

      <Methodology number="01" />

      <section id="equipe" aria-labelledby="team-h">
        <div className="container">
          <div className="team-head">
            <span className="eyebrow">Equipe</span>
            <h2 id="team-h" className="s-title" style={{ marginTop: 'var(--s4)' }}>
              As pessoas por trás
              <br />
              da inteligência.
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
