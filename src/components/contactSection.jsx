import React, { useEffect } from "react";
import "../css/ContactSection.css";
import hand from "../assets/Images/hand.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="contact-section" data-aos="fade-up">
      <div className="contact-image">
        <img src={hand} alt="Ready to boost aquaculture" />
      </div>

      <div className="contact-content">
        <h2 className="contact-title">Ready to Boost Your Aquaculture?</h2>
        <p className="contact-desc">
          Contact us today and discover how <strong>MEENAM AQUA NEEDS</strong> can deliver
          sustainable, high-performance results for your farm.
        </p>

        <Link to="/contact" className="contact-btn">Get in Touch →</Link>
      </div>
    </section>
  );
};

export default ContactSection;
