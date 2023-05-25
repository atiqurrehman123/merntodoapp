import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AddUserTodo,UpdateUserTodo } from "../utils/apiurls";
import { toast } from "react-toastify";

function TodoForm({ updateTodoList, isEdit, singleItem }) {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const HandleSumbit = (e) => {
    e.preventDefault();
    sendItemToApi();
  };
  const sendItemToApi = async () => {
    await fetch(AddUserTodo, {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ title: title }),
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
    toast.success("New Todo item added Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    updateTodoList();
    setTitle("");
  };

  // PUT request using fetch with async/await

  const updateTodoItem=async()=> {
  
     await fetch(`${UpdateUserTodo}/${id}`, {
      method: "PUT",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ title: title }),
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
    toast.success("New Todo item added Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    updateTodoList();
    setTitle("");
  }

  useEffect(() => {
    if (isEdit) {
      setTitle(singleItem.title);
      setId(singleItem._id);
    }
  }, [singleItem]);
  return (
    <Row>
      <Col md={4} sm={12}></Col>
      <Col md={4} sm={12} className="my-5 bg-dark rounded p-4">
        <h3 className="text-white text-center">Todo Form</h3>
        <Form onSubmit={isEdit ?updateTodoItem : HandleSumbit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              className="text-white bg-dark"
              style={{ background: "red!important" }}
            >
              {isEdit ? "Edit Item" : " Add Item"}
            </Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Enter Todo Item"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            {isEdit ? "Edit" : "Add"} Item
          </Button>
        </Form>
      </Col>
      <Col md={4} sm={12}></Col>
    </Row>
  );
}

export default TodoForm;
