import React from "react";
import { Box, Typography, Stack, Card, CardContent, CardActionArea, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function DownloadSection() {
  const { t } = useTranslation();

  const downloads = [
    {
      logo: "/playstore.webp",
      title: t("downloads.playstore.title"),
      subtitle: t("downloads.playstore.subtitle"),
      link: "https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share"
    },
    {
      logo: "/fdroid.png",
      title: t("downloads.fdroid.title"),
      subtitle: t("downloads.fdroid.subtitle"),
      link: "https://f-droid.org/docs/Reproducible_Builds/"
    },
    {
      logo: "/github.png",
      title: t("downloads.github.title"),
      subtitle: t("downloads.github.subtitle"),
      link: "https://github.com/dekusms/DekuSMS-Android?tab=readme-ov-file"
    }
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0F2027",
        color: "white",
        minHeight: "100vh",
        py: { xs: 8, md: 20 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          fontFamily: "'Unbounded'",
          opacity: 0.05,
          mb: 4,
          letterSpacing: 2,
          textAlign: { xs: "center", md: "left" },
          fontSize: { xs: "3rem", md: "6rem" },
        }}
      >
        {t("downloads.heading")}
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={10}
        alignItems="center"
      >
        <Box
          flex={1}
          sx={{
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "80%" },
          }}
        >
          <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
            {t("downloads.description")}
          </Typography>
        </Box>

        <Box flex={1.5} sx={{ width: "100%" }}>
          <Stack spacing={4}>
            {downloads.map((d, i) => (
              <DownloadCard
                key={i}
                logo={d.logo}
                title={d.title}
                subtitle={d.subtitle}
                link={d.link}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

function DownloadCard({ logo, title, subtitle, link }) {
  return (
    <Card
      sx={{
        bgcolor: "black",
        borderRadius: "16px",
        border: "2px solid #00d6b4",
        width: { xs: "100%", sm: "90%", md: "80%" },
        overflow: "hidden",
        transition: "all 280ms cubic-bezier(.16,1,.3,1)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 40px rgba(0,214,180,0.25)",
        },
      }}
    >
      <CardActionArea
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ px: 2, py: 1.5 }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <img
              src={logo}
              alt={`${title} logo`}
              style={{ width: 40, height: 40 }}
            />

            <Box>
              <Typography variant="h6" fontWeight={600}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                {subtitle}
              </Typography>
            </Box>
          </Stack>

          <IconButton
            sx={{
              color: "white",
              transition: "transform 200ms ease",
              "&:hover": { transform: "translateX(4px)" },
            }}
          >
            <OpenInNewIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
