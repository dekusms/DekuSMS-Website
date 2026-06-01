import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";

import {
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
  GithubOutlined,
  DownloadOutlined,
  SendOutlined,
} from "@ant-design/icons";

import LanguageIcon from "@mui/icons-material/Language";
import { Telegram } from "react-bootstrap-icons";

export default function Navbar({ toggleTheme }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { i18n, t } = useTranslation();

  const iconStyle = { fontSize: 18 };

  const navLinks = [
    {
      label: t("topNav.blog"),
      href: "https://blog.smswithoutborders.com/",
    },
    {
      label: t("topNav.documentation"),
      href: "https://docs.smswithoutborders.com/",
    },
    {
      label: t("topNav.donate"),
      href: "https://opencollective.com/dekusms",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [langAnchor, setLangAnchor] = useState(null);
  const langOpen = Boolean(langAnchor);

  const RTL_LANGUAGES = ["ar", "fa"];

  const languages = [
    { code: "en", native: "English" },
    { code: "fr", native: "Français" },
    { code: "es", native: "Español" },
    { code: "fa", native: "فارسی" },
    { code: "ar", native: "العربية" },
    { code: "de", native: "Deutsch" },
    { code: "ru", native: "Русский" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);

    document.documentElement.dir = RTL_LANGUAGES.includes(lng)
      ? "rtl"
      : "ltr";

    setLangAnchor(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(15px)",
          background:
            theme.palette.mode === "dark"
              ? "rgba(7,20,26,0.65)"
              : "rgba(255,255,255,0.65)",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={
                isDark
                  ? "/logo/DekuSMS-Dark.png"
                  : "/logo/DekuSMS-Default.png"
              }
              alt="DekuSMS"
              sx={{ width: { xs: 95, md: 120 } }}
            />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2.5 }}>
              {navLinks.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    fontSize: "0.85rem",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            
            {!isMobile && (
              <IconButton sx={{ color: theme.palette.text.primary }}>
                <GithubOutlined style={iconStyle} />
              </IconButton>
            )}

            <IconButton onClick={toggleTheme}>
              {isDark ? (
                <SunOutlined style={iconStyle} />
              ) : (
                <MoonOutlined style={iconStyle} />
              )}
            </IconButton>

            <IconButton onClick={(e) => setLangAnchor(e.currentTarget)}>
              <LanguageIcon style={{ fontSize: 20 }} />
            </IconButton>

            {!isMobile && (
              <Button
                endIcon={<Telegram size={16} />}
                sx={{
                  textTransform: "none",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  borderRadius: "10px",
                  px: 1.5,
                  py: 0.6,
                  background: theme.palette.primary.main,
                  color: "#07141A",
                }}
              >
                Telegram
              </Button>
            )}

            {!isMobile && (
              <Button
                endIcon={<DownloadOutlined style={iconStyle} />}
                sx={{
                  textTransform: "none",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  borderRadius: "10px",
                  px: 1.5,
                  py: 0.6,
                  background: theme.palette.primary.main,
                  color: "#07141A",
                }}
              >
                Download
              </Button>
            )}

            {isMobile && (
              <IconButton onClick={handleOpen}>
                <MenuOutlined style={{ fontSize: 20 }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {navLinks.map((item) => (
          <MenuItem
            key={item.label}
            component="a"
            href={item.href}
            onClick={handleClose}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={langAnchor}
        open={langOpen}
        onClose={() => setLangAnchor(null)}
        TransitionComponent={Fade}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 160,
            borderRadius: "12px",
            background: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            selected={i18n.language === lang.code}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {lang.native}
            {i18n.language === lang.code && "✓"}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}