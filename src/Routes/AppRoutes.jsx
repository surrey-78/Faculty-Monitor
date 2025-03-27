import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../Components/DashBoard";
import Login from "../Components/LoginSignup";
import EmployeeDetail from "../Components/EmployeeDetail";
import Recruitment from "../Components/Recruitment";
import EmployeeList from "../Components/EmployeeList";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />  
      <Route path="/login" element={<Login />} /> 
      <Route path="/employee" element={<EmployeeList />} />
      <Route path="/employee/:employeeName" element={<EmployeeDetail />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="*" element={<Navigate to="/login" />} /> 
    </Routes>
  );
};

export default AppRoutes;
