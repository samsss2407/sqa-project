import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Check if user is logged in
  return user ? children : <Navigate to="/" />; // Redirect to signup/login if not authenticated
};

export default ProtectedRoute;
