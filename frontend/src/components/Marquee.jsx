
import React from "react";
import "./Marquee.css";

export default function EditorialMarquee() {
  return (
    <section className="editorial-marquee">

      {/* Top Editorial Label */}
      <div className="editorial-marquee__top">
        <span className="editorial-marquee__line" />

        <span>A LEGACY IN EVERY DETAIL</span>

        <span className="editorial-marquee__line" />
      </div>


      {/* Main Marquee */}
      <div className="editorial-marquee__track-wrap">

        <div className="editorial-marquee__track">

          {/* SET 1 */}
          <div className="editorial-marquee__content">
            <span>GOLD</span>
            <b>✦</b>

            <span>DIAMONDS</span>
            <b>✦</b>

            <span>HERITAGE</span>
            <b>✦</b>

            <span>CRAFT</span>
            <b>✦</b>

            <span>ELEGANCE</span>
            <b>✦</b>
          </div>


          {/* SET 2 */}
          <div
            className="editorial-marquee__content"
            aria-hidden="true"
          >
            <span>GOLD</span>
            <b>✦</b>

            <span>DIAMONDS</span>
            <b>✦</b>

            <span>HERITAGE</span>
            <b>✦</b>

            <span>CRAFT</span>
            <b>✦</b>

            <span>ELEGANCE</span>
            <b>✦</b>
          </div>

        </div>

      </div>

    </section>
  );
}

