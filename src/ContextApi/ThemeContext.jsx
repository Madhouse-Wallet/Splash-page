import React, { createContext, useState, useEffect, useContext } from "react";

// Default theme variables
const themeVariables = {
  light: {
    // Backgrounds
    backgroundColor: "#FAFAFA",
    backgroundCard: "#FFFFFF",
    backgroundSecondary: "#F5F5F5",

    // Text colors
    textColor: "#1F1F1F",
    textPrimary: "#1F1F1F",
    textSecondary: "#6B6B6B",
    textTertiary: "#9E9E9E",

    // Brand colors
    primaryColor: "#E2682B",
    primaryDark: "#D15722",
    primaryLight: "#FF7B3D",

    // UI elements
    borderColor: "#E0E0E0",
    borderLight: "#F0F0F0",
    cardBg: "#FFFFFF",
    cardBorder: "#E0E0E0",

    // Buttons
    buttonBg: "#E2682B",
    buttonText: "#FFFFFF",
    buttonSecondaryBg: "transparent",
    buttonSecondaryText: "#E2682B",
    buttonSecondaryBorder: "#E2682B",

    // Header/Footer (dark in light theme for better button contrast)
    headerBg: "rgba(29, 28, 37, 0.95)",
    headerText: "#FFFFFF",
    footerBg: "#1D1C25",
    footerText: "#9CA3AF",

    // Shadows
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowHover: "rgba(226, 104, 43, 0.15)",
  },
  dark: {
    // Backgrounds
    backgroundColor: "#0A0915",
    backgroundCard: "#1D1C25",
    backgroundSecondary: "#252038",

    // Text colors
    textColor: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    textTertiary: "#6B7280",

    // Brand colors
    primaryColor: "#E2682B",
    primaryDark: "#D15722",
    primaryLight: "#FF7B3D",

    // UI elements
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderLight: "rgba(255, 255, 255, 0.05)",
    cardBg: "rgba(255, 255, 255, 0.03)",
    cardBorder: "rgba(255, 255, 255, 0.08)",

    // Buttons
    buttonBg: "#E2682B",
    buttonText: "#FFFFFF",
    buttonSecondaryBg: "#252038",
    buttonSecondaryText: "#FFFFFF",
    buttonSecondaryBorder: "transparent",

    // Header/Footer
    headerBg: "rgba(255, 255, 255, 0.09)",
    headerText: "#FFFFFF",
    footerBg: "#1D1C25",
    footerText: "#8E8D92",

    // Shadows
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowHover: "rgba(226, 104, 43, 0.3)",
  },
};

// Create the context
const ThemeContext = createContext(undefined);

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  // Initialize theme (use 'light' by default or localStorage value)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light";
  });

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  // Apply the theme variables to the root element
  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const currentTheme = themeVariables[theme];

      Object.entries(currentTheme).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for Theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
