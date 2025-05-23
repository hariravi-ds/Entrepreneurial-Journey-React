import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './Pages/Login'; // Ensure the file is named Login.js
import Signup from './Pages/Signup'; // Ensure the file is named Signup.js
import ForgotPassword from './Pages/Forgotpassword'; // Ensure the file is named Forgotpassword.js
import Dashboard from './Pages/Dashboard';

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        {/* Add /signup route later if needed */}
      </Routes>
    </Router>
  );
}

export default App;