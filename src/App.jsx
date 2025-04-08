import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Enterprise from './pages/Enterprise';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

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

  // Hide global Navbar and Footer on these paths
  const hideGlobalNavbar = 
    path.startsWith("/enterprise") ||
    path === "/login" ||
    path === "/signup";

  return (
    <div className="App">
      {!hideGlobalNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise/*" element={<Enterprise />} />
        <Route path="/pricing/*" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>

      {!hideGlobalNavbar && <Footer />}
    </div>
  );
}

export default App;
