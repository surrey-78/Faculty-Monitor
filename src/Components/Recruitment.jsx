import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBell, FaCog } from "react-icons/fa";
import recruitmentData from "../Data/RecruitmentData"; 
import "../Styles/DashBoard.css";

const Recruitment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Employee Management</h2>
        <ul className="menu">
          <li 
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => navigate("/")} 
            style={{ cursor: "pointer" }}
          >
            Dashboard
          </li>
          <li 
            className={location.pathname === "/employee" ? "active" : ""}
            onClick={() => navigate("/employee")} 
            style={{ cursor: "pointer" }}
          >
            Employee
          </li>
          <li 
            className={location.pathname === "/recruitment" ? "active" : ""}
            onClick={() => navigate("/recruitment")} 
            style={{ cursor: "pointer" }}
          >
            Recruitment
          </li>
          <li 
            className={location.pathname === "/attendance" ? "active" : ""}
            onClick={() => navigate("/attendance")} 
            style={{ cursor: "pointer" }}
          >
            Attendance
          </li>
          <li 
            className={location.pathname === "/payroll" ? "active" : ""}
            onClick={() => navigate("/payroll")} 
            style={{ cursor: "pointer" }}
          >
            Payroll
          </li>
          <li 
            className={location.pathname === "/performance" ? "active" : ""}
            onClick={() => navigate("/performance")} 
            style={{ cursor: "pointer" }}
          >
            Performance
          </li>
          <li 
            className={location.pathname === "/communication" ? "active" : ""}
            onClick={() => navigate("/communication")} 
            style={{ cursor: "pointer" }}
          >
            Communication <span className="notification">2</span>
          </li>
          <li 
            className={location.pathname === "/announcement" ? "active" : ""}
            onClick={() => navigate("/announcement")} 
            style={{ cursor: "pointer" }}
          >
            Announcement <span className="notification">1</span>
          </li>
          <li 
            className={location.pathname === "/documents" ? "active" : ""}
            onClick={() => navigate("/documents")} 
            style={{ cursor: "pointer" }}
          >
            Documents & Files
          </li>
        </ul>
        <div className="sidebar-footer">
          <p 
            className={location.pathname === "/help" ? "active" : ""}
            onClick={() => navigate("/help")} 
            style={{ cursor: "pointer" }}
          >
            Help Center
          </p>
          <p 
            className={location.pathname === "/settings" ? "active" : ""}
            onClick={() => navigate("/settings")} 
            style={{ cursor: "pointer" }}
          >
            Settings
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <div className="search-bar">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search job positions..." />
          </div>
          <div className="user-profile">
            <FaBell className="icon" />
            <FaCog className="icon" />
            <FaUserCircle className="icon profile-pic" />
          </div>
        </header>

        {/* Recruitment Section */}
        <section className="recruitment-section">
          <h2>Job Openings</h2>
          <div className="job-listings">
            {recruitmentData.map((job, index) => (
              <div key={index} className="job-card">
                <h3>{job.title}</h3>
                <p><strong>Department:</strong> {job.department}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p>{job.description}</p>
                <button className="btn apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Recruitment;
