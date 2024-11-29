import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    // TODO: write code to add a new task
    setTasks((prevItems) => [...prevItems, newTask]);
  };

  const handleToggleTask = (id) => {
    // TODO: write code to toggle a task's status
    setTasks((prevItems) => 
      prevItems.map((task) => 
      task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    // TODO: write code to delete a task
    setTasks((prevItems) => prevItems.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      {/*TODO: add a form to add a new task*/}
      <Form onAddTask={handleAddTask} />
      {/*TODO: add a list of tasks*/}
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
    </div>
  );
}

export default App;
