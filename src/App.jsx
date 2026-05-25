import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { dictionary } from "./i18n/dictionary";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export default function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme-pref") || "light"
  );
  const [lang, setLang] = useState("en");

  const t = useMemo(() => dictionary[lang], [lang]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#07141A" },
          background: {
            default: mode === "light" ?"#020617" : "#f8fafc",
            paper: mode === "light" ?   "#0f172a" : "#ffffff"
          },
          text: {
            primary: mode === "light" ? "#f8fafc" : "#0f172a" ,
            secondary: mode === "light" ?  "#94a3b8" : "#475569" 
          }
        }
      }),
    [mode]
  );

  const toggleTheme = () => {
    const next = mode === "dark" ? "light" : "dark" ;
    setMode(next);
    localStorage.setItem("theme-pref", next);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        mode={mode}
        toggleTheme={toggleTheme}
      />

      <Landing t={t} />

    </ThemeProvider>
  );
}