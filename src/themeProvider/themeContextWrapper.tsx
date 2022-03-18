import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './themeContext';

export default function ThemeContextWrapper(props: any) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme: string) {
    setTheme(theme);
  }

  useEffect(() => {
    if (theme === 'dark') {
      // Set value of  darkmode to dark
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      // Set value of  darkmode to light
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    );
    // Set initial darkmode to light
    setTheme(initialColorValue === 'dark' ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
