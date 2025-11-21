import React, { useState } from "react";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Navigator";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Help from "./components/Faq";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [sideOpen, setSideOpen] = useState(false);

  const toggleSide = () => setSideOpen(!sideOpen);

  const sections = [
    { label: "Hero", id: "hero" },
    { label: "Features", id: "features" },
    { label: "Download", id: "download" },
    { label: "Help", id: "help" },
  ];

  return (
    <Box sx={{ }}>
      <Navbar sections={sections} setActiveSection={setActiveSection} toggleSide={toggleSide} />
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sideOpen={sideOpen}
        toggleSide={toggleSide}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Hero show={activeSection === "hero"} />
        <Features show={activeSection === "features"} />
        <Download show={activeSection === "download"} />
        <Help show={activeSection === "help"} />
      </Box>
    </Box>
  );
}
