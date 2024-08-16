import { CssBaseline } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ReactNode, createContext, useMemo, useState } from "react";

// Define the shape of the context
type ThemeContextType = {
  switchColorMode: () => void;
  mode: "light" | "dark";
};

// Define the props for the ThemeContextProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Create the ThemeContext with default values
export const ThemeContext = createContext<ThemeContextType>({
  switchColorMode: () => {},
  mode: "light",
});

// ThemeContextProvider component to provide theme context to its children
export function ThemeContextProvider({ children }: ThemeProviderProps) {
  // State to manage the current theme mode
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Function to toggle between light and dark mode
  const switchColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Memoize the theme object to avoid unnecessary recalculations
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "light" ? "#ffff" : "#25273c",
          },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "light" ? "#ffffff" : "#25273c", // Background color based on mode
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ switchColorMode, mode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}
