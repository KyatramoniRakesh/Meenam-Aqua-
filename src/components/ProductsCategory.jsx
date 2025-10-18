import React from "react";
import "../css/ProductsCategory.css";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCategories } from "../context/CategoriesContext"; // ✅ Use shared context

const ProductsCategory = () => {
  const { categories, loading, error } = useCategories(); // ✅ Access global data

  return (
    <section className="product-categories">
      <div className="categories-header">
        <div className="icon-box">
          <FaCube />
        </div>
        <h2>Product Categories</h2>
        <p>
          Explore our premium range of aquaculture healthcare solutions designed
          for optimal results
        </p>
      </div>
      <div className="underline"></div>

      <div className="categories-container" data-aos="fade-up">
        {loading && <p>Loading categories...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && categories.length > 0 ? (
          categories.map((item) => (
            <div className="category-card" key={item._id}>
              <div className="card-icon">
                <FaCube />
              </div>
              <h3>{item.name}</h3>

              {/* ✅ Keep passing category name to /products */}
              <Link
                to="/products"
                state={{ category: item.name }}
                className="view-btn"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          !loading && !error && <p>No categories found.</p>
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
