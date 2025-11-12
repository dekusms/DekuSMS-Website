import React, { useState } from "react";
import { Box, Stack, IconButton } from "@mui/material";
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

export default function PageNavigator() {
  const [active, setActive] = useState(0);

  const pages = [
    { id: "landing", icon: <HomeIcon fontSize="inherit" />, component: <Hero /> },
    { id: "features", icon: <FeatureIcon fontSize="inherit" />, component: <Features /> },
    { id: "download", icon: <DownloadIcon fontSize="inherit" />, component: <Download /> },
    { id: "faq", icon: <FaqIcon fontSize="inherit" />, component: <Faq /> },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Open Sans', 'Lato', 'Helvetica', sans-serif",
        backgroundColor: "#0F2027",
        color: "#fff",
      }}
    >
      <Stack
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          width: "10%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
        spacing={2}
      >
        {pages.map((page, index) => (
          <IconButton
            key={page.id}
            color="inherit"
            onClick={() => setActive(index)}
            sx={{
              color: "#fff",
              transition: "all 0.5s ease-out",
              transform:
                active === index
                  ? "scale(1.2)"
                  : active !== 0
                  ? "scale(0.8)"
                  : "scale(1)",
              opacity: active === index ? 1 : 0.7,
              "&:hover": { opacity: 0.5 },
              fontSize: "32px",
            }}
          >
            {page.icon}
          </IconButton>
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
                ? "translateX(0)"
                : index < active
                ? "translateX(-190%)"
                : "translateX(200%)",
            transition:
              "all 0.8s cubic-bezier(0.54, 0.35, 0.29, 0.99), background 0.8s",
          }}
        >
          {page.component}
        </Box>
      ))}
    </Box>
  );
}
