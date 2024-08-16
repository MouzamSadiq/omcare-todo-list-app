import {
  createContext,
  useContext,
  ReactNode,
  FC,
  useState,
  useMemo,
} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface CustomThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a CustomThemeProvider"
    );
  }
  return context;
};

export const CustomThemeProvider = (children) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
