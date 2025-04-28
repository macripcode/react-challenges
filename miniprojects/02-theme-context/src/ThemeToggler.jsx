// ThemeToggler.jsx
import { useTheme } from './ThemeContext'; // Importar el hook de contexto

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme(); // Obtener el estado del tema y la función toggle

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
