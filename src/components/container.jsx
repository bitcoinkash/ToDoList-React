import React, { useState } from 'react';
import Items from './Items';
import Form from './Form';

export default function Container() {
  const [todos, setTodos] = useState([]);


  return (
    <div id="app">
      <h1>My Todo 🗒️</h1>
      <div className="container">
        <Form  setTodos={setTodos} />
        <Items todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
