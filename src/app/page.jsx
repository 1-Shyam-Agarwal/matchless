import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CategoryCard from '@/components/CategoryCard';
import ProductGrid from '@/components/ProductGrid';
import OccasionCard from '@/components/OccasionCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import EnquiryForm from '@/components/EnquiryForm';
import { categories } from '@/data/categories';
import { featuredProducts } from '@/data/products';
import { occasions } from '@/data/occasions';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Matchless Corporate Gifting | Premium Corporate Gifts',
  description:
    'Premium corporate gifting and customized gifting solutions for businesses — gift hampers, employee gifts, branded merchandise, onboarding kits and festival gifts, supplied in bulk with your branding. Request a quote.',
  path: '/',
});

export default function HomePage() {
  const homeCategories = categories.filter((c) => c.featured).slice(0, 6);

  return (
    <>
      <Hero />

      {/* ------------------------------------------- 2. TRUST / VALUE PROP */}
      <section className="section" aria-labelledby="value-title">
        <div className="container value">
          <div>
            <p className="eyebrow">Corporate gifting partner</p>
            <h2 id="value-title">
              Corporate Gifting That Makes Your Brand Memorable
            </h2>
            <p className="lead">
              A corporate gift is the one piece of your brand that sits on
              someone&rsquo;s desk for a year. Matchless Corporate Gifting helps
              businesses create thoughtful, professionally branded gifting
              experiences — for employees, clients, partners and events.
            </p>
            <p>
              We work from the brief rather than the catalogue. You tell us the
              occasion, the headcount and the budget; we come back with options
              that fit all three, carry your branding properly, and arrive
              boxed and ready to hand over.
            </p>

            <dl className="value__stats">
              <div className="value__stat">
                <dt>Order type</dt>
                <dd>Bulk &amp; volume</dd>
              </div>
              <div className="value__stat">
                <dt>Branding</dt>
                <dd>Fully customized</dd>
              </div>
              <div className="value__stat">
                <dt>Pricing</dt>
                <dd>Quoted per enquiry</dd>
              </div>
            </dl>
          </div>

          <Reveal className="value__media">
            <Image
              src="/images/hero/feature-onyx-gold-set.jpg"
              alt="Black corporate diary with a gold-trim pen presented in a premium gift box"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 92vw, 46vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- 3. CATEGORIES */}
      <section className="section section--alt" aria-labelledby="cat-title">
        <div className="container">
          <SectionHeading
            eyebrow="What we supply"
            title="Product Categories"
            lead="Start from the occasion or the recipient — every category can be customized, branded and produced in bulk."
            id="cat-title"
          />
          <div className="grid grid--3">
            {homeCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <CategoryCard category={c} priority={i < 3} />
              </Reveal>
            ))}
          </div>
          <div className="btn-row btn-row--center" style={{ marginTop: '40px' }}>
            <Link href="/categories/" className="btn btn--outline">
              View All Categories <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- 4. FEATURED PRODUCTS */}
      <section className="section" aria-labelledby="feat-title">
        <div className="container">
          <SectionHeading
            eyebrow="From the catalogue"
            title="Featured Corporate Gifts"
            lead="A selection from our current range. Every item is available for bulk orders with your branding — pricing is shared on request."
            id="feat-title"
          />
          <ProductGrid products={featuredProducts.slice(0, 6)} />
          <div className="btn-row btn-row--center" style={{ marginTop: '40px' }}>
            <Link href="/products/" className="btn btn--navy">
              Browse All Products <Icon name="arrowRight" size={18} />
            </Link>
            <Link href="/quote/" className="btn btn--outline">
              Get Bulk Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- 5. WHY MATCHLESS */}
      <WhyChooseUs />

      {/* ------------------------------------------ 6. CUSTOM CORPORATE GIFTING */}
      <section className="section" aria-labelledby="custom-title">
        <div className="container split split--wide-left">
          <Reveal className="split__media">
            <Image
              src="/images/hero/feature-branding-detail.jpg"
              alt="Close-up of a natural textile notebook cover showing a debossed branding area"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 92vw, 52vw"
            />
          </Reveal>
          <div>
            <p className="eyebrow">Custom corporate gifting</p>
            <h2 id="custom-title">Built around your brand, not adapted to it</h2>
            <p className="lead">
              Most of what we produce does not come off a shelf. Tell us the
              brief and we build the gift — the combination, the packaging, the
              branding method and the finish.
            </p>
            <ul className="pdp__list" style={{ marginBottom: '28px' }}>
              <li>
                <Icon name="check" size={17} /> Custom packaging, sleeves and
                inserts in your brand colours
              </li>
              <li>
                <Icon name="check" size={17} /> Logo debossing, foil stamping,
                laser engraving and printing
              </li>
              <li>
                <Icon name="check" size={17} /> Personalised names across a full
                recipient list
              </li>
              <li>
                <Icon name="check" size={17} /> Employee, event and executive
                kits assembled to one specification
              </li>
            </ul>
            <div className="btn-row">
              <Link href="/custom-gifting/" className="btn btn--navy">
                Discuss Your Requirement <Icon name="arrowRight" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ 7. OCCASIONS */}
      <section className="section section--alt" aria-labelledby="occ-title">
        <div className="container">
          <SectionHeading
            eyebrow="Occasions"
            title="Gifting For Every Occasion"
            lead="Whatever prompts the gift, the requirement is usually the same — the right item, your branding on it, delivered on time."
            id="occ-title"
          />
          <div className="grid grid--3">
            {occasions.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 3) * 60}>
                <OccasionCard occasion={o} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- 8. HOW IT WORKS */}
      <section className="section section--navy" aria-labelledby="how-title">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="From brief to delivery, in five steps"
            lead="A straightforward process with an approval point before anything goes into production."
            id="how-title"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* ---------------------------------------------------------- 9. CTA */}
      <CTASection />

      {/* ------------------------------------------------------ 10. CONTACT */}
      <section className="section" aria-label="Enquiry and contact details">
        <div className="container quote-layout">
          <EnquiryForm
            title="Let’s Create Something Memorable"
            lead="Tell us the occasion, the quantity and the budget. We will come back with options and bulk pricing."
          />
          <div>
            <ContactSection heading="Prefer to talk first?" />
          </div>
        </div>
      </section>
    </>
  );
}
