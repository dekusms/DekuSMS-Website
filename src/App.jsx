import React, { useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import BrandResources from "./components/BrandResources";
import { isRTL } from "./i18n/rtl";

const BODY_FONT = "var(--font-body)";
const HEADING_FONT = "var(--font-heading)";

const heading = { fontFamily: HEADING_FONT, letterSpacing: "normal" };

const theme = createTheme({
  typography: {
    fontFamily: BODY_FONT,
    h1: heading,
    h2: heading,
    h3: heading,
    h4: heading,
    h5: heading,
    h6: heading,
  },
  palette: {
    mode: "dark",
    primary: { main: "#2ED3B7" },
    background: {
      default: "#07141A",
      paper: "#0D1117",
    },
  },
});

export default function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/brand-resources" element={<BrandResources />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}