import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../Components/DashBoard";
import Login from "../Components/LoginSignup";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />  
      <Route path="/login" element={<Login />} /> 
      <Route path="*" element={<Navigate to="/login" />} /> 
    </Routes>
  );
};

export default AppRoutes;
