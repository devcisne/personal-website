import { createContext } from "react";

interface ThemeContextType {
  isDarkModeEnabled: boolean;
  setDarkModeEnabled: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkModeEnabled: false,
  setDarkModeEnabled: () => {},
});

export default ThemeContext;
export type { ThemeContextType };
