import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import AndroidIcon from "@mui/icons-material/Android";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Download() {
  const downloads = [
    {
      name: "Google Play Store",
      icon: "./playstore.webp",
      description: "Get the app from Google Play Store.",
      link: "#",
    },
    {
      name: "F-Droid",
      icon: "./fdroid.png",
      description: "Get the app from F-Droid.",
      link: "#",
    },
    {
      name: "GitHub",
     icon: "/github.png",
      description: "Download the source code and install manually.",
      link: "#",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0F2027",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'Unbounded', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
          letterSpacing: "6px",
         color: "#142C36",
          textTransform: "uppercase",
          textAlign: "start",
          fontFamily: "Unbounded",
          mb: 6,
        }}
      >
        Downloads
      </Typography>

      <Container fluid="md">
        <Row>
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <Typography variant="body1" sx={{ mb: 3, color: "#ccc" }}>
              DekuSMS app is available on several platforms. Choose your preferred platform below to start sending secure messages.
            </Typography>
          </Col>

          <Col md={8} sm={12}>
            <Stack spacing={3}>
              {downloads.map((item) => (
                <Button
                  key={item.name}
                  variant="contained"
                  href={item.link}
                  target="_blank"
                  sx={{
                    background: "#030908ff",
                    border: "1px solid #2fd7aaff",
                    color: "#fff",
                    "&:hover": { background: "#1AA893" },
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 700,
                    width: "70%",
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    py: 1.5,
                    minHeight: 70,
                  }}
                >

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.name}
                      sx={{ width: 40, height: 40, objectFit: "contain" }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, ml: 2, textAlign: "left" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem",  color: "#dceff7ff" }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#dceff7ff" }}>
                      {item.description}
                    </Typography>
                  </Box>

                  <ArrowForwardIcon />
                </Button>
              ))}
            </Stack>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
