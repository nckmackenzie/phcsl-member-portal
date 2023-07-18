import { useTheme } from '../context/ThemeContext';
export function useColors() {
  const { isDarkMode } = useTheme();

  const textColor = isDarkMode ? 'text-dark-text' : 'text-light-text';
  const bgColor = isDarkMode ? 'bg-dark-bg' : 'bg-light-bg';

  return { textColor, bgColor };
}
