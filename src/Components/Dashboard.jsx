import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBell, FaCog } from "react-icons/fa";
import "../Styles/DashBoard.css";

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleEmployeeClick = (employeeName) => {
    navigate(`/employee/${employeeName}`);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Employee Management</h2>
        <ul className="menu">
          <li onClick={() => navigate("/")} className="nav-item active">Dashboard</li>
          <li onClick={() => navigate("/employee")} className="nav-item">Employee</li>
          <li onClick={() => navigate("/recruitment")} className="nav-item">Recruitment</li>
          <li onClick={() => navigate("/attendance")} className="nav-item">Attendance</li>
          <li onClick={() => navigate("/payroll")} className="nav-item">Payroll</li>
          <li onClick={() => navigate("/performance")} className="nav-item">Performance</li>
          <li onClick={() => navigate("/communication")} className="nav-item">
            Communication <span className="notification">2</span>
          </li>
          <li onClick={() => navigate("/announcement")} className="nav-item">
            Announcement <span className="notification">1</span>
          </li>
          <li onClick={() => navigate("/documents")} className="nav-item">Documents & Files</li>
        </ul>
        <div className="sidebar-footer">
          <p onClick={() => navigate("/help-center")} className="nav-item">Help Center</p>
          <p onClick={() => navigate("/settings")} className="nav-item">Settings</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <div className="search-bar">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search or type a command" />
          </div>
          <div className="user-profile">
            <FaBell className="icon" />
            <FaCog className="icon" />
            <FaUserCircle className="icon profile-pic" />
          </div>
        </header>

        {/* Attendance Summary */}
        <section className="attendance-summary">
          <div className="summary-card">
            <h3>Present Summary</h3>
            <p>On Time: <strong>120</strong></p>
            <p>Late Clock-in: <strong>40</strong></p>
            <p>Early Clock-in: <strong>80</strong></p>
          </div>
          <div className="summary-card">
            <h3>Absent Summary</h3>
            <p>Absent: <strong>30</strong></p>
            <p>No Clock-in: <strong>24</strong></p>
          </div>
          <div className="summary-card">
            <h3>Away Summary</h3>
            <p>Day Off: <strong>120</strong></p>
            <p>Time Off: <strong>40</strong></p>
          </div>
        </section>

        {/* Attendance Table */}
        <section className="attendance-table">
          <div className="table-header">
            <h3>Attendance</h3>
            <div className="table-actions">
              <button className="btn">Attendance Report</button>
              <button className="btn primary">+ Add Attendance</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Clock - In & Out</th>
                <th>Work Schedule</th>
                <th>Clock Location</th>
                <th>Paid Time</th>
                <th>Overtime</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => handleEmployeeClick("Pristia Candra")} className="clickable-row">
                <td>Pristia Candra</td>
                <td>9.00 am to 5 pm</td>
                <td>8hr</td>
                <td>Mirpur, Dhaka</td>
                <td>8hr</td>
                <td>30 min</td>
              </tr>
              <tr onClick={() => handleEmployeeClick("Rahim Earteza")} className="clickable-row">
                <td>Rahim Earteza</td>
                <td>9.00 am to 5 pm</td>
                <td>8hr</td>
                <td>Mirpur, Dhaka</td>
                <td>8hr</td>
                <td>2hr</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;