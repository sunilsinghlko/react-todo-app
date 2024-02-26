import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function WelcomeMsg() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className="text-center text-danger">
      {todoItems.length === 0 && <h4 className="fw-bold">"Enjoy Your Day"</h4>}
    </div>
  );
}

export default WelcomeMsg;
