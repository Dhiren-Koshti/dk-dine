import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={toggleSidebar}>
          <i className="bi bi-x"></i>
        </button>
        <nav className="sidebar-links">
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/offer" onClick={toggleSidebar}>
            Offers
          </Link>
          <Link to="/thalis" onClick={toggleSidebar}>
            Thalis
          </Link>
          <Link to="/about" onClick={toggleSidebar}>
            About Us
          </Link>
        </nav>
      </div>

      <div className="navbar">
        <Link to="/" id="home">
          Home
        </Link>
        <Link to="/offer" id="offer">
          Offers
        </Link>
        <Link to="/thalis" id="thali">
          Thalis
        </Link>
        <Link to="/about" id="about">
          About Us
        </Link>
        <Link to="/myCart" id="cart" className="cart-link">
          <img
            src="https://cdn-icons-png.freepik.com/256/405/405996.png?semt=ais_hybrid"
            alt="Cart Icon"
            className="cart-icon"
          />
          <span className="cart-count" style={{ display: "none" }}></span>
        </Link>
      </div>

      <div className="nav-btn">
        <button
          id="menu-icon"
          className="menu-icon-link"
          onClick={toggleSidebar}
        >
          <i className="bi bi-list" id="menu-icon"></i>
        </button>
        <Link to="/myCart" id="cart" className="cart-link" >
          <img
            src="https://cdn-icons-png.freepik.com/256/405/405996.png?semt=ais_hybrid"
            alt="Cart Icon"
            className="cart-icon"
          />
          <span className="cart-count" style={{ display: "none" }}></span>
        </Link>
      </div>
    </>
  );
}
