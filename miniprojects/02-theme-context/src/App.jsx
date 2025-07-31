// App.jsx
import { useTheme } from './ThemeContext'; 
import ThemeToggler from './ThemeToggler';  
import './styles/App.css';

function App() {
  const { theme } = useTheme(); 

  const appStyle = {
    backgroundColor: theme === 'dark' ? '#333' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
    transition: 'background-color 0.3s, color 0.3s', 
  };

  return (
    <div className="app" style={appStyle}>
      <h1>Theme Switcher Example</h1>
      <ThemeToggler />
    </div>
  );
}

export default App;
