import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

const THEMES = {
  dark: {
    gradient: "linear-gradient(135deg, #07141A 0%, #020B12 100%)",
    text: "#FFFFFF",
    secondary: "rgba(255,255,255,0.72)",
    surface: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
  },

  light: {
    gradient: "linear-gradient(135deg, #EEF2F7 0%, #FFFFFF 100%)",
    text: "#0F172A",
    secondary: "rgba(15,23,42,0.65)",
    surface: "#FFFFFF",
    border: "rgba(15,23,42,0.08)",
  },
};

export const ColorThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme-pref") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme-pref", mode);
  }, [mode]);

  const activeTheme = THEMES[mode] || THEMES.dark;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === "dark" ? "dark" : "light",
          primary: { main: "#2ED3B7" },

          background: {
            default: activeTheme.gradient,
            paper: activeTheme.surface,
          },

          text: {
            primary: activeTheme.text,
            secondary: activeTheme.secondary,
          },

          divider: activeTheme.border,
        },
      }),
    [mode, activeTheme]
  );

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);