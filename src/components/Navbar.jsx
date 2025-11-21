import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ activeSection, setActiveSection }) {
  const [sideOpen, setSideOpen] = useState(false);

  const sections = [
    { label: "Hero", id: "hero" },
    { label: "Features", id: "features" },
    { label: "Download", id: "download" },
    { label: "Help", id: "help" },
  ];

  const toggleSide = () => setSideOpen(!sideOpen);

  return (
    <>
      {/* Top Navbar */}
      <AppBar position="fixed" sx={{ zIndex: 2000, bgcolor: "#0F2027" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSide}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DekuSMS
          </Typography>

          {/* Desktop Buttons */}
          {sections.map((s) => (
            <Button
              key={s.id}
              color="inherit"
              onClick={() => setActiveSection(s.id)}
            >
              {s.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Floating Side Navbar */}
      <Drawer anchor="right" open={sideOpen} onClose={toggleSide}>
        <Box sx={{ width: 200, p: 2 }}>
          <List>
            {sections.map((s) => (
              <ListItem
                button
                key={s.id}
                onClick={() => {
                  setActiveSection(s.id);
                  toggleSide();
                }}
              >
                <ListItemText primary={s.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
