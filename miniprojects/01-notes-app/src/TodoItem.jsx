
function TodoItem({ id, text, onDelete }) {
    
    return (
      <li key={id} className="todo-item">
        <p style={{ color: 'black' }}>{text}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
  
  export default TodoItem;