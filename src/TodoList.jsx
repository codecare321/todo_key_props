import { PropTypes } from "prop-types";
import TodoListItem from "./TodoListItem";
import { useCallback } from "react";
function TodoList({ listOfTodos, onDeleteTodo }) {
  function deleteTodo(value) {
    console.log(value);
    onDeleteTodo?.(value);
  }

  const memoDeleteCallback = useCallback(deleteTodo, [onDeleteTodo]);
  return (
    <>
      <ol>
        {listOfTodos?.map((todo) => {
          return (
            <TodoListItem
              key={todo.value}
              todo={todo}
              onDelete={memoDeleteCallback}
            />
          );
        })}
      </ol>
    </>
  );
}

export default TodoList;

TodoList.propTypes = {
  listOfTodos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
