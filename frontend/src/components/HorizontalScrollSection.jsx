import { useEffect, useRef } from 'react';

export default function HorizontalScrollSection({ children }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const currentX = useRef(0);
  const targetX = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const updateHeight = () => {
      /*
       * Actual width of all cards + gaps + padding
       */
      const trackWidth = track.scrollWidth;

      /*
       * How much the track needs to move
       * before the LAST card reaches the viewport.
       */
      const horizontalDistance = Math.max(
        0,
        trackWidth - window.innerWidth
      );

      /*
       * Sticky viewport + horizontal distance.
       *
       * This is the important part:
       * the section cannot finish until the
       * horizontal track has reached its end.
       */
      section.style.height =
        `${horizontalDistance + window.innerHeight}px`;
    };

    const animate = () => {
      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const maxHorizontal =
        Math.max(
          0,
          track.scrollWidth - window.innerWidth
        );

      /*
       * How far we've travelled vertically
       * inside the horizontal section.
       */
      const scrollDistance =
        sectionHeight - viewportHeight;

      const scrolled =
        Math.min(
          Math.max(-rect.top, 0),
          scrollDistance
        );

      /*
       * Horizontal target position
       */
      targetX.current =
        Math.min(scrolled, maxHorizontal);

      /*
       * Smooth movement
       */
      currentX.current +=
        (targetX.current - currentX.current) * 0.08;

      /*
       * Snap when extremely close
       */
      if (
        Math.abs(
          targetX.current - currentX.current
        ) < 0.05
      ) {
        currentX.current =
          targetX.current;
      }

      track.style.transform =
        `translate3d(${-currentX.current}px, 0, 0)`;

      frameRef.current =
        requestAnimationFrame(animate);
    };

    updateHeight();

    /*
     * Wait for images to load because image
     * dimensions can change track width.
     */
    const images =
      track.querySelectorAll('img');

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener(
          'load',
          updateHeight
        );
      }
    });

    window.addEventListener(
      'resize',
      updateHeight
    );

    frameRef.current =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        'resize',
        updateHeight
      );

      images.forEach((img) => {
        img.removeEventListener(
          'load',
          updateHeight
        );
      });

      cancelAnimationFrame(
        frameRef.current
      );
    };
  }, [children]);

  return (
    <section
      ref={sectionRef}
      className="h-section"
    >
      <div className="h-sticky">
        <div
          ref={trackRef}
          className="h-track"
        >
          {children}
        </div>
      </div>
    </section>
  );
}