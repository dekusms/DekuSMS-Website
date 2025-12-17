import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardActionArea,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function DownloadSection() {
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
        DOWNLOAD
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
            DekuSMS app is available on several platforms. Download it and use it
            as your default SMS app.
          </Typography>
        </Box>

        <Box flex={1.5} sx={{ width: "100%" }}>
          <Stack spacing={4}>
            <DownloadCard
              logo="/playstore.webp"
              title="Google Play Store"
              subtitle="Get it on Play Store"
              link="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share"
            />

            <DownloadCard
              logo="/fdroid.png"
              title="F-Droid"
              subtitle="Get it on F-Droid"
              link="https://f-droid.org/docs/Reproducible_Builds/"
            />

            <DownloadCard
              logo="/github.png"
              title="GitHub"
              subtitle="Get it on GitHub"
              link="https://github.com/dekusms/DekuSMS-Android?tab=readme-ov-file"
            />
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
      {/* 🔗 Whole card is clickable */}
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

          {/* Arrow still visible & clickable */}
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
