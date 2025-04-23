import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      alert('Password reset email sent!');
      navigate('/');
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <div className="flex h-screen bg-page-bg">
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-primary-text">Entrepreneur Journey</h1>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-4 font-bold text-primary-text">Forgot Password?</h2>
        <div className="flex flex-col space-y-4 w-64 bg-card-fill p-6 rounded-lg">
          <input
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-primary-text placeholder-secondary-text"
          />
          <button
            onClick={handleResetPassword}
            className="p-2 bg-gradient-to-r from-primary-1 to-primary-2 rounded text-primary-text"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;