import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Headphones,
  User,
  Tag,
  PenLine,
  Send,
  Lock,
  Store,
  MessageCircle,
  ArrowRight,
  Navigation,
} from "lucide-react";

import "../pages/pages-shared.css";
import "./ContactPage.css";

const API_URL = "http://localhost:5000/api/contact";

const enquiryTypes = [
  "Bridal jewellery",
  "Engagement ring",
  "Gold jewellery",
  "Diamond jewellery",
  "Silver jewellery",
  "Necklace set",
  "Bangles and bracelets",
  "Daily wear jewellery",
  "Gifting collection",
  "Custom design",
  "Gold exchange or buyback",
  "Repair or resizing",
];

const consultationTypes = [
  { value: "Store Visit", icon: Store },
  { value: "Phone Call", icon: Phone },
  { value: "WhatsApp", icon: MessageCircle },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    consultationType: "Store Visit",
    message: "",
  });

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit enquiry"
        );
      }

      setSent(true);
    } catch (err) {
      console.error(err);

      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="contact-hero">

        <div className="contact-hero__image">
          <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1600&q=85"
            alt="Pankaj Jewellers jewellery collection"
          />
        </div>

        <div className="contact-hero__overlay" />

        <div className="contact-hero__content">

          <p className="contact-hero__eyebrow">
            LET'S CONNECT
          </p>

          <h1>
            We’re Here
            <br />
            For You
          </h1>

          <p className="contact-hero__text">
            Whether it’s a question, a custom design, or a store visit —
            we’d love to hear from you. Our team is always ready to make
            your jewellery journey special.
          </p>

          <div className="contact-hero__features">

            <span>
              <span className="hero-feature-icon">◇</span>
              Personalised
              <br />
              Assistance
            </span>

            <span>
              <Headphones size={16} />
              Quick
              <br />
              Response
            </span>

            <span>
              ♡
              <span>
                A More
                <br />
                Meaningful Experience
              </span>
            </span>

          </div>

        </div>

        <div className="contact-hero__side-text">
          More
          <br />
          Than Jewellery
          <br />
          A Part of
          <br />
          Your Story
        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION + FORM
      ====================================================== */}
      <section className="contact-main">

        <div className="contact-main__layout">

          {/* LEFT - INFORMATION */}
          <div className="contact-page__details">

            <p className="contact-page__eyebrow">
              OUR DETAILS
            </p>

            <h2 className="contact-page__heading">
              Contact Information
            </h2>


            <div className="contact-page__row">

              <span className="contact-page__icon">
                <Phone size={20} />
              </span>

              <div>
                <h4>Call Us</h4>

                <p className="contact-page__row-main">
                  +91 77963 74853
                </p>

                <p className="contact-page__row-sub">
                  Mon – Sat, 10:30 AM – 8:30 PM
                </p>
              </div>

            </div>


            <div className="contact-page__row">

              <span className="contact-page__icon">
                <Mail size={20} />
              </span>

              <div>
                <h4>Email Us</h4>

                <p className="contact-page__row-main">
                  hello@pankajjewellers.in
                </p>

                <p className="contact-page__row-sub">
                  We usually respond within 24 hours
                </p>
              </div>

            </div>


            <div className="contact-page__row">

              <span className="contact-page__icon">
                <MapPin size={20} />
              </span>

              <div>
                <h4>Visit Our Store</h4>

                <p className="contact-page__row-main">
                  Pune, Maharashtra, India
                </p>

                <p className="contact-page__row-sub">
                  Come experience our collections in person
                </p>
              </div>

            </div>


            <div className="contact-page__row">

              <span className="contact-page__icon">
                <Headphones size={20} />
              </span>

              <div>
                <h4>Need Assistance?</h4>

                <p className="contact-page__row-sub">
                  Our team is here to help you with product enquiries,
                  custom orders, or anything else.
                </p>
              </div>

            </div>


            <div className="contact-page__quote">

              <span className="contact-page__quote-mark">
                "
              </span>

              <p>
                Every conversation brings us closer to your perfect piece.
              </p>

              <span className="contact-page__quote-sign">
                — PANKAJ JEWELLERS —
              </span>

            </div>

          </div>


          {/* RIGHT - FORM */}
          <form
            className="contact-page__form"
            onSubmit={handleSubmit}
          >

            {sent ? (

              <div className="contact-page__success">

                <div className="success-icon">
                  <Send size={22} />
                </div>

                <h3>
                  Thank you, {form.name || "there"}!
                </h3>

                <p>
                  We've received your enquiry and will reach out shortly.
                </p>

              </div>

            ) : (

              <>

                <p className="contact-page__form-eyebrow">
                  SEND US A MESSAGE
                </p>

                <div className="contact-page__form-heading-row">

                  <h2>
                    Get In Touch
                  </h2>

                  <span className="contact-page__form-dashline">
                    — WE'RE HERE FOR YOU
                  </span>

                </div>


                <div className="contact-page__form-grid">

                  <div className="contact-page__field">

                    <User size={17} />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                    />

                  </div>


                  <div className="contact-page__field">

                    <Phone size={17} />

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                    />

                  </div>

                </div>


                <div className="contact-page__field">

                  <Mail size={17} />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address (Optional)"
                  />

                </div>


                <div className="contact-page__field">

                  <Tag size={17} />

                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Enquiry Type
                    </option>

                    {enquiryTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>
                    ))}

                  </select>

                </div>


                <div className="contact-page__radio-group">

                  <p className="contact-page__radio-label">
                    CONSULTATION TYPE
                  </p>

                  <div className="contact-page__radio-options">

                    {consultationTypes.map(
                      ({ value, icon: Icon }) => (

                        <label
                          key={value}
                          className={`contact-page__radio-option ${
                            form.consultationType === value
                              ? "is-active"
                              : ""
                          }`}
                        >

                          <input
                            type="radio"
                            name="consultationType"
                            value={value}
                            checked={
                              form.consultationType === value
                            }
                            onChange={handleChange}
                          />

                          <Icon size={15} />

                          <span>
                            {value}
                          </span>

                        </label>

                      )
                    )}

                  </div>

                </div>


                <div className="contact-page__field contact-page__field--textarea">

                  <PenLine size={17} />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Message * — Tell us about your requirements..."
                    required
                  />

                </div>


                {error && (
                  <p className="contact-page__error">
                    {error}
                  </p>
                )}


                <button
                  type="submit"
                  className="contact-page__submit"
                  disabled={loading}
                >

                  {loading ? "Sending..." : "Send Message"}

                  <Send size={17} />

                </button>


                <p className="contact-page__privacy">

                  <Lock size={13} />

                  Your information is safe with us.
                  We respect your privacy.

                </p>

              </>

            )}

          </form>

        </div>

      </section>


      {/* =====================================================
          STORES / GET DIRECTIONS
      ====================================================== */}
      <section className="contact-stores">

        <div className="contact-section-heading">

          <p>
            FIND US
          </p>

          <h2>
            Come Visit Us
          </h2>

          <span>
            We would love to welcome you at our showroom.
            Explore our collections, discuss your requirements,
            and find a piece made especially for you.
          </span>

        </div>


        <div className="contact-stores__grid">


          {/* STORE 1 */}
          <article className="store-card">

            <div className="store-card__image">

              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"
                alt="Pankaj Jewellers showroom"
              />

            </div>

            <div className="store-card__content">

              <p className="store-card__label">
                PANKAJ JEWELLERS
              </p>

              <h3>
                Main Showroom
              </h3>

              <p className="store-card__address">
                MG Road, Camp
                <br />
                Pune, Maharashtra 411001
              </p>

              <div className="store-card__info">

                <span>
                  <Phone size={14} />
                  +91 77963 74853
                </span>

                <span>
                  <Store size={14} />
                  Mon – Sat
                </span>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Pankaj+Jewellers+Pune"
                target="_blank"
                rel="noreferrer"
                className="store-card__direction"
              >
                <Navigation size={15} />
                Get Directions
                <ArrowRight size={15} />
              </a>

            </div>

          </article>


          {/* STORE 2 */}
          <article className="store-card">

            <div className="store-card__image">

              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=85"
                alt="Pankaj Jewellers showroom"
              />

            </div>

            <div className="store-card__content">

              <p className="store-card__label">
                PANKAJ JEWELLERS
              </p>

              <h3>
                Pune Showroom
              </h3>

              <p className="store-card__address">
                Dhole Patil Road
                <br />
                Pune, Maharashtra 411001
              </p>

              <div className="store-card__info">

                <span>
                  <Phone size={14} />
                  +91 77965 32109
                </span>

                <span>
                  <Store size={14} />
                  Mon – Sat
                </span>

              </div>

              <a
                href="https://i.pinimg.com/1200x/56/5e/8f/565e8f759996d80dfc516836b59d88af.jpg"
                target="_blank"
                rel="noreferrer"
                className="store-card__direction"
              >
                <Navigation size={15} />
                Get Directions
                <ArrowRight size={15} />
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="contact-final-cta">

        <div className="contact-final-cta__image">

          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85"
            alt="Pankaj Jewellers jewellery"
          />

        </div>

        <div className="contact-final-cta__content">

          <p>
            STILL HAVE A QUESTION?
          </p>

          <h2>
            We’re Just a Message Away
          </h2>

          <span>
            Our team is always ready to help you with product details,
            custom designs, or store appointments.
          </span>

          <div className="contact-final-cta__buttons">

            <a
              href="https://wa.me/917796374853"
              target="_blank"
              rel="noreferrer"
              className="cta-whatsapp"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

            <a
              href="tel:+917796374853"
              className="cta-call"
            >
              Call Us
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

        {/* =====================================================
            EDITORIAL CRAFT CIRCLE
        ====================================================== */}
        <div className="cta-craft-circle" aria-hidden="true">

          <div className="cta-craft-circle__orbit">
            <span>
              CRAFTED FOR GENERATIONS
            </span>
          </div>

          <div className="cta-craft-circle__inner">
            <span className="cta-craft-circle__dot"></span>
          </div>

        </div>

      </section>

    </main>
  );
}