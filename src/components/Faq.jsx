import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardActionArea,
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
      link: "https://docs.smswithoutborders.com/docs/Troubleshooting/Troubleshooting-FAQ",
    },
    {
      title: "Contribution",
      subtitle: "DekuSMS welcomes contributions",
      link: "https://github.com/dekusms/DekuSMS-Android/edit/master/README.md",
    },
    {
      title: "Contact Us",
      subtitle: "developers@smswithoutborders.com",
      link: "mailto:developers@smswithoutborders.com",
    },
  ];

  return (
    <Box
        sx={{
          color: "white",
          py: { xs: 8, md: 20 },
          px: { xs: 3, md: 10 },
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",  
          bgcolor: "#0F2027"
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
                    variant="h3"
                    sx={{
                      fontWeight: 500,
                      fontFamily: "'Unbounded'",
                      opacity: 0.05,
                      mb: 4,
                      letterSpacing: 2,
                      textAlign: { xs: "left", md: "left" },
                      fontSize: { xs: "3rem", md: "6rem" },
                    }}
                  >
          HELP & GUIDE
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="flex-start"
        >
      
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
                    width: "80%",
                    height: "1px",
                    bgcolor: "rgba(255,255,255,0.1)",
                    mt: 3,
                  }}
                />
              </Box>
            ))}
          </Box>

        
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
                color: "white",
                bgcolor: "black",
                border: "1px solid #00d6b4",
                borderRadius: 3,
                mb: 4,
                width: { xs: "100%", sm: "90%", md: "80%" },
                transition: "all 280ms cubic-bezier(.16,1,.3,1)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 18px 40px rgba(0,214,180,0.25)",
                },
              }}
            >

              <CardActionArea
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ px: 3, py: 3 }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 0,
                    color: "white"
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

                  <ArrowOutwardIcon
                    sx={{
                      color: "white",
                      transition: "transform 200ms ease",
                    }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
