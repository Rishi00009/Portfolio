import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap, FaHtml5 } from "react-icons/fa"; 
import { SiNetlify, SiMysql, SiRedux, SiExpress } from "react-icons/si"; // ✅ Added Redux & Express

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt color="#007FFF" size={40} /> },
  { name: "React.js", icon: <FaReact color="#61DBFB" size={40} /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" size={40} /> }, // ✅ Added Redux
  { name: "Node.js", icon: <FaNodeJs color="#8CC84B" size={40} /> },
  { name: "Express.js", icon: <SiExpress color="#fff" size={40} /> }, // ✅ Added Express.js
  { name: "MongoDB", icon: <FaDatabase color="#4DB33D" size={40} /> },
  { name: "SQL", icon: <SiMysql color="#4479A1" size={40} /> },
  { name: "JavaScript (ES6+)", icon: <FaJs color="#F7DF1E" size={35} /> },
  { name: "Bootstrap / Reactstrap", icon: <FaBootstrap color="#7952B3" size={40} /> },
  { name: "Git & GitHub", icon: <FaGitAlt color="#F05032" size={40} /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" size={40} /> }
];

export default function Skills() {
  return (
    <Box 
      id="skills" 
      sx={{ backgroundColor: "#111", color: "#FFD700", py: 8 }}
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
            🛠️ Skills
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Paper 
                  elevation={6} 
                  sx={{ 
                    backgroundColor: "#222", 
                    color: "#FFD700", 
                    p: 3, 
                    textAlign: "center", 
                    borderRadius: 2, 
                    transition: "0.3s",
                    "&:hover": { backgroundColor: "#333" }
                  }}
                >
                  {skill.icon}
                  <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
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
