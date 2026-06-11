import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { isRTL } from "./i18n/rtl";

export default function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme-pref") || "dark"
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    const handleDirection = (lng) => {
      document.documentElement.dir = isRTL(lng) ? "rtl" : "ltr";
      document.documentElement.lang = lng;
    };

    handleDirection(i18n.language);

    i18n.on("languageChanged", handleDirection);

    return () => {
      i18n.off("languageChanged", handleDirection);
    };
  }, [i18n]);

  useEffect(() => {
    const syncLanguage = (event) => {
      if (event.key === "i18nextLng" && event.newValue) {
        i18n.changeLanguage(event.newValue);
      }
    };

    window.addEventListener("storage", syncLanguage);
    return () => window.removeEventListener("storage", syncLanguage);
  }, [i18n]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#2ED3B7" },
          background: {
            default: mode === "dark" ? "#07141A" : "#EEF2F7",
            paper: mode === "dark" ? "#0D1117" : "#F8FAFC",
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem("theme-pref", next);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} />
      <Landing />
    </ThemeProvider>
  );
}