"use client";
import { useState } from "react";
import Selector from "../../components/Selector";
import Todo from "../../components/Todo";
import TodoForm from "../../components/TodoForm";
import "../../styles/globals.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Reger 12:30",
      isDone: false,
    },
    {
      id: 2,
      text: "Fazer post no insta",
      isDone: false,
    },
    {
      id: 3,
      text: "Montar grade do semestre",
      isDone: false,
    },
  ]);

  const [statusTask, setStatusTask] = useState("all" as string);

  const addTask = (text: any) => {
    const newTasks = [
      ...todos,
      { id: Math.floor(Math.random() * 10000), text, isDone: false },
    ];

    setTodos(newTasks);
  };

  const removeTask = (id: any) => {
    const newTasks = [...todos];
    const filtredTasks = newTasks.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filtredTasks);
  };

  const doneTask = (id: any) => {
    const newTasks = [...todos];
    newTasks.map((todo) =>
      todo.id === id ? (todo.isDone = !todo.isDone) : todo
    );
    setTodos(newTasks);
  };

  function incompleteTasks() {
    return todos.length - todos.filter((todo) => todo.isDone).length;
  }

  const clearAllTasks = () => {
    const newTasks = [...todos];
    const filtredTasks = newTasks.filter((todo) => todo.id);

    setTodos([]);
  };

  const clearFinishedTasks = () => {
    const newTasks = todos.filter((todo) => !todo.isDone);
    setTodos(newTasks);
  };

  return (
    <div className="home">
      <h1 className="titulo">To-Do Tasks</h1>
      <Selector statusTask={statusTask} setStatusTask={setStatusTask} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            statusTask == "all"
              ? true
              : statusTask === "done"
              ? todo.isDone
              : !todo.isDone
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          ))}
      </div>
      <div className="todo-footer">
        <p>{incompleteTasks()} tarefa(s) restantes</p>
        <div className="clean-buttons">
          <button
            className="delete-finished-tasks"
            onClick={() => clearAllTasks()}
          >
            Limpar Tudo
          </button>
          <button
            className="delete-finished-tasks"
            onClick={() => clearFinishedTasks()}
          >
            Limpar ✓
          </button>
        </div>
      </div>

      <TodoForm addTask={addTask} />
    </div>
  );
}
