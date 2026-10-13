import Image from 'next/image';

/**
 * Brands we supply. `h` is the rendered logo height in px — wide wordmarks
 * sit a little shorter so every logo carries the same visual weight.
 */
const brands = [
  { name: 'Milton', src: '/images/brands/milton.png', w: 247, h: 62, size: 24 },
  { name: 'Boult', src: '/images/brands/boult.png', w: 480, h: 42, size: 15 },
  { name: 'Ubon', src: '/images/brands/ubon.png', w: 560, h: 175, size: 34 },
  { name: 'boAt', src: '/images/brands/boat.svg', w: 152, h: 62, size: 28 },
  { name: 'Borosil', src: '/images/brands/borosil.png', w: 253, h: 47, size: 19 },
  { name: 'Ambrane', src: '/images/brands/ambrane.svg', w: 1130, h: 158, size: 15 },
  { name: 'Portronics', src: '/images/brands/portronics.png', w: 348, h: 68, size: 20 },
];

export default function TrustedBrands() {
  return (
    <ul className="tb" role="list">
      {brands.map((b) => (
        <li key={b.name} className="tb__item">
          <Image
            src={b.src}
            alt={b.name}
            width={b.w}
            height={b.h}
            style={{ height: b.size, width: 'auto' }}
          />
        </li>
      ))}
    </ul>
  );
}
