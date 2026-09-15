import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryCard from '@/components/CategoryCard';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { categories } from '@/data/categories';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Corporate Gift Categories',
  description:
    'Browse corporate gifting categories: gift hampers, employee gifts, client and executive gifts, branded merchandise, promotional products, festival gifts, onboarding kits and customized gifts.',
  path: '/categories/',
  image: '/images/categories/corporate-gift-hampers.jpg',
});

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Categories"
        title="Corporate Gift Categories"
        lead="Ten ways into the catalogue — by recipient, by occasion or by budget. Everything here can be branded and produced in bulk."
      />
      <Breadcrumbs items={[{ label: 'Categories' }]} />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 60}>
                <CategoryCard category={c} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Not sure where to start?"
        title="Tell us the occasion and the headcount"
        lead="We will shortlist options across categories that fit your budget, and share bulk pricing against each."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
