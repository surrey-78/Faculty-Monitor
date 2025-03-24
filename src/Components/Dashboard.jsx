import React from "react";
import { FaUserCircle, FaSearch, FaBell, FaCog } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ADVANCE Employee Management</h2>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Employee</li>
          <li>Recruitment</li>
          <li className="active">Attendance</li>
          <li>Payroll</li>
          <li>Performance</li>
          <li>Communication <span className="notification">2</span></li>
          <li>Announcement <span className="notification">1</span></li>
          <li>Documents & Files</li>
        </ul>
        <div className="sidebar-footer">
          <p>Help Center</p>
          <p>Settings</p>
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
              <tr>
                <td>Pristia Candra</td>
                <td>9.00 am to 5 pm</td>
                <td>8hr</td>
                <td>Mirpur, Dhaka</td>
                <td>8hr</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td>Rahim Earteza</td>
                <td>9.00 am to 5 pm</td>
                <td>8hr</td>
                <td>Mirpur, Dhaka</td>
                <td>8hr</td>
                <td>2hr</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
