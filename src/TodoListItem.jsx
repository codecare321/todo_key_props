import { PropTypes } from "prop-types";
import { memo } from "react";
import "./TodoListItem.css";
function TodoListItem({ todo, onDelete }) {
  return (
    <>
      <div className="todolist d-flex">
        <li className="listOfItem">{todo.value}</li>
        <button
          onClick={() => {
            onDelete(todo.value);
          }}
          className="deleteButton"
        >
          X
        </button>
      </div>
    </>
  );
}

export default memo(TodoListItem);

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
