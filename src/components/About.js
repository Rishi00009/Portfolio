import { Container, Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box id="about" sx={{ backgroundColor: "#f5f5f5", color: "#009688", py: 8 }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>About Me</Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#009688" }}>💡 Passion for Development</Typography>
              <Typography variant="body1" sx={{ color: "#333", mt: 1 }}>
                I love turning ideas into <strong>scalable, efficient applications</strong>. My goal is to solve real-world problems using <strong>modern web technologies</strong>.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#009688" }}>🛠️ Tech Stack</Typography>
              <Typography variant="body1" sx={{ color: "#333", mt: 1 }}>
                Proficient in <strong>React.js, Node.js, Express.js, MongoDB</strong>. Experienced with <strong>Material UI, Tailwind, Bootstrap, and Framer Motion</strong>.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#009688" }}>🎯 Career Objective</Typography>
              <Typography variant="body1" sx={{ color: "#333", mt: 1 }}>
                Building <strong>user-friendly, high-performance applications</strong> that enhance user experience and solve complex problems.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#009688" }}>📌 Open to Opportunities</Typography>
              <Typography variant="body1" sx={{ color: "#333", mt: 1 }}>
                Looking for <strong>exciting roles</strong> where I can contribute, learn, and grow as a <strong>MERN Stack Developer</strong>.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
