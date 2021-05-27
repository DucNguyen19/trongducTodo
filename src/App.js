import Form from './components/Form';
import './App.css';
import {useState} from 'react';

import { Navbar, NavbarText} from 'reactstrap';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  
  return (
    <div className="App">
      <Navbar className="navHeader">
        <NavbarText className="textHeader">Task Manager</NavbarText>
        
      <h2>Hi, Duc<span>&#9660;</span></h2>
      </Navbar>
      
      <h1>My Task</h1>
      <Form status = {status} setStatus = {setStatus} todos = {todos} setTodos = {setTodos} inputText = {inputText} setInputText = {setInputText} priority = {priority} setPriority = {setPriority}/>
      
    </div>
  );
}

export default App;
