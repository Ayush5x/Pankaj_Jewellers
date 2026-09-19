import { useMemo, useState } from 'react';
import NewProductCard from '../components/NewProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';
import '../pages/pages-shared.css';
import './ShopPage.css';
import jewelVideo from  "../assets/video/video1_cut.mp4"

const CATEGORY_ICONS = {
  rings: '◇',
  earrings: '✧',
  necklaces: '⌁',
  bangles: '◌',
  bracelets: '◒',
  pendants: '◆',
  mangalsutra: '•',
  chains: '⛓',
  'bridal-jewellery': '✦',
  'diamond-jewellery': '◇',
  'gold-jewellery': '◉',
  'kids-jewellery': '☆',
};

export default function ShopPage() {
  const [activeCat, setActiveCat] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const products = useMemo(() => {
    const filtered =
      activeCat === 'all'
        ? [...PRODUCTS]
        : PRODUCTS.filter((product) => product.category === activeCat);

    switch (sortBy) {
      case 'price-low':
        filtered.sort(
          (a, b) => Number(a.price || 0) - Number(b.price || 0)
        );
        break;

      case 'price-high':
        filtered.sort(
          (a, b) => Number(b.price || 0) - Number(a.price || 0)
        );
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
      {/* HERO */}
      <section className="shop-hero">
        <div className="shop-hero__content">
          <p className="shop-hero__eyebrow">New arrivals</p>

          <h1>
            Shop The
            <br />
            Collection:
            <br />
            Timeless
            <br />
            Elegance
          </h1>

          <p className="shop-hero__description">
            Explore everyday essentials and statement pieces crafted with
            purity and timeless Indian artistry.
          </p>

          <div className="shop-hero__features">
            <span>
              <strong>◇</strong>
              Certified
              <br />
              Purity
            </span>

            <span>
              <strong>↗</strong>
              Easy
              <br />
              Exchange
            </span>

            <span>
              <strong>♡</strong>
              Made With
              <br />
              Trust
            </span>
          </div>
        </div>

        <div className="shop-hero__media">
          <video autoPlay muted loop playsInline poster="/heroo.png">
            <source src="/videos/shop-hero.mp4" type="video/mp4" />

            <source
              src="https://www.pexels.com/download/video/10835737/"
              type="video/mp4"
            />
          </video>

          <div className="shop-hero__media-overlay" />

          <div className="shop-hero__media-caption">
            NEW COLLECTION <strong>2026</strong>
          </div>

          <div className="shop-hero__side-text">
            Timeless craft
            <br />
            made for you
          </div>
        </div>
      </section>

      <div className="shop-page__container">
        <div className="shop-editorial-layout">
          {/* FEATURED STORY */}
          <section className="featured-story">
            <div className="editorial-label">
              <span>Featured Stories</span>
              <i />
            </div>

            <div className="featured-story__content">
              <div className="featured-story__image">
               <video autoPlay muted loop playsInline >
            <source src="/videos/shop-hero.mp4" type="video/mp4" />

            <source
              src={jewelVideo}
              type="video/mp4"
            />
          </video>

              </div>

              <div className="featured-story__copy">
                <p className="featured-story__eyebrow">
                  Behind the collection
                </p>

                <h2>Featured Product Story</h2>

                <p>
                  Every piece carries a story of craftsmanship, detail and
                  quiet luxury. Explore jewellery made to become part of your
                  most memorable moments.
                </p>

                <a href="#shop-products" className="editorial-link">
                  Explore the collection <span>→</span>
                </a>
              </div>
            </div>

            {/* ATELIER SECTION */}
            <div className="atelier-statement">
              <div className="atelier-mark">
                <svg
                  className="atelier-mark__svg"
                  viewBox="0 0 220 220"
                  aria-label="Atelier made by hand"
                >
                  <defs>
                    <path
                      id="atelierTextPath"
                      d="
                        M 110,110
                        m -82,0
                        a 82,82 0 1,1 164,0
                        a 82,82 0 1,1 -164,0
                      "
                    />
                  </defs>

                  <g className="atelier-mark__ring">
                    <text
                      className="atelier-mark__text"
                      textLength="515"
                      lengthAdjust="spacing"
                    >
                      <textPath
                        href="#atelierTextPath"
                        startOffset="0%"
                      >
                        ATELIER • MADE BY HAND • EST. 2014 • SOLEMNE • ATELIER • MADE BY HAND • EST. 2014 •
                      </textPath>
                    </text>

                    <circle
                      cx="110"
                      cy="110"
                      r="82"
                      className="atelier-mark__circle"
                    />
                  </g>

                  <g className="atelier-mark__center">
                    <text x="110" y="102" textAnchor="middle">
                      ✧
                    </text>

                    <text
                      x="110"
                      y="127"
                      textAnchor="middle"
                      className="atelier-mark__initials"
                    >
                      PJ
                    </text>
                  </g>
                </svg>
              </div>

              <div className="atelier-statement__copy">
                <p>
                  Every number represents a relationship — between maker and
                  material, object and wearer, present and future.
                </p>
              </div>
            </div>
          </section>

          {/* ALL PRODUCTS */}
          <section className="shop-catalog">
            <div className="shop-catalog__topline">
              <span>Pankaj Jewellers</span>

              
            </div>

            <div className="shop-catalog__heading">
              <div>
               

                <h2>All Products</h2>
              </div>

              <a href="#shop-products" className="catalog-view-link">
                View collection <span>→</span>
              </a>
            </div>

            <div className="shop-toolbar">
              <div className="shop-filters">
                {/* STATIC ALL BUTTON */}
                <div className="shop-filter-all">
                  <button
                    type="button"
                    className={`shop-filter ${
                      activeCat === 'all' ? 'is-active' : ''
                    }`}
                    onClick={() => setActiveCat('all')}
                  >
                    <span className="shop-filter__icon">✦</span>
                    <span>All</span>
                    <small>{PRODUCTS.length}</small>
                  </button>
                </div>

                {/* SCROLLABLE CATEGORIES */}
                <div className="shop-filters-scroll">
                  {CATEGORIES.map((category) => {
                    const count = PRODUCTS.filter(
                      (product) => product.category === category.slug
                    ).length;

                    if (count === 0) return null;

                    const icon =
                      CATEGORY_ICONS[category.slug] ||
                      category.icon ||
                      '✦';

                    return (
                      <button
                        type="button"
                        key={category.slug}
                        className={`shop-filter ${
                          activeCat === category.slug ? 'is-active' : ''
                        }`}
                        onClick={() => setActiveCat(category.slug)}
                      >
                        <span className="shop-filter__icon">
                          {icon}
                        </span>

                        <span>{category.label}</span>

                        <small>{count}</small>
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="shop-sort">
                <span>Sort</span>

                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A–Z</option>
                </select>
              </label>
            </div>

            {/* PRODUCT SECTION */}
            <div className="shop-catalog__scroll-frame">
              <div className="shop-result-row" id="shop-products">
                <p>
                  Showing <strong>{products.length}</strong>{' '}
                  {products.length === 1 ? 'design' : 'designs'}
                </p>

                {activeCat !== 'all' && (
                  <button
                    type="button"
                    className="clear-filter"
                    onClick={() => setActiveCat('all')}
                  >
                    Clear filter
                  </button>
                )}
              </div>

              {products.length > 0 ? (
                <div className="shop-product-grid">
                  {products.map((product) => (
                    <NewProductCard
                      product={product}
                      key={product.id}
                    />
                  ))}
                </div>
              ) : (
                <div className="shop-empty">
                  <div className="shop-empty__icon">♡</div>

                  <h3>No designs found</h3>

                  <p>
                    We could not find jewellery in this collection.
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
          </section>
        </div>
      </div>

      {/* CONTACT VIDEO SECTION */}
      <section className="contact-video-section">
        <video
          className="contact-video-section__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/contact-poster.png"
        >
          <source
            src="https://www.pexels.com/download/video/11353196/"
            type="video/mp4"
          />

          <source
            src="/videos/shop-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="contact-video-section__overlay" />

        <div className="contact-video-section__content">
          <p className="contact-video-section__eyebrow">
            LET&apos;S CONNECT
          </p>

          <h2>
            We&apos;re Here
            <br />
            For You
          </h2>

          <p className="contact-video-section__description">
            Whether it&apos;s a question, a custom design, or a store visit —
            we&apos;d love to hear from you.
          </p>

          <div className="contact-video-section__features">
            <span>
              <strong>◇</strong>
              Personalised
              <br />
              Assistance
            </span>

            <span>
              <strong>♧</strong>
              Quick
              <br />
              Response
            </span>

            <span>
              <strong>♡</strong>
              A More
              <br />
              Meaningful Experience
            </span>
          </div>
        </div>

        <div className="contact-video-section__side-text">
          More
          <br />
          Than Jewellery
          <br />
          A Part of
          <br />
          Your Story
        </div>
      </section>
    </main>
  );
}