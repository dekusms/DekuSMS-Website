import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

export default function Landing() {
  return (
    <Box
      sx={{
        bgcolor: "#0F2027",
        color: "white",
        py: { xs: 5, sm: 7, md: 10 },
        px: { xs: 2, sm: 3, md: 8 },
        pt: { xs: 13, sm: 7, md: 10 },
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
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
          zIndex: 0,
          pb: { xs: 1, sm: 3, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            color: "#142C36",
            letterSpacing: 2,
            fontFamily: "'Unbounded'",
            fontSize: {
              xs: "1.8rem",
              sm: "2.5rem",
              md: "5rem",
              lg: "7rem",
            },
            opacity: 0.4,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Secure sms messaging
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, sm: 5, md: 6 },
          position: "relative",
          zIndex: 2,
        }}
      >
    
        <Box flex={1.2}>
          <Typography
            variant="h1"
            fontWeight={400}
            gutterBottom
            sx={{
              fontFamily: "'Unbounded'",
              lineHeight: 1.1,
              fontSize: {
                xs: "1.6rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              mb: 3
            }}
          >
            SECURE SMS MESSAGING
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              lineHeight: 1.6,
              fontFamily: "'Ubuntu'",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            }}
          >
            DekuSMS is an SMS app. You can use it as a standalone app or as a
            Gateway client to send your incoming messages to your cloud server!
            You can also configure it as a listener to your RabbitMQ server and
            transform your device into an SMS sending machine.
          </Typography>

          <br />

          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              lineHeight: 1.6,
              fontFamily: "'Ubuntu'",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            }}
          >
            You and anyone else using Deku? Turn on E2EE messaging and send SMS
            messages using the Signal protocol.
          </Typography>

          {/* BUTTONS */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            mt={4}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pli=1"
              variant="contained"
              sx={{
                bgcolor: "#00d6b4",
                color: "black",
                px: { xs: 3, md: 4 },
                py: { xs: 1.1, md: 1.3 },
                fontSize: { xs: "0.85rem", md: "1rem" },
                width: { xs: "100%", sm: "auto" },
                borderRadius: 20,
              }}
            >
              Download App
            </Button>

            <Button
              href="https://opencollective.com/dekusms"
              variant="outlined"
              sx={{
                borderColor: "#00d6b4",
                color: "white",
                px: { xs: 3, md: 4 },
                py: { xs: 1.1, md: 1.3 },
                fontSize: { xs: "0.85rem", md: "1rem" },
                width: { xs: "100%", sm: "auto" },
                borderRadius: 20,
              }}
            >
              Donate
            </Button>
          </Stack>
        </Box>

        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          padding={{ xs: 2, sm: 4, md: 6 }}
          sx={{ position: "relative", zIndex: 2 }}
        >
          <Box
            component="img"
            src="/deku.png"
            alt="App screenshot"
            sx={{
              width: "100%",
              maxWidth: {
                xs: "180px",
                sm: "220px",
                md: "280px",
                lg: "330px",
              },
              transform: "rotate(12deg)",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
