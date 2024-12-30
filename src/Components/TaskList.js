import React from "react";
import TaskItem from "./TaskItem";


function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      ) : (
        <p>No tasks yet. Start by adding one!</p>
      )}
    </div>
  );
}

export default TaskList;
