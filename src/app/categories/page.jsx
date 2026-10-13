import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShopCategoryGrid from '@/components/home/ShopCategoryGrid';
import { shopCategories } from '@/data/shopCategories';
import { categories } from '@/data/categories';
import { productsInCategory } from '@/data/products';
import { pageMeta } from '@/lib/seo';
import '../home.css';

export const metadata = pageMeta({
  title: 'Corporate Gift Categories',
  description:
    'Browse corporate gifting by category: tech & gadgets, electronic appliances, lunch & kitchen essentials, bags & travel, onboarding kits, customisable items, trophies & awards, plus hampers, festival gifts and executive sets.',
  path: '/categories/',
  image: '/images/categories/corporate-gift-hampers.jpg',
});

export default function CategoriesPage() {
  /* Catalogue collections only show once they have products in them. */
  const collections = categories
    .map((c) => ({ ...c, count: productsInCategory(c.slug).length }))
    .filter((c) => c.count > 0);

  return (
    <div className="ed">
      <Breadcrumbs items={[{ label: 'Categories' }]} />

      {/* ----------------------------------------------------- INTRO */}
      <section className="hs hs--flush">
        <div className="container">
          <div className="pg-head">
            <div>
              <p className="hs__kicker">{shopCategories.length + collections.length} ways to start</p>
              <h1 className="pg-head__title">
                Shop by <em>Category</em>
              </h1>
            </div>
            <p className="pg-head__lead">
              Pick a category to see what&rsquo;s in the range and how we brand
              it. Everything is available in bulk with your logo.
            </p>
          </div>

          <ShopCategoryGrid categories={shopCategories} showShort />
        </div>
      </section>

      {/* ------------------------------------------- CATALOGUE COLLECTIONS */}
      {collections.length > 0 && (
      <section className="hs hs--last" aria-labelledby="col-title">
        <div className="container">
          <div className="hs__head">
            <div>
              <p className="hs__kicker">By recipient &amp; occasion</p>
              <h2 id="col-title" className="hs__title">
                Catalogue <em>collections</em>
              </h2>
            </div>
            <Link href="/products/" className="hs__more">
              All products <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          <ul className="cc">
            {collections.map((c) => {
              const { count } = c;
              return (
                <li key={c.slug}>
                  <Link href={`/categories/${c.slug}/`} className="cc__card">
                    <span className="cc__media">
                      <Image
                        src={c.image}
                        alt=""
                        width={900}
                        height={675}
                        sizes="(max-width: 640px) 45vw, (max-width: 1000px) 30vw, 220px"
                      />
                    </span>
                    <span className="cc__name">{c.name}</span>
                    <span className="cc__count">
                      {count} {count === 1 ? 'product' : 'products'}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      )}
    </div>
  );
}
