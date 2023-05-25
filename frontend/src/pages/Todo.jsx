import React, { useEffect,useState } from "react";
  import { toast } from "react-toastify";
import { GetUserTodo,DeleteUserTodo,SingleUserTodo} from "../utils/apiurls";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { getTodolist } from "../utils/apiCalls";
function Todo() {
  const [todolist, setTodolist] = useState([]);
  const [singleItem,setSingleItem]=useState({});
  const [isEdit,setIsEdit]=useState(false)

  //Delete TodoItem
  const HandleDeleteItem = (id) => {
    deleteTodoItemApiCall(id);
  };

  const deleteTodoItemApiCall = async (id) => {
    try {
      const res = await fetch(`${DeleteUserTodo}/${id}`, {
        method: "DELETE",
      });
      toast.error("Item has been deleted from list", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      getTodolist();
    } catch (err) {
      console.log(err);
    }
  };

  //Edit Todo Item
  const GetSingleTodoItem = (id) => {
    getSingleItem(id)
  };


  //Getting single Todo item
  const getSingleItem = async (id) => {
    console.log("Function running");
    await fetch(`${SingleUserTodo}/${id}`, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setSingleItem(data))
      .catch((err) => console.error(err));
      setIsEdit(true)
  };

  //get full Todo Item List
  const getTodolist = async () => {
    console.log("Function running");
    await fetch(GetUserTodo, {
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

  useEffect(() => {
    getTodolist();
  }, []);

  return (
    <div>
      <TodoForm
        updateTodoList={getTodolist}
        isEdit={isEdit}
        singleItem={singleItem}
      />
      <TodoList
        mytodolist={todolist}
        onClickDelete={HandleDeleteItem}
        onClickEdit={GetSingleTodoItem}
      />
    </div>
  );
}

export default Todo;
