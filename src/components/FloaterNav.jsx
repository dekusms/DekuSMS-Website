import React, { useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import {
  HomeOutlined,
  MessageOutlined,
  DownloadOutlined,
  QuestionCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";

export default function FloaterNav({ current, setActiveSection, onExpandChange }) {
  const [expanded, setExpanded] = useState(false);

  const ACTIVE_COLOR = "#2ed3b7c4";

  const handleExpand = (state) => {
    setExpanded(state);
    onExpandChange(state);
  };

  const items = [
    { id: "landing",   label: "Home",     icon: <HomeOutlined /> },
    { id: "features",  label: "Features", icon: <MessageOutlined /> },
    { id: "downloads", label: "Download", icon: <DownloadOutlined /> },
    { id: "faq",       label: "FAQ",      icon: <QuestionCircleOutlined /> }

  ];

  return (
    <>
      {/* desktop */}
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
          px: expanded ? 2.5 : 0,
          py: 10,
          width: expanded ? 220 : 64,       // ← wider
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

          const handleClick = () => {
            if (item.external && item.href) {
              window.open(item.href, "_blank", "noopener noreferrer");
            } else {
              setActiveSection(item.id);
            }
          };

          return (
            <Box
              key={item.id}
              onClick={handleClick}
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
                  background: "rgba(46,211,183,0.08)",
                  transform: "translateX(-4px)",
                },
              }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  bgcolor: isActive ? ACTIVE_COLOR : "rgba(255,255,255,0.06)",
                  color: isActive ? "#0F2027" : "#fff",
                  marginLeft: expanded ? 0 : "auto",
                  marginRight: expanded ? 0 : "auto",
                  transition: "all 200ms ease",
                  fontSize: 16,
                }}
              >
                {item.icon}
              </Avatar>

              <Typography
                variant="body2"
                sx={{
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? "translateX(0)" : "translateX(-10px)",
                  transition: "opacity 240ms ease, transform 240ms ease",
                  color: isActive ? ACTIVE_COLOR : "white",
                  whiteSpace: "nowrap",
                  fontSize: "0.95rem",
                  fontFamily: "'Ubuntu', sans-serif",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* mobile */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 48,
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
          const handleClick = () => {
            if (item.external && item.href) {
              window.open(item.href, "_blank", "noopener noreferrer");
            } else {
              setActiveSection(item.id);
            }
          };
          return (
            <Avatar
              key={item.id}
              onClick={handleClick}
              sx={{
                width: 36,
                height: 36,
                bgcolor: isActive ? ACTIVE_COLOR : "rgba(255,255,255,0.10)",
                color: isActive ? "#000" : "#fff",
                border: isActive ? "none" : "1px solid rgba(255,255,255,0.2)",
                transition: "0.25s ease",
                cursor: "pointer",
                fontSize: 16,
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