import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        await axios.post("http://127.0.0.1:8000/api/tasks/", { title, completed: false });
        setTitle("");
        onTaskAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
