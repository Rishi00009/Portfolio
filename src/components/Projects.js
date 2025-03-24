import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "To-Do List App",
    description: "A simple and efficient to-do list app built with React and local storage.",
    image: "https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938726.jpg?t=st=1742295520~exp=1742299120~hmac=1a589214a5ea3ba2a6b1f804644135d8536352289b425575dd54eb492a484aaf&w=1380",
    link: "https://rishimytodos.netlify.app/",
  },
  {
    title: "Food Delivery System",
    description: "An online food ordering system built with MERN and Razorpay.",
    image: "https://img.freepik.com/premium-vector/trendy-minimalistic-food-delivery-service-online-food-order-application-banner-design-template_420121-273.jpg",
    link: "https://restaurant-rishi.netlify.app/",
  },
  {
    title: "Weather App",
    description: "A React-based weather app using OpenWeather API.",
    image: "https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?t=st=1742296122~exp=1742299722~hmac=be4533f16e6d713acb269f3af011f37e55a1d39646cc05a100cf807b0cb7134c&w=826",
    link: "https://liveweathersiterishi.netlify.app/",
  }
];

export default function Projects() {
  return (
    <Box 
      id="projects" 
      sx={{ backgroundColor: "#1A1A1A", color: "#00BCD4", py: 8, px: 2 }}
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
            sx={{ mb: 5, textTransform: "uppercase", letterSpacing: 1 }}
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
                    backgroundColor: "#222", 
                    color: "#00BCD4", 
                    boxShadow: "0px 4px 15px rgba(0, 188, 212, 0.3)", 
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": { boxShadow: "0px 6px 20px rgba(0, 188, 212, 0.5)" },
                    cursor: "pointer"
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
                    <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                    <Typography variant="body2" sx={{ color: "#ddd", mt: 1 }}>
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
