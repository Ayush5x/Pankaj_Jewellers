import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getCategory, getProductsByCategory } from '../data/products';
import '../pages/pages-shared.css';
import './CategoryPage.css';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategory(slug);

  if (!category) {
    return <Navigate to="/collections" replace />;
  }

  const products = getProductsByCategory(slug);

  return (
    <section className="category-page">
      <div className="container">
        <p className="breadcrumb">
          <Link to="/">Home</Link> <ChevronRight size={13} />{' '}
          <Link to="/collections">Collections</Link> <ChevronRight size={13} />{' '}
          <span className="current">{category.label}</span>
        </p>

        <p className="page-eyebrow">Category</p>
        <h1 className="page-title">{category.label}</h1>
        <p className="page-lead">{category.desc}</p>

        {products.length > 0 ? (
          <div className="category-page__grid">
             <HorizontalScrollSection>
            {products.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}</HorizontalScrollSection>
          </div>
        ) : (
          <div className="category-page__empty">
            <p>New designs in {category.label} are on the way. Please check back soon.</p>
            <Link to="/shop" className="category-page__cta">Browse all products</Link>
          </div>
        )}
      </div>
    </section>
  );
}
