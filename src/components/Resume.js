import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

export default function Resume() {
  return (
    <Box 
      id="resume" 
      sx={{ py: 5, textAlign: "center", backgroundColor: "#000000", width: "100%" }} // ✅ Pure black background
    >
      <Container maxWidth={false} disableGutters>
        <Typography 
          variant="h3" 
          sx={{ fontWeight: "bold", color: "#ffffff" }} // ✅ White text for better readability
        >
          📜 My Resume
        </Typography>
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: "#ffffff",   // ✅ White button for contrast
            color: "#000000",             // ✅ Black text inside button
            mt: 3,
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#e0e0e0" } // ✅ Softer hover effect
          }}
          href="/Rishi resume.pdf"  // ✅ Resume in public folder
          download="Rishi_M_Resume.pdf"
        >
          Download Resume
        </Button>
      </Container>
    </Box>
  );
}
