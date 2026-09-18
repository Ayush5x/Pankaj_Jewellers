
import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';

import '../pages/pages-shared.css';
import './ShopPage.css';

export default function ShopPage() {
  const [activeCat, setActiveCat] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const products = useMemo(() => {
    let filtered =
      activeCat === 'all'
        ? [...PRODUCTS]
        : PRODUCTS.filter((product) => product.category === activeCat);

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
        break;

      case 'price-high':
        filtered.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
        break;

      case 'name':
        filtered.sort((a, b) =>
          String(a.name || '').localeCompare(String(b.name || ''))
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [activeCat, sortBy]);

  return (
    <main className="shop-page">
      <div className="container">

        {/* =========================================
            SHOP HEADER
        ========================================= */}

        <section className="shop-page__header">
          <div className="shop-page__heading">
            <p className="page-eyebrow">Fine Jewellery Collection</p>

            <h1 className="page-title">
              Shop All Jewellery
            </h1>

            <p className="page-lead">
              Every design across our collections, in one place.
            </p>
          </div>

          <div className="shop-page__header-line" />
        </section>


        {/* =========================================
            FILTER / TOOLBAR
        ========================================= */}

        <section className="shop-page__toolbar">

          <div className="shop-page__filters">

            <button
              type="button"
              className={`shop-page__filter ${
                activeCat === 'all' ? 'is-active' : ''
              }`}
              onClick={() => setActiveCat('all')}
            >
              <span>All</span>
              <small>{PRODUCTS.length}</small>
            </button>

            {CATEGORIES.map((category) => {
              const count = PRODUCTS.filter(
                (product) => product.category === category.slug
              ).length;

              if (count === 0) return null;

              return (
                <button
                  type="button"
                  key={category.slug}
                  className={`shop-page__filter ${
                    activeCat === category.slug ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveCat(category.slug)}
                >
                  <span>{category.label}</span>
                  <small>{count}</small>
                </button>
              );
            })}

          </div>


          {/* =========================================
              SORT
          ========================================= */}

          <div className="shop-page__sort">
            <label htmlFor="shop-sort">
              Sort by
            </label>

            <select
              id="shop-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="featured">
                Featured
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="name">
                Name: A–Z
              </option>
            </select>
          </div>

        </section>


        {/* =========================================
            RESULT INFO
        ========================================= */}

        <div className="shop-page__result-row">
          <p>
            Showing <strong>{products.length}</strong>{' '}
            {products.length === 1 ? 'design' : 'designs'}
          </p>

          {activeCat !== 'all' && (
            <button
              type="button"
              className="shop-page__clear"
              onClick={() => setActiveCat('all')}
            >
              Clear filter
            </button>
          )}
        </div>


        {/* =========================================
            PRODUCT GRID
        ========================================= */}

        {products.length > 0 ? (
          <div className="shop-page__grid">
            {products.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
              />
            ))}
          </div>
        ) : (
          <div className="shop-page__empty">
            <div className="shop-page__empty-icon">
              ♡
            </div>

            <h2>No designs found</h2>

            <p>
              We couldn't find any jewellery in this collection.
            </p>

            <button
              type="button"
              onClick={() => setActiveCat('all')}
            >
              View all jewellery
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

