import { useEffect, useRef, useState } from 'react';


const DESKTOP_BREAKPOINT = 900;

export default function HorizontalScrollSection({ children }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const currentX = useRef(0);
  const targetX = useRef(0);
  const frameRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BREAKPOINT
  );

  // Track the breakpoint so we can switch modes on resize/rotate.
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const handleChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mql.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Mobile/tablet: no scroll-jack, no forced height. Let the
    // track scroll natively via CSS (see [data-mode="swipe"] rules).
    if (!isDesktop) {
      section.style.height = '';
      track.style.transform = '';
      return;
    }

    const updateHeight = () => {
      /*
       * Actual width of all cards + gaps + padding
       */
      const trackWidth = track.scrollWidth;

      /*
       * How much the track needs to move
       * before the LAST card reaches the viewport.
       */
      const horizontalDistance = Math.max(0, trackWidth - window.innerWidth);

      /*
       * Sticky viewport + horizontal distance, capped so a very
       * wide track (lots of cards) can't blow up the page with
       * several extra empty screens of scroll space.
       */
      const cappedDistance = Math.min(horizontalDistance, window.innerHeight * 2.5);

      section.style.height = `${cappedDistance + window.innerHeight}px`;
    };

    const animate = () => {
      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const maxHorizontal = Math.max(0, track.scrollWidth - window.innerWidth);

      /*
       * How far we've travelled vertically
       * inside the horizontal section.
       */
      const scrollDistance = sectionHeight - viewportHeight;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollDistance);

      /*
       * Map scroll progress (0-1) to the horizontal distance the
       * track actually needs to move, so the last card is always
       * reachable even when the vertical scroll room was capped.
       */
      const progress = scrollDistance > 0 ? scrolled / scrollDistance : 0;
      targetX.current = progress * maxHorizontal;

      /*
       * Smooth movement
       */
      currentX.current += (targetX.current - currentX.current) * 0.08;

      /*
       * Snap when extremely close
       */
      if (Math.abs(targetX.current - currentX.current) < 0.05) {
        currentX.current = targetX.current;
      }

      track.style.transform = `translate3d(${-currentX.current}px, 0, 0)`;

      frameRef.current = requestAnimationFrame(animate);
    };

    updateHeight();

    /*
     * Wait for images to load because image
     * dimensions can change track width.
     */
    const images = track.querySelectorAll('img');

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', updateHeight);
      }
    });

    window.addEventListener('resize', updateHeight);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateHeight);

      images.forEach((img) => {
        img.removeEventListener('load', updateHeight);
      });

      cancelAnimationFrame(frameRef.current);
    };
  }, [children, isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="h-section"
      data-mode={isDesktop ? 'scroll-jack' : 'swipe'}
    >
      <div className="h-sticky">
        <div ref={trackRef} className="h-track">
          {children}
        </div>
      </div>
    </section>
  );
}