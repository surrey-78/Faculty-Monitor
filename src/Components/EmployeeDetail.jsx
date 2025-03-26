import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBell, FaCog } from "react-icons/fa";
import employees from "../Data/Employees"; 
import "../Styles/DashBoard.css";

const EmployeeDetail = () => {
  const { employeeName } = useParams();
  const navigate = useNavigate();

  // Find the employee based on the name from URL params
  const employee = employees.find(emp => emp.name === employeeName);

  if (!employee) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Employee not found</h2>;
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Employee Management</h2>
        <ul className="menu">
          <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Dashboard
          </li>
          <li onClick={() => navigate("/employee")} style={{ cursor: "pointer" }} className="active">
            Employee
          </li>
          <li>Recruitment</li>
          <li>Attendance</li>
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

        {/* Employee Details Section */}
        <section className="employee-details">
          <h3>Name: {employee.name}</h3>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Work Schedule:</strong> {employee.workSchedule}</p>
          <p><strong>Clock Location:</strong> {employee.clockLocation}</p>
          <p><strong>Paid Time:</strong> {employee.paidTime}</p>
          <p><strong>Overtime:</strong> {employee.overtime}</p>
          <button onClick={() => navigate(-1)} className="btn">Back</button>
        </section>
      </main>
    </div>
  );
};

export default EmployeeDetail;
