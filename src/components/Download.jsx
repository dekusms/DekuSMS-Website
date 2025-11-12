import React from "react";
import { Box, Grid, Typography, Stack, Button } from "@mui/material";

export default function Download() {
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
      }}
    >
      <Grid container spacing={4} alignItems="center" maxWidth="lg">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Download DekuSMS
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#ccc" }}>
            Get the app on your preferred platform and start sending secure
            messages today.
          </Typography>
        </Grid>

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
  );
}
