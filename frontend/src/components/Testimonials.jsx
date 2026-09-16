import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "./testimonials.css";

const testimonials = [
  {
    name: "Sneha Kulkarni",
    location: "Pune, Maharashtra",
    image: "/images/customer-1.jpg",
    review:
      "Absolutely in love with the collection! The craftsmanship and detailing are simply outstanding.",
  },
  {
    name: "Rohit Deshmukh",
    location: "Mumbai, Maharashtra",
    image: "/images/customer-2.jpg",
    review:
      "Exceptional quality and timeless designs. The trust and service have always been remarkable.",
  },
  {
    name: "Aarti Sharma",
    location: "Nagpur, Maharashtra",
    image: "/images/customer-3.jpg",
    review:
      "Elegant designs, genuine quality and a wonderful shopping experience.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);

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

  return (
    <section className="testimonials">

      <div className="testimonials__container">

        {/* Royal Intro */}
        <motion.div
          className="testimonials__intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="testimonials__ornament">✦</span>

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
          <div className="testimonials__carousel">

            <button
              className="testimonials__arrow testimonials__arrow--left"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>


            <div className="testimonials__cards">

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="testimonial-card"
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >

                  {/* Customer */}
                  <div className="testimonial-card__profile">

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

                  </div>


                  {/* Quote */}
                  <Quote
                    className="testimonial-card__quote"
                    size={22}
                  />


                  <p className="testimonial-card__review">
                    "{testimonials[active].review}"
                  </p>


                  {/* Stars */}
                  <div className="testimonial-card__stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={13}
                        fill="currentColor"
                      />
                    ))}
                  </div>


                  {/* Footer */}
                  <div className="testimonial-card__footer">
                    <span>✦</span>
                    <small>TRUSTED FOR GENERATIONS</small>
                    <span>✦</span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>


            <button
              className="testimonials__arrow testimonials__arrow--right"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>

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
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

          </div>


          {/* Customers */}
          <div className="testimonials__customers">

            <div className="testimonials__avatars">

              {testimonials.map((item) => (
                <img
                  key={item.name}
                  src={item.image}
                  alt=""
                />
              ))}

              <span>+5K</span>

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