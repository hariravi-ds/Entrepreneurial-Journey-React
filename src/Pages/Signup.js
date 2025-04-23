import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Sign up successful!');
        navigate('/');
      } else {
        alert('Passwords do not match.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="flex h-screen bg-page-bg">
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-primary-text">Entrepreneur Journey</h1>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-4 font-bold text-primary-text">Sign Up</h2>
        <div className="flex flex-col space-y-4 w-64 bg-card-fill p-6 rounded-lg">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-primary-text placeholder-secondary-text"
          />
          <input
            type="text"
            placeholder="Email/Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-primary-text placeholder-secondary-text"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-primary-text placeholder-secondary-text"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-primary-text placeholder-secondary-text"
          />
          <button
            onClick={handleSignup}
            className="p-2 bg-gradient-to-r from-primary-1 to-primary-2 rounded text-primary-text"
          >
            Sign Up
          </button>
        </div>
        <SocialLogin />
        <p className="text-secondary-text">
          <Link to="/terms" className="text-primary-1 hover:underline">
            Terms & Conditions
          </Link>{' '}
          |{' '}
          <span>
            Already registered?{' '}
            <Link to="/" className="text-primary-1 hover:underline">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;