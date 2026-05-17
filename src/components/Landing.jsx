import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CloudUploadOutlined,
  ApiOutlined,
  LockOutlined,
  SendOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const ACCENT = "#2ED3B7";
const BG = "#0F2027";

export default function Landing() {
  const { t } = useTranslation();

  const features = [
    {
      icon: (
        <CloudUploadOutlined
          style={{ fontSize: 16, color: ACCENT }}
        />
      ),
      text: t("landing.pills.cloud", "Forward incoming messages to the cloud"),
    },
    {
      icon: (
        <ApiOutlined
          style={{ fontSize: 16, color: ACCENT }}
        />
      ),
      text: t("landing.pills.encrypted", "Connect to messaging brokers like RMQ to turn your device into an SMS sending machine"),
    },
    {
      icon: (
        <LockOutlined
          style={{ fontSize: 16, color: ACCENT }}
        />
      ),
      text: t("landing.pills.broker", "Provide end-to-end encrypted SMS messaging between DekuSMS users"),
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: BG,
        color: "white",
        minHeight: "100vh",
        py: { xs: 10, md: 0 },
        px: { xs: 2.5, sm: 4, md: 8, lg: 12 },
        pt: { xs: 10, md: 0 },
        pb: { xs: 10, md: 0 },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: -20, md: -50 },
          left: { xs: 16, md: 64 },
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 700,
          fontSize: {
            xs: "5.5rem",
            sm: "8rem",
            md: "15rem",
          },
          opacity: 0.04,
          letterSpacing: 2,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          color: "white",
        }}
      >
        {t("landing.backgroundTitle")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          gap: { xs: 5, md: 8 },
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <Box
          flex={{ xs: 1, md: 1.7, lg: 2 }}
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
            maxWidth: { md: "65%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily:
                "'Unbounded', sans-serif",
              fontWeight: 700,
              lineHeight: 1.1,
              fontSize: {
                xs: "1.6rem",
                sm: "2rem",
                md: "2.6rem",
                lg: "3.2rem",
              },
              mb: 2,
              color: "white",
            }}
          >
            {t("landing.title")}
          </Typography>

          <Typography
            sx={{
              opacity: 0.75,
              lineHeight: 1.75,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
              mb: 2,
              maxWidth: 720,
              mx: { xs: "auto", md: 0 },
            }}
          >
            {t("landing.description1")}
          </Typography>

          <Stack
            spacing={1.5}
            sx={{
              mb: 3,
              maxWidth: 600,
              mx: { xs: "auto", md: 0 },
            }}
          >
            {features.map((f, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  px: 2,
                  py: 1.25,
                  borderRadius: "10px",
                  border:
                    "1px solid rgba(46,211,183,0.12)",
                  bgcolor:
                    "rgba(46,211,183,0.03)",
                  textAlign: "left",
                }}
              >
                <Box
                  sx={{
                    mt: 0.3,
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily:
                      "'Ubuntu', sans-serif",
                    fontSize: {
                      xs: "0.85rem",
                      md: "0.9rem",
                    },
                    opacity: 0.8,
                    lineHeight: 1.6,
                  }}
                >
                  {f.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Typography
            sx={{
              opacity: 0.55,
              lineHeight: 1.75,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.875rem",
                md: "0.95rem",
              },
              maxWidth: 680,
              mx: { xs: "auto", md: 0 },
              mb: 1.5,
            }}
          >
            {t("landing.description2")}
          </Typography>

          <Typography
            sx={{
              mb: 2,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.85rem",
                md: "0.9rem",
              },
              color: "rgba(255,255,255,0.55)",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              flexWrap: "wrap",
            }}
          >
            {t("landing.moreInfo")}{" "}
            <Box
              component="a"
              href="https://smswithoutborders.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
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
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.4,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <GithubOutlined
                style={{ fontSize: 13 }}
              />
              {t("landing.github")}
            </Box>
          </Typography>

          <Typography
            sx={{
              mb: 3,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: {
                xs: "0.85rem",
                md: "0.9rem",
              },
              color: "rgba(255,255,255,0.55)",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              flexWrap: "wrap",
            }}
          >
            <SendOutlined
              style={{
                fontSize: 13,
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
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
                transition: "opacity 0.15s",
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
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
                transition: "opacity 0.15s",
              }}
            >
              Reddit
            </Box>
            {t("landing.forUpdates")}
          </Typography>

        
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            sx={{
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pli=1"
              target="_blank"
              variant="contained"
              sx={{
                bgcolor: ACCENT,
                color: BG,
                px: { xs: 3, md: 4 },
                py: 1.3,
                fontSize: {
                  xs: "0.875rem",
                  md: "0.95rem",
                },
                fontFamily:
                  "'Ubuntu', sans-serif",
                fontWeight: 500,
                borderRadius: "24px",
                textTransform: "none",
                width: {
                  xs: "100%",
                  sm: "auto",
                },
                "&:hover": {
                  bgcolor: "#25b8a0",
                  boxShadow:
                    "0 6px 24px rgba(46,211,183,0.35)",
                  transform:
                    "translateY(-1px)",
                },
                transition: "all 0.2s",
              }}
            >
              {t("topNav.download")}
            </Button>

            <Button
              href="https://opencollective.com/dekusms"
              target="_blank"
              variant="outlined"
              sx={{
                borderColor:
                  "rgba(46,211,183,0.5)",
                color: "white",
                px: { xs: 3, md: 4 },
                py: 1.3,
                fontSize: {
                  xs: "0.875rem",
                  md: "0.95rem",
                },
                fontFamily:
                  "'Ubuntu', sans-serif",
                fontWeight: 400,
                borderRadius: "24px",
                textTransform: "none",
                width: {
                  xs: "100%",
                  sm: "auto",
                },
                "&:hover": {
                  borderColor: ACCENT,
                  bgcolor:
                    "rgba(46,211,183,0.08)",
                  transform:
                    "translateY(-1px)",
                },
                transition: "all 0.2s",
              }}
            >
              {t("topNav.donate")}
            </Button>
          </Stack>
        </Box>

        {/* Right side*/}

        {/* Right side */}
<Box
  flex={{ md: 1 }}
  sx={{
    width: "100%",
    position: "relative",
    display: {
      xs: "none", // hide on phones
      md: "flex", // show on tablets/desktops
    },
    justifyContent: "center",
    alignItems: "center",
    minHeight: {
      md: 600,
    },
  }}
>
  <Box
    sx={{
      width: { md: 240, lg: 390 },
      height: { md: 460, lg: 620 },
      borderRadius: "26px",
      transform: "rotate(10deg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 2,
      position: "relative",
      overflow: "visible",
    }}
  >
    <Box
      component="img"
      src="/Home.png"
      alt={t("landing.imageAlt", "DekuSMS app")}
      sx={{
        width: "80%",
        display: "block",
        position: "relative",
        zIndex: 2,
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
      }}
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  </Box>
</Box>
      </Box>
    </Box>
  );
}