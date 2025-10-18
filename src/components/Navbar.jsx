import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/Navbar.css";
import logo from "../assets/Images/MainLogo.png";
import { useCategories } from "../context/CategoriesContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { categories, loading, error } = useCategories();

  // ---------- TOGGLE FUNCTIONS ----------
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeMenu = () => setMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  // ✅ Handle category click — store in sessionStorage and navigate
  const handleCategoryClick = (catName) => {
    sessionStorage.setItem("selectedCategory", catName);
    navigate("/products", { state: { category: catName } });
    setDropdownOpen(false);
    closeMenu();
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={closeMenu}
          >
            About Us
          </Link>

          {/* ✅ Dynamic Product Dropdown */}
          <div className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
            <button onClick={toggleDropdown}>
              Products
              <RiArrowDropDownLine
                className={`dropdown-icon ${dropdownOpen ? "rotate" : ""}`}
              />
            </button>

            <div
              className={`dropdown-menu-wrapper ${dropdownOpen ? "show" : ""}`}
            >
              <div className="dropdown-menu">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {!loading &&
                  !error &&
                  categories.length > 0 &&
                  categories.map((cat) => (
                    <button
                      key={cat._id}
                      className="dropdown-item"
                      onClick={() => handleCategoryClick(cat.name)} // ✅ functional link
                    >
                      {cat.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            className={isActive("/gallery") ? "active" : ""}
            onClick={closeMenu}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="nav-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
