import React from 'react';
import TodoList from './TodoList';

const Form = ({inputText, setInputText, todos, setTodos, priority, setPriority, status, setStatus}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    
    const priorityHandler = (e) => {
        console.log(e.target.value);
        setPriority(e.target.value);
    };
    const statusHandler = (e) => {
      console.log(e.target.value);
      setStatus(e.target.value);
    };
    const deleteHandler = (e) => {
      e.preventDefault();
      setTodos(todos.filter((el) => el.clickChoose === false));
    }
    const clearHandler = (e) => {
      e.preventDefault();
      setTodos(todos.filter((el) => el.id === ""));
    }

    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
          ...todos, { text: inputText, priority: priority, status: status, clickChoose: false, id: Math.random() * 100}
      ]);
      setStatus('');
      setInputText('');
      setPriority('');
  
  };
    return (
    <form>
        <div className="menu-control">
        <div >
          <label>Sort by:</label>
          <select className="sort">
            <option>Status</option>
            <option>Priority</option>
          </select>
        </div>
        <div>
          <label>Direction:</label>
          <select className="sort">
            <option>DESC</option>
            <option>ASC</option>
          </select>
        </div>
        <div>
          <label>Filter:</label>
          <input className="checkBoxFilter" type="checkbox" value=""/>
        </div>
        <div>
          <label>From:</label>
          <select  className="from-to-date">
            <option>1-4-2021</option>
            <option>30-4-2021</option>
          </select>
        </div>
        <div>
          <label>To:</label>
          <select  className="from-to-date">
            <option>1-5-2021</option>
            <option>30-5-2021</option>
          </select>
        </div>
        <div>
          <button className="btn" type = "submit">Apply</button>
        </div>
      </div>
      <div className="bodyControl">
      <div className = "rightDiv">
        <TodoList todos = {todos} setTodos = {setTodos}/>

      </div>
        <div className="leftDiv">
          <div>
            <label>Task:</label>
            <input  value = {inputText} onChange = {inputTextHandler} className="inputTask" type="text" placeholder = "Enter your task here"/>
          </div>
          <div className ="selectStatusPriority">
            <div className="selectDiv" >
              <label>Status:</label>
              <select  className="select" name ="status-select" onChange = {statusHandler}>
                <option  value = "done">Done</option>
                <option  value = "progress">Progress</option>
                <option  value = "pending">Pending</option>
              </select>
            </div>
            <div className="selectDiv">
              <label>Priority:</label>
              <select className="select" onChange = {priorityHandler}>
                <option value = "high">High</option>
                <option value = "medium">Medium</option>
                <option value = "low">Low</option>
              </select>
            </div>
          </div>
          <div className="buttonGroup">
          <button onClick = {deleteHandler} className="btn" style={{background: 'red', font: 'white', margin: 30, paddingLeft: 30}}>Delete</button>
          <button onClick = {clearHandler} className = "btn" >Clear</button>
          <button onClick = {submitTodoHandler} className="btn" style = {{marginLeft: 10}}type ="submit">Add new</button>
          </div>
        </div>
      </div>
    </form>
    );
}


export default Form;