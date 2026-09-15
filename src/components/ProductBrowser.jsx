'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Icon from './Icon';
import ProductGrid from './ProductGrid';
import { products, giftTypes } from '@/data/products';
import { categories } from '@/data/categories';
import { occasions } from '@/data/occasions';

const ALL = 'all';

export default function ProductBrowser() {
  const params = useSearchParams();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(ALL);
  const [occasion, setOccasion] = useState(ALL);
  const [giftType, setGiftType] = useState(ALL);
  const [customOnly, setCustomOnly] = useState(false);

  /* Deep links like /products/?category=employee-gifts or ?occasion=conferences */
  useEffect(() => {
    const c = params.get('category');
    const o = params.get('occasion');
    const t = params.get('type');
    if (c && categories.some((x) => x.slug === c)) setCategory(c);
    if (o && occasions.some((x) => x.slug === o)) setOccasion(o);
    if (t && giftTypes.includes(t)) setGiftType(t);
  }, [params]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== ALL && !p.categories.includes(category)) return false;
      if (occasion !== ALL && !p.occasions.includes(occasion)) return false;
      if (giftType !== ALL && p.giftType !== giftType) return false;
      if (customOnly && !p.customization?.length) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.giftType.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category, occasion, giftType, customOnly]);

  const active =
    (category !== ALL ? 1 : 0) +
    (occasion !== ALL ? 1 : 0) +
    (giftType !== ALL ? 1 : 0) +
    (customOnly ? 1 : 0) +
    (query.trim() ? 1 : 0);

  const reset = () => {
    setQuery('');
    setCategory(ALL);
    setOccasion(ALL);
    setGiftType(ALL);
    setCustomOnly(false);
  };

  return (
    <div className="browser">
      <div className="browser__bar">
        <div className="browser__search">
          <Icon name="search" size={18} />
          <label htmlFor="product-search" className="visually-hidden">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="Search gifts, sets, notebooks…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="browser__filters">
          <div className="field field--inline">
            <label htmlFor="f-category">Category</label>
            <select
              id="f-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={ALL}>All categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--inline">
            <label htmlFor="f-occasion">Occasion</label>
            <select
              id="f-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value={ALL}>All occasions</option>
              {occasions.map((o) => (
                <option key={o.slug} value={o.slug}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--inline">
            <label htmlFor="f-type">Gift Type</label>
            <select
              id="f-type"
              value={giftType}
              onChange={(e) => setGiftType(e.target.value)}
            >
              <option value={ALL}>All types</option>
              {giftTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <label className="browser__check">
            <input
              type="checkbox"
              checked={customOnly}
              onChange={(e) => setCustomOnly(e.target.checked)}
            />
            <span>Customisable only</span>
          </label>
        </div>
      </div>

      <div className="browser__meta">
        <p aria-live="polite">
          Showing <strong>{results.length}</strong>{' '}
          {results.length === 1 ? 'product' : 'products'}
          {active > 0 && ' matching your selection'}
        </p>
        {active > 0 && (
          <button type="button" className="browser__reset" onClick={reset}>
            <Icon name="close" size={14} /> Clear filters
          </button>
        )}
      </div>

      <ProductGrid products={results} priorityCount={3} label="Product results" />
    </div>
  );
}
