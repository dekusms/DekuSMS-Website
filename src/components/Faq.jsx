import React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function Faq() {
  const faqList = [
    {
      q: "How do I enable end-to-end encryption?",
      a: "Go to settings and enable E2EE. Once enabled, you can send encrypted SMS messages securely.",
    },
    {
      q: "Can I use DekuSMS offline?",
      a: "Yes! Your messages are queued and automatically sent once your device reconnects.",
    },
    {
      q: "Does DekuSMS work with RabbitMQ servers?",
      a: "Absolutely. You can configure your RabbitMQ server details directly from the app settings.",
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
        py: 8,
      }}
    >
      <Box sx={{ maxWidth: 15000 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Stack spacing={3}>
          {faqList.map((faq, i) => (
            <Box key={i}>
              <Typography variant="h6" gutterBottom>
                {faq.q}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                {faq.a}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
