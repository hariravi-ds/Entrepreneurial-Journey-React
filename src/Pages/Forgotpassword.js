import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--page-background)' }}>
      <div 
        className="p-6 rounded-lg shadow-lg w-full max-w-sm min-h-[500px] flex flex-col justify-between" 
        style={{ 
          backgroundColor: 'var(--card-fill)', 
          borderRadius: '0.5rem', 
        }}
      >
        <div>
          {/* Title */}
          <h3 className="text-center mb-6" style={{ color: 'var(--text-primary)' }}>
            Forgot Password ?
          </h3>

          {/* Description */}
          <p className="text-center mb-4" style={{ color: 'var(--text-secondary)' }}>
            Please enter you're email
          </p>

          {/* Form */}
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full p-2 rounded border"
                style={{
                  borderColor: 'var(--text-secondary)',
                  backgroundColor: 'var(--page-background)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full p-2 rounded"
              style={{
                background: 'linear-gradient(to right, #9D38DF, #F26479)',
                color: 'var(--text-primary)',
              }}
            >
              Reset Password
            </button>
          </form>
        </div>

        <div>
          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <span style={{ color: 'var(--text-secondary)' }}>
              Don’t have an account?{' '}
            </span>
            <Link
              to="/signup"
              className="underline"
              style={{ color: 'var(--primary-pink)' }}
            >
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