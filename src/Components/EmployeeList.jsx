import React from "react";
import { useNavigate } from "react-router-dom";
import employees from "../Data/Employees";
import "../Styles/EmployeeList.css";

const EmployeeList = () => {
  const navigate = useNavigate();

  return (
    <div className="employee-list-container">
      <h2 className="title">Employees</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <div
            key={employee.name}
            className="employee-card"
            onClick={() => navigate(`/employee/${employee.name}`)}
          >
            <img src={employee.profilePic} alt={employee.name} className="profile-pic" />
            <h3>{employee.name}</h3>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Position:</strong> {employee.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
