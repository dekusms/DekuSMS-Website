import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

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
    px: { xs: 2, sm: 4, md: 6 },
    pt: { xs: 'calc(64px + 2rem)', sm: 'calc(64px + 2rem)', md: 'calc(64px + 4rem)' },
    position: "relative",
    overflow: "hidden",
     fontFamily: "'Unbounded'"
  }}
>

  <Stack
  direction={{ xs: "column", md: "row" }}
  spacing={{ xs: 4, md: 6 }}
  alignItems="flex-start"
  justifyContent="space-between"
  sx={{ width: "100%" }}
>

        <Box flex={1}>
          <Typography variant="h3" sx={{
     fontFamily: "'Unbounded'"}} fontWeight={800} mb={2}>
            Secure SMS Messaging
          </Typography>
          <Typography sx={{fontFamily: "'Ubuntu'", fontSize: "1.2rem"}} color="#ccc" mb={4}>
            DekuSMS is an SMS app. You can use it as a standalone app or as a Gateway client 
            to send your incoming messages to your cloud server! You can also configure it 
            as a listener to your RabbitMQ server and transform your device into an SMS sending machine.
          </Typography>

          <Typography sx={{fontFamily: "'Ubuntu'", fontSize: "1.2rem"}}  color="#ccc" mb={4}>
            You and anyone else using Deku? Turn on E2EE messaging and send SMS messages using the Signal protocol.
          </Typography>

<Stack direction="row" spacing={4}>
  <Button
    variant="contained"
    sx={{
      bgcolor: "#2ED3B7",
      color: "#092c20ff",
      borderRadius: "50px",
      width: 170,        
      height: 40,       
      textTransform: "none", 
      fontFamily: "'Ubuntu'",
      fontWeight: 700,
      fontSize: "1rem",
    }}
  >
    Download
  </Button>

  <Button
    variant="outlined"
    sx={{
      borderRadius: "50px",
      borderColor: "#2ED3B7",
      color: "#2ED3B7",
      width: 170,        
      height: 40,        
      textTransform: "none", 
 fontFamily: "'Ubuntu',",
      fontWeight: 700,
      fontSize: "1rem",
    }}
  >
    Donate
  </Button>
</Stack>

        </Box>

        <Box
          flex={1}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Box
            component="img"
            src="/deku.png"
            alt="Dekusms"
            sx={{
              width: "100%",
              maxWidth: { xs: 120, sm: 150, md: 180, lg: 240 }, 
              height: "auto",
              flexShrink: 1, 
              boxShadow: "0 8px 24px rgba(5, 98, 85, 0.5)",
              transform: "rotate(15deg)",
              transformOrigin: "bottom right",
              mt: { xs: 2, sm: 0 }, 
            }}
          />
        </Box>
      </Stack>

 
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "3rem", sm: "4rem", md: "5.5rem" },
          fontWeight: 900,
          letterSpacing: "10px",
          color: "#142C36",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "'Unbounded'" 
        }}
      >
        Secure SMS Messaging
      </Typography>
    </Box>
  );
}
