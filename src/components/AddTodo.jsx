import React, { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  // let [newTodo, setnewTodo] = useState([""]);
  // let [dueDate, setdueDate] = useState([""]);
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  // const handleNameChange = (e) => {
  //   setnewTodo(e.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (e) => {
  //   setdueDate(e.target.value);
  // };
  const handleAddButton = (e) => {
    e.preventDefault(); // prevent krta h default behaviour ko
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // setdueDate("");
    // setnewTodo("");
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleAddButton}>
        <div className="row g-0">
          <div className=" col-md-7 mb-2">
            <input
              type="text"
              // onChange={handleNameChange}
              ref={todoNameElement}
              // value={newTodo}
              placeholder="Enter your todo here.."
              className=" text-start rounded p-2 fs-5 w-100"
            />
          </div>
          <div className="col-md-3 mb-2 mt-1">
            <input
              type="date"
              ref={dueDateElement}
              className=" text-center rounded w-75 p-2"
              // value={dueDate}
              // onChange={handleDateChange}
            />
          </div>
          <div className="col-md-2 mt-1">
            <button type="submit" className="btn btn-success w-50 fw-bold  ">
              Add
            </button>
          </div>
        </div>
      </form>
      <br />
    </div>
  );
}

export default AddTodo;
