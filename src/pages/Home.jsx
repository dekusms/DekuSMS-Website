import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import Features from "./Features";
import Download from "./Download";
import Faq from "./Faq";
import Navigation from "./Navigation";

export default function PageNavigator() {
  const [active, setActive] = useState(0);

  const pages = [
    { id: "landing", component: <Hero /> },
    { id: "features", component: <Features /> },
    { id: "download", component: <Download /> },
    { id: "faq", component: <Faq /> },
  ];

  const handleScroll = useCallback(
    (event) => {
      if (event.deltaY > 0) {
        setActive((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
      } else if (event.deltaY < 0) {
        setActive((prev) => (prev > 0 ? prev - 1 : prev));
      }
    },
    [pages.length]
  );


  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      handleScroll(e);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [handleScroll]);

  useEffect(() => {
    let startY = 0;
    const handleTouchStart = (e) => (startY = e.touches[0].clientY);
    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (startY - endY > 50) {
        setActive((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
      } else if (endY - startY > 50) {
        setActive((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pages.length]);

  const scrollToSection = (index) => setActive(index);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0F2027",
        color: "#fff",
        fontFamily: "'Open Sans', 'Lato', 'Helvetica', sans-serif",
      }}
    >

      <Navigation scrollToSection={scrollToSection} activeSection={active} />

      {pages.map((page, index) => (
        <Box
          key={page.id}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pt: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform:
              active === index
                ? "translateY(0)"
                : index < active
                ? "translateY(-100%)"
                : "translateY(100%)",
            transition:
              "transform 0.8s cubic-bezier(0.54, 0.35, 0.29, 0.99), opacity 0.6s ease",
            opacity: active === index ? 1 : 0,
          }}
        >
          {page.component}
        </Box>
      ))}
    </Box>
  );
}
