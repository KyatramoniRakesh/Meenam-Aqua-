import React from "react";
import "../css/Aboutus.css";
import heroBg from "../assets/Images/aboutus.jpg";
import { FaDesktop } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaUsers, FaTruck } from "react-icons/fa";
import { FaShieldAlt, FaBolt } from "react-icons/fa";

const Aboutus = () => {
    return (
        <div>
            {/* ================= HERO SECTION ================= */}
            <section
                className="hero-section"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <p className="hero-badge">EST. 2010</p>
                    <h1 className="hero-title">MEENAM AQUA</h1>
                    <p className="hero-subtitle">
                        Pioneering Aquaculture Healthcare for Sustainable, Healthy Aquatic
                        Ecosystems Across India
                    </p>
                </div>
            </section>

            {/* ================= VISION FOUNDER SECTION ================= */}
            <section className="vision-section">
                <h2 className="vision-heading">OUR VISION FOUNDER</h2>
                <div className="underline"></div>

                <div className="vision-card">
                    <p>
                        With over{" "}
                        <span className="highlight-teal">30 years of expertise</span> in
                        aquaculture and engineering, established{" "}
                        <span className="highlight-teal">MEENAM AQUA NEEDS</span> in 2010 as
                        a beacon of innovation and sustainability in India's aquaculture
                        industry.
                    </p>

                    <p>
                        His visionary leadership continues to drive our mission of
                        delivering{" "}
                        <span className="highlight-blue">
                            science-backed, eco-conscious solutions
                        </span>{" "}
                        that empower farmers and protect aquatic life for generations to
                        come.
                    </p>
                </div>

                <div className="vision-features">
                    <div className="feature-box">
                        <div className="icon-box">✔</div>
                        <div>
                            <h4>30+ Years Expertise</h4>
                            <p>Decades of industry leadership and innovation</p>
                        </div>
                    </div>

                    <div className="feature-box">
                        <div className="icon-box">📍</div>
                        <div>
                            <h4>Telangana Innovation Hub</h4>
                            <p>State-of-the-art facilities driving aquaculture advancement</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VISION FOUNDER SECTION ================= */}
            <section className="our-mission">
                <h2>Our Mission & Values</h2>
                <p>Driving innovation with sustainable practices and premium products</p>

                <div className="mission-cards">
                    <div className="mission-card">
                        <div className="icon-box">
                            <FaDesktop />
                        </div>
                        <h3>Our Mission</h3>
                        <div className="mission-inner-card">
                            <p>
                                To deliver high-performance aquaculture products that ensure
                                healthier ponds, happier fish/shrimp, and thriving farms across
                                India.
                            </p>
                        </div>
                    </div>

                    <div className="mission-card">
                        <div className="icon-box">
                            <FaCheck />
                        </div>
                        <h3>Company Policy</h3>
                        <div className="mission-inner-card">
                            <p>
                                Committed to manufacturing top-quality products with a focus on
                                sustainability and responsible aquaculture practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="manufacturing-section">
                <h2>Manufacturing Excellence</h2>
                <p className="subtitle">
                    State-of-the-art production units with cutting-edge technology
                </p>

                <div className="unit-container">
                    {/* ===== UNIT 1 ===== */}
                    <div className="unit-card">
                        <div className="unit-header">
                            <div className="unit-icon">🏭</div>
                            <h3>Unit I: Minerals & Supplements</h3>
                        </div>

                        <div className="unit-info">
                            <div className="info-box">
                                <h4>Products</h4>
                                <p>Minerals, Disinfectants and Feed Supplements</p>
                            </div>

                            <div className="info-box">
                                <h4>Address</h4>
                                <p>
                                    D-No.4-60/4, Plot No.114, Bahadurpally, Dundigal-Gandimaisamma
                                    (Mandal), Medchal-Malkajgiri (Dist) Telangana - 500043
                                </p>
                            </div>

                            <div className="map-box">
                                <iframe
                                    title="Unit 1 Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15214.445996795634!2d78.431244!3d17.573674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fbdc336e94d%3A0xc31e3d1d8b0d22d1!2sMEENAM%20AQUA%20NEEDS!5e0!3m2!1sen!2sin!4v1760945364044!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* ===== UNIT 2 ===== */}
                    <div className="unit-card">
                        <div className="unit-header">
                            <div className="unit-icon">🏭</div>
                            <h3>Unit II: Probiotics</h3>
                        </div>

                        <div className="unit-info">
                            <div className="info-box">
                                <h4>Products</h4>
                                <p>Advanced Probiotics for Aquaculture</p>
                            </div>

                            <div className="info-box">
                                <h4>Address</h4>
                                <p>
                                    D-60/2/35, Plot No.35, Bahadurpally, Dundigal Gandimaisamma
                                    (Mandal), Medchal Malkajgiri (Dist) Telangana - 500043
                                </p>
                            </div>

                            <div className="map-box">
                                <iframe
                                    title="Unit 2 Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15214.445996795634!2d78.431244!3d17.573674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fbdc336e94d%3A0xc31e3d1d8b0d22d1!2sMEENAM%20AQUA%20NEEDS!5e0!3m2!1sen!2sin!4v1760945364044!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="certifications">
                <h2>Certifications & Compliance</h2>

                <div className="certification-cards">
                    <div className="cert-card">
                        <div className="cert-icon">
                            <FaShieldAlt />
                        </div>
                        <h3>Government of Telangana Licensed</h3>
                        <p>
                            Fully compliant with all state regulations and standards.
                        </p>
                    </div>

                    <div className="cert-card">
                        <div className="cert-icon">
                            <FaUsers />
                        </div>
                        <h3>ISO 9001:2015 Certified</h3>
                        <p>
                            Adherence to international quality management standards.
                        </p>
                    </div>

                    <div className="cert-card">
                        <div className="cert-icon">
                            <FaBolt />
                        </div>
                        <h3>Coastal Aquaculture Authority Certified</h3>
                        <p>
                            Certified for safety, efficacy, and environmental responsibility.
                        </p>
                    </div>
                </div>

                <div className="cert-footer">
                    <p>
                        We adhere to the highest regulatory and quality standards to ensure
                        safety, efficacy, and consistency in every product.
                    </p>
                </div>
            </section>

            <section className="about-features">
                <div className="feature-card">
                    <div className="feature-icon">
                        <FaUsers />
                    </div>
                    <h3>Expert Production Team</h3>
                    <div className="feature-content">
                        <p>
                            Our team includes highly qualified professionals with decades of
                            combined experience in aquaculture science and manufacturing.
                        </p>
                        <p>
                            Their expertise is the foundation of our quality and innovation,
                            ensuring every product meets the highest standards.
                        </p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <FaTruck />
                    </div>
                    <h3>National & Global Reach</h3>
                    <div className="feature-content">
                        <p>
                            We serve customers across India’s coastal and inland fisheries
                            states, with expanding global export markets.
                        </p>
                        <p>
                            Our products are making waves internationally, bringing Indian
                            aquaculture excellence to the world stage.
                        </p>
                    </div>
                </div>
            </section>


            <section className="aqua-cta">
                <div className="cta-content">
                    <h2>Join Our Aquaculture Revolution</h2>
                    <p>
                        Partner with <strong>MEENAM AQUA</strong> to transform your aquaculture operations
                        with our science-backed, sustainable solutions.
                    </p>
                    <button className="cta-btn">Contact Us Today</button>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;
