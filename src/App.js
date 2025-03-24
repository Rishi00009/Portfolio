import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#009688" }, // Teal accent color
    background: { default: "#f5f5f5", paper: "#fff" }, // Light background
    text: { primary: "#333", secondary: "#555" }, // Darker text for readability
  },
  typography: { fontFamily: "Poppins, sans-serif" },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "background.default", color: "text.primary", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
