import React from "react";

export const List = ({ todos }) => {
  const lists = todos.map(todo => {
    return (
      <li>
        #{todo.id} {todo.title}
      </li>
    );
  });

  return <h2>{lists}</h2>;
};
