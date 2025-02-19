import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const products = [
  { id: 1, name: "Fresh Carrots", category: "Vegetables", price: "100", image: "https://extension.usu.edu/nutrition/images/carrot-head.png" },
  { id: 2, name: "Organic Tomatoes", category: "Vegetables", price: "199", image: "https://img.freepik.com/free-photo/top-view-fresh-red-tomatoes-inside-basket_140725-57742.jpg" },
  { id: 3, name: "Green Apples", category: "Fruits", price: "250", image: "https://st3.depositphotos.com/30407070/36782/i/450/depositphotos_367825706-stock-photo-green-apples-plate-brown-wooden.jpg" },
  { id: 4, name: "Bananas", category: "Fruits", price: "50", image: "https://thumbs.dreamstime.com/b/bunch-bananas-plate-great-creative-professional-projects-356584793.jpg" },
  { id: 5, name: "Almond Seeds", category: "Seeds", price: "500", image: "https://cbx-prod.b-cdn.net/COLOURBOX47480356.jpg?width=800&height=800&quality=70" },
  { id: 6, name: "Fresh Milk", category: "Dairy Products", price: "40", image: "https://img.freepik.com/free-photo/fresh-milk-bottle-glass_1150-17631.jpg" },
  { id: 7, name: "Cheese", category: "Dairy Products", price: "180", image: "https://www.allrecipes.com/thmb/PwgOsAXFGvpolr0hUiB7pVlS75k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Yellow-vs-White-Cheddar-Cheese-4x3-de76c824c4814aa8a5d52569d572713d.png" },
  { id: 8, name: "Organic Fertilizer", category: "Fertilizers", price: "1200", image: "https://rukminim2.flixcart.com/image/850/1000/kr0ynbk0/soil-manure/z/j/c/5-nutri-rich-organic-fertilizer-pack-of-1-5-kg-agriboost-original-imag4wkknzezzzcc.jpeg?q=90&crop=false" },
  { id: 9, name: "Strawberries", category: "Fruits", price: "249", image: "https://thumbs.dreamstime.com/b/strawberries-wooden-bowl-brown-table-closeup-red-ripe-berries-fresh-juicy-strawberry-background-selective-focus-209011618.jpg" },
  { id: 10, name: "Cabbage", category: "Vegetables", price: "120", image: "https://static.vecteezy.com/system/resources/previews/040/995/503/non_2x/ai-generated-cabbage-in-basket-on-wooden-table-photo.jpg" },
  { id: 11, name: "Sunflower Seeds", category: "Seeds", price: "$80", image: "https://m.media-amazon.com/images/I/71yz2Pi2SBL._AC_UF1000,1000_QL80_.jpg" },
  { id: 12, name: "Butter", category: "Dairy Products", price: "99", image: "https://5.imimg.com/data5/FN/OM/MY-23458232/fresh-butter-500x500.jpg" },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (selectedPrice === "All" ||
        (selectedPrice === "Less than ₹100" && product.price < 100) ||
        (selectedPrice === "₹101 to ₹200" && product.price >= 101 && product.price <= 200) ||
        (selectedPrice === "₹201 to ₹500" && product.price >= 201 && product.price <= 500) ||
        (selectedPrice === "More than ₹500" && product.price > 500))
    );
  });

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">Welcome to Our Store</div>
      </div>

      {/* Search & Filters */}
      <div className="filters-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="category-select" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option>All</option>
          <option>Vegetables</option>
          <option>Fruits</option>
          <option>Seeds</option>
          <option>Dairy Products</option>
        </select>
        <select className="category-select" onChange={(e) => setSelectedBrand(e.target.value)}>
          <option>All</option>
          <option>bb Combo</option>
          <option>fresho! Premium</option>
          <option>fresho!</option>
          <option>Gopalan Organic</option>
          <option>Organic</option>
          <option>Zespri</option>
        </select>
        <select className="category-select" onChange={(e) => setSelectedPrice(e.target.value)}>
          <option>All</option>
          <option>Less than ₹100</option>
          <option>₹101 to ₹200</option>
          <option>₹201 to ₹500</option>
          <option>More than ₹500</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar Filters */}
        <div className="filters">
          <h2>Filters</h2>

          <div className="filter-category">
            <h3>Refined By</h3>
            <label><input type="checkbox" /> Fruits & Vegetables</label>
            <label><input type="checkbox" /> Cuts & Sprouts</label>
            <label><input type="checkbox" /> Exotic Fruits & Veggies</label>
            <label><input type="checkbox" /> Fresh Fruits</label>
            <label><input type="checkbox" /> Herbs & Seasonings</label>
            <label><input type="checkbox" /> Organic Fruits & Vegetables</label>
          </div>

          <div className="filter-category">
            <h3>Discount</h3>
            <label><input type="checkbox" /> 15% - 25%</label>
            <label><input type="checkbox" /> More than 25%</label>
          </div>

          <div className="filter-category">
            <h3>Country of Origin</h3>
            <label><input type="checkbox" /> India</label>
            <label><input type="checkbox" /> Australia</label>
            <label><input type="checkbox" /> China</label>
            <label><input type="checkbox" /> New Zealand</label>
            <label><input type="checkbox" /> Italy</label>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div key={product.id} whileHover={{ scale: 1.05 }}>
                <div className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price">₹{product.price}</p>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Our Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
