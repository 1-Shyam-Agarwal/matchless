import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductGrid from '@/components/ProductGrid';
import CategoryCard from '@/components/CategoryCard';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { categories, categoryBySlug } from '@/data/categories';
import { productsInCategory } from '@/data/products';
import { pageMeta } from '@/lib/seo';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};
  return pageMeta({
    title: `${category.name} in Bulk`,
    description: `${category.short} ${category.description} Request bulk pricing from Matchless Corporate Gifting.`.slice(
      0,
      300
    ),
    path: `/categories/${category.slug}/`,
    image: category.image,
  });
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const items = productsInCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Category"
        title={category.name}
        lead={category.description}
      >
        <div className="btn-row" style={{ marginTop: '28px' }}>
          <Link href="/quote/" className="btn btn--gold">
            Get Bulk Pricing <Icon name="arrowRight" size={18} />
          </Link>
          <Link href="/products/" className="btn btn--outline-light">
            Browse Everything
          </Link>
        </div>
      </PageHeader>

      <Breadcrumbs
        items={[
          { label: 'Categories', href: '/categories/' },
          { label: category.name },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="browser__meta">
            <p>
              <strong>{items.length}</strong>{' '}
              {items.length === 1 ? 'product' : 'products'} in {category.name}
            </p>
            <Link
              href={`/products/?category=${category.slug}`}
              className="browser__reset"
            >
              <Icon name="search" size={14} /> Filter all products
            </Link>
          </div>
          <ProductGrid
            products={items}
            priorityCount={3}
            label={`Products in ${category.name}`}
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Keep looking"
            title="Other categories"
            lead="Gifting programmes rarely sit in one category. These are often specified alongside."
          />
          <div className="grid grid--3">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Request pricing"
        title={`Need ${category.name.toLowerCase()} in bulk?`}
        lead="Tell us the quantity, the branding you need and your delivery date. We will come back with options and pricing."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
