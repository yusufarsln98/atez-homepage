"use client";

import React from "react";

import { THEME } from "./Theme.config";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, _] = React.useState(THEME.light);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
