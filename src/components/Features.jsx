import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Features() {
  const featureList = [
    {
      title: "Forward SMS to the Cloud – Even When Offline",
      desc: "Incoming SMS messages can be forwarded to your cloud server using HTTP(s), SMTP, or sFTP.",
    },
    {
      title: "Familiar Google Messages Design",
      desc: "A clean, familiar look built around the design of Google Messages for an effortless experience.",
    },
    {
      title: "End-to-End Encrypted SMS",
      desc: "Send and receive encrypted SMS with forward secrecy using the Signal protocol.",
    },
    {
      title: "RabbitMQ Integration",
      desc: "Send SMS messages directly from your device via RabbitMQ for reliable server communication.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0F2027",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 6,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {featureList.map((feature, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 0 10px rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                {feature.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
