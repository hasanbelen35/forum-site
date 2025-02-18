import { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 pr-4 pl-4 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
    >
      {isDarkMode ? (
        <span className="text-xl text-white "><CiLight /></span>
      ) : (
        <span className="text-xl "><CiDark /></span>
      )}
    </button>
  );
};

export default ThemeSwitcher;
