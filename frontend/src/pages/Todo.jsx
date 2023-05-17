import React, { useEffect,useState } from "react";
import { BASEURL } from "../utils/apiurls";
import TodoList from "../components/TodoList";
function Todo() {
    const [todolist,setTodolist]=useState([])
  const getTodolist = () => {
    console.log("Function running");
    fetch(BASEURL, {
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
  
  return (
    <div>
      <button onClick={getTodolist}>Click Me</button>
      <TodoList mytodolist={todolist} />
    </div>
  );
}

export default Todo;
