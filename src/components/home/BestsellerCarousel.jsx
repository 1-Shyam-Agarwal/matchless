'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import ProductTile from './ProductTile';

/**
 * Horizontal, scroll-snapping product rail. Native scrolling does the work
 * (touch, trackpad, keyboard); the arrow buttons just nudge it one card at a
 * time and disable themselves at either end. `products` are `toTile()` objects.
 */
export default function BestsellerCarousel({ products, label = 'Products' }) {
  const track = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    sync();
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  const step = (dir) => {
    const el = track.current;
    const card = el?.querySelector('li');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <div className="bs">
      <ul className="bs__track" ref={track} aria-label={label}>
        {products.map((p, i) => {
          return (
            <li key={p.slug} className="bs__item">
              <ProductTile product={p} eager={i < 4} />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="bs__arrow bs__arrow--prev"
        onClick={() => step(-1)}
        disabled={atStart}
        aria-label="Previous products"
      >
        <Icon name="arrowLeft" size={18} />
      </button>
      <button
        type="button"
        className="bs__arrow bs__arrow--next"
        onClick={() => step(1)}
        disabled={atEnd}
        aria-label="Next products"
      >
        <Icon name="arrowRight" size={18} />
      </button>
    </div>
  );
}
