import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import Footer from "../Components/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    if (username === "user" && password === "password") {
      // Simulate successful login
      localStorage.setItem("isLoggedIn", "true"); // Store login state
      navigate("/dashboard/overview"); // Redirect to Dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen p-24 flex items-center justify-end bg-[var(--background-black)]">
      <div className="flex-1">
        <h1 className="text-[180px] absolute top-[20px] playfair-heading leading-[1.1] font-medium">
          Entrepreneurs <br /> Journey
        </h1>
      </div>
      <div className="p-6 rounded-lg shadow-lg w-[400px]">
        {/* Title */}
        <h1 className="font-semibold text-4xl mb-2 text-left">Login</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          {/* Username Field */}
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-[55px] px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white focus:outline-none"
                placeholder="Username"
                required
              />
            </div>
            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[55px] px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            {/* Error Message */}
            {error && (
              <p
                className="text-center"
                style={{ color: "var(--primary-pink)" }}
              >
                {error}
              </p>
            )}

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember-me"
                style={{ accentColor: "var(--primary-purple)" }}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 text-white font-medium text-semibold rounded-xl bg-gradient-to-r from-[#4f8bff] to-[#7f00ff] shadow-md hover:from-blue-600 hover:to-blue-950 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="cursor-pointer hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full my-3 flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-gray-400 font-medium">Or</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>

          {/* Social Login Buttons */}
          <SocialLogin />
        </div>

        <div className="flex flex-col gap-2 mt-12">
          {/* Sign Up Link */}
          <div className="flex justify-center gap-2 text-base font-medium">
            <span>Don’t have an account? </span>
            <Link to="/signup" className="cursor-pointer hover:underline">
              Sign up
            </Link>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;
