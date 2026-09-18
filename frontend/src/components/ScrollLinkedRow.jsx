import { useEffect, useRef, useState } from 'react';

/*
 * Single-row, scroll-linked horizontal reveal.
 *
 * Unlike a "scroll-jack / pin" carousel, this does NOT stretch the
 * section's height. The row's horizontal position is simply tied
 * to how far the section itself has scrolled through the viewport
 * (its own natural height), so the page's vertical spacing above
 * and below the row never changes.
 *
 * - Desktop (>= DESKTOP_BREAKPOINT) and no reduced-motion preference:
 *   as the user scrolls the page, the track slides horizontally in
 *   sync with normal scroll progress.
 * - Mobile/tablet, or reduced-motion: no JS animation at all — the
 *   row is a plain, natively swipeable horizontal strip.
 */
const DESKTOP_BREAKPOINT = 900;

export default function ScrollLinkedRow({ children, className = '' }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const targetX = useRef(0);
  const currentX = useRef(0);
  const frameRef = useRef(null);

  const [animationEnabled, setAnimationEnabled] = useState(false);

  useEffect(() => {
    const desktopMql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const motionMql = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setAnimationEnabled(desktopMql.matches && !motionMql.matches);
    update();

    desktopMql.addEventListener('change', update);
    motionMql.addEventListener('change', update);
    return () => {
      desktopMql.removeEventListener('change', update);
      motionMql.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    if (!animationEnabled) {
      // Mobile/tablet/reduced-motion: plain native swipeable row.
      track.style.transform = '';
      return;
    }

    const computeTarget = () => {
      const rect = viewport.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);

      /*
       * Progress goes 0 -> 1 across the section's own natural
       * scroll-through range: from the moment it enters the
       * bottom of the screen to the moment it fully leaves the
       * top. No extra scroll distance is ever added to the page.
       */
      const totalRange = viewportHeight + rect.height;
      const raw = totalRange > 0 ? (viewportHeight - rect.top) / totalRange : 0;
      const progress = Math.min(Math.max(raw, 0), 1);

      targetX.current = progress * maxTranslate;
    };

    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.12;
      if (Math.abs(targetX.current - currentX.current) < 0.05) {
        currentX.current = targetX.current;
      }
      track.style.transform = `translate3d(${-currentX.current}px, 0, 0)`;
      frameRef.current = requestAnimationFrame(animate);
    };

    computeTarget();

    // Re-measure whenever the track's content width changes
    // (e.g. the "All / Gold / Diamond / ..." filter changes how
    // many cards are shown).
    const resizeObserver = new ResizeObserver(computeTarget);
    resizeObserver.observe(track);

    window.addEventListener('scroll', computeTarget, { passive: true });
    window.addEventListener('resize', computeTarget);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', computeTarget);
      window.removeEventListener('resize', computeTarget);
      resizeObserver.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [animationEnabled]);

  return (
    <div
      ref={viewportRef}
      className={`arrivals__row-viewport ${className}`}
      data-mode={animationEnabled ? 'scroll-linked' : 'swipe'}
    >
      <div ref={trackRef} className="arrivals__row-track">
        {children}
      </div>
    </div>
  );
}
