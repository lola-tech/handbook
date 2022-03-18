import { createContext, useContext } from 'react';

export const themes = {
  dark: 'dark',
  light: 'light',
};

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: (theme: string) => {},
});

export const useTheme = () => useContext(ThemeContext);
