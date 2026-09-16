import { Link } from 'react-router-dom';
import { ArrowRight, Play, Gem, ShieldCheck, Crown, Truck } from 'lucide-react';
import './hero.css';

const BADGES = [
  { icon: Gem, title: '100% Hallmarked', subtitle: 'Gold & Diamond' },
  { icon: ShieldCheck, title: 'Trusted by', subtitle: 'Thousands' },
  { icon: Crown, title: 'Exclusive', subtitle: 'Collections' },
  { icon: Truck, title: 'Pan India', subtitle: 'Delivery' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" role="img" aria-label="Model wearing a bridal jewellery set">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1400&auto=format&fit=crop"
          alt=""
        />
        <div className="hero__media-fade" />
        <p className="hero__script">More<br />Than Jewellery<br />A Part of<br />Your Story</p>
      </div>

      <div className="container hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">Timeless jewellery for life's precious moments</p>
          <h1 className="hero__title">Elegance<br />In Every Detail</h1>
          <p className="hero__desc">
            Exquisite designs. Unmatched purity. Crafted to celebrate your most special moments.
          </p>
          <div className="hero__ctas">
            <Link to="/collections" className="hero__btn-primary">Explore Collections <ArrowRight size={17} /></Link>
            <button className="hero__btn-secondary"><Play size={13} fill="currentColor" /> Watch Video</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__badges">
          {BADGES.map(({ icon: Icon, title, subtitle }) => (
            <div className="hero__badge" key={title}>
              <Icon size={22} strokeWidth={1.4} color="var(--color-gold)" />
              <span>{title}<br />{subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
