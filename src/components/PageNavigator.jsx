import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Box, Stack, IconButton, Typography } from "@mui/material";
import {
  Home as HomeIcon,
  Star as FeatureIcon,
  Download as DownloadIcon,
  HelpOutline as FaqIcon,
} from "@mui/icons-material";
import Navigation from "../components/Navigation";

// Lazy load page components
const Hero = lazy(() => import("../components/Hero"));
const Features = lazy(() => import("../components/Features"));
const Download = lazy(() => import("../components/Download"));
const Faq = lazy(() => import("../components/Faq"));

export default function PageNavigator() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  const pages = [
    { id: "landing", icon: <HomeIcon fontSize="inherit" />, label: "Home", component: <Hero /> },
    { id: "features", icon: <FeatureIcon fontSize="inherit" />, label: "Features", component: <Features /> },
    { id: "download", icon: <DownloadIcon fontSize="inherit" />, label: "Download", component: <Download /> },
    { id: "faq", icon: <FaqIcon fontSize="inherit" />, label: "FAQ", component: <Faq /> },
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

  // Touch swipe support
  useEffect(() => {
    let startY = 0;
    const handleTouchStart = (e) => (startY = e.touches[0].clientY);
    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (startY - endY > 50) setActive((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
      else if (endY - startY > 50) setActive((prev) => (prev > 0 ? prev - 1 : prev));
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pages.length]);

  // Mouse wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      handleScroll(e);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleScroll]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Unbounded', sans-serif",
        backgroundColor: "#0F2027",
        color: "#fff",
      }}
    >
      {/* Navigation bar */}
      <Navigation scrollToSection={(index) => setActive(index)} activeSection={active} />

      {/* Floating side nav */}
      <Stack
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: "fixed",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          width: hovered ? 180 : 65,
          height: { xs: 220, sm: 280, md: 350 },
          py: 2,
          px: hovered ? 1 : 0,
          justifyContent: "space-around",
          alignItems: hovered ? "flex-start" : "center",
          zIndex: 10,
          borderRadius: "50px",
          background: "#142C36",
          border: "1px solid #2ED3B7",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          transition: "all 0.35s ease",
          overflow: "hidden",
        }}
        spacing={2}
      >
        {pages.map((page, index) => (
          <Box
            key={page.id}
            onClick={() => setActive(index)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: hovered ? "flex-start" : "center",
              cursor: "pointer",
              gap: hovered ? 1.5 : 0,
              pl: hovered ? 2 : 0,
              width: "100%",
              transition: "all 0.3s ease",
            }}
          >
            <IconButton
              sx={{
                color: active === index ? "#142C36" : "#2ED3B7",
                backgroundColor: active === index ? "#2ED3B7" : "#142C36",
                transition: "all 0.3s ease-out",
                transform: active === index ? "scale(1.2)" : "scale(1)",
                fontSize: { xs: 18, sm: 20, md: 22 },
                borderRadius: "25px",
              }}
            >
              {page.icon}
            </IconButton>

            {hovered && (
              <Typography
                sx={{
                  color: active === index ? "#2ED3B7" : "#dceff7ff",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.3s ease, color 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {page.label}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "64px",
        }}
      >
        <Suspense fallback={null}>{pages[active].component}</Suspense>
      </Box>
    </Box>
  );
}
