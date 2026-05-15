import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CloudUploadOutlined, ApiOutlined, LockOutlined, SendOutlined, GithubOutlined } from "@ant-design/icons";

const ACCENT = "#2ED3B7";
const BG = "#0F2027";

export default function Landing() {
  const { t } = useTranslation();

  const pills = [
    { icon: <CloudUploadOutlined style={{ fontSize: 14 }} />, label: t("landing.pills.cloud", "Cloud forwarding") },
    { icon: <LockOutlined style={{ fontSize: 14 }} />, label: t("landing.pills.encrypted", "End-to-end encrypted") },
    { icon: <ApiOutlined style={{ fontSize: 14 }} />, label: t("landing.pills.broker", "Broker ready") },
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
          fontSize: { xs: "5.5rem", sm: "8rem", md: "15rem" },
          opacity: 0.04,
          letterSpacing: 2,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          color: "white",
        }}
      >
        {t("landing.backgroundTitle", "DekuSMS")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
    textAlign: { xs: "center", md: "left" },
    maxWidth: { md: "65%" },
  }}
>  

          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 700,
              lineHeight: 1.1,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.6rem", lg: "3.2rem" },
              mb: 3,
              color: "white",
            }}
          >
            {t("landing.title", "DekuSMS")}
          </Typography>

          <Typography
            sx={{
              opacity: 0.75,
              lineHeight: 1.75,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "0.9rem", md: "1rem" },
              mb: 1.5,
              maxWidth: 720,
              mx: { xs: "auto", md: 0 },
            }}
          >
            {t("landing.description1", "An open source SMS app built for resilience — forward messages to the cloud, connect to messaging brokers, and communicate end-to-end encrypted even without internet.")}
          </Typography>

          <Typography
            sx={{
              opacity: 0.55,
              lineHeight: 1.75,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "0.875rem", md: "0.95rem" },
              maxWidth: 680,
              mx: { xs: "auto", md: 0 },
            }}
          >
            {t("landing.description2", "Now part of the SMSWithoutBorders endeavour — offering feature updates and maintenance for core libraries.")}
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              mt: 3,
              mb: 3,
              flexWrap: "wrap",
              gap: 1,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {pills.map((pill) => (
              <Box
                key={pill.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 1.5,
                  py: 0.6,
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  bgcolor: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.78rem",
                  fontFamily: "'Ubuntu', sans-serif",
                }}
              >
                {pill.icon}
                {pill.label}
              </Box>
            ))}
          </Stack>

          <Typography
            sx={{
              mb: 1.5,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              color: "rgba(255,255,255,0.55)",
              justifyContent: { xs: "center", md: "flex-start" },
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              flexWrap: "wrap",
            }}
          >
            <SendOutlined style={{ fontSize: 13, color: ACCENT }} />
            {t("landing.join", "Join the community on")}{" "}
            <Box
              component="a"
              href="https://t.me/deku_sms"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                transition: "opacity 0.15s",
              }}
            >
              Telegram
            </Box>
            {" "}&amp;{" "}
            <Box
              component="a"
              href="https://reddit.com/r/dekusms"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                transition: "opacity 0.15s",
              }}
            >
              Reddit
            </Box>
            {" "}{t("landing.forUpdates", "for updates & support")}
          </Typography>

          <Typography
            sx={{
              mb: 3,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              color: "rgba(255,255,255,0.55)",
              justifyContent: { xs: "center", md: "flex-start" },
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              flexWrap: "wrap",
            }}
          >
            {t("landing.moreInfo", "More about SMSWithoutBorders:")}{" "}
            <Box
              component="a"
              href="https://smswithoutborders.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: ACCENT,
                fontWeight: 500,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {t("landing.website", "Website")}
            </Box>
            {" "}&amp;{" "}
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
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <GithubOutlined style={{ fontSize: 13 }} /> {t("landing.github", "GitHub")}
            </Box>
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
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
                fontSize: { xs: "0.875rem", md: "0.95rem" },
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                borderRadius: "24px",
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  bgcolor: "#25b8a0",
                  boxShadow: "0 6px 24px rgba(46,211,183,0.35)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s",
              }}
            >
              {t("topNav.download", "Download")}
            </Button>

            <Button
              href="https://opencollective.com/dekusms"
              target="_blank"
              variant="outlined"
              sx={{
                borderColor: "rgba(46,211,183,0.5)",
                color: "white",
                px: { xs: 3, md: 4 },
                py: 1.3,
                fontSize: { xs: "0.875rem", md: "0.95rem" },
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 400,
                borderRadius: "24px",
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  borderColor: ACCENT,
                  bgcolor: "rgba(46,211,183,0.08)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s",
              }}
            >
              {t("topNav.donate", "Donate")}
            </Button>
          </Stack>
        </Box>

{/* images section */}

<Box
  flex={{ xs: 1, md: 0.8, lg: 0.7 }}
  display="flex"
  justifyContent="center"
  alignItems="center"
  sx={{
    position: "relative",
    zIndex: 2,
    py: { xs: 2, md: 0 },
  }}
>

          <Box
            sx={{
              width: { xs: 160, sm: 200, md: 240, lg: 390 },
              height: { xs: 300, sm: 380, md: 460, lg: 620 },
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