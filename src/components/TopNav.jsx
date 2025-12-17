import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function TopNav({ setActiveSection }) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Blog", href: "https://blog.smswithoutborders.com/" },
    { label: "Documentation", href: "https://docs.smswithoutborders.com/" },
    { label: "Donate", href: "https://opencollective.com/dekusms" },
  ];

  const externalLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/dekusms/DekuSMS-Android",
      label: "GitHub",
    },
    {
      icon: <GTranslateIcon />,
      url: "",
      label: "translation",
    },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#0F2027" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1.5, md: 10 },
          }}
        >
          <Box
            component="img"
            src="./logo/DekuSMS-Dark.png"
            alt="Logo"
            sx={{
              height: { xs: 25, md: 30 },
              width: "auto",
              cursor: "pointer",
            }}
          />

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  href={item.href}
                  target="_blank"
                  sx={{ fontSize: "16px", textTransform: "none" }}
                >
                  {item.label}
                </Button>
              ))}

              {externalLinks.map((link) => (
                <IconButton
                  key={link.label}
                  color="inherit"
                  href={link.url}
                  target="_blank"
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>


      {isMobile && open && (
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            top: 64,
            right: 10,
            width: 200,
            borderRadius: 2,
            backgroundColor: "#0F2027",
            padding: "10px 0",
            zIndex: 2000,
          }}
        >
    
          {menuItems.map((item) => (
            <Box
              key={item.label}
              onClick={() => {
                window.open(item.href, "_blank");
                setOpen(false);
              }}
              sx={{
                padding: "10px 15px",
                color: "white",
                cursor: "pointer",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              {item.label}
            </Box>
          ))}

          <Box sx={{ height: 8 }} />

          {externalLinks.map((link) => (
            <Box
              key={link.label}
              onClick={() => {
                window.open(link.url, "_blank");
                setOpen(false);
              }}
              sx={{
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                color: "white",
                cursor: "pointer",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              {link.icon}
              {link.label}
            </Box>
          ))}
        </Paper>
      )}
    </>
  );
}
