import React from "react";
import "./Logincon.css"; // Import the CSS file

const Logincon = () => {
  return (
    <div className="login-container">
      {/* Left Side - Video Background */}
      <div className="login-left">
        <video autoPlay loop muted className="login-video">
          <source src="right.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <h1>FARMER TO CONSUMER COMMUNITY</h1>
          <p>Home to Millions of peoples worldwide</p>
          <a href="#" className="know-more">Know more</a>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <h2>Welcome Back!</h2>
        <p className="subtitle">It's nice to see you again. Ready to shop?</p>

        <div className="login-form">
          <input type="text" placeholder="Your username or email" className="input-field" />
          <input type="password" placeholder="Your password" className="input-field" />

          <button className="login-button">Log In</button>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <div className="divider">
            <hr /> <span>or</span> <hr />
          </div>

          <button className="social-button google">
            <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google" className="icon" />
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logincon;
