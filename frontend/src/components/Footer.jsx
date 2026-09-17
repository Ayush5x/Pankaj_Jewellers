import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { CATEGORIES } from '../data/products';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">PANKAJ <span>Jewellers</span></p>
          <p className="footer__about">
            Pure jewellery, trusted since 1998. Hallmarked gold and certified diamonds
            crafted for life's most precious moments.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram"><InstagramIcon size={16} /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon size={16} /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon size={16} /></a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Categories</h4>
          <ul>
            {CATEGORIES.slice(0, 4).map((c) => (
              <li key={c.slug}><Link to={`/category/${c.slug}`}>{c.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <ul className="footer__contact">
            <li><MapPin size={15} /> Pune, Maharashtra, India</li>
            <li><Phone size={15} /> +91 77963 74853</li>
            <li><Mail size={15} /> hello@pankajjewellers.in</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Pankaj Jewellers. All rights reserved.</span>
          <span>Trusted for Generations</span>
        </div>
      </div>
      <div className="footer__watermark">PANKAJ JEWELLERS</div>
    </footer>
  );
}
