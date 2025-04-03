import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Enterprise from './pages/Enterprise';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isEnterprisePage = location.pathname.startsWith("/enterprise"); 

  return (
    <div className="App">
      {!isEnterprisePage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise/*" element={<Enterprise />} /> 
      </Routes>

      {!isEnterprisePage && <Footer />}
    </div>
  );
}

export default App;
