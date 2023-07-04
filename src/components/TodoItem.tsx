import React, { ReactNode, useContext } from "react";
import classes from "./css/TodoItem.module.css";
import { TodoCtx, TodoType } from "../store/todo-context";
type Props = {
  children: ReactNode;
  id: number;
};

const TodoItem: React.FC<Props> = (props) => {
  const ctx = useContext<TodoType>(TodoCtx);
  const deleteHandler = (id: number) => {
    ctx.removeTodo(id);
  };
  return (
    <li className={classes.item}>
      <div>
        <b>{props.id}</b>
        <p>{props.children}</p>
      </div>
      <button
        type="button"
        className={classes.delete}
        onClick={() => deleteHandler(props.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
