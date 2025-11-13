import React from "react";
import { Box, Typography, Stack, Button, Divider } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Faq() {
  const Help = [
    {
      name: "TroubleShooting Guide",
      description: "Get answers to your questions",
      link: "#",
    },
    {
      name: "Contribution",
      description: "DekuSMS welcomes contributions",
      link: "#",
    },
    {
      name: "Contact Us",
      description: "@developers@smswithoutborders.com",
      link: "#",
    },
  ];

  const HelpList = [
    {
      q: "Question 1",
      a: "DekuSMS app is available on several platforms, you can download it and use it as your default SMS app.",
    },
    {
      q: "Question 2",
      a: "Yes! Your messages are queued and automatically sent once your device reconnects.",
    },
    {
      q: "Question 3",
      a: "Absolutely. You can configure your RabbitMQ server details directly from the app settings.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0F2027",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'Unbounded'",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 6, md: 12 },
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
          mb: 8,
        }}
      >
        Help & Guide
      </Typography>

      <Container fluid="md">
        <Row style={{ rowGap: "3rem" }}>
  
          <Col md={6} sm={12} style={{ paddingRight: "3rem" }}>
            <Stack spacing={3}>
              {HelpList.map((item, i) => (
                <Box key={i}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#fff", fontWeight: 600, mb: 1 }}
                  >
                    {item.q}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#ccc", mb: 3, lineHeight: 1.6 }}
                  >
                    {item.a}
                  </Typography>

                  {i !== HelpList.length - 1 && (
                    <Divider
                      sx={{
                        borderColor: "rgba(202, 248, 248, 0.43)",
                        borderBottomWidth: "2px",
                        width: "100%",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Stack>
          </Col>

          <Col md={6} sm={12} style={{ paddingLeft: "3rem" }}>
            <Stack spacing={5}>
              {Help.map((item) => (
                <Button
                  key={item.name}
                  variant="contained"
                  href={item.link}
                  target="_blank"
                  sx={{
                    background: "#030908",
                    border: "1px solid #2FD7AA",
                    color: "#dceff7ff",
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 700,
                    width: "80%",
                    textTransform: "none",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 4,
                    py: 2,
                    minHeight: 80,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Box sx={{ flex: 1, textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#dceff7ff",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "#dceff7ff",
                      }}
                    >
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
