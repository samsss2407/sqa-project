import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate("/"); // Redirect to signup/login page
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-purple-500">Welcome, {user?.name}!</h1>
      <p className="text-gray-600 mt-4">You are now on the dashboard.</p>
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
