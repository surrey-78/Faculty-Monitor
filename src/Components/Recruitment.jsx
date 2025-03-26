import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBell, FaCog } from "react-icons/fa";
import recruitmentData from "../Data/RecruitmentData"; 
import "../Styles/DashBoard.css";

const Recruitment = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Employee Management</h2>
        <ul className="menu">
          <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Dashboard
          </li>
          <li onClick={() => navigate("/employee")} style={{ cursor: "pointer" }}>
            Employee
          </li>
          <li className="active" onClick={() => navigate("/recruitment")}>
            Recruitment
          </li>
          <li onClick={() => navigate("/attendance")} style={{ cursor: "pointer" }}>
            Attendance
          </li>
          <li onClick={() => navigate("/payroll")} style={{ cursor: "pointer" }}>
            Payroll
          </li>
          <li onClick={() => navigate("/performance")} style={{ cursor: "pointer" }}>
            Performance
          </li>
          <li onClick={() => navigate("/communication")} style={{ cursor: "pointer" }}>
            Communication <span className="notification">2</span>
          </li>
          <li onClick={() => navigate("/announcement")} style={{ cursor: "pointer" }}>
            Announcement <span className="notification">1</span>
          </li>
          <li onClick={() => navigate("/documents")} style={{ cursor: "pointer" }}>
            Documents & Files
          </li>
        </ul>
        <div className="sidebar-footer">
          <p onClick={() => navigate("/help")} style={{ cursor: "pointer" }}>Help Center</p>
          <p onClick={() => navigate("/settings")} style={{ cursor: "pointer" }}>Settings</p>
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
