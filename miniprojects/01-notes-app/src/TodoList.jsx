import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} onDelete={() => onDelete(todo.id)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
