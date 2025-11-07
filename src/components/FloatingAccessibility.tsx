import { Settings, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingAccessibility = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3">
      <div
        className="relative"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <button
          className="p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-card hover:shadow-hover hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110 group"
          aria-label="Accessibility settings"
          tabIndex={0}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Settings className="w-5 h-5" />
        </button>

        {showMenu && (
          <div className="absolute right-full mr-3 top-0 animate-fade-in">
            <button
              onClick={toggleTheme}
              className="p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-card hover:shadow-hover hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110 whitespace-nowrap flex items-center gap-2"
              aria-label="Toggle theme"
              tabIndex={0}
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-5 h-5" />
                  <span className="text-sm font-medium">Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-5 h-5" />
                  <span className="text-sm font-medium">Light Mode</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingAccessibility;
