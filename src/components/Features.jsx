import React from "react";
import {
  Box,
  Typography,
  Stack
} from "@mui/material";

export default function FeaturesSection() {
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
          variant="h2"
          sx={{
            fontWeight: 500,
         color: "#142C36",
            mb: 6,
            letterSpacing: 2,
            fontFamily: "'Unbounded'",
              fontSize: {xs: "3rem", md: "8rem"}
          }}
        >
          FEATURES
        </Typography>


        <Box mt={6}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            sx={{ mb: 6 }}
          >
            <FeatureItem
              title="Forward SMS to the Cloud – Even When Offline"
              text={`Incoming SMS messages can be forwarded to your cloud server!
The protocols used to forward messages to the cloud include; HTTP(s), SMTP and sFTP.

Messages can be queued on the device till an internet connection is detected,
thanks to Android studio advance work features.`}
            />

            <FeatureItem
              title="Familiar Google Messages Design, Seamlessly Integrated"
              text={`Used Google Messages and enjoyed the look and feel? Deku SMS works with the same design,
bringing in the seamless nature of the SMS app you are already used to.`}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
          >
            <FeatureItem
              title="Send SMS via RabbitMQ with Reliable Server Communication"
              text={`You can send SMS messages from your phone by allowing your phone to communicate with a RabbitMQ server.
Android specific features have been integrated to allow the communication with the server longlasting and efficient.`}
            />

            <FeatureItem
              title="End-to-End Encrypted SMS with Forward Secrecy"
              text={`You can send and receive E2EE encrypted SMS messages with fellow peers using Deku SMS.
The messages have support for forward secrecy and SMS accessible technologies
are used in making the encrypted payloads suitable for SMS messaging.`}
            />
          </Stack>
        </Box>
    </Box>
    </Box>
  );
}


function FeatureItem({ title, text }) {
  return (
    <Box flex={1}>
      <Typography
        variant="h6"
        sx={{ color: "#2ED3B7", fontWeight: 600, mb: 2 }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{ opacity: 0.75, lineHeight: 1.8, whiteSpace: "pre-line" }}
      >
        {text}
      </Typography>
    </Box>
  );
}
