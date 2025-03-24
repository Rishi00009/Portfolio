import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

export default function Resume() {
  return (
    <Box 
      id="resume" 
      sx={{ py: 5, textAlign: "center", backgroundColor: "#020c1b", width: "100%" }}
    >
      <Container maxWidth={false} disableGutters>
        <Typography 
          variant="h3" 
          sx={{ fontWeight: "bold", color: "#64FFDA" }}
        >
          📜 My Resume
        </Typography>
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: "#64FFDA", 
            color: "#020c1b", 
            mt: 3,
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#52E0C4" }
          }}
          href="path-to-your-resume.pdf" 
          download
        >
          Download Resume
        </Button>
      </Container>
    </Box>
  );
}
