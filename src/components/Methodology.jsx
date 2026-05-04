import { useState } from 'react';
import { getMethodology } from '../data/methodology.js';
import AmbientCanvas from './AmbientCanvas.jsx';
import SectionHead from './SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

function FlowIcon({ index }) {
  const icons = [
    <><path d="M6 21c4-7 8 5 12-2s5-8 8-4" /><path d="M6 9h6m8 14h6" /></>,
    <><path d="M8 8h16M8 16h16M8 24h16" /><path d="M12 6v20M20 6v20" /></>,
    <><circle cx="16" cy="16" r="8" /><path d="M16 8v16M8 16h16" /></>,
    <><rect x="7" y="8" width="18" height="14" rx="3" /><path d="M11 26h10M12 14h8M12 18h5" /></>,
  ];
  return <svg viewBox="0 0 32 32">{icons[index]}</svg>;
}

export default function Methodology({ number = '03' }) {
  const { lang, t } = useI18n();
  const methodology = getMethodology(lang);
  const [active, setActive] = useState(0);
  const activeStep = methodology[active];

  return (
    <section id="meto" aria-labelledby="meto-h">
      <AmbientCanvas className="ambient-canvas meto-canvas-wrap" density={26} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="meto-head">
          <SectionHead
            number={number}
            eyebrow={t.methodology.eyebrow}
            title={t.methodology.title}
            subtitle={t.methodology.subtitle}
            titleId="meto-h"
          />
        </div>
        <div className="method-flow" role="group" aria-label={t.methodology.groupLabel}>
          {methodology.map((step, index) => (
            <button
              key={step.label}
              type="button"
              className={`flow-step${active === index ? ' on' : ''}`}
              aria-current={active === index ? 'step' : undefined}
              aria-label={`${step.label}. ${step.caption}`}
              onClick={() => setActive(index)}
            >
              <FlowIcon index={index} />
              <div>
                <b>{step.label}</b>
                <span>{step.caption}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="meto-panels">
          <div className="meto-panel on" role="region" id="meto-panel" aria-labelledby="meto-step-title">
            <div>
              <p className="meto-step-n">{String(active + 1).padStart(2, '0')} / 04</p>
              <h3 id="meto-step-title" className="meto-step-label">{activeStep.label}</h3>
              <p className="meto-step-tl">{activeStep.timeline}</p>
              <p className="meto-step-desc">{activeStep.description}</p>
            </div>
            <div className="meto-keys">
              {activeStep.keys.map((key) => (
                <div className="meto-key" key={key}>{key}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
