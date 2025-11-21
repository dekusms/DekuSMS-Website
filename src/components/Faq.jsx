import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

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
      {/* Section Title */}
      <Typography variant="h4" mb={6}>
        Help
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 }, 
        }}
      >
        {/* Questions Section */}
        <Box sx={{ flex: 1, p: { xs: 2, md: 3 }, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
          <Typography variant="h6" mb={3}>
            Questions
          </Typography>
          <Typography>
            Find answers to common questions. This section provides guidance for common problems or usage tips.
          </Typography>
        </Box>

        {/* Help Cards */}
        <Box sx={{ flex: 1, display: "grid", gap: 3, p: { xs: 2, md: 3 } }}>
          {[1, 2, 3].map((i) => (
            <Card key={i} sx={{ p: 2, bgcolor: "rgba(255,255,255,0.08)" }}>
              <CardContent>
                <Typography fontWeight={600}>Help Option {i}</Typography>
                <Typography variant="body2" mt={1}>
                  Brief description for help option {i}.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
