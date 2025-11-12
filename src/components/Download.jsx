import React from "react";
import { Box, Typography, Button} from "@mui/material";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";

// Custom CSS (you can also move this to a CSS file)
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#0F2027",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  navLinks: { display: "flex", gap: "1.5rem", listStyle: "none" },
  navLink: { textDecoration: "none", color: "#eee9e9ff", fontWeight: 500 },
  header: { color: "white", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem", backgroundColor: "#0F2027" },
  mainSection: { padding: "4rem 2rem", backgroundColor: "#0F2027", color:"White" },
  flexDiv: { display: "flex", flexWrap: "wrap", gap: "2rem" },
  footer: { backgroundColor: "#222", color: "#fff", padding: "2rem", textAlign: "center" },
  socialIcons: { display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1rem" },
  btnPrimary: { backgroundColor: "#1e90ff", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 5, textDecoration: "none", display: "inline-block" },
  btnSecondary: { backgroundColor: "#fff", color: "#1e90ff", padding: "0.75rem 1.5rem", borderRadius: 5, textDecoration: "none", display: "inline-block", border: "2px solid #1e90ff" },
};

const App = () => {
  return (
    <Box>
      {/* NAVBAR */}
      <Box component="nav" sx={styles.nav}>
        <Box display="flex" alignItems="center" gap={2}>
          <img src="/logo/DekuSMS-Dark.png" alt="DekuSMS Logo" width={150} />
        </Box>
     
<ul style={styles.navLinks}>
  <li><a href="#" style={styles.navLink}>Home</a></li>
  <li><a href="#" style={styles.navLink}>Documentation</a></li>
  <li><a href="#" style={styles.navLink}>Donate </a></li>
  <li>
    <a 
      href="https://github.com/your-repo" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ ...styles.navLink, display: "flex", alignItems: "center", gap: "0.25rem" }}
    >
      <FaGithub size={20} /> GitHub
    </a>
  </li>
</ul>

      </Box>

      {/* HEADER */}
      {/* MAIN CONTENT */}
      <Box component="main">
            {/* DIVISION 1 */}
        <Box sx={{ ...styles.mainSection, display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }}>
          <Box flex={1} minWidth={300}>
            <Typography variant="h4" fontWeight="bold">How we make things happen!</Typography>
            <Box sx={{ height: 3, width: 50, backgroundColor: "#1e90ff", mb: 2 }}></Box>
            <Typography paragraph>
              The purpose of lorem ipsum is to create a natural looking block of text that doesn't distract from the layout...
            </Typography>
            <Typography paragraph>
              The passage experienced a surge in popularity during the 1960s...
            </Typography>
          </Box>
          <Box flex={1} minWidth={300}>
            <img src="/Home.png" alt="Automotive" style={{ width: "30%", borderRadius: 10 }} />
          </Box>
        </Box>

        {/* DIVISION 2 */}
        <Box sx={{ ...styles.mainSection, display: "flex", flexWrap: "wrap", gap: 4 }}>
          <Box flex={1} minWidth={300}>
            <Typography variant="h4" fontWeight="bold">Our History</Typography>
            <Typography paragraph>
              The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets...
            </Typography>
            <a href="#">Some text goes here...</a>
          </Box>
          <Box flex={1} minWidth={300}>
            <Typography variant="h4" fontWeight="bold">Our Mission</Typography>
            <Typography paragraph>
              The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets...
            </Typography>
            <a href="#">Some text goes here...</a>
          </Box>
        </Box>

    

        {/* DIVISION 3 */}
        <Box sx={{ ...styles.mainSection, display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }}>
          <Box flex={1} minWidth={300}>
            <Typography variant="h4" fontWeight="bold">We always love to hear from you</Typography>
            <Typography paragraph>Reach out to us and let's talk about your business and what we can achieve together.</Typography>
          </Box>
          <Box flex={1} minWidth={300} display="flex" gap={2}>
            <Button sx={styles.btnSecondary}>Contact Us</Button>
            <Button sx={styles.btnPrimary}><FaPhone /> (0) 123 456789</Button>
          </Box>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box component="footer" sx={styles.footer}>
        <Box sx={styles.socialIcons}>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
        </Box>
        <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Terms & Conditions</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Cookie Policy</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>About Us</a>
        </Box>
        <Typography variant="body2" mt={2}>Copyright @ 2023 website name</Typography>
      </Box>



          {/* <Stack spacing={1} sx={{ position: "fixed", top: "50%", right: { xs: 8, sm: 24 }, transform: "translateY(-50%)", zIndex: 100 }}>
              {[
                { icon: <HomeIcon fontSize="large" />, color: "#fdd835", title: "Home" },
                { icon: <StarIcon fontSize="large" />, color: "#0288d1", title: "Feature" },
                { icon: <DownloadIcon fontSize="large" />, color: "#d81b60", title: "Download" },
              ].map((item, idx) => (
                <Tooltip key={idx} title={item.title} placement="right">
                  <IconButton
                    onClick={() => scrollToSection(idx)}
                    size="large"
                    sx={{
                      color: activeSection === idx ? item.color : "gray",
                      bgcolor: activeSection === idx ? "rgba(255,255,255,0.1)" : "transparent",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack> */}
    </Box>
  );
};

export default App;
