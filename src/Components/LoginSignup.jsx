import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import myImage from "/logo.jpg";
import "../index.css";
import "../Styles/LoginSignup.css";

const LoginSignup = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const handleLogin = () => {
    if (email.trim()) {
      alert(`Welcome to the Faculty Portal Dashboard!\nYou have successfully logged in.`);
      onLogin(); // Call the login function

      // Retrieve last visited page from sessionStorage
      const lastPage = sessionStorage.getItem("lastPage") || "/";
      navigate(lastPage); // Redirect to the last requested page
      sessionStorage.removeItem("lastPage"); // Clear after redirecting
    } else {
      alert("Please enter a valid email to continue.");
    }
  };

  return (
    <div className="right-section">
      <h2 className="login-title">Welcome Back!</h2>
      <p className="login-text">
        Don't have an account? <a href="#" className="link">Sign up</a>
      </p>

      <div className="form-container">
        <input 
          type="email" 
          placeholder="Email" 
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-btn" onClick={handleLogin}>
          <span>🔑</span> <span>Sign In</span>
        </button>
        <p className="forgot-password">
          <a href="#" className="link">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Retrieve last page from sessionStorage or default to dashboard
    const lastPage = sessionStorage.getItem("lastPage") || "/";
    navigate(lastPage); 
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="header">
          <img src={myImage} alt="Faculty Portal Logo" className="logo" />
          <h1 className="title">FACULTY PORTAL</h1>
        </div>
        <h2 className="welcome-text">Welcome to FACULTY PORTAL</h2>
        <p className="description">
          <span className="highlight">Database helps</span> developers to build
          organized and well-coded <span className="highlight">dashboards full </span>
          of beautiful and rich modules. Join us and start building your application today.
        </p>
      </div>
      <LoginSignup onLogin={handleLoginSuccess} />
    </div>
  );
};

export default Login;
