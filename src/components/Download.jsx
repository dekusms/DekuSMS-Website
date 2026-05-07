import React from "react";
import {
  Box, Typography, Stack, Card,
  CardContent, CardActionArea, IconButton
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ArrowRightOutlined, SendOutlined } from "@ant-design/icons";

const ACCENT = "#2ED3B7";
const BG = "#0F2027";

function DownloadCard({ icon, iconBg, title, subtitle, link }) {
  return (
    <Card
      sx={{
        bgcolor: "rgba(0,0,0,0.5)",
        borderRadius: "16px",
        border: "1.5px solid rgba(0,214,180,0.25)",
        width: "100%",
        maxWidth: { xs: "100%", md: "600px" },
        overflow: "hidden",
        transition: "all 0.28s cubic-bezier(.16,1,.3,1)",
        "&:hover": {
          transform: "translateY(-4px)",
          border: "1.5px solid rgba(0,214,180,0.6)",
          boxShadow: "0 20px 48px rgba(0,214,180,0.15)",
        },
      }}
    >
      <CardActionArea
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 2.5 } }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 0,
            color: "white",
            gap: 2,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1 }}>
            <Box
              sx={{
                width: { xs: 44, md: 52 },
                height: { xs: 44, md: 52 },
                borderRadius: "14px",
                bgcolor: iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexShrink: 0,
              }}
            >
              {icon}
            </Box>

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  color: "white",
                  mb: 0.5,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  opacity: 0.55,
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: { xs: "0.8rem", md: "0.875rem" },
                  lineHeight: 1.4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Stack>

          <IconButton
            sx={{
              color: "rgba(255,255,255,0.5)",
              flexShrink: 0,
              transition: "all 0.2s",
              "&:hover": { color: ACCENT, transform: "translate(2px,-2px)" },
            }}
            disableRipple
          >
            <ArrowRightOutlined style={{ fontSize: 16 }} />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function DownloadSection() {
  const { t } = useTranslation();

  const downloads = [
    {
      icon: (
        <img
          src="/playstore.webp"
          alt="Google Play"
          style={{ width: 28, height: 28, objectFit: "contain" }}
        />
      ),
      iconBg: "linear-gradient(135deg, #4285f4, #34a853)",
      title: t("downloads.playstore.title", "Google Play Store"),
      subtitle: t("downloads.playstore.subtitle", "Stable release — recommended for most users"),
      link: "https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share",
    },
    {
      icon: (
        <img
          src="/fdroid.png"
          alt="F-Droid"
          style={{ width: 28, height: 28, objectFit: "contain" }}
        />
      ),
      iconBg: "linear-gradient(135deg, #1b6ca8, #0d4f7c)",
      title: t("downloads.fdroid.title", "F-Droid"),
      subtitle: t("downloads.fdroid.subtitle", "Reproducible builds — for privacy-conscious users"),
      link: "https://f-droid.org/docs/Reproducible_Builds/",
    },
    {
      icon: (
        <img
          src="/github.png"
          alt="GitHub"
          style={{ width: 28, height: 28, objectFit: "contain" }}
        />
      ),
      iconBg: "linear-gradient(135deg, #2d333b, #161b22)",
      title: t("downloads.github.title", "GitHub"),
      subtitle: t("downloads.github.subtitle", "Build from source — for developers and contributors"),
      link: "https://github.com/dekusms/DekuSMS-Android?tab=readme-ov-file",
    },
    {
      icon: <SendOutlined style={{ fontSize: 24, color: "white" }} />,
      iconBg: "linear-gradient(135deg, #229ED9, #1a7fb5)",
      title: "Join our Telegram",
      subtitle: "Updates, support and community discussion",
      link: "https://t.me/deku_sms",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: BG,
        color: "white",
        minHeight: "100vh",
        py: { xs: 10, md: 12 },
        px: { xs: 2.5, sm: 4, md: 8, lg: 12 },
        position: "relative",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: 8, md: 20 },
          left: { xs: 16, md: 64 },
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
          opacity: 0.04,
          letterSpacing: 2,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {t("downloads.heading", "Download")}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,211,183,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 5, md: 10 }}
        alignItems={{ xs: "flex-start", md: "center" }}
        sx={{ width: "100%", position: "relative", zIndex: 2 }}
      >
        <Box flex={1} sx={{ maxWidth: { xs: "100%", md: 900 } }}>
          <Typography
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "0.7rem",
              color: ACCENT,
              letterSpacing: 3,
              textTransform: "uppercase",
              mb: 2,
              opacity: 0.8,
            }}
          >
            Get the app
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.4rem" },
              color: "white",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {t("downloads.heading", "Download DekuSMS")}
          </Typography>

          <Typography
            sx={{
              opacity: 0.7,
              lineHeight: 1.8,
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: { xs: "0.9rem", md: "1rem" },
              mb: 3,
            }}
          >
            {t("downloads.description", "Available on Google Play, F-Droid, and GitHub. All versions are open source and freely available. Choose the platform that works best for you.")}
          </Typography>

          <Stack direction="row" spacing={3}>
            {[
              { value: "5K+", label: "Downloads" },
              { value: "3.4★", label: "Rating" },
            ].map((s) => (
              <Box key={s.label}>
                <Typography
                  sx={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: "1.3rem",
                    color: ACCENT,
                    fontWeight: 500,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box flex={1.5} sx={{ width: "100%", maxWidth: { xs: "100%", md: 900 } }}>
          <Stack spacing={5}>
            {downloads.map((d, i) => (
              <DownloadCard key={i} {...d} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
