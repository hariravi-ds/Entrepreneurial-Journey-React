import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './Pages/Login'; // Ensure the file is named Login.js
import Signup from './Pages/Signup'; // Ensure the file is named Signup.js
import ForgotPassword from './Pages/Forgotpassword'; // Ensure the file is named Forgotpassword.js
import Dashboard from './Pages/Dashboard';
import Tasks from './Pages/Tasks'
import CreateTask from './Pages/createTask';
import AddUser from './Pages/addUser'
import Explore from './Pages/Explore';
import Profile from './Pages/Profile'
import EntProfile from './Pages/EntProfile'
import FileUpload from './Pages/FileUpload';

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
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ent-profile" element={<EntProfile />} />
        <Route path="/fileUpload" element={<FileUpload />} />
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