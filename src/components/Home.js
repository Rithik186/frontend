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
    { id: 13, name: "Black Grapes", category: "Fruits", price: "220", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXqZQuBk0ljkT6dYMb5SzPVVihG0zlx7h1A&s" },
    { id: 14, name: "Walnut Seeds", category: "Seeds", price: "600", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1uFxggfeCevz0KDDxI0yRFtimetZlW8gBg&s" },
    { id: 15, name: "Whole Wheat Bread", category: "Bakery", price: "80", image: "https://www.theredheadbaker.com/wp-content/uploads/2020/10/white-whole-wheat-bread-featured.jpg" },
    { id: 16, name: "Broccoli", category: "Vegetables", price: "150", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEtPkkoSROnlZhTWPkKfoiWjz438Ymptu4A&s" },
    { id: 17, name: "Cashew Nuts", category: "Seeds", price: "750", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSFJxH-ALmXYpmgoNJQxMKiprNNiqkdpcrA&s" },
    { id: 18, name: "Soy Milk", category: "Dairy Products", price: "120", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WhsVF0dPYb_uCLSQBM9h5YV28R6rx1BUgQ&s" },
    { id: 19, name: "Paneer", category: "Dairy Products", price: "180", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0FvAhZ2WHLHm2ct5sSG4qWz3zDnFZb68Dg&s" },
    { id: 20, name: "Oranges", category: "Fruits", price: "200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_H77qrveJBGq8lTx2HGqe_CLmL9mnml_Uw&s" },
    { id: 21, name: "Peanut Butter", category: "Bakery", price: "350", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzcqsa9CEKuTEKeQACf23-NFIsd5LCWg9zA&s" },
    { id: 23, name: "Chia Seeds", category: "Seeds", price: "300", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZjGXEwMOZGqAA8Hci-B0z7bAoUyH-DiABg&s" },
    { id: 24, name: "Pistachios", category: "Seeds", price: "900", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllzjvljJNOZtXHWCf4e0Pcc9Lgh0vEq30cA&s" },
    { id: 25, name: "Pumpkin Seeds", category: "Seeds", price: "450", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2eV4W2kvtv0U0eKWRUak0R35oTbMrsI0OQ&s" },
    { id: 26, name: "Brown Rice", category: "Grains", price: "110", image: "https://images.onlymyhealth.com/imported/images/2024/June/26_Jun_2024/mn-brown-rice.jpg" },
    { id: 27, name: "Quinoa", category: "Grains", price: "500", image: "https://imgs.littleextralove.com/wp-content/uploads/2022/11/quinoa-for-hair-feat.jpg" },
    { id: 28, name: "Avocado", category: "Fruits", price: "400", image: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/avocadosea5afd66b7296e538033ff0000e6f23e.jpg?sfvrsn=a273930b_0" },
    { id: 29, name: "Mushrooms", category: "Vegetables", price: "220", image: "https://www.jiomart.com/images/product/original/590000245/button-mushroom-200-g-product-images-o590000245-p590000245-0-202408070949.jpg?im=Resize=(1000,1000)" },
    { id: 30, name: "Spinach", category: "Vegetables", price: "80", image: "https://www.trustbasket.com/cdn/shop/articles/Spinach.webp?v=1686909241" },
    { id: 32, name: "Blueberries", category: "Fruits", price: "280", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkaRYA3YtnHmmmLs_RfYtReyNjpHdfPZ29Hw&s" },
    { id: 33, name: "Raspberries", category: "Fruits", price: "320", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWPuQA-aaHdlRrC6z6wGMKXJvKGxoGTH8Yw&s" },
    { id: 34, name: "Coconut Oil", category: "Oils", price: "350", image: "https://kumarmetal.com/wp-content/uploads/2021/08/setting-up-virgin-coconut-oil-plant.jpg" },
    { id: 35, name: "Olive Oil", category: "Oils", price: "500", image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC09606_2048x2048.jpg?v=1734608321" },
    { id: 36, name: "Flaxseeds", category: "Seeds", price: "180", image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/5961/cba8bd1b-be70-4f55-8818-9caf1b3df3de.jpg" },
    { id: 37, name: "Honey", category: "Sweeteners", price: "300", image: "https://5.imimg.com/data5/UD/MB/MY-42635865/natural-honey-500x500.jpg" },
    { id: 38, name: "Almond Butter", category: "Bakery", price: "450", image: "https://www.inspiredtaste.net/wp-content/uploads/2020/06/Homemade-Almond-Butter-Recipe-1200.jpg" },
    { id: 40, name: "Zucchini", category: "Vegetables", price: "140", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZ2hJYtaYVZYq1AdkzdUAK3kPZ8hUjFkz7A&s" },
    { id: 41, name: "Mangoes", category: "Fruits", price: "250", image: "https://deyga.in/cdn/shop/articles/mangoes-cover-1.jpg?v=1617118328" },
    { id: 42, name: "Lettuce", category: "Vegetables", price: "90", image: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg" },
    { id: 43, name: "Eggs", category: "Dairy Products", price: "160", image: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" },
    { id: 44, name: "Cinnamon", category: "Spices", price: "200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqlvKSkdy63JB_1zan4kFnkQkTYU0zQed2w&s" },
    { id: 45, name: "Black Pepper", category: "Spices", price: "220", image: "https://ashokchakranursery.com/wp-content/uploads/2024/12/blackky.webp" },
    { id: 46, name: "Turmeric", category: "Spices", price: "150", image: "https://m.media-amazon.com/images/I/6143Jp46RpL.jpg" },
    { id: 47, name: "Cloves", category: "Spices", price: "180", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/q/o/1/50-rxi-16-cloves-lavanga-seeds-50-seeds-vibex-original-imaggnksk72yapmb.jpeg?q=20&crop=false" },
    { id: 48, name: "Cardamom", category: "Spices", price: "450", image: "https://mangalorespice.com/cdn/shop/products/SP_08-02.jpg?v=1734783515&width=1445" },
    { id: 49, name: "Bay Leaves", category: "Spices", price: "100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgEThIf3xCwbmi9Zp-8TShveI4Tu4yUwtLw&s" },
    { id: 50, name: "Coriander Powder", category: "Spices", price: "120", image: "https://c.ndtvimg.com/2023-03/p4igk5po_dry-coriander-leaves_625x300_10_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675" },
    { id: 51, name: "Fenugreek Seeds", category: "Seeds", price: "130", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxYjphT6AhMLmiUV85nNx_0urQI4VvNO9iw&s" },
    { id: 52, name: "Basil", category: "Herbs", price: "160", image: "https://aanmc.org/wp-content/uploads/2021/08/987-1024x681.jpg" },
    { id: 53, name: "Rosemary", category: "Herbs", price: "180", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Rosemary-sprig-7d96e10.jpg" },
    { id: 54, name: "Thyme", category: "Herbs", price: "200", image: "https://www.greendna.in/cdn/shop/products/ThymeLeaves1_1076x.jpg?v=1586944767" },
    { id: 55, name: "Parsley", category: "Herbs", price: "140", image: "https://www.greendna.in/cdn/shop/products/parsley_600x.jpg?v=1582188747" },
    { id: 56, name: "Papaya", category: "Fruits", price: "180", image: "https://www.dreamfoodscaribe.com/wp-content/uploads/2024/07/papaya-fruit.webp" },
    { id: 57, name: "Cucumber", category: "Vegetables", price: "90", image: "https://lh3.googleusercontent.com/proxy/uAP0COl6pYdMYCK7qQ8ByEIj5vJxItD15VJPNG2e-h9sN31B3oHsfGDMCMXEKMgJqD4PWXmRIE5fbKOCQL_iVyFAEFWARtIlh5Tm3yzZSmjyplOJYj_4wYSQuZIABHcKdQu1NsZrCmjoZJfwxL4S" },
    { id: 58, name: "Watermelon", category: "Fruits", price: "300", image: "https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1723738944.jpg" },
    { id: 59, name: "Dragon Fruit", category: "Fruits", price: "450", image: "https://media.post.rvohealth.io/wp-content/uploads/2024/01/A-pink-pitahaya-cut-it-in-half-Dragon-Fruit-header.jpg" },
    { id: 60, name: "Pineapple", category: "Fruits", price: "230", image: "https://organicmandya.com/cdn/shop/files/Pineapple.jpg?v=1721375225&width=1500" },
    { id: 61, name: "Ginger", category: "Spices", price: "130", image: "https://www.garnierusa.com/-/media/project/loreal/brand-sites/garnier/usa/us/articles_new/strengthen-fragile-hair-with-ginger/garnier_article-header_ginger.jpg?rev=07e043606da3401aa15837849d8fef41&h=496&w=890&la=en&hash=C756272A42D8E095BF63E44BA3DE2897" },
    { id: 62, name: "Garlic", category: "Spices", price: "120", image: "https://www.jiomart.com/images/product/original/590003532/indian-garlic-200-g-product-images-o590003532-p590003532-0-202408070949.jpg?im=Resize=(1000,1000)" },
    { id: 63, name: "Beetroot", category: "Vegetables", price: "140", image: "https://www.fitterfly.com/blog/wp-content/uploads/2022/09/Is-Beetroot-Good-for-Diabetes-2.webp" },
    { id: 64, name: "Celery", category: "Vegetables", price: "160", image: "https://cdn.britannica.com/68/143768-050-108B71EC/Celery.jpg" },
    { id: 65, name: "Brussels Sprouts", category: "Vegetables", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RPU-SU7J8vgl7dSEkLGCRCjMXTH0312AjQ&s" }
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
