import { useTheme } from '../context/ThemeContext';
export function useColors() {
  const { isDarkMode } = useTheme();

  const textColor = isDarkMode ? 'text-light-text' : 'text-dark-text';
  const bgColor = isDarkMode ? 'bg-light-bg' : 'bg-dark-bg';

  return { textColor, bgColor };
}
