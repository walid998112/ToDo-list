import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../App.css"

function TaskItem({ task, deleteTask, toggleTaskCompletion }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "400px",
        margin: "10px auto",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: task.completed ? "#d4edda" : "#f8d7da",
      }}
    >
      {/* Task Text */}
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>

      {/* Icons */}
      <div style={{ display: "flex", gap: "10px" }}>
        {/* Tick Icon */}
        <FontAwesomeIcon
          icon={faCheck}
          style={{
            color: task.completed ? "#28a745" : "#ffc107",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={() => toggleTaskCompletion(task.id)}
          title={task.completed ? "Completed" : "Mark as Complete"}
        />

        {/* Trashcan Icon */}
        <FontAwesomeIcon
          icon={faTrash}
          style={{
            color: "#dc3545",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={() => deleteTask(task.id)}
          title="Delete Task"
        />
      </div>
    </div>
  );
}

export default TaskItem;
