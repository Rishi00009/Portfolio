import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: "#000", 
        color: "#FFD700", 
        textAlign: "center", 
        py: 2, 
        mt: 5 
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Rishi M | All Rights Reserved
      </Typography>
    </Box>
  );
}
