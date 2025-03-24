import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: "#020c1b",  // Dark background
        color: "#64FFDA",  // Accent color
        textAlign: "center", 
        py: 2, 
        mt: 5,
        borderTop: "1px solid #64FFDA", // Subtle border effect
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Rishi M | All Rights Reserved
      </Typography>
    </Box>
  );
}
