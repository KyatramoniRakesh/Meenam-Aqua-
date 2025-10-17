import React, { useEffect } from "react";
import "../css/About.css";
import aboutImg from "../assets/Images/about.jpg";
import hand from "../assets/Images/hand.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductsCategory from "./ProductsCategory";

const AboutSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="about-section">
            {/* ===== ABOUT CONTAINER ===== */}
            <div className="about-container" data-aos="fade-up">
                {/* LEFT CONTENT */}
                <div className="about-content">
                    <h2 className="about-title">MEENAM AQUA NEEDS</h2>
                    <p className="about-desc">
                        Founded in 2010, MEENAM AQUA NEEDS is committed to excellence in
                        aquaculture healthcare. Our unwavering dedication ensures that our
                        products meet the highest standards of quality and performance.
                    </p>
                    <p className="about-desc">
                        We specialize in fish/shrimp health management, water quality
                        solutions, and sustainable aquaculture practices — empowering
                        farmers across India with science-backed, ISO-certified products.
                    </p>

                    <div className="certifications">
                        <span>ISO 9001:2015 Certified</span>
                        <span>Telangana Licensed</span>
                        <span className="certified-badge">CAA Certified</span>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="about-image-wrapper">
                    <img src={aboutImg} alt="About" className="about-image" />
                </div>
            </div>

            {/* ===== CERTIFICATION BOXES BELOW ===== */}
            <div className="certification-boxes" data-aos="fade-up">
                <div className="cert-box">
                    <h3>ISO 9001:2015 Certified</h3>
                    <p>
                        We adhere to international quality management standards to ensure
                        consistent excellence in product development and service.
                    </p>
                </div>

                <div className="cert-box">
                    <h3>Government of Telangana License</h3>
                    <p>
                        Licensed and regulated by the Government of Telangana for trusted,
                        compliant, and ethical aquaculture operations.
                    </p>
                </div>

                <div className="cert-box">
                    <h3>Coastal Aquaculture Authority Certified</h3>
                    <p>
                        Our products are certified by the Coastal Aquaculture Authority,
                        India — ensuring safety, efficacy, and environmental responsibility.
                    </p>
                </div>
            </div>





        </section>
    );
};

export default AboutSection;
