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
} from "@ant-design/icons";
import LanguageIcon from "@mui/icons-material/Language";
import { Telegram } from "react-bootstrap-icons";
import { languages } from "../i18n/languages";

export default function Navbar({ toggleTheme }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const iconStyle = { fontSize: 18 };
  const GITHUB_URL = "https://github.com/dekusms";
  const TELEGRAM_URL = "https://t.me/deku_sms";
  const PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=com.afkanerd.deku";
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
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setLangAnchor(null);
  };
  const currentLang =
    languages.find((l) => l.code === lang) || languages[0];

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
                  rel="noopener noreferrer"
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
              <IconButton
                component="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: theme.palette.text.primary }}
              >
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

            <IconButton
              onClick={(e) => setLangAnchor(e.currentTarget)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: 1,
                borderRadius: "10px",
              }}
            >
              <LanguageIcon style={{ fontSize: 20 }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <span style={{ fontSize: "13px", fontWeight: 500 }}>
                  {currentLang.flag}
                </span>
                <span style={{ fontSize: "13px", fontWeight: 500 }}>
                  {currentLang.label}
                </span>
              </Box>
            </IconButton>

            {!isMobile && (
              <Button
                component="a"
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
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
                component="a"
                href={PLAYSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
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
            minWidth: 180,
            borderRadius: "12px",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {languages.map((l) => (
          <MenuItem
            key={l.code}
            onClick={() => changeLanguage(l.code)}
            selected={lang === l.code}
            sx={{
              display: "flex",
              gap: 1.5,
            }}
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}