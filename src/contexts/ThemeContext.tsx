import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import {
  ThemeProvider as SCThemeProvider,
  useTheme as SCuseTheme,
} from "styled-components";
import { darkTheme, lightTheme } from "../theme";

type ThemeProviderProps = PropsWithChildren;
type ThemeContextType = {
  mode: Mode;
  changeMode: (mode: Mode) => void;
};

type Mode = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  changeMode: () => {},
});

function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const databaseMode = localStorage.getItem("mode") as Mode;
    if (databaseMode) setMode(databaseMode);
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const updateMode = (mode: Mode) => {
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
