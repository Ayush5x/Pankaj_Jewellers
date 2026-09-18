import { Link } from 'react-router-dom';
import { Heart, ArrowUpRight, Eye } from 'lucide-react';
import { formatPrice } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import './productCard.css';

export default function ProductCard({ product }) {
  const { isLiked, toggleLike } = useWishlist();
  const liked = isLiked(product.id);

  return (
    <article className="product-card">

      {/* ================================
          PRODUCT IMAGE
      ================================= */}

      <Link
        to={`/product/${product.id}`}
        className="product-card__media"
      >

        {product.isNew && (
          <span className="product-card__tag">
            New Arrival
          </span>
        )}

        <button
          type="button"
          className={`product-card__like ${
            liked ? 'is-liked' : ''
          }`}
          aria-label={
            liked
              ? 'Remove from wishlist'
              : 'Add to wishlist'
          }
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleLike(product.id);
          }}
        >
          <Heart
            size={17}
            strokeWidth={1.6}
            fill={liked ? 'currentColor' : 'none'}
          />
        </button>

        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
        />

        {/* Hover Quick View */}

        <div className="product-card__quick-view">
          <span>
            <Eye size={15} strokeWidth={1.7} />
            Quick View
          </span>
        </div>

      </Link>


      {/* ================================
          PRODUCT DETAILS
      ================================= */}

      <div className="product-card__body">

        <p className="product-card__category">
          Fine Jewellery
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-card__name-link"
        >
          <h3 className="product-card__name">
            {product.name}
          </h3>
        </Link>

        <p className="product-card__meta">
          {product.purity}
          <span className="product-card__dot">•</span>
          {product.weight}
        </p>


        {/* Price + Arrow */}

        <div className="product-card__bottom">

          <p className="product-card__price">
            {formatPrice(product.price)}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="product-card__arrow"
            aria-label={`View ${product.name}`}
          >
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
            />
          </Link>

        </div>

      </div>

    </article>
  );
}