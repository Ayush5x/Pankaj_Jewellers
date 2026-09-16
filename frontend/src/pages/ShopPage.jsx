import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';
import '../pages/pages-shared.css';
import './ShopPage.css';

export default function ShopPage() {
  const [activeCat, setActiveCat] = useState('all');

  const products = activeCat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCat);

  return (
    <section className="shop-page">
      <div className="container">
        <p className="page-eyebrow">Full Catalogue</p>
        <h1 className="page-title">Shop All Jewellery</h1>
        <p className="page-lead">Every design across our collections, in one place.</p>

        <div className="shop-page__filters">
          <button
            className={`shop-page__filter ${activeCat === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveCat('all')}
          >
            All ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((c) => {
            const count = PRODUCTS.filter((p) => p.category === c.slug).length;
            if (count === 0) return null;
            return (
              <button
                key={c.slug}
                className={`shop-page__filter ${activeCat === c.slug ? 'is-active' : ''}`}
                onClick={() => setActiveCat(c.slug)}
              >
                {c.label} ({count})
              </button>
            );
          })}
        </div>

        <div className="shop-page__grid">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
