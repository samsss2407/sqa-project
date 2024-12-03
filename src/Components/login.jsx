import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      // If credentials match, navigate to the dashboard
      navigate("/dashboard");
    } else {
      // Show error if credentials are invalid
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user starts typing
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <div className="w-4/5 max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Left Section - Welcome */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-purple-700 to-blue-500 text-white p-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">Welcome Back!</div>
            <p className="text-lg mb-6">Sign in to access your account.</p>
          </div>
          <div className="absolute bottom-8 text-sm">
            <p>www.yoursite.com</p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Sign In
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-full shadow-md hover:opacity-90 flex items-center justify-center"
            >
              Continue
              <span className="ml-2">&rarr;</span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <span className="border-t w-full border-gray-300"></span>
            <span className="px-4 text-gray-400">OR</span>
            <span className="border-t w-full border-gray-300"></span>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button
              type="button"
              className="flex items-center justify-center w-full bg-blue-500 text-white py-2 rounded-full shadow-md hover:opacity-90"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter Logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Twitter
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full bg-blue-700 text-white py-2 rounded-full shadow-md hover:opacity-90"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook Logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Facebook
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-gray-600">
            Don't Have an Account?{" "}
            <Link to="/reg/?=authentication" className="text-blue-500 hover:underline">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
