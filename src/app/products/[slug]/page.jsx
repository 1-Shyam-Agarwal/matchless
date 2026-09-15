import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductGrid from '@/components/ProductGrid';
import SectionHeading from '@/components/SectionHeading';
import EnquiryForm from '@/components/EnquiryForm';
import {
  products,
  productBySlug,
  relatedProducts,
} from '@/data/products';
import { categoryName } from '@/data/categories';
import { occasionName } from '@/data/occasions';
import {
  contact,
  telHref,
  whatsappHref,
  whatsappMessages,
} from '@/data/site';
import { pageMeta, productSchema } from '@/lib/seo';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return pageMeta({
    title: product.name,
    description: `${product.short} Customizable with your branding and available for bulk corporate orders. Price on request from Matchless Corporate Gifting.`,
    path: `/products/${product.slug}/`,
    image: product.image,
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const related = relatedProducts(product, 3);
  const tel = telHref();
  const wa = whatsappHref(whatsappMessages.product(product.name));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products/' },
          { label: product.name },
        ]}
      />

      <section className="section section--tight">
        <div className="container pdp">
          <div className="pdp__media">
            <Image
              src={product.image}
              alt={`${product.name} — premium corporate gift set`}
              width={1100}
              height={825}
              priority
              sizes="(max-width: 900px) 94vw, 52vw"
            />
          </div>

          <div className="pdp__info">
            <p className="pdp__cat">{categoryName(product.categories[0])}</p>
            <h1>{product.name}</h1>
            <p className="pdp__short">{product.description}</p>

            {product.tags?.length > 0 && (
              <ul className="pdp__tags">
                {product.tags.map((t) => (
                  <li key={t}>
                    <span className="tag">{t}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pdp__price">
              <div>
                <p className="pdp__price-label">Price on Request</p>
                <p className="pdp__price-note">
                  {product.moq
                    ? `Minimum order: ${product.moq}.`
                    : 'Bulk pricing depends on quantity, branding and packaging.'}
                </p>
              </div>
              <Link href="/quote/" className="btn btn--gold btn--sm">
                Get Bulk Pricing
              </Link>
            </div>

            <div className="btn-row pdp__actions">
              <a href="#enquire" className="btn btn--navy">
                Enquire Now <Icon name="arrowRight" size={18} />
              </a>
              {wa ? (
                <a
                  href={wa}
                  className="btn btn--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} /> WhatsApp
                </a>
              ) : tel ? (
                <a href={tel} className="btn btn--outline">
                  <Icon name="phone" size={18} /> {contact.phone}
                </a>
              ) : (
                <Link href="/contact/" className="btn btn--outline">
                  Talk to Us
                </Link>
              )}
            </div>

            <div className="pdp__block">
              <h2>Key Features</h2>
              <ul className="pdp__list">
                {product.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={17} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pdp__block">
              <h2>Customization &amp; Branding</h2>
              <ul className="pdp__list">
                {product.customization.map((c) => (
                  <li key={c}>
                    <Icon name="palette" size={17} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pdp__block">
              <h2>Suitable Occasions</h2>
              <ul className="pdp__chips">
                {product.occasions.map((o) => (
                  <li key={o}>
                    <Link href={`/products/?occasion=${o}`}>
                      {occasionName(o)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pdp__block">
              <h2>Also Listed Under</h2>
              <ul className="pdp__chips">
                {product.categories.map((c) => (
                  <li key={c}>
                    <Link href={`/categories/${c}/`}>{categoryName(c)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <p className="pdp__assure">
              <Icon name="check" size={16} />
              <span>
                This is a catalogue listing, not an online store. We share pricing
                against your quantity and branding, then confirm the order
                directly with you — no payment is taken on this website.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- ENQUIRY */}
      <section className="section section--alt" id="enquire">
        <div className="container container--narrow">
          <EnquiryForm
            title={`Enquire about ${product.name}`}
            lead="Send us your quantity, branding requirement and delivery date. We will respond with bulk pricing and customization options."
            presetProduct={product.name}
          />
        </div>
      </section>

      {/* ------------------------------------------------------- RELATED */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="You might also consider"
              title="Related corporate gifts"
              lead="Similar specification, different colourway or format."
            />
            <ProductGrid products={related} />
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema(product)),
        }}
      />
    </>
  );
}
