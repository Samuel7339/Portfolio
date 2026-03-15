import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utlis";

export const ThemeToggle = () => {

  const [isDarkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // default dark
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-2 md:top-5 right-2 md:right-5 z-50 rounded-4 transition-colors-300 cursor-pointer",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};