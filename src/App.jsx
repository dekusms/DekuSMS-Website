import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Navbar from './Components/Navbar'
import Navigator from "./Components/Navigator";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Download from "./Components/Download";
import Faq from "./Components/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <Navigator />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/download" element={<Download />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
