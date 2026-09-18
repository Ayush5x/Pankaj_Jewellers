import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import ScrollReveal from './ScrollReveal';
import ScrollLinkedRow from './ScrollLinkedRow';
import { PRODUCTS } from '../data/products';
import './newArrivals.css';

const FILTERS = ['All', 'Gold', 'Diamond', 'Bridal', 'Rings', 'Earrings'];

function matchesFilter(product, filter) {
  if (filter === 'All') return true;
  if (filter === 'Gold') return product.purity.includes('Gold') && product.category !== 'diamond-jewellery';
  if (filter === 'Diamond') return product.category === 'diamond-jewellery' || product.name.toLowerCase().includes('diamond');
  if (filter === 'Bridal') return product.category === 'bridal-jewellery' || product.category === 'mangalsutra';
  if (filter === 'Rings') return product.category === 'rings';
  if (filter === 'Earrings') return product.category === 'earrings';
  return true;
}

export default function NewArrivals() {
  const [filter, setFilter] = useState('All');
  const featured = PRODUCTS.filter((p) => p.isNew || PRODUCTS.indexOf(p) < 10).slice(0, 10);
  const visible = featured.filter((p) => matchesFilter(p, filter));

  return (
    <section className="arrivals">
      <div className="container">
        <ScrollReveal>
          <div className="arrivals__head">
            <div>
              <p className="arrivals__eyebrow">Latest Designs</p>
              <h2 className="arrivals__title">New Arrivals</h2>
            </div>

            <div className="arrivals__filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`arrivals__filter ${filter === f ? 'is-active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <Link to="/shop" className="arrivals__viewall">View All <ArrowRight size={16} /></Link>
          </div>
        </ScrollReveal>

        {visible.length === 0 ? (
          <p className="arrivals__empty">No products match this filter yet.</p>
        ) : (
          <ScrollLinkedRow>
            {visible.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </ScrollLinkedRow>
        )}
      </div>
    </section>
  );
}
