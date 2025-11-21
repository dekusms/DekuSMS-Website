import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Download({ show }) {
  if (!show) return null;

  const downloads = [
    {
      name: "Google Play Store",
      icon: "./playstore.webp",
      description: "Get the app from Google Play Store.",
      link: "#",
    },
    {
      name: "F-Droid",
      icon: "./fdroid.png",
      description: "Get the app from F-Droid.",
      link: "#",
    },
    {
      name: "GitHub",
      icon: "/github.png",
      description: "Download the source code and install manually.",
      link: "#",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0F2027",
        color: "#fff",
        p: { xs: 3, sm: 5, md: 8 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h1"
        sx={{
          mt: 10,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "5rem" },
          fontWeight: 900,
          letterSpacing: "8px",
          color: "#142C36",
          textTransform: "uppercase",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
          fontFamily: "'Unbounded', sans-serif",
        }}
      >
        Downloads
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          mt: 6,
        }}
      >

        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 8 }
          }}
        >
          <Typography variant="body1" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>
            DekuSMS app is available on several platforms. You can download it and use it as your default SMS app.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 10 },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Stack spacing={3} sx={{ width: "100%" }}>
            {downloads.map((item) => (
              <Button
                key={item.name}
                variant="contained"
                href={item.link}
                target="_blank"
                sx={{
                  background: "#030908ff",
                  border: "1px solid #2fd7aaff",
                  color: "#fff",
                  "&:hover": { background: "#1AA893" },
                  fontFamily: "'Unbounded', sans-serif",
                  fontWeight: 700,
                  width: { xs: "100%", sm: "90%", md: "100%" },
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 3,
                  py: 1.5,
                  minHeight: 70,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.name}
                    sx={{ width: 40, height: 40, objectFit: "contain" }}
                  />
                </Box>

                <Box sx={{ flex: 1, ml: 2, textAlign: "left" }}>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "1rem", color: "#dceff7ff" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#dceff7ff" }}>
                    {item.description}
                  </Typography>
                </Box>

                <ArrowForwardIcon />
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
