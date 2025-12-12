import { useState } from "react";
import { Box } from "@mui/material";
import TopNav from "./components/TopNav";
import FloaterNav from "./components/FloaterNav";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Downloads from "./components/Download";
import FAQ from "./components/Faq";

export default function App() {
  const [activeSection, setActiveSection] = useState("landing");
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <>
      <TopNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <FloaterNav
        current={activeSection}
        setActiveSection={setActiveSection}
        onExpandChange={setNavExpanded}
      />

      <Box
        sx={{
          transition: "padding-right 330ms cubic-bezier(.2,.9,.2,1)",
          pr: { md: navExpanded ? "220px" : "0px", xs: 0 },
          bgcolor: "#0F2027",
          minHeight: "100vh",
        }}
      >
        {activeSection === "landing" && <Landing />}
        {activeSection === "features" && <Features />}
        {activeSection === "downloads" && <Downloads />}
        {activeSection === "faq" && <FAQ />}
      </Box>
    </>
  );
}
