import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import "./testimonials.css";

const testimonials = [
  {
    name: "Sneha Kulkarni",
    location: "Pune, Maharashtra",
    image: "https://i.pinimg.com/1200x/27/ec/00/27ec003a87a4526f44e765507d74c67b.jpg",
    review:
      "Absolutely in love with the collection! The craftsmanship and detailing are simply outstanding.",
  },
  {
    name: "Rohit Deshmukh",
    location: "Mumbai, Maharashtra",
    image: "https://i.pinimg.com/736x/7a/6a/95/7a6a9556e31f21d92f8b6c099f5ca123.jpg",
    review:
      "Exceptional quality and timeless designs. The trust and service have always been remarkable.",
  },
  {
    name: "Aarti Sharma",
    location: "Nagpur, Maharashtra",
    image: "https://i.pinimg.com/736x/2f/e1/11/2fe111cb1ac50884d1a0eb6e1d594a95.jpg",
    review:
      "Elegant designs, genuine quality and a wonderful shopping experience.",
  },
];

const AUTO_SCROLL_DELAY = 4500;

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const autoScrollRef = useRef(null);

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const startAutoScroll = () => {
    clearInterval(autoScrollRef.current);

    autoScrollRef.current = setInterval(() => {
      setActive((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, AUTO_SCROLL_DELAY);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      clearInterval(autoScrollRef.current);
    };
  }, []);

  const handlePrevious = () => {
    previous();
    startAutoScroll();
  };

  const handleNext = () => {
    next();
    startAutoScroll();
  };

  const handleDotClick = (index) => {
    setActive(index);
    startAutoScroll();
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        {/* Editorial Intro */}
        <motion.div
          className="testimonials__intro"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.span
            className="testimonials__ornament"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>

          <span className="testimonials__label">
            MORE THAN
            <br />
            JEWELLERY
          </span>

          <div className="testimonials__line" />

          <h3>
            A Part of
            <br />
            Your Story
          </h3>

          <p>
            Every piece carries a story. Here's what
            our customers have to say.
          </p>

          <span className="testimonials__bottom-mark">
            ✦
          </span>
        </motion.div>

        {/* Main */}
        <div className="testimonials__main">
          {/* Heading */}
          <motion.div
            className="testimonials__heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="testimonials__eyebrow">
              <span />
              TESTIMONIALS
              <span />
            </div>

            <h2>
              Loved by <em>Generations</em>
            </h2>

            <p>
              Real stories. Real emotions. Real trust.
            </p>
          </motion.div>

          {/* Cards */}
          <div
            className="testimonials__carousel"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            onFocus={stopAutoScroll}
            onBlur={startAutoScroll}
          >
            <motion.button
              className="testimonials__arrow testimonials__arrow--left"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              whileHover={{
                scale: 1.12,
                x: -4,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="testimonials__cards">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="testimonial-card"
                  initial={{
                    opacity: 0,
                    x: 70,
                    rotate: 1.5,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -70,
                    rotate: -1.5,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Customer */}
                  <motion.div
                    className="testimonial-card__profile"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.5,
                    }}
                  >
                    <div className="testimonial-card__image">
                      <img
                        src={testimonials[active].image}
                        alt={testimonials[active].name}
                      />
                    </div>

                    <div>
                      <h3>
                        {testimonials[active].name}
                      </h3>

                      <span>
                        {testimonials[active].location}
                      </span>
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      rotate: -15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.28,
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Quote
                      className="testimonial-card__quote"
                      size={22}
                    />
                  </motion.div>

                  {/* Review */}
                  <motion.p
                    className="testimonial-card__review"
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.35,
                      duration: 0.6,
                    }}
                  >
                    "{testimonials[active].review}"
                  </motion.p>

                  {/* Stars */}
                  <motion.div
                    className="testimonial-card__stars"
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.48,
                      duration: 0.5,
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: star * 0.08,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Star
                          size={13}
                          fill="currentColor"
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Footer */}
                  <div className="testimonial-card__footer">
                    <span>✦</span>
                    <small>TRUSTED FOR GENERATIONS</small>
                    <span>✦</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              className="testimonials__arrow testimonials__arrow--right"
              onClick={handleNext}
              aria-label="Next testimonial"
              whileHover={{
                scale: 1.12,
                x: 4,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={
                  index === active
                    ? "is-active"
                    : ""
                }
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Customers */}
          <div className="testimonials__customers">
            <div className="testimonials__avatars">
              {testimonials.map((item, index) => (
                <motion.img
                  key={item.name}
                  src={item.image}
                  alt=""
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <motion.span
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                +5K
              </motion.span>
            </div>

            <span>
              JOIN THOUSANDS OF HAPPY CUSTOMERS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
