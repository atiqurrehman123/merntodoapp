import React, { useEffect,useState } from "react";
import { BASEURL ,GetUserTodo} from "../utils/apiurls";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
function Todo() {
    const [todolist,setTodolist]=useState([])
  const getTodolist = () => {
    console.log("Function running");
    fetch(GetUserTodo, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setTodolist(data))
      .catch((err) => console.error(err));
  };
  useEffect(()=>{
    getTodolist();
  },[])
  return (
    <div>
      <TodoForm/>
      <TodoList mytodolist={todolist} />
    </div>
  );
}

export default Todo;
