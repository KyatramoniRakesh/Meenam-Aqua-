import React, { useEffect, useState } from 'react';
import "../css/ProductsCategory.css";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://api.meenamaquaneeds.com/getallcategories");
        const data = await response.json();
        console.log("Fetched categories:", data);

        // ✅ Access the nested array
        setCategories(data.data);
      } catch (error) {
        console.error("Error in Fetching Categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className='product-categories'>
      <div className="categories-header">
        <div className="icon-box">
          <FaCube />
        </div>
        <h2>Product Categories</h2>
        <p>Explore our premium range of aquaculture healthcare solutions designed for optimal results</p>
      </div>
      <div className="underline"></div>

      <div className="categories-container" data-aos="fade-up">
        {categories && categories.length > 0 ? (
          categories.map((item) => (
            <div className="category-card" key={item._id}>
              <div className="card-icon">
                <FaCube />
              </div>
              <h3>{item.name}</h3>
              <Link to="/products" className="view-btn">View Details</Link>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>

      <div className="view-all-btn-container" data-aos="fade-up">
        <Link to="/categories" className="view-all-btn">
          View All Categories <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default ProductsCategory;
