import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import HomeHero from '@/components/home/HomeHero';
import BestsellerCarousel from '@/components/home/BestsellerCarousel';
import ShopCategoryGrid from '@/components/home/ShopCategoryGrid';
import TrustedBrands from '@/components/home/TrustedBrands';
import { shopCategories } from '@/data/shopCategories';
import { featuredProducts, toTile } from '@/data/products';
import { processSteps } from '@/data/content';
import { pageMeta } from '@/lib/seo';
import './home.css';

export const metadata = pageMeta({
  title: 'Matchless Corporate Gifting | Premium Corporate Gifts',
  description:
    'Premium corporate gifting and customized gifting solutions for businesses — gift hampers, employee gifts, branded merchandise, onboarding kits and festival gifts, supplied in bulk with your branding. Request a quote.',
  path: '/',
});

const brandingMethods = [
  'Logo debossing',
  'Foil stamping',
  'Laser engraving',
  'Printed sleeves',
  'Name personalisation',
  'Custom packaging',
];

export default function HomePage() {
  return (
    <div className="home ed">
      <HomeHero />

      {/* ---------------------------------------------- TRUSTED BRANDS */}
      <section className="hs hs--tb" aria-labelledby="tb-title">
        <div className="container">
          <h2 id="tb-title" className="tb__title">
            Our trusted <em>Brands</em>
          </h2>
          <TrustedBrands />
        </div>
      </section>

      {/* ------------------------------------------------ TOP CATEGORIES */}
      <section className="hs" aria-labelledby="sc-title">
        <div className="container">
          <div className="hs__head">
            <h2 id="sc-title" className="hs__title">
              Shop our top <em>Categories</em>
            </h2>
            <Link href="/categories/" className="hs__more">
              All categories <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <ShopCategoryGrid categories={shopCategories} more />
        </div>
      </section>

      {/* ------------------------------------------------- BESTSELLERS */}
      <section className="hs" aria-labelledby="bs-title">
        <div className="container">
          <div className="hs__head">
            <div>
              <p className="hs__kicker">Appliances, audio &amp; smartwatches</p>
              <h2 id="bs-title" className="hs__title">
                Bestselling <Icon name="sparkle" size={22} className="hs__glyph" />{' '}
                <em>Gifts</em>
              </h2>
            </div>
            <Link href="/products/" className="hs__more">
              More products <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <BestsellerCarousel
            products={featuredProducts.map(toTile)}
            label="Bestselling gifts"
          />
        </div>
      </section>

      {/* ---------------------------------------------------- BRANDING */}
      <section className="hs" aria-labelledby="brand-title">
        <div className="container">
          <div className="hb">
            <Reveal className="hb__media">
              <Image
                src="/images/products/ubon/mg-6000-life-1.webp"
                alt="Ubon MixPro mixer grinder on a kitchen counter with spices and fresh juice"
                width={848}
                height={665}
                sizes="(max-width: 900px) 92vw, 620px"
              />
            </Reveal>
            <div className="hb__copy">
              <p className="hs__kicker">Custom corporate gifting</p>
              <h2 id="brand-title" className="hs__title">
                Built around <em>your brand</em>, not adapted to it
              </h2>
              <p className="hb__lead">
                Tell us the occasion, the headcount and the budget. We come back
                with options that fit all three, carry your branding properly,
                and arrive boxed and ready to hand over.
              </p>
              <ul className="hb__chips">
                {brandingMethods.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <Link href="/custom-gifting/" className="hh__btn hh__btn--dark">
                Discuss your requirement <Icon name="arrowRight" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- PROCESS */}
      <section className="hs hs--last" aria-labelledby="how-title">
        <div className="container">
          <div className="hw">
            <div className="hs__head hs__head--dark">
              <div>
                <p className="hs__kicker">How it works</p>
                <h2 id="how-title" className="hs__title">
                  From brief to <em>doorstep</em>, in five steps
                </h2>
              </div>
              <p className="hw__note">
                Nothing goes into production until you have approved the proof.
              </p>
            </div>
            <ol className="hw__steps">
              {processSteps.map((s) => (
                <li key={s.n} className="hw__step">
                  <span className="hw__n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

    </div>
  );
}
