import { PropTypes } from "prop-types";
function TodoListItem({ todo }) {
  return (
    <>
      <li>{todo.value}</li>
    </>
  );
}

export default TodoListItem;

TodoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
};
