import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[var(--background-black)] text-[var(--text-primary)] flex flex-col items-center p-10">
      <div className="flex w-full">
        <h1 className="text-[48px] playfair-heading font-semibold leading-[1.1]">
          Entrepreneurs <br /> Journey
        </h1>
      </div>
      <div
        className="w-[480px] h-[720px] p-[40px] pt-[80px] border border-solid rounded-2xl flex flex-col justify-between"
        style={{
          borderImageSource: `linear-gradient(166.93deg, #AFAFAF 3.24%, rgba(96, 96, 96, 0) 96.43%), linear-gradient(317.92deg, rgba(255, 255, 255, 0.6) 1.48%, rgba(0, 0, 0, 0) 67.95%)`,
          borderImageSlice: 1,
        }}
      >
        <div>
          <div className="mb-2 text-left">
            <h1 className="font-semibold text-4xl">Forgot Password ?</h1>
            <h3 className="text-base font-medium">Please enter you're email</h3>
          </div>

          {/* Form */}
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="w-full h-[55px] px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white focus:outline-none"
                required
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 text-white font-medium text-semibold rounded-xl bg-gradient-to-r from-[#9D38DF] to-[#F26479] shadow-md hover:from-blue-600 hover:to-blue-950 transition-all duration-300"
            >
              Reset Password
            </button>
          </form>
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

export default ForgotPassword;
