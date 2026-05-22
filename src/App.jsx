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
          primary: { main: "#2563eb" },
          background: {
            default: mode === "light" ? "#f8fafc" : "#020617",
            paper: mode === "light" ? "#ffffff" : "#0f172a"
          },
          text: {
            primary: mode === "light" ? "#0f172a" : "#f8fafc",
            secondary: mode === "light" ? "#475569" : "#94a3b8"
          }
        }
      }),
    [mode]
  );

  const toggleTheme = () => {
    const next = mode === "light" ? "dark" : "light";
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