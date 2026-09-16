import { Link } from 'react-router-dom';
import { HeartOff } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import '../pages/pages-shared.css';
import './WishlistPage.css';

export default function WishlistPage() {
  const { likedIds } = useWishlist();
  const products = PRODUCTS.filter((p) => likedIds.includes(p.id));

  return (
    <section className="wishlist-page">
      <div className="container">
        <p className="page-eyebrow">Saved by You</p>
        <h1 className="page-title">Your Wishlist</h1>

        {products.length > 0 ? (
          <>
            <p className="page-lead">{products.length} item{products.length > 1 ? 's' : ''} saved.</p>
            <div className="wishlist-page__grid">
              {products.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
          </>
        ) : (
          <div className="wishlist-page__empty">
            <HeartOff size={34} strokeWidth={1.3} />
            <p>Your wishlist is empty. Tap the heart on any product to save it here.</p>
            <Link to="/shop" className="wishlist-page__cta">Browse Products</Link>
          </div>
        )}
      </div>
    </section>
  );
}
