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
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function TopNav() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
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
    setOpen(false);
    // RTL support
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  };

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
            sx={{ height: { xs: 25, md: 30 } }}
          />

          {/* DESKTOP NAV */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  href={item.href}
                  target="_blank"
                  sx={{ textTransform: "none" }}
                >
                  {item.label}
                </Button>
              ))}

              <IconButton color="inherit">
                <GitHubIcon />
              </IconButton>

              {/* TRANSLATE BUTTON */}
              <Box sx={{ position: "relative" }}>
                <IconButton
                  color="inherit"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <GTranslateIcon />
                </IconButton>

                {langOpen && (
                  <Paper
                    sx={{
                      position: "absolute",
                      top: 40,
                      right: 0,
                      bgcolor: "#0F2027",
                      borderRadius: 2,
                      minWidth: 160,
                      zIndex: 3000,
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
                          color:
                            i18n.language === lng.code
                              ? "#2ED3B7"
                              : "white",
                          "&:hover": { background: "rgba(255,255,255,0.08)" },
                        }}
                      >
                        {lng.label}
                      </Box>
                    ))}
                  </Paper>
                )}
              </Box>
            </Box>
          )}

          {/* MOBILE MENU */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DROPDOWN */}
      {isMobile && open && (
        <Paper
          sx={{
            position: "fixed",
            top: 64,
            right: 10,
            width: 220,
            bgcolor: "#0F2027",
            borderRadius: 2,
            zIndex: 3000,
          }}
        >
          {menuItems.map((item) => (
            <Box
              key={item.label}
              onClick={() => window.open(item.href, "_blank")}
              sx={{
                px: 2,
                py: 1.4,
                color: "white",
                cursor: "pointer",
                "&:hover": { background: "rgba(255,255,255,0.08)" },
              }}
            >
              {item.label}
            </Box>
          ))}

          <Box sx={{ height: 8 }} />

          {languages.map((lng) => (
            <Box
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              sx={{
                px: 2,
                py: 1.2,
                color: i18n.language === lng.code ? "#2ED3B7" : "white",
                cursor: "pointer",
                "&:hover": { background: "rgba(255,255,255,0.08)" },
              }}
            >
              {lng.label}
            </Box>
          ))}
        </Paper>
      )}
    </>
  );
}
