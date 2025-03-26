import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import { FaSearch, FaBell, FaCog, FaUserCircle } from "react-icons/fa";
import "../Styles/Dashboard.css";

const Attendance = () => {
  const location = useLocation(); // Get current route

  return (
    <div className="attendance-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Neo</h2>
        <ul className="menu">
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={location.pathname === "/employee" ? "active" : ""}>
            <Link to="/employee">Employee</Link>
          </li>
          <li className={location.pathname === "/recruitment" ? "active" : ""}>
            <Link to="/recruitment">Recruitment</Link>
          </li>
          <li className={location.pathname === "/attendance" ? "active" : ""}>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li className={location.pathname === "/payroll" ? "active" : ""}>
            <Link to="/payroll">Payroll</Link>
          </li>
          <li className={location.pathname === "/performance" ? "active" : ""}>
            <Link to="/performance">Performance</Link>
          </li>
          <li className={location.pathname === "/communication" ? "active" : ""}>
            <Link to="/communication">Communication</Link>
          </li>
          <li className={location.pathname === "/announcement" ? "active" : ""}>
            <Link to="/announcement">Announcement</Link>
          </li>
          <li className={location.pathname === "/documents" ? "active" : ""}>
            <Link to="/documents">Documents & Files</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <div className="search-bar">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search here..." />
          </div>
          <div className="user-profile">
            <FaBell className="icon" />
            <FaCog className="icon" />
            <FaUserCircle className="icon profile-pic" />
          </div>
        </header>

        <h2 className="page-title">Attendance</h2>

        {/* Timesheet */}
        <section className="timesheet">
          <h3>Timesheet - 11 Mar 2019</h3>
          <p>Punch In at: Wed, 11th Mar 10:00 AM</p>
          <div className="circular-progress">
            <h2>3.45 hrs</h2>
            <button className="btn-punch">Punch Out</button>
          </div>
          <p>BREAK: <strong>1.21 hrs</strong></p>
          <p>Overtime: <strong>3 hrs</strong></p>
        </section>

        {/* Statistics */}
        <section className="statistics">
          <h3>Statistics</h3>
          <div className="stat-bar">
            <p>Today: <strong>3.45 / 8 hrs</strong></p>
            <div className="progress today"></div>
          </div>
          <div className="stat-bar">
            <p>This Week: <strong>28 / 40 hrs</strong></p>
            <div className="progress week"></div>
          </div>
          <div className="stat-bar">
            <p>This Month: <strong>90 / 160 hrs</strong></p>
            <div className="progress month"></div>
          </div>
          <div className="stat-bar">
            <p>Remaining: <strong>90 / 160 hrs</strong></p>
            <div className="progress remaining"></div>
          </div>
          <div className="stat-bar">
            <p>Overtime: <strong>5 hrs</strong></p>
            <div className="progress overtime"></div>
          </div>
        </section>

        {/* Today Activity */}
        <section className="today-activity">
          <h3>Today's Activity</h3>
          <ul>
            <li>✅ Punch In at 10:00 AM</li>
            <li>🚀 Punch Out at 11:00 AM</li>
            <li>✅ Punch In at 11:30 AM</li>
            <li>🔄 Punch Out at 01:30 AM</li>
          </ul>
        </section>

        {/* Attendance List */}
        <section className="attendance-list">
          <h3>Attendance List</h3>
          <table>
            <thead>
              <tr>
                <th>S. No</th>
                <th>Date</th>
                <th>Punch In</th>
                <th>Punch Out</th>
                <th>Production</th>
                <th>Break</th>
                <th>Overtime</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>19 Feb 2019</td>
                <td>10 AM</td>
                <td>7 PM</td>
                <td>9 hrs</td>
                <td>1 hr</td>
                <td>2 hrs</td>
              </tr>
              <tr>
                <td>2</td>
                <td>20 Feb 2019</td>
                <td>10 AM</td>
                <td>7 PM</td>
                <td>9 hrs</td>
                <td>1 hr</td>
                <td>0 hrs</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Daily Records Chart */}
        <section className="daily-records">
          <h3>Daily Records</h3>
          <div className="chart-placeholder">Chart Goes Here</div>
        </section>
      </main>
    </div>
  );
};

export default Attendance;
