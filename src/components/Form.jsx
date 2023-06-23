import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ setFormTodos }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: input,
      completed: false,
    };
    setFormTodos((currentTodos) => [...currentTodos, newTodo]);
    setInput("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add Item</h2>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={input}
        className="form-control"
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
