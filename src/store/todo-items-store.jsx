import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  DeleteItem: () => {},
});

const todoItemsReducers = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItem,
      { name: action.payload.itemName, date: action.payload.DueDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItems = currTodoItem.filter((item) => {
      return item.name !== action.payload.itemName;
    });
  }
  return newTodoItems;
};
const TodoItemsContextProvider = ({ children }) => {
  // let [todoItems, settodoItem] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducers, []);
  const addNewItem = (itemName, DueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        DueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    /* settodoItem((currValue) => {
    const newTodoItem = [...currValue, { name: itemName, date: DueDate }];
    return newTodoItem;
  });*/
  };
  const DeleteItem = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(newItemAction);
    /*const newTodoItems = todoItems.filter((item) => {
    return item.name !== todoItemName;
  });
  settodoItem(newTodoItems);*/
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        DeleteItem: DeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
