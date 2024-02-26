import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { FaDeleteLeft } from "react-icons/fa6";
function TodoItem(props) {
  const { DeleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container mb-2">
      <div className="row justify-content-between  pt-2 pt-2 fw-bold rounded w-75">
        <div className="col-4">{props.todoName}</div>
        <div className="col-4">{props.todoDate}</div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-danger "
            onClick={() => {
              DeleteItem(props.todoName);
            }}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
