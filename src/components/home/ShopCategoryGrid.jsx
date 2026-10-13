import Link from 'next/link';
import Image from 'next/image';
import Icon from '../Icon';
import CategoryArt from './CategoryArt';
import { shopCategoryHref } from '@/data/shopCategories';
/* A few of the product types across the catalogue, for the "more" card */
const MORE_TYPES = ['Earbuds', 'Smartwatches', 'Mixer Grinders', 'Kettles & Egg Boilers'];

/**
 * Colour category tiles — name on top, illustration (or photo) on the bottom
 * edge. `showShort` adds the one-line summary under each name; `more` ends the
 * grid with a "Browse all products" card linking to /products/.
 */
export default function ShopCategoryGrid({
  categories,
  showShort = false,
  more = false,
}) {
  return (
    <ul className={`sc${showShort ? ' sc--detailed' : ''}`}>
      {categories.map((c) => (
        <li key={c.slug}>
          <Link href={shopCategoryHref(c)} className="sc__tile" style={{ '--sc-bg': c.color }}>
            <span className="sc__name">{c.name}</span>
            {showShort && <span className="sc__short">{c.short}</span>}
            {c.image ? (
              <Image
                src={c.image}
                alt=""
                width={400}
                height={300}
                sizes="(max-width: 640px) 45vw, 280px"
                className="sc__art sc__art--img"
              />
            ) : (
              <CategoryArt name={c.art} />
            )}
          </Link>
        </li>
      ))}

      {more && (
        <li>
          <Link href="/products/" className="sc__tile sc__tile--more">
            <span className="sc__more-icon" aria-hidden="true">
              <Icon name="arrowUpRight" size={22} />
            </span>
            <span className="sc__name">Browse all products</span>
            <ul className="sc__more-list" aria-label="Including">
              {MORE_TYPES.map((t) => (
                <li key={t}>{t}</li>
              ))}
              <li>and more</li>
            </ul>
          </Link>
        </li>
      )}

    </ul>
  );
}
