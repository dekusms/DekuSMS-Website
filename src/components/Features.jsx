import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("features.forwardTitle"),
      text: t("features.forwardText"),
    },
    {
      title: t("features.googleDesignTitle"),
      text: t("features.googleDesignText"),
    },
    {
      title: t("features.rabbitMQTitle"),
      text: t("features.rabbitMQText"),
    },
    {
      title: t("features.e2eeTitle"),
      text: t("features.e2eeText"),
    },
  ];

  return (
    <Box
      sx={{
        color: "white",
        py: { xs: 8, md: 20 },
        px: { xs: 3, md: 10 },
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        bgcolor: "#0F2027",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          fontFamily: "'Unbounded'",
          opacity: 0.05,
          mb: 4,
          letterSpacing: 2,
          textAlign: { xs: "left", md: "left" },
          fontSize: { xs: "3rem", md: "6rem" },
        }}
      >
        {t("features.heading")}
      </Typography>

      <Box mt={6}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ mb: 6 }}
        >
          {features.slice(0, 2).map((f, i) => (
            <FeatureItem key={i} title={f.title} text={f.text} />
          ))}
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          {features.slice(2).map((f, i) => (
            <FeatureItem key={i} title={f.title} text={f.text} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

function FeatureItem({ title, text }) {
  return (
    <Box flex={1}>
      <Typography
        variant="h6"
        sx={{ color: "#2ED3B7", fontWeight: 600, mb: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ opacity: 0.75, lineHeight: 1.8, whiteSpace: "pre-line" }}
      >
        {text}
      </Typography>
    </Box>
  );
}
