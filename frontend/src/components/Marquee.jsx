import React from "react";
import "./Marquee.css";
import story_video from "../assets/video/story1.mp4"

export default function EditorialMarquee() {
  return (
    <>
      <div className="editorial-marquee">
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
            <div className="editorial-marquee__content" aria-hidden="true">
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
      </div>
      <div>
        <section className="social-editorial">
          <div className="social-editorial__header">
            <span className="social-editorial__eyebrow">
              THE PANKAJ JOURNAL
            </span>

            <h2>
              Follow the World of <em>Pankaj</em>
            </h2>

            <a
              href="https://www.instagram.com/pankajjewellers/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial__handle"
            >
              @pankajjewellers
            </a>
          </div>

          <div className="social-editorial__gallery">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial__item"
            >
              <video
                src={story_video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Gold necklace by Pankaj Jewellers"
              />

              <div className="social-editorial__overlay">
                <span>VIEW STORY</span>
              </div>
            </a>

            {/* Editorial Quote Card */}
            <div className="social-editorial__quote">
              <span className="social-editorial__quote-mark">“</span>

              <p>
                JEWELLERY
                <br />
                IS A FORM OF
                <br />
                <em>SELF-EXPRESSION</em>
              </p>

              <span className="social-editorial__ornament">✦</span>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial__item"
            >
              <img
                src="https://i.pinimg.com/736x/de/8e/2e/de8e2e4689661d809809901909540972.jpg"
                alt="Diamond ring by Pankaj Jewellers"
              />

              <div className="social-editorial__overlay">
                <span>VIEW STORY</span>
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial__item social-editorial__item--featured"
            >
              <img
                src="https://i.pinimg.com/736x/5d/bc/98/5dbc98855045d8776d1436a5de7acf1c.jpg"
                alt="Bridal jewellery by Pankaj Jewellers"
              />

              <div className="social-editorial__overlay">
                <span>VIEW STORY</span>
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial__item"
            >
              <img
                src="https://i.pinimg.com/736x/1b/d5/99/1bd599b2ecbf26ce7962e9a35feba404.jpg"
                alt="Diamond ring by Pankaj Jewellers"
              />

              <div className="social-editorial__overlay">
                <span>VIEW STORY</span>
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial__item"
            >
              <img
                src="https://i.pinimg.com/736x/39/3d/a7/393da7bd9bda39d64081bd37dbce11ad.jpg"
                alt="Traditional jewellery"
              />

              <div className="social-editorial__overlay">
                <span>VIEW STORY</span>
              </div>
            </a>
          </div>

          <div className="social-editorial__footer">
            <span />

            <a
              href="https://www.instagram.com/pankajjewellers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCOVER MORE ON INSTAGRAM
              <span className="social-editorial__arrow">↗</span>
            </a>

            <span />
          </div>
        </section>
      </div>
    </>
  );
}
