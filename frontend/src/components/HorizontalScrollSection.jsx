import { useEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 900;

export default function HorizontalScrollSection({ children }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const currentX = useRef(0);
  const targetX = useRef(0);

  const animationRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.innerWidth >= DESKTOP_BREAKPOINT
  );

  /* =========================================
     DESKTOP / MOBILE DETECTION
  ========================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${DESKTOP_BREAKPOINT}px)`
    );

    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  /* =========================================
     HORIZONTAL SCROLL ENGINE
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    /* =======================================
       MOBILE / TABLET
    ======================================= */

    if (!isDesktop) {
      section.style.height = "auto";
      track.style.transform = "none";

      currentX.current = 0;
      targetX.current = 0;

      return;
    }

    /* =======================================
       GET HORIZONTAL DISTANCE
    ======================================= */

    const getMaxScroll = () => {
      return Math.max(
        0,
        track.scrollWidth - window.innerWidth
      );
    };

    /* =======================================
       SET SECTION HEIGHT
    ======================================= */

    const updateSectionHeight = () => {
      const maxScroll = getMaxScroll();

      /*
       * Viewport height +
       * exact horizontal distance
       */

      section.style.height = `${
        window.innerHeight + maxScroll
      }px`;
    };

    /* =======================================
       ANIMATION
    ======================================= */

    const animate = () => {
      const difference =
        targetX.current - currentX.current;

      currentX.current += difference * 0.12;

      if (Math.abs(difference) < 0.05) {
        currentX.current = targetX.current;
      }

      track.style.transform = `
        translate3d(
          ${-currentX.current}px,
          0,
          0
        )
      `;

      animationRef.current =
        requestAnimationFrame(animate);
    };

    /* =======================================
       CHECK IF SECTION IS ACTIVE
    ======================================= */

    const isSectionActive = () => {
      const rect = section.getBoundingClientRect();

      /*
       * Section has reached the top
       * and is still occupying viewport.
       */

      return (
        rect.top <= 1 &&
        rect.bottom >= window.innerHeight - 1
      );
    };

    /* =======================================
       WHEEL HANDLER
    ======================================= */

    const handleWheel = (event) => {
      const rect = section.getBoundingClientRect();

      const maxScroll = getMaxScroll();

      if (maxScroll <= 0) {
        return;
      }

      const delta = event.deltaY;

      /* =====================================
         SCROLLING DOWN
      ===================================== */

      if (delta > 0) {
        /*
         * User is approaching section.
         *
         * Lock the section exactly at viewport top.
         */

        if (
          rect.top > 0 &&
          rect.top < window.innerHeight
        ) {
          event.preventDefault();

          window.scrollTo({
            top: window.scrollY + rect.top,
            behavior: "instant",
          });

          targetX.current = Math.min(
            maxScroll,
            targetX.current + delta
          );

          return;
        }

        /*
         * Section is pinned.
         *
         * Consume vertical wheel and convert
         * it into horizontal movement.
         */

        if (
          rect.top <= 1 &&
          rect.bottom > window.innerHeight
        ) {
          /*
           * Horizontal movement NOT finished.
           */

          if (targetX.current < maxScroll) {
            event.preventDefault();

            targetX.current = Math.min(
              maxScroll,
              targetX.current + delta
            );

            return;
          }

          /*
           * Last card reached.
           *
           * DO NOT preventDefault.
           *
           * Browser can now continue down.
           */

          targetX.current = maxScroll;
        }
      }

      /* =====================================
         SCROLLING UP
      ===================================== */

      if (delta < 0) {
        /*
         * Section is active and horizontal
         * position is greater than 0.
         */

        if (
          rect.top <= 1 &&
          rect.bottom >= window.innerHeight - 1
        ) {
          if (targetX.current > 0) {
            event.preventDefault();

            targetX.current = Math.max(
              0,
              targetX.current + delta
            );

            return;
          }

          /*
           * First card reached.
           *
           * Allow browser to scroll
           * to previous section.
           */

          targetX.current = 0;
        }

        /*
         * User is coming back from below.
         *
         * If section is entering viewport,
         * lock it and start horizontal reverse.
         */

        if (
          rect.bottom > 0 &&
          rect.bottom < window.innerHeight
        ) {
          event.preventDefault();

          window.scrollTo({
            top:
              window.scrollY -
              (window.innerHeight - rect.bottom),
            behavior: "instant",
          });

          targetX.current = Math.max(
            0,
            targetX.current + delta
          );

          return;
        }
      }
    };

    /* =======================================
       IMAGE LOAD
    ======================================= */

    const images = track.querySelectorAll("img");

    const handleImageLoad = () => {
      updateSectionHeight();
    };

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener(
          "load",
          handleImageLoad
        );
      }
    });

    /* =======================================
       RESIZE
    ======================================= */

    window.addEventListener(
      "resize",
      updateSectionHeight
    );

    /* =======================================
       WHEEL
    ======================================= */

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    /* =======================================
       INITIALIZE
    ======================================= */

    updateSectionHeight();

    animationRef.current =
      requestAnimationFrame(animate);

    /* =======================================
       CLEANUP
    ======================================= */

    return () => {
      window.removeEventListener(
        "resize",
        updateSectionHeight
      );

      window.removeEventListener(
        "wheel",
        handleWheel
      );

      images.forEach((image) => {
        image.removeEventListener(
          "load",
          handleImageLoad
        );
      });

      cancelAnimationFrame(
        animationRef.current
      );

      section.style.height = "";
      track.style.transform = "";
    };
  }, [children, isDesktop]);

  /* =========================================
     JSX
  ========================================= */

  return (
    <section
      ref={sectionRef}
      className="h-section"
      data-mode={
        isDesktop
          ? "scroll-jack"
          : "swipe"
      }
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