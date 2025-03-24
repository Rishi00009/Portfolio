import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button, Alert, Stack } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work"; // Naukri Icon

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = "service_rgr1ly6";
    const templateID = "template_5hyt3tq";
    const publicKey = "p9flb0HhrHtZMtjKy";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <Box id="contact" sx={{ backgroundColor: "#020c1b", color: "#64FFDA", py: 8, textAlign: "center" }}>
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
            Contact Me
          </Typography>

          {/* Success & Error Messages */}
          {success && <Alert severity="success">Message sent successfully!</Alert>}
          {error && <Alert severity="error">Failed to send message. Try again!</Alert>}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
            />
            <TextField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
            />
            <TextField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
              sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#64FFDA",
                color: "#020c1b",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#52E0C4" },
              }}
            >
              Send Message
            </Button>
          </form>

          {/* Social Media Links */}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/rishi-murugan-787435267/"
              target="_blank"
              sx={socialButtonStyle}
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              startIcon={<WorkIcon />}
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
              sx={socialButtonStyle}
            >
              Naukri
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

// Social Button Styles
const socialButtonStyle = {
  color: "#64FFDA",
  borderColor: "#64FFDA",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#64FFDA",
    color: "#020c1b",
  },
};
