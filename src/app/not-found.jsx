import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow eyebrow--center">404</p>
      <h1>We couldn&rsquo;t find that page</h1>
      <p className="lead" style={{ maxWidth: '48ch', margin: '0 auto 32px' }}>
        The link may be out of date, or the product may have moved. Try the
        catalogue, or tell us what you are looking for.
      </p>
      <div className="btn-row btn-row--center">
        <Link href="/products/" className="btn btn--navy">
          Browse Products <Icon name="arrowRight" size={18} />
        </Link>
        <Link href="/quote/" className="btn btn--outline">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
