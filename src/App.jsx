import { useState, useRef, useEffect } from "react";
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

  const scrollRef = useRef(null);

  const sectionRefs = {
    landing: useRef(null),
    features: useRef(null),
    downloads: useRef(null),
    faq: useRef(null),
  };

  /* -------------------------------
     SNAP SCROLL ON NAV CLICK
  -------------------------------- */
  useEffect(() => {
    const section = sectionRefs[activeSection]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  /* -------------------------------
     OBSERVE ACTIVE SECTION
  -------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const snapStyle = {
    minHeight: "100vh",
    scrollSnapAlign: "start",
    scrollSnapStop: "always",
  };

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

      {/* 🔥 SCROLL CONTAINER */}
      <Box
        ref={scrollRef}
        sx={{
          height: "100vh",
          overflowY: "auto",
          scrollBehavior: "smooth",

          /* SNAP */
          scrollSnapType: "y mandatory",

          pr: { md: navExpanded ? "220px" : "0px", xs: 0 },
          bgcolor: "#0F2027",

          /* SCROLLBAR */
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#0F2027",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2ED3B7",
            borderRadius: "10px",
          },
        }}
      >
        <Box
          ref={sectionRefs.landing}
          data-section="landing"
          sx={snapStyle}
        >
          <Landing />
        </Box>

        <Box
          ref={sectionRefs.features}
          data-section="features"
          sx={snapStyle}
        >
          <Features />
        </Box>

        <Box
          ref={sectionRefs.downloads}
          data-section="downloads"
          sx={snapStyle}
        >
          <Downloads />
        </Box>

        <Box
          ref={sectionRefs.faq}
          data-section="faq"
          sx={snapStyle}
        >
          <FAQ />
        </Box>
      </Box>
    </>
  );
}
