import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { formatPrice } from '../data/products';
import './productCard.css';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__media">
        {product.isNew && <span className="product-card__tag">New</span>}
        <button
          className={`product-card__like ${liked ? 'is-liked' : ''}`}
          aria-label="Add to wishlist"
          onClick={(e) => { e.preventDefault(); setLiked((v) => !v); }}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
        </button>
        <img src={product.img} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-card__body">
        <Link to={`/product/${product.id}`} className="product-card__name-link">
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
        <p className="product-card__meta">{product.purity} | {product.weight}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
