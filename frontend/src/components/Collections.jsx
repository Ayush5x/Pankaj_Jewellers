import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import './collections.css';

export default function Collections() {
  return (
    <section className="collections">
      <div className="container">
        <div className="collections__head">
          <div>
            <p className="collections__eyebrow">Explore Our</p>
            <h2 className="collections__title">Jewellery Collections</h2>
          </div>
          <Link to="/collections" className="collections__viewall">View All Collections <ArrowRight size={16} /></Link>
        </div>

        <div className="collections__row">
          {CATEGORIES.map((cat) => (
            <Link to={`/category/${cat.slug}`} className="collections__item" key={cat.slug}>
              <span className="collections__circle">
                <img src={cat.img} alt={cat.label} />
              </span>
              <span className="collections__label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
