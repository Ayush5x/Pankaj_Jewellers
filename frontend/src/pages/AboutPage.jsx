import { Gem, ShieldCheck, Crown, Truck } from 'lucide-react';
import '../pages/pages-shared.css';
import './AboutPage.css';

const VALUES = [
  { icon: Gem, title: '100% Hallmarked', desc: 'Every gold and diamond piece is certified for purity before it reaches you.' },
  { icon: ShieldCheck, title: 'Trusted Since 1998', desc: 'Three decades of relationships built on transparent pricing and honest craft.' },
  { icon: Crown, title: 'Exclusive Designs', desc: 'In-house karigars create collections you will not find elsewhere.' },
  { icon: Truck, title: 'Pan India Delivery', desc: 'Secure, insured delivery of every order across the country.' },
];

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <p className="page-eyebrow">Our Story</p>
        <h1 className="page-title">About Pankaj Jewellers</h1>
        <p className="page-lead">
          Pankaj Jewellers has been crafting pure gold and diamond jewellery since 1998.
          What began as a single family-run store has grown into a name trusted across
          generations, without ever compromising on hallmark purity or honest craftsmanship.
        </p>

        <div className="about-page__values">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div className="about-page__value" key={title}>
              <Icon size={26} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="about-page__story">
          <h2>Crafted for Life's Precious Moments</h2>
          <p>
            Every piece that leaves our workshop is designed to be worn, passed down and
            remembered. Our karigars combine traditional techniques with modern finishing,
            and every gold and diamond item is hallmark-certified before it reaches our store.
          </p>
          <p>
            Whether you are shopping for a wedding, a festival, or an everyday piece, our
            team is happy to guide you in person — visit our store or book a consultation
            through the Contact page.
          </p>
        </div>
      </div>
    </section>
  );
}
