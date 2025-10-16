import React, { useEffect, useState } from "react";
import  "../css/Banner.css";
import banner1 from "../assets/Images/banner1.jpeg";
import banner2 from "../assets/Images/banner2.jpeg";
import banner3 from "../assets/Images/banner3.jpg";
import banner4 from "../assets/Images/banner4.jpg";


const Banner = () => {
  const slides = [
    {
      title: "Innovative Aquaculture Healthcare Solutions",
      desc: "At MEENA AQUA NEEDS, we are dedicated to promoting the health and wellbeing of aquatic life through top-quality products and sustainable practices.",
      img: banner1,
    },
    {
      title: "Sustainable & Ethical Aquaculture",
      desc: "Our eco-friendly practices ensure healthy ponds, and a cleaner planet for future generations.",
      img: banner2,
    },
    {
      title: "Innovation in Aqua Health",
      desc: "Backed by Research and Development, we bring science-driven solutions to modern aquaculture.",
      img: banner3,
    },
    {
      title: "Trusted by Farmers Across India",
      desc: "From shrimp to fish, our products deliver consistent results and improved yield for aquaculture professionals.",
      img: banner4,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="main-banner">
      <div className="banner-slider" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="banner-slide" key={index}>
            <div className="banner-inner">
              <div className="banner-left">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                {/* <button className="banner-btn">Learn More</button> */}
              </div>
              <div className="banner-right">
                <img src={slide.img} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="banner-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Banner;
