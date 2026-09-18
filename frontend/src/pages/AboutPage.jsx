import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Gem,
  Hand,
  ShieldCheck,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./AboutPage.css";

/* =========================================================
   IMAGES
========================================================= */

const heroImage =
  "https://i.pinimg.com/736x/b4/b2/12/b4b212ea38276ef52e532767dd2200c7.jpg";

const DemoImage =
  "https://i.pinimg.com/1200x/f7/9b/b2/f79bb28c7826c55ad47de5309c52346f.jpg";

const craftImage =
  "https://i.pinimg.com/736x/e9/a8/89/e9a889cd38fd5441a173fb8c8c4a9489.jpg";

import founderImage from "../assets/pankaj_jewellers_model.png"

const collectionImage =
  "https://i.pinimg.com/736x/b4/b2/12/b4b212ea38276ef52e532767dd2200c7.jpg";

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction} ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   COUNTER
========================================================= */

function Counter({ end, suffix = "", comma = false }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;

        started = true;

        const start = performance.now();
        const duration = 1800;

        const tick = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);

          setValue(Math.round(end * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <span ref={ref}>
      {comma ? value.toLocaleString() : value}
      {suffix}
    </span>
  );
}

/* =========================================================
   SCROLL PROGRESS
========================================================= */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(total > 0 ? window.scrollY / total : 0);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="about-progress"
      style={{
        transform: `scaleX(${progress})`,
      }}
      aria-hidden="true"
    />
  );
}

/* =========================================================
   PARALLAX IMAGE
========================================================= */

