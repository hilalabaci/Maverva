import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  ThemeProvider as SCThemeProvider,
  useTheme as SCuseTheme,
} from "styled-components";
import { darkTheme, lightTheme } from "../components/theme";

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const databaseMode = localStorage.getItem("mode");
    if (databaseMode) setMode(databaseMode);
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const updateMode = (mode) => {
    localStorage.setItem("mode", mode);
    setMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ changeMode: updateMode, mode: mode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = SCuseTheme();
  const { changeMode, mode } = useContext(ThemeContext);
  return { theme, changeMode, mode };
}

export default ThemeProvider;
