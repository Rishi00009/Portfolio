import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
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
    { label: "Contact", to: "contact" },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black", boxShadow: "0px 4px 8px rgba(255, 215, 0, 0.3)" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFD700", cursor: "pointer" }}>
          Rishi M
        </Typography>

        {/* Desktop Nav Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navLinks.map((item, index) => (
            <Button key={index} component={Link} to={item.to} smooth duration={500} sx={navButtonStyle}>
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton sx={{ display: { xs: "block", md: "none" }, color: "#FFD700" }} onClick={() => setMobileOpen(true)}>
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <List sx={{ width: 200, backgroundColor: "black", height: "100vh" }}>
            {navLinks.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.to} smooth duration={500} onClick={() => setMobileOpen(false)}>
                  <Typography sx={{ color: "#FFD700", fontWeight: "bold" }}>{item.label}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

// MUI Button Styles
const navButtonStyle = {
  color: "#FFD700",
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "none",
  "&:hover": { color: "white" },
};
