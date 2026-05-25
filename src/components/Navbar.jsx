import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import {
  GithubOutlined,
  GlobalOutlined,
  SendOutlined,
  DownloadOutlined,
  MenuOutlined,
  CloseOutlined,
  FileTextOutlined,
  BookOutlined,
  HeartOutlined,
  CheckOutlined,
  DownOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";

const ACCENT = "#2ED3B7";
const DRAWER_BG = "#0a1a20";
const TELEGRAM_LINK = "https://t.me/deku_sms";
const RTL_LANGUAGES = ["fa", "ar"];

export default function TopNav({ setActiveSection, mode, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isDark = theme.palette.mode === "dark";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);


  const textColor = isDark ? "#ffffff" : "#0f172a";

  const subtleText = isDark
    ? "rgba(255,255,255,0.55)"
    : "rgba(15,23,42,0.6)";

  const borderColor = isDark
    ? "rgba(255,255,255,0.06)"
    : "rgba(15,23,42,0.08)";

  const menuItems = [
    {
      label: t("topNav.blog"),
      href: "https://blog.smswithoutborders.com/",
      icon: <FileTextOutlined />,
    },
    {
      label: t("topNav.documentation"),
      href: "https://docs.smswithoutborders.com/",
      icon: <BookOutlined />,
    },
    {
      label: t("topNav.donate"),
      href: "https://opencollective.com/dekusms",
      icon: <HeartOutlined />,
    },
  ];

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

    setLangOpen(false);
    setMobileLangOpen(false);
  };

  const iconBtnSx = {
    color: subtleText,
    borderRadius: "8px",
    width: 36,
    height: 36,
    "&:hover": {
      color: textColor,
      bgcolor: isDark
        ? "rgba(255,255,255,0.07)"
        : "rgba(15,23,42,0.05)",
    },
  };

  const navLinkSx = {
    color: subtleText,
    textTransform: "none",
    fontSize: "0.875rem",
    fontFamily: "'Ubuntu', sans-serif",
    borderRadius: "8px",
    px: 1.5,
    py: 0.75,
    "&:hover": {
      color: textColor,
      backgroundColor: isDark
        ? "rgba(255,255,255,0.06)"
        : "rgba(15,23,42,0.05)",
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
           backgroundColor: isDark
        ? "#07141A"
        : "#f5f7fa",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, sm: 3, md: 6 },
            minHeight: { xs: "58px", md: "66px" },
          }}
        >
          <Box
            component="img"
            src="/logo/DekuSMS-Dark.png"
            alt="DekuSMS"
            sx={{
              width: { xs: 100, sm: 120, md: 160 },
            }}
          />

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  sx={navLinkSx}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

<IconButton
  component="a"
  href="https://github.com/dekusms/DekuSMS-Android"
  target="_blank"
  rel="noopener noreferrer"
  sx={iconBtnSx}
  aria-label="GitHub"
>
  <GithubOutlined />
</IconButton>

<IconButton
  onClick={toggleTheme}
  sx={iconBtnSx}
  title={mode === "dark" ? "Light mode" : "Dark mode"}
  aria-label="Toggle theme"
>
  {mode === "dark" ? (
    <SunOutlined />
  ) : (
    <MoonOutlined />
  )}
</IconButton>


              <Box sx={{ position: "relative" }}>
                <Box
                  onClick={() => setLangOpen(!langOpen)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                    px: 1.25,
                    py: 0.6,
                    borderRadius: "8px",
                    cursor: "pointer",
                    border: `1px solid ${borderColor}`,
                    color: subtleText,
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: textColor,
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(15,23,42,0.03)",
                    },
                  }}
                >
                  <GlobalOutlined />
                  {currentLang.native}
                  <DownOutlined
                    style={{
                      fontSize: 10,
                      transform: langOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </Box>

                {langOpen && (
                  <>
                    <Box
                      onClick={() => setLangOpen(false)}
                      sx={{ position: "fixed", inset: 0 }}
                    />

                    <Paper
                      sx={{
                        position: "absolute",
                        top: "100%",
                        right: 0,
                        mt: 1,
                        minWidth: 170,
                        bgcolor: isDark ? "#0d1b22" : "#fff",
                        border: `1px solid ${borderColor}`,
                      }}
                    >
                      {languages.map((lng) => {
                        const active = i18n.language === lng.code;

                        return (
                          <Box
                            key={lng.code}
                            onClick={() => changeLanguage(lng.code)}
                            sx={{
                              px: 1.5,
                              py: 1,
                              cursor: "pointer",
                              color: active ? ACCENT : textColor,
                              bgcolor: active
                                ? `${ACCENT}10`
                                : "transparent",
                            }}
                          >
                            {lng.native}
                          </Box>
                        );
                      })}
                    </Paper>
                  </>
                )}
              </Box>

              <Button
                href={TELEGRAM_LINK}
                target="_blank"
                sx={{
                  color: ACCENT,
                  border: `1px solid ${ACCENT}55`,
                  textTransform: "none",
                   "&:hover": {
      bgcolor: "#09746286",
      transform: "translateY(-2px)",
      boxShadow: "0 12px 20px rgba(46, 211, 183, 0.11)",
    },
                }}
              >
                {t("topNav.joinTelegram")}
              </Button>

<Button
  component="a"
  href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pli=1"
  target="_blank"
  rel="noopener noreferrer"
  endIcon={<DownloadOutlined />}
  sx={{
    bgcolor: ACCENT,
    color: "#07141A",
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "14px",
    px: 2.5,
    py: 1,
    fontSize: "0.92rem",
    fontFamily: "'Ubuntu', sans-serif",
    boxShadow: "0 8px 24px rgba(46,211,183,0.25)",
    transition: "all 0.25s ease",

    "&:hover": {
      Color:"#FFFS",
      bgcolor: "#00a88c77",
      transform: "translateY(-2px)",
      boxShadow: "0 12px 30px rgba(46,211,183,0.35)",
    },
  }}
>
  {t("topNav.download")}
</Button>
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>

              <IconButton onClick={toggleTheme}>
                {mode === "dark" ? (
                  <SunOutlined style={{ color: "white" }} />
                ) : (
                  <MoonOutlined style={{ color: "#0f172a" }} />
                )}
              </IconButton>

              <Button
                onClick={() => setActiveSection("downloads")}
                sx={{
                  bgcolor: ACCENT,
                  color: "#07141A",
                  fontSize: "0.8rem",
                }}
              >
                {t("topNav.download")}
              </Button>

              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: DRAWER_BG,
            width: 280,
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              sx={{ color: "white" }}
            >
              <ListItemIcon sx={{ color: "rgba(255,255,255,0.5)" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}