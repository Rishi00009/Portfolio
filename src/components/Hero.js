import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "#FFD700",
        height: "70vh", // Reduced height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        padding: "20px", // Added padding for better spacing
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold"> {/* Reduced size */}
          Hi I'm{" "}
          <span style={{ color: "#FFD700" }}>
            <Typewriter
              words={["Rishi M", "a MERN Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, color: "#fff" }}> {/* Reduced size */}
          Passionate about building scalable web applications.
        </Typography>
      </Container>
    </Box>
  );
}
