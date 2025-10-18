import React, { useEffect } from "react";
import "../css/Contact.css";
import contactBanner from "../assets/Images/contact.png";
import waterImg from "../assets/Images/contact2.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="contact-page">
      {/* ===== HERO ===== */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        <div className="contact-hero-overlay">
          <h1 data-aos="fade-up">Contact</h1>
          <div className="breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <Link to="/">Home</Link> <span>›</span> <p>Contact</p>
          </div>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <div className="contact-container">
        <div className="contact-flex">
          {/* LEFT IMAGE CARD */}
          <div className="contact-left" data-aos="fade-right">
            <img src={waterImg} alt="aquaculture" />
            <div className="blue-overlay">
              <div className="overlay-text">
                <h3>Trusted by Aquaculturists Across India</h3>
                <p>
                  Delivering quality aquaculture healthcare solutions since 2010 —
                  sustainable, reliable, and science-backed.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="contact-right" data-aos="fade-left">
            <div className="form-header">
              <h2>Get in Touch</h2>
              <p>
                We’re here to support your aquaculture journey. Reach out today!
              </p>
            </div>

            <div className="form-card">
              <div className="form-card-header">
                <h3>Send Your Inquiry</h3>
                <p>We respond within 24 hours</p>
              </div>

              <form className="contact-form">
                <label>
                  Full Name <span>*</span>
                </label>
                <input type="text" placeholder="Enter your full name" required />

                <label>
                  Email Address <span>*</span>
                </label>
                <input type="email" placeholder="you@example.com" required />

                <label>
                  Phone Number <span>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  required
                />

                <label>Message (Optional)</label>
                <textarea placeholder="Tell us about your aquaculture needs..." />

                <button type="submit">Send Message →</button>
                <small>
                  Your trust, our commitment to sustainable aquaculture.
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
