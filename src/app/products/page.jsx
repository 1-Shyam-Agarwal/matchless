import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductBrowser from '@/components/ProductBrowser';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';
import { products } from '@/data/products';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Corporate Gifts Catalogue',
  description:
    'Browse the Matchless corporate gifts catalogue — premium diary and pen gift sets, gift hampers, onboarding kits, branded notebooks and customized corporate gifting. Filter by category and occasion, then request bulk pricing.',
  path: '/products/',
  image: '/images/products/prestige-monochrome-diary-pen-set.jpg',
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Corporate Gifts Catalogue"
        lead="Our current range of corporate gift sets, hampers, kits and branded stationery. Every item can be customized with your branding and supplied in bulk — pricing is shared on request."
      />
      <Breadcrumbs items={[{ label: 'Products' }]} />

      <section className="section">
        <div className="container">
          <Suspense
            fallback={
              <>
                <div className="browser__meta">
                  <p>Loading the catalogue…</p>
                </div>
                <ProductGrid products={products} priorityCount={3} label="Products" />
              </>
            }
          >
            <ProductBrowser />
          </Suspense>
        </div>
      </section>

      <CTASection
        eyebrow="Request pricing"
        title="Found something close? We will tailor it."
        lead="Quantities, colourways, packaging and branding are all adjustable. Send us the brief and we will quote against it."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
