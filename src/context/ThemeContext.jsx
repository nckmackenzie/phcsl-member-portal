import { createContext, useContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const ThemeContext = createContext();

const ThemeProvider = function ({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'DarkMode');

  function toggleTheme() {
    setIsDarkMode(isDark => !isDark);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('ThemeContext used outside ThemeProvider');

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useTheme };
