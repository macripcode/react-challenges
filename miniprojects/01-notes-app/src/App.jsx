import { useState } from "react";

import TodoList from "./TodoList"


import { v4 as uuidv4 } from 'uuid';
import './styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {'id':uuidv4() ,'text':inputValue};
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  function handleDeleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <div className="input-container">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
