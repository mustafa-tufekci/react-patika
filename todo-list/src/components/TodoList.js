import React from "react";

const TodoList = ({ todos, destroyTodo, handleComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          className={todo.completed ? "completed" : ""}
          id={todo.id}
          key={todo.id}
        >
          <div className="view">
            <input className="toggle" type="checkbox" onClick={() => handleComplete(todo.id)} defaultChecked={todo.completed ? "checked" : ""} />
            <label>{todo.name}</label>
            <button
              className="destroy"
              onClick={() => destroyTodo(todo.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
