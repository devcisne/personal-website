import { createContext } from "react";

// Define default context value with proper typing
const ThemeContext = createContext({
  isDarkModeEnabled: false,
  setDarkModeEnabled: () => {},
});

export default ThemeContext;
