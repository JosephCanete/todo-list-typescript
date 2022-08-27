import { Routes as MyRoutes, Route } from "react-router-dom";
import AddTodo from "../pages/AddTodo";
import Todos from "../pages/Todos";
import About from "../pages/About";

export default function Routes() {
  return (
    <MyRoutes>
      <Route path="/" element={<AddTodo />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/about" element={<About />} />
    </MyRoutes>
  );
}
