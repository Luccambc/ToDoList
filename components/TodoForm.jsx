import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa..."
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default TodoForm;
