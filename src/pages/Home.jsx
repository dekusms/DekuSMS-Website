import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from '../components/FeaturesSection';
import Download from  "../components/Download";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className="home">
            <Navbar />
            <Hero />
          <FeaturesSection />
              {/* <Download /> */}
        
        </section>
    );
};

export default Home;






// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   IconButton,
//   Typography,
//   Button,
//   Stack,
//   Link,
// } from "@mui/material";
// import {
//   Home as HomeIcon,
//   Star as FeatureIcon,
//   Download as DownloadIcon,
//   HelpOutline as FaqIcon,
// } from "@mui/icons-material";

// export default function PageNavigator() {
//   const [active, setActive] = useState(0);

//   const pages = [
//     {
//       id: "landing",
//       color: "#2c3e50",
//       icon: <HomeIcon fontSize="inherit" />,
//       content: (
//         <Grid
//           container
//           spacing={4}
//           alignItems="center"
//           justifyContent="center"
//           sx={{ px: 6 }}
//         >
        
//           <Grid item xs={12} md={6}>
//             <Box
//               component="img"
//               src="/Home.png"
//               alt="Landing"
//               sx={{
//                 width: "10%",
//                 borderRadius: 3,
//                 boxShadow: 4,
//               }}
//             />
//           </Grid>

        
//           <Grid item xs={12} md={6}>
//             <Typography variant="h3" fontWeight="bold" gutterBottom>
//               Welcome to Our App
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 3, maxWidth: 500 }}>
//               Discover a seamless experience with our platform — designed to
//               simplify your workflow, enhance productivity, and connect you with
//               the tools you need.
//             </Typography>
//             <Stack direction="row" spacing={2}>
//               <Button variant="contained" color="primary">
//                 Get Started
//               </Button>
//               <Button variant="outlined" color="inherit">
//                 Learn More
//               </Button>
//             </Stack>
//           </Grid>
//         </Grid>
//       ),
//     },

//     {
//       id: "features",
//       color: "#e74c3c",
//       icon: <FeatureIcon fontSize="inherit" />,
//       content: (
//         <Grid
//           container
//           spacing={4}
//           justifyContent="center"
//           alignItems="center"
//           sx={{ px: 6 }}
//         >
//           {[
//             { title: "Fast", desc: "Blazing-fast performance you can rely on." },
//             { title: "Secure", desc: "Your data stays safe and protected." },
//             { title: "Responsive", desc: "Optimized for any device size." },
//             { title: "Customizable", desc: "Easily adaptable to your needs." },
//           ].map((feature, i) => (
//             <Grid item xs={12} sm={6} md={3} key={i}>
//               <Box
//                 sx={{
//                   textAlign: "center",
//                   p: 3,
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   background: "rgba(255,255,255,0.1)",
//                   transition: "transform 0.3s",
//                   "&:hover": { transform: "translateY(-6px)" },
//                 }}
//               >
//                 <Typography variant="h5" fontWeight="bold" gutterBottom>
//                   {feature.title}
//                 </Typography>
//                 <Typography variant="body2">{feature.desc}</Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       ),
//     },

//     {
//       id: "download",
//       color: "#f1c40f",
//       icon: <DownloadIcon fontSize="inherit" />,
//       content: (
//         <Grid
//           container
//           spacing={4}
//           alignItems="center"
//           justifyContent="center"
//           sx={{ px: 6 }}
//         >
    
//           <Grid item xs={12} md={6}>
//             <Typography variant="h3" fontWeight="bold" gutterBottom>
//               Download Our App
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 3 }}>
//               Get the app for your platform and start exploring all the features
//               today.
//             </Typography>
//           </Grid>

   
//           <Grid item xs={12} md={6}>
//             <Stack spacing={2}>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 sx={{ background: "#000", "&:hover": { background: "#111" } }}
//               >
//                 Download for Windows
//               </Button>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 sx={{ background: "#000", "&:hover": { background: "#111" } }}
//               >
//                 Download for macOS
//               </Button>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 sx={{ background: "#000", "&:hover": { background: "#111" } }}
//               >
//                 Download for Linux
//               </Button>
//             </Stack>
//           </Grid>
//         </Grid>
//       ),
//     },

//     {
//       id: "faq",
//       color: "#9b59b6",
//       icon: <FaqIcon fontSize="inherit" />,
//       content: (
//         <Box sx={{ px: 6, py: 8, maxWidth: 900, mx: "auto" }}>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             Frequently Asked Questions
//           </Typography>
//           <Stack spacing={3}>
//             {[
//               {
//                 q: "How do I install the app?",
//                 a: "Simply download your platform version above and follow the setup instructions.",
//               },
//               {
//                 q: "Is the app free?",
//                 a: "Yes! It’s free to use with optional premium features.",
//               },
//               {
//                 q: "Can I use it offline?",
//                 a: "Yes, most features work offline after initial setup.",
//               },
//             ].map((faq, i) => (
//               <Box key={i}>
//                 <Typography variant="h6" gutterBottom>
//                   {faq.q}
//                 </Typography>
//                 <Typography variant="body2" sx={{ opacity: 0.9 }}>
//                   {faq.a}
//                 </Typography>
//               </Box>
//             ))}
//           </Stack>
//         </Box>
//       ),
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "100vh",
//         overflow: "hidden",
//         position: "relative",
//         color: "#fff",
//         fontFamily: "'Open Sans', 'Lato', 'Helvetica', sans-serif",
//       }}
//     >
 
//       <Stack
//         sx={{
//           position: "fixed",
//           top: 0,
//           bottom: 0,
//           right: 0,
//           width: "10%",
//           justifyContent: "center",
//           alignItems: "center",
//           zIndex: 10,
//         }}
//         spacing={2}
//       >
//         {pages.map((page, index) => (
//           <IconButton
//             key={page.id}
//             color="inherit"
//             onClick={() => setActive(index)}
//             sx={{
//               transition: "all 0.5s ease-out",
//               transform:
//                 active === index
//                   ? "scale(1.2)"
//                   : active !== 0
//                   ? "scale(0.6)"
//                   : "scale(1)",
//               opacity: active === index ? 1 : 0.7,
//               "&:hover": { opacity: 0.5 },
//               fontSize: "32px",
//             }}
//           >
//             {page.icon}
//           </IconButton>
//         ))}
//       </Stack>

     
//       {pages.map((page, index) => (
//         <Box
//           key={page.id}
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: page.color,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             transform:
//               active === index
//                 ? "translateX(0)"
//                 : index < active
//                 ? "translateX(-190%)"
//                 : "translateX(200%)",
//             transition:
//               "all 0.8s cubic-bezier(0.54, 0.35, 0.29, 0.99), background 0.8s",
//           }}
//         >
//           {page.content}
//         </Box>
//       ))}
//     </Box>
//   );
// }
