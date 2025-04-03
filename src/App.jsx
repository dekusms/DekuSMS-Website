import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
