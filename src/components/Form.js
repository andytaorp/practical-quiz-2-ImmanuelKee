import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      status: false,
    }

    onAddTask(newItem);

    setDescription("");
  };

  function handleDescChange(e) {
    const updatedDesc = e.target.value;
    setDescription(updatedDesc);
  }

  return (
    /*TODO: add a form to add a new task*/
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        placeholder="New Task..."
        onChange={handleDescChange}
      />
      <button type="submit">Add Task</button>  
    </form>
  );
}
