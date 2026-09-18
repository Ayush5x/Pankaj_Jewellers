import { useEffect, useRef } from "react";

export default function HorizontalScrollSection({ children }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const currentX = useRef(0);
  const targetX = useRef(0);
  const frameRef = useRef(null);

  const isLocked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    /* ---------------------------------------
       CALCULATE SECTION HEIGHT
    --------------------------------------- */
    const updateHeight = () => {
      const trackWidth = track.scrollWidth;

      const horizontalDistance = Math.max(
        0,
        trackWidth - window.innerWidth
      );

      section.style.height = `${
        horizontalDistance + window.innerHeight
      }px`;
    };

    /* ---------------------------------------
       SMOOTH HORIZONTAL ANIMATION
    --------------------------------------- */
    const animate = () => {
      currentX.current +=
        (targetX.current - currentX.current) * 0.1;

      if (
        Math.abs(
          targetX.current - currentX.current
        ) < 0.05
      ) {
        currentX.current = targetX.current;
      }

      track.style.transform = `translate3d(${-currentX.current}px, 0, 0)`;

      frameRef.current =
        requestAnimationFrame(animate);
    };

    /* ---------------------------------------
       WHEEL CONTROL
    --------------------------------------- */
    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      /*
        Section is active when it occupies
        the viewport.
      */
      const sectionActive =
        rect.top <= 0 &&
        rect.bottom >= viewportHeight;

      if (!sectionActive) {
        return;
      }

      const maxHorizontal = Math.max(
        0,
        track.scrollWidth - window.innerWidth
      );

      /*
        Current horizontal position.
      */
      const current = targetX.current;

      /*
        Scrolling DOWN
        -> move cards LEFT
      */
      if (e.deltaY > 0) {
        if (current < maxHorizontal) {
          e.preventDefault();

          targetX.current = Math.min(
            current + Math.abs(e.deltaY),
            maxHorizontal
          );

          isLocked.current = true;
        } else {
          /*
            Last card has reached the end.
            Allow normal vertical scrolling.
          */
          isLocked.current = false;
        }
      }

      /*
        Scrolling UP
        -> move cards RIGHT
      */
      else if (e.deltaY < 0) {
        if (current > 0) {
          e.preventDefault();

          targetX.current = Math.max(
            current - Math.abs(e.deltaY),
            0
          );

          isLocked.current = true;
        } else {
          /*
            First card is reached.
            Allow normal vertical scrolling upward.
          */
          isLocked.current = false;
        }
      }
    };

    /* ---------------------------------------
       IMAGE LOAD SUPPORT
    --------------------------------------- */
    const images = track.querySelectorAll("img");

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", updateHeight);
      }
    });

    /* ---------------------------------------
       EVENT LISTENERS
    --------------------------------------- */
    window.addEventListener("resize", updateHeight);

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    /* ---------------------------------------
       INITIALIZE
    --------------------------------------- */
    updateHeight();

    frameRef.current =
      requestAnimationFrame(animate);

    /* ---------------------------------------
       CLEANUP
    --------------------------------------- */
    return () => {
      window.removeEventListener(
        "resize",
        updateHeight
      );

      window.removeEventListener(
        "wheel",
        handleWheel
      );

      images.forEach((img) => {
        img.removeEventListener(
          "load",
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