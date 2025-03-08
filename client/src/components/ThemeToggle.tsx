import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDark(savedTheme === "dark" || (!savedTheme && prefersDark));
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm border border-primary/10 hover:bg-primary/5 dark:bg-primary/20 dark:hover:bg-primary/30"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 dark:text-primary-foreground" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-primary-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}