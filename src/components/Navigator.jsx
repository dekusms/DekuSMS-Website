import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon, Drawer, Collapse, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Sidebar({ sections, setActiveSection, sideOpen, toggleSide }) {
  const [expanded, setExpanded] = useState(true); // Desktop sidebar expanded or collapsed

  const icons = {
    hero: <HomeIcon />,
    features: <StarIcon />,
    download: <DownloadIcon />,
    help: <HelpOutlineIcon />,
  };

  const handleExpandToggle = () => setExpanded(!expanded);

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={sideOpen} onClose={toggleSide}>
        <Box sx={{ width: 250 }}>
          <List>
            {sections.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  toggleSide();
                }}
              >
                <ListItemIcon>{icons[item.id]}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          bgcolor: "rgba(2, 64, 56, 0.9)",
          borderRadius: "12px 0 0 12px",
          p: 1,
          zIndex: 10,
          display: { xs: "none", md: "block" },
          width: expanded ? 200 : 60,
          transition: "width 0.3s",
          overflow: "hidden",
        }}
      >
        <List>
          {sections.map((item) => (
            <Tooltip key={item.id} title={expanded ? "" : item.label} placement="left">
              <ListItem button onClick={() => setActiveSection(item.id)}>
                <ListItemIcon sx={{ color: "#2ED3B7", minWidth: 40 }}>
                  {icons[item.id]}
                </ListItemIcon>
                <Collapse in={expanded} orientation="horizontal">
                  <ListItemText
                    primary={item.label}
                    sx={{ color: "#2ED3B7", fontWeight: 600 }}
                  />
                </Collapse>
              </ListItem>
            </Tooltip>
          ))}

          {/* Expand/Collapse Button */}
          <ListItem button onClick={handleExpandToggle} sx={{ mt: 2 }}>
            <ListItemIcon sx={{ color: "#2ED3B7", minWidth: 40 }}>
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            {expanded && <ListItemText primary={expanded ? "Collapse" : "Expand"} sx={{ color: "#2ED3B7" }} />}
          </ListItem>
        </List>
      </Box>
    </>
  );
}
