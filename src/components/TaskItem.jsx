const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <li className="flex justify-between items-center bg-white p-4 mb-2 shadow-sm rounded-md">
            <span
                className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
                onClick={() => onToggle(task.id)}
            >
                {task.title}
            </span>
            <button
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </li>
    );
};

export default TaskItem;
