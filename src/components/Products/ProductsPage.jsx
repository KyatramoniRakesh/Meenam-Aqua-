import React, { useState, useEffect } from "react";
import "../../css/Products/ProductsPage.css";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const location = useLocation();

  const initialCategory =
    location.state?.category || sessionStorage.getItem("selectedCategory") || "All Products";

  // ---------- STATE VARIABLES ----------
  const [categories, setCategories] = useState(["All Products"]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState("list");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---------- FETCH API DATA ----------
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://api.meenamaquaneeds.com/getall");

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        const apiCategories = data?.data?.categories || [];

        const catNames = apiCategories.map((cat) => cat.name);

        // Flatten products from all categories
        const allProducts = apiCategories.flatMap((cat) =>
          cat.products.map((p) => ({
            ...p,
            category: cat.name,
          }))
        );

        setCategories(["All Products", ...new Set(catNames)]);
        setProducts(allProducts);

        if (initialCategory && catNames.includes(initialCategory)) {
          setActiveCategory(initialCategory);
        } else {
          setActiveCategory("All Products");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
      sessionStorage.setItem("selectedCategory", location.state.category);
    }
  }, [location.state]);

  // ---------- FILTER LOGIC ----------
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Products" || product.category === activeCategory;
    const matchesSearch = product.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ---------- LOADING & ERROR STATES ----------
  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  // ---------- RENDER ----------
  return (
    <section className="products-section">
      <div className="products-header">
        <h1 className="page-title">Meenam Aqua Needs</h1>
        <p className="page-subtitle">
          Advanced Nutrition for Aquaculture Excellence
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active-tab" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH + VIEW TOGGLE */}
      <div className="search-bar-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="view-toggle">
          <button
            className={`view-btn ${viewType === "list" ? "active-view" : ""}`}
            onClick={() => setViewType("list")}
          >
            List
          </button>
          <button
            className={`view-btn ${viewType === "table" ? "active-view" : ""}`}
            onClick={() => setViewType("table")}
          >
            Table
          </button>
        </div>
      </div>

      {/* PRODUCT COUNT */}
      <div className="product-count">
        <span>{filteredProducts.length}</span> products found
      </div>

      {/* PRODUCT LIST / TABLE VIEW */}
      {viewType === "list" ? (
        filteredProducts.map((product) => (
          <section className="product-layout" key={product._id}>
            <div className="product-image-box">
              <img
                src={product.image}
                alt={product.name}
                className="product-main-img"
              />
            </div>

            <div className="product-middle">
              <h3 className="product-title">{product.name}</h3>
              <span className="category-tag">{product.category}</span>

              <div className="info-box">
                <h4>Composition</h4>
                <p>{product.Composition || product.composition || "Not specified"}</p>
              </div>

              <div className="info-box">
                <h4>Dosage</h4>
                <p>{product.Dosage || product.dosage || "Not specified"}</p>
              </div>
            </div>

            <div className="product-right">
              <div className="info-box">
                <h4>Benefits</h4>
                <ul>
                  {(product.benifits || "")
                    .split(/\r?\n+/)
                    .filter(Boolean)
                    .map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                </ul>
              </div>

              <div className="info-box">
                <h4>Packing</h4>
                <p>{product.Packing || product.packing || "Not specified"}</p>
              </div>

              <div className="info-box">
                <h4>Storage</h4>
                <p>
                  Store in cool and dark place, avoiding sunlight. Keep container tightly closed after every use.
                </p>
              </div>
            </div>
          </section>
        ))
      ) : (
        <div className="products-table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Composition</th>
                <th>Benefits</th>
                <th>Dosage</th>
                <th>Packing</th>
                <th>Storage</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="table-img"
                    />
                  </td>
                  <td className="table-name">{product.name}</td>
                  <td className="table-category">{product.category}</td>
                  <td className="table-composition">
                    {product.Composition || product.composition || "Not specified"}
                  </td>
                  <td className="table-benefits">
                    <ul>
                      {(product.benifits || "")
                        .split(/\r?\n+/)
                        .filter(Boolean)
                        .map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                    </ul>
                  </td>
                  <td className="table-dosage">
                    {product.Dosage || product.dosage || "Not specified"}
                  </td>
                  <td className="table-packing">
                    {product.Packing || product.packing || "Not specified"}
                  </td>
                  <td className="table-storage">
                    Store in cool and dark place, avoiding sunlight. Keep container tightly closed after every use.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
