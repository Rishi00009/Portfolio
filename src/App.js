import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import  Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FFD700" }, // Gold accent color
    background: { default: "#000", paper: "#111" },
    text: { primary: "#fff", secondary: "#ccc" },
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
