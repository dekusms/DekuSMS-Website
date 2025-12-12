import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function HelpGuideSection() {
  const faqList = [
    {
      q: "How do I install DekuSMS?",
      a: "You can download the app from the official website or supported stores depending on your device."
    },
    {
      q: "Is DekuSMS secure?",
      a: "Yes, DekuSMS uses encryption to protect your messages."
    },
    {
      q: "Can I use DekuSMS on more than one device?",
      a: "It currently supports one primary device per account."
    },
    {
      q: "Does DekuSMS work offline?",
      a: "Messages are queued and sent automatically when connection is restored."
    }
  ];

  const cards = [
    {
      title: "Trouble Shooting Guide",
      subtitle: "Get answers to your questions",
    },
    {
      title: "Contribution",
      subtitle: "DekuSMS welcomes contributions",
    },
    {
      title: "Contact US",
      subtitle: "developers@smswithoutborders.com",
    }
  ];

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
          sx={{
            fontSize: { xs: "3rem", md: "8rem" },
            fontWeight: 700,
            opacity: 0.08,
            mb: 8,
            textAlign: { xs: "center", md: "left" },
            fontFamily: "'Unbounded'",
          }}
        >
          HELP & GUIDE
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="flex-start"
        >
          {/* LEFT SIDE – QUESTIONS */}
          <Box flex={1} sx={{ width: { xs: "100%", md: "auto" } }}>
            {faqList.map((item, i) => (
              <Box key={i} sx={{ mb: 6 }}>
                <Typography sx={{ color: "#00d6b4", fontWeight: 600, mb: 1 }}>
                  {item.q}
                </Typography>

                <Typography
                  sx={{
                    opacity: 0.8,
                    maxWidth: "650px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.a}
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    bgcolor: "rgba(255,255,255,0.1)",
                    mt: 3,
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* RIGHT SIDE – CARDS */}
          <Box
            flex={1}
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {cards.map((item, index) => (
              <Card
                key={index}
                sx={{
                  bgcolor: "black",
                  border: "1px solid #00d6b4",
                  borderRadius: 3,
                  mb: 4,
                  color: "white",
                  width: { xs: "100%", sm: "90%", md: "80%" },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    py: 3,
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ opacity: 0.6, mt: 0.5 }}>
                      {item.subtitle}
                    </Typography>
                  </Box>

                  <ArrowOutwardIcon sx={{ color: "white" }} />
                </CardContent>
              </Card>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
