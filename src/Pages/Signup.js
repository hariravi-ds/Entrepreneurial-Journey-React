import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import Footer from "../Components/Footer";

export default function Signup() {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    c_password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      console.log("Form is valid!");
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    // Username
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    // Email or Phone
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isPhone = /^[0-9]{10}$/.test(formData.email);

    if (!formData.email.trim()) {
      errors.email = "Email or phone is required";
    } else if (!isEmail && !isPhone) {
      errors.email = "Enter a valid email or 10-digit phone number";
    }

    // Password (strong check)
    const password = formData.password;
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const numberCount = (password.match(/[0-9]/g) || []).length;

    if (!password) {
      errors.password = "Password is required";
    } else if (!hasMinLength) {
      errors.password = "Password must be at least 8 characters";
    } else if (!hasUppercase || !hasLowercase) {
      errors.password = "Password must include uppercase and lowercase letters";
    } else if (numberCount < 3) {
      errors.password = "Password must include at least 3 numbers";
    }

    if (formData.password !== formData.c_password) {
      errors.c_password = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="min-h-screen bg-[var(--background-black)] text-[var(--text-primary)] flex flex-col items-center p-10">
      <div className="flex w-full">
        <h1 className="text-[48px] playfair-heading font-semibold leading-[1.1]">
          Entrepreneurs <br /> Journey
        </h1>
      </div>
      <div
        className="w-[480px] p-[40px] pt-[80px] border border-solid rounded-2xl"
        style={{
          borderImageSource: `linear-gradient(166.93deg, #AFAFAF 3.24%, rgba(96, 96, 96, 0) 96.43%), linear-gradient(317.92deg, rgba(255, 255, 255, 0.6) 1.48%, rgba(0, 0, 0, 0) 67.95%)`,
          borderImageSlice: 1,
        }}
      >
        <div className="mb-2 text-left">
          <h1 className="font-semibold text-4xl">Signup</h1>
          <h3 className="text-base font-medium">To a Building Community</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <div className="flex flex-col gap-[25px]">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
                className="w-full h-[55px] px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white focus:outline-none"
                placeholder="Username"
                required
              />
              {formErrors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.username}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full h-[55px] px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white focus:outline-none"
                placeholder="Email / Phone"
                required
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                className="w-full h-[55px] px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white focus:outline-none"
                placeholder="Password"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>
            <div>
              <input
                type="c_password"
                name="c_password"
                value={formData.c_password}
                onChange={handleFormChange}
                className="w-full h-[55px] px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white focus:outline-none mt-[-13px]"
                placeholder="Confirm Password"
              />
              {formErrors.c_password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.c_password}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-white font-medium text-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-900 shadow-md hover:from-blue-600 hover:to-blue-950 transition-all duration-300"
          >
            Signup
          </button>
        </form>

        <div className="w-full my-3 flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-gray-400 font-medium">Or</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>

          <SocialLogin />
        </div>

        <div className="flex flex-col gap-2 mt-12">
          <div className="flex justify-center gap-2 text-base font-medium">
            <span className="cursor-pointer">Already Registered?</span>
            <Link to="/" className="cursor-pointer hover:underline">
              Login
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
