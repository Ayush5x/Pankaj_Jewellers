import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import './CollectionsPage.css';

export default function CollectionsPage() {
  return (
    <section className="collections-page">
      <div className="container">
        <p className="page-eyebrow">Explore Our</p>
        <h1 className="page-title">Jewellery Collections</h1>
        <p className="page-lead">
          Browse every category and tap through to see the products inside.
        </p>

        <div className="collections-page__grid">
          {CATEGORIES.map((cat) => (
            <Link to={`/category/${cat.slug}`} className="collection-tile" key={cat.slug}>
              <div className="collection-tile__media">
                <img src={cat.img} alt={cat.label} />
              </div>
              <div className="collection-tile__body">
                <h3>{cat.label}</h3>
                <p>{cat.desc}</p>
                <span className="collection-tile__link">View Products <ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
