import React, { useState } from "react";
import "./Loginfar.css"; // Import CSS file
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import {
  auth,
  provider,
  signInWithPopup,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword
} from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loginfar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [view, setView] = useState("login"); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate(); // Hook for navigation

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Login Successful!");
      navigate("/Home"); // Redirect after successful login
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Login with Email & Password
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email and Password are required!");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user.emailVerified) {
        toast.success("Login Successful!");
        navigate("/Home"); // Redirect after successful login
      } else {
        toast.warning("Please verify your email before logging in.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Password Reset Function
  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Email Registration with Verification
  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !name || !aadhar) {
      toast.error("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!/^\d{12}$/.test(aadhar)) {
      toast.error("Invalid Aadhar number! Must be 12 digits.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      toast.success("Verification email sent! Please verify before logging in.");
      setView("login"); // Switch back to login screen
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer position="top-center" autoClose={3000} />
      
      {/* Left Side - Video Background */}
      <div className="login-left">
        <video autoPlay loop muted className="login-video">
          <source src="left.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <h1>FARMER TO CONSUMER COMMUNITY</h1>
          <p>Home to Millions of people worldwide</p>
          <a href="#" className="know-more">Know more</a>
        </div>
      </div>

      {/* Right Side - Login / Signup Form */}
      <div className={`login-right ${view === "signup" ? "slide-left" : ""}`}>
        {view === "login" ? (
          <>
            <h2>Welcome Back!</h2>
            <p className="subtitle">It's nice to see you again. Ready to sell?</p>
            <Link to="/addproduct">
  <button className="register-btn">ADD PRODUCT</button>
</Link>


            <div className="login-form">
              <input
                type="email"
                placeholder="Your username or email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Your password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="login-button" onClick={handleLogin}>Log In</button>

              <div className="login-options">
                <label><input type="checkbox" /> Remember me</label>
                <a href="#" className="forgot-password" onClick={handleForgotPassword}>Forgot password?</a>
              </div>

              <div className="divider">
                <hr /> <span>or</span> <hr />
              </div>

              <button className="social-button google" onClick={handleGoogleLogin}>
                <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google" className="icon" />
                Continue with Google
              </button>

              <p className="signup-text">
                Don't have an account? <a href="#" onClick={() => setView("signup")}>Sign up</a>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2>Create an Account</h2>
            <p className="subtitle">Join our community today!</p>

            <div className="login-form">
              <input type="text" placeholder="Full Name" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
              
              <div className="password-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="input-field" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>👁</span>
              </div>

              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="input-field" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />

              <input type="text" placeholder="Aadhar Number" className="input-field" value={aadhar} onChange={(e) => setAadhar(e.target.value)} />

              <button className="register-btn" onClick={handleRegister}>Sign Up</button>
              <Link to ="/addproduct"><button classname="register-btn">ADD PRODUCT</button></Link>

              <p className="switch-text" onClick={() => setView("login")}>Already have an account? Log in</p>
            </div>
          </>
          
        )}
      </div>
    </div>
  );
};

export default Loginfar;
