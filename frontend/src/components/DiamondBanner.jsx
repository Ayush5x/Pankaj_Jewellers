import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Sparkles, Gift } from 'lucide-react';
import './diamondBanner.css';

export default function DiamondBanner() {
  return (
    <section className="container">
      <div className="diamond">
        <img
          className="diamond__bg"
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop"
          alt="Diamond ring on embroidered fabric"
        />
        <div className="diamond__overlay" />

        <div className="diamond__copy">
          <p className="diamond__eyebrow">A Symbol of<br />Love Forever</p>
          <h2 className="diamond__title">Diamond Collection</h2>
          <p className="diamond__desc">Brilliance that lasts a lifetime.</p>
          <Link to="/category/diamond-jewellery" className="diamond__btn">Explore Now <ArrowRight size={16} /></Link>
        </div>

        <div className="diamond__features">
          <div className="diamond__feature">
            <Gem size={22} strokeWidth={1.3} />
            <span>Certified<br />Diamonds</span>
          </div>
          <div className="diamond__feature">
            <Sparkles size={22} strokeWidth={1.3} />
            <span>Exclusive<br />Designs</span>
          </div>
          <div className="diamond__feature">
            <Gift size={22} strokeWidth={1.3} />
            <span>Perfect for<br />Every Occasion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
