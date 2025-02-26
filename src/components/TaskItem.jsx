import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.title}
            </span>
            <button onClick={() => onDelete(task.id)} style={{ color: "red" }}>❌</button>
        </li>
    );
};

export default TaskItem;
