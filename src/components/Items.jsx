

import React from "react";

export default function Items({ todos, setTodos }) {
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="items">
      <h2>My Items</h2>
      <ol>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <button className="delete" onClick={() => handleDelete(index)}>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

