import React from "react";

const todoFooter = ({ filtered }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>2 </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" onClick={(event) => filtered(event)}>All</a>
        </li>
        <li>
          <a onClick={(event) => filtered(event.target.value)}>Active</a>
        </li>
        <li>
          <a onClick={(event) => filtered(event.target.value)}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default todoFooter;
