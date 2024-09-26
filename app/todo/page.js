"use client";
import React, { useState } from "react";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: todoInput, completed: false },
    ]);
    setTodoInput("");
  };

  const deleteTodo = (e, id) => {
    e.stopPropagation();
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <h1>Todo list</h1>
      <input onChange={handleInput} value={todoInput}></input>
      <button onClick={handleTodo}>Valider</button>

      <ul>
        {todos.map((todo) => (
          <li
            onClick={() => handleCompleted(todo.id)}
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={(e) => deleteTodo(e, todo.id)}>Effacer</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
