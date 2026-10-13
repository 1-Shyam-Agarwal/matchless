/** ₹ amounts in Indian digit grouping, e.g. 123456 -> "₹1,23,456". */
export const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

/** Whole-number % saving of `price` against `mrp`, or null. */
export const discountPct = (mrp, price) =>
  mrp && price && mrp > price ? Math.round((1 - price / mrp) * 100) : null;
