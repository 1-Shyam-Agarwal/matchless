import Link from 'next/link';
import Icon from './Icon';

export default function OccasionCard({ occasion }) {
  return (
    <Link
      href={`/products/?occasion=${occasion.slug}`}
      className="occasion-card"
    >
      <span className="occasion-card__icon">
        <Icon name={occasion.icon} size={22} />
      </span>
      <span className="occasion-card__body">
        <span className="occasion-card__title">{occasion.name}</span>
        <span className="occasion-card__short">{occasion.short}</span>
      </span>
      <Icon name="arrowUpRight" size={17} className="occasion-card__arrow" />
    </Link>
  );
}
