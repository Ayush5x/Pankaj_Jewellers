import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import './navbar.css';

// Note: "Offers" is intentionally excluded from this list, per requirement.
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Shop', to: '/shop' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { likedIds } = useWishlist();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M20 4c2 5 6 8 6 13a6 6 0 1 1-12 0c0-5 4-8 6-13Z" stroke="#B8894A" strokeWidth="1.4" />
            <path d="M8 22c3-2 8-3 12-3s9 1 12 3" stroke="#B8894A" strokeWidth="1.4" />
            <path d="M14 27c2-1.5 4-2 6-2s4 .5 6 2" stroke="#B8894A" strokeWidth="1.4" />
          </svg>
          <span className="navbar__logo-text">
            <strong>PANKAJ</strong>
            <em>Jewellers</em>
            <small>Trusted for Generations</small>
          </span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" aria-label="Search"><Search size={18} strokeWidth={1.6} /></button>
          <Link to="/wishlist" className="navbar__icon-btn" aria-label="Wishlist">
            <Heart size={18} strokeWidth={1.6} />
            <span className="navbar__badge">{likedIds.length}</span>
          </Link>
          <button className="navbar__icon-btn" aria-label="Bag">
            <ShoppingBag size={18} strokeWidth={1.6} />
            <span className="navbar__badge">0</span>
          </button>
          <Link to="/contact" className="navbar__cta">Book a Visit</Link>
          <button className="navbar__burger" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
