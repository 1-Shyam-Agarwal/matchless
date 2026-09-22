import Icon from './Icon';

/** Four reassurance points, sat directly under the hero. */
const points = [
  {
    icon: 'layers',
    title: 'Bulk Quantities',
    body: 'One specification across the whole order',
  },
  {
    icon: 'palette',
    title: 'Your Branding',
    body: 'Debossed, foiled, engraved or printed',
  },
  {
    icon: 'box',
    title: 'Gift-Ready Packaging',
    body: 'Boxed and inserted as standard',
  },
  {
    icon: 'truck',
    title: 'Delivered To Date',
    body: 'Single or multiple locations',
  },
];

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="What we handle">
      <div className="container">
        <ul className="trust__grid" role="list">
          {points.map((p) => (
            <li key={p.title} className="trust__item">
              <span className="trust__icon" aria-hidden="true">
                <Icon name={p.icon} size={21} />
              </span>
              <span className="trust__txt">
                <strong>{p.title}</strong>
                <span>{p.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
