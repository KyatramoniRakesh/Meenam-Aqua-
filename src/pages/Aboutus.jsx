import React from "react";
import "../css/Aboutus.css";
import heroBg from "../assets/Images/aboutus.jpg";
import { FaDesktop } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

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
        </div>
    );
};

export default Aboutus;
