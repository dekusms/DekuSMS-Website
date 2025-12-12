import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

export default function Landing() {

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
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0, // BEHIND EVERYTHING
          pb: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 400,
            color: "#142C36", // watermark tone
            letterSpacing: 2,
            fontFamily: "'Unbounded'",
            fontSize: { xs: "3rem", md: "8rem" },
            opacity: 0.6, // watermark effect
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Secure sms messaging
        </Typography>
      </Box>

      {/* MAIN CONTENT — in front */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
          position: "relative",
          zIndex: 2, // ABOVE THE WATERMARK
        }}
      >
        <Box flex={1.2}>
          <Typography
            variant="h2"
            fontWeight={600}
            gutterBottom
            sx={{
              fontFamily: "'Unbounded'",
              lineHeight: 1.1,
              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.2rem",
                lg: "3.8rem",
              },
              mb: 3,
            }}
          >
            SECURE SMS MESSAGING
          </Typography>

          {/* Paragraph 1 */}
          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              lineHeight: 1.7,
              fontFamily: "'Ubuntu'",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            DekuSMS is an SMS app. You can use it as a standalone app or as a
            Gateway client to send your incoming messages to your cloud server!
            You can also configure it as a listener to your RabbitMQ server and
            transform your device into an SMS sending machine.
          </Typography>

          <br />

          {/* Paragraph 2 */}
          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              lineHeight: 1.7,
              fontFamily: "'Ubuntu'",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            You and anyone else using Deku? Turn on E2EE messaging and send SMS
            messages using the Signal protocol.
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            mt={4}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00d6b4",
                color: "black",
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.4 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                width: { xs: "100%", sm: "auto" },
                borderRadius: 20,
              }}
            >
              Download App
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#00d6b4",
                color: "white",
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.4 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                width: { xs: "100%", sm: "auto" },
                borderRadius: 20,
              }}
            >
              Donate
            </Button>
          </Stack>
        </Box>

        {/* RIGHT SIDE IMAGE */}
 <Box
  flex={1}
  display="flex"
  justifyContent="center"
  sx={{ position: "relative", zIndex: 2 }}
>
  <Box
    component="img"
    src="/deku.png"
    srcSet="/deku.png 300w, /deku.png 768w, /deku.png 1280w"
    sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
    alt="App screenshot"
    sx={{
      width: "100%",
      maxWidth: "360px",
      borderRadius: "20px",
      transform: "rotate(12deg)",
      display: "block",
    }}
  />
</Box>


      </Box>
    </Box>
  );
}
