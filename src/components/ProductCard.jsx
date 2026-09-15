import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { categoryName } from '@/data/categories';

/** Catalogue card. Enquiry-led: no price, no cart — a quote request only. */
export default function ProductCard({ product, priority = false }) {
  const href = `/products/${product.slug}/`;

  return (
    <article className="card product-card">
      <Link href={href} className="media product-card__media" tabIndex={-1} aria-hidden="true">
        <Image
          src={product.image}
          alt={`${product.name} — corporate gift`}
          width={1100}
          height={825}
          sizes="(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 30vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
        {product.customizationAvailable !== false && (
          <span className="product-card__flag">Customisable</span>
        )}
      </Link>

      <div className="product-card__body">
        <p className="product-card__cat">{categoryName(product.categories[0])}</p>
        <h3 className="product-card__title">
          <Link href={href}>{product.name}</Link>
        </h3>
        <p className="product-card__short">{product.short}</p>

        {product.tags?.length > 0 && (
          <ul className="product-card__tags">
            {product.tags.slice(0, 2).map((t) => (
              <li key={t}>
                <span className="tag">{t}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="product-card__foot">
          <span className="product-card__price">Price on Request</span>
          <Link href={href} className="link-arrow">
            Enquire Now <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
