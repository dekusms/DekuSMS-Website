import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ColorThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("midnight");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);