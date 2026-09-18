import './NewProductCard.css';

function getProductImage(product) {
  return (
    product.image ||
    product.imageUrl ||
    product.img ||
    product.images?.[0] ||
    '/heroo.png'
  );
}

function formatPrice(price) {
  if (!price) return 'Price on request';

  if (typeof price === 'number') {
    return `₹${price.toLocaleString('en-IN')}`;
  }

  if (String(price).includes('₹')) {
    return price;
  }

  return `₹${Number(price).toLocaleString('en-IN')}`;
}

export default function ProductCard({ product }) {
  return (
    <article className="compact-product-card">
      <div className="compact-product-card__image-wrap">
        <img
          src={getProductImage(product)}
          alt={product.name || 'Jewellery product'}
          className="compact-product-card__image"
        />
      </div>

      <div className="compact-product-card__content">
        <p className="compact-product-card__category">
          {product.categoryLabel || 'Fine Jewellery'}
        </p>

        <h3 className="compact-product-card__name">
          {product.name || 'Jewellery Product'}
        </h3>

        <div className="compact-product-card__details">
          <span>
            {product.metal || product.material || '22K Gold'}
          </span>

          <span>•</span>

          <span>
            {product.weight || product.weightText || '18.2 g'}
          </span>
        </div>

        <div className="compact-product-card__bottom">
          <strong className="compact-product-card__price">
            {formatPrice(product.price)}
          </strong>

          <button
            type="button"
            className="compact-product-card__arrow"
            aria-label={`View ${product.name || 'product'}`}
          >
            ↗
          </button>
        </div>
      </div>
    </article>
  );
}