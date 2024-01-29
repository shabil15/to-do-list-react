import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
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
          className = 'add-input'
          placeholder="Enter a Task..."
          value={newTask}
          onChange={HandleInputChange}
        />

        <button className="add-button" onClick={addTask}>
        <img className="button-img" src="src/assets/icons8-add-button-60.png"></img>
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
            <img className="button-img" src="src/assets/icons8-trash-can-96.png"></img>
            </button>
            <button className="moveUp-button" onClick={() => moveTaskUp(index)}>
            <img className="button-img" src="src/assets/icons8-up-64.png"></img>
            </button>
            <button
              className="moveDown-button"
              onClick={() => moveTaskDown(index)}
            >
              <img className="button-img" src="src/assets/icons8-down-64.png"></img>
            </button>
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
}

export default ToDoList;
