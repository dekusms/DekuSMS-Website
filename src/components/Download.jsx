import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function DownloadSection() {
  return (
    <Box
      sx={{
        bgcolor: "#0F2027",
        color: "white",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontFamily: "'Unbounded'",
            opacity: 0.05,
            mb: 4,
            letterSpacing: 2,
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "3rem", md: "8rem" },
          }}
        >
          DOWNLOAD
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={10}
          sx={{ width: "100%", alignItems: { xs: "center", md: "flex-start" } }}
        >
          <Box flex={1} mt={4} sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xs: "100%", md: "80%" } }}>
            <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
              DekuSMS app is available on several platforms, you can download it
              and use as your default SMS app.
            </Typography>
          </Box>

          <Box
            flex={1.5}
            sx={{ color: "white", width: { xs: "100%", md: "auto" }, display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Stack spacing={4} sx={{ width: { xs: "100%", sm: "80%", md: "70%" } }}>
              <DownloadCard logo="/playstore.webp" title="Google Play Store" subtitle="Get it on Play Store" />
              <DownloadCard logo="/fdroid.png" title="F-Droid" subtitle="Get it on F-Droid" />
              <DownloadCard logo="/github.png" title="GitHub" subtitle="Get it on GitHub" />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

function DownloadCard({ logo, title, subtitle }) {
  return (
    <Card
      sx={{
        bgcolor: "black",
        borderRadius: "14px",
        border: "2px solid #00d6b4",
        px: 2,
        py: 1,
        width: { xs: "100%", sm: "90%", md: "80%" },
      }}
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
          <img src={logo} alt="logo" style={{ width: 40, height: 40 }} />

          <Box>
            <Typography variant="h6" fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              {subtitle}
            </Typography>
          </Box>
        </Stack>

        <IconButton sx={{ color: "white" }}>
          <OpenInNewIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
