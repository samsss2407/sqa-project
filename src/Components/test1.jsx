import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    // Validate Password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    // Validate Confirm Password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Save user credentials to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      );

      // Redirect to dashboard
      navigate("/dashboard");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear error for the field being edited
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <div className="w-4/5 max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Left Section - Welcome */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-purple-700 to-blue-500 text-white p-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">Join Us</div>
            <p className="text-lg mb-6">
              Create an account to explore amazing features!
            </p>
          </div>
          <div className="absolute bottom-8 text-sm">
            <p>www.yoursite.com</p>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-2 border-b ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-purple-500`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

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
                className={`w-full px-4 py-2 border-b ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-purple-500`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                className={`w-full px-4 py-2 border-b ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-purple-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full px-4 py-2 border-b ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-purple-500`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-full shadow-md hover:opacity-90 flex items-center justify-center"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
