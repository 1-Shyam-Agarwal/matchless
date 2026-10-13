import Link from 'next/link';
import Image from 'next/image';
import Icon from '../Icon';
import { inr } from '@/lib/price';

/**
 * Product card in the new design — image on a soft stage, label, name and a
 * price footer (offer price with the MRP struck through, or "Price on
 * request"); the whole card links to the product page.
 * Images are always shown whole; transparent cut-outs (branded appliances)
 * get extra padding. Takes a `toTile()` object (data/products).
 */
export default function ProductTile({ product: p, eager = false }) {
  const href = `/products/${p.slug}/`;
  const cutout = p.cutout;
  const [w, h] = p.imageSizes?.[0] ?? [1100, 825];

  return (
    <article className={`bs-card${cutout ? ' bs-card--cutout' : ''}`}>
      <Link href={href} className="bs-card__media" tabIndex={-1} aria-hidden="true">
        <Image
          src={p.image}
          alt=""
          width={w}
          height={h}
          sizes="(max-width: 640px) 80vw, (max-width: 1000px) 45vw, 300px"
          loading={eager ? undefined : 'lazy'}
        />
        {(p.brand || p.tag) && <span className="bs-card__tag">{p.brand ?? p.tag}</span>}
      </Link>
      <div className="bs-card__body">
        <p className="bs-card__cat">
          {p.label}
          {p.model && <span className="bs-card__model"> · {p.model}</span>}
        </p>
        <h3 className="bs-card__title">
          <Link href={href}>{p.name}</Link>
        </h3>
        {p.price && p.moq && (
          <p className="bs-card__moq">MOQ {p.moq} · price negotiable</p>
        )}
        <p className="bs-card__foot">
          {p.price ? (
            <span className="bs-card__price" title="Inclusive of 18% GST">
              <strong>{inr(p.price)}</strong>
              {p.mrp > p.price && <s aria-label={`MRP ${inr(p.mrp)}`}>{inr(p.mrp)}</s>}
            </span>
          ) : (
            <span>Price on request</span>
          )}
          <span className="bs-card__go" aria-hidden="true">
            <Icon name="arrowUpRight" size={16} />
          </span>
        </p>
      </div>
    </article>
  );
}
