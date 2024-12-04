import { useCallback, useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{ value: "todo 1" }]);

  function onTodoDelete(value) {
    const newTodos = todos.filter((todo) => todo.value !== value);
    console.log(newTodos);

    //array.filter return new array
    setTodos(newTodos);
  }

  const deleteMemoCallback = useCallback(onTodoDelete, [todos]);

  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([...todos, { value }]);
    }
  }
  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />

      <TodoList listOfTodos={todos} onDeleteTodo={deleteMemoCallback} />
    </>
  );
}

export default App;
