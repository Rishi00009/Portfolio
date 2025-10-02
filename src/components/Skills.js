import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap, FaHtml5 } from "react-icons/fa"; 
import { SiNetlify, SiMysql, SiRedux, SiExpress } from "react-icons/si"; 

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={35} /> },
  { name: "CSS3", icon: <FaCss3Alt size={35} /> },
  { name: "React.js", icon: <FaReact size={35} /> },
  { name: "Redux", icon: <SiRedux size={35} /> },
  { name: "Node.js", icon: <FaNodeJs size={35} /> },
  { name: "Express.js", icon: <SiExpress size={35} /> },
  { name: "MongoDB", icon: <FaDatabase size={35} /> },
  { name: "SQL", icon: <SiMysql size={35} /> },
  { name: "JavaScript (ES6+)", icon: <FaJs size={33} /> },
  { name: "Bootstrap / Reactstrap", icon: <FaBootstrap size={35} /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={35} /> },
  { name: "Netlify", icon: <SiNetlify size={35} /> }
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ backgroundColor: "#000000ff", color: "#FFF", py: 8 }}> 
      {/* Grey background (#2E2E2E) */}
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
            🛠️ Skills
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Paper 
                  elevation={4} 
                  sx={{ 
                    backgroundColor: "#3A3A3A", // Darker grey card
                    color: "#FFF", 
                    p: 2.5, 
                    textAlign: "center", 
                    borderRadius: 2, 
                    transition: "0.3s",
                    border: "1px solid #FFF",
                    boxShadow: "0 0 6px rgba(255,255,255,0.3)", 
                    "&:hover": { 
                      backgroundColor: "#FFF",
                      color: "#000", // text turns black on hover
                      boxShadow: "0 0 20px rgba(255,255,255,0.9)", // white neon glow
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  {skill.icon}
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}> 
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
