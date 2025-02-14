import React, { createContext, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Hero from "./Component/Hero";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import VisitorAnalytics from './Component/VisitorAnalytics';
import Download from "./Component/Download";
import Footer from "./Component/Footer";
import Gratitude from "./Component/Gratitude";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <Navbar />
        <Hero />
        <Gratitude />
        <About />
       <Download />
        <Footer /> 
        <VisitorAnalytics />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
