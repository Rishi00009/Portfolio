import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Box id="contact" sx={{ backgroundColor: "#111", color: "#FFD700", py: 8, textAlign: "center" }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Contact Me</Typography>

          <Typography variant="h6" sx={{ color: "#fff" }}>
            📩 Email:{" "}
            <a 
              href="mailto:rishirishim0@gmail.com" 
              style={{ color: "#FFD700", textDecoration: "none", cursor: "pointer" }}
            >
              rishirishim0@gmail.com
            </a>
          </Typography>

          <Typography variant="h6" sx={{ color: "#fff", mt: 2 }}>
            📱 LinkedIn:{" "}
            <a 
              href="https://www.linkedin.com/in/rishi-murugan-787435267" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#FFD700", textDecoration: "none", cursor: "pointer" }}
            >
              www.linkedin.com/in/rishi-murugan-787435267
            </a>
          </Typography>

        </motion.div>
      </Container>
    </Box>
  );
}
