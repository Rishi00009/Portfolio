import React from "react";
import { Container, Typography, Button } from "@mui/material";

export default function Resume() {
  return (
    <Container id="resume" sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FFD700" }}>
        📜 My Resume
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#FFD700", color: "#000", mt: 3 }}
        href="path-to-your-resume.pdf" 
        download
      >
        Download Resume
      </Button>
    </Container>
  );
}
