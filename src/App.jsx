import React from "react";
import LoginSignup from "./Components/LoginSignup";
import myImage from './Images/logo.jpg';
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="header">
          <img
            src={myImage}
            alt="Faculty Portal Logo"
            className="logo"
          />
          <h1 className="title">FACULTY PORTAL</h1>
        </div>
        <h2 className="welcome-text">Welcome to FACULTY PORTAL</h2>
        <p className="description">
          <span className="highlight">Database helps</span> developers to build
          organized and well-coded <span className="highlight">dashboards full </span> 
          of beautiful and rich modules. Join us and start building your application today.
        </p>
      </div>
      <LoginSignup />
    </div>
  );
};

export default App;
