import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0F2027",
        color: "#fff",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%", px: { xs: 2, sm: 4, md: 6 } }}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
  
          <Box flex={1}>
            <Typography variant="h3" fontWeight={700} mb={2}>
              Secure SMS Messaging
            </Typography>
            <Typography color="#ccc" mb={4}>
              DekuSMS is an SMS app. You can use it as a standalone app or 
              as a Gateway client to send your incoming messages to your cloud server! 
              You can also configure it as a listener to your RabbitMQ server and 
              transform your device into an SMS sending machine.
            </Typography>

            <Typography color="#ccc" mb={4}>
              You and anyone else using Deku? Turn on E2EE messaging and send SMS messages 
              using the Signal protocol.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{ bgcolor: "#1976d2" }}>
                Download
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: "#1976d2", color: "#1976d2" }}
              >
                Donate
              </Button>
            </Stack>
          </Box>

          <Box flex={1} display="flex" justifyContent="center">
            <img
              src="/Home.png"
              alt="Hero visual"
              style={{
                width: "100%",
                maxWidth: "200px",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
            />
          </Box>
        </Stack>
      </Box>


      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          bottom: "20px", 
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "5rem", sm: "10rem", md: "10rem" },
          fontWeight: 900,
          letterSpacing: "10px",
          color: "rgba(255, 255, 255, 0.02)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        Secure SMS Messaging with DekuSMS
      </Typography>
    </Box>
  );
}
