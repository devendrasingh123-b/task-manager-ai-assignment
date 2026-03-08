// AI-generated, reviewed and modified

import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async (status = "") => {
    let url = "http://localhost:3000/tasks";

    if (status && status !== "all") {
      url += `?status=${status}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks(filter);
  }, [filter]);

  return (
  <div className="app-container">

    <h1>Task Manager</h1>

    <TaskForm refresh={fetchTasks} />

    <Filter setFilter={setFilter} />

    <TaskList tasks={tasks} refresh={fetchTasks} />

  </div>
)
}

export default App;