import React from "react";
import "../css/Gallery.css";

import galleryBanner from "../assets/Images/gallery.png";

import card1 from "../assets/Images/card1.jpeg";
import card2 from "../assets/Images/card2.jpeg";
import card3 from "../assets/Images/card3.jpeg";
import card4 from "../assets/Images/card4.jpeg";
import card5 from "../assets/Images/card1.jpeg";
import card6 from "../assets/Images/card2.jpeg";
import card7 from "../assets/Images/card3.jpeg";
import card8 from "../assets/Images/card4.jpeg";

const galleryItems = [
  { title: "Bacterial Analysis", img: card1 },
  { title: "UV Spectrophotometer", img: card2 },
  { title: "High Resolution Microscope", img: card3 },
  { title: "Production of PS", img: card4 },
  { title: "Drier", img: card5 },
  { title: "Drier", img: card6 },
  { title: "Fermenter", img: card7 },
  { title: "Blender", img: card8 }
];

const Gallery = () => {
  return (
    <>
      <section
        className="gallery-banner"
        style={{ backgroundImage: `url(${galleryBanner})` }}
      >
        <div className="gallery-overlay">
          <div className="gallery-content">
            <h1>Gallery</h1>
            <p>A glimpse into our advanced aquaculture and water testing facilities.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-card">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-label">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="back-to-top-section">
        <button
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="arrow">⌃</span> Back to Top
        </button>
      </section>

    </>
  );
};

export default Gallery;
