import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      alert('Login successful!');
      navigate('/signup'); // Navigate to signup for now; update later
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
        <h2 className="text-3xl mb-4 font-bold text-primary-text">Login</h2>
        <div className="flex flex-col space-y-4 w-64 bg-card-fill p-6 rounded-lg">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-primary-text placeholder-secondary-text"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-800 text-primary-text placeholder-secondary-text"
          />
          <label className="flex items-center space-x-2 text-secondary-text">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <button
            onClick={handleLogin}
            className="p-2 bg-gradient-to-r from-primary-1 to-primary-2 rounded text-primary-text"
          >
            Login
          </button>
        </div>
        <Link to="/forgot-password" className="my-2 text-secondary-text hover:text-primary-1">
          Forgot password?
        </Link>
        <SocialLogin />
        <p className="text-secondary-text">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary-1 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;