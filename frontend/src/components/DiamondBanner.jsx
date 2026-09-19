import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Sparkles, Gift } from 'lucide-react';
import './diamondBanner.css';

export default function DiamondBanner() {
  return (
    <section className="container">
      <div className="diamond">
        <img
          className="diamond__bg"
          src="https://i.pinimg.com/1200x/1b/0d/e1/1b0de13ac5e76759ac7fd05e6cb1372d.jpg"
          alt="Diamond ring on embroidered fabric"
        />
        <div className="diamond__overlay" />

        <div className="diamond__copy">
          <p className="diamond__eyebrow">A Symbol of<br />Love Forever</p>
          <h2 className="diamond__title">Diamond Collection</h2>
          <p className="diamond__desc">Brilliance that lasts a lifetime.</p>
          <Link to="/category" className="diamond__btn">Explore Now <ArrowRight size={16} /></Link>
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
