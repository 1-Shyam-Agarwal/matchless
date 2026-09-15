import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import { aboutPoints } from '@/data/content';
import { site } from '@/data/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'About Our Corporate Gifting',
  description:
    'Matchless Corporate Gifting is a corporate gifting company supplying premium, customized and bulk corporate gifts — built around quality, presentation, branding and professional service.',
  path: '/about/',
  image: '/images/hero/feature-slate-portfolio.jpg',
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A professional partner for corporate gifting"
        lead={`${site.name} works with businesses that need gifting handled properly — premium products, your branding applied correctly, and bulk quantities delivered on time.`}
      />
      <Breadcrumbs items={[{ label: 'About' }]} />

      <section className="section" aria-labelledby="about-intro">
        <div className="container split split--wide-left">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 id="about-intro">
              Corporate gifting is a business problem before it is a shopping
              one
            </h2>
            <p className="lead">
              Somebody has to choose a gift that suits a thousand different
              people, get a logo onto it without it looking cheap, keep it
              inside a budget, and have it all arrive before a date that
              cannot move.
            </p>
            <p>
              That is the work we take on. We supply premium corporate gifts —
              diary and pen sets, branded merchandise, onboarding kits, festival
              hampers and fully customized gifting — to businesses buying in
              bulk. Products are selected for how they present and how they
              last, branding is matched to the material rather than forced onto
              it, and nothing goes into production before you have approved it.
            </p>
            <p>
              We are a catalogue and enquiry business, not a shop. Pricing
              depends on quantity, branding and packaging, so it is quoted
              against your actual requirement rather than listed against a
              product.
            </p>
          </div>

          <Reveal className="split__media">
            <Image
              src="/images/hero/feature-slate-portfolio.jpg"
              alt="Slate grey corporate portfolio and metal pen presented in a gift box"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 92vw, 46vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="about-what">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="What we focus on"
            title="What matters to us"
            lead="Four things decide whether a corporate gift lands well. We hold all four."
            id="about-what"
            center
          />
          <ul className="about-points">
            {aboutPoints.map((p) => (
              <li key={p.title}>
                <Icon name="check" size={18} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="note-card" style={{ marginTop: '36px' }}>
            <strong>More about us, coming soon.</strong> This section is
            reserved for our company story, team and credentials. Add the
            details you want shown in{' '}
            <code>src/data/content.js</code> and they will appear here.
          </div>
        </div>
      </section>

      <WhyChooseUs
        eyebrow="Working with us"
        title="What you get when you work with Matchless"
        lead="The practical side of the service, beyond the products themselves."
      />

      <section className="section" aria-labelledby="about-cats">
        <div className="container container--narrow center">
          <SectionHeading
            eyebrow="Explore"
            title="See what we supply"
            lead="Browse the catalogue by category, or tell us what you have in mind and we will build it."
            id="about-cats"
            center
          />
          <div className="btn-row btn-row--center">
            <Link href="/products/" className="btn btn--navy">
              Browse Products <Icon name="arrowRight" size={18} />
            </Link>
            <Link href="/custom-gifting/" className="btn btn--outline">
              Custom Corporate Gifting
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Talk to us"
        title="Tell us what you need to gift"
        lead="Share the occasion, quantity and budget — we will come back with options and bulk pricing."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
