import { createContext } from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme?: () => void;
}

export const themeInitialState = {
  isDark: false,
};

export const ThemeContext = createContext<IThemeContext>(themeInitialState);
