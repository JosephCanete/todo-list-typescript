import { todoInterface } from "../features/todo";
import { useSelector } from "react-redux";

export default function Todos() {
  const todo = useSelector((state: todoInterface) => state.todo.value);
  console.log(todo);

  return (
    <div>
      <h1>Welcome to Todo App with Redux Toolkit</h1>
      <h4>Title: {todo.title}</h4>
      <h5>Time: {todo.time}</h5>
      <h6>Status: {todo.status}</h6>
    </div>
  );
}
