import Button from '../components/Button.jsx';
import OrbitCanvas from '../components/OrbitCanvas.jsx';

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="page-grid-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Contato</span>
          <h1 className="page-title" style={{ marginTop: 'var(--s5)' }}>
            Vamos transformar dados em direção.
          </h1>
          <p className="page-intro">
            Conte um pouco sobre o desafio. A conversa começa pelo problema de negócio, não pela ferramenta.
          </p>
        </div>
      </section>

      <section id="contato" aria-labelledby="contato-h">
        <div className="contato-glow" aria-hidden="true" />
        <OrbitCanvas className="contato-orbit-wrap" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Vamos conversar</span>
          <h2 id="contato-h" className="contato-title">
            Transformamos dados
            <br />
            <em>em direção.</em>
          </h2>
          <p className="contato-sub">
            Transformamos dados, sinais de mercado e percepção em posicionamento e crescimento institucional.
          </p>
          <div className="contato-acts">
            <Button href="mailto:contato@wisemetrics.com.br">Fale com a gente</Button>
            <Button to="/portfolio" variant="ghost">Ver portfolio</Button>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 'var(--s12)' }}>
        <p id="privacidade" className="page-intro" style={{ marginBottom: 'var(--s5)' }}>
          <strong>Política de privacidade.</strong>{' '}
          Solicitações relacionadas à LGPD e ao tratamento de dados:{' '}
          <a href="mailto:contato@wisemetrics.com.br" className="accent-link">
            contato@wisemetrics.com.br
          </a>
          .
        </p>
        <p id="termos" className="page-intro">
          <strong>Termos de uso.</strong>{' '}
          Projetos e entregas são regidos por contratos específicos com cada cliente. Dúvidas gerais pelo mesmo e-mail.
        </p>
      </section>
    </>
  );
}
