import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AddUserTodo } from "../utils/apiurls";

function TodoForm() {
    const [title,setTitle]=useState("")
    const HandleSumbit=(e)=>{
        e.preventDefault()
        sendItemToApi()
    }
    const sendItemToApi=async()=>{
        alert(title)
        fetch(AddUserTodo, {
          method: "POST",
          headers: {
            "access-control-allow-origin": "*",
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({ title: title }),
        })
          .then((response) => response.json())
          .catch((err) => console.error(err));
        
    }
  return (
    <Row>
      <Col></Col>
      <Col className="my-5 bg-dark rounded p-4">
        <h3 className="text-white text-center">Todo Form</h3>
        <Form onSubmit={HandleSumbit}>
          <Form.Group className="mb-3"  controlId="formBasicEmail">
            <Form.Label className="text-white bg-dark" style={{background:"red!important"}}>Add Item</Form.Label>
            <Form.Control type="text" value={title} placeholder="Enter Todo Item" onChange={(e)=>{setTitle(e.target.value)}} />
          </Form.Group>        
          <Button className="w-100" variant="primary" type="submit">
            Add New Item
          </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default TodoForm;
