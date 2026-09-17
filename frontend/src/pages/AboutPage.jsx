import { useEffect, useRef, useState } from "react";

const heroImage =
  "https://i.pinimg.com/736x/b4/b2/12/b4b212ea38276ef52e532767dd2200c7.jpg";
const craftImage =
  "https://i.pinimg.com/736x/b4/b2/12/b4b212ea38276ef52e532767dd2200c7.jpg";
const founderImage =
  "https://i.pinimg.com/736x/b4/b2/12/b4b212ea38276ef52e532767dd2200c7.jpg";
const auroraImage =
  "https://i.pinimg.com/736x/b4/b2/12/b4b212ea38276ef52e532767dd2200c7.jpg";

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Counter({ end, suffix = "", comma = false }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        const start = performance.now();

        const tick = (time) => {
          const progress = Math.min((time - start) / 1600, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

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

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}

const values = [
  [
    "01",
    "Slow craft",
    "Two collections a year. No shortcuts, no seasons we don't believe in.",
  ],
  [
    "02",
    "Honest metal",
    "Recycled gold and traceable stones, sourced from a circle of five families.",
  ],
  [
    "03",
    "Made to last",
    "Lifetime repair and re-polish. Every Solenne piece is meant to be inherited.",
  ],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <ScrollProgress />

      <div aria-hidden="true" className="paper-grain" />

      <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#story" className="font-serif text-[28px] leading-none">
            Solenne
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-9 text-[11px] uppercase text-muted-foreground md:flex"
          >
            <a className="story-link" href="#values">
              Philosophy
            </a>
            <a className="story-link text-primary" href="#atelier">
              Atelier
            </a>
            <a className="story-link" href="#founder">
              Founder
            </a>
            <a className="story-link" href="#collection">
              Collection
            </a>
          </nav>

          <span className="header-date text-[10px] uppercase text-accent sm:text-xs">
            Paris · MMXIV
          </span>
        </div>
      </header>

      <section
        id="story"
        className="mx-auto max-w-[1320px] px-5 pb-20 pt-16 sm:px-8 lg:pt-24"
      >
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="hero-copy lg:col-span-5">
            <p className="eyebrow">— Our story</p>

            <h1 className="mt-4 max-w-[9ch] font-serif text-[clamp(3.7rem,7vw,6.6rem)] leading-[0.88]">
              The quiet <em className="text-primary">alchemy</em> of worn gold.
            </h1>

            <p className="mt-8 max-w-[46ch] text-[15px] leading-7 text-muted-foreground">
              Solenne began in a single Parisian workshop, where a house of one
              made pieces meant to be inherited. We shape metal the slow
              way—cast by hand, polished by thumb—until each piece carries the
              warmth of its maker.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-accent" />
              <span className="microcopy">Est. 2014 · Rue de Sévigné</span>
            </div>
          </Reveal>

          <Reveal delay={140} className="hero-visual relative lg:col-span-7">
            <div className="image-shell hero-image group">
              <img
                src={heroImage}
                alt="Woman wearing Solenne garnet and gold jewelry"
                width={1120}
                height={848}
              />
              <span className="image-glint" aria-hidden="true" />
            </div>

            <div className="floating-stat">
              <strong>10</strong>
              <span>
                years at
                <br />
                the bench
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="atelier"
        className="mx-auto max-w-[1320px] px-5 pb-24 sm:px-8"
      >
        <Reveal className="chapter-marker">
          <span>02</span>
          <p>
            Formed by time
            <br />
            finished by hand
          </p>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="relative lg:col-span-4">
            <div className="image-shell craft-image">
              <img
                src={craftImage}
                alt="Hand-forged gold and garnet jewelry on marble"
                width={736}
                height={912}
                loading="lazy"
              />
              <span className="image-glint" aria-hidden="true" />
            </div>

            <div className="floating-stat -right-3 -top-7 bottom-auto left-auto">
              <strong>42</strong>
              <span>hands</span>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5 lg:pl-5">
            <h2 className="font-serif text-[clamp(2.7rem,5vw,4.2rem)] leading-none">
              A philosophy of <em className="text-primary">patience</em>.
            </h2>

            <p className="mt-6 max-w-[44ch] text-[15px] leading-7 text-muted-foreground">
              We release two collections a year, never more. Every stone is
              chosen for its imperfection, every clasp for its weight against the
              skin. Luxury, for us, is the discipline of leaving well enough
              alone.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="microcopy">Atelier · Paris</span>
            </div>
          </Reveal>

          <Reveal delay={180} className="flex justify-center lg:col-span-3">
            <div className="seal" aria-label="Made slowly by hand">
              <span>Solenne · Paris · Made Slowly · </span>
              <strong>hand</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="founder"
        className="mx-auto max-w-[1320px] px-5 pb-24 sm:px-8"
      >
        <Reveal className="founder-panel">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">— The founder</p>

              <span className="quote-mark" aria-hidden="true">
                “
              </span>

              <blockquote className="founder-quote mt-3 max-w-[25ch] font-serif text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.03]">
                I never wanted to make jewelry. I wanted to make the objects my
                mother would keep.
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="microcopy">
                  Élodie Marchand · Founder &amp; Master Goldsmith
                </span>
              </div>
            </div>

            <div className="image-shell founder-image lg:col-span-4">
              <img
                src={founderImage}
                alt="Élodie Marchand at her jewelry workbench"
                width={736}
                height={912}
                loading="lazy"
              />
              <span className="image-glint" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="values"
        className="mx-auto max-w-[1320px] px-5 pb-24 sm:px-8"
      >
        <Reveal className="section-heading">
          <p className="eyebrow">— What we hold</p>
          <h2>Principles, not promises.</h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {values.map(([number, title, body], index) => (
            <Reveal
              key={title}
              delay={index * 100}
              className="value-item"
            >
              <span className="eyebrow">{number}</span>

              <h3 className="mt-2 font-serif text-3xl">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-24 sm:px-8">
        <Reveal className="chapter-marker chapter-marker-right">
          <span>05</span>
          <p>
            A house measured
            <br />
            in lasting things
          </p>
        </Reveal>

        <Reveal className="stats-band">
          <div>
            <strong>
              <Counter end={100} suffix="%" />
            </strong>
            <span>recycled gold</span>
          </div>

          <div>
            <strong>
              <Counter end={3200} comma />
            </strong>
            <span>pieces in circulation</span>
          </div>

          <div>
            <strong>
              <Counter end={5} />
            </strong>
            <span>sourcing families</span>
          </div>
        </Reveal>
      </section>

      <section
        id="collection"
        className="mx-auto max-w-[1320px] px-5 pb-28 sm:px-8"
      >
        <Reveal className="collection-panel">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow text-accent">— The next chapter</p>

              <h2 className="mt-3 max-w-[10ch] font-serif text-[clamp(3rem,6vw,5rem)] leading-[0.92] text-primary-foreground">
                The <em className="text-accent">Aurora</em> collection.
              </h2>

              <p className="mt-6 max-w-[40ch] text-[15px] leading-7 text-primary-foreground/70">
                Twelve pieces cast from a single mold of dawn. Arriving this
                autumn, in editions of forty.
              </p>

              <a href="#story" className="collection-link">
                Discover the collection <span>↗</span>
              </a>
            </div>

            <div className="image-shell collection-image lg:col-span-6">
              <img
                src={auroraImage}
                alt="Aurora gold and garnet statement necklace"
                width={896}
                height={736}
                loading="lazy"
              />
              <span className="image-glint" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-5 py-9 text-[10px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-serif text-2xl normal-case text-foreground">
            Solenne
          </span>
          <span>Atelier · 4 Rue de Sévigné, Paris</span>
          <span>© MMXXVI · All pieces made by hand</span>
        </div>
      </footer>
    </main>
  );
}
