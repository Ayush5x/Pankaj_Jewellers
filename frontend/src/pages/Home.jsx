import Hero from '../components/Hero';
import Collections from '../components/Collections';
import DiamondBanner from '../components/DiamondBanner';
import NewArrivals from '../components/NewArrivals';
import Testimonials from '../components/Testimonials';
import EditorialMarquee from '../components/Marquee';

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <DiamondBanner />
      <NewArrivals />
      <Testimonials/>
      <EditorialMarquee/>
    </>
  );
}
