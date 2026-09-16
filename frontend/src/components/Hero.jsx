import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Gem,
  ShieldCheck,
  Crown,
  Truck
} from 'lucide-react';

import './hero.css';

const BADGES = [
  {
    icon: Gem,
    title: '100% Hallmarked',
    subtitle: 'Gold & Diamond'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted by',
    subtitle: 'Thousands'
  },
  {
    icon: Crown,
    title: 'Exclusive',
    subtitle: 'Collections'
  },
  {
    icon: Truck,
    title: 'Pan India',
    subtitle: 'Delivery'
  }
];

export default function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}
      <div
        className="hero__media"
        role="img"
        aria-label="Model wearing bridal jewellery"
      >
        <img
          src="/hero.png"
          alt="Bridal jewellery"
        />

        <div className="hero__media-fade"></div>

        <p className="hero__script">
          More<br />
          Than Jewellery<br />
          A Part of<br />
          Your Story
        </p>
      </div>

      {/* Hero Content */}
      <div className="container hero__content">
        <div className="hero__copy">

          <p className="hero__eyebrow">
            Timeless jewellery for life's precious moments
          </p>

          <h1 className="hero__title">
            Elegance
            <br />
            In Every Detail
          </h1>

          <p className="hero__desc">
            Exquisite designs. Unmatched purity. Crafted to
            celebrate your most special moments.
          </p>

          <div className="hero__ctas">

            <Link
              to="/collections"
              className="hero__btn-primary"
            >
              Explore Collections
              <ArrowRight size={17} />
            </Link>

            <button
              type="button"
              className="hero__btn-secondary"
            >
              <Play
                size={13}
                fill="currentColor"
              />
              Watch Video
            </button>

          </div>

        </div>
      </div>

      {/* Bottom Badges */}
      <div className="container hero__badges-container">
        <div className="hero__badges">

          {BADGES.map(({ icon: Icon, title, subtitle }) => (
            <div
              className="hero__badge"
              key={title}
            >
              <Icon
                size={24}
                strokeWidth={1.4}
              />

              <span>
                {title}
                <br />
                {subtitle}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}