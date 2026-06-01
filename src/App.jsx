import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { dictionary } from "./i18n/dictionary";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export default function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme-pref") || "dark"
  );
  const [lang, setLang] = useState("en");

  const t = useMemo(() => dictionary[lang], [lang]);


const theme = useMemo(
  () =>
    createTheme({
      palette: {
        mode,

        primary: {
          main: "#2ED3B7",
        },

        background: {
          default:
            mode === "dark"
              ? "#07141A"
              : "#EEF2F7",

          paper:
            mode === "dark"
              ? "#0D1117"
              : "#F8FAFC",
        },

        text: {
          primary:
            mode === "dark"
              ? "#F8FAFC"
              : "#0D1B8E",

          secondary:
            mode === "dark"
              ? "#94A3B8"
              : "#3D4E7A",
        },

        divider:
          mode === "dark"
            ? "rgba(255,255,255,0.08)"
            : "rgba(13,27,142,0.10)",
      },

      typography: {
        fontFamily: "'Ubuntu', sans-serif",

        h1: {
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 700,
        },

        h2: {
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 700,
        },

        h3: {
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 700,
        },
      },

      shape: {
        borderRadius: 16,
      },
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


