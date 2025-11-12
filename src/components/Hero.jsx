import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import {
  Home as HomeIcon,
  Star as FeatureIcon,
  Download as DownloadIcon,
  HelpOutline as FaqIcon,
} from "@mui/icons-material";

export default function PageNavigator() {
  const [active, setActive] = useState(0);

  const pages = [
    {
      id: "landing",
      icon: <HomeIcon fontSize="inherit" />,
      content: (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            bgcolor: "#0F2027",
            color: "#fff",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              spacing={6}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* Text Section */}
              <Box flex={1}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    mb: 2,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
               Secure sms messaging
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#ccc",
                    mb: 4,
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: 480,
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                 DekuSMS is an SMS app. You can use it as a standalone app or as a 
                 Gateway client to send your incoming messages  to your cloud server! You can also configure it as a
                listener to your  RabbitMQ server and transform your device into an SMS sending machine.
                </Typography>


                <Typography
                  variant="body1"
                  sx={{
                    color: "#ccc",
                    mb: 4,
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: 480,
                    mx: { xs: "auto", md: 0 },
                  }}
                >
            You and anyone else using Deku? Turn on E2EE
            messaging and send SMS messages using the Signal protocol.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "#1976d2",
                      "&:hover": { bgcolor: "#1565c0" },
                      borderRadius: 2,
                      px: 4,
                    }}
                  >
                    Download
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "#1976d2",
                      color: "#1976d2",
                      "&:hover": {
                        bgcolor: "#1b2b33",
                        borderColor: "#1565c0",
                      },
                      borderRadius: 2,
                      px: 4,
                    }}
                  >
                    Donate
                  </Button>
                </Stack>
              </Box>

              {/* Image Section */}
              <Box
                flex={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/Home.png"
                  alt="Landing visual"
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    borderRadius: "16px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                  }}
                />
              </Box>
            </Stack>
          </Container>
        </Box>
      ),
    },

    {
      id: "features",
      icon: <FeatureIcon fontSize="inherit" />,
      content: (
        <Box
          sx={{
            bgcolor: "#0F2027",
            color: "#fff",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 6,
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {[
              { title: "Forward SMS to the Cloud – Even When Offline", desc: "Incoming SMS messages can be forwarded to your cloud server! The  protocols used to forward messages to the cloud include; HTTP(s), SMTP  and sFTP. Messages can be queued on the device till an internet  connection is detected, thanks to Android studio advance work features." },
              { title: "Familiar Google Messages Design, Seamlessly Integrated", desc: "Used Google Messages and enjoyed the look and feel? Deku SMS works with the same design, bringing in the seamless nature of the SMS app you are already used to." },
              { title: "End-to-End Encrypted SMS with Forward Secrecy", desc: "You can send and receive E2EE encrypted SMS messages with fellow peers using Deku SMS. The messages have support for forward secrecy and SMS accessible technologies are used in making the encrypted payloads suitable for SMS messaging" },
              { title: "Send SMS via RabbitMQ with Reliable Server Communication", desc: "You can send SMS messages from your phone by allowing your phone to communicate with a RabbitMQ server. Android specific features have been integrated to allow the communication with the server longlasting and efficient." },
            ].map((feature, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 2,
                    boxShadow: "0 0 10px rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-6px)" },
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc" }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ),
    },

    {
      id: "download",
      icon: <DownloadIcon fontSize="inherit" />,
      content: (
        <Box
          sx={{
            bgcolor: "#0F2027",
            color: "#fff",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 6,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            maxWidth="lg"
          >
            {/* Description */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Download Our App
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "#ccc" }}>
             DekuSMS app is available on several platforms, you can download it and use as your default SMS app.
              </Typography>
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                {["Windows", "macOS", "Linux"].map((os) => (
                  <Button
                    key={os}
                    variant="contained"
                    sx={{
                      background: "#1976d2",
                      "&:hover": { background: "#1565c0" },
                      color: "#fff",
                    }}
                  >
                    Download for {os}
                  </Button>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      ),
    },

    {
      id: "faq",
      icon: <FaqIcon fontSize="inherit" />,
      content: (
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
          <Box sx={{ maxWidth: 900 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Stack spacing={3}>
              {[
                {
                  q: "Question 1 ",
                  a: "DekuSMS app is available on several platforms, you can download it and use as your default SMS app.",
                },
                {
                  q: "Question 2",
                  a: "DekuSMS app is available on several platforms, you can download it and use as your default SMS app.",
                },
                {
                  q: "CQuestion 3",
                  a: "DekuSMS app is available on several platforms, you can download it and use as your default SMS app.",
                },
              ].map((faq, i) => (
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
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Open Sans', 'Lato', 'Helvetica', sans-serif",
        backgroundColor: "#0F2027",
        color: "#fff",
      }}
    >
      {/* Side Navigation */}
      <Stack
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          width: "10%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
        spacing={2}
      >
        {pages.map((page, index) => (
          <IconButton
            key={page.id}
            color="inherit"
            onClick={() => setActive(index)}
            sx={{
              color: "#fff",
              transition: "all 0.5s ease-out",
              transform:
                active === index
                  ? "scale(1.2)"
                  : active !== 0
                  ? "scale(0.8)"
                  : "scale(1)",
              opacity: active === index ? 1 : 0.7,
              "&:hover": { opacity: 0.5 },
              fontSize: "32px",
            }}
          >
            {page.icon}
          </IconButton>
        ))}
      </Stack>

      {/* Page Transitions */}
      {pages.map((page, index) => (
        <Box
          key={page.id}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform:
              active === index
                ? "translateX(0)"
                : index < active
                ? "translateX(-190%)"
                : "translateX(200%)",
            transition:
              "all 0.8s cubic-bezier(0.54, 0.35, 0.29, 0.99), background 0.8s",
          }}
        >
          {page.content}
        </Box>
      ))}
    </Box>
  );
}
