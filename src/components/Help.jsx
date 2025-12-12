import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Help({ show }) {
  if (!show) return null;

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

        <Typography
              variant="h1"
               mb={6}
              sx={{
                mt: 10,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "5rem" },
                fontWeight: 900,
                letterSpacing: "8px",
                color: "#142C36",
                textTransform: "uppercase",
                userSelect: "none",
                pointerEvents: "none",
                zIndex: 0,
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
       Help
            </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 }, 
        }}
      >

        <Box sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
          <Typography variant="h6" mb={3}>
            Questions
          </Typography>
          <Typography>
            Find answers to common questions. This section provides guidance for common problems or usage tips.
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: "grid", gap: 3, p: { xs: 2, md: 3 } }}>
          {[1, 2, 3].map((i) => (
            <Card key={i} sx={{ p: 2,color: "#ffff" ,bgcolor: "rgba(255,255,255,0.08)", border: "1px solid #2ED3B7" }}>
              <CardContent>
                <Typography fontWeight={600}>Help Option {i}</Typography>
                <Typography variant="body2" mt={1}>
                  Brief description for help option {i}.
                </Typography>
              </CardContent>
                  <ArrowForwardIcon />
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
