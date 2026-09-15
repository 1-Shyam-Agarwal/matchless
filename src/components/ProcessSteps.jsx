import Reveal from './Reveal';
import { processSteps } from '@/data/content';

export default function ProcessSteps({ compact = false }) {
  return (
    <ol className={`steps${compact ? ' steps--compact' : ''}`}>
      {processSteps.map((s, i) => (
        <Reveal as="li" key={s.n} delay={i * 70} className="step">
          <span className="step__n" aria-hidden="true">
            {s.n}
          </span>
          <div className="step__body">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
