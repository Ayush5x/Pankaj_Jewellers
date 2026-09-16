import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../pages/pages-shared.css';
import './ContactPage.css';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact-page">
      <div className="container">
        <p className="page-eyebrow">Get in Touch</p>
        <h1 className="page-title">Contact Us</h1>
        <p className="page-lead">
          Visit our store, call us, or send an enquiry and our team will get back to you.
        </p>

        <div className="contact-page__layout">
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
                <p>+91 88067 49782</p>
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

          <form className="contact-page__form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact-page__success">
                <h3>Thank you, {form.name || 'there'}!</h3>
                <p>We've received your message and will reach out shortly.</p>
              </div>
            ) : (
              <>
                <label>
                  Name
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </label>
                <label>
                  Phone
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" required />
                </label>
                <label>
                  Message
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us what you're looking for" required />
                </label>
                <button type="submit" className="contact-page__submit">Send Enquiry</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
