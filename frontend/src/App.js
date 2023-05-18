import Todo from './pages/Todo';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import ContactUS from './components/ContactUS';
function App() {
  return (
  //   <Container>
  // {/* Header component code */}
     
  //     <Router>
  //       <header>
  //         <Header />
  //       </header>
        
  //       <Routes path="/">
  //         <Home />
  //       </Routes>      </Router>
  //     <h1>Todo List</h1>
  //     <Todo/>
  //     <Home/>
  //     <ContactUS/>
      // </Container>

      <Container>
        <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/todo' element={<Todo />} />
        <Route exact path='/contactus' element={<ContactUS />} />

      </Routes>      
      </Container>
  );
}

export default App;
