// App.jsx
import { useTheme } from './ThemeContext';  // Importar el hook del tema
import ThemeToggler from './ThemeToggler';  // Componente que alterna el tema
import './styles/App.css';

function App() {
  const { theme } = useTheme(); // Obtener el estado del tema

  const appStyle = {
    backgroundColor: theme === 'dark' ? '#333' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
    transition: 'background-color 0.3s, color 0.3s', // Transición suave
  };

  return (
    <div className="app" style={appStyle}>
      <h1>Theme Switcher Example</h1>
      <ThemeToggler />
    </div>
  );
}

export default App;
