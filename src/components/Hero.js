import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "#000000", // Deep black background
        color: "#FFFFFF",           // White text
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Container maxWidth="md">
        {/* Greeting */}
        <Typography variant="h3" fontWeight="bold">
          Hello, I'm{" "}
          <span style={{ color: "#FFFFFF" }}>
            <Typewriter
              words={["Rishi M", "a MERN Stack Developer", "a Full-Stack Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </Typography>

        {/* Professional Tagline */}
        <Typography variant="h5" sx={{ mt: 2, color: "#E0E0E0" }}>
          Crafting scalable, responsive, and efficient web applications with the MERN stack.
        </Typography>

        {/* Short Intro */}
        <Typography variant="body1" sx={{ mt: 2, color: "#B0B0B0" }}>
          I focus on building professional, high-performance applications that deliver
          seamless user experiences. Let's collaborate to bring innovative ideas to life.
        </Typography>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ marginTop: "25px" }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#FFFFFF",
              borderColor: "#FFFFFF",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              "&:hover": { backgroundColor: "#FFFFFF", color: "#000000" },
            }}
            href="#contact"
          >
            Get In Touch
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
