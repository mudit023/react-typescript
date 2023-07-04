import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./css/Todos.module.css";
import { TodoCtx, TodoType } from "../store/todo-context";

const Todos: React.FC = () => {
  const ctx = useContext<TodoType>(TodoCtx);
  return (
    <ul className={classes.todos}>
      {ctx.todos.map((item, idx) => (
        <TodoItem id={item.id} key={idx}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
