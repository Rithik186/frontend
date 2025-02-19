import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      {/* Top Bar */}
      <div className="top-bar">
        <h3>
          Our solution is an interactive blockchain network that links farmers and consumers directly, ensuring fair prices, safe transactions, and real-time agricultural product traceability
          <span> Read now</span>
        </h3>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Farmer To Consumer</div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/resource">Resources</Link></li>
          <li><Link to="/consumer">For Consumers</Link></li>
          <li><Link to="/farmers">For Farmers</Link></li>
        </ul>
      </nav>

      {/* Content Section */}
      <div className="content">
        {/* Left - Farmers */}
        <div className="left">
          <span className="business-tag">Sales</span>
          <h2>For <span className="highlight">Farmers</span></h2>
          <p>Cutting out middlemen boosts earnings, supporting sustainable farming and increased food production.</p>
          <Link to="/loginfar"><button className="login-btn">Login</button></Link>
          <p className="account-text">
            Don't have an account? <Link to="/signupfar"><span className="bold">Sign up</span></Link>
          </p>
          <div className="logos">
            <img src="https://cdn-icons-png.flaticon.com/128/1150/1150302.png" alt="Peloton" />
            <img src="https://cdn-icons-png.flaticon.com/128/7417/7417717.png" alt="Atlassian" />
            <img src="https://cdn-icons-png.flaticon.com/128/4062/4062297.png" alt="Bloomberg" />
            <img src="https://cdn-icons-png.flaticon.com/128/11998/11998153.png" alt="VMware" />
          </div>
        </div>

        {/* Right - Consumers */}
        <div className="right">
          <h2 id='ma'>For <span className="highlight">Consumers</span></h2>
          <p>For the people who can buy fresh veggies, fruits directly from farmers</p>
          <Link to="/logincon"><button className="login-outline-btn">Login</button></Link>
          <p className="account-text">
            Don't have an account? <Link to="/signupcon"><span className="bold">Sign up.</span></Link>
          </p>
          <div className="logos">
            <img src="https://cdn-icons-png.flaticon.com/128/2761/2761014.png" alt="Stripe" />
            <img src="https://cdn-icons-png.flaticon.com/128/9587/9587475.png" alt="Goldman Sachs" />
            <img src="https://cdn-icons-png.flaticon.com/128/11100/11100051.png" alt="Adobe" />
            <img src="https://cdn-icons-png.flaticon.com/128/6012/6012987.png" alt="LinkedIn" />
          </div>
        </div>
      </div>

      {/* App Store & Play Store Badges */}
      <div className="store-badges">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
          alt="Google Play Store" 
          className="store-badge left-badge"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
          alt="App Store" 
          className="store-badge right-badge"
        />
      </div>
    </div>
  );
};

export default Login;
