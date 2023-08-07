import "./App.css";
import React, { useState } from "react";
import { TodoTable } from "./Components/TodoTable";
import { NewTodoForm } from "./Components/NewTodoForm";

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Learn Java",
      rowAssigned: "Himanshu Maheshwari",
    },
    {
      rowNumber: 2,
      rowDescription: "Learn React",
      rowAssigned: "Deepanshu Maheshwari",
    },
    {
      rowNumber: 3,
      rowDescription: "Learn SpringBoot",
      rowAssigned: "Alex wiese",
    },
    {
      rowNumber: 4,
      rowDescription: "Learn DSA",
      rowAssigned: "Himanshu Maheshwari",
    },
  ]);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
};
