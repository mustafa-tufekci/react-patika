import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      id: Date.now(),
      name: enteredTodo,
      completed: false
    };
    
    onAddTodo(todoData);
    setEnteredTodo("");
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={todoChangeHandler}
          value={enteredTodo}
        />
      </form>
    </header>
  );
};

export default TodoForm;
