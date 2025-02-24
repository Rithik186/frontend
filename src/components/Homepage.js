import React, { useState } from "react";
import "@google/model-viewer";
import "./Homepage.css";

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">WLT</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolios</a>
          <a href="#">Contact</a>
        </nav>
        <div
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <span>MENU</span>
        </div>
      </header>

      <div className="hero-section">
        <div className="text-content">
          <h2></h2>
          <h1></h1>
          <p>.</p>
        </div>

        <model-viewer
          className="hero-model"
          src="/models/farmhouse.glb"
          alt="3D Model"
          auto-rotate
          camera-controls
          exposure="1.2"
          disable-zoom
        ></model-viewer>
      </div>
    </div>
  );
};

export default Homepage;
