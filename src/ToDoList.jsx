import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat BreakFast",
    "Take shower",
    "Eat the dinner",
  ]);
  const [newTask, setNewTask] = useState("");

  function HandleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="ToDoList">
        <div className="container">
      <h1> To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={HandleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="moveUp-button" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button
              className="moveDown-button"
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
}

export default ToDoList;
