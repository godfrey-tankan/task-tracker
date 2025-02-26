import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const TaskList = ({ reload }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/tasks/")
            .then(response => setTasks(response.data))
            .catch(error => console.error("Error fetching tasks:", error));
    }, [reload]); // Reloads when new task is added

    const deleteTask = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`);
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = async (id) => {
        const task = tasks.find(t => t.id === id);
        await axios.put(`http://127.0.0.1:8000/api/tasks/${id}/`, { ...task, completed: !task.completed });
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
