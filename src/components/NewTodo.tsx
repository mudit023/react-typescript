import { useRef, useContext } from "react";
import classes from "./css/NewTodo.module.css";
import { TodoCtx, TodoType } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const ctx = useContext<TodoType>(TodoCtx);
  const text = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const data = text.current!.value.trim();
    if (data.length === 0) {
      return;
    }
    ctx.addTodo(data);
    text.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="noteText">ToDo</label>
      <input type="text" name="text" id="noteText" ref={text} />
      <button type="submit">Add</button>
    </form>
  );
};
export default NewTodo;
