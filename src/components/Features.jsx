import React from "react";
import { Box, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";

export default function Features() {
  return (
    <Box
      sx={{
        bgcolor: "#0F2027",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Unbounded",
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
          color: "rgba(233, 253, 245, 0.15)",
          textTransform: "uppercase",
          textAlign: "start",
          mb: 10,
          fontFamily: "'Unbounded'" 
        }}
      >
        Features
      </Typography>

      {/* 2x2 Rows and Columns Layout */}
      <Container fluid="md">
        {/* Row 1 */}
        <Row className="mb-5">
          <Col md={6} sm={12} className="mb-4 mb-md-0">
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#2ED3B7", mb: 2, fontFamily: "'Unbounded'" }}
            >
              Forward SMS to the Cloud – Even When Offline
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#ccc", lineHeight: 1.7, maxWidth: 550, fontFamily: "'Ubuntu'" }}
            >
              Incoming SMS messages can be forwarded to your cloud server using
              HTTP(s), SMTP, or sFTP. Messages can be queued locally until
              internet connectivity is available — powered by Android’s advanced
              background features.
            </Typography>
          </Col>

          <Col md={6} sm={12}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#2ED3B7", mb: 2, fontFamily: "'Unbounded'" }}
            >
              Familiar Google Messages Design, Seamlessly Integrated
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#ccc", lineHeight: 1.7, maxWidth: 550, fontFamily: "'Ubuntu'" }}
            >
              If you’ve used Google Messages, you’ll love Deku SMS. It adopts
              the same clean, intuitive design, ensuring a seamless and familiar
              user experience.
            </Typography>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row>
          <Col md={6} sm={12} className="mb-4 mb-md-0">
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#2ED3B7", mb: 2, fontFamily: "'Unbounded'" }}
            >
              Send SMS via RabbitMQ with Reliable Server Communication
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#ccc", lineHeight: 1.7, maxWidth: 550, fontFamily: "'Ubuntu'" }}
            >
              Send SMS messages from your device through RabbitMQ for reliable,
              persistent, and efficient communication between your app and
              server.
            </Typography>
          </Col>

          <Col md={6} sm={12}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#2ED3B7", mb: 2, fontFamily: "'Unbounded'" }}
            >
              End-to-End Encrypted SMS with Forward Secrecy
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#ccc", lineHeight: 1.7, maxWidth: 550, fontFamily: "'Ubuntu'" }}
            >
              Exchange encrypted SMS messages using the Signal protocol. All
              messages enjoy forward secrecy and are optimized for SMS-based
              payload delivery.
            </Typography>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
