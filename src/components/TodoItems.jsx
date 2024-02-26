import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const {todoItems,DeleteItem} = useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.date}
            DeleteItem={DeleteItem}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
