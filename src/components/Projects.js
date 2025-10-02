import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "To-Do List App",
    description: "A simple and efficient to-do list app built with React and local storage.",
    image: "https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938726.jpg",
    link: "https://rishimytodos.netlify.app/",
  },
  {
    title: "Weather App",
    description: "A React-based weather app using OpenWeather API.",
    image: "https://cdn.dribbble.com/userupload/12803821/file/original-5198e7dfd68dac50167ab568b6d209f0.jpg?format=webp&resize=1440x&vertical=center",
    link: "https://liveweathersiterishi.netlify.app/",
  }
];

export default function Projects() {
  return (
    <Box 
      id="projects" 
      sx={{ backgroundColor: "#1b1a1aff", color: "#FFF", py: 8, px: 2 }} // Grey background
    >
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h4" 
            textAlign="center" 
            fontWeight="bold" 
            sx={{ mb: 5, textTransform: "uppercase", letterSpacing: 1, color: "#FFF" }}
          >
            My Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card 
                  sx={{ 
                    backgroundColor: "#3A3A3A",  // Dark grey card
                    color: "#FFF", 
                    boxShadow: "0 0 6px rgba(255,255,255,0.2)", 
                    borderRadius: 2,
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": { 
                      backgroundColor: "#FFF",
                      color: "#000",
                      boxShadow: "0 0 20px rgba(255,255,255,0.9)" // White neon glow
                    }
                  }}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <CardMedia 
                    component="img" 
                    height="200" 
                    image={project.image} 
                    alt={project.title} 
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
