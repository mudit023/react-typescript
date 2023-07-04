import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoCtxProvider from "./store/todo-context";

function App() {
  return (
    <TodoCtxProvider>
      <div>
        <Todos />
      </div>
      <div>
        <NewTodo />
      </div>
    </TodoCtxProvider>
  );
}

export default App;
