import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

export default function Features({ show }) {
  if (!show) return null;


   const features = [
    { title: "Forward SMS to the Cloud – Even When Offline", desc: "Incoming SMS messages can be forwarded to your cloud server! The  protocols used to forward messages to the cloud include; HTTP(s), SMTP  and sFTP. Messages can be queued on the device till an internet  connection is detected, thanks to Android studio advance work features." },
    { title: "Familiar Google Messages Design, Seamlessly Integrated", desc: "Used Google Messages and enjoyed the look and feel? Deku SMS works with the same design, bringing in the seamless nature of the SMS app you are already used to." },
    { title: "End-to-End Encrypted SMS with Forward Secrecy", desc: "You can send and receive E2EE encrypted SMS messages with fellow peers using Deku SMS. The messages have support for forward secrecy and SMS accessible technologies are used in making the encrypted payloads suitable for SMS messaging" },
    { title: "Send SMS via RabbitMQ with Reliable Server Communication", desc: "You can send SMS messages from your phone by allowing your phone to communicate with a RabbitMQ server. Android specific features have been integrated to allow the communication with the server longlasting and efficient." },
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

        <Typography variant="h1"
         sx={{
               mt: 10,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg:"5rem" },
            fontWeight: 900,
            letterSpacing: "8px", 
            color: "#142C36", 
            textTransform: "uppercase",
             userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
              fontFamily: "'Unbounded'" }} >  
                  Features </Typography>


   <Box
  sx={{
    display: "grid",
    mt: 10,
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    gap: { xs: 4, md: 6 },
  }}
>
  {features.map((f, i) => (
    <Card
      key={i}
      sx={{
        p: 3,
        bgcolor: "#0F2027",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          mb={1}
          sx={{ color: "#2ED3B7", fontFamily: "'Unbounded'" }}
        >
          {f.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Ubuntu'",
            fontSize: { xs: "1rem", md: "1.2rem" },
            letterSpacing: "1px", 
            color: "#ccc",
          }}
          mb={2}
        >
          {f.desc}
        </Typography>
      </CardContent>
    </Card>
  ))}
</Box>

      
        </Box>
  );
}
