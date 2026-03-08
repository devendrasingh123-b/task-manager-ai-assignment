// AI-generated, reviewed and modified

import { useState } from "react";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, priority }),
    });

    setTitle("");

    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;