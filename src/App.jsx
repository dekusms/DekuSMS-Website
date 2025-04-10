import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';
// import Enterprise from './pages/Enterprise';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './i18n';
import ComingSoon from "./pages/ComingSoon";


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

function MainLayout() {
  const location = useLocation();
  const path = location.pathname;

  const hideGlobalNavbar = 
    path.startsWith("/enterprise") ||
    path === "/login" ||
    path === "/signup";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/enterprise/*" element={<Enterprise />} /> */}
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
