import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap, FaHtml5 } from "react-icons/fa"; 
import { SiNetlify, SiMysql, SiRedux, SiExpress } from "react-icons/si"; 

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#FF5733" size={35} />, glowColor: "#FF5733" },
  { name: "CSS3", icon: <FaCss3Alt color="#007FFF" size={35} />, glowColor: "#007FFF" },
  { name: "React.js", icon: <FaReact color="#61DBFB" size={35} />, glowColor: "#61DBFB" },
  { name: "Redux", icon: <SiRedux color="#764ABC" size={35} />, glowColor: "#764ABC" },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={35} />, glowColor: "#3C873A" },
  { name: "Express.js", icon: <SiExpress color="#AAA" size={35} />, glowColor: "#AAA" },
  { name: "MongoDB", icon: <FaDatabase color="#4DB33D" size={35} />, glowColor: "#4DB33D" },
  { name: "SQL", icon: <SiMysql color="#00758F" size={35} />, glowColor: "#00758F" },
  { name: "JavaScript (ES6+)", icon: <FaJs color="#F7E018" size={33} />, glowColor: "#F7E018" },
  { name: "Bootstrap / Reactstrap", icon: <FaBootstrap color="#7952B3" size={35} />, glowColor: "#7952B3" },
  { name: "Git & GitHub", icon: <FaGitAlt color="#F14E32" size={35} />, glowColor: "#F14E32" },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" size={35} />, glowColor: "#00C7B7" }
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ backgroundColor: "#1A1A1A", color: "#FFD700", py: 8 }}>
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
            sx={{ mb: 5, textTransform: "uppercase", letterSpacing: 1, color: "#00BCD4" }}
          >
            🛠️ Skills
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Paper 
                  elevation={4} 
                  sx={{ 
                    backgroundColor: "#222", 
                    color: "#FFD700", 
                    p: 2.5, 
                    textAlign: "center", 
                    borderRadius: 2, 
                    transition: "0.3s",
                    border: `1px solid ${skill.glowColor}`,
                    boxShadow: `0 0 6px ${skill.glowColor}`, // Softer neon glow
                    "&:hover": { 
                      backgroundColor: "#2A2A2A",
                      boxShadow: `0 0 12px ${skill.glowColor}`, // Light glow on hover
                      transform: "scale(1.02)"
                    }
                  }}
                >
                  {skill.icon}
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold", color: "#FFF" }}> 
                    {skill.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
