import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: "#000000", // ✅ Deep black background
        color: "#ffffff",           // ✅ White text for contrast
        textAlign: "center", 
        py: 2, 
        borderTop: "1px solid #ffffff", // ✅ Subtle white border
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Rishi M | All Rights Reserved
      </Typography>
    </Box>
  );
}
