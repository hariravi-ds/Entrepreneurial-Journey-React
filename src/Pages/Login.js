import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin';
import Footer from '../Components/Footer';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    if (username === 'user' && password === 'password') {
      // Simulate successful login
      localStorage.setItem('isLoggedIn', 'true'); // Store login state
      navigate('/dashboard/overview'); // Redirect to Dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--page-background)' }}>
      <div className="p-6 rounded-lg shadow-lg w-full max-w-sm" style={{ backgroundColor: 'var(--card-fill)' }}>
        {/* Title */}
        <h3 className="text-center mb-6" style={{ color: 'var(--text-primary)' }}>
          Login
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block mb-2" style={{ color: 'var(--text-secondary)' }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 rounded border"
              style={{
                borderColor: 'var(--text-secondary)',
                backgroundColor: 'var(--page-background)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block mb-2" style={{ color: 'var(--text-secondary)' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded border"
              style={{
                borderColor: 'var(--text-secondary)',
                backgroundColor: 'var(--page-background)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-center mb-4" style={{ color: 'var(--primary-pink)' }}>
              {error}
            </p>
          )}

          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="mr-2"
              style={{ accentColor: 'var(--primary-purple)' }}
            />
            <label htmlFor="remember-me" style={{ color: 'var(--text-secondary)' }}>
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-2 rounded"
            style={{
              background: 'linear-gradient(to right, #9D38DF, #F26479)',
              color: 'var(--text-primary)',
            }}
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="underline"
            style={{ color: 'var(--text-secondary)' }}
          >
            Forgot password?
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t" style={{ borderColor: 'var(--text-secondary)' }}></div>
          <span className="mx-2" style={{ color: 'var(--text-secondary)' }}>Or</span>
          <div className="flex-grow border-t" style={{ borderColor: 'var(--text-secondary)' }}></div>
        </div>

        {/* Social Login Buttons */}
        <SocialLogin />

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
  );
}

export default Login;