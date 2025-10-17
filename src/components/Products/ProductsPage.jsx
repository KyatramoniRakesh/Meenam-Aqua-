import React, { useState, useEffect } from "react";
import "../../css/Products/ProductsPage.css";
import { FaSearch } from "react-icons/fa";

const ProductsPage = () => {
    // ---------- STATE VARIABLES ----------
    const [categories, setCategories] = useState(["All Products"]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All Products");
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

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                // console.log("🔍 Sample product data:", data?.data?.categories[0]?.products[0]);

                // ✅ API structure: data.data.categories → each category has products
                const apiCategories = data?.data?.categories || [];

                // extract category names
                const catNames = apiCategories.map((cat) => cat.name);

                // flatten all products from all categories
                const allProducts = apiCategories.flatMap((cat) =>
                    cat.products.map((p) => ({
                        ...p,
                        category: cat.name, // add category name to each product
                    }))
                );

                // add "All Products" to the start of unique category list
                setCategories(["All Products", ...new Set(catNames)]);
                setProducts(allProducts);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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

            {/* PRODUCT LIST */}
            {/* PRODUCT LIST */}
            {filteredProducts.map((product) => (
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
                            {/* <p>{product.Storage || product.storage || "Not specified"}</p> */}
                            <p>Store in cool and dark place, avoiding the sun light, keep the container tightly closed after every use to achieve maximum shelf life.</p>
                        </div>
                    </div>
                </section>
            ))}

        </section>
    );
};

export default ProductsPage;
