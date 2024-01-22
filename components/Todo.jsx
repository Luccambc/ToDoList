const Todo = ({ todo, removeTask, doneTask }) => {
  return (
    <div
      className="todo"
      key={todo.id}
      style={{ textDecoration: todo.isDone ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
      </div>
      <div>
        <button className="check" onClick={() => doneTask(todo.id)}>
          ✓
        </button>
        <button className="delete" onClick={() => removeTask(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
