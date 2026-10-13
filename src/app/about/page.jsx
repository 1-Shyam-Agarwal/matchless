import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShopCategoryGrid from '@/components/home/ShopCategoryGrid';
import { aboutPoints, whyMatchless } from '@/data/content';
import { shopCategories } from '@/data/shopCategories';
import { site, whatsappHref } from '@/data/site';
import { pageMeta } from '@/lib/seo';
import '../home.css';

export const metadata = pageMeta({
  title: 'About Our Corporate Gifting',
  description:
    'Matchless Corporate Gifting is a corporate gifting company supplying premium, customized and bulk corporate gifts — built around quality, presentation, branding and professional service.',
  path: '/about/',
  image: '/images/hero/feature-slate-portfolio.jpg',
});

export default function AboutPage() {
  const wa = whatsappHref();

  return (
    <div className="ed">
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* ------------------------------------------------------ BANNER */}
      <section className="hs hs--flush">
        <div className="container">
          <div className="cd-hero" style={{ '--sc-bg': 'var(--navy-800)' }}>
            <div className="cd-hero__copy">
              <p className="cd-hero__kicker">About us</p>
              <h1 className="cd-hero__title">
                A professional partner for corporate <em>gifting</em>
              </h1>
              <p className="cd-hero__lead">
                {site.name} works with businesses that need gifting handled
                properly — premium products, your branding applied correctly,
                and bulk quantities delivered on time.
              </p>
              <div className="hh__actions">
                {wa && (
                  <a href={wa} className="hh__btn" target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={18} /> Talk to us on WhatsApp
                  </a>
                )}
              </div>
            </div>
            <div className="cd-hero__art cd-hero__art--photo">
              <Image
                src="/images/hero/feature-slate-portfolio.jpg"
                alt="Slate grey corporate portfolio and metal pen presented in a gift box"
                width={1200}
                height={800}
                sizes="(max-width: 800px) 90vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- WHO WE ARE */}
      <section className="hs" aria-labelledby="about-intro">
        <div className="container">
          <div className="cd-card ab-intro">
            <div>
              <p className="hs__kicker">Who we are</p>
              <h2 id="about-intro" className="hs__title">
                Corporate gifting is a business problem before it is a{' '}
                <em>shopping</em> one
              </h2>
            </div>
            <div className="ab-intro__body">
              <p className="ab-intro__lead">
                Somebody has to choose a gift that suits a thousand different
                people, get a logo onto it without it looking cheap, keep it
                inside a budget, and have it all arrive before a date that
                cannot move.
              </p>
              <p>
                That is the work we take on. We supply premium corporate gifts —
                diary and pen sets, branded merchandise, onboarding kits,
                festival hampers and fully customized gifting — to businesses
                buying in bulk. Products are selected for how they present and
                how they last, branding is matched to the material rather than
                forced onto it, and nothing goes into production before you
                have approved it.
              </p>
              <p>
                We are a catalogue and enquiry business, not a shop. Pricing
                depends on quantity, branding and packaging, so it is quoted
                against your actual requirement rather than listed against a
                product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- WHAT MATTERS */}
      <section className="hs" aria-labelledby="about-what">
        <div className="container">
          <div className="hs__head">
            <div>
              <p className="hs__kicker">Four things decide whether a gift lands well</p>
              <h2 id="about-what" className="hs__title">
                What <em>matters</em> to us
              </h2>
            </div>
          </div>
          <ol className="ab-points">
            {aboutPoints.map((p, i) => (
              <li key={p.title} className="cd-card">
                <span className="ab-points__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------ WHAT YOU GET */}
      <section className="hs" aria-labelledby="about-get">
        <div className="container">
          <div className="hw">
            <div className="hs__head hs__head--dark">
              <div>
                <p className="hs__kicker">Working with us</p>
                <h2 id="about-get" className="hs__title">
                  What you get with <em>Matchless</em>
                </h2>
              </div>
              <p className="hw__note">
                The practical side of the service, beyond the products themselves.
              </p>
            </div>
            <ul className="hw__steps ab-get">
              {whyMatchless.map((v) => (
                <li key={v.title} className="hw__step">
                  <span className="ab-get__icon">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- CATEGORIES */}
      <section className="hs hs--last" aria-labelledby="about-cats">
        <div className="container">
          <div className="hs__head">
            <div>
              <p className="hs__kicker">Browse the catalogue</p>
              <h2 id="about-cats" className="hs__title">
                See what we <em>supply</em>
              </h2>
            </div>
            <Link href="/custom-gifting/" className="hs__more">
              Custom corporate gifting <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <ShopCategoryGrid categories={shopCategories} more />
        </div>
      </section>
    </div>
  );
}
