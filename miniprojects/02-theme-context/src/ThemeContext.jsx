// ThemeContext.jsx
import { createContext, useState, useContext } from "react";

// Crear el contexto para el tema
export const ThemeContext = createContext();

// Crear el proveedor del tema
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Estado para el tema

  // Función para alternar entre light y dark
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook para consumir el contexto
export function useTheme() {
  return useContext(ThemeContext);
}
