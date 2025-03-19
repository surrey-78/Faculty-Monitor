import React from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="right-section">
      <h2 className="login-title">Welcome Back!</h2>
      <p className="login-text">
        Don't have an account? <a href="#" className="link">Sign up</a>
      </p>

      <div className="form-container">
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-btn">
          <span>🔑</span> <span>Sign In</span>
        </button>
        <p className="forgot-password">
          <a href="#" className="link">Forgot Password?</a>
        </p>
      </div>

      <div className="sample-credentials">
        <h3 className="credentials-title">Login Credentials</h3>
        <div className="button-group">
          <button className="sample-btn">Login as Instructor</button>
          <button className="sample-btn">Login as Administrator</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>
          By using this site, you indicate your acceptance of our 
          <a href="#" className="link"> Privacy Policy</a> and 
          <a href="#" className="link"> Terms & Conditions</a>.
        </p>
        <p className="help-text">
          Need Help? <a href="#" className="link">Contact Our Support Team</a>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
