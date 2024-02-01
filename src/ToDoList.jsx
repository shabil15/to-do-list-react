import React, { useState,useEffect } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("TodoItems"))||[]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  function HandleInputChange(event) {

    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
    
    setTasks((t) => [...t, { text: newTask, completed: false }]);
    setNewTask("");
    }
  }

  function deleteTask(index) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      if (index === editIndex) {
        setEditIndex(null);
        setEditedTask("");
      }
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);

      if (index === editIndex) {
        setEditIndex(index - 1);
      }
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);

      if (index === editIndex) {
        setEditIndex(index + 1);
      }
    }
  }

  function startEditing(index, task) {
    setEditIndex(index);
    setEditedTask(task.text);
  }

  function finishEditing(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditedTask("");
  }

  useEffect(() => {
    localStorage.setItem("TodoItems", JSON.stringify(tasks));
}, [tasks]);

function handleCompleteTask(index, event) {
  const updatedTasks = tasks.map((task, i) =>
    i === index ? { ...task, completed: event.target.checked } : task
  );
  setTasks(updatedTasks);
}


  return (
    <div className="ToDoList">
      <div className="container">
        <h1> To Do List</h1>

        <div>
          <input
            type="text"
            className="add-input"
            placeholder="Enter a Task..."
            value={newTask}
            onChange={HandleInputChange}
          />

          <button className="add-button" onClick={addTask}>
          <img className="button-img" id="add-button" src="src/assets/icons8-add-button-60.png"></img>
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
               
              {editIndex === index ? (
                <input
                  type="text"
                  className="edit-input"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
              ) : (
                <>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={(event) => handleCompleteTask(index, event)}
              />
              {task.completed ? (
                                    <span className="text">
                                        <del>{task.text}</del>{" "}
                                    </span>
                                ) : (
                                    <span className="text">{task.text}</span>
                                )}
                </>
              )}
              
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                <img
                  className="button-img"
                  src="src/assets/icons8-trash-can-96.png"
                ></img>
              </button>
              {editIndex === index ? (
                <button
                  className="edit-button"
                  onClick={() => finishEditing(index)}
                >
                  <img
                    className="button-img"
                    src="src/assets/icons8-save-64.png"
                  ></img>
                </button>
              ) : (
                <button
                  className="edit-button"
                  onClick={() => startEditing(index, task)}
                >
                  <img
                    className="button-img"
                    src="src/assets/icons8-edit-64.png"
                  ></img>
                </button>
              )}
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                <img
                  className="button-img"
                  src="src/assets/icons8-up-64.png"
                ></img>
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                <img
                  className="button-img"
                  src="src/assets/icons8-down-64.png"
                ></img>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
