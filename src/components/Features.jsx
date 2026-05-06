import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RouterIcon from "@mui/icons-material/Router";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";

const ACCENT = "#2ed3b7e1";
const BG = "#0F2027";

function FeatureCard({ icon, title, text, index }) {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: { xs: "100%", sm: "calc(50% - 24px)", md: "calc(25% - 24px)" },
        position: "relative",
        p: { xs: 2.5, md: 3 },
        borderRadius: "16px",
        border: "1px solid rgba(46,211,183,0.12)",
        bgcolor: "rgba(255,255,255,0.02)",
        transition: "all 0.28s cubic-bezier(.16,1,.3,1)",
        overflow: "hidden",
        "&:hover": {
          border: "1px solid rgba(46,211,183,0.3)",
          bgcolor: "rgba(46,211,183,0.04)",
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          bgcolor: ACCENT,
          opacity: 0,
          transition: "opacity 0.28s",
        },
        "&:hover::before": {
          opacity: 1,
        },
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 16,
          right: 20,
          fontFamily: "'Unbounded', sans-serif",
          fontSize: "0.65rem",
          color: "rgba(46,211,183,0.3)",
          letterSpacing: 1,
        }}
      >
        0{index + 1}
      </Typography>

      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          bgcolor: "rgba(46,211,183,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2.5,
          color: ACCENT,
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          color: ACCENT,
          fontWeight: 600,
          fontSize: { xs: "0.95rem", md: "1rem" },
          mb: 1.5,
          fontFamily: "'Ubuntu', sans-serif",
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          opacity: 0.7,
          lineHeight: 1.8,
          fontSize: { xs: "0.85rem", md: "0.9rem" },
          fontFamily: "'Ubuntu', sans-serif",
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <ForwardToInboxIcon />,
      title: t("features.forwardTitle", "SMS message forwarding"),
      text: t("features.forwardText", "Forward messages to online platforms using only SMS. When internet goes down, DekuSMS keeps you connected through a trusted relay gateway."),
    },
    {
      icon: <DesignServicesIcon />,
      title: t("features.googleDesignTitle", "Google Material Design"),
      text: t("features.googleDesignText", "A clean, intuitive interface built with Google's Material Design principles. Simple enough for anyone, powerful enough for everyone."),
    },
    {
      icon: <RouterIcon />,
      title: t("features.rabbitMQTitle", "RabbitMQ message queuing"),
      text: t("features.rabbitMQText", "Messages are queued and delivered reliably. No message is lost — even if connectivity is interrupted mid-delivery."),
    },
    {
      icon: <EnhancedEncryptionIcon />,
      title: t("features.e2eeTitle", "End-to-end encryption"),
      text: t("features.e2eeText", "Every message is encrypted before it leaves your device. Your conversations are private — even the relay cannot read them."),
    },
  ];

  return (
    <Box
      sx={{
        color: "white",
        minHeight: "100vh",
        py: { xs: 10, md: 12 },
        px: { xs: 2.5, sm: 4, md: 8, lg: 12 },
        bgcolor: BG,
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
        {t("features.heading", "Features")}
      </Typography>

      <Box sx={{ width: "100%", position: "relative", zIndex: 2 }}>
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: { xs: "0.7rem", md: "0.75rem" },
              color: ACCENT,
              letterSpacing: 3,
              textTransform: "uppercase",
              mb: 2,
              opacity: 0.8,
            }}
          >
            Why DekuSMS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.4rem" },
              color: "white",
              maxWidth: 600,
              lineHeight: 1.2,
            }}
          >
            Built different. Built to last.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          flexWrap="wrap"
          gap={{ xs: 2, md: 3 }}
          sx={{ alignItems: "stretch" }}
        >
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              index={i}
              icon={f.icon}
              title={f.title}
              text={f.text}
            />
          ))}
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={0}
          divider={<Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.08)" }} />}
          sx={{
            mt: { xs: 5, md: 7 },
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            overflow: "hidden",
            bgcolor: "rgba(255,255,255,0.02)",
          }}
        >
          {[
            { value: "100%", label: "Open source" },
            { value: "E2EE", label: "Encrypted" },
            { value: "Free", label: "Forever" },
          ].map((stat, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                py: { xs: 2, md: 2.5 },
                px: { xs: 2, md: 3 },
                textAlign: "center",
                borderBottom: { xs: "1px solid rgba(255,255,255,0.06)", sm: "none" },
                "&:last-child": { borderBottom: "none" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  fontWeight: 500,
                  color: ACCENT,
                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}