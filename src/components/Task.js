import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, onToggleTask, onDeleteTask }) {
    return (
        <li style={{overflow: "hidden"}}>
          <input type="checkbox" checked={task.status} onChange={() => onToggleTask(task.id)} />
          <span style={{textDecoration: task.status ? "line-through" : ""}}>
            {task.description}
          </span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
    );
}
