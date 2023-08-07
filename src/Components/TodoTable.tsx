import React from "react";
import { TodoRowItem } from "./TodoRowItem";

export const TodoTable: React.FC<{
  todos: TodoModel[];
  deleteTodo: Function;
}> = (props) => {
  return (
    <table className=" table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};
