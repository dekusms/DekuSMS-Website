import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Fade,
  useTheme,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import {
  CloudUploadOutlined,
  ApiOutlined,
  LockOutlined,
  GithubOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { languages } from "../i18n/languages";

const ACCENT = "#2ED3B7";

const NAVY = "#0D1B8E";
const SURFACE = "#F8FAFC";
const CARD = "#FFFFFF";

const TEXT_PRIMARY = "#0D1B8E";
const TEXT_SECONDARY = "#3D4E7A";
const TEXT_MUTED = "#7A8AB0";

const BORDER = "rgba(13,27,142,0.10)";

const LOGO_LIGHT = encodeURI("/DekuSMS/Logo/SVG/Full Logo/DekuSMS-Default.svg");
const LOGO_DARK = encodeURI(
  "/DekuSMS/Logo/SVG/Full Logo/DekuSMS-Dark Theme.svg",
);

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/dekusms" },
  { label: "Reddit", href: "https://reddit.com/r/dekusms" },
  { label: "Telegram", href: "https://t.me/deku_sms" },
];

export default function Landing() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const [langAnchor, setLangAnchor] = useState(null);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setLangAnchor(null);
  };

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const BG = theme.palette.mode === "dark" ? "#07141A" : "#EEF2F7";

  const isDark = theme.palette.mode === "dark";

  const features = [
    {
      icon: <LockOutlined />,
      text: t(
        "landing.pills.broker",
        "Provide end-to-end encrypted SMS messaging between DekuSMS users",
      ),
    },
    {
      icon: <CloudUploadOutlined />,
      text: t("landing.pills.cloud", "Forward incoming messages to the cloud"),
    },
    {
      icon: <ApiOutlined />,
      text: t(
        "landing.pills.encrypted",
        "Connect to messaging brokers like RMQ to turn your device into an SMS sending machine",
      ),
    },
  ];

  const actionTextSx = {
    p: 0,
    border: 0,
    background: "none",
    cursor: "pointer",
    fontSize: { xs: "1rem", md: "1.2rem" },
    fontWeight: 500,
    lineHeight: 1.6,
    whiteSpace: "nowrap",
    color: isDark ? "rgba(255,255,255,0.82)" : NAVY,
    textDecoration: "none",
    transition: "color 0.2s ease",
    "&:hover": {
      color: ACCENT,
    },
  };

  const glassSx = {
    background: isDark
      ? "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))"
      : "rgba(255,255,255,0.6)",
    backdropFilter: "blur(28px) saturate(140%)",
    WebkitBackdropFilter: "blur(18px) saturate(140%)",
    opacity: 1,
    border: isDark
      ? "1px solid rgba(255,255,255,0.10)"
      : `1px solid ${BORDER}`,
    boxShadow: isDark
      ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 32px rgba(0,0,0,0.25)"
      : "0 8px 24px rgba(13,27,142,0.06)",
  };

  const actions = (
    <>
      <Box
        component="button"
        type="button"
        onClick={(e) => setLangAnchor(e.currentTarget)}
        aria-label={t("topNav.language", "Language")}
        aria-haspopup="menu"
        sx={{
          ...actionTextSx,
          textDecoration: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        {currentLang.label}
      </Box>

      {SOCIAL_LINKS.map((link) => (
        <Box
          key={link.label}
          component="a"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={actionTextSx}
        >
          {link.label}
        </Box>
      ))}
    </>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: { md: "100vh" },
        bgcolor: BG,
        color: isDark ? "white" : TEXT_PRIMARY,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        component="div"
        aria-hidden
        sx={{
          position: "absolute",
          bottom: { xs: 0, md: -70 },
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "2000px",
          textAlign: "center",
          fontSize: {
            xs: "7rem",
            sm: "13rem",
            md: "15rem",
            lg: "20rem",
          },
          fontWeight: 500,
          lineHeight: 1,
          opacity: isDark ? 0.04 : 0.03,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          color: isDark ? "white" : NAVY,
        }}
      >
        {t("landing.backgroundTitle")}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: { md: "100%" },
          maxWidth: "1800px",
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 5, lg: 8 },
          py: { xs: 6, md: 5 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1fr) auto minmax(0, 1fr)",
          },
          gap: { xs: 5, md: 3, lg: 5 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ alignSelf: "start", maxWidth: { md: 520 }, mt: { md: 8 } }}>
          <Typography
            component="h1"
            sx={{
              m: 0,
              mb: 3,
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Box
              component="img"
              src={isDark ? LOGO_DARK : LOGO_LIGHT}
              alt={t("landing.title")}
              sx={{
                width: {
                  xs: 220,
                  sm: 280,
                  md: 260,
                  lg: 360,
                },
                height: "auto",
                display: "block",
              }}
            />
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "0.95rem",
                md: "1.1rem",
              },
              lineHeight: 1.8,
              color: isDark ? "rgba(255,255,255,0.72)" : TEXT_SECONDARY,
              mb: 3,
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            {t("landing.description1")}
          </Typography>

          <Stack spacing={1.5}>
            {features.map((feature, i) => (
              <Box
                key={i}
                sx={{
                  ...glassSx,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  borderRadius: "16px",
                  transition: "0.25s ease",

                  "&:hover": {
                    border: `1px solid ${ACCENT}55`,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ACCENT,
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: isDark ? "rgba(255,255,255,0.82)" : TEXT_SECONDARY,
                  }}
                >
                  {feature.text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: "20%",
                bottom: "20%",
                left: "10%",
                right: "10%",
                borderRadius: "50%",
                bgcolor: `${ACCENT}66`,
                boxShadow: `0 0 150px 90px ${ACCENT}${isDark ? "40" : "33"}`,
                filter: "blur(30px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            <Box
              component="img"
              src="/messages.png"
              alt={t("landing.imageAlt", "DekuSMS app")}
              sx={{
                position: "relative",
                zIndex: 1,
                display: "block",
                height: {
                  xs: "min(70vh, 520px)",
                  sm: "min(70vh, 600px)",
                  md: "min(72vh, 640px)",
                  lg: "min(84vh, 820px)",
                },
                width: "auto",

                filter: isDark
                  ? "drop-shadow(0 8px 16px rgba(0,0,0,0.5))"
                  : "drop-shadow(0 8px 24px rgba(13,27,142,0.12))",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "column" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-end" },
            gap: { xs: 4, md: 3 },
            minHeight: 0,
            mt: { xs: 0, md: 8 },
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "row", md: "column" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-end" },
              gap: { xs: 2.5, md: 1.5 },
            }}
          >
            {actions}
          </Stack>

          <Box
            sx={{
              ...glassSx,
              width: "100%",
              maxWidth: { md: 460 },
              p: { xs: 2.5, md: 3 },
              borderRadius: "16px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", md: "0.95rem" },
                lineHeight: 1.7,
                color: isDark ? "rgba(255,255,255,0.65)" : TEXT_MUTED,
                mb: 1.5,
              }}
            >
              {t("landing.description2")}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
                gap: 1,
                alignItems: "center",
                fontSize: "0.95rem",
                color: isDark ? "rgba(255,255,255,0.55)" : TEXT_MUTED,
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              {t("landing.moreInfo")}
              <Box
                component="a"
                href="https://smswithoutborders.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: ACCENT,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {t("landing.website")}
              </Box>
              &amp;
              <Box
                component="a"
                href="https://github.com/smswithoutborders"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: ACCENT,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontWeight: 500,
                }}
              >
                {t("landing.github")}
              </Box>
            </Typography>

            <Button
              href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
              startIcon={<DownloadOutlined style={{ fontSize: 24 }} />}
              sx={{
                bgcolor: ACCENT,
                color: "#07141A",
                fontWeight: 600,
                fontSize: { xs: "1.2rem", md: "1.35rem" },
                py: { xs: 1.8, md: 2.2 },
                borderRadius: "16px",
                textTransform: "none",
                boxShadow: `0 10px 40px ${ACCENT}55`,

                "&:hover": {
                  bgcolor: "#5FE9D0",
                  boxShadow: `0 12px 48px ${ACCENT}77`,
                },
              }}
            >
              {t("topNav.download")}
            </Button>

            <Button
              href="https://opencollective.com/dekusms"
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{
                mt: 1.5,
                py: 1.2,
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: isDark ? "white" : NAVY,
                border: isDark
                  ? "1px solid rgba(255,255,255,0.14)"
                  : "1px solid rgba(13,27,142,0.20)",
                background: isDark ? "rgba(255,255,255,0.03)" : "transparent",

                "&:hover": {
                  border: `1px solid ${ACCENT}55`,
                  background: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(13,27,142,0.04)",
                },
              }}
            >
              {t("topNav.donate")}
            </Button>
          </Box>
        </Box>
      </Box>

      <Menu
        anchorEl={langAnchor}
        open={Boolean(langAnchor)}
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
            selected={i18n.language === l.code}
          >
            {l.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
