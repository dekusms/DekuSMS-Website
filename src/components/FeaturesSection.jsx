import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Typography, Stack, Tooltip, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";

const FeatureSection = ({ controls, scrollToSection, activeSection }) => {
  const vh = typeof window !== "undefined" ? window.innerHeight : 0;

  const features = [
    {
      title: "Fast Performance",
      text: "Optimized for speed. Enjoy lightning-fast load times and smooth interactions.",
    },
    {
      title: "Responsive Layout",
      text: "Looks perfect on all devices — phones, tablets, and desktops.",
    },
    {
      title: "Modern Animations",
      text: "Smooth and delightful animations using Framer Motion.",
    },
    {
      title: "Easy Navigation",
      text: "Navigate seamlessly with keyboard arrows or the left-side icon menu.",
    },
  ];

  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
      <motion.div
        animate={controls}
        initial={{ y: vh }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0288d1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gridTemplateRows: { xs: "auto auto auto auto", md: "1fr 1fr" },
            gap: { xs: 2, md: 4 },
          }}
        >
          {features.map((item, idx) => (
            <Box key={idx} sx={{ bgcolor: "rgba(255,255,255,0.2)", p: 3, borderRadius: 3, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default FeatureSection;
