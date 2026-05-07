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

export default function TopNav({ setActiveSection }) {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: t("topNav.blog", "Blog"), href: "https://blog.smswithoutborders.com/", icon: <FileTextOutlined /> },
    { label: t("topNav.documentation", "Docs"), href: "https://docs.smswithoutborders.com/", icon: <BookOutlined /> },
    { label: t("topNav.donate", "Donate"), href: "https://opencollective.com/dekusms", icon: <HeartOutlined /> },
  ];

  const languages = [
    { code: "en", label: "English", native: "English" },
    { code: "fr", label: t("topNav.languages.fr", "Français"), native: "Français" },
    { code: "es", label: t("topNav.languages.es", "Español"), native: "Español" },
    { code: "fa", label: t("topNav.languages.fa", "فارسی"), native: "فارسی" },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setMobileLangOpen(false);
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  };

  const iconBtnSx = {
    color: "rgba(255,255,255,0.45)",
    borderRadius: "8px",
    width: 36,
    height: 36,
    fontSize: 17,
    transition: "all 0.15s",
    "&:hover": { color: "white", bgcolor: "rgba(255,255,255,0.07)" },
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
    "&:hover": { color: "white", backgroundColor: "rgba(255,255,255,0.06)" },
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, flexShrink: 0 }}>

              <IconButton
                href="https://github.com/dekusms/DekuSMS-Android"
                target="_blank"
                sx={iconBtnSx}
                title="GitHub"
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
                      transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Box>

                {langOpen && (
                  <>
                    <Box
                      onClick={() => setLangOpen(false)}
                      sx={{ position: "fixed", inset: 0, zIndex: 2999 }}
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
                      <Box sx={{ px: 1.5, py: 1, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <Typography sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", fontFamily: "'Ubuntu'", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          Language
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
                              color: active ? ACCENT : "rgba(255,255,255,0.7)",
                              fontWeight: active ? 500 : 400,
                              bgcolor: active ? "rgba(46,211,183,0.06)" : "transparent",
                              "&:hover": { bgcolor: "rgba(255,255,255,0.05)", color: active ? ACCENT : "white" },
                              transition: "all 0.12s",
                            }}
                          >
                            {lng.native}
                            {active && <CheckOutlined style={{ fontSize: 12, color: ACCENT }} />}
                          </Box>
                        );
                      })}
                    </Paper>
                  </>
                )}
              </Box>

              <Box sx={{ width: "1px", height: 22, bgcolor: "rgba(255,255,255,0.08)", mx: 0.25 }} />

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
                  transition: "all 0.15s",
                }}
              >
                Join Telegram
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
                  transition: "all 0.15s",
                }}
              >
                Download
              </Button>
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
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
                  "&:hover": { bgcolor: "#25b8a0" },
                }}
              >
                Download
              </Button>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ ...iconBtnSx, border: "1px solid rgba(255,255,255,0.08)" }}
              >
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
            width: 272,
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="/logo/DekuSMS-Dark.png"
            alt="DekuSMS"
            sx={{ width: 110, height: "auto", objectFit: "contain" }}
          />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "rgba(255,255,255,0.35)", borderRadius: "8px", fontSize: 17 }}
          >
            <CloseOutlined />
          </IconButton>
        </Box>

        <List sx={{ py: 1.5, px: 1 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              target="_blank"
              onClick={() => setDrawerOpen(false)}
              sx={{
                py: 1,
                px: 1.5,
                borderRadius: "8px",
                color: "rgba(255,255,255,0.6)",
                gap: 0,
                "&:hover": { bgcolor: "rgba(255,255,255,0.05)", color: "white" },
                transition: "all 0.15s",
              }}
            >
              <ListItemIcon sx={{ minWidth: 34, fontSize: 15, color: "rgba(255,255,255,0.25)" }}>
                {item.icon}
              </ListItemIcon>
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
            sx={{
              py: 1,
              px: 1.5,
              borderRadius: "8px",
              color: "rgba(255,255,255,0.6)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.05)", color: "white" },
              transition: "all 0.15s",
            }}
          >
            <ListItemIcon sx={{ minWidth: 34, fontSize: 15, color: "rgba(255,255,255,0.25)" }}>
              <GithubOutlined />
            </ListItemIcon>
            <ListItemText
              primary="GitHub"
              primaryTypographyProps={{ fontFamily: "'Ubuntu'", fontSize: "0.9rem" }}
            />
          </ListItem>
        </List>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mx: 2 }} />

        <Box sx={{ px: 2, py: 1.5 }}>
          <Box
            onClick={() => setMobileLangOpen(!mobileLangOpen)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1.5,
              py: 1,
              borderRadius: "8px",
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.6)",
              transition: "all 0.15s",
              "&:hover": { bgcolor: "rgba(255,255,255,0.04)", color: "white" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "0.875rem", fontFamily: "'Ubuntu'" }}>
              <GlobalOutlined style={{ fontSize: 15, color: "rgba(255,255,255,0.3)" }} />
              {currentLang.native}
            </Box>
            <DownOutlined
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.3)",
                transition: "transform 0.2s",
                transform: mobileLangOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Box>

          <Collapse in={mobileLangOpen}>
            <Box
              sx={{
                mt: 0.75,
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                overflow: "hidden",
                bgcolor: "rgba(0,0,0,0.2)",
              }}
            >
              {languages.map((lng, i) => {
                const active = i18n.language === lng.code;
                return (
                  <Box
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    sx={{
                      px: 1.5,
                      py: 0.9,
                      cursor: "pointer",
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: active ? ACCENT : "rgba(255,255,255,0.6)",
                      fontWeight: active ? 500 : 400,
                      bgcolor: active ? "rgba(46,211,183,0.06)" : "transparent",
                      borderTop: i !== 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      "&:hover": {
                        bgcolor: active ? "rgba(46,211,183,0.08)" : "rgba(255,255,255,0.04)",
                        color: active ? ACCENT : "white",
                      },
                      transition: "all 0.12s",
                    }}
                  >
                    {lng.native}
                    {active && <CheckOutlined style={{ fontSize: 12, color: ACCENT }} />}
                  </Box>
                );
              })}
            </Box>
          </Collapse>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mx: 2 }} />

        <Box sx={{ px: 2, py: 1.5 }}>
          <Button
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            startIcon={<SendOutlined style={{ fontSize: 14 }} />}
            sx={{
              color: ACCENT,
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "8px",
              border: "1px solid rgba(46,211,183,0.25)",
              bgcolor: "rgba(46,211,183,0.06)",
              py: 1,
              fontSize: "0.875rem",
              justifyContent: "center",
              "&:hover": {
                bgcolor: "rgba(46,211,183,0.12)",
                borderColor: "rgba(46,211,183,0.5)",
              },
              transition: "all 0.15s",
            }}
          >
            Join our Telegram
          </Button>
        </Box>
      </Drawer>
    </>
  );
}