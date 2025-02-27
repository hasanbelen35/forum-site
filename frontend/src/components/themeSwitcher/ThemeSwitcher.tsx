import { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); 

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedTheme);

    if (savedTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      localStorage.setItem('dark-mode', isDarkMode.toString());
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  if (isDarkMode === null) return null; 

  return (
    <button
      onClick={toggleTheme}
      className="p-2 pr-4 pl-4 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
    >
      {isDarkMode ? (
        <span className="text-xl text-white"><CiLight /></span>
      ) : (
        <span className="text-xl"><CiDark /></span>
      )}
    </button>
  );
};

export default ThemeSwitcher;
