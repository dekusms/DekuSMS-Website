import { useState } from "react";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const ACCENT = "#2ED3B7";
const BG = "#0F2027";

export default function TopNav({ setActiveSection }) {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: t("topNav.blog"), href: "https://blog.smswithoutborders.com/" },
    { label: t("topNav.documentation"), href: "https://docs.smswithoutborders.com/" },
    { label: t("topNav.donate"), href: "https://opencollective.com/dekusms" },
  ];

  const languages = [
    { code: "en", label: t("topNav.languages.en") },
    { code: "fr", label: t("topNav.languages.fr") },
    { code: "es", label: t("topNav.languages.es") },
    { code: "fa", label: t("topNav.languages.fa") },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setDrawerOpen(false);
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  };

  const navLinkStyle = {
    color: "rgba(255,255,255,0.8)",
    textTransform: "none",
    fontSize: "0.9rem",
    fontFamily: "'Ubuntu', sans-serif",
    "&:hover": { color: ACCENT, backgroundColor: "transparent" },
    transition: "color 0.2s",
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(15,32,39,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(46,211,183,0.15)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 8 },
            minHeight: { xs: "60px", md: "68px" },
          }}
        >
        <Box
  component="img"
  src="/logo/DekuSMS-Dark.png"
  alt="DekuSMS Logo"
  loading="lazy"
  sx={{
    width: { xs: 90, sm: 110, md: 180 },
    height: "auto",
    objectFit: "contain",
  }}
/>
         
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  sx={navLinkStyle}
                >
                  {item.label}
                </Button>
              ))}

              <IconButton
                color="inherit"
                href="https://github.com/dekusms/DekuSMS-Android"
                target="_blank"
                sx={{ opacity: 0.7, "&:hover": { opacity: 1, color: ACCENT } }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>

              <Box sx={{ position: "relative" }}>
                <IconButton
                  color="inherit"
                  onClick={() => setLangOpen(!langOpen)}
                  sx={{ opacity: 0.7, "&:hover": { opacity: 1, color: ACCENT } }}
                >
                  <GTranslateIcon fontSize="small" />
                </IconButton>
                {langOpen && (
                  <Paper
                    elevation={8}
                    sx={{
                      position: "absolute",
                      top: 44,
                      right: 0,
                      bgcolor: "#0d1b22",
                      border: "1px solid rgba(46,211,183,0.2)",
                      borderRadius: 2,
                      minWidth: 160,
                      zIndex: 3000,
                      overflow: "hidden",
                    }}
                  >
                    {languages.map((lng) => (
                      <Box
                        key={lng.code}
                        onClick={() => changeLanguage(lng.code)}
                        sx={{
                          px: 2,
                          py: 1.2,
                          cursor: "pointer",
                          fontFamily: "'Ubuntu', sans-serif",
                          fontSize: "0.875rem",
                          color: i18n.language === lng.code ? ACCENT : "rgba(255,255,255,0.8)",
                          "&:hover": { background: "rgba(46,211,183,0.08)" },
                          transition: "background 0.15s",
                        }}
                      >
                        {lng.label}
                      </Box>
                    ))}
                  </Paper>
                )}
              </Box>

              <Button
                onClick={() => setActiveSection("downloads")}
                variant="contained"
                size="small"
                sx={{
                  bgcolor: ACCENT,
                  color: BG,
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "20px",
                  px: 2.5,
                  ml: 1,
                  "&:hover": {
                    bgcolor: "#25b8a0",
                    boxShadow: "0 4px 16px rgba(46,211,183,0.3)",
                  },
                }}
              >
                Download
              </Button>
            </Box>
          )}

       
          {isMobile && (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: "#0d1b22",
            width: 260,
            borderLeft: "1px solid rgba(46,211,183,0.2)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily: "'Unbounded'", color: ACCENT, fontSize: "0.9rem" }}>
            DekuSMS
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(46,211,183,0.1)" }} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              target="_blank"
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: "rgba(255,255,255,0.8)",
                "&:hover": { bgcolor: "rgba(46,211,183,0.08)", color: ACCENT },
                transition: "all 0.15s",
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontFamily: "'Ubuntu'", fontSize: "0.9rem" }}
              />
            </ListItem>
          ))}
          <ListItem
            component="a"
            href="https://github.com/dekusms/DekuSMS-Android"
            target="_blank"
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "rgba(255,255,255,0.8)", "&:hover": { bgcolor: "rgba(46,211,183,0.08)" } }}
          >
            <ListItemText
              primary="GitHub"
              primaryTypographyProps={{ fontFamily: "'Ubuntu'", fontSize: "0.9rem" }}
            />
          </ListItem>
        </List>
        <Divider sx={{ borderColor: "rgba(46,211,183,0.1)" }} />
        <List>
          {languages.map((lng) => (
            <ListItem
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              sx={{
                cursor: "pointer",
                color: i18n.language === lng.code ? ACCENT : "rgba(255,255,255,0.6)",
                "&:hover": { bgcolor: "rgba(46,211,183,0.08)" },
              }}
            >
              <ListItemText
                primary={lng.label}
                primaryTypographyProps={{ fontFamily: "'Ubuntu'", fontSize: "0.85rem" }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}