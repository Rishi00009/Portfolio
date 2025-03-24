import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
    id="hero"
      sx={{
        backgroundColor: "#020c1b", // Updated dark blue theme for consistency
        color: "#64FFDA", // Updated primary text color to match theme
        height: "90vh", // Increased height for a fuller hero section
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm{" "}
          <span style={{ color: "#64FFDA" }}>
            <Typewriter
              words={["Rishi M", "a MERN Stack Developer", "a Passionate Coder"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </Typography>

        <Typography variant="h5" sx={{ mt: 2, color: "#CCD6F6" }}>
          I specialize in building modern and scalable web applications using the MERN stack.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, color: "#8892B0" }}>
          Skilled in frontend and backend development, I love creating high-performance, responsive, and user-friendly web applications. 
          Let's build something amazing together!
        </Typography>

        {/* Animated Resume & Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ marginTop: "20px" }}
        >
          

          <Button
            variant="outlined"
            sx={{
              color: "#64FFDA",
              borderColor: "#64FFDA",
              fontWeight: "bold",
              mx: 1,
              "&:hover": { backgroundColor: "#64FFDA", color: "#020c1b" },
            }}
            href="#contact"
          >
            Contact Me
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
