import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{ id: 1, value: "todo 1" }]);

  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([...todos, { id: todos.length + 1, value: value }]);
    }
  }
  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />

      <TodoList listOfTodos={todos} />
    </>
  );
}

export default App;
