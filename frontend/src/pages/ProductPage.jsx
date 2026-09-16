import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, Gem, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getProduct, getCategory, getProductsByCategory, formatPrice } from '../data/products';
import './ProductPage.css';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <section className="product-page">
      <div className="container">
        <p className="breadcrumb">
          <Link to="/">Home</Link> <ChevronRight size={13} />{' '}
          <Link to="/shop">Shop</Link> <ChevronRight size={13} />{' '}
          {category && (
            <>
              <Link to={`/category/${category.slug}`}>{category.label}</Link> <ChevronRight size={13} />{' '}
            </>
          )}
          <span className="current">{product.name}</span>
        </p>

        <div className="product-page__layout">
          <div className="product-page__media">
            <img src={product.img} alt={product.name} />
          </div>

          <div className="product-page__info">
            {category && <Link to={`/category/${category.slug}`} className="product-page__category">{category.label}</Link>}
            <h1 className="product-page__name">{product.name}</h1>
            <p className="product-page__price">{formatPrice(product.price)}</p>

            <p className="product-page__desc">{product.description}</p>

            <table className="product-page__specs">
              <tbody>
                <tr>
                  <th>Purity</th>
                  <td>{product.purity}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{product.weight}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{category ? category.label : '—'}</td>
                </tr>
                <tr>
                  <th>Making</th>
                  <td>Handcrafted</td>
                </tr>
              </tbody>
            </table>

            <div className="product-page__trust">
              <span><Gem size={16} /> Certified purity</span>
              <span><ShieldCheck size={16} /> Hallmarked</span>
              <span><Truck size={16} /> Pan India delivery</span>
            </div>

            <Link to="/contact" className="product-page__enquire">Enquire About This Piece</Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="product-page__related">
            <h2>You may also like</h2>
            <div className="product-page__related-grid">
              {related.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
