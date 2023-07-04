import { useState, createContext, ReactNode } from "react";
import Todo from "../models/Todo";

export type TodoType = {
  todos: Todo[];
  addTodo: (data: string) => void;
  removeTodo: (data: number) => void;
};

type Prop = {
  children: ReactNode;
};

let idCount = 0;

export const TodoCtx = createContext<TodoType>({
  todos: [],
  addTodo: (_text: string) => {},
  removeTodo: (_id: number) => {},
});

const TodoCtxProvider = ({ children }: Prop) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (noteText: string) => {
    const newTodo = new Todo(noteText, idCount);
    idCount++;
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const providerValue: TodoType = {
    todos: todos,
    addTodo: onAddTodo,
    removeTodo: deleteTodoHandler,
  };

  return <TodoCtx.Provider value={providerValue}>{children}</TodoCtx.Provider>;
};

export default TodoCtxProvider;
