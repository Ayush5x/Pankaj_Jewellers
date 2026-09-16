import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import '../pages/pages-shared.css';
import './ContactPage.css';

const API_URL = 'http://localhost:5000/api/contact';

const enquiryTypes = [
  'Bridal jewellery',
  'Engagement ring',
  'Gold jewellery',
  'Diamond jewellery',
  'Silver jewellery',
  'Necklace set',
  'Bangles and bracelets',
  'Daily wear jewellery',
  'Gifting collection',
  'Custom design',
  'Gold exchange or buyback',
  'Repair or resizing',
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    consultationType: 'Store Visit',
    message: '',
  });

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit enquiry');
      }

      setSent(true);
    } catch (err) {
      console.error(err);
      setError(
        err.message ||
          'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="container">
        <p className="page-eyebrow">Get in Touch</p>

        <h1 className="page-title">Contact Us</h1>

        <p className="page-lead">
          Visit our store, call us, or send an enquiry and our team
          will get back to you.
        </p>

        <div className="contact-page__layout">

          {/* LEFT SIDE */}
          <div className="contact-page__details">

            <div className="contact-page__row">
              <MapPin size={20} />

              <div>
                <h4>Visit Our Store</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-page__row">
              <Phone size={20} />

              <div>
                <h4>Call Us</h4>
                <p>+91 77963 74853</p>
              </div>
            </div>

            <div className="contact-page__row">
              <Mail size={20} />

              <div>
                <h4>Email</h4>
                <p>hello@pankajjewellers.in</p>
              </div>
            </div>

            <div className="contact-page__row">
              <Clock size={20} />

              <div>
                <h4>Store Hours</h4>
                <p>Mon – Sat, 10:30 AM – 8:30 PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form
            className="contact-page__form"
            onSubmit={handleSubmit}
          >

            {sent ? (
              <div className="contact-page__success">
                <h3>
                  Thank you, {form.name || 'there'}!
                </h3>

                <p>
                  We've received your enquiry and will reach out
                  shortly.
                </p>
              </div>
            ) : (
              <>

                {/* NAME + PHONE */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                  }}
                >

                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      required
                    />
                  </label>

                </div>

                {/* EMAIL */}
                <label>
                  Email Address (Optional)

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </label>

                {/* INTEREST */}
                <label>
                  Interest

                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select enquiry type
                    </option>

                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                {/* CONSULTATION TYPE */}
                <fieldset
                  style={{
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <legend
                    style={{
                      marginBottom: '12px',
                      fontWeight: '600',
                    }}
                  >
                    Consultation Type
                  </legend>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(3, 1fr)',
                      gap: '15px',
                    }}
                  >

                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value="Store Visit"
                        checked={
                          form.consultationType ===
                          'Store Visit'
                        }
                        onChange={handleChange}
                      />

                      Store Visit
                    </label>

                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value="Phone Call"
                        checked={
                          form.consultationType ===
                          'Phone Call'
                        }
                        onChange={handleChange}
                      />

                      Phone Call
                    </label>

                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value="WhatsApp"
                        checked={
                          form.consultationType ===
                          'WhatsApp'
                        }
                        onChange={handleChange}
                      />

                      WhatsApp
                    </label>

                  </div>
                </fieldset>

                {/* MESSAGE */}
                <label>
                  Message

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about the occasion, budget, preferred metal, or design idea."
                  />
                </label>

                {/* ERROR */}
                {error && (
                  <p
                    style={{
                      color: '#b00020',
                      margin: '10px 0',
                    }}
                  >
                    {error}
                  </p>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="contact-page__submit"
                  disabled={loading}
                >
                  <Send size={18} />

                  {loading
                    ? 'Sending...'
                    : 'Send Enquiry'}
                </button>

              </>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}