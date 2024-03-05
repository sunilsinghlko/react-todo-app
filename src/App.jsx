import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import TodoItemsContextProvider from "./store/todo-items-store";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <Container>
          <center className="todo-container">
            <AppName />
            <AddTodo />
            <WelcomeMsg></WelcomeMsg>
            <TodoItems></TodoItems>
          </center>
        </Container>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
