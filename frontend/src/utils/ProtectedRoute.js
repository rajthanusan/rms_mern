import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types"; 

const ProtectedRoute = ({ role }) => {
  const authToken = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");

  if (!authToken || userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};


ProtectedRoute.propTypes = {
  role: PropTypes.string.isRequired, 
};

export default ProtectedRoute;
