import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";

const Navigation = ({ scrollToSection, activeSection }) => {
  const { t, i18n } = useTranslation("dekusms");
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLanguageMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleCloseMenu();
  };
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const navItems = ["Blog", "Documentation", "Donate"];

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#0F2027", zIndex: 200 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection(0)}
        >
          <img
            src="/logo/DekuSMS-Dark.png"
            alt="DekuSMS Logo"
            style={{
              height: "32px",
              width: "auto",
            }}
            className="logo"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {navItems.map((title, idx) => (
            <Button
              key={idx}
              onClick={() => scrollToSection(idx)}
              sx={{
                color: activeSection === idx ? "#35fdbaff" : "white",
                display: { xs: "none", sm: "inline-flex" },
                fontSize: { sm: "0.9rem", md: "1rem" },
                textTransform: "none",
                fontFamily: "'Ubuntu'",
              }}
            >
              {t(title)}
            </Button>
          ))}
          <IconButton
            color="inherit"
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener"
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={handleLanguageMenu}
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          >
            <TranslateIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage("fr")}>Français</MenuItem>
            <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
          </Menu>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 200, bgcolor: "#107a5eff", height: "100%", color: "white" }}>
          {navItems.map((title, idx) => (
            <ListItem
              button
              key={idx}
              onClick={() => {
                scrollToSection(idx);
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary={t(title)}
                primaryTypographyProps={{
                  textTransform: "none",
                  fontFamily: "'Ubuntu'",
                }}
              />
            </ListItem>
          ))}

          <ListItem
            button
            component="a"
            href="https://github.com/dekusms"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon sx={{ mr: 1 }} /> GitHub
          </ListItem>

          <ListItem>
            <TranslateIcon sx={{ mr: 1 }} />
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                sx={{ color: "white", textTransform: "none", fontFamily: "'Ubuntu'"}}
                onClick={() => changeLanguage("en")}
              >
                EN
              </Button>
              <Button
                sx={{ color: "white", textTransform: "none", fontFamily: "'Ubuntu'"}}
                onClick={() => changeLanguage("fr")}
              >
                FR
              </Button>
              <Button
                sx={{ color: "white", textTransform: "none", fontFamily: "'Ubuntu'" }}
                onClick={() => changeLanguage("es")}
              >
                ES
              </Button>
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navigation;
