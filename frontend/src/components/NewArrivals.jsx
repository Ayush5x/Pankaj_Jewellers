import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";
import { PRODUCTS } from "../data/products";
import "./newArrivals.css";
​
const FILTERS = ["All", "Gold", "Diamond", "Bridal", "Rings", "Earrings"];
​
function matchesFilter(product, filter) {
  if (filter === "All") return true;
​
  if (filter === "Gold") {
    return (
      product.purity.includes("Gold") &&
      product.category !== "diamond-jewellery"
    );
  }
​
  if (filter === "Diamond") {
    return (
      product.category === "diamond-jewellery" ||
      product.name.toLowerCase().includes("diamond")
    );
  }
​
  if (filter === "Bridal") {
    return (
      product.category === "bridal-jewellery" ||
      product.category === "mangalsutra"
    );
  }
​
  if (filter === "Rings") {
    return product.category === "rings";
  }
​
  if (filter === "Earrings") {
    return product.category === "earrings";
  }
​
  return true;
}
​
export default function NewArrivals() {
  const [filter, setFilter] = useState("All");
​
  // Show one new product from every category.
  // If a category has no new product, use its first product as fallback.
  const featured = Array.from(
    new Set(PRODUCTS.map((product) => product.category)),
  )
    .map((category) => {
      const newProduct = PRODUCTS.find(
        (product) => product.category === category && product.isNew,
      );
​
      return (
        newProduct || PRODUCTS.find((product) => product.category === category)
      );
    })
    .filter(Boolean);
​
  const visible = featured.filter((product) => matchesFilter(product, filter));
​
  return (
    <section className="arrivals">
      <div className="container">
        <ScrollReveal>
          <div className="arrivals__head">
            <div>
              <p className="arrivals__eyebrow">Latest Designs</p>
              <h2 className="arrivals__title">New Arrivals</h2>
            </div>
​
            <div className="arrivals__filters">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  className={`arrivals__filter ${
                    filter === item ? "is-active" : ""
                  }`}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
​
            <Link to="/shop" className="arrivals__viewall">
              View All
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
​
        {visible.length === 0 ? (
          <p className="arrivals__empty">No products match this filter yet.</p>
        ) : (
          <div className="arrivals__scroll">
            <div className="arrivals__track">
              {visible.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
​