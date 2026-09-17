import { useRef, useEffect } from 'react';

export default function HorizontalScrollSection({ children }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    function update() {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const totalScrollable = section.offsetHeight - window.innerHeight;
      let progress = -rect.top / totalScrollable;
      progress = Math.min(Math.max(progress, 0), 1);

      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-progress * Math.max(maxTranslate, 0)}px)`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-section">
      <div className="h-sticky">
        <div ref={trackRef} className="h-track">
          {children}
        </div>
      </div>
    </section>
  );
}