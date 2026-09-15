import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
  priorityCount = 0,
  columns = 3,
  /* Screen-reader-only <h2> so the <h3> product titles never jump a level.
     Pass this on pages where the grid is the first content under the <h1>. */
  label,
}) {
  if (!products?.length) {
    return (
      <p className="empty-state">
        No products match this selection yet. Try a different filter, or{' '}
        <a href="/quote/">tell us what you are looking for</a> — we source beyond
        this catalogue.
      </p>
    );
  }

  return (
    <>
      {label && <h2 className="visually-hidden">{label}</h2>}
      <div className={`grid grid--${columns}`}>
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < priorityCount} />
        ))}
      </div>
    </>
  );
}
