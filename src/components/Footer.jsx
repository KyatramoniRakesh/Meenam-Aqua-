import React from "react";
import "../css/Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Images/MainLogo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Column 1: Logo + Description */}
        <div className="footer-section about">
          <img
            src={logo}
            alt="Meena Aqua Needs"
            className="footer-logo"
          />
          <p>
            Pioneering aquaculture healthcare since 2010 with a mission to
            promote sustainable, healthy aquatic ecosystems across India.
          </p>
        </div>

        {/* Column 2: Our Services */}
        <div className="footer-section">
          <h3>
            <span className="footer-line"></span> Our Services
          </h3>
          <ul>
            <li>Fish Health Management</li>
            <li>Water Quality Testing</li>
            <li>Biosecurity Solutions</li>
            <li>Feed & Nutrition</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-section">
          <h3>
            <span className="footer-line"></span> Quick Links
          </h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-section contact">
          <h3>
            <span className="footer-line"></span> Contact Us
          </h3>
          <p>
            <strong>Office & Factory:</strong>
            <br />
            D-No.4-60/4, Plot No.114, Bahadurpally,
            <br />
            Dundigal-Gandimaisamma (Mandal),
            <br />
            Medchal-Malkajgiri (Dist),
            <br />
            Telangana - 500043
          </p>
          <p>
            <strong>Phone:</strong> +91 97910-75304
          </p>
          <p>
            <strong>Email:</strong> meenamaqua@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p className="p">
          © 2025 <span>Meena Aqua Needs.</span> All rights reserved. | Committed
          to sustainable aquaculture excellence.
        </p>
      </div>

      {/* Floating WhatsApp Button */}
    
    </footer>
  );
};

export default Footer;
