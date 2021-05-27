import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const clickChooseHandler = () => {
        setTodos(
            todos.map((item) => {
            if (item.id === todo.id){
                return {
                    ...item, clickChoose: !item.clickChoose 
                };
            }
            return item;
        }))
    }; 
    return (
        <div className = "todo">
            
                <li onClick={clickChooseHandler} className = {`list ${todo.priority} ${todo.status} ${todo.clickChoose ? "clickChoose" : ""}`}> {text} </li>
                {/* <button className ="check-button">click</button> */}
        </div>
    );
}

export default Todo;