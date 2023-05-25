import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
function TodoList(props) {
    const { mytodolist, onClickDelete, onClickEdit } = props;
  return ( 
    <div >
      <ListGroup className='my-3'>
        <ListGroup.Item className="text-center  text-primary bg-dark">
          Todo List
        </ListGroup.Item>
        {mytodolist.map((item) => {
        return (
          <ListGroup.Item variant="primary" key={item._id}>
            <Row>
              <Col md={8}> {item.title}</Col>
              <Col md={2}>
                <div className="bg-warning text-center">
                <AiFillDelete color="red" style={{ cursor: "pointer" }} onClick={()=>{onClickDelete(item._id)}}/>
                </div>
              </Col>
              <Col md={2}>
                <div className="bg-success text-center">
                  <AiFillEdit color="blue" style={{ cursor: "pointer" }} onClick={()=>{onClickEdit(item._id)}}/>
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        );
        })}
      </ListGroup>
    </div>
  );
}

export default TodoList
