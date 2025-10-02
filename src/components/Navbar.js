import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Resume", to: "resume" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#000000", // black background
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ffffff", // white text
            cursor: "pointer",
            letterSpacing: "1px",
          }}
        >
          Rishi M
        </Typography>

        {/* Desktop Nav Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navLinks.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.to}
              smooth
              duration={500}
              sx={navButtonStyle}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#ffffff" }}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <List sx={{ width: 200, backgroundColor: "#000000", height: "100vh" }}> 
            {navLinks.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  smooth
                  duration={500}
                  onClick={() => setMobileOpen(false)}
                >
                  <Typography sx={{ color: "#ffffff", fontWeight: "500" }}>
                    {item.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

// Button Style
const navButtonStyle = {
  color: "#ffffff", // white text
  fontWeight: "500",
  fontSize: "1rem",
  textTransform: "none",
  "&:hover": { opacity: 0.6 }, // simple hover effect
};
