import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        py: 12,
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 6 }}>
          Get In Touch
        </Typography>

        <Button
          component="a"                // ✅ Make it behave as a link
          href="mailto:rishirishim0@gmail.com"
          startIcon={<EmailIcon />}
          sx={buttonStyle("#64FFDA")}
        >
          rishirishim0@gmail.com
        </Button>


        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 6 }}>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/rishi-murugan-787435267/"
            target="_blank"
            sx={buttonStyle("#fff")}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            startIcon={<WorkIcon />}
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            sx={buttonStyle("#fff")}
          >
            Naukri
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

// Reusable button style function
const buttonStyle = (color) => ({
  color,
  borderColor: color,
  fontWeight: "bold",
  px: 4,
  py: 1.5,
  textTransform: "none", // ✅ Prevents all caps
  "&:hover": { backgroundColor: color, color: "#000" },
});