function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 40,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [speed, -speed]
  );

  return (
    <div
      ref={ref}
      className={`parallax-image ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        loading="lazy"
      />

      <span className="image-shine" />
    </div>
  );
}

/* =========================================================
   ROTATING SEAL
========================================================= */

function AtelierSeal() {
  return (
    <motion.div
      className="atelier-seal"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 26,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 200 200">
        <defs>
          <path
            id="sealPath"
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
          />
        </defs>

        <text>
          <textPath href="#sealPath">
            SOLENNE · ATELIER · MADE BY HAND · EST. 2014 ·
          </textPath>
        </text>
      </svg>

      <div className="seal-center">
        <Sparkles size={22} strokeWidth={1.2} />
        <span>SL</span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    number: "01",
    icon: Hand,
    title: "Made slowly",
    body: "Every piece passes through human hands. We believe refinement is created through patience, not speed.",
  },
  {
    number: "02",
    icon: Gem,
    title: "Chosen with intent",
    body: "We select materials for character, balance and longevity rather than following temporary trends.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Designed to remain",
    body: "Our pieces are created to become part of a personal story and eventually something worth passing on.",
  },
];

const craftSteps = [
  {
    number: "01",
    title: "The sketch",
    text: "An idea begins with proportion, silhouette and the relationship between light and metal.",
  },
  {
    number: "02",
    title: "The form",
    text: "Wax, metal and stone are gradually shaped until the original idea becomes tangible.",
  },
  {
    number: "03",
    title: "The hand",
    text: "Edges are softened, surfaces are polished and every detail receives its final human touch.",
  },
  {
    number: "04",
    title: "The piece",
    text: "Only when the object feels balanced, considered and complete does it leave the atelier.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="about-page">
      <ScrollProgress />

      {/* =====================================================
          GRAIN
      ====================================================== */}

      <div className="about-grain" />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="about-nav">
        <div className="about-nav__inner">
          <a href="#top" className="about-logo">
            Solenne
          </a>

          <nav>
            <a href="#story">Our Story</a>
            <a href="#craft">Craft</a>
            <a href="#values">Philosophy</a>
            <a href="#founder">Founder</a>
          </nav>

          <a href="#collection" className="nav-cta">
            Explore
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section id="top" className="about-hero">
        <div className="about-container">
          <div className="hero-grid">

            <Reveal className="hero-intro">
              <div className="section-index">
                <span>01</span>
                <span>Our Story</span>
              </div>

              <h1>
                Objects with
                <span> a memory.</span>
              </h1>

              <p>
                Jewellery should not simply complete an outfit.
                It should become part of the person who wears it.
              </p>

              <a href="#story" className="scroll-link">
                <span>Discover our story</span>

                <span className="scroll-link__icon">
                  <ArrowDown size={16} />
                </span>
              </a>
            </Reveal>

            <Reveal
              delay={180}
              className="hero-image-wrap"
              direction="right"
            >
              <div className="hero-image-frame">
                <ParallaxImage
                  src={heroImage}
                  alt="Solenne fine jewellery"
                  speed={50}
                />

                <div className="hero-image-label">
                  <span>Atelier No. 01</span>
                  <span>Paris · 2014</span>
                </div>
              </div>

              <div className="hero-number">
                10
                <span>Years of craft</span>
              </div>
            </Reveal>

          </div>
        </div>

        <div className="hero-watermark">
          SOLENNE
        </div>
      </section>

      {/* =====================================================
          STORY
      ====================================================== */}

      <section id="story" className="story-section">
        <div className="about-container">

          <Reveal className="story-topline">
            <span>Our beginning</span>

            <div />

            <span>Chapter 01</span>
          </Reveal>

          <div className="story-grid">

            <Reveal className="story-image">
              <ParallaxImage
                src={craftImage}
                alt="Jewellery craftsmanship"
                speed={35}
              />

              <div className="vertical-label">
                FORM · MATERIAL · LIGHT
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className="story-content"
            >
              <span className="small-kicker">
                The house of Solenne
              </span>

              <h2>
                Born from the belief that
                <em> beautiful things</em>
                deserve time.
              </h2>

              <div className="story-copy">
                <p>
                  Solenne began with a simple question:
                  what makes an object worth keeping?
                </p>

                <p>
                  Our answer has always been found in the
                  details — the weight of a clasp, the curve
                  of a setting, the way a surface catches
                  afternoon light.
                </p>

                <p>
                  We create jewellery through a slower,
                  more deliberate process where material,
                  maker and wearer remain connected.
                </p>
              </div>

              <div className="story-signature">
                <span className="signature-line" />
                <span>
                  Crafted with intention
                </span>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ====================================================== */}

      <section className="marquee-section">
        <div className="marquee-track">
          <span>CRAFTED BY HAND</span>
          <i>✦</i>
          <span>DESIGNED TO REMAIN</span>
          <i>✦</i>
          <span>MADE WITH INTENTION</span>
          <i>✦</i>

          <span>CRAFTED BY HAND</span>
          <i>✦</i>
          <span>DESIGNED TO REMAIN</span>
          <i>✦</i>
          <span>MADE WITH INTENTION</span>
          <i>✦</i>
        </div>
      </section>

      {/* =====================================================
          CRAFT
      ====================================================== */}

      <section id="craft" className="craft-section">
        <div className="about-container">

          <Reveal className="section-heading-large">
            <div className="section-index">
              <span>02</span>
              <span>The Atelier</span>
            </div>

            <h2>
              Where material
              <br />
              becomes <em>meaning.</em>
            </h2>
          </Reveal>

          <div className="craft-layout">

            <Reveal className="craft-image-large">
              <ParallaxImage
                src={DemoImage}
                alt="Solenne artisan working at the atelier"
                speed={45}
              />

              <div className="craft-image-caption">
                <span>Inside the atelier</span>
                <span>Every surface is finished by hand</span>
              </div>
            </Reveal>

            <div className="craft-process">

              {craftSteps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 90}
                  className="craft-step"
                >
                  <span className="craft-step__number">
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>

                    <p>{step.text}</p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1}
                  />
                </Reveal>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}

      <section id="values" className="philosophy-section">
        <div className="about-container">

          <div className="philosophy-heading">
            <Reveal>
              <div className="section-index">
                <span>03</span>
                <span>Our Philosophy</span>
              </div>

              <h2>
                Less noise.
                <br />
                <em>More substance.</em>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p>
                Luxury, to us, is not excess. It is the
                freedom to be selective — in materials,
                process and everything we choose to put
                into the world.
              </p>
            </Reveal>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal
                  key={value.number}
                  delay={index * 100}
                  className="value-card"
                >
                  <div className="value-card__top">
                    <span>{value.number}</span>

                    <Icon
                      size={24}
                      strokeWidth={1.1}
                    />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.body}</p>

                  <span className="value-arrow">
                    <ArrowRight size={17} />
                  </span>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          FOUNDER
      ====================================================== */}

      <section id="founder" className="founder-section">
        <div className="about-container">

          <Reveal className="founder-panel">

            <div className="founder-image">
              <ParallaxImage
                src={founderImage}
                alt="Solenne founder in the atelier"
                speed={30}
              />

              <span className="founder-image__number">
                04
              </span>
            </div>

            <div className="founder-content">

              <div className="section-index section-index--light">
                <span>04</span>
                <span>The Founder</span>
              </div>

              <div className="quote-mark">
                “
              </div>

              <blockquote>
                I wanted to create
                jewellery that becomes
                more beautiful with
                <em> time.</em>
              </blockquote>

              <p>
                Élodie Marchand founded Solenne with
                one ambition: to build a jewellery house
                where craftsmanship could remain at the
                centre of every decision.
              </p>

              <div className="founder-signature">
                <span>Élodie Marchand</span>
                <small>
                  Founder & Master Goldsmith
                </small>
              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="numbers-section">
        <div className="about-container">

          <Reveal className="numbers-header">
            <span>05</span>

            <p>
              A house measured
              <br />
              in lasting things.
            </p>
          </Reveal>

          <div className="numbers-grid">

            <Reveal className="number-item">
              <strong>
                <Counter end={100} suffix="%" />
              </strong>

              <span>Recycled gold</span>
            </Reveal>

            <Reveal delay={100} className="number-item">
              <strong>
                <Counter end={3200} comma />
              </strong>

              <span>Pieces in circulation</span>
            </Reveal>

            <Reveal delay={200} className="number-item">
              <strong>
                <Counter end={10} suffix="+" />
              </strong>

              <span>Years of craft</span>
            </Reveal>

          </div>

          <Reveal className="numbers-bottom">
            <AtelierSeal />

            <p>
              Every number represents a relationship —
              between maker and material, object and wearer,
              present and future.
            </p>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          COLLECTION CTA
      ====================================================== */}

      <section
        id="collection"
        className="collection-section"
      >
        <div className="about-container">

          <Reveal className="collection-panel">

            <div className="collection-copy">

              <span className="collection-kicker">
                The next chapter
              </span>

              <h2>
                Jewellery for
                <br />
                <em>what comes next.</em>
              </h2>

              <p>
                Discover the latest Solenne collection —
                considered forms, tactile materials and
                pieces designed to become yours.
              </p>

              <a href="/collection" className="collection-button">
                <span>Explore collection</span>

                <span>
                  <ArrowUpRight size={17} />
                </span>
              </a>

            </div>

            <div className="collection-image">
              <ParallaxImage
                src={collectionImage}
                alt="Solenne jewellery collection"
                speed={40}
              />
            </div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}