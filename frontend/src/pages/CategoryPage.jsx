import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

import ProductCard from "../components/ProductCard";
import {
  getCategory,
  getProductsByCategory,
} from "../data/products";

import "../pages/pages-shared.css";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { slug } = useParams();

  const category = getCategory(slug);

  // Invalid category → back to collections
  if (!category) {
    return <Navigate to="/collections" replace />;
  }

  const products = getProductsByCategory(slug);

  return (
    <main className="category-page">

      {/* =========================================
          CATEGORY HERO
      ========================================= */}
      <section className="category-hero">

        <div className="category-hero__inner">

          <div className="category-hero__breadcrumb">
            <Link to="/">Home</Link>

            <ChevronRight size={14} />

            <Link to="/collections">
              Collections
            </Link>

            <ChevronRight size={14} />

            <span>
              {category.label}
            </span>
          </div>

          <div className="category-hero__content">

            <span className="category-hero__eyebrow">
              THE COLLECTION
            </span>

            <span className="category-hero__line" />

            <h1 className="category-hero__title">
              {category.label}
            </h1>

            {category.desc && (
              <p className="category-hero__description">
                {category.desc}
              </p>
            )}

          </div>

          <div className="category-hero__meta">
            <span>
              {products.length}{" "}
              {products.length === 1 ? "Piece" : "Pieces"}
            </span>

            <span className="category-hero__dot" />

            <span>
              PANKAJ JEWELLERS
            </span>
          </div>

        </div>

      </section>


      {/* =========================================
          PRODUCT COLLECTION
      ========================================= */}
      <section className="category-products">

        <div className="category-products__header">

          <div>
            <span className="category-products__eyebrow">
              CURATED FOR YOU
            </span>

            
          </div>

          <Link
            to="/shop"
            className="category-products__shop-link"
          >
            <span>View All</span>

            <ArrowRight size={17} />
          </Link>

        </div>


        {/* =========================================
            PRODUCTS
        ========================================= */}
        {products.length > 0 ? (

          <div className="category-products__grid">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="category-empty">

            <span className="category-empty__eyebrow">
              COMING SOON
            </span>

            <h2>
              Something beautiful
              <br />
              is on its way.
            </h2>

            <p>
              New designs in {category.label} are currently
              being curated. Explore our complete collection
              while you wait.
            </p>

            <Link
              to="/shop"
              className="category-empty__button"
            >
              Browse All Jewellery

              <ArrowRight size={17} />
            </Link>

          </div>

        )}

      </section>


      {/* =========================================
          BOTTOM EDITORIAL CTA
      ========================================= */}
      <section className="category-editorial">

        <div className="category-editorial__content">

          <span>
            PANKAJ JEWELLERS
          </span>

          <h2>
            Crafted for moments
            <br />
            that become memories.
          </h2>

          <Link to="/collections">
            Explore Collections
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}