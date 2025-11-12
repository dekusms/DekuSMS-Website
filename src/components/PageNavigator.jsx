import React, { useState, useEffect, useCallback } from "react";
import { Box, Stack, IconButton, Tooltip } from "@mui/material";
import {
  Home as HomeIcon,
  Star as FeatureIcon,
  Download as DownloadIcon,
  HelpOutline as FaqIcon,
} from "@mui/icons-material";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import Faq from "../components/Faq";
import Navigation from "../components/Navigation";

export default function PageNavigator() {
  const [active, setActive] = useState(0);
  const pages = [
    { id: "landing", icon: <HomeIcon fontSize="inherit" />, component: <Hero /> },
    { id: "features", icon: <FeatureIcon fontSize="inherit" />, component: <Features /> },
    { id: "download", icon: <DownloadIcon fontSize="inherit" />, component: <Download /> },
    { id: "faq", icon: <FaqIcon fontSize="inherit" />, component: <Faq /> },
  ];

  const tooltipLabels = ["Home", "Feature", "Download", "FAQ"];

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
    let startY = 0;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
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
      <Navigation scrollToSection={(index) => setActive(index)} activeSection={active} />

      <Stack
        sx={{
          position: "fixed",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          width: 65,
          height: 500,
          py: 2,
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 10,
          borderRadius: "50px",
          background: "#142C36",
          border: "1px solid #2ED3B7",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
        spacing={2}
      >
        {pages.map((page, index) => (
          <Tooltip
            key={page.id}
            title={tooltipLabels[index]}
            placement="left"
            arrow
          >
            <IconButton
              onClick={() => setActive(index)}
              sx={{
                color: active === index ? "#142C36" : "#2ED3B7",
                backgroundColor: active === index ? "#2ED3B7" : "#142C36",
                transition: "all 0.3s ease-out",
                transform: active === index ? "scale(1.2)" : "scale(0.9)",
                opacity: 1,
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: active === index ? "#2ED3B7" : "#0f1b23",
                },
                fontSize: 25,
                borderRadius: "25px",
              }}
            >
              {page.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>

      {pages.map((page, index) => (
        <Box
          key={page.id}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
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
            paddingTop: "64px",
          }}
        >
          {page.component}
        </Box>
      ))}
    </Box>
  );
}
