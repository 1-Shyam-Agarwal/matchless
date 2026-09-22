import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

/** Image-led tile — the copy sits over the photograph behind a gradient scrim. */
export default function CategoryCard({ category, priority = false }) {
  const href = `/categories/${category.slug}/`;

  return (
    <article className="card category-card">
      <Link href={href} className="category-card__link">
        <span className="category-card__media">
          <Image
            src={category.image}
            alt={`${category.name} — corporate gifting`}
            width={900}
            height={675}
            sizes="(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 30vw"
            priority={priority}
            loading={priority ? undefined : 'lazy'}
          />
        </span>
        <span className="category-card__body">
          <span className="category-card__title">{category.name}</span>
          <span className="category-card__short">{category.short}</span>
          <span className="link-arrow category-card__cta">
            Explore Category <Icon name="arrowRight" size={16} />
          </span>
        </span>
      </Link>
    </article>
  );
}
