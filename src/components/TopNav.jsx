import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function TopNav({ setActiveSection }) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Home", value: "landing" },
    { label: "Features", value: "features" },
    { label: "Download", value: "downloads" },
    { label: "FAQ", value: "faq" },
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
              height: { xs: 32, md: 40 },
              width: "auto",
              cursor: "pointer",
            }}
          />

     
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.value}
                  color="inherit"
                  onClick={() => setActiveSection(item.value)}
                  sx={{
                    fontSize: "16px",
                    textTransform: "none",   
                  }}
                >
                  {item.label}
                </Button>
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
            width: 180,
            borderRadius: 2,
            backgroundColor: "#0F2027",
            padding: "10px 0",
            zIndex: 2000,
          }}
        >
          {menuItems.map((item) => (
            <Box
              key={item.value}
              onClick={() => {
                setActiveSection(item.value);
                setOpen(false);
              }}
              sx={{
                padding: "10px 15px",
                color: "white",
                cursor: "pointer",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Paper>
      )}
    </>
  );
}
