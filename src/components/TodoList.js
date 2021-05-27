import React from 'react';
import Todo from './Todo';
const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="listToDo">
        {/* <ol className="todo-list"> */}
          {todos.map(todo => (
              <Todo setTodos = {setTodos} todo = {todo} todos = {todos} key = {todo.id} text = {todo.text} />
          ))}
        {/* </ol> */}
        </div>
    );
}

export default TodoList;