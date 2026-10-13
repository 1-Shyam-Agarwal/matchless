import { products } from './products';

/**
 * Catalogue products to show on a shop category's page, picked by the
 * category's `related` rule (catalogue category slugs and/or name keywords).
 * Products with a `shop` field matching the category always win. Pass
 * `limit = 0` for no limit.
 * Kept apart from shopCategories.js so the quote form — which imports that
 * file on the client — does not pull the whole catalogue into its bundle.
 */
export function productsForShopCategory(category, limit = 10) {
  /* Products assigned straight to this category (e.g. Ubon appliances). */
  const own = products.filter((p) => p.shop === category.slug);
  if (own.length) return limit ? own.slice(0, limit) : own;

  const { categories = [], keywords = [] } = category.related ?? {};
  if (!categories.length && !keywords.length) return [];
  const words = keywords.map((k) => k.toLowerCase());

  return products
    .filter(
      (p) =>
        !p.shop &&
        (p.categories.some((c) => categories.includes(c)) ||
          words.some((w) => p.name.toLowerCase().includes(w)))
    )
    .slice(0, limit || undefined);
}
