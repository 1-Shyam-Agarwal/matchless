'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Product image stage with a thumbnail strip underneath (only when there is
 * more than one image). The first `cutoutCount` images are transparent product
 * shots, shown with padding and a soft shadow; the rest (photographs, e.g.
 * lifestyle shots) are shown edge to edge. Every image fits whole — no crop.
 */
export default function ProductGallery({ images, sizes, name, cutoutCount = 0 }) {
  const [active, setActive] = useState(0);
  const dims = (i) => sizes?.[i] ?? [1100, 825];
  const cutout = active < cutoutCount;

  return (
    <div className={`pg${cutout ? ' pg--cutout' : ''}`}>
      <div className="pg__stage">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${name}${images.length > 1 ? ` — view ${active + 1}` : ''}`}
          width={dims(active)[0]}
          height={dims(active)[1]}
          priority={active === 0}
          sizes="(max-width: 900px) 92vw, 560px"
          className="pg__img"
        />
      </div>

      {images.length > 1 && (
        <ul className="pg__thumbs" aria-label="Product images">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                className={`pg__thumb${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
              >
                <Image src={src} alt="" width={dims(i)[0]} height={dims(i)[1]} sizes="120px" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
