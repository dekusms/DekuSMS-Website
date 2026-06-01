import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  useTheme,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import {
  CloudUploadOutlined,
  ApiOutlined,
  LockOutlined,
  SendOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const ACCENT = "#2ED3B7";

const NAVY = "#0D1B8E";
const SURFACE = "#F8FAFC";
const CARD = "#FFFFFF";

const TEXT_PRIMARY = "#0D1B8E";
const TEXT_SECONDARY = "#3D4E7A";
const TEXT_MUTED = "#7A8AB0";

const BORDER = "rgba(13,27,142,0.10)";

export default function Landing() {
  const { t } = useTranslation();
  const theme = useTheme();

  const BG =
    theme.palette.mode === "dark"
   ? "#07141A"
      : "#EEF2F7";

  const isDark = theme.palette.mode === "dark";

  const features = [
    {
      icon: <CloudUploadOutlined />,
      text: t(
        "landing.pills.cloud",
        "Forward incoming messages to the cloud"
      ),
    },
    {
      icon: <ApiOutlined />,
      text: t(
        "landing.pills.encrypted",
        "Connect to messaging brokers like RMQ to turn your device into an SMS sending machine"
      ),
    },
    {
      icon: <LockOutlined />,
      text: t(
        "landing.pills.broker",
        "Provide end-to-end encrypted SMS messaging between DekuSMS users"
      ),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: BG,
        color: isDark ? "white" : TEXT_PRIMARY,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >

      <Typography
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
          fontFamily: "'Unbounded', sans-serif",
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
          maxWidth: "1900px",
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          py: { xs: 8, md: 6 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.1fr 0.9fr",
          },
          alignItems: "center",
          gap: { xs: 6, md: 4, lg: 6 },
          position: "relative",
          zIndex: 2,
        }}
      >

        <Box>
          <Typography
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 700,
              lineHeight: 1.1,
              fontSize: {
                xs: "2rem",
                sm: "2.7rem",
                md: "3.2rem",
                lg: "4rem",
              },
              mb: 3,
              textAlign: {
                xs: "center",
                md: "left",
              },
              color: isDark ? "white" : TEXT_PRIMARY,
            }}
          >
            {t("landing.title")}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.95rem",
                md: "1rem",
              },
              lineHeight: 1.9,
              color: isDark
                ? "rgba(255,255,255,0.72)"
                : TEXT_SECONDARY,
              mb: 4,
              maxWidth: 720,
              mx: {
                xs: "auto",
                md: 0,
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            {t("landing.description1")}
          </Typography>

          <Stack spacing={2} sx={{ mb: 4 }}>
            {features.map((feature, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 2,
                  borderRadius: "20px",

                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : `1px solid ${BORDER}`,

                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : CARD,

                  backdropFilter: "blur(10px)",

                  boxShadow: isDark
                    ? "none"
                    : "0 4px 12px rgba(13,27,142,0.03)",

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
                    height: 42,
                    borderRadius: "12px",
                    bgcolor: `${ACCENT}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ACCENT,
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: isDark
                      ? "rgba(255,255,255,0.82)"
                      : TEXT_SECONDARY,
                  }}
                >
                  {feature.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.9rem",
                md: "0.95rem",
              },
              lineHeight: 1.8,
              color: isDark
                ? "rgba(255,255,255,0.55)"
                : TEXT_MUTED,
              mb: 2,
              maxWidth: 680,
              textAlign: {
                xs: "center",
                md: "left",
              },
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
              fontSize: "0.9rem",
              color: isDark
                ? "rgba(255,255,255,0.55)"
                : TEXT_MUTED,
              fontFamily: "'Ubuntu', sans-serif",
              mb: 2,
              lineHeight: 1.8,
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
              <GithubOutlined />
              {t("landing.github")}
            </Box>
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
              fontSize: "0.9rem",
              color: isDark
                ? "rgba(255,255,255,0.55)"
                : TEXT_MUTED,
              fontFamily: "'Ubuntu', sans-serif",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            <SendOutlined
              style={{
                color: ACCENT,
              }}
            />

            {t("landing.join")}

            <Box
              component="a"
              href="https://t.me/deku_sms"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Telegram
            </Box>

            &amp;

            <Box
              component="a"
              href="https://reddit.com/r/dekusms"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Reddit
            </Box>

            {t("landing.forUpdates")}
          </Typography>

\          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pli=1"
              target="_blank"
              variant="contained"
              sx={{
                bgcolor: ACCENT,
                fontWeight: 700,
                px: 4,
                py: 1.4,
                color: "#07141A",
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "0.95rem",
                fontFamily: "'Ubuntu', sans-serif",

                "&:hover": {
                  bgcolor: ACCENT,
                },
              }}
            >
              {t("topNav.download")}
            </Button>

            <Button
              href="https://opencollective.com/dekusms"
              target="_blank"
              variant="outlined"
              sx={{
                border: isDark
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "1px solid rgba(13,27,142,0.20)",

                color: isDark ? "white" : NAVY,

                px: 4,
                py: 1.4,
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                fontFamily: "'Ubuntu', sans-serif",

                width: {
                  xs: "100%",
                  sm: "auto",
                },

                "&:hover": {
                  border:
                    "1px solid rgba(46,211,183,0.3)",

                  bgcolor: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(13,27,142,0.04)",
                },
              }}
            >
              {t("topNav.donate")}
            </Button>
          </Stack>
        </Box>


        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
            minHeight: 600,
          }}
        >
          <Box
            sx={{
              width: {
                md: 240,
                lg: 390,
              },
              height: {
                md: 460,
                lg: 620,
              },
              transform: "rotate(10deg)",
            }}
          >
            <Box
              component="img"
              src="/Home.png"
              alt="app"
              sx={{
                width: "80%",

                filter: isDark
                  ? "drop-shadow(0 8px 16px rgba(0,0,0,0.5))"
                  : "drop-shadow(0 8px 24px rgba(13,27,142,0.12))",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

