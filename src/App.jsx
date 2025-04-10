import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';
import Enterprise from './pages/Enterprise';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ComingSoon from './pages/ComingSoon';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function isAuthenticated() {
  const user = localStorage.getItem("user");
  return !!user;
}

function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function MainLayout() {
  const location = useLocation();
  const path = location.pathname;

  const user = getUser();

  const hideGlobalNavbar = 
    path.startsWith("/enterprise") ||
    path === "/login" ||
    path === "/signup" ||
    path === "/enterprise-coming-soon";

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise/*" element={<Enterprise />} />
          <Route path="/enterprise-coming-soon" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated()
                ? <Dashboard user={user} />
                : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
