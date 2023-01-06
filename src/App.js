import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([
    {
      text: "Task 1",
      isCompleted: false
    },
    {
      text: "Task 2",
      isCompleted: false
    },
    {
      text: "Task 3",
      isCompleted: false
    }
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleAddTask() {
    const newTasks = [...tasks, { text: newTaskText, isCompleted: false }];
    setTasks(newTasks);
    setNewTaskText("");
  }

  function handleCompleteTask(index) {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  }

  function handleDeleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none"
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleCompleteTask(index)}>
              Mark as Complete
            </button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default TodoApp;

