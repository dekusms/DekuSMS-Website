import React, { useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function FloaterNav({ current, setActiveSection, onExpandChange }) {
  const [expanded, setExpanded] = useState(false);

  const ACTIVE_COLOR = "#2ed3b7c4";

  const handleExpand = (state) => {
    setExpanded(state);
    onExpandChange(state);
  };

  const items = [
    { id: "landing", label: "Home", icon: <HomeIcon /> },
    { id: "features", label: "Features", icon: <ChatBubbleOutlineIcon /> },
    { id: "downloads", label: "Download", icon: <SaveAltIcon /> },
    { id: "faq", label: "FAQ", icon: <HelpOutlineIcon /> },
  ];

  return (
    <>
        {/* desktop version */}
<Box
  onMouseEnter={() => handleExpand(true)}
  onMouseLeave={() => handleExpand(false)}
  sx={{
    position: "fixed",
    top: "26%",
    right: 16,
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    alignItems: expanded ? "flex-start" : "center",
    gap: 4,
    px: expanded ? 2 : 0,
    py: 10,
    width: expanded ? 200 : 50,
    borderRadius: "50px",
    border: "1px solid rgba(0, 214, 178, 0.36)",
    background: "#0F2027",
    backdropFilter: "blur(10px)",
    transition:
      "width 300ms cubic-bezier(.2,.9,.2,1), padding 300ms, background 280ms",
    boxShadow: expanded
      ? "0 10px 30px rgba(0,0,0,0.35)"
      : "0 6px 18px rgba(0,0,0,0.25)",
    zIndex: 110,
    overflow: "hidden",
  }}
>

        {items.map((item) => {
          const isActive = current === item.id;

          return (
            <Box
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
                py: 0.7,
                px: expanded ? 1.5 : 1,
                borderRadius: "999px",
                cursor: "pointer",
                transition: "0.25s ease",
                "&:hover": {
                  background: "#0F2027",
                  transform: "translateX(-4px)",
                },
              }}
            >
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  minWidth: 32,
                  bgcolor: isActive ? ACTIVE_COLOR : "#0F2027",
                  color: isActive ? "#0F2027" : "#fff",
                  marginLeft: expanded ? 0 : "auto",
                  marginRight: expanded ? 0 : "auto",
                  transition: "all 200ms ease",
                }}
              >
                {item.icon}
              </Avatar>

              <Typography
                variant="body1"
                sx={{
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? "translateX(0)" : "translateX(-10px)",
                  transition: "opacity 240ms ease, transform 240ms ease",
                  color: "white",
                  whiteSpace: "nowrap",
                  fontSize:  "1rem",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

    {/* mobile version */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 40,
          display: { xs: "flex", md: "none" },
          justifyContent: "space-around",
          alignItems: "center",
          background: "#0F2027",
          backdropFilter: "blur(12px)",
          borderTop: "2px solid rgba(0,214,180,0.7)",
          zIndex: 200,
        }}
      >
        {items.map((item) => {
          const isActive = current === item.id;
          return (
            <Avatar
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              sx={{
                width: 35,
                height: 35,
                bgcolor: isActive ? ACTIVE_COLOR : "rgba(255,255,255,0.10)",
                color: isActive ? "#000" : "#fff",
                border: isActive ? "none" : "1px solid rgba(255,255,255,0.2)",
                transition: "0.25s ease",
                cursor: "pointer",
              }}
            >
              {item.icon}
            </Avatar>
          );
        })}
      </Box>
    </>
  );
}