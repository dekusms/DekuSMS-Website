import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";


export default function App() {
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
}

// import React from 'react';
// import { ColorThemeProvider } from "./components/theme";
// import Navbar from "./components/Navbar";
// import Landing from "./components/Landing";
// import './i18n'; // import initialization script

// function App() {
//   return (
//     <ColorThemeProvider>
//       <Navbar />
//       <Landing />
//     </ColorThemeProvider>
//   );
// }
// export default App;
