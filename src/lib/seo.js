import { site } from '@/data/site';

/**
 * Builds a complete Next.js Metadata object for a page, including canonical
 * URL, Open Graph and Twitter cards. Keeps every page consistent and stops
 * titles/descriptions drifting apart.
 */
export function pageMeta({
  title,
  description,
  path = '/',
  image = '/images/hero/hero-prestige-gift-set.jpg',
  keywords,
}) {
  const url = `${site.url}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${site.name}`;

  return {
    // `absolute` stops the root layout's `%s | Matchless Corporate Gifting`
    // template from appending the brand name a second time.
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      locale: 'en_IN',
      images: [{ url: `${site.url}${image}`, width: 1240, height: 930, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${site.url}${image}`],
    },
  };
}

/** Organisation schema — emitted once, in the root layout. */
export function organizationSchema(contact, isSet) {
  const node = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/brand/matchless-logo.png`,
    description: site.description,
    slogan: site.tagline,
  };

  const contactPoint = { '@type': 'ContactPoint', contactType: 'sales' };
  if (isSet(contact.phoneE164)) contactPoint.telephone = contact.phoneE164;
  if (isSet(contact.email)) contactPoint.email = contact.email;
  if (contactPoint.telephone || contactPoint.email) {
    node.contactPoint = [contactPoint];
  }
  if (isSet(contact.location)) {
    node.address = { '@type': 'PostalAddress', addressLocality: contact.location };
  }
  const sameAs = [contact.linkedin, contact.instagram].filter(
    (u) => u && isSet(u)
  );
  if (sameAs.length) node.sameAs = sameAs;

  return node;
}

/**
 * Product schema. Deliberately does NOT emit an `offers` price — this is a
 * catalogue, pricing is quoted offline, and inventing a price would be wrong.
 */
export function productSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.short,
    image: `${site.url}${product.image}`,
    category: product.categories[0],
    brand: { '@type': 'Brand', name: site.name },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      // Price is quoted per enquiry; the enquiry page is the "offer" URL.
      url: `${site.url}/quote/`,
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Price on request — bulk pricing quoted per enquiry.',
      },
    },
  };
}
