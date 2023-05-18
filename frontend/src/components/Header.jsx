import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header() {
  return (
    <>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="mx-3" to="/">Home</Link>
            <Link className="mx-2" to="/todo">Todo</Link>
            <Link to="/contactus">Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Header;
