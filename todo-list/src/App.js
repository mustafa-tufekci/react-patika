import "./App.css";
import { useState, useEffect } from "react";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const DUMMY_TODOS = [
  {
    id: "e1",
    name: "wash your hand",
    completed: false,
  },
  {
    id: "e2",
    name: "hello there",
    completed: false,
  },
  {
    id: "e3",
    name: "general kenobi",
    completed: false,
  },
  {
    id: "e4",
    name: "blablabla",
    completed: false,
  },
  {
    id: "e5",
    name: "Anakin",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([todo, ...todos]);
    console.log(todos);
  };

  useEffect(() => {
    const reference = JSON.parse(localStorage.getItem("todos"));

    if (reference) {
      setTodos(reference);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((todos) => {
      return todos.filter((item) => item.id != id);
    });
  };

  const handleComplete = (id) => {
    let changedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(changedTodo);
  };

  return (
    <section className="todoapp">
      <TodoForm onAddTodo={addTodoHandler} />
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label>Mark all as complete</label>
        <TodoList todos={todos} destroyTodo={removeTodo} handleComplete={handleComplete}/>
      </section>
      <TodoFooter />
    </section>
  );
}

export default App;
