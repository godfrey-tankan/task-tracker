import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./index.css";

const App = () => {
  const [reload, setReload] = useState(false);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={() => setReload(!reload)} />
      <TaskList reload={reload} />
    </div>
  );
};

export default App;
