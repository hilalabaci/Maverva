import React, { createContext, useContext, useMemo, useState } from "react";
import {
  ThemeProvider as SCThemeProvider,
  useTheme as SCuseTheme,
} from "styled-components";
import { darkTheme, lightTheme } from "../components/theme";

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  return (
    <ThemeContext.Provider value={{ setMode, mode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = SCuseTheme();
  const { setMode, mode } = useContext(ThemeContext);
  return { theme, setMode, mode };
}

export default ThemeProvider;
