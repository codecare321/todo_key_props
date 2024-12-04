import { PropTypes } from "prop-types";
import TodoListItem from "./TodoListItem";
function TodoList({ listOfTodos }) {
  return (
    <>
      <ol>
        {listOfTodos?.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
      </ol>
    </>
  );
}

export default TodoList;

TodoList.propTypes = {
  listOfTodos: PropTypes.array.isRequired,
};
