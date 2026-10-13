import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComingSoon from '@/components/ComingSoon';
import CategoryArt from '@/components/home/CategoryArt';
import ShopCategoryGrid from '@/components/home/ShopCategoryGrid';
import BestsellerCarousel from '@/components/home/BestsellerCarousel';
import ProductFilterGrid from '@/components/home/ProductFilterGrid';
import { toTile } from '@/data/products';
import { applianceTypes } from '@/data/ubonProducts';
import { boultTypes } from '@/data/boultProducts';
import { bagTypes } from '@/data/bagProducts';
import { shopCategories } from '@/data/shopCategories';
import { productsForShopCategory } from '@/data/shopCategoryProducts';
import { whatsappHref } from '@/data/site';
import '../../home.css';

/** Page for one of the shop categories (tech, bags, trophies…), new design. */
export default function ShopCategoryView({ category: c }) {
  const items = productsForShopCategory(c, 0).map(toTile);
  /* Typed ranges (appliances) get the full filterable grid; small related
     selections stay a carousel. */
  const typed = items.some((p) => p.type);
  const others = shopCategories.filter((x) => x.slug !== c.slug);
  const wa = whatsappHref(
    `Hello Matchless Corporate Gifting, I am interested in ${c.name} for corporate gifting. Could you share options and bulk pricing?`
  );

  return (
    <div className="ed">
      <Breadcrumbs
        items={[{ label: 'Categories', href: '/categories/' }, { label: c.name }]}
      />

      {/* ------------------------------------------------------ BANNER */}
      <section className="hs hs--flush">
        <div className="container">
          <div className="cd-hero" style={{ '--sc-bg': c.color }}>
            <div className="cd-hero__copy">
              <p className="cd-hero__kicker">Category</p>
              <h1 className="cd-hero__title">{c.name}</h1>
              <p className="cd-hero__lead">{c.description}</p>
              <div className="hh__actions">
                {wa && (
                  <a href={wa} className="hh__btn" target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={18} /> Ask on WhatsApp
                  </a>
                )}
              </div>
            </div>
            <div className="cd-hero__art">
              {c.image ? (
                <Image src={c.image} alt="" width={600} height={450} sizes="(max-width: 800px) 80vw, 360px" priority />
              ) : (
                <CategoryArt name={c.art} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- RANGE + BRANDING */}
      <section className="hs" aria-label={`About ${c.name}`}>
        <div className="container cd-info">
          <div className="cd-card">
            <h2 className="cd-card__title">
              Popular in <em>this range</em>
            </h2>
            <ul className="hb__chips">
              {c.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <p className="cd-card__note">
              Brands, models and finishes vary with budget and availability —
              we shortlist the right options for your quantity.
            </p>
          </div>
          <div className="cd-card">
            <h2 className="cd-card__title">
              How we <em>brand it</em>
            </h2>
            <ul className="cd-list">
              {c.branding.map((b) => (
                <li key={b}>
                  <Icon name="check" size={17} /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- PRODUCTS */}
      {typed && (
        <section className="hs" aria-labelledby="cd-products">
          <div className="container">
            <div className="hs__head">
              <div>
                <p className="hs__kicker">
                  {items.length} products · prices incl. 18% GST · MOQ 100 units
                </p>
                <h2 id="cd-products" className="hs__title">
                  Shop the <em>range</em>
                </h2>
              </div>
              {wa && (
                <a href={wa} className="hs__more" target="_blank" rel="noopener noreferrer">
                  Ask about bulk pricing <Icon name="arrowRight" size={16} />
                </a>
              )}
            </div>
            <ProductFilterGrid products={items} types={[...applianceTypes, ...boultTypes, ...bagTypes]} />
          </div>
        </section>
      )}

      {!typed && items.length > 0 && (
        <section className="hs" aria-labelledby="cd-products">
          <div className="container">
            <div className="hs__head">
              <div>
                <p className="hs__kicker">Ready to brand</p>
                <h2 id="cd-products" className="hs__title">
                  From our <em>catalogue</em>
                </h2>
              </div>
              <Link href="/products/" className="hs__more">
                All products <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <BestsellerCarousel products={items.slice(0, 10)} label={`${c.name} products`} />
          </div>
        </section>
      )}

      {items.length === 0 && (
        <section className="hs" aria-label={`${c.name} products`}>
          <div className="container">
            <ComingSoon name={c.name} whatsapp={wa} />
          </div>
        </section>
      )}

      {/* ----------------------------------------------- OTHER CATEGORIES */}
      <section className="hs hs--last" aria-labelledby="cd-more">
        <div className="container">
          <div className="hs__head">
            <h2 id="cd-more" className="hs__title">
              Explore other <em>categories</em>
            </h2>
            <Link href="/categories/" className="hs__more">
              All categories <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <ShopCategoryGrid categories={others} more />
        </div>
      </section>
    </div>
  );
}
