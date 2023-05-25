import Todo from './pages/Todo';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import ContactUS from './components/ContactUS';
function App() {
  return (
      <Container className='bg-primary'>
        <ToastContainer/>
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
