import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductGallery from '@/components/ProductGallery';
import BestsellerCarousel from '@/components/home/BestsellerCarousel';
import {
  products,
  productBySlug,
  productLabel,
  relatedProducts,
  toTile,
} from '@/data/products';
import { categoryName } from '@/data/categories';
import { shopCategoryBySlug } from '@/data/shopCategories';
import { pricingTerms, whatsappHref, whatsappMessages } from '@/data/site';
import { discountPct, inr } from '@/lib/price';
import { pageMeta, productSchema } from '@/lib/seo';
import '../../home.css';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  const title = product.model ? `${product.brand} ${product.name} (${product.model})` : product.name;
  return pageMeta({
    title,
    description: `${product.short} Available for bulk corporate gifting with your branding. Price on request from Matchless Corporate Gifting.`,
    path: `/products/${product.slug}/`,
    image: product.image,
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const p = product;
  const shop = p.shop ? shopCategoryBySlug(p.shop) : null;
  const fullName = p.model ? `${p.name} (${p.model})` : p.name;
  const wa = whatsappHref(whatsappMessages.product(fullName));
  const related = relatedProducts(p, 10).map(toTile);

  const crumbs = shop
    ? [
        { label: 'Categories', href: '/categories/' },
        { label: shop.name, href: `/categories/${shop.slug}/` },
        { label: p.name },
      ]
    : [
        { label: 'Products', href: '/products/' },
        ...(p.categories[0]
          ? [{ label: categoryName(p.categories[0]), href: `/categories/${p.categories[0]}/` }]
          : []),
        { label: p.name },
      ];

  /* Specification rows — only the ones we actually have */
  const specs = [
    ['Brand', p.brand ?? 'Matchless'],
    ['Model', p.model],
    ['Type', p.type ?? p.giftType],
    ['Category', shop ? shop.name : p.categories.map(categoryName).join(', ')],
    ['Carton quantity', p.casePack ? `${p.casePack} units per carton` : null],
    ['Minimum order', p.moq],
  ].filter(([, v]) => v);

  const branding = p.customization ?? [
    'Branded packaging or gift sleeve',
    'Logo sticker or engraved plate (where the finish allows)',
    'Personalised greeting card in every box',
  ];

  return (
    <div className="ed">
      <Breadcrumbs items={crumbs} />

      {/* ------------------------------------------------------- MAIN */}
      <section className="hs hs--flush">
        <div className="container pdx">
          <ProductGallery
            images={[...(p.images ?? [p.image]), ...(p.lifestyle ?? [])]}
            sizes={[...(p.imageSizes ?? [[1100, 825]]), ...(p.lifestyleSizes ?? [])]}
            name={fullName}
            cutoutCount={p.cutout ? (p.images ?? [p.image]).length : 0}
          />

          <div className="pdx__info">
            <p className="pdx__label">
              {p.brand && <span className="pdx__brand">{p.brand}</span>}
              {productLabel(p)}
            </p>
            <h1 className="pdx__title">{p.name}</h1>
            <p className="pdx__short">{p.description ?? p.short}</p>
            {p.model && (
              <p className="pdx__model">
                Model <strong>{p.model}</strong>
              </p>
            )}

            {p.price ? (
              <div className="pdx__price">
                <p className="pdx__price-row">
                  {p.mrp > p.price && (
                    <s className="pdx__price-mrp">MRP {inr(p.mrp)}</s>
                  )}
                  <span className="pdx__price-now">
                    <span className="visually-hidden">Offer price </span>
                    {inr(p.price)}
                  </span>
                  {discountPct(p.mrp, p.price) && (
                    <span className="pdx__price-off">{discountPct(p.mrp, p.price)}% off</span>
                  )}
                </p>
                <p className="pdx__price-note">{pricingTerms.gst}</p>
                <p className="pdx__deal">
                  <strong>Minimum order: {p.moq ?? '100 units'}</strong>
                  <span>{pricingTerms.negotiable}</span>
                </p>
              </div>
            ) : (
              <div className="pdx__price">
                <p className="pdx__price-main">Price on request</p>
                <p className="pdx__price-note">
                  Bulk pricing depends on quantity, branding and packaging — we
                  quote per enquiry.
                </p>
              </div>
            )}

            <div className="pdx__actions">
              {wa && (
                <a href={wa} className="pdx__btn pdx__btn--primary" target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={19} /> Enquire on WhatsApp
                </a>
              )}
              <Link href="/contact/" className="pdx__btn pdx__btn--wa">
                Contact us
              </Link>
            </div>

            <ul className="pdx__perks">
              {p.price ? (
                <>
                  <li>
                    <Icon name="truck" size={20} />
                    <div>
                      <strong>Transportation</strong>
                      <span>{pricingTerms.transport}</span>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <Icon name="box" size={20} />
                  <div>
                    <strong>Bulk &amp; corporate orders</strong>
                    <span>
                      {p.casePack
                        ? `Supplied in cartons of ${p.casePack} — volume pricing on request.`
                        : 'Volume pricing for any headcount, quoted on request.'}
                    </span>
                  </div>
                </li>
              )}
              <li>
                <Icon name="palette" size={20} />
                <div>
                  <strong>Branding &amp; gifting</strong>
                  <span>{branding[0]}.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- FEATURES + SPECS */}
      <section className="hs" aria-label="Product details">
        <div className="container cd-info">
          <div className="cd-card">
            <h2 className="cd-card__title">
              Key <em>features</em>
            </h2>
            <ul className="cd-list">
              {p.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={17} /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="cd-card">
            <h2 className="cd-card__title">
              <em>Specifications</em>
            </h2>
            <dl className="pdx__specs">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <h3 className="pdx__sub">Branding options</h3>
            <ul className="hb__chips">
              {branding.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- RELATED */}
      {related.length > 0 && (
        <section className="hs hs--last" aria-labelledby="rel-title">
          <div className="container">
            <div className="hs__head">
              <h2 id="rel-title" className="hs__title">
                You may also <em>like</em>
              </h2>
              <Link href={shop ? `/categories/${shop.slug}/` : '/products/'} className="hs__more">
                {shop ? `All ${shop.name.toLowerCase()}` : 'All products'}{' '}
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <BestsellerCarousel products={related} label="Related products" />
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(p)) }}
      />
    </div>
  );
}
