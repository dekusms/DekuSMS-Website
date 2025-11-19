import React, { useState } from "react";
import { Box, Stack, IconButton, Typography } from "@mui/material";
import { Home as HomeIcon, Star as FeatureIcon, Download as DownloadIcon, HelpOutline as FaqIcon } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export default function SideNavigator() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pages = [
    { id: "landing", icon: <HomeIcon />, label: "Home", path: "/" },
    { id: "features", icon: <FeatureIcon />, label: "Features", path: "/features" },
    { id: "download", icon: <DownloadIcon />, label: "Download", path: "/download" },
    { id: "faq", icon: <FaqIcon />, label: "FAQ", path: "/faq" },
  ];

  return (
    <Stack
      sx={{
        position: "fixed",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
        background: "#142C36",
        border: "1px solid #2ED3B7",
        borderRadius: "40px",
        padding: "16px 10px",
        gap: 2,
        zIndex: 20,
      }}
    >
      {pages.map((page) => {
        const isActive = location.pathname === page.path;
        return (
          <Box
            key={page.id}
            onClick={() => navigate(page.path)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <IconButton
              sx={{
                color: isActive ? "#142C36" : "#2ED3B7",
                backgroundColor: isActive ? "#2ED3B7" : "transparent",
                borderRadius: "20px",
              }}
            >
              {page.icon}
            </IconButton>

            <Typography
              sx={{
                color: isActive ? "#2ED3B7" : "#dceff7",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              {page.label}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
}
