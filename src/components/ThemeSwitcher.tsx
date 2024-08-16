import { Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContextProvider";
import Brightness7Icon from "@mui/icons-material/Brightness4";

const ThemeSwitcher = () => {
  // Access the current theme mode and the function to switch modes from the context
  const { mode, switchColorMode } = useContext(ThemeContext);

  return (
    <>
      {/* Display the current theme mode */}
      <Typography aria-label="Enable Feature" component="label">
        {mode}
      </Typography>
      {/* Switch component to toggle between light and dark mode */}
      <Switch
        checked={mode === "dark"}
        onChange={switchColorMode}
        checkedIcon={<Brightness7Icon />}
      />
    </>
  );
};

export default ThemeSwitcher;
