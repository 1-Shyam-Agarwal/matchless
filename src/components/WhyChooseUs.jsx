import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { whyMatchless } from '@/data/content';

export default function WhyChooseUs({
  eyebrow = 'Why Matchless',
  title = 'Why Choose Matchless?',
  lead = 'Corporate gifting has a lot of moving parts. These are the ones we take off your desk.',
}) {
  return (
    <section className="section section--alt" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} id="why-title" />
        <div className="grid grid--3 why-grid">
          {whyMatchless.map((v, i) => (
            <Reveal as="article" key={v.title} delay={i * 60} className="why-card">
              <span className="why-card__icon">
                <Icon name={v.icon} size={22} />
              </span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
