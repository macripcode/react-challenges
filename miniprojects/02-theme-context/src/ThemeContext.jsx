// ThemeContext.jsx
import { createContext, useState, useContext } from "react";


export const ThemeContext = createContext();


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Estado para el tema

  
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  return useContext(ThemeContext);
}
