import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { site } from '@/data/site';

/**
 * Homepage hero. A dark, image-led panel — copy on the left, a layered product
 * image pair on the right, and a glass stat rail across the foot. The main
 * image is priority-loaded as the LCP element.
 */
export default function Hero() {
  return (
    <section className="hero on-dark" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">{site.tagline}</p>
          <h1 id="hero-title" className="hero__title">
            Premium Corporate Gifting,{' '}
            <span className="hero__title-accent">Made Memorable.</span>
          </h1>
          <p className="hero__lead">{site.intro}</p>

          <div className="btn-row hero__actions">
            <Link href="/quote/" className="btn btn--gold">
              Get a Quote <Icon name="arrowRight" size={18} />
            </Link>
            <Link href="/products/" className="btn btn--outline-light">
              Explore Our Gifts
            </Link>
          </div>

          <ul className="hero__points">
            <li>
              <Icon name="check" size={17} /> Bulk &amp; volume orders
            </li>
            <li>
              <Icon name="check" size={17} /> Your branding applied
            </li>
            <li>
              <Icon name="check" size={17} /> Gift-ready packaging
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <Image
              src="/images/hero/hero-prestige-gift-set.jpg"
              alt="Premium corporate diary and pen gift set presented in a rigid gift box"
              width={1240}
              height={930}
              priority
              sizes="(max-width: 900px) 92vw, 46vw"
              className="hero__img"
            />
          </div>
          <div className="hero__frame hero__frame--accent">
            <Image
              src="/images/hero/hero-accent-navy-set.jpg"
              alt="Navy corporate diary and metal pen in a presentation box"
              width={700}
              height={875}
              sizes="(max-width: 900px) 34vw, 17vw"
              className="hero__img"
            />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-rule" aria-hidden="true" />
            <span className="hero__badge-txt">
              Prestige Series
              <br />
              <strong>Diary &amp; Pen Gift Sets</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="hero__stats">
          <div className="hero__stat">
            <dt>Categories</dt>
            <dd>10 gifting ranges</dd>
          </div>
          <div className="hero__stat">
            <dt>Branding</dt>
            <dd>Deboss, foil &amp; laser</dd>
          </div>
          <div className="hero__stat">
            <dt>Order type</dt>
            <dd>Bulk &amp; volume</dd>
          </div>
          <div className="hero__stat">
            <dt>Approval</dt>
            <dd>Proof before production</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
