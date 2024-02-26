import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import { TodoItemsContext } from "./store/todo-items-store";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
function App() {
  let [todoItems, settodoItem] = useState([]);
  const addNewItem = (itemName, DueDate) => {
    settodoItem((currValue) => {
      const newTodoItem = [...currValue, { name: itemName, date: DueDate }];
      return newTodoItem;
    });
  };
  const DeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => {
      return item.name !== todoItemName;
    });
    settodoItem(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          DeleteItem: DeleteItem,
        }}
      >
        <Container>
          <center className="todo-container">
            <AppName />
            <AddTodo/>
            <WelcomeMsg></WelcomeMsg>
            <TodoItems></TodoItems>
          </center>
        </Container>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
