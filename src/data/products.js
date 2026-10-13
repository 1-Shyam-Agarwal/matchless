/* ============================================================================
   PRODUCT CATALOGUE
   ----------------------------------------------------------------------------
   This one file drives the products page, every category page, the homepage
   "Featured" strip and every individual product page. Nothing else needs to
   change when you add stock.

   TO ADD A PRODUCT
   1. Put a photo at  /public/images/products/<slug>.jpg   (4:3, ~1100x825px)
   2. Copy any block below, paste it into the array, and edit the fields.
   3. `slug` must be unique and lowercase-with-hyphens — it becomes the URL
      /products/<slug>/

   FIELD REFERENCE
   slug          unique id + URL
   name          shown on cards and as the page H1
   image         path under /public
   categories    array of category slugs from data/categories.js (first = main)
   occasions     array of occasion slugs from data/occasions.js
   giftType      free text, powers the "Gift Type" filter
   short         one line for the product card
   description   one or two paragraphs for the product page
   features      bullet list of what is in the set / what it is
   customization bullet list of branding options
   tags          small labels shown on the card
   featured      true = appears on the homepage
   moq           leave null unless you want a specific minimum shown
   ========================================================================== */

import { ubonProducts } from './ubonProducts';
import { boultProducts } from './boultProducts';
import { bagProducts } from './bagProducts';
import { categoryName } from './categories';

/* Matchless's own catalogue. Branded ranges live in their own files:
   ubonProducts.js (appliances), boultProducts.js (audio & wearables) and
   bagProducts.js (cabin trolleys). */
const catalogue = [
  /* Empty for now — the new product set goes here. Copy the field layout
     from the reference at the top of this file. */
];

export const products = [...catalogue, ...ubonProducts, ...boultProducts, ...bagProducts];

/* ---------------------------------------------------------------------------
   Derived helpers — no need to edit.
   ------------------------------------------------------------------------ */

export const productBySlug = (slug) => products.find((p) => p.slug === slug);

/** Small label above a product name: its type (appliances) or main category. */
export const productLabel = (p) =>
  p.type ?? (p.categories[0] ? categoryName(p.categories[0]) : '');

/** Just what a product card needs — keeps client components' props small. */
export const toTile = (p) => ({
  slug: p.slug,
  name: p.name,
  image: p.image,
  imageSizes: p.imageSizes ?? null,
  brand: p.brand ?? null,
  cutout: Boolean(p.cutout),
  model: p.model ?? null,
  type: p.type ?? null,
  tag: p.tags?.[0] ?? null,
  label: productLabel(p),
  mrp: p.mrp ?? null,
  price: p.price ?? null,
  moq: p.moq ?? null,
});

export const productsInCategory = (slug) =>
  products.filter((p) => p.categories.includes(slug));

export const featuredProducts = products.filter((p) => p.featured);

export const giftTypes = [...new Set(products.map((p) => p.giftType))].sort();

export const relatedProducts = (product, limit = 3) =>
  products
    .filter((p) => p.slug !== product.slug)
    .map((p) => ({
      p,
      /* Same product type counts most, then same shop category, then
         shared catalogue categories. */
      score:
        (product.type && p.type === product.type ? 10 : 0) +
        (product.shop && p.shop === product.shop ? 4 : 0) +
        p.categories.filter((c) => product.categories.includes(c)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
