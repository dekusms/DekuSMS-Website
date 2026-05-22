import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ThemeContext = createContext();

const THEMES = {
  midnight: {
    gradient: "linear-gradient(135deg, #07141A 0%, #020B12 100%)",
    text: "#FFFFFF",
    secondary: "rgba(255,255,255,0.72)",
    surface: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
  },

  ocean: {
    gradient: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
    text: "#FFFFFF",
    secondary: "rgba(255,255,255,0.75)",
    surface: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
  },

  sunset: {
    gradient: "linear-gradient(135deg, #2b1055 0%, #7597de 100%)",
    text: "#FFFFFF",
    secondary: "rgba(255,255,255,0.78)",
    surface: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },

  forest: {
    gradient: "linear-gradient(135deg, #0B3D2E 0%, #14532D 100%)",
    text: "#FFFFFF",
    secondary: "rgba(255,255,255,0.75)",
    surface: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
  },
};

export const ColorThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme-mode") || "system"
  );

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const activeThemeKey = useMemo(() => {
    if (mode === "system") {
      return prefersDarkMode ? "midnight" : "sunset";
    }
    return mode;
  }, [mode, prefersDarkMode]);

  const activeTheme = THEMES[activeThemeKey];

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: { main: "#2ED3B7" },
          background: {
            default: activeTheme.gradient,
            paper: activeTheme.surface,
          },
          text: {
            primary: activeTheme.text,
            secondary: activeTheme.secondary,
          },
        },
      }),
    [activeTheme]
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode, activeThemeKey }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);