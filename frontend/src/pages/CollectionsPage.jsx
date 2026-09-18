
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import './CollectionsPage.css';

const marqueeItemsTop = [
  'FINE JEWELLERY',
  'EXQUISITE DESIGNS',
  'HERITAGE & TRUST',
  'TIMELESS CRAFT',
  'FOR EVERY OCCASION',
];

const marqueeItemsBottom = [
  'BESPOKE CREATIONS',
  'ETHICAL SOURCING',
  'LASTING MEMORIES',
  'A LEGACY OF LOVE',
  'CRAFTED FOR GENERATIONS',
];

const MarqueeRow = ({ items, direction = 'left' }) => {
  const repeatedItems = [...items, ...items];

  return (
    <div className={`editorial-marquee__row ${direction}`}>
      <div className="editorial-marquee__track">
        {repeatedItems.map((item, index) => (
          <div
            className="editorial-marquee__item"
            key={`${item}-${index}`}
          >
            <span className="editorial-marquee__text">
              {item}
            </span>

            <span className="editorial-marquee__diamond">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CollectionsPage() {
  return (
    <section className="collections-page">

      <div className="container">

        {/* =====================================================
            COLLECTIONS INTRO
        ===================================================== */}

        <section className="collections-intro">

          <div className="collections-intro__meta">
            <span>01</span>
            <span>THE COLLECTIONS</span>
            <span>EST. 1955</span>
          </div>

          <div className="collections-intro__content">

            <div className="collections-intro__eyebrow">
              A CURATED EXPRESSION OF CRAFT
            </div>

            <h1>
              Jewellery that
              <em> becomes timeless.</em>
            </h1>

            <p>
              Discover collections shaped by generations of craftsmanship,
              refined design and an enduring appreciation for the art of jewellery.
            </p>

          </div>

          <div className="collections-intro__index">

            <span>01</span>

            <div className="collections-intro__line">
              <span></span>
            </div>

            <span>12</span>

          </div>

        </section>


        {/* =====================================================
            EDITORIAL BACKGROUND ELEMENTS
        ===================================================== */}

        <div className="editorial-cross editorial-cross--one"></div>

        <div className="editorial-cross editorial-cross--two"></div>

        <div className="editorial-arc"></div>

        <div className="editorial-frame"></div>

        <div className="editorial-caption">
          Curated · Crafted · Collected
        </div>


        {/* =====================================================
            COLLECTION CARDS
        ===================================================== */}

        <div className="collections-page__grid">

          {CATEGORIES.map((cat, index) => (

            <Link
              to={`/category/${cat.slug}`}
              className="collection-tile"
              key={cat.slug}
            >

              {/* Card Image */}

              <div className="collection-tile__media">

                <img
                  src={cat.img}
                  alt={cat.label}
                />

                <div className="collection-tile__overlay"></div>


                {/* Card Editorial Label */}

                <div className="collection-tile__eyebrow">

                  <span>FOR</span>
                  <span>EVERY</span>
                  <span>CHAPTER</span>

                  <div className="collection-tile__marker">
                    <i></i>
                    <span></span>
                  </div>

                </div>

              </div>


              {/* Card Content */}

              <div className="collection-tile__body">

                <h3>
                  {cat.label}
                </h3>

                <p>
                  {cat.desc}
                </p>


                {/* Card Footer */}

                <div className="collection-tile__footer">

                  <span className="collection-tile__link">
                    View Products
                    <ArrowRight size={16} />
                  </span>


                  <div className="collection-tile__number">

                    <span></span>

                    <strong>
                      {String(index + 1).padStart(2, '0')}
                    </strong>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>


        {/* =====================================================
            BOTTOM EDITORIAL SECTION
        ===================================================== */}

        <div className="editorial-bottom">

          <div className="bottom-word">
            TIMELESS
          </div>

          <div className="bottom-subword">
            ELEGANCE
          </div>


          <div className="bottom-meta">

            <span>
              EST.
            </span>

            <strong>
              1955
            </strong>

            <span>
              INDIA
            </span>

          </div>


          <div className="bottom-rule"></div>

        </div>

      </div>


      {/* =====================================================
          FINAL TWO-WAY EDITORIAL MARQUEE
          Positioned at the absolute bottom of the page
      ===================================================== */}

      <section className="editorial-marquee">

        {/* Editorial Heading */}

        <div className="editorial-marquee__intro">

          <span className="editorial-marquee__line"></span>

          <span className="editorial-marquee__eyebrow">
            TIMELESS CRAFTSMANSHIP
          </span>

          <span className="editorial-marquee__line"></span>

        </div>


        {/* =================================================
            TOP ROW — MOVES RIGHT
        ================================================= */}

        <MarqueeRow
          items={marqueeItemsTop}
          direction="move-right"
        />


        {/* =================================================
            CENTER EDITORIAL STATEMENT
        ================================================= */}

        <div className="editorial-marquee__center">

          <span>
            CRAFTED FOR GENERATIONS
          </span>

        </div>


        {/* =================================================
            BOTTOM ROW — MOVES LEFT
        ================================================= */}

        <MarqueeRow
          items={marqueeItemsBottom}
          direction="move-left"
        />

      </section>

    </section>
  );
}
