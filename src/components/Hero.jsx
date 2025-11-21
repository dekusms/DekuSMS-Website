import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

export default function Hero({ show }) {
  if (!show) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        p: 4,
        bgcolor: "#0F2027",
        color: "#fff",
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        overflow: "hidden",
        fontFamily: "'Unbounded', sans-serif",
      }}
    >
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography variant="h6" fontWeight="medium" sx={{ fontSize: { xs: "1.2rem", sm: "2rem", md: "2.6rem" },
         letterSpacing: "4px", 
         color: "white",
          textTransform: "uppercase", 
          mb: 3, fontFamily: "'Unbounded', sans-serif" }} > 
          Secure SMS Messaging
           </Typography>
            <Typography sx={{ fontFamily: "'Ubuntu', sans-serif", 
              fontSize: { xs: "1rem", md: "1.2rem" } }} 
              color="#ccc" mb={2} > 
              DekuSMS is an SMS app. You can use it as a standalone app or as a Gateway client to send your incoming messages to your cloud server! 
              You can also configure it as a listener to your RabbitMQ server and transform your device into an SMS sending machine.
               </Typography>
                <Typography sx={{ fontFamily: "'Ubuntu', sans-serif",
                   fontSize: { xs: "1rem", md: "1.2rem" } }} color="#ccc" mb={4} > 
                  You and anyone else using Deku? Turn on E2EE messaging and send SMS messages using the Signal protocol.
           </Typography>


        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#2ED3B7", color: "#092c20", borderRadius: "50px" }}
          >
            Download
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#2ED3B7", color: "#2ED3B7", borderRadius: "50px" }}
          >
            Donate
          </Button>
        </Stack>
      </Box>

      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src="/deku.png"
          alt="Dekusms Logo"
          sx={{
            width: "100%",
            maxWidth: { xs: 100, sm: 120, md: 150, lg: 200 },
            height: "auto",
            transform: "rotate(15deg)",
            zIndex: 99
          }}
        />
      </Box>




      {/* Watermark */} 
<Typography
  variant="h1"
  sx={{
    position: "absolute",
    bottom: { xs: 20, md: 5 },
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: { xs: "1rem", sm: "1.5rem", md: "3rem", lg: "3.5rem" },
    fontWeight: 900,
    letterSpacing: "4px",
    color: "#12262fff",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    userSelect: "none",
    pointerEvents: "none",
    zIndex: 0,
    fontFamily: "'Unbounded', sans-serif",
  }}
>
  Secure SMS Messaging
</Typography>




    </Box>
  );
}
