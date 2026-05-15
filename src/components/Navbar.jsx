import { useState } from "react";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
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
} from "@ant-design/icons";

const ACCENT = "#2ED3B7";
const BG = "#0F2027";
const DRAWER_BG = "#0a1a20";

const TELEGRAM_LINK = "https://t.me/deku_sms";

const RTL_LANGUAGES = ["fa", "ar"];

export default function TopNav({ setActiveSection }) {
  const { t, i18n } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
    color: "rgba(255,255,255,0.45)",
    borderRadius: "8px",
    width: 36,
    height: 36,
    fontSize: 17,
    transition: "all 0.15s",
    "&:hover": {
      color: "white",
      bgcolor: "rgba(255,255,255,0.07)",
    },
  };

  const navLinkSx = {
    color: "rgba(255,255,255,0.55)",
    textTransform: "none",
    fontSize: "0.875rem",
    fontFamily: "'Ubuntu', sans-serif",
    borderRadius: "8px",
    px: 1.5,
    py: 0.75,
    minWidth: "auto",
    transition: "all 0.15s",
    "&:hover": {
      color: "white",
      backgroundColor: "rgba(255,255,255,0.06)",
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(15,32,39,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
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
            loading="lazy"
            sx={{
              width: { xs: 100, sm: 120, md: 160 },
              height: "auto",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.25,
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                flexShrink: 0,
              }}
            >
              <IconButton
                href="https://github.com/dekusms/DekuSMS-Android"
                target="_blank"
                sx={iconBtnSx}
                title={t("topNav.github")}
              >
                <GithubOutlined />
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
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.8rem",
                    fontFamily: "'Ubuntu', sans-serif",
                    transition: "all 0.15s",
                    userSelect: "none",
                    "&:hover": {
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.15)",
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  <GlobalOutlined style={{ fontSize: 14 }} />

                  {currentLang.native}

                  <DownOutlined
                    style={{
                      fontSize: 10,
                      transition: "transform 0.2s",
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
                      sx={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 2999,
                      }}
                    />

                    <Paper
                      elevation={0}
                      sx={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        right: 0,
                        bgcolor: "#0d1b22",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "10px",
                        minWidth: 170,
                        zIndex: 3000,
                        overflow: "hidden",
                        boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                      }}
                    >
                      <Box
                        sx={{
                          px: 1.5,
                          py: 1,
                          borderBottom:
                            "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.7rem",
                            color: "rgba(255,255,255,0.25)",
                            fontFamily: "'Ubuntu'",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {t("topNav.language")}
                        </Typography>
                      </Box>

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
                              fontFamily: "'Ubuntu', sans-serif",
                              fontSize: "0.875rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              color: active
                                ? ACCENT
                                : "rgba(255,255,255,0.7)",
                              fontWeight: active ? 500 : 400,
                              bgcolor: active
                                ? "rgba(46,211,183,0.06)"
                                : "transparent",
                              "&:hover": {
                                bgcolor: "rgba(255,255,255,0.05)",
                                color: active ? ACCENT : "white",
                              },
                              transition: "all 0.12s",
                            }}
                          >
                            {lng.native}

                            {active && (
                              <CheckOutlined
                                style={{
                                  fontSize: 12,
                                  color: ACCENT,
                                }}
                              />
                            )}
                          </Box>
                        );
                      })}
                    </Paper>
                  </>
                )}
              </Box>

              <Box
                sx={{
                  width: "1px",
                  height: 22,
                  bgcolor: "rgba(255,255,255,0.08)",
                  mx: 0.25,
                }}
              />

              <Button
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<SendOutlined style={{ fontSize: 12 }} />}
                sx={{
                  color: ACCENT,
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "8px",
                  border: "1px solid rgba(46,211,183,0.3)",
                  bgcolor: "rgba(46,211,183,0.06)",
                  px: 1.75,
                  py: 0.65,
                  fontSize: "0.85rem",
                  "&:hover": {
                    bgcolor: "rgba(46,211,183,0.12)",
                    borderColor: "rgba(46,211,183,0.6)",
                  },
                }}
              >
                {t("topNav.joinTelegram")}
              </Button>

              <Button
                onClick={() => setActiveSection("downloads")}
                startIcon={<DownloadOutlined style={{ fontSize: 12 }} />}
                sx={{
                  bgcolor: ACCENT,
                  color: BG,
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 1.75,
                  py: 0.65,
                  fontSize: "0.85rem",
                  "&:hover": {
                    bgcolor: "#25b8a0",
                  },
                }}
              >
                {t("topNav.download")}
              </Button>
            </Box>
          )}

          {isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              <Button
                onClick={() => setActiveSection("downloads")}
                startIcon={<DownloadOutlined style={{ fontSize: 12 }} />}
                sx={{
                  bgcolor: ACCENT,
                  color: BG,
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 1.5,
                  py: 0.55,
                  fontSize: "0.8rem",
                  "&:hover": {
                    bgcolor: "#25b8a0",
                  },
                }}
              >
                {t("topNav.download")}
              </Button>

              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  ...iconBtnSx,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

    {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: DRAWER_BG,
            width: 272,
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1.5,

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 500,
            }}
          >
            Menu
          </Typography>

          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <CloseOutlined />
          </IconButton>
        </Box>

        <List sx={{ py: 1 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              target="_blank"
              sx={{
                py: 1.2,
                px: 2,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  minWidth: 34,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: "0.92rem",
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

        {/* MOBILE LANGUAGE */}
        <Box sx={{ p: 2 }}>
          <Box
            onClick={() => setMobileLangOpen(!mobileLangOpen)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              px: 1.5,
              py: 1,

              borderRadius: "8px",

              border: "1px solid rgba(255,255,255,0.08)",

              color: "rgba(255,255,255,0.75)",

              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <GlobalOutlined />
              {currentLang.native}
            </Box>

            <DownOutlined
              style={{
                fontSize: 10,
                transform: mobileLangOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "0.2s",
              }}
            />
          </Box>

          <Collapse in={mobileLangOpen}>
            <Box sx={{ mt: 1 }}>
              {languages.map((lng) => {
                const active = i18n.language === lng.code;

                return (
                  <Box
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    sx={{
                      px: 1.5,
                      py: 1,

                      borderRadius: "8px",

                      color: active
                        ? ACCENT
                        : "rgba(255,255,255,0.7)",

                      cursor: "pointer",

                      fontFamily: "'Ubuntu', sans-serif",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",

                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.05)",
                      },
                    }}
                  >
                    {lng.native}

                    {active && (
                      <CheckOutlined
                        style={{
                          fontSize: 12,
                          color: ACCENT,
                        }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>
          </Collapse>
        </Box>
      </Drawer>
    </>
  );
}