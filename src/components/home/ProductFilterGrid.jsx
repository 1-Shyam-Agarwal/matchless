'use client';

import { useState } from 'react';
import ProductTile from './ProductTile';

const ALL = 'All';

/**
 * Product grid with one-tap type filters ("Mixer Grinders", "Kettles"…).
 * `products` are `toTile()` objects; `types` sets the chip order.
 */
export default function ProductFilterGrid({ products, types }) {
  const [type, setType] = useState(ALL);
  const present = types.filter((t) => products.some((p) => p.type === t));
  const shown = type === ALL ? products : products.filter((p) => p.type === type);
  const count = (t) => (t === ALL ? products.length : products.filter((p) => p.type === t).length);

  return (
    <div className="pf">
      <div className="pf__chips" role="toolbar" aria-label="Filter by product type">
        {[ALL, ...present].map((t) => (
          <button
            key={t}
            type="button"
            className={`pf__chip${t === type ? ' is-active' : ''}`}
            aria-pressed={t === type}
            onClick={() => setType(t)}
          >
            {t} <span className="pf__count">{count(t)}</span>
          </button>
        ))}
      </div>

      <p className="pf__status" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? 'product' : 'products'}
        {type !== ALL && <> in {type}</>}
      </p>

      <ul className="pf__grid">
        {shown.map((p, i) => (
          <li key={p.slug}>
            <ProductTile product={p} eager={i < 8} />
          </li>
        ))}
      </ul>
    </div>
  );
}
